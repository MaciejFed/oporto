import { MongoClient } from 'mongodb';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { loadValidConfig } from './configuration';
import { parseResults } from '../repository/result-repository';
import { Language } from '../common/language';
import { WordExampleLine } from '../service/example-finder/example-finder.types';
import { enforceArrayLimit } from '../common/common';

const config = loadValidConfig();
const dbName = 'oporto';
const collectionName = 'results';
const collectionNameDE = 'results_de';
const examplesPT = 'examples_pt';
const examplesDE = 'examples_de';

const getCollectionName = (language: Language) =>
  language === Language.Portuguese ? collectionName : collectionNameDE;

const getExamplesCollectionName = (language: Language, type: 'top' | 'total') =>
  language === Language.Portuguese ? `${examplesPT}_${type}` : `${examplesDE}_${type}`;

const getClient = async () => {
  const client = new MongoClient(config.dbHost, {
    auth: {
      username: config.dbUsername,
      password: config.dbPassword
    }
  });
  return client.connect();
};

export async function getUnknownWords(index: number, language: Language): Promise<string[]> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(getExamplesCollectionName(language, 'top'));
    const found = (await collection.find().skip(index).limit(1).toArray()) as any[];
    // @ts-ignore
    return Object.values(found[0])[1].flatMap((line) => line.unknownWords);
  } finally {
    await client.close();
  }
}

export async function isExampleSavedAlready(word: string, language: Language): Promise<boolean> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(getExamplesCollectionName(language, 'total'));
    const exampleNumber = await collection.countDocuments({
      [word]: { $exists: true }
    });

    return exampleNumber > 0;
  } finally {
    await client.close();
  }
}

export async function getExamples(word: string, language: Language): Promise<WordExampleLine[]> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collectionTop = db.collection(getExamplesCollectionName(language, 'top'));

    const examples = await collectionTop.findOne({
      [word]: { $exists: true }
    });
    return examples ? Object.values(examples)[1] : [];
  } finally {
    await client.close();
  }
}

export async function saveExamples(
  word: string,
  wordExampleLines: WordExampleLine[],
  language: Language
): Promise<string> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collectionTotal = db.collection(getExamplesCollectionName(language, 'total'));
    const collectionTop = db.collection(getExamplesCollectionName(language, 'top'));
    const insertedExamplesTotal = await collectionTotal.insertOne({
      [word]: wordExampleLines
    });
    const insertedExamplesTop = await collectionTop.insertOne({
      [word]: enforceArrayLimit(wordExampleLines, 100)
    });

    logger.info(`Inserted new example=[${insertedExamplesTotal.insertedId}]`);

    return insertedExamplesTotal.insertedId.toString();
  } finally {
    await client.close();
  }
}

export async function saveNewResult(newResult: Result, language: Language): Promise<string> {
  const client = await getClient();
  try {
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
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(getCollectionName(language));

    const findResult = await collection.find<Result>({}).toArray();

    return parseResults(findResult.filter((result) => result.exercise));
  } finally {
    await client.close();
  }
}
