import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { exerciseCorrect, VALUE_EXERCISE_CORRECT } from './exercise-correct';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { ExerciseResultContext } from '../../priority';

describe('Priority - EXERCISE_CORRECT', () => {
  it('Exercise Correct 1 Time', () => {
    const testExercise = new VerbExercise();
    const exerciseResults = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_CORRECT);
    const actualPriority = exerciseCorrect(testExercise, { exerciseResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Correct 3 Times', () => {
    const testExercise = new VerbTranslationExercise();
    const exerciseResults = [
      generateResultForExercise(testExercise, true, 'keyboard', 2),
      generateResultForExercise(testExercise, false, 'keyboard', 1),
      generateResultForExercise(testExercise, true, 'keyboard', 1)
    ].flatMap((r) => r);
    const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_CORRECT * 3);
    const actualPriority = exerciseCorrect(testExercise, { exerciseResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
