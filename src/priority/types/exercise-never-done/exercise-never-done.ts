import { Exercise } from '../../../exercise/exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_NEVER_DONE = 25;

export function exerciseNeverDone(exercise: Exercise, { exerciseResults }: ExerciseResultContext): Priority[] {
  return exerciseResults.length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE', priorityValue: VALUE_EXERCISE_NEVER_DONE }]
    : noPriority(exercise);
}
