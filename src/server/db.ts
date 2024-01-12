import { MongoClient } from 'mongodb';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { loadValidConfig } from './configuration';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';

// save favoriutes and return them to watch

export async function saveNewResult(newResult: Result): Promise<string> {
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

export async function readAllResults(): Promise<Result[]> {
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
