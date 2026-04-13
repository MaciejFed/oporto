import { Exercise } from '../../../exercise/exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH = -1000;

export function exerciseTranslationNeverDoneToEnglish(
  exercise: Exercise,
  exerciseResultContext: ExerciseResultContext
): Priority[] {
  if (
    !(exercise instanceof TranslationExercise) ||
    (exercise as TranslationExercise).translationType !== 'toPortuguese'
  ) {
    return noPriority(exercise);
  }
  const toEnglishTranslationsCorrect = exerciseResultContext.exerciseSubjectResults.filter((result) => {
    if (result.exercise.exerciseType === exercise.exerciseType) {
      const translationExercise = result.exercise as unknown as TranslationExercise;
      return !translationExercise.isTranslationToPortuguese() && result.wasCorrect;
    }
    return false;
  });
  if (toEnglishTranslationsCorrect.length === 0) {
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
