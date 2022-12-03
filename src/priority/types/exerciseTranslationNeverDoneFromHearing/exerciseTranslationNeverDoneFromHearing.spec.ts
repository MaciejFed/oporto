import { NounTranslationExercise } from '../../../exercise/translation/nounTranslationExercise';
import { generateResultForExercise } from '../../priority.util';
import {
  exerciseTranslationNeverDoneFromHearing,
  VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING
} from './exerciseTranslationNeverDoneFromHearing';

describe('Priority - EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING', () => {
  it('Exercise Translation Never Done From Hearing', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneFromHearing(toPortugueseTranslationExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING);
  });

  it('Exercise Translation Done From Hearing', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    const toPortugueseFromHearingTranslationExercise = new NounTranslationExercise();
    toPortugueseFromHearingTranslationExercise.translationType = 'toPortugueseFromHearing';
    toPortugueseFromHearingTranslationExercise.noun = toPortugueseTranslationExercise.noun;

    const results = generateResultForExercise(toPortugueseFromHearingTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneFromHearing(toPortugueseTranslationExercise, results);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
