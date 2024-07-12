import { ExerciseProgress, getSingleExerciseProgress, ProgressType } from './progress';
import { Result } from '../result';
import { BaseWordType, Exercise } from '../../exercise/exercise';
import { logger } from '../../common/logger';

export const progressExerciseTypes = [
  'NounTranslation',
  'GermanNounTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'VerbTranslation',
  'GermanVerbTranslation',
  'VerbExercise',
  'GermanVerbExercise',
  'GermanCaseExercise',
  'GermanOtherTranslation'
] as const;

type ExerciseTypeKey = (typeof progressExerciseTypes)[number];

type PointsMissing = {
  baseWord: string;
  pointsMissing: number;
  incorrectAnswers: number;
  total: number;
};

export type ProgressDetails = {
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

const emptyProgressAggregate = () =>
  progressExerciseTypes.reduce(
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

const emptyWordProgressAggregate = () =>
  Object.values(BaseWordType).reduce(
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
    const key = ep.progressType;
    const baseWords = [...new Set(typeToDetails[key].baseWords.concat(ep.exercise.getBaseWordAsString() || ''))];
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
      if (curr.progressType === ProgressType.NEVER_DONE || curr.progressType === ProgressType.DONE) return prev;
      const exists = prev.find((res) => res.baseWord === baseWord);
      if (!exists) {
        const currPointsMissing = curr.correctAnswers - curr.incorrectAnswers;
        return prev.concat({
          baseWord,
          pointsMissing: currPointsMissing,
          incorrectAnswers: curr.incorrectAnswers,
          total: curr.incorrectAnswers * INCORRECT_ANSWER_BONUS + currPointsMissing
        });
      }
      return prev.map((res) => {
        if (res.baseWord === baseWord) {
          const currPointsMissing = res.pointsMissing + curr.correctAnswers - curr.incorrectAnswers;
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
  }, emptyProgressAggregate());

  const allBaseWords = [...new Set(exercisesFiltered.map((exercise) => exercise.getBaseWordAsString() || ''))];
  const wordProgressAggregate: WordProgressAggregate = allBaseWords.reduce((prev, curr) => {
    const wordExerciseProgress = exercisesProgress.filter((ep) => ep.exercise.getBaseWordAsString() === curr);
    const neverDoneCount = wordExerciseProgress.filter((ep) => ep.progressType === ProgressType.NEVER_DONE).length;
    const inProgressCount = wordExerciseProgress.filter((ep) => ep.progressType === ProgressType.IN_PROGRESS).length;
    const doneProgressCount = wordExerciseProgress.filter((ep) => ep.progressType === ProgressType.DONE).length;
    const wordType = wordExerciseProgress[0].exercise.getBaseWordType()!;

    if (doneProgressCount > 0 && inProgressCount === 0 && neverDoneCount === 0) {
      return {
        ...prev,
        [wordType]: {
          ...prev[wordType],
          [ProgressType.DONE]: {
            baseWords: prev[wordType].DONE.baseWords.concat(curr),
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
            baseWords: prev[wordType].IN_PROGRESS.baseWords.concat(curr),
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
            baseWords: prev[wordType].NEVER_DONE.baseWords.concat(curr),
            count: prev[wordType].NEVER_DONE.count + 1
          }
        }
      };
    }
    logger.error('Unexpected state');
    return prev;
  }, emptyWordProgressAggregate());

  return {
    words: wordProgressAggregate,
    exercises: progressAggregate,
    pointsMissing
  };
}
