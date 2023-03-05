import { generatePriority, generateResultForExerciseDaysAgo } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { Result } from '../../../service/result';
import { exerciseDoneToday, valueDoneToday } from './exercise-done-today';
import { ExerciseResultContext } from '../../priority';

describe('Priority - EXERCISE_DONE_TODAY', () => {
  it('Exercise Done Today 1 Time', () => {
    const testExercise = new VerbExercise();
    const differentExerciseDoneToday = new NounTranslationExercise();
    const allResults = [
      generateResultForExerciseDaysAgo(testExercise, true, 0),
      generateResultForExerciseDaysAgo(differentExerciseDoneToday, true, 0),
      generateResultForExerciseDaysAgo(testExercise, true, 1),
      generateResultForExerciseDaysAgo(testExercise, true, 2)
    ];
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(1));
    const actualPriority = exerciseDoneToday(testExercise, { allResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Done Today N Times', () => {
    const testExercise = new VerbExercise();
    const allResults: Result[] = [];
    for (let i = 2; i < 8; i++) {
      allResults.push(generateResultForExerciseDaysAgo(testExercise, true, 0));
      const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(i - 1));
      const actualPriority = exerciseDoneToday(testExercise, { allResults } as ExerciseResultContext);

      expect(actualPriority.length).toEqual(1);
      expect(actualPriority).toStrictEqual(expectedPriority);
    }
  });
});
