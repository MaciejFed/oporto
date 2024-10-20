/* eslint-disable no-loop-func */
import { Language } from '../common/language';
import readline from 'readline';
import { terminal } from 'terminal-kit';
import fs from 'fs';
import { examplesPaths } from './examples';
import { MIN_WORD_LENGTH } from '../service/example-finder/example-finder.types';
import {
  getAllUniqueWords,
  getAllUniqueWordsConjugated,
  getSingleExerciseProgress,
  ProgressType
} from '../service/progress/progress';
import { isNumber } from 'node:util';
import { generateAllPossibleExercises } from '../exercise/generator';
import { extractWordToFindFromExercise } from '../service/example-finder/example-finder';
import { Result } from '../service/result';
import { getAllResults, getAllResultsAsync } from '../repository/result-repository';
import { saveKnownSentences } from '../server/db';
import { getRandomElement } from '../common/common';
import { getAudio, translateToEnglish } from '../client/client';
import { getSavedAudioPath } from '../server/configuration';
import { execSync } from 'child_process';
import clear from 'clear';

const getAllDoneWords = (language: Language, results: Result[]) => [
  ...new Set(
    generateAllPossibleExercises(language)
      .filter((exercise) => getSingleExerciseProgress(results, exercise).progressType === ProgressType.DONE)
      .map(extractWordToFindFromExercise)
  )
];

function centerText(text: string) {
  const consoleWidth = process.stdout.columns;

  const padding = Math.floor((consoleWidth - text.length) / 2);

  const paddingString = ' '.repeat(padding);

  console.log();

  console.log(paddingString + text);

  console.log();
}

const removeUnwantedCharacters = (word: string) =>
  word.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('- ', '');

function countAndSortWords(words: string[], knownWords: string[]): [string, number, boolean][] {
  const wordFrequency = new Map<string, number>();
  const totalCount = 0;

  words.forEach((word) => {
    const wordFinal = word.toLowerCase();
    if (wordFrequency.has(wordFinal)) {
      wordFrequency.set(word, wordFrequency.get(wordFinal)! + 1);
    } else {
      wordFrequency.set(wordFinal, 1);
    }
  });

  const sortedWordFrequency: [string, number][] = Array.from(wordFrequency);

  return sortedWordFrequency
    .sort((a, b) => b[1] - a[1])
    .slice(0, 1000)
    .map((freq) => [freq[0], freq[1], knownWords.includes(freq[0])]);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function next() {
  return new Promise((resolve) => rl.question('', resolve));
}

export async function getKnownPercentage(language: Language): Promise<number> {
  const allWords = ['s'];
  const allWordsReal = getAllUniqueWordsConjugated(language);
  const allDoneWords = getAllDoneWords(language, getAllResults(language, true));
  const knownSentences = [];
  let known = 0;
  let unKnown = 0;
  let counter = 0;

  const readInterfaceTarget = readline.createInterface({
    input: fs.createReadStream(examplesPaths[language].targetLanguagePath)
  });

  const readInterfacePtIterator = readInterfaceTarget[Symbol.asyncIterator]();
  const unknownWords: string[] = [];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const linePtResult = await readInterfacePtIterator.next();

    if (linePtResult.done || counter > 20000000) break;

    const linePt = linePtResult.value.replace('- ', '');

    const sentenceWords = linePt
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace('.', '').replace(',', '').replace('?', '').replace('!', ''))
      .filter((word) => isNaN(Number(word))) // Listen
      .filter((word) => word.length >= MIN_WORD_LENGTH);

    if (linePt.length > 10 && linePt.length < 35) {
      if (sentenceWords.every((word) => allWordsReal.includes(word))) {
        knownSentences.push(linePt);
      }
      if (knownSentences.length > 100_000) {
        terminal.hideCursor();
        // while (true) {

        const randomElement = getRandomElement(knownSentences);
        const english = await translateToEnglish(randomElement);

        getAudio(language, randomElement, 'google', 'normal');
        execSync(`afplay ${getSavedAudioPath()}`);
        await next();
        const consoleHeight = process.stdout.rows;

        const middleRow = Math.floor(consoleHeight / 2) - 4;

        for (let i = 0; i < middleRow; i++) {
          console.log();
        }

        centerText(randomElement);
        await next();
        centerText(english);
        await next();
        clear();
      }
      // }
    }

    sentenceWords.forEach((word) => {
      if (allWordsReal.includes(word)) {
        known++;
      } else {
        unKnown++;
        unknownWords.push(word);
      }

      if (counter++ % 1000000 === 0) {
        console.log(`Result: [${(known / (known + unKnown)) * 100}%]`);
      }
    });
  }

  readInterfaceTarget.close();

  const cutNumber = (someNumber: number) => Number(Number(someNumber.toString().slice(0, 7)).toFixed(4));

  const result: [string, number, number, boolean][] = countAndSortWords(unknownWords, allWordsReal).map((wordFreq) => [
    wordFreq[0],
    wordFreq[1],
    (wordFreq[1] / (known + unKnown)) * 100,
    wordFreq[2]
  ]);

  const sumUntil = (until: number, array: [string, number, number, boolean][]) =>
    array.slice(0, until + 1).reduce((prev, curr) => prev + curr[2], 0);

  const newResult = result.map((wordFreq, index) => [
    wordFreq[0],
    wordFreq[1],
    cutNumber(wordFreq[2]),
    cutNumber(sumUntil(index, result)),
    wordFreq[3]
  ]);
  const unknowns = newResult.filter((freq) => !freq[4]);
  const newResultUnknown = unknowns.map((wordFreq, index) => [
    wordFreq[0],
    wordFreq[1],
    wordFreq[2],
    cutNumber(sumUntil(index, unknowns as any))
  ]);

  unknownWords.length = 0;

  return (known / (known + unKnown)) * 100;
}

getKnownPercentage(Language.Portuguese).then((res) => console.log(res));
