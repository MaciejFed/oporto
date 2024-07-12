/* eslint-disable no-loop-func */
import { Language } from '../common/language';
import readline from 'readline';
import fs from 'fs';
import { examplesPaths } from './examples';
import { MIN_WORD_LENGTH } from '../service/example-finder/example-finder.types';
import { getAllUniqueWords, getAllUniqueWordsConjugated } from '../service/progress/progress';

const removeUnwantedCharacters = (word: string) =>
  word.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('- ', '');

export async function getKnownPercentage(language: Language): Promise<number> {
  const allWords = getAllUniqueWordsConjugated(language);
  let known = 0;
  let unKnown = 0;
  let counter = 0;

  const readInterfaceTarget = readline.createInterface({
    input: fs.createReadStream(examplesPaths[language].targetLanguagePath)
  });

  const readInterfacePtIterator = readInterfaceTarget[Symbol.asyncIterator]();
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const linePtResult = await readInterfacePtIterator.next();

    if (linePtResult.done) break;

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
      }

      if (counter++ % 100 === 0) {
        console.log(`Result: [${(known / (known + unKnown)) * 100}%]`);
      }
    });
  }

  readInterfaceTarget.close();

  return (known / (known + unKnown)) * 100;
}

getKnownPercentage(Language.German).then((res) => console.log(res));
