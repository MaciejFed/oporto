import { exerciseNeverDone, VALUE_EXERCISE_NEVER_DONE } from './exerciseNeverDone';
import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verbExercise';
import { noPriority } from '../../priority';
import { NounTranslationExercise } from '../../../exercise/translation/nounTranslationExercise';

describe('Priority - EXERCISE_NEVER_DONE', () => {
  it('Generating EXERCISE_NEVER_DONE if exercise never done', () => {
    const testExercise = new VerbExercise();
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_NEVER_DONE', VALUE_EXERCISE_NEVER_DONE);
    const actualPriority = exerciseNeverDone(testExercise, []);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Not Generating EXERCISE_NEVER_DONE if exercise was done at least once', () => {
    const testExercise = new VerbExercise();
    const differentTestExercise = new NounTranslationExercise();
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const resultsForNoun = generateResultForExercise(differentTestExercise, true, 'keyboard', 1);
    const actualPriority = exerciseNeverDone(
      testExercise,
      [results, resultsForNoun].flatMap((r) => r)
    );

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(noPriority(testExercise));
  });
});
