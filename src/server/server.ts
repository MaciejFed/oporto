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

let cachedExercises: any[] = [];
let cachedAggregate: ProgressAggregate;

const preFetchAggregate = async () => {
  const exercises = generateAllPossibleExercises();
  const results = await readAllResults();
  cachedAggregate = getProgressAggregate(results, exercises);
};

const preFetch = async () => {
  try {
    if (cachedExercises.length <= 10) {
      const results = await readAllResults();
      cachedExercises = await generateExercisesForSessionAsync(50, true, () => true, results);
      logger.info(`Saved exercises to cache ${new Date()}`);
    } else {
      logger.info(`Cache still has [${cachedExercises.length}] exercises - skipping refresh.`);
    }
  } catch (e) {
    logger.error('error refreshng cache', e);
  }
};

preFetchAggregate();

setInterval(() => {
  preFetchAggregate();
  logger.info('Refreshing Aggregate...')
}, 10000000)

setInterval(() => {
  preFetch();
}, 90000);

app.get('/results', async (_req: Request, res: Response) => {
  const results = await readAllResults();
  res.send(results);
});

app.get('/learn/verb', async (_req: Request, res: Response) => {
  const verbs = cachedAggregate.words.VERB.IN_PROGRESS.baseWords.slice(0, 10);
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
    }
  });
  res.send(toLearn);
});

app.get('/priority', async (_req: Request, res: Response) => {
  const exercises = generateAllPossibleExercises();
  const results = await readAllResults();
  const { exercisesWithPriorities } = sortExercises(exercises, results);
  exercisesWithPriorities.flatMap((ep) => ep.priorities);
  res.send(exercisesWithPriorities);
});

app.get('/progress', async (_req: Request, res: Response) => {
  const exercises = generateAllPossibleExercises();
  const results = await readAllResults();
  const aggregate = getProgressAggregate(results, exercises);
  res.send(aggregate);
});

app.post('/results/save', async (req: Request, res: Response) => {
  try {
    logger.info(req.body.exercise);
    const resultId = await saveNewResult(req.body);
    res.send(resultId);
  } catch (e) {
    logger.error('Error saving exercises', e);
  }
});

app.get('/generate/local', async (_req: Request, res: Response) => {
  try {
    res.send(cachedExercises.splice(0, 10));
  } catch (e) {
    logger.error('Error generating exercises', 3);
  }
});

app.post('/example/find', async (req: Request, res: Response) => {
  const { word } = req.body;
  try {
    const example = await findExampleSentence(250000, word);
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
