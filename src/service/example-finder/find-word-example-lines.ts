import { MIN_WORD_LENGTH, WordExampleLine } from './example-finder.types';

export function findWordExampleLines(
  linesTargetLanguage: string[],
  linesTranslations: string[],
  allKnownWords: string[]
): WordExampleLine[] {
  const removeUnwantedCharacters = (word: string) =>
    word.replace('.', '').replace(',', '').replace('?', '').replace('!', '').replace('- ', '');

  return linesTargetLanguage
    .reduce<WordExampleLine[]>((prev, curr, index) => {
      const sentenceWords = curr
        .toLowerCase()
        .split(' ')
        .map(removeUnwantedCharacters)
        .filter((word) => word.length >= MIN_WORD_LENGTH);
      const knownWords = allKnownWords.filter((word) => sentenceWords.some((sWord) => sWord === word.toLowerCase()));
      const unknownWords = sentenceWords.filter((word) => !knownWords.includes(word.toLowerCase()));
      const unknownWordsCount = unknownWords.length;

      return prev.concat({
        lineTargetLanguage: curr.replace('- ', ''),
        lineTranslation: linesTranslations[index].replace('- ', ''),
        knownWordsCount: knownWords.length,
        unknownWordsCount,
        knownWords,
        unknownWords,
        wordRatio: knownWords.length - unknownWordsCount
      });
    }, [])
    .sort((a, b) => {
      const sort = b.wordRatio - a.wordRatio;
      if (sort === 0) {
        return b.lineTargetLanguage.length - a.lineTargetLanguage.length;
      }
      return sort;
    });
}
