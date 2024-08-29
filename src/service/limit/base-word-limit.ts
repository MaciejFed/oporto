import { BaseWordType, Exercise } from '../../exercise/exercise';
import { ProgressAggregate } from '../progress/progress-aggregate';
import { logger } from '../../common/logger';
import { ExerciseProgress } from '../progress/progress';
import { Language } from '../../common/language';

type LimitMap = Record<Language, Record<BaseWordType, number>>;

export const IN_PROGRESS_LIMIT_MAP: LimitMap = {
  [Language.German]: {
    [BaseWordType.NOUN]: 10,
    [BaseWordType.VERB]: 10,
    [BaseWordType.ADJECTIVE]: 8,
    [BaseWordType.OTHER]: 10
  },
  [Language.Portuguese]: {
    [BaseWordType.NOUN]: 10,
    [BaseWordType.VERB]: 10,
    [BaseWordType.ADJECTIVE]: 8,
    [BaseWordType.OTHER]: 10
  },
  [Language.Polish]: {
    [BaseWordType.NOUN]: 5,
    [BaseWordType.VERB]: 2,
    [BaseWordType.ADJECTIVE]: 8,
    [BaseWordType.OTHER]: 5
  }
};

export function removeBaseWordLimit(
  language: Language,
  exercises: ExerciseProgress[],
  { words }: ProgressAggregate,
  limit: LimitMap = IN_PROGRESS_LIMIT_MAP
): ExerciseProgress[] {
  let currentlyInProgressLimit: Record<BaseWordType, string[]> = {
    [BaseWordType.NOUN]: words.NOUN.IN_PROGRESS.baseWords.slice(0, limit[language][BaseWordType.NOUN]),
    [BaseWordType.VERB]: words.VERB.IN_PROGRESS.baseWords.slice(0, limit[language][BaseWordType.VERB]),
    [BaseWordType.ADJECTIVE]: words.ADJECTIVE.IN_PROGRESS.baseWords.slice(0, limit[language][BaseWordType.ADJECTIVE]),
    [BaseWordType.OTHER]: words.OTHER.IN_PROGRESS.baseWords.slice(0, limit[language][BaseWordType.OTHER])
  };

  const inLimit = (baseWord: string, baseWordType: BaseWordType) => {
    if (
      currentlyInProgressLimit[baseWordType].length < limit[language][baseWordType] &&
      !currentlyInProgressLimit[baseWordType].includes(baseWord)
    ) {
      logger.info(
        `Allowing [${baseWord}] base [${baseWordType}] is not within limit [${limit[language][baseWordType]}]`
      );
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
