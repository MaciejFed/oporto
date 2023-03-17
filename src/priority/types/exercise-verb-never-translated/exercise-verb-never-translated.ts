import { Exercise } from '../../../exercise/exercise';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { Result } from '../../../service/result';

export const VALUE_EXERCISE_VERB_NEVER_TRANSLATED = -150;

function isTranslatedProperly(result: Result, exercise: Exercise) {
  return (
    result.exercise.exerciseType === 'VerbTranslation' &&
    (result.exercise as unknown as TranslationExercise).isTranslationSubjectEqual(exercise) &&
    result.wasCorrect
  );
}

export function exerciseVerbNeverTranslated(exercise: Exercise, { allResults }: ExerciseResultContext): Priority[] {
  if (!(exercise instanceof VerbExercise)) {
    return noPriority(exercise);
  }

  const translatedProperlyResults = allResults.filter((result) => isTranslatedProperly(result, exercise));

  if (translatedProperlyResults.length < 3) {
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
