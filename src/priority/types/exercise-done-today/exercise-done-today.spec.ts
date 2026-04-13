import { generatePriority, generateResultForExerciseDaysAgo } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { Result } from '../../../service/result';
import { exerciseDoneToday, valueDoneToday } from './exercise-done-today';
import { ExerciseResultContext } from '../../priority';
import { getAllResultsForExerciseSubject } from '../../../repository/result-repository';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';

describe('Priority - EXERCISE_DONE_TODAY', () => {
  it('Exercise Done Today 1 Time', () => {
    const testExercise = new VerbTranslationExercise();
    const differentExerciseDoneToday = new NounTranslationExercise();
    const allResults = [
      generateResultForExerciseDaysAgo(testExercise, true, 0),
      generateResultForExerciseDaysAgo(differentExerciseDoneToday, true, 0),
      generateResultForExerciseDaysAgo(testExercise, true, 1),
      generateResultForExerciseDaysAgo(testExercise, true, 2)
    ];
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(1));
    const actualPriority = exerciseDoneToday(testExercise, {
      exerciseSubjectResults: getAllResultsForExerciseSubject(allResults, testExercise)
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Done Today N Times', () => {
    const testExercise = new NounTranslationExercise();
    const exerciseSubjectResults: Result[] = [];
    for (let i = 2; i < 8; i++) {
      exerciseSubjectResults.push(generateResultForExerciseDaysAgo(testExercise, true, 0));
      const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(i - 1));
      const actualPriority = exerciseDoneToday(testExercise, { exerciseSubjectResults } as ExerciseResultContext);

      expect(actualPriority.length).toEqual(1);
      expect(actualPriority).toStrictEqual(expectedPriority);
    }
  });
});
