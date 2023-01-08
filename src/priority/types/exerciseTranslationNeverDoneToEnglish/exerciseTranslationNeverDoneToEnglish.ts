import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { TranslationExercise } from '../../../exercise/translation/translationExercise';
import { noPriority, Priority } from '../../priority';
import { exerciseTranslationNeverDoneFromHearing } from '../exerciseTranslationNeverDoneFromHearing/exerciseTranslationNeverDoneFromHearing';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH = -250;

export function exerciseTranslationNeverDoneToEnglish(exercise: Exercise, results: Result[]): Priority[] {
  if (!(exercise instanceof TranslationExercise)) {
    return noPriority(exercise);
  }
  const toEnglishTranslationsCorrect = results.filter((result) => {
    if (result.exercise.exerciseType === exercise.exerciseType) {
      const translationExercise = result.exercise as unknown as TranslationExercise;
      return !translationExercise.isTranslationToPortuguese() && result.wasCorrect;
    }
    return false;
  });
  if (
    toEnglishTranslationsCorrect.length === 0 &&
    exerciseTranslationNeverDoneFromHearing(exercise, results)[0].priorityName !== 'NO_PRIORITY'
  ) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH',
        priorityValue: VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH
      }
    ];
  }
  return noPriority(exercise);
}
