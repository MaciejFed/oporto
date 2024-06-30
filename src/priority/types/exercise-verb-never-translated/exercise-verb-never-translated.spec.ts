import { VerbExercise } from '../../../exercise/verb-exercise';
import { exerciseVerbNeverTranslated, VALUE_EXERCISE_VERB_NEVER_TRANSLATED } from './exercise-verb-never-translated';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { ExerciseResultContext } from '../../priority';
import { Person, readAll } from '../../../repository/exercises-repository';
import { Language } from '../../../common/language';

const verb = readAll().verbs[0];

const getAllResults = () => [
  {
    exercise: VerbTranslationExercise.new(verb, 'toPortuguese'),
    wasCorrect: true
  },
  {
    exercise: VerbTranslationExercise.new(verb, 'toPortuguese'),
    wasCorrect: false
  },
  {
    exercise: VerbTranslationExercise.new(verb, 'toPortuguese'),
    wasCorrect: true
  }
];

describe('exerciseVerbNeverTranslated', () => {
  const verbExercise = VerbExercise.new(verb, Person.ElaEleVocê, 'presentSimple');
  const translationExercise = VerbTranslationExercise.new(verb, 'toPortuguese');

  it('should return no priority if the given exercise is not an instance of VerbExercise', () => {
    const exercise = new NounTranslationExercise();
    const result = exerciseVerbNeverTranslated(exercise, {
      exerciseSubjectResults: getAllResults(),
      language: Language.Portuguese
    } as unknown as ExerciseResultContext);
    expect(result).toEqual([
      {
        exercise,
        priorityName: 'NO_PRIORITY',
        priorityValue: 0
      }
    ]);
  });

  it('should return a priority with VALUE_EXERCISE_VERB_NEVER_TRANSLATED if there are less than 3 correct translations', () => {
    translationExercise.isTranslationSubjectEqual = jest.fn().mockReturnValue(true);
    const result = exerciseVerbNeverTranslated(verbExercise, {
      exerciseSubjectResults: getAllResults(),
      language: Language.Portuguese
    } as unknown as ExerciseResultContext);

    expect(result).toEqual([
      {
        exercise: verbExercise,
        priorityName: 'EXERCISE_VERB_NEVER_TRANSLATED',
        priorityValue: VALUE_EXERCISE_VERB_NEVER_TRANSLATED
      }
    ]);
  });

  it('should return no priority if there are 3 or more correct translations', () => {
    const newTranslationExercise = VerbTranslationExercise.new(verb, 'toPortuguese');
    const exerciseSubjectResults = [...getAllResults(), { exercise: newTranslationExercise, wasCorrect: true }];
    const result = exerciseVerbNeverTranslated(verbExercise, {
      exerciseSubjectResults,
      language: Language.Portuguese
    } as unknown as ExerciseResultContext);

    expect(result).toEqual([
      {
        exercise: verbExercise,
        priorityName: 'NO_PRIORITY',
        priorityValue: 0
      }
    ]);
  });
});
