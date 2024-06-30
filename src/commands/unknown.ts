import { Language } from '../common/language';
import { getUnknownWords } from '../server/db';
import { getAllUniqueWords } from '../service/progress/progress';

function countAndSortWords(words: string[]): [string, number][] {
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

  sortedWordFrequency.sort((a, b) => b[1] - a[1]);

  return sortedWordFrequency;
}

async function findUnknownWords(language: Language) {
  let counter = 0;
  let unknownWords: string[] = [];
  for (let i = 0; i < getAllUniqueWords(Language.Portuguese).length; i++) {
    unknownWords = unknownWords.concat(await getUnknownWords(counter++, language));
    console.log({
      counter,
      unknownWords: unknownWords.length
    });
  }

  const x = countAndSortWords(unknownWords);

  console.log(x);
}

findUnknownWords(Language.Portuguese);
