import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExerciseSubject } from '../../../repository/result-repository';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export function exerciseDoneInLastHour(exercise: Exercise, { allResults }: ExerciseResultContext): Priority[] {
  const resultsToday = getAllResultsForExerciseSubject(allResults, exercise).filter(
    (result) => result.date.getTime() > new Date().getTime() - 1000 * 60 * 60
  );
  if (resultsToday.length > 0) {
    return [
      resultsToday.reduce(
        (previous, current) => {
          previous.priorityValue += (Math.round((current.date.getTime() - new Date().getTime()) / 60000) + 60) * -3;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_DONE_IN_LAST_HOUR',
          priorityValue: 0
        }
      )
    ];
  }
  return noPriority(exercise);
}
