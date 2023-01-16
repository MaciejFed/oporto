import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { Priority } from '../../priority';

export const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = 100;

export function exerciseRandomness(exercise: Exercise, results: Result[]): Priority[] {
  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT)
    }
  ];
}
