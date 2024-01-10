import fs from 'fs';
import os from 'os';
import path from 'path';
import { logger } from '../common/logger';
import * as readline from 'readline';
import * as http from 'http';
import { getAllUniqueWordsConjugated } from '../service/progress';
import { Result } from '../service/result';
import { translateToEnglish } from '../client/client';

const resultDbFilePath = path.join(os.homedir(), 'results.json');
const chartDataJsonPath = path.join(os.homedir(), 'dev/oporto/progress/data.json');
const ptExamplesPath = path.join(os.homedir(), 'pt/pt.txt');
const enExamplesPath = path.join(os.homedir(), 'pt/en.txt');

export function readResultsFromFile(): string {
  logger.debug('reading results...');
  return fs.readFileSync(resultDbFilePath, { encoding: 'utf-8' }).toString();
}

export async function readResultsFromDB(): Promise<Result[]> {
  return new Promise((resolve, reject) => {
    http.get(
      {
        hostname: 'localhost',
        path: '/results',
        port: 3000,
        headers: {
          Authorization: 'Bearer AF1E32DB-5EC0-4EC6-B561-5021AB5F0B35'
        }
      },
      (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        });

        response.on('error', (error) => {
          console.error('Error:', error.message);
          reject(error);
        });
      }
    );
  });
}

export interface MoveieExample {
  portuguese: [string, string];
  english: string;
  englishApi: string;
}

export async function findExampleSentence(numberOfLinesToRead: number, wordToFind: string): Promise<MoveieExample> {
  const wordRegex = new RegExp(`\\b${wordToFind}\\b`, 'i');
  // @ts-ignore
  const readInterfacePt = readline.createInterface({
    input: fs.createReadStream(ptExamplesPath),
    console: false
  });

  // @ts-ignore
  const readInterfaceEn = readline.createInterface({
    input: fs.createReadStream(enExamplesPath),
    console: false
  });

  const matchingLines: [string, string][] = [];
  const matchingLinesEn: string[] = [];
  let linesRead = 0;
  const startTime = new Date().getTime();

  const readInterfacePtIterator = readInterfacePt[Symbol.asyncIterator]();
  const readInterfaceEnIterator = readInterfaceEn[Symbol.asyncIterator]();
  let previousLine = '';
  while (linesRead < numberOfLinesToRead) {
    const linePtResult = await readInterfacePtIterator.next();
    const lineEnResult = await readInterfaceEnIterator.next();

    if (linePtResult.done || lineEnResult.done) break;

    const linePt = linePtResult.value;
    const lineEn = lineEnResult.value;

    if (wordRegex.test(linePt) && linePt.length < 50) {
      matchingLines.push([previousLine, linePt]);
      matchingLinesEn.push(lineEn);
    }
    previousLine = linePt;
    linesRead++;
  }

  readInterfacePt.close();
  readInterfaceEn.close();

  const endTime = new Date().getTime();

  if (matchingLines.length > 5) {
    logger.info(`Found more than 5 lines with match for [${wordToFind}]`);
    const allWords = getAllUniqueWordsConjugated();
    type LineCount = {
      line: [string, string];
      knownWordsCount: number;
      unknownWordsCount: number;
      wordRatio: number;
      index: number;
      knownWords: string[];
      unknownWords: string[];
    };
    const linesWithCount = matchingLines
      .reduce<LineCount[]>((prev, curr, index) => {
        const sentenceWords = curr[1]
          .toLowerCase()
          .split(' ')
          .map((word) => word.replace('.', '').replace(',', '').replace('?', '').replace('!', ''))
          .filter((word) => word.length > 2);
        const knownWords = allWords.filter((word) => sentenceWords.some((sWord) => sWord === word.toLowerCase()));

        const unknownWords = sentenceWords.filter((word) => !knownWords.includes(word.toLowerCase()));
        const unknownWordsCount = unknownWords.length;
        return prev.concat({
          line: curr,
          knownWordsCount: knownWords.length,
          unknownWordsCount,
          wordRatio: knownWords.length - unknownWordsCount,
          knownWords,
          unknownWords,
          index
        });
      }, [])
      .sort((a, b) => {
        const sort = b.wordRatio - a.wordRatio;
        if (sort === 0) {
          return b.line.length - a.line.length;
        }
        return sort;
      });

    const randomIndex = Math.floor(Math.random() * 5);
    const portuguese = linesWithCount[randomIndex].line;
    const englishApi = await translateToEnglish(portuguese);

    logger.info('Example statistics:', linesWithCount[randomIndex]);

    return {
      portuguese,
      english: matchingLinesEn[linesWithCount[randomIndex].index],
      englishApi
    };
  }

  const randomIndex = Math.floor(Math.random() * matchingLines.length);
  logger.info(`Found ${matchingLines.length} occurrences of "${wordToFind}"`);
  logger.info(`Time taken: ${endTime - startTime} ms`);

  const portuguese = matchingLines[randomIndex];
  const englishApi = await translateToEnglish(portuguese);

  return {
    portuguese,
    english: matchingLinesEn[randomIndex],
    englishApi
  };
}

export function saveResultsToFile(data: string) {
  logger.debug('saving  results...');
  fs.writeFileSync(resultDbFilePath, data);
}

export function saveProgressToFile(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
