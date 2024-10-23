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
import { getFrequencyMap, saveKnownSentences } from '../server/db';
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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function next() {
  return new Promise((resolve) => rl.question('', resolve));
}

export async function getKnownPercentage(language: Language): Promise<void> {
  const allWordsReal = getAllUniqueWordsConjugated(language);
  const knownSentences = [];

  const readInterfaceTarget = readline.createInterface({
    input: fs.createReadStream(examplesPaths[language].targetLanguagePath)
  });
  const frequencyMap = await getFrequencyMap(language);

  const readInterfacePtIterator = readInterfaceTarget[Symbol.asyncIterator]();
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const linePtResult = await readInterfacePtIterator.next();

    if (linePtResult.done) break;

    const linePt = linePtResult.value.replace('- ', '');

    const sentenceWords = linePt
      .toLowerCase()
      .split(' ')
      .map((word) => word.replace('.', '').replace(',', '').replace('?', '').replace('!', ''))
      .filter((word) => isNaN(Number(word))) // Listen
      .filter((word) => word.length >= MIN_WORD_LENGTH);

    if (linePt.length > 14 && linePt.length < 35) {
      if (sentenceWords.every((word) => allWordsReal.includes(word))) {
        knownSentences.push(linePt);
      }
      if (knownSentences.length > 100_000) {
        const averagePlace = (sentence: string) => {
          const words = sentence
            .toLowerCase()
            .split(' ')
            .filter((word) => isNaN(Number(word)))
            .filter((word) => word.length >= MIN_WORD_LENGTH)
            .map((word) => word.replace('.', '').replace(',', '').replace('?', '').replace('!', ''))
            .filter((word) => frequencyMap[word] !== undefined);
          return (
            words.reduce((curr, word) => {
              const freq = frequencyMap[word];
              return curr + freq.place;
            }, 0) / words.length
          );
        };
        const knownSentecesesMap = knownSentences
          .map((sentence) => ({
            sentence,
            avgPlace: averagePlace(sentence)
          }))
          .sort((a, b) => a.avgPlace - b.avgPlace);
        terminal.hideCursor();
        while (sentenceWords.length) {
          const randomElement = getRandomElement(knownSentecesesMap, 10_000).sentence;
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
    }
  }
}

getKnownPercentage(Language.Portuguese).then((res) => console.log(res));
