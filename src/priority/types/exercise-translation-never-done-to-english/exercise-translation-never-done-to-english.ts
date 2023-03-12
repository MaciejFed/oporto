import { Exercise } from '../../../exercise/exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { exerciseTranslationNeverDoneFromHearing } from '../exercise-translation-never-done-from-hearing/exercise-translation-never-done-from-hearing';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH = -250;

export function exerciseTranslationNeverDoneToEnglish(
  exercise: Exercise,
  exerciseResultContext: ExerciseResultContext
): Priority[] {
  if (!(exercise instanceof TranslationExercise)) {
    return noPriority(exercise);
  }
  const toEnglishTranslationsCorrect = exerciseResultContext.allResults.filter((result) => {
    if (result.exercise.exerciseType === exercise.exerciseType) {
      const translationExercise = result.exercise as unknown as TranslationExercise;
      return !translationExercise.isTranslationToPortuguese() && result.wasCorrect;
    }
    return false;
  });
  if (
    toEnglishTranslationsCorrect.length === 0 &&
    exerciseTranslationNeverDoneFromHearing(exercise, exerciseResultContext)[0].priorityName !== 'NO_PRIORITY'
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
