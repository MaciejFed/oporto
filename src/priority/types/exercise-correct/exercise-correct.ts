import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/result-repository';
import { ExerciseResultContext, Priority } from '../../priority';
import { ExerciseProgress, RatioRange } from '../../../service/progress';

export const VALUE_EXERCISE_CORRECT = -10;

export function exerciseCorrect(exercise: Exercise, { exerciseResults }: ExerciseResultContext): Priority[] {
  return [
    exerciseResults
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
