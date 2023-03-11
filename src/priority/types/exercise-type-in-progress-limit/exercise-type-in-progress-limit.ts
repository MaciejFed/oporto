import { Exercise, ExerciseType } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { ExerciseProgress, RatioRange } from '../../../service/progress';
import { onlyDistinct } from '../../../common/common';
import { logger } from '../../../common/logger';

export const VALUE_EXERCISE_LIMIT = -1000;

export const exerciseTypeToLimit: Record<ExerciseType, number> = {
  SentenceTranslation: 5,
  VerbExercise: 10,
  NounTranslation: 20,
  OtherTranslation: 0,
  AdjectiveTranslation: 10,
  VerbTranslation: 10,
  FitInGap: 0
};

let inProgressMap: Record<ExerciseType, number> = {
  SentenceTranslation: 0,
  VerbExercise: 0,
  NounTranslation: 0,
  OtherTranslation: 0,
  AdjectiveTranslation: 0,
  VerbTranslation: 0,
  FitInGap: 0
};

export function exerciseTypeInProgressLimit(
  exercise: Exercise,
  { exerciseTypeProgress }: ExerciseResultContext
): Priority[] {
  const limit = exerciseTypeToLimit[exercise.exerciseType];
  if (!limit) return noPriority(exercise);
  const exercisesOfTypeInProgress = onlyDistinct(
    exerciseTypeProgress
      .filter((progress) => progress.ratioRange !== 'Never Done' && progress.ratioRange !== '80-100')
      .map((ep) => ep.exercise)
  );

  if (exercisesOfTypeInProgress.length < limit) {
    return noPriority(exercise);
  }

  if (exercisesOfTypeInProgress.some((e) => e.equal(exercise))) {
    inProgressMap = {
      ...inProgressMap,
      [exercise.exerciseType]: inProgressMap[exercise.exerciseType] + 1
    };
    const inProressOfType = inProgressMap[exercise.exerciseType];
    if (inProressOfType < limit) {
      logger.info(
        `${exercise.exerciseType} in progress: [${exercise.getCorrectAnswer()}] is within a limit [${
          inProressOfType + 1
        }/${limit}}]`
      );
      return noPriority(exercise);
    }
  }
  return [
    {
      exercise,
      priorityName: 'EXERCISE_TYPE_IN_PROGRESS_LIMIT',
      priorityValue: VALUE_EXERCISE_LIMIT
    }
  ];
}
