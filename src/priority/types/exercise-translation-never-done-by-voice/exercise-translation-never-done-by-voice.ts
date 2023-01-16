import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE = -250;

export function exerciseTranslationNeverDoneByVoice(exercise: Exercise, results: Result[]): Priority[] {
  if (!(exercise instanceof TranslationExercise) || !exercise.isTranslationToPortuguese()) {
    return noPriority(exercise);
  }
  const fromHearingDoneByVoice = results.filter((result) => {
    if (
      result.exercise.exerciseType === exercise.exerciseType &&
      (result.exercise as unknown as TranslationExercise).isTranslationSubjectEqual(exercise)
    ) {
      const translationExercise = result.exercise as unknown as TranslationExercise;
      return (
        translationExercise.isTranslationToPortugueseFromHearing() &&
        result.wasCorrect &&
        result.answerInputType === 'voice'
      );
    }
    return false;
  });
  if (fromHearingDoneByVoice.length === 0) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE',
        priorityValue: VALUE_EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE
      }
    ];
  }
  return noPriority(exercise);
}
