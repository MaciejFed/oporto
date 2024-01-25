import { ExerciseProgress, getSingleExerciseProgress } from './progress';
import { Result } from '../result';
import { BaseWordType, Exercise } from '../../exercise/exercise';
import { logger } from '../../common/logger';

enum ProgressType {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  NEVER_DONE = 'NEVER_DONE'
}

export const progressExerciseTypes = [
  'NounTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'VerbTranslation',
  'VerbExercise'
] as const;

type ExerciseTypeKey = (typeof progressExerciseTypes)[number];

type PointsMissing = {
  baseWord: string;
  pointsMissing: number;
  incorrectAnswers: number;
  total: number;
};

type ProgressDetails = {
  count: number;
  baseWords: string[];
};

type ExerciseProgressAggregate = {
  [K in ExerciseTypeKey]: Record<ProgressType, ProgressDetails>;
};

type WordProgressAggregate = {
  [P in BaseWordType]: Record<ProgressType, ProgressDetails>;
};

export type ProgressAggregate = {
  pointsMissing: PointsMissing[];
  exercises: ExerciseProgressAggregate;
  words: WordProgressAggregate;
};

const emptyProgressAggregate: ExerciseProgressAggregate = progressExerciseTypes.reduce(
  (prev, curr) => ({
    ...prev,
    ...{
      [curr]: {
        [ProgressType.DONE]: {
          count: 0,
          baseWords: []
        },
        [ProgressType.IN_PROGRESS]: {
          count: 0,
          baseWords: []
        },
        [ProgressType.NEVER_DONE]: {
          count: 0,
          baseWords: []
        }
      }
    }
  }),
  {}
) as ExerciseProgressAggregate;

const emptyWordProgressAggregate: WordProgressAggregate = Object.values(BaseWordType).reduce(
  (prev, curr) => ({
    ...prev,
    ...{
      [curr]: {
        [ProgressType.DONE]: {
          count: 0,
          baseWords: []
        },
        [ProgressType.IN_PROGRESS]: {
          count: 0,
          baseWords: []
        },
        [ProgressType.NEVER_DONE]: {
          count: 0,
          baseWords: []
        }
      }
    }
  }),
  {}
) as WordProgressAggregate;

export function getProgressAggregate(results: Result[], exercises: Exercise[]): ProgressAggregate {
  const exercisesFiltered = exercises.filter((exercise) =>
    progressExerciseTypes.includes(exercise.exerciseType as ExerciseTypeKey)
  );
  const exercisesProgress = exercisesFiltered
    .map((exercise) => getSingleExerciseProgress(results, exercise))
    .sort((a, b) => a.ratio - b.ratio);

  const addProgress = (
    typeToDetails: Record<ProgressType, ProgressDetails>,
    ep: ExerciseProgress
  ): Record<ProgressType, ProgressDetails> => {
    const key =
      // eslint-disable-next-line no-nested-ternary
      ep.ratioRange === 'Never Done'
        ? ProgressType.NEVER_DONE
        : ep.ratioRange === '80-100'
        ? ProgressType.DONE
        : ProgressType.IN_PROGRESS;
    const baseWords = [...new Set(typeToDetails[key].baseWords.concat(ep.exercise.getBaseWordAsString() || ''))].sort();
    return {
      ...typeToDetails,
      [key]: {
        count: baseWords.length,
        baseWords
      }
    };
  };

  const pointsMissing = exercisesProgress
    .reduce<PointsMissing[]>((prev, curr) => {
      const INCORRECT_ANSWER_BONUS = 25 * (curr.exercise.exerciseType === 'NounTranslation' ? 3 : 1);
      const baseWord = curr.exercise.getBaseWordAsString() || '';
      if (curr.ratioRange === 'Never Done' || curr.ratioRange === '80-100') return prev;
      const exists = prev.find((res) => res.baseWord === baseWord);
      if (!exists) {
        const currPointsMissing = 80 - curr.ratio;
        return prev.concat({
          baseWord,
          pointsMissing: currPointsMissing,
          incorrectAnswers: curr.incorrectAnswers,
          total: curr.incorrectAnswers * INCORRECT_ANSWER_BONUS + currPointsMissing
        });
      }
      return prev.map((res) => {
        if (res.baseWord === baseWord) {
          const currPointsMissing = res.pointsMissing + 80 - curr.ratio;
          const currIncorrectAnswers = res.incorrectAnswers + curr.incorrectAnswers;
          return {
            baseWord,
            pointsMissing: currPointsMissing,
            incorrectAnswers: currIncorrectAnswers,
            total: currIncorrectAnswers * INCORRECT_ANSWER_BONUS + currPointsMissing
          };
        }
        return res;
      });
    }, [])
    .sort((a, b) => b.total - a.total);

  const progressAggregate = exercisesProgress.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.exercise.exerciseType]: {
        ...prev[curr.exercise.exerciseType as ExerciseTypeKey],
        ...addProgress(prev[curr.exercise.exerciseType as ExerciseTypeKey], curr)
      }
    };
  }, emptyProgressAggregate);

  const allBaseWords = [...new Set(exercisesFiltered.map((exercise) => exercise.getBaseWordAsString() || ''))];
  const wordProgressAggregate: WordProgressAggregate = allBaseWords.reduce((prev, curr) => {
    const wordExerciseProgress = exercisesProgress.filter((ep) => ep.exercise.getBaseWordAsString() === curr);
    const neverDoneCount = wordExerciseProgress.filter((ep) => ep.ratioRange === 'Never Done').length;
    const inProgressCount = wordExerciseProgress.filter(
      (ep) => ep.ratioRange === '0-39' || ep.ratioRange === '40-79'
    ).length;
    const doneProgressCount = wordExerciseProgress.filter((ep) => ep.ratioRange === '80-100').length;
    const wordType = wordExerciseProgress[0].exercise.getBaseWordType()!;

    if (doneProgressCount > 0 && inProgressCount === 0 && neverDoneCount === 0) {
      return {
        ...prev,
        [wordType]: {
          ...prev[wordType],
          [ProgressType.DONE]: {
            baseWords: prev[wordType].DONE.baseWords.concat(curr).sort(),
            count: prev[wordType].DONE.count + 1
          }
        }
      };
    }
    if (inProgressCount > 0 || (neverDoneCount > 0 && doneProgressCount > 0)) {
      return {
        ...prev,
        [wordType]: {
          ...prev[wordType],
          [ProgressType.IN_PROGRESS]: {
            baseWords: prev[wordType].IN_PROGRESS.baseWords.concat(curr).sort(),
            count: prev[wordType].IN_PROGRESS.count + 1
          }
        }
      };
    }
    if (neverDoneCount > 0 && doneProgressCount === 0 && inProgressCount === 0) {
      return {
        ...prev,
        [wordType]: {
          ...prev[wordType],
          [ProgressType.NEVER_DONE]: {
            baseWords: prev[wordType].NEVER_DONE.baseWords.concat(curr).sort(),
            count: prev[wordType].NEVER_DONE.count + 1
          }
        }
      };
    }
    logger.error('Unexpected state');
    return prev;
  }, emptyWordProgressAggregate);

  return {
    words: wordProgressAggregate,
    exercises: progressAggregate,
    pointsMissing
  };
}
