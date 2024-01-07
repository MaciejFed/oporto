// src/index.js
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { loadValidConfig } from './configuration';
import { Result } from '../service/result';
import { generateExercisesForSessionAsync } from '../exercise/generator';
import bodyParser from 'body-parser';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';

const client = new MongoClient(config.dbHost, {
  auth: {
    username: config.dbUsername,
    password: config.dbPassword
  }
});

async function saveNewResult(newResult: Result): Promise<string> {
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('tmp');
    const insertedResult = await collection.insertOne(newResult);

    console.log(`Insered new result=[${insertedResult.insertedId}]`);

    return insertedResult.insertedId.toString();
  } finally {
    await client.close();
  }
}

async function readAllResults(): Promise<Result[]> {
  try {
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const findResult = await collection.find<Result>({}).toArray();

    return findResult;
  } finally {
    await client.close();
  }
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
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
  cachedExercises = await generateExercisesForSessionAsync(5, true, () => true);
  console.log(`Saved exercises to cache ${new Date()}`);
};

app.get('/results', async (_req: Request, res: Response) => {
  const results = await readAllResults();
  res.send(results);
});

app.post('/results/save', async (req: Request, res: Response) => {
  console.log(req);
  const resultId = await saveNewResult(req.body);
  res.send(resultId);
});

app.get('/generate/local', async (_req: Request, res: Response) => {
  preFetch();
  res.json(cachedExercises);
});



app.listen(port, async () => {
  await preFetch();
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
