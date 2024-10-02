import { WordExampleLine } from './example-finder.types';
import { MovieExample } from '../../io/file';
import { findWordStartIndex, getRandomElement } from '../../common/common';
import { translateToEnglish } from '../../client/client';

const MAX_LENGTH = 5;
const MAX_LINE_LENGTH = 40;

export async function selectMovieExample(
  exampleLines: WordExampleLine[],
  word: string
): Promise<MovieExample | undefined> {
  if (!exampleLines.length) return undefined;
  const linesBelowRange = exampleLines.filter((line) => line.lineTargetLanguage.length < MAX_LINE_LENGTH);
  const example = getRandomElement(linesBelowRange, MAX_LENGTH);
  const apiTranslation = await translateToEnglish(example.lineTargetLanguage);

  return {
    word,
    targetLanguage: example.lineTargetLanguage,
    english: example.lineTranslation,
    englishApi: apiTranslation,
    wordStartIndex: findWordStartIndex(example.lineTargetLanguage, word)
  };
}
