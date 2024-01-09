// src/index.js
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { loadValidConfig } from './configuration';
import { Result } from '../service/result';
import { generateExercisesForSessionAsync } from '../exercise/generator';
import bodyParser from 'body-parser';
import { findExampleSentence } from '../io/file';
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

    console.log(`Insered new result=[${insertedResult.insertedId}]`);

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
    console.log('Connected successfully to server');

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
    if (!cachedExercises.length) {
      cachedExercises = await generateExercisesForSessionAsync(5, true, () => true);
      logger.info(`Saved exercises to cache ${new Date()}`);
    } else {
      logger.info('Is already refreshing - skipping');
    }
  } catch (e) {
    logger.error('error refreshng cache', e);
  } finally {
  }
};

setInterval(() => {
  preFetch();
}, 30000);

app.get('/results', async (_req: Request, res: Response) => {
  const results = await readAllResults();
  res.send(results);
});

app.post('/results/save', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const resultId = await saveNewResult(req.body);
    res.send(resultId);
  } catch (e) {
    console.log('Error saving exercises');
  }
});

app.get('/generate/local', async (_req: Request, res: Response) => {
  try {
    res.send(cachedExercises);
    cachedExercises = [];
  } catch (e) {
    console.log('Error generating exercises');
  }
});

app.post('/example/find', async (req: Request, res: Response) => {
  const { word } = req.body;
  const example = await findExampleSentence(250000, word);

  res.send(example);
});

app.listen(port, async () => {
  await preFetch();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
