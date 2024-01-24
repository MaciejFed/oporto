import { ExerciseProgress, getSingleExerciseProgress } from './progress';
import { Result } from '../result';
import { Exercise } from '../../exercise/exercise';

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

type ProgressDetails = {
  count: number;
  baseWords: string[];
};

type ExerciseProgressAggregate = {
  [K in ExerciseTypeKey]: Record<ProgressType, ProgressDetails>;
};

type WordProgressAggregate = {
  [P in ProgressType]: ProgressDetails;
};

type ProgressAggregate = {
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

const emptyWordProgressAggregate: WordProgressAggregate = {
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
};

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
    const baseWords = [...new Set(typeToDetails[key].baseWords.concat(ep.exercise.getBaseWordAsString() || ''))];
    return {
      ...typeToDetails,
      [key]: {
        count: baseWords.length,
        baseWords
      }
    };
  };

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

    if (doneProgressCount > 0 && inProgressCount === 0 && neverDoneCount === 0) {
      return {
        ...prev,
        [ProgressType.DONE]: {
          baseWords: prev.DONE.baseWords.concat(curr),
          count: prev.DONE.count + 1
        }
      };
    }
    if (inProgressCount > 0 || (neverDoneCount > 0 && doneProgressCount > 0)) {
      return {
        ...prev,
        [ProgressType.IN_PROGRESS]: {
          baseWords: prev.IN_PROGRESS.baseWords.concat(curr),
          count: prev.IN_PROGRESS.count + 1
        }
      };
    }
    if (neverDoneCount > 0 && doneProgressCount === 0 && inProgressCount === 0) {
      return {
        ...prev,
        [ProgressType.NEVER_DONE]: {
          baseWords: prev.NEVER_DONE.baseWords.concat(curr),
          count: prev.NEVER_DONE.count + 1
        }
      };
    }
    throw new Error('Unexpected state');
  }, emptyWordProgressAggregate);

  return {
    words: wordProgressAggregate,
    exercises: progressAggregate
  };
}
