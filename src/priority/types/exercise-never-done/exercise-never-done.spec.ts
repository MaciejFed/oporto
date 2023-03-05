import { exerciseNeverDone, VALUE_EXERCISE_NEVER_DONE } from './exercise-never-done';
import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { ExerciseResultContext, noPriority } from '../../priority';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';

describe('Priority - EXERCISE_NEVER_DONE', () => {
  it('Generating EXERCISE_NEVER_DONE if exercise never done', () => {
    const testExercise = new VerbExercise();
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_NEVER_DONE', VALUE_EXERCISE_NEVER_DONE);
    const actualPriority = exerciseNeverDone(testExercise, { exerciseResults: [] } as unknown as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Not Generating EXERCISE_NEVER_DONE if exercise was done at least once', () => {
    const testExercise = new VerbExercise();
    const differentTestExercise = new NounTranslationExercise();
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const resultsForNoun = generateResultForExercise(differentTestExercise, true, 'keyboard', 1);
    const actualPriority = exerciseNeverDone(testExercise, {
      exerciseResults: [results, resultsForNoun].flatMap((r) => r)
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(noPriority(testExercise));
  });
});
