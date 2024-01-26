import { Exercise, ExerciseType } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { ExerciseProgress, RatioRange } from '../../../service/progress/progress';
import { onlyDistinct } from '../../../common/common';
import { logger } from '../../../common/logger';

export const VALUE_EXERCISE_LIMIT = -1000;
export const VALUE_EXERCISE_BELLOW_LIMIT = 100;

let bellowBonusCount = 1;

export const exerciseTypeToLimit: Record<ExerciseType, number> = {
  SentenceTranslation: 1,
  PhraseTranslation: 1,
  VerbExercise: 10,
  NounTranslation: 20,
  OtherTranslation: 0,
  AdjectiveTranslation: 10,
  VerbTranslation: 20,
  FitInGap: 0
};

let inProgressMap: Record<ExerciseType, number> = {
  SentenceTranslation: 0,
  PhraseTranslation: 0,
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

  const exerciseInProgress = exercisesOfTypeInProgress.some((e) => e.equal(exercise));

  if (exercisesOfTypeInProgress.length < limit) {
    if (exerciseInProgress || bellowBonusCount === 0) {
      return noPriority(exercise);
    }
    bellowBonusCount--;
    logger.debug(
      `Promoting ${exercise.exerciseType} [${exercise.getCorrectAnswer()}] as it's bellow limit [${
        exercisesOfTypeInProgress.length
      }/${limit}]`
    );
    return [
      {
        exercise,
        priorityName: 'EXERCISE_TYPE_BELLOW_PROGRESS_LIMIT',
        priorityValue: VALUE_EXERCISE_BELLOW_LIMIT
      }
    ];
  }

  if (exerciseInProgress) {
    inProgressMap = {
      ...inProgressMap,
      [exercise.exerciseType]: inProgressMap[exercise.exerciseType] + 1
    };
    const inProgressOfType = inProgressMap[exercise.exerciseType];
    if (inProgressOfType < limit) {
      logger.debug(
        `${exercise.exerciseType} in progress: [${exercise.getCorrectAnswer()}] is within a limit [${
          inProgressOfType + 1
        }/${limit}}]`
      );
      return noPriority(exercise);
    }
  }
  return [
    {
      exercise,
      priorityName: 'EXERCISE_TYPE_ABOVE_PROGRESS_LIMIT',
      priorityValue: VALUE_EXERCISE_LIMIT
    }
  ];
}
