import { MongoClient, ObjectId } from 'mongodb';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { loadValidConfig } from './configuration';
import { parseResults } from '../repository/result-repository';
import { Language } from '../common/language';
import { WordExampleLine } from '../service/example-finder/example-finder.types';
import { enforceArrayLimit } from '../common/common';
import { MovieExample } from '../io/file';
import { Audio, Rate } from './audio/audio.types';

const config = loadValidConfig();
const dbName = 'oporto';

const collectionNameMap: Record<Language, string> = {
  [Language.Portuguese]: 'results',
  [Language.German]: 'results_de',
  [Language.Polish]: 'results_pl'
};

const examplesCollectionNameMap: Record<Language, string> = {
  [Language.Portuguese]: 'examples_pt_v2',
  [Language.German]: 'examples_de',
  [Language.Polish]: 'examplesPL'
};

const favCollectionNameMap: Record<Language, string> = {
  [Language.Portuguese]: 'favoriteExamplesPT',
  [Language.German]: 'favorite_examples_de',
  [Language.Polish]: 'favorite_examples_pl'
};

const audiosCollectionNameMap: Record<Language, string> = {
  [Language.Portuguese]: 'audios_pt',
  [Language.German]: 'audios_de',
  [Language.Polish]: 'audios_pl'
};

const knownSentencesCollectionNameMap: Record<Language, string> = {
  [Language.Portuguese]: 'knownSentences_pt',
  [Language.German]: 'knownSentences_de',
  [Language.Polish]: 'knownSentences_pl'
};

const getExamplesCollectionName = (language: Language, type: 'top' | 'total') =>
  `${examplesCollectionNameMap[language]}_${type}`;

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
    const collection = db.collection(getExamplesCollectionName(language, 'total'));
    const found = (await collection.find().skip(index).limit(1).toArray()) as any[];
    // @ts-ignore
    return Object.values(found[0])[1].flatMap((line) => line.unknownWords);
  } finally {
    await client.close();
  }
}

export async function isExampleLineSavedAlready(word: string, language: Language): Promise<boolean> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(getExamplesCollectionName(language, 'top'));
    const exampleNumber = await collection.countDocuments({
      lineTargetLanguage: word
    });

    return exampleNumber > 0;
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

export async function saveKnownSentences(language: Language, sentences: string[]): Promise<void> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const knownSentences = db.collection(knownSentencesCollectionNameMap[language]);
    await knownSentences.insertOne({ known: sentences });
  } finally {
    await client.close();
  }
}

export async function saveFavoriteExample(language: Language, example: MovieExample): Promise<void> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const favoriteExamples = db.collection(favCollectionNameMap[language]);

    const examples = await favoriteExamples.countDocuments({
      targetLanguage: example.targetLanguage
    });
    const alreadyExists = examples > 0;
    if (alreadyExists) {
      logger.info(`[${example.targetLanguage}] already saved.`);
    } else {
      await favoriteExamples.insertOne(example);
    }
  } finally {
    await client.close();
  }
}

export async function getExamples(word: string, language: Language): Promise<WordExampleLine[]> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collectionTop = db.collection(getExamplesCollectionName(language, 'total'));

    const examples = await collectionTop.findOne({
      [word]: { $exists: true }
    });
    return examples ? Object.values(examples)[1] : [];
  } finally {
    await client.close();
  }
}

export async function getExamplesSaved(language: Language): Promise<string[]> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collectionTop = db.collection(getExamplesCollectionName(language, 'top'));

    const examples = await collectionTop.find({}).limit(20_000).toArray();

    return examples ? examples.map((doc) => Object.keys(doc)[1]) : [];
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
    const collection = db.collection(collectionNameMap[language]);
    const insertedResult = await collection.insertOne(newResult);

    logger.info(`Insered new result=[${insertedResult.insertedId}]`);

    return insertedResult.insertedId.toString();
  } finally {
    await client.close();
  }
}

export async function deleteResult(): Promise<void> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionNameMap[Language.Portuguese]);
    const results = parseResults(await collection.find<Result>({}).toArray());
    const toDelete = results.filter((result) => {
      if (!result.exercise.getBaseWord()) return false;
      const english = (result.exercise.getBaseWord() as any).english;
      return english && english.toLowerCase().includes('pronoun') && !result.wasCorrect;
    });

    for (const result of toDelete) {
      const deleteRes = await collection.deleteOne({
        _id: (result as any)._id
      });
      const deleted = deleteRes.deletedCount;
      console.log(deleted);
    }
  } finally {
    await client.close();
  }
}

export async function readAllResults(language: Language): Promise<Result[]> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionNameMap[language]);

    const findResult = await collection.find<Result>({}).toArray();

    return parseResults(findResult.filter((result) => result.exercise));
  } finally {
    await client.close();
  }
}

export async function getPreviousAudioVoice(language: Language, text: string, api: string): Promise<string | null> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(audiosCollectionNameMap[language]);
    const audio = await collection.findOne<Audio>({
      text,
      api
    });
    if (audio) {
      return audio.voice;
    }
    return null;
  } finally {
    await client.close();
  }
}

export async function getAudio(
  language: Language,
  text: string,
  rate: Rate,
  api: 'google' | 'openai'
): Promise<Audio | null> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(audiosCollectionNameMap[language]);
    return await collection.findOne<Audio>({
      text,
      rate,
      api
    });
  } finally {
    await client.close();
  }
}

export async function saveAudio(language: Language, audio: Audio): Promise<string> {
  const client = await getClient();
  try {
    const db = client.db(dbName);
    const collection = db.collection(audiosCollectionNameMap[language]);
    const insertedAudio = await collection.insertOne(audio);

    logger.info(`Inserted new audio=[${insertedAudio.insertedId}]`);

    return insertedAudio.insertedId.toString();
  } finally {
    await client.close();
  }
}
