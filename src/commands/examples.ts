import { generateAllPossibleExercises } from '../exercise/generator';
import { Language } from '../common/language';
import { extractWordToFindFromExercise } from '../service/example-finder/example-finder';
import { getAllUniqueWordsConjugated } from '../service/progress/progress';
import { findWordExampleLines } from '../service/example-finder/find-word-example-lines';
import { findMatchingLines } from '../service/example-finder/find-matching-lines';
import fs from 'fs';
import {
  DE_EXAMPLES_PATH,
  DE_TRANSLATION_EXAMPLES_PATH,
  PT_EXAMPLES_PATH,
  PT_TRANSLATION_EXAMPLES_PATH
} from '../service/example-finder/example-finder.types';
import { isExampleSavedAlready, saveExamples } from '../server/db';
import { enforceArrayLimit } from '../common/common';

const MAX_FIND_EXAMPLES = 150_000;
const MAX_SAVE_EXAMPLES = 40_000;

export const examplesPaths: Record<Language, { targetLanguagePath: string; translationPath: string }> = {
  [Language.Portuguese]: {
    targetLanguagePath: PT_EXAMPLES_PATH,
    translationPath: PT_TRANSLATION_EXAMPLES_PATH
  },
  [Language.German]: {
    targetLanguagePath: DE_EXAMPLES_PATH,
    translationPath: DE_TRANSLATION_EXAMPLES_PATH
  }
};

export async function findAllExamples(language: Language) {
  const allKnownWords = getAllUniqueWordsConjugated(language);
  const words = [...new Set(generateAllPossibleExercises(language).reverse().map(extractWordToFindFromExercise))];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(`[${i}/${words.length}]`);
    const ptReadStream = fs.createReadStream(examplesPaths[language].targetLanguagePath);
    const ptTranslationsReadStream = fs.createReadStream(examplesPaths[language].translationPath);
    if (word) {
      if (await isExampleSavedAlready(word, language)) {
        console.log(`[${word}] already saved. Skipping...`);
        continue;
      }
      console.time(`[${word}]`);
      const { matchingLines, matchingLinesEn } = await findMatchingLines(ptReadStream, ptTranslationsReadStream, word);
      const examples = enforceArrayLimit(
        findWordExampleLines(
          enforceArrayLimit(matchingLines, MAX_FIND_EXAMPLES),
          enforceArrayLimit(matchingLinesEn, MAX_FIND_EXAMPLES),
          allKnownWords
        ),
        MAX_SAVE_EXAMPLES
      );
      await saveExamples(word, examples, language);
      console.log({
        word,
        matchingLinesLength: matchingLines.length
      });
      console.timeEnd(`[${word}]`);
    }
  }
}

findAllExamples(Language.German).then(() => {
  console.log('done');
});
