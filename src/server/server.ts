// src/index.js
import express, { Request, Response } from 'express';
import { loadValidConfig } from './configuration';
import { generateAllPossibleExercises, generateExercisesForSessionAsync, shuffleArray } from '../exercise/generator';
import bodyParser from 'body-parser';
import { MovieExample } from '../io/file';
import { logger } from '../common/logger';
import { getExamples, getFrequencyMap, readAllResults, saveFavoriteExample, saveNewResult } from './db';
import { getProgressAggregate, ProgressAggregate } from '../service/progress/progress-aggregate';
import { sortExercises } from '../priority/priority';
import { Person, wordDatabase } from '../repository/exercises-repository';
import { checkStandardConjugation } from '../service/verb/verb';
import { Language } from '../common/language';
import { Exercise } from '../exercise/exercise';
import { selectMovieExample } from '../service/example-finder/select-movie-example';
import { getAudioForText } from './audio/audio';
import { createTable } from '../commands/stat';
import { DateTime } from 'luxon';
import path from 'path';
import os from 'os';
import { writeFileSync } from 'node:fs';
import { IN_PROGRESS_LIMIT_MAP } from '../service/limit/base-word-limit';
import { extractWordToFindFromExercise } from '../service/example-finder/example-finder';
import { TranslationExercise } from '../exercise/translation/translation-exercise';

const config = loadValidConfig();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

console.log('starting');

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Authorization header is missing');
  }
  if (token !== `Bearer ${config.apiKey}`) {
    return res.status(403).send('Unauthorized');
  }
  next();
});

const cachedExercises: Record<Language, Exercise[]> = {
  [Language.Portuguese]: [],
  [Language.German]: [],
  [Language.Polish]: []
};
let cachedAggregate: ProgressAggregate;

const preFetchAggregate = async () => {
  logger.info('Refreshing Aggregate...');
  const exercises = generateAllPossibleExercises(Language.Portuguese);
  const results = await readAllResults(Language.Portuguese);
  cachedAggregate = getProgressAggregate(results, exercises);
};

setInterval(() => {
  [Language.German, Language.Portuguese].forEach((language) => {
    readAllResults(language).then((results) => {
      const progressAggregate = getProgressAggregate(results, generateAllPossibleExercises(language));
      const date = DateTime.fromJSDate(new Date()).toISODate();
      const progressDir = path.join(os.homedir(), 'progress');
      writeFileSync(
        `${progressDir}/${language}.verbs.${date}`,
        createTable('Verbs', progressAggregate.words.VERB, results, language).render()
      );
      writeFileSync(
        `${progressDir}/${language}.nouns.${date}`,
        createTable('Nouns', progressAggregate.words.NOUN, results, language).render()
      );
      writeFileSync(
        `${progressDir}/${language}.adjectives.${date}`,
        createTable('Adjectives', progressAggregate.words.ADJECTIVE, results, language).render()
      );
      writeFileSync(
        `${progressDir}/${language}.others.${date}`,
        createTable('Others', progressAggregate.words.OTHER, results, language).render()
      );
    });
  });
}, 6 * 60 * 60 * 1000);
//
// setInterval(() => {
//   preFetchAggregate();
// }, 10000000);
//
// setInterval(() => {
//   preFetch(Language.Portuguese).then(() => {
//     preFetch(Language.German);
//   });
// }, 90000);

const getLanguage = (req: Request) => {
  switch (req.params.language.toLowerCase()) {
    case Language.Portuguese.toLowerCase():
      return Language.Portuguese;
    case Language.German.toLowerCase():
      return Language.German;
    case Language.Polish.toLowerCase():
      return Language.Polish;
    default:
      throw new Error(`Unknown Language: [${req.params.language}]`);
  }
};

const addMovieExample = async (exercise: Exercise, language: Language) => {
  try {
    const word = extractWordToFindFromExercise(exercise);
    if (word) {
      const examples = await getExamples(word, language);
      const exampleSelected = await selectMovieExample(examples, word);
      if (exampleSelected) {
        exercise.addMovieExample(exampleSelected);
      }
      return exercise;
    }
    return exercise;
  } catch (e: any) {
    return exercise;
  }
};

const addMovieExamples = async (exercises: Exercise[], language: Language) => {
  for (let i = 0; i < exercises.length; i++) {
    exercises[i] = await addMovieExample(exercises[i], language);
  }
  return exercises;
};

const generateRepeatExercises = async (count: number, language: Language) => {
  const results = await readAllResults(language);
  const frequency = await getFrequencyMap(language);
  const filter = (exercise: Exercise) => {
    const word = extractWordToFindFromExercise(exercise);
    if (word) {
      if (
        exercise instanceof TranslationExercise &&
        (exercise as TranslationExercise).isTranslationToPortugueseFromHearing()
      ) {
        return false;
      }
      const split = word.split(' ');
      return frequency[split.length === 2 ? split[1] : word].place < 500;
    }
    return false;
  };
  const exercises = await generateExercisesForSessionAsync(10, false, filter, language, results, frequency);
  return await addMovieExamples(exercises, language);
}



