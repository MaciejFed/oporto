import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { exerciseWrong, VALUE_EXERCISE_WRONG } from './exercise-wrong';
import { ExerciseResultContext } from '../../priority';

describe('Priority - EXERCISE_WRONG', () => {
  it('Exercise Wrong 1 Time', () => {
    const testExercise = new VerbExercise();
    const exerciseResults = generateResultForExercise(testExercise, false, 'keyboard', 1);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_WRONG);
    const actualPriority = exerciseWrong(testExercise, { exerciseResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Wrong 3 Times', () => {
    const testExercise = new VerbExercise();
    const exerciseResults = [
      generateResultForExercise(testExercise, false, 'keyboard', 2),
      generateResultForExercise(testExercise, true, 'keyboard', 1),
      generateResultForExercise(testExercise, false, 'keyboard', 1)
    ].flatMap((r) => r);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_WRONG * 3);
    const actualPriority = exerciseWrong(testExercise, { exerciseResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
