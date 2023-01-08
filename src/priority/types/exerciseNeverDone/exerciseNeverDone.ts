import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/resultRepository';
import { noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_NEVER_DONE = 25;

export function exerciseNeverDone(exercise: Exercise, results: Result[]): Priority[] {
  return getAllResultsForExercise(results, exercise).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE', priorityValue: VALUE_EXERCISE_NEVER_DONE }]
    : noPriority(exercise);
}
