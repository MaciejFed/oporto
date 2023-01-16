import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExerciseSubject } from '../../../repository/result-repository';
import { noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW = -1000;

export function exerciseDoneCorrectly2TimesInRow(exercise: Exercise, results: Result[]): Priority[] {
  const resultsToday = getAllResultsForExerciseSubject(results, exercise)
    .filter((result) => new Date(result.date).toDateString() === new Date().toDateString())
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  if (resultsToday.length < 2) {
    return noPriority(exercise);
  }
  if (resultsToday[resultsToday.length - 1].wasCorrect && resultsToday[resultsToday.length - 2].wasCorrect) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW',
        priorityValue: VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW
      }
    ];
  }
  return noPriority(exercise);
}
