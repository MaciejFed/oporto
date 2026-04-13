import { VerbExercise } from '../../../exercise/verb-exercise';
import { generateResultForExercise } from '../../priority.util';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import {
  exerciseTranslationNeverDoneToEnglish,
  VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH
} from './exercise-translation-never-done-to-english';
import { ExerciseResultContext } from '../../priority';
import { readAll } from '../../../repository/exercises-repository';

describe('Priority - EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH', () => {
  it('Exercise Translation Never Done To English', () => {
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.noun = readAll().nouns[0];
    toEnglishTranslationExercise.translationType = 'toEnglish';
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    toPortugueseTranslationExercise.noun = readAll().nouns[1];
    const allResults = generateResultForExercise(toEnglishTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      exerciseSubjectResults: allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });

  it('Exercise Translation Never Done To English Correctly', () => {
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.noun = readAll().nouns[0];
    toEnglishTranslationExercise.translationType = 'toEnglish';
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    toPortugueseTranslationExercise.noun = readAll().nouns[0];
    const allResults = generateResultForExercise(toEnglishTranslationExercise, false, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      exerciseSubjectResults: allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
  });

  it('Exercise Translation Done To English Correctly', () => {
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.noun = readAll().nouns[0];
    toEnglishTranslationExercise.translationType = 'toEnglish';
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.translationType = 'toPortuguese';
    toPortugueseTranslationExercise.noun = readAll().nouns[0];
    const allResults = generateResultForExercise(toEnglishTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, {
      exerciseSubjectResults: allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });

  it('Exercise Non Translation', () => {
    const testExercise = new VerbExercise();
    const allResults = generateResultForExercise(testExercise, true, 'keyboard', 3);
    const actualPriority = exerciseTranslationNeverDoneToEnglish(testExercise, {
      exerciseSubjectResults: allResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