app.get('/:language/results', async (req: Request, res: Response) => {
  const language = getLanguage(req);
  const results = await readAllResults(language);
  res.send(results);
});

app.get('/learn/verb', async (_req: Request, res: Response) => {
  if (!cachedAggregate) {
    await preFetchAggregate();
  }
  const { VERB } = IN_PROGRESS_LIMIT_MAP.Portuguese;
  const findMissingPoints = (word: string) => {
    return cachedAggregate.pointsMissing.find((pm) => pm.baseWord === word)?.pointsMissing || 0;
  };
  const sortPointsMissing = (a: string, b: string) => findMissingPoints(b) - findMissingPoints(a);
  const verbs = cachedAggregate.words.VERB.IN_PROGRESS.baseWords.slice(0, VERB).sort(sortPointsMissing);
  const toLearn = verbs.map((verb) => {
    // @ts-ignore
    const verbBase = wordDatabase.verb(verb);
    const conjugation = checkStandardConjugation(verbBase.infinitive, []);
    const conjugations = Object.values(Person).map((person: Person) => {
      const firstCon = conjugation.verb.presentSimple![person];
      const first = firstCon.isStandard ? firstCon.conjugation : `@${firstCon.conjugation}`;
      let second = '';
      const pastPerfect = conjugation.verb.pastPerfect;
      if (pastPerfect) {
        second = pastPerfect[person].isStandard
          ? pastPerfect[person].conjugation
          : `@${pastPerfect[person].conjugation}`;
      }
      return {
        first,
        second
      };
    });
    return {
      infinitive: conjugation.verb.infinitive,
      conjugations
    };
  });
  res.send(toLearn);
});

app.get('/:language/priority', async (req: Request, res: Response) => {
  const language = getLanguage(req);
  const results = await readAllResults(language);
  const frequency = await getFrequencyMap(language);
  const exercises = await generateExercisesForSessionAsync(300, true, () => true, language, results, frequency);
  const { exercisesWithPriorities } = sortExercises(exercises, results, language);
  const response = exercisesWithPriorities.map((ep) => ({
    exercise: `[${ep.exercise.exerciseType}] [${ep.exercise.getBaseWordAsString()}]`,
    value: `[${ep.priorityValueTotal}] ${ep.priorities.map(
      (priority) => `${priority.priorityName} (${priority.priorityValue})`
    )}`
  }));
  res.send(response);
});

app.get('/:language/progress', async (req: Request, res: Response) => {
  const language = getLanguage(req);
  const exercises = generateAllPossibleExercises(language);
  const results = await readAllResults(language);
  const aggregate = getProgressAggregate(results, exercises);
  res.send(aggregate);
});

app.post('/:language/results/save', async (req: Request, res: Response) => {
  try {
    const language = getLanguage(req);
    logger.info(req.body.exercise);
    const resultId = await saveNewResult(req.body, language);
    res.send(resultId);
  } catch (e) {
    logger.error('Error saving exercises', e);
  }
});

app.get('/:language/generate/local', async (req: Request, res: Response) => {
  try {
    const language = getLanguage(req);
    const results = await readAllResults(language);
    const frequency = await getFrequencyMap(language);
    const exercises = await generateExercisesForSessionAsync(8, true, () => true, language, results, frequency);
    const withMovie = await addMovieExamples(exercises, language);
    const exercisesRepeat = await generateRepeatExercises(2, language);
    res.send(shuffleArray(withMovie.concat(exercisesRepeat)));
  } catch (e) {
    logger.error('Error generating exercises', 3);
  }
});

app.get('/:language/generate/local/repeat', async (req: Request, res: Response) => {
  try {
    const language = getLanguage(req);
    const exercises = generateRepeatExercises(10, language);
    res.send(exercises);
  } catch (e) {
    logger.error('Error generating exercises', 3);
  }
});

app.post('/:language/example/find', async (req: Request, res: Response) => {
  const { word } = req.body;
  try {
    const language = getLanguage(req);
    const examples = await getExamples(word, language);
    const exampleSelected = await selectMovieExample(examples, word);
    res.send(exampleSelected);
  } catch (e) {
    logger.error('Error finding examples', e);
    const empty: MovieExample = {
      word,
      wordStartIndex: 0,
      targetLanguage: '',
      english: '',
      englishApi: ''
    };
    res.send(empty);
  }
});

app.post('/:language/example/save', async (req: Request, res: Response) => {
  try {
    const language = getLanguage(req);
    const example = req.body;
    await saveFavoriteExample(language, example);
    res.send('done');
  } catch (e) {
    res.send('fail');
  }
});

app.post('/:language/audio', async (req, res) => {
  try {
    const language = getLanguage(req);
    const audio = await getAudioForText(language, req.body.text, req.body.rate, req.body.api);
    res.download(audio.path, 'audio.mp3', (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error sending audio');
      }
    });
  } catch (e) {
    logger.error(e);
    res.send('fail');
  }
});

app.listen(port, async () => {
  logger.info('Starting server...');
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
