import { Exercise } from '../../../exercise/exercise';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { getProgress, getSingleExerciseProgress } from '../../../service/progress/progress';
import { logger } from '../../../common/logger';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { Language } from '../../../common/language';
import { GermanVerbTranslationExercise } from '../../../exercise/translation/de/german-verb-translation-exercise';
import { GermanVerbExercise } from '../../../exercise/german-verb-exercise';

export const VALUE_EXERCISE_VERB_NEVER_TRANSLATED = -500;

const verbs: string[] = [];

export function exerciseVerbNeverTranslated(
  exercise: Exercise,
  { exerciseSubjectResults, language }: ExerciseResultContext
): Priority[] {
  if (!(exercise instanceof VerbExercise) && !(exercise instanceof GermanVerbExercise)) {
    return noPriority(exercise);
  }
  const ExerciseType = language === Language.Portuguese ? VerbTranslationExercise : GermanVerbTranslationExercise;
  const progress = getSingleExerciseProgress(
    exerciseSubjectResults,
    // @ts-ignore
    ExerciseType.new(exercise.verb, 'toPortuguese')
  );
  if (progress.ratioRange !== '80-100') {
    if (!verbs.includes(exercise.verb.infinitive)) {
      logger.debug(`VerbExercise Prority: [${exercise.verb.infinitive}] [${progress.ratioRange}]`);
      verbs.push(exercise.verb.infinitive);
    }
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
