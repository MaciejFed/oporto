import { Exercise, ExerciseType } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/result-repository';
import { noPriority, Priority } from '../../priority';
import { ExerciseProgress, getSingleExerciseProgress, RatioRange } from '../../../service/progress';
import { onlyDistinct } from '../../../common/common';

export const VALUE_EXERCISE_LIMIT = -1000;

export const exerciseTypeToLimit: Record<ExerciseType, number> = {
  SentenceTranslation: 5,
  VerbExercise: 5,
  NounTranslation: 0,
  OtherTranslation: 0,
  AdjectiveTranslation: 10,
  VerbTranslation: 0,
  FitInGap: 0
};

export function exerciseTypeInProgressLimit(
  exercise: Exercise,
  results: Result[],
  ratio: RatioRange,
  exerciseTypeProgress: ExerciseProgress[]
): Priority[] {
  const limit = exerciseTypeToLimit[exercise.exerciseType];
  if (!limit) return noPriority(exercise);
  const exercisesOfTypeInProgress = onlyDistinct(
    exerciseTypeProgress
      .filter((progress) => progress.ratioRange !== 'Never Done' && progress.ratioRange !== '80-100')
      .map((ep) => ep.exercise)
  );

  if (exercisesOfTypeInProgress.length < limit || exercisesOfTypeInProgress.some((e) => e.equal(exercise))) {
    return noPriority(exercise);
  }
  return [
    {
      exercise,
      priorityName: 'EXERCISE_TYPE_IN_PROGRESS_LIMIT',
      priorityValue: VALUE_EXERCISE_LIMIT
    }
  ];
}
