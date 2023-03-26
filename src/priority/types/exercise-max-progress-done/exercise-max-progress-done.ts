import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { noPriority, Priority } from '../../priority';
import { RatioRange } from '../../../service/progress';
import { getAllResultsForExercise } from '../../../repository/result-repository';

export const VALUE_EXERCISE_MAX_PROGRESS_DONE = -1000;

export function exerciseMaxProgressDone(exercise: Exercise, results: Result[], ratio: RatioRange): Priority[] {
  const correctResultsForExercise = getAllResultsForExercise(results, exercise).filter((r) => r.wasCorrect);
  if (ratio === exercise.getMaxProgressRange() && exercise.getMinAnswerCount() <= correctResultsForExercise.length) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_MAX_PROGRESS_DONE',
        priorityValue: VALUE_EXERCISE_MAX_PROGRESS_DONE
      }
    ];
  }
  return noPriority(exercise);
}
