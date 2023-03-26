import { AdjectiveTranslationExercise } from '../../../exercise/translation/adjective-translation-exercise';
import { ExerciseResultContext } from '../../priority';
import { generateResultForExerciseMinutesAgo } from '../../priority.util';
import { exerciseDoneInLastHour } from './exercise-done-in-last-hour';

describe('Priority - EXERCISE_DONE_IN_LAST_HOUR', () => {
  it('Exercise Done 25 and 45 Minutes Ago', () => {
    const testExercise = new AdjectiveTranslationExercise();
    const exerciseSubjectResults = [
      generateResultForExerciseMinutesAgo(testExercise, 25),
      generateResultForExerciseMinutesAgo(testExercise, 45)
    ];
    const actualPriority = exerciseDoneInLastHour(testExercise, { exerciseSubjectResults } as ExerciseResultContext);

    expect(actualPriority.length).toBe(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_IN_LAST_HOUR');
    expect(actualPriority[0].priorityValue).toEqual(-105 - 45);
  });
});
