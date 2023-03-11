import { logger } from '../../../common/logger';
import { Exercise } from '../../../exercise/exercise';
import { Priority } from '../../priority';

export const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = 100;

export function exerciseRandomness(exercise: Exercise): Priority[] {
  const extraBonus = Math.random() < 1 / 1000 ? VALUE_EXERCISE_RANDOMNESS_UP_LIMIT * 10 : 0;

  if (extraBonus > 0) {
    logger.info(`Extra random bonus for [{${exercise.getCorrectAnswer()}}]`);
  }

  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT) + extraBonus
    }
  ];
}
