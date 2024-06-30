import { WordExampleLine } from './example-finder.types';
import { MovieExample } from '../../io/file';
import { findWordStartIndex, getRandomElement } from '../../common/common';
import { translateToEnglish } from '../../client/client';

const MAX_LENGTH = 5;

export async function selectMovieExample(
  exampleLines: WordExampleLine[],
  word: string
): Promise<MovieExample | undefined> {
  if (!exampleLines.length) return undefined;
  const example = getRandomElement(exampleLines, MAX_LENGTH);
  const apiTranslation = await translateToEnglish(example.lineTargetLanguage);

  return {
    word,
    targetLanguage: example.lineTargetLanguage,
    english: example.lineTranslation,
    englishApi: apiTranslation,
    wordStartIndex: findWordStartIndex(example.lineTargetLanguage, word)
  };
}
