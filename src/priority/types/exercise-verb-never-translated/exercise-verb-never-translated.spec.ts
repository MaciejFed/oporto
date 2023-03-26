import { Exercise } from '../../../exercise/exercise';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { exerciseVerbNeverTranslated, VALUE_EXERCISE_VERB_NEVER_TRANSLATED } from './exercise-verb-never-translated';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { Result } from '../../../service/result';
import { ExerciseResultContext } from '../../priority';

const getAllResults = () => [
  {
    exercise: new VerbTranslationExercise(),
    wasCorrect: true
  },
  {
    exercise: new VerbTranslationExercise(),
    wasCorrect: false
  },
  {
    exercise: new VerbTranslationExercise(),
    wasCorrect: true
  }
];

describe('exerciseVerbNeverTranslated', () => {
  const verbExercise = new VerbExercise();
  const translationExercise = new VerbTranslationExercise();

  it('should return no priority if the given exercise is not an instance of VerbExercise', () => {
    const exercise = new NounTranslationExercise();
    const result = exerciseVerbNeverTranslated(exercise, {
      exerciseSubjectResults: getAllResults()
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
      exerciseSubjectResults: getAllResults()
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
    const newTranslationExercise = new VerbTranslationExercise();
    newTranslationExercise.isTranslationSubjectEqual = jest.fn().mockReturnValue(true);
    const exerciseSubjectResults = [...getAllResults(), { exercise: newTranslationExercise, wasCorrect: true }];
    const result = exerciseVerbNeverTranslated(verbExercise, {
      exerciseSubjectResults
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
