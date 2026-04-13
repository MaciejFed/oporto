import { boolean } from 'yargs';
import { areSameCalendarDay } from '../../../common/common';
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

const today = new Date();

export function exerciseDoneToday(exercise: Exercise, { exerciseSubjectResults }: ExerciseResultContext): Priority[] {
  const resultsToday = exerciseSubjectResults.filter((result) => areSameCalendarDay(result.date, today));
  if (resultsToday.length > 0) {
    const result: Priority = {
      exercise: exercise,
      priorityName: 'EXERCISE_DONE_TODAY',
      priorityValue: valueDoneToday(resultsToday.length)
    };
    if (exercise.exerciseType === 'VerbExercise') {
      return [
        {
          exercise,
          priorityName: 'EXERCISE_DONE_TODAY',
          priorityValue: result.priorityValue / 4
        }
      ];
    }
    return [result];
  }

  return noPriority(exercise);
}
