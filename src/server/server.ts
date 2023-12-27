// src/index.js
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { loadValidConfig } from './configuration';
import { Result } from '../service/result';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';

const client = new MongoClient(config.dbHost, {
  auth: {
    username: config.dbUsername,
    password: config.dbPassword
  }
});

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

app.get('/results', async (_req: Request, res: Response) => {
  const results = await readAllResults();
  res.send(results);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
