import { Exercise } from '../../../exercise/exercise';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { TranslationExercise } from '../../../exercise/translation/translation-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { Result } from '../../../service/result';
import { getProgress, getSingleExerciseProgress } from '../../../service/progress';
import { logger } from '../../../common/logger';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';

export const VALUE_EXERCISE_VERB_NEVER_TRANSLATED = -500;

const verbs: string[] = [];

export function exerciseVerbNeverTranslated(
  exercise: Exercise,
  { exerciseSubjectResults }: ExerciseResultContext
): Priority[] {
  if (!(exercise instanceof VerbExercise)) {
    return noPriority(exercise);
  }
  const progress = getSingleExerciseProgress(
    exerciseSubjectResults,
    VerbTranslationExercise.new(exercise.verb, 'toPortuguese')
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
