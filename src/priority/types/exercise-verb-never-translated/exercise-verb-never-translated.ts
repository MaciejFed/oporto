import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_VERB_NEVER_TRANSLATED = -150;

export function exerciseVerbNeverTranslated(exercise: Exercise, results: Result[]): Priority[] {
  if (!(exercise instanceof VerbExercise)) {
    return noPriority(exercise);
  }
  const translatedProperly = results.filter((result) => {
    if (
      result.exercise.exerciseType === 'VerbTranslation' &&
      (result.exercise as unknown as TranslationExercise).isTranslationSubjectEqual(exercise)
    ) {
      return result.wasCorrect;
    }
    return false;
  });
  if (translatedProperly.length < 3) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_VERB_NEVER_TRANSLATED',
        priorityValue: VALUE_EXERCISE_VERB_NEVER_TRANSLATED
      }
    ];
  }
  return noPriority(exercise);
}
