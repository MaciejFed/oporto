import { BaseWordType, Exercise } from '../../exercise/exercise';
import { ProgressAggregate } from '../progress/progress-aggregate';
import { logger } from '../../common/logger';
import { ExerciseProgress } from '../progress/progress';

export const IN_PROGRESS_LIMIT_MAP: Record<BaseWordType, number> = {
  [BaseWordType.NOUN]: 10,
  [BaseWordType.VERB]: 10,
  [BaseWordType.ADJECTIVE]: 8,
  [BaseWordType.OTHER]: 10
};

export function removeBaseWordLimit(
  exercises: ExerciseProgress[],
  { words }: ProgressAggregate,
  limit: Record<BaseWordType, number> = IN_PROGRESS_LIMIT_MAP
): ExerciseProgress[] {
  let currentlyInProgressLimit: Record<BaseWordType, string[]> = {
    [BaseWordType.NOUN]: words.NOUN.IN_PROGRESS.baseWords.slice(0, limit[BaseWordType.NOUN]),
    [BaseWordType.VERB]: words.VERB.IN_PROGRESS.baseWords.slice(0, limit[BaseWordType.VERB]),
    [BaseWordType.ADJECTIVE]: words.ADJECTIVE.IN_PROGRESS.baseWords.slice(0, limit[BaseWordType.ADJECTIVE]),
    [BaseWordType.OTHER]: words.OTHER.IN_PROGRESS.baseWords.slice(0, limit[BaseWordType.OTHER])
  };

  const inLimit = (baseWord: string, baseWordType: BaseWordType) => {
    if (
      currentlyInProgressLimit[baseWordType].length < limit[baseWordType] &&
      !currentlyInProgressLimit[baseWordType].includes(baseWord)
    ) {
      logger.info(`Allowing [${baseWord}] base [${baseWordType}] is not within limit [${limit[baseWordType]}]`);
      currentlyInProgressLimit = {
        ...currentlyInProgressLimit,
        [baseWordType]: currentlyInProgressLimit[baseWordType].concat(baseWord)
      };
      return true;
    }
    return currentlyInProgressLimit[baseWordType].includes(baseWord);
  };

  return exercises.filter(({ exercise }) => {
    const baseWord = exercise.getBaseWordAsString();
    const baseWordType = exercise.getBaseWordType();
    if (baseWord && baseWordType) return inLimit(baseWord, baseWordType);
    return true;
  });
}
