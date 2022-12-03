import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verbExercise';
import { exerciseCorrect, VALUE_EXERCISE_CORRECT } from './exerciseCorrect';
import { VerbTranslationExercise } from '../../../exercise/translation/verbTranslationExercise';

describe('Priority - EXERCISE_CORRECT', () => {
  it('Exercise Correct 1 Time', () => {
    const testExercise = new VerbExercise();
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_CORRECT);
    const actualPriority = exerciseCorrect(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Correct 3 Times', () => {
    const testExercise = new VerbTranslationExercise();
    const results = [
      generateResultForExercise(testExercise, true, 'keyboard', 2),
      generateResultForExercise(testExercise, false, 'keyboard', 1),
      generateResultForExercise(testExercise, true, 'keyboard', 1)
    ].flatMap((r) => r);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_CORRECT * 3);
    const actualPriority = exerciseCorrect(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
