import { Exercise } from '../../../exercise/exercise';
import { getAllResultsForExerciseSubject } from '../../../repository/result-repository';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

const now = new Date();

export function exerciseDoneInLastHour(
  exercise: Exercise,
  { exerciseSubjectResults }: ExerciseResultContext
): Priority[] {
  const resultsToday = exerciseSubjectResults.filter(
    (result) => result.date.getTime() > now.getTime() - 1000 * 60 * 60
  );
  if (resultsToday.length > 0) {
    return [
      resultsToday.reduce(
        (previous, current) => {
          previous.priorityValue += (Math.round((current.date.getTime() - now.getTime()) / 60000) + 60) * -10;
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
