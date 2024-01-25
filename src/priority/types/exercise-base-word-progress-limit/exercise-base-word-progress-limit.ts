import { BaseWordType, Exercise } from '../../../exercise/exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
export const VALUE_EXERCISE_LIMIT = -2500;

const inProgressLimitMap: Record<BaseWordType, number> = {
  [BaseWordType.NOUN]: 10,
  [BaseWordType.VERB]: 5,
  [BaseWordType.ADJECTIVE]: 5,
  [BaseWordType.OTHER]: 10
};

export function exerciseBaseWordProgressLimit(
  exercise: Exercise,
  { progressAggregate: { words } }: ExerciseResultContext
): Priority[] {
  const baseWord = exercise.getBaseWordAsString();
  const baseWordType = exercise.getBaseWordType();
  if (!baseWord || !baseWordType) {
    return noPriority(exercise);
  }
  const wordTypeLimit = inProgressLimitMap[baseWordType];

  const currentBaseWordsInProgress = words[baseWordType].IN_PROGRESS.baseWords;

  if (currentBaseWordsInProgress.length < wordTypeLimit) {
    return noPriority(exercise);
  }

  if (currentBaseWordsInProgress.indexOf(baseWord) < wordTypeLimit) {
    return noPriority(exercise);
  }

  return [
    {
      exercise,
      priorityName: 'EXERCISE_BASE_WORD_ABOVE_IN_PROGRESS_LIMIT',
      priorityValue: VALUE_EXERCISE_LIMIT
    }
  ];
}
