import { generateAllPossibleExercises } from '../exercise/generator';
import { Language } from '../common/language';
import { extractWordToFindFromExercise } from '../service/example-finder/example-finder';
import { getAllUniqueWordsConjugated, getSingleExerciseProgress, ProgressType } from '../service/progress/progress';
import { findWordExampleLines } from '../service/example-finder/find-word-example-lines';
import { findMatchingLines } from '../service/example-finder/find-matching-lines';
import fs from 'fs';
import {
  DE_EXAMPLES_PATH,
  DE_TRANSLATION_EXAMPLES_PATH,
  PL_EXAMPLES_PATH,
  PL_TRANSLATION_EXAMPLES_PATH,
  PT_EXAMPLES_PATH,
  PT_TRANSLATION_EXAMPLES_PATH
} from '../service/example-finder/example-finder.types';
import { getExamplesSaved, saveExamples } from '../server/db';
import { enforceArrayLimit } from '../common/common';
import { getProgressAggregate } from '../service/progress/progress-aggregate';
import { getAllResults } from '../repository/result-repository';

const MAX_FIND_EXAMPLES = 50_000;
const MAX_SAVE_EXAMPLES = 20_000;

export const examplesPaths: Record<Language, { targetLanguagePath: string; translationPath: string }> = {
  [Language.Portuguese]: {
    targetLanguagePath: PT_EXAMPLES_PATH,
    translationPath: PT_TRANSLATION_EXAMPLES_PATH
  },
  [Language.German]: {
    targetLanguagePath: DE_EXAMPLES_PATH,
    translationPath: DE_TRANSLATION_EXAMPLES_PATH
  },
  [Language.Polish]: {
    targetLanguagePath: PL_EXAMPLES_PATH,
    translationPath: PL_TRANSLATION_EXAMPLES_PATH
  }
};

export async function findAllExamples(language: Language) {
  const result = getAllResults(language, true);
  const allKnownWords = getAllUniqueWordsConjugated(language);
  const savedWords = await getExamplesSaved(language);
  const words = [
    ...new Set(
      generateAllPossibleExercises(language)
        .filter((exercise) => getSingleExerciseProgress(result, exercise).progressType !== ProgressType.DONE)
        .map(extractWordToFindFromExercise)
    )
  ].filter((word) => !savedWords.includes(word || ''));
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(`[${i}/${words.length}]`);
    const ptReadStream = fs.createReadStream(examplesPaths[language].targetLanguagePath);
    const ptTranslationsReadStream = fs.createReadStream(examplesPaths[language].translationPath);
    if (word) {
      if (savedWords.includes(word)) {
        console.log(`[${word}] already saved. Skipping...`);
        continue;
      }
      console.time(`[${word}]`);
      const { matchingLines, matchingLinesEn } = await findMatchingLines(
        ptReadStream,
        ptTranslationsReadStream,
        word,
        50_000_000
      );
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

findAllExamples(Language.Portuguese).then(() => {
  console.log('done');
});
