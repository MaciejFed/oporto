import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { readAll } from '../../../repository/exercises-repository';
import { ExerciseResultContext } from '../../priority';
import { generateResultForExercise } from '../../priority.util';
import {
  exerciseTranslationNeverDoneFromHearing,
  VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING
} from './exercise-translation-never-done-from-hearing';

describe('Priority - EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING', () => {
  it('Exercise Translation Never Done From Hearing', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.noun = readAll().nouns[0];
    toPortugueseTranslationExercise.translationType = 'toPortugueseFromHearing';
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.translationType = 'toEnglish';
    toEnglishTranslationExercise.noun = readAll().nouns[1];
    const exerciseSubjectResults = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneFromHearing(toEnglishTranslationExercise, {
      exerciseSubjectResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING);
  });

  it('Exercise Translation Never Done From Hearing Correctly', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.noun = readAll().nouns[0];
    toPortugueseTranslationExercise.translationType = 'toPortugueseFromHearing';
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.translationType = 'toEnglish';
    toEnglishTranslationExercise.noun = readAll().nouns[0];
    const exerciseSubjectResults = generateResultForExercise(toPortugueseTranslationExercise, false, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneFromHearing(toEnglishTranslationExercise, {
      exerciseSubjectResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING');
    expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING);
  });

  it('Exercise Translation Done From Hearing Correctly', () => {
    const toPortugueseTranslationExercise = new NounTranslationExercise();
    toPortugueseTranslationExercise.noun = readAll().nouns[0];
    toPortugueseTranslationExercise.translationType = 'toPortugueseFromHearing';
    const toEnglishTranslationExercise = new NounTranslationExercise();
    toEnglishTranslationExercise.translationType = 'toEnglish';
    toEnglishTranslationExercise.noun = readAll().nouns[0];
    const exerciseSubjectResults = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
    const actualPriority = exerciseTranslationNeverDoneFromHearing(toEnglishTranslationExercise, {
      exerciseSubjectResults
    } as ExerciseResultContext);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
    expect(actualPriority[0].priorityValue).toEqual(0);
  });
});
