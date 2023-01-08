import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verbExercise';
import { exerciseWrong, VALUE_EXERCISE_WRONG } from './exerciseWrong';

describe('Priority - EXERCISE_WRONG', () => {
  it('Exercise Wrong 1 Time', () => {
    const testExercise = new VerbExercise();
    const results = generateResultForExercise(testExercise, false, 'keyboard', 1);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_WRONG);
    const actualPriority = exerciseWrong(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Wrong 3 Times', () => {
    const testExercise = new VerbExercise();
    const results = [
      generateResultForExercise(testExercise, false, 'keyboard', 2),
      generateResultForExercise(testExercise, true, 'keyboard', 1),
      generateResultForExercise(testExercise, false, 'keyboard', 1)
    ].flatMap((r) => r);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_WRONG * 3);
    const actualPriority = exerciseWrong(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
