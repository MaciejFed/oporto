import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING = -500;

export function exerciseTranslationNeverDoneFromHearing(
  exercise: Exercise,
  { allResults }: ExerciseResultContext
): Priority[] {
  if (!(exercise instanceof TranslationExercise) || exercise.isTranslationToPortugueseFromHearing()) {
    return noPriority(exercise);
  }
  const fromHearingTranslationsCorrect = allResults.filter((result) => {
    if (
      result.exercise.exerciseType === exercise.exerciseType &&
      (result.exercise as unknown as TranslationExercise).isTranslationSubjectEqual(exercise)
    ) {
      const tranlsationExercise = result.exercise as unknown as TranslationExercise;
      return tranlsationExercise.isTranslationToPortugueseFromHearing() && result.wasCorrect;
    }
    return false;
  });
  if (fromHearingTranslationsCorrect.length === 0) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING',
        priorityValue: VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING
      }
    ];
  }
  return noPriority(exercise);
}
