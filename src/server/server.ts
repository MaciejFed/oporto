// src/index.js
import express, { Request, Response } from 'express';
import { loadValidConfig } from './configuration';
import { generateAllPossibleExercises, generateExercisesForSessionAsync } from '../exercise/generator';
import bodyParser from 'body-parser';
import { findExampleSentence, MoveieExample } from '../io/file';
import { logger } from '../common/logger';
import { readAllResults, saveNewResult } from './db';
import { getProgressAggregate, ProgressAggregate } from '../service/progress/progress-aggregate';
import { sortExercises } from '../priority/priority';
import { Person, wordDatabase } from '../repository/exercises-repository';
import { checkStandardConjugation } from '../service/verb/verb';
import { IN_PROGRESS_LIMIT_MAP } from '../priority/types/exercise-base-word-progress-limit/exercise-base-word-progress-limit';
import { Language } from '../common/language';

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

let cachedExercisesPt: any[] = [];
let cachedAggregate: ProgressAggregate;

const preFetchAggregate = async () => {
  logger.info('Refreshing Aggregate...');
  const exercises = generateAllPossibleExercises(Language.Portuguese);
  const results = await readAllResults(Language.Portuguese);
  cachedAggregate = getProgressAggregate(results, exercises);
};

const preFetch = async () => {
  try {
    if (cachedExercisesPt.length <= 10) {
      const results = await readAllResults(Language.Portuguese);
      cachedExercisesPt = await generateExercisesForSessionAsync(50, true, () => true, Language.Portuguese, results);
      logger.info(`Saved exercises to cache ${new Date()}`);
    } else {
      logger.info(`Cache still has [${cachedExercisesPt.length}] exercises - skipping refresh.`);
    }
  } catch (e) {
    logger.error('error refreshng cache', e);
  }
};

setInterval(() => {
  preFetchAggregate();
}, 10000000);

setInterval(() => {
  preFetch();
}, 90000);

const getLanguage = (req: Request) => {
  switch (req.params.role.toLowerCase()) {
    case Language.Portuguese.toLowerCase():
      return Language.Portuguese;
    case Language.German.toLowerCase():
      return Language.German;
    default:
      throw new Error(`Unknown Language: [${req.params.language}]`);
  }
}

app.get('/:language/results', async (req: Request, res: Response) => {
  const language = getLanguage(req);
  const results = await readAllResults(Language.Portuguese);
  res.send(results);
});

app.get('/learn/verb', async (_req: Request, res: Response) => {
  if (!cachedAggregate) {
    await preFetchAggregate();
  }
  const { VERB } = IN_PROGRESS_LIMIT_MAP;
  const findMissingPoints = (word: string) => {
    return cachedAggregate.pointsMissing.find((pm) => pm.baseWord === word)?.pointsMissing || 0;
  };
  const sortPointsMissing = (a: string, b: string) => findMissingPoints(b) - findMissingPoints(a);
  const verbs = cachedAggregate.words.VERB.IN_PROGRESS.baseWords.slice(0, VERB).sort(sortPointsMissing);
  const toLearn = verbs.map((verb) => {
    // @ts-ignore
    const verbBase = wordDatabase.verb(verb);
    const conjugation = checkStandardConjugation(verbBase.infinitive);
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
  const exercises = generateAllPossibleExercises(language);
  const results = await readAllResults(language);
  const { exercisesWithPriorities } = sortExercises(exercises, results, language);
  exercisesWithPriorities.flatMap((ep) => ep.priorities);
  res.send(exercisesWithPriorities);
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
    res.send(cachedExercisesPt.splice(0, 10));
  } catch (e) {
    logger.error('Error generating exercises', 3);
  }
});

app.post('/:language/example/find', async (req: Request, res: Response) => {
  const { word } = req.body;
  try {
    const language = getLanguage(req);
    const example = await findExampleSentence(250000, word, language);
    res.send(example);
  } catch (e) {
    logger.error('Error finding examples', e);
    const empty: MoveieExample = {
      portuguese: ['', ''],
      english: '',
      englishApi: ''
    };
    res.send(empty);
  }
});

app.listen(port, async () => {
  logger.info('Starting server...');
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
