import fs from 'fs';
import os from 'os';
import path from 'path';
import { logger } from '../common/logger';
import * as readline from 'readline';
import * as https from 'https';
import { getAllUniqueWordsConjugated } from '../service/progress';
import { getLanguage, Language } from '../common/language';

const resultDbFilePath = path.join(os.homedir(), 'results.json');
const resultDEDbFilePath = path.join(os.homedir(), 'results_de.json');
const chartDataJsonPath = path.join(os.homedir(), 'dev/oporto/progress/data.json');
const ptExamplesPath = path.join(os.homedir(), 'pt/pt.txt');
const enExamplesPath = path.join(os.homedir(), 'pt/en.txt');

export function readResultsFromFile(): string {
  logger.debug('reading results...');
  const finalPath = getLanguage() === Language.Portuguese ? resultDbFilePath : resultDEDbFilePath;
  return fs.readFileSync(finalPath, { encoding: 'utf-8' }).toString();
}

async function translateToEnglish(text: [string, string]): Promise<string> {
  const baseUrl = 'https://api.mymemory.translated.net/get';
  const lang = 'en';
  const url = `${baseUrl}?q=${encodeURIComponent(text[0].concat(` ${text[1]}`))}&langpair=pt|${lang}`;

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const parsedData = JSON.parse(data);

        if (parsedData.responseStatus === 200) {
          resolve(parsedData.responseData.translatedText);
        } else {
          reject(new Error(`Translation API error: ${parsedData.responseDetails}`));
        }
      });

      response.on('error', (error) => {
        console.error('Error:', error.message);
        reject(error);
      });
    });
  });
}

export async function findExampleSentence(numberOfLinesToRead: number, wordToFind: string) {
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
  const finalPath = getLanguage() === Language.Portuguese ? resultDbFilePath : resultDEDbFilePath;
  fs.writeFileSync(finalPath, data);
}

export function saveProgressToFile(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
