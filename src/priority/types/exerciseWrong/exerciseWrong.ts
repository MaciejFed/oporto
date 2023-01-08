import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/resultRepository';
import { Priority } from '../../priority';

export const VALUE_WRONG_TO_CORRECT_RATIO = 3;

export const VALUE_EXERCISE_CORRECT = -10;

export const VALUE_EXERCISE_WRONG = -1 * VALUE_WRONG_TO_CORRECT_RATIO * VALUE_EXERCISE_CORRECT;

export function exerciseWrong(exercise: Exercise, results: Result[]): Priority[] {
  return [
    getAllResultsForExercise(results, exercise)
      .filter((result) => !result.wasCorrect)
      .reduce(
        (previous) => {
          previous.priorityValue += VALUE_EXERCISE_WRONG;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_WRONG',
          priorityValue: 0
        }
      )
  ];
}
