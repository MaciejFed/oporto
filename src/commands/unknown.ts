import { Language } from '../common/language';
import { getUnknownWords } from '../server/db';
import { getAllUniqueWords, getAllUniqueWordsConjugated } from '../service/progress/progress';

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

async function findUnknownWords(language: Language) {
  let counter = 0;
  let unknownWords: string[] = [];
  const knownWords = getAllUniqueWordsConjugated(language);
  for (let i = 0; i < 177; i++) {
    unknownWords = unknownWords.concat(await getUnknownWords(counter++, language));
    console.log({
      counter,
      unknownWords: unknownWords.length
    });
  }

  const x = countAndSortWords(unknownWords, knownWords);

  console.log(x);
}

findUnknownWords(Language.German);
