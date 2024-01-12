import { VerbExercise } from '../../../exercise/verb-exercise';
import { exerciseRandomness } from './exercise-randomness';
import { ExerciseResultContext } from '../../priority';

describe('Priority - EXERCISE_RANDOMNESS', () => {
  it('Exercise Randomness', () => {
    const testExercise = new VerbExercise();
    const actualPriority = exerciseRandomness(testExercise, {
      allExercises: [testExercise]
    } as unknown as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_RANDOMNESS');
    expect(actualPriority[0].priorityValue).toBeGreaterThan(0);
  });
});
