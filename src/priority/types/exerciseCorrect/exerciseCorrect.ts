import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/resultRepository';
import { Priority } from '../../priority';

export const VALUE_EXERCISE_CORRECT = -10;

export function exerciseCorrect(exercise: Exercise, results: Result[]): Priority[] {
  return [
    getAllResultsForExercise(results, exercise)
      .filter((result) => result.wasCorrect)
      .reduce(
        (previous) => {
          previous.priorityValue += VALUE_EXERCISE_CORRECT;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_CORRECT',
          priorityValue: 0
        }
      )
  ];
}
