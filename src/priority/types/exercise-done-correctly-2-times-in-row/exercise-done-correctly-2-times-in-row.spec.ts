import { VerbExercise } from '../../../exercise/verb-exercise';
import { ExerciseResultContext } from '../../priority';
import { generateResultForExercise } from '../../priority.util';

import {
  exerciseDoneCorrectly2TimesInRow,
  VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW
} from './exercise-done-correctly-2-times-in-row';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';

describe('Priority - EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW', () => {
  it('Exercise Done Correctly Today 2 Times In A Row', () => {
    const testExercise = new NounTranslationExercise();
    const firstTimeError = generateResultForExercise(testExercise, false, 'keyboard', 1);
    const thenCorrect = generateResultForExercise(testExercise, true, 'keyboard', 2);
    const actualPriority = exerciseDoneCorrectly2TimesInRow(testExercise, {
      exerciseSubjectResults: [firstTimeError, thenCorrect].flatMap((r) => r)
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW);
  });

  it('Exercise Done Correctly Today 1 Time In A Row', () => {
    const testExercise = new VerbExercise();
    const exerciseSubjectResults = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const actualPriority = exerciseDoneCorrectly2TimesInRow(testExercise, {
      exerciseSubjectResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
