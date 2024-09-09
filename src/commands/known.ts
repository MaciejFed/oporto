/* eslint-disable no-loop-func */
import { Language } from '../common/language';
import readline from 'readline';
import fs from 'fs';
import { examplesPaths } from './examples';
import { MIN_WORD_LENGTH } from '../service/example-finder/example-finder.types';
import { getAllUniqueWords, getAllUniqueWordsConjugated } from '../service/progress/progress';

const removeUnwantedCharacters = (word: string) =>
  word.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('- ', '');

function countAndSortWords(words: string[], knownWords: string[]): [string, number][] {
  const wordFrequency = new Map<string, number>();

  words.forEach((word) => {
    const wordFinal = word.toLowerCase(); // Optional: Normalize to lowercase if case-insensitive
    if (wordFrequency.has(wordFinal)) {
      wordFrequency.set(word, wordFrequency.get(wordFinal)! + 1);
    } else {
      wordFrequency.set(wordFinal, 1);
    }
  });

  const sortedWordFrequency: [string, number][] = Array.from(wordFrequency);

  return sortedWordFrequency
    .sort((a, b) => b[1] - a[1])
    .splice(0, 1000)
    .filter((word) => !knownWords.includes(word[0]));
}

export async function getKnownPercentage(language: Language): Promise<number> {
  const allWords = getAllUniqueWordsConjugated(language);
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
      .map(removeUnwantedCharacters)
      .filter((word) => word.length >= MIN_WORD_LENGTH);

    sentenceWords.forEach((word) => {
      if (allWords.includes(word)) {
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

  const result = countAndSortWords(unknownWords, allWords);

  unknownWords.length = 0;

  return (known / (known + unKnown)) * 100;
}

getKnownPercentage(Language.Portuguese).then((res) => console.log(res));
