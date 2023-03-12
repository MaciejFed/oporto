import { Exercise } from '../../../exercise/exercise';
import { getAllResultsForExerciseSubject } from '../../../repository/result-repository';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export function valueDoneToday(doneTodayCount: number): number {
  switch (doneTodayCount) {
    case 1:
      return -30;
    case 2:
      return -90;
    case 3:
      return -200;
    case 4:
      return -350;
    default:
      return -1000;
  }
}

export function exerciseDoneToday(exercise: Exercise, { allResults }: ExerciseResultContext): Priority[] {
  const resultsToday = getAllResultsForExerciseSubject(allResults, exercise).filter(
    (result) => new Date(result.date).toDateString() === new Date().toDateString()
  );
  if (resultsToday.length > 0) {
    return [
      {
        exercise: exercise,
        priorityName: 'EXERCISE_DONE_TODAY',
        priorityValue: valueDoneToday(resultsToday.length)
      }
    ];
  }
  return noPriority(exercise);
}
