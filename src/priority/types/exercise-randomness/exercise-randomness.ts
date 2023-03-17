import { getRandomElement } from '../../../common/common';
import { logger } from '../../../common/logger';
import { Exercise } from '../../../exercise/exercise';
import { generateAllPossibleExercises } from '../../../exercise/generator';
import { ExerciseResultContext, Priority } from '../../priority';

export const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = 200;

export function exerciseRandomness(exercise: Exercise, { allExercises }: ExerciseResultContext): Priority[] {
  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT)
    }
  ];
}
