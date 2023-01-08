import { VerbExercise } from '../../../exercise/verbExercise';
import { generateResultForExercise } from '../../priority.util';

import {
  exerciseDoneCorrectly2TimesInRow,
  VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW
} from './exerciseDoneCorrectly2TimesInRow';

describe('Priority - EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW', () => {
  it('Exercise Done Correctly Today 2 Times In A Row', () => {
    const testExercise = new VerbExercise();
    const firstTimeError = generateResultForExercise(testExercise, false, 'keyboard', 1);
    const thenCorrect = generateResultForExercise(testExercise, true, 'keyboard', 2);
    const actualPriority = exerciseDoneCorrectly2TimesInRow(
      testExercise,
      [firstTimeError, thenCorrect].flatMap((r) => r)
    );

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW);
  });

  it('Exercise Done Correctly Today 1 Time In A Row', () => {
    const testExercise = new VerbExercise();
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const actualPriority = exerciseDoneCorrectly2TimesInRow(testExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
