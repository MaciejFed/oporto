import { AdjectiveTranslationExercise } from '../../../exercise/translation/adjectiveTranslationExercise';
import { generateResultForExerciseMinutesAgo } from '../../priority.util';
import { exerciseDoneInLastHour } from './exerciseDoneInLastHour';

describe('Priority - EXERCISE_DONE_IN_LAST_HOUR', () => {
  it('Exercise Done 25 and 45 Minutes Ago', () => {
    const testExercise = new AdjectiveTranslationExercise();
    const results = [
      generateResultForExerciseMinutesAgo(testExercise, 25),
      generateResultForExerciseMinutesAgo(testExercise, 45)
    ];
    const actualPriority = exerciseDoneInLastHour(testExercise, results);

    expect(actualPriority.length).toBe(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_IN_LAST_HOUR');
    expect(actualPriority[0].priorityValue).toEqual(-105 - 45);
  });
});
