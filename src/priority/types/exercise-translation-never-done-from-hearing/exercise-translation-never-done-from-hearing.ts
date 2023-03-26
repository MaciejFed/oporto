import { Exercise } from '../../../exercise/exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING = -500;

function isTranslationToPortugueseFromHearing(exercise: Exercise): exercise is TranslationExercise {
  return exercise instanceof TranslationExercise && exercise.isTranslationToPortugueseFromHearing();
}

function isMatchingTranslationSubject(resultExercise: Exercise, targetExercise: Exercise): boolean {
  return (
    resultExercise.exerciseType === targetExercise.exerciseType &&
    (resultExercise as TranslationExercise).isTranslationSubjectEqual(targetExercise)
  );
}

export function exerciseTranslationNeverDoneFromHearing(
  exercise: Exercise,
  { exerciseSubjectResults }: ExerciseResultContext
): Priority[] {
  if (isTranslationToPortugueseFromHearing(exercise)) {
    return noPriority(exercise);
  }

  const fromHearingTranslationsCorrect = exerciseSubjectResults.filter((result) => {
    const resultExercise = result.exercise;

    if (!isTranslationToPortugueseFromHearing(resultExercise)) return false;

    return isMatchingTranslationSubject(resultExercise, exercise) && result.wasCorrect;
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
