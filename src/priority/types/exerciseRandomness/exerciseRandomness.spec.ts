import { generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verbExercise';
import { exerciseRandomness, VALUE_EXERCISE_RANDOMNESS_UP_LIMIT } from './exerciseRandomness';

describe('Priority - EXERCISE_RANDOMNESS', () => {
  it('Exercise Randomness', () => {
    const testExercise = new VerbExercise();
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const actualPriority = exerciseRandomness(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_RANDOMNESS');
    expect(actualPriority[0].priorityValue).toBeLessThan(VALUE_EXERCISE_RANDOMNESS_UP_LIMIT);
  });
});
