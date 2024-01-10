// src/index.js
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { loadValidConfig } from './configuration';
import { Result } from '../service/result';
import { generateExercisesForSessionAsync } from '../exercise/generator';
import bodyParser from 'body-parser';
import { MoveieExample, findExampleSentence } from '../io/file';
import { logger } from '../common/logger';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';

async function saveNewResult(newResult: Result): Promise<string> {
  const client = new MongoClient(config.dbHost, {
    auth: {
      username: config.dbUsername,
      password: config.dbPassword
    }
  });
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const insertedResult = await collection.insertOne(newResult);

    logger.info(`Insered new result=[${insertedResult.insertedId}]`);

    return insertedResult.insertedId.toString();
  } finally {
    await client.close();
  }
}

async function readAllResults(): Promise<Result[]> {
  const client = new MongoClient(config.dbHost, {
    auth: {
      username: config.dbUsername,
      password: config.dbPassword
    }
  });
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const findResult = await collection.find<Result>({}).toArray();

    return findResult.filter((result) => result.exercise);
  } finally {
    await client.close();
  }
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

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

const preFetch = async () => {
  try {
    if (cachedExercises.length <= 10) {
      cachedExercises = await generateExercisesForSessionAsync(25, true, () => true);
      logger.info(`Saved exercises to cache ${new Date()}`);
    } else {
      logger.info(`Cache still has [${cachedExercises.length}] exercises - skipping refresh.`);
    }
  } catch (e) {
    logger.error('error refreshng cache', e);
  }
};

setInterval(() => {
  preFetch();
}, 90000);

app.get('/results', async (_req: Request, res: Response) => {
  const results = await readAllResults();
  res.send(results);
});

app.post('/results/save', async (req: Request, res: Response) => {
  try {
    logger.info(JSON.stringify(req.body));
    const resultId = await saveNewResult(req.body);
    res.send(resultId);
  } catch (e) {
    logger.error('Error saving exercises', e);
  }
});

app.get('/generate/local', async (_req: Request, res: Response) => {
  try {
    res.send(cachedExercises.splice(0, 5));
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
  logger.info(`Starting server...`);
  await preFetch();
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
