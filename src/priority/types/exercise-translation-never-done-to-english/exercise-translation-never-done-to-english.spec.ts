import { VerbExercise } from '../../../exercise/verb-exercise';
import { generateResultForExercise } from '../../priority.util';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import {
  exerciseTranslationNeverDoneToEnglish,
  VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH
} from './exercise-translation-never-done-to-english';
import { ExerciseResultContext } from '../../priority';

describe('Priority - EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH', () => {
  it('Exercise Translation Never Done To English', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    const allResults = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 3);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
  });

  it('Exercise Translation Never Done To English Correctly', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toEnglish';
    const allResults = generateResultForExercise(toPortugueseTranslationExercise, false, 'keyboard', 3);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
  });

  it('Exercise Translation Done To English Correctly', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toEnglish';
    const allResults = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });

  it('Exercise Non Translation', () => {
    const testExercise = new VerbExercise();
    const allResults = generateResultForExercise(testExercise, true, 'keyboard', 3);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(testExercise, { allResults } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });

  it('Exercise Translation Done To English', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toEnglish';
    const allResults = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
