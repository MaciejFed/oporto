import { MongoClient } from 'mongodb';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { loadValidConfig } from './configuration';
import { parseResults } from '../repository/result-repository';
import { Language } from '../common/language';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';
const collectionNameDE = 'results_de';

// save favoriutes and return them to watch

const getCollectionName = (language: Language) =>
  language === Language.Portuguese ? collectionName : collectionNameDE;

export async function saveNewResult(newResult: Result, language: Language): Promise<string> {
  const client = new MongoClient(config.dbHost, {
    auth: {
      username: config.dbUsername,
      password: config.dbPassword
    }
  });
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(getCollectionName(language));
    const insertedResult = await collection.insertOne(newResult);

    logger.info(`Insered new result=[${insertedResult.insertedId}]`);

    return insertedResult.insertedId.toString();
  } finally {
    await client.close();
  }
}

export async function readAllResults(language: Language): Promise<Result[]> {
  const client = new MongoClient(config.dbHost, {
    auth: {
      username: config.dbUsername,
      password: config.dbPassword
    }
  });
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(getCollectionName(language));

    const findResult = await collection.find<Result>({}).toArray();

    return parseResults(findResult.filter((result) => result.exercise));
  } finally {
    await client.close();
  }
}
