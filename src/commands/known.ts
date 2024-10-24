/* eslint-disable no-loop-func */
import { Language } from '../common/language';
import readline from 'readline';
import fs from 'fs';
import { examplesPaths } from './examples';
import { MIN_WORD_LENGTH } from '../service/example-finder/example-finder.types';
import { getAllUniqueWords, getAllUniqueWordsConjugated } from '../service/progress/progress';
import { isNumber } from 'node:util';
import { saveFrequencyMap } from '../server/db';

const removeUnwantedCharacters = (word: string) =>
  word.replace('.', '').replace(',', '').replace('?', '').replace('!', '');

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
    .slice(0, 100_000)
    .map((freq) => [freq[0], freq[1], knownWords.includes(freq[0])]);
}

export async function getKnownPercentage(language: Language): Promise<number> {
  const allWords = ['s'];
  const allWordsReal = ['asd'];
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

    const linePt = linePtResult.value;

    const sentenceWords = linePt
      .toLowerCase()
      .split(' ')
      // .map(word => removeUnwantedCharacters(word))
      .filter(
        (word) =>
          !word.includes('.') &&
          !word.includes(',') &&
          !word.includes('-') &&
          !word.includes('ä') &&
          !word.includes('"') &&
          !word.includes("'") &&
          !word.includes('$') &&
          !word.includes('?') &&
          !word.includes('!') &&
          isNaN(Number(word))
      )
      .filter((word) => word.length >= MIN_WORD_LENGTH);

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
  const freqMap = newResultUnknown.reduce((curr, prev, index) => {
    curr[prev[0] as string] = {
      place: index + 1,
      frequency: prev[2]
    };
    return curr;
  }, {} as { [key: string]: object });

  await saveFrequencyMap(language, freqMap);

  unknownWords.length = 0;

  return (known / (known + unKnown)) * 100;
}

getKnownPercentage(Language.Portuguese).then((res) => console.log(res));
