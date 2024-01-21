import { generateAllPossibleExercises } from '../../exercise/generator';
import {ExerciseProgress, getAllUniqueWordsAsExercises, getSingleExerciseProgress} from './progress';
import { readAllResults } from '../../server/db';
import {getAllResults, toResultsParsed} from "../../repository/result-repository";

enum ProgressType {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  NEVER_DONE = 'NEVER_DONE'
}

const progressExerciseTypes = [
  'NounTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'VerbTranslation',
] as const;

type ExerciseTypeKey = (typeof progressExerciseTypes)[number];

type ProgressDetails = {
  countAll: number;
  countWordsUnique: number;
  baseWords: string[];
};

type ProgressAggregate = {
  [K in ExerciseTypeKey]: Record<ProgressType, ProgressDetails>;
};

const emptyProgressAggregate: ProgressAggregate = progressExerciseTypes.reduce(
  (prev, curr) => ({
    ...prev,
    ...{
      [curr]: {
        [ProgressType.DONE]: {
          countAll: 0,
          countWordsUnique: 0,
          baseWords: []
        },
        [ProgressType.IN_PROGRESS]: {
          countAll: 0,
          countWordsUnique: 0,
          baseWords: []
        },
        [ProgressType.NEVER_DONE]: {
          countAll: 0,
          countWordsUnique: 0,
          baseWords: []
        }
      }
    }
  }),
  {}
) as ProgressAggregate;

export async function getProgressAggregate(): Promise<ProgressAggregate> {
  const allResults = toResultsParsed(await readAllResults());
  const allExercises = getAllUniqueWordsAsExercises();
  const exercisesProgress = allExercises
      .map((exercise) => getSingleExerciseProgress(allResults, exercise))
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
        countAll: typeToDetails[key].countAll + 1,
        countWordsUnique: baseWords.length,
        baseWords
      }
    };
  };

  return exercisesProgress.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.exercise.exerciseType]: {
        ...prev[curr.exercise.exerciseType as ExerciseTypeKey],
        ...addProgress(prev[curr.exercise.exerciseType as ExerciseTypeKey], curr)
      }
    };
  }, emptyProgressAggregate);
}
