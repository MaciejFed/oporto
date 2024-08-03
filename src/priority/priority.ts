import { Exercise, ExerciseType } from '../exercise/exercise';
import { Result } from '../service/result';
import { exerciseNeverDone } from './types/exercise-never-done/exercise-never-done';
import { exerciseWrong } from './types/exercise-wrong/exercise-wrong';
import { exerciseVerbNeverTranslated } from './types/exercise-verb-never-translated/exercise-verb-never-translated';
import { exerciseDoneToday } from './types/exercise-done-today/exercise-done-today';
import { exerciseCorrect } from './types/exercise-correct/exercise-correct';
import { exerciseDoneInLastHour } from './types/exercise-done-in-last-hour/exercise-done-in-last-hour';
import { exerciseTranslationNeverDoneToEnglish } from './types/exercise-translation-never-done-to-english/exercise-translation-never-done-to-english';
import { exerciseTranslationNeverDoneFromHearing } from './types/exercise-translation-never-done-from-hearing/exercise-translation-never-done-from-hearing';
import { exerciseDoneCorrectly2TimesInRow } from './types/exercise-done-correctly-2-times-in-row/exercise-done-correctly-2-times-in-row';
import { exerciseRandomness } from './types/exercise-randomness/exercise-randomness';
import {
  ExerciseProgress,
  getExerciseProgressMap,
  getSingleExerciseProgress,
  ProgressType
} from '../service/progress/progress';
import { logger } from '../common/logger';
import { removeRepetitionFromBlocks } from '../common/common';
import performance from 'performance-now';
import { getProgressAggregate, ProgressAggregate } from '../service/progress/progress-aggregate';
import { Language } from '../common/language';
import { createTable } from '../commands/stat';
import { removeBaseWordLimit } from '../service/limit/base-word-limit';

export const VALUE_WRONG_TO_CORRECT_RATIO = 3;

export type PriorityName =
  | 'EXERCISE_NEVER_DONE'
  | 'EXERCISE_NEVER_DONE_BY_VOICE'
  | 'EXERCISE_TYPE_NEVER_DONE'
  | 'EXERCISE_WRONG'
  | 'EXERCISE_CORRECT'
  | 'EXERCISE_DONE_TODAY'
  | 'EXERCISE_DONE_IN_LAST_HOUR'
  | 'EXERCISE_LEARNED_TO_PORTUGUESE'
  | 'EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE'
  | 'EXERCISE_SENTENCE_UNKNOWN_WORDS'
  | 'EXERCISE_TYPE_ABOVE_PROGRESS_LIMIT'
  | 'EXERCISE_BASE_WORD_ABOVE_IN_PROGRESS_LIMIT'
  | 'EXERCISE_TYPE_BELLOW_PROGRESS_LIMIT'
  | 'EXERCISE_VERB_NEVER_TRANSLATED'
  | 'EXERCISE_RANDOMNESS'
  | 'EXERCISE_MAX_PROGRESS_DONE'
  | 'EXERCISE_LEVEL'
  | 'NO_PRIORITY';

export type Priority = {
  exercise: Exercise;
  priorityName: PriorityName;
  priorityValue: number;
};

type ExerciseWithPriorites = {
  exercise: Exercise;
  priorities: {
    priorityName: string;
    priorityValue: number;
  }[];
  priorityValueTotal: number;
};

function getExerciseSubjectResults(allResults: Result[]): Record<string, Result[]> {
  return allResults.reduce<Record<string, Result[]>>((prev, curr) => {
    const baseWordKey = curr.exercise.getBaseWordAsString() || '_';
    const currentResults: Result[] = prev[baseWordKey] || [];
    currentResults.push(curr);
    prev[baseWordKey] = currentResults;
    return prev;
  }, {});
}

const priorityCompilers: PriorityCompiler[] = [
  exerciseNeverDone,
  // exerciseNeverDoneByVoice,
  exerciseTranslationNeverDoneToEnglish,
  exerciseTranslationNeverDoneFromHearing,
  exerciseVerbNeverTranslated,
  exerciseWrong,
  exerciseCorrect,
  exerciseDoneToday,
  exerciseDoneInLastHour,
  exerciseDoneCorrectly2TimesInRow,
  // exerciseTypeInProgressLimit,
  exerciseRandomness
];

export interface ExerciseResultContext {
  allResults: Result[];
  exerciseResults: Result[];
  exerciseSubjectResults: Result[];
  allExercises: Exercise[];
  progressType: ProgressType;
  exerciseTypeProgress: ExerciseProgress[];
  progressAggregate: ProgressAggregate;
  language: Language;
}

type PriorityCompiler = (exercise: Exercise, exerciseResultContext: ExerciseResultContext) => Priority[];

export function sortExercises(
  exercises: Exercise[],
  allResults: Result[],
  language: Language
): {
  exercises: Exercise[];
  exercisesWithPriorities: ExerciseWithPriorites[];
} {
  const start = Date.now();
  const exerciseProgressMap = getExerciseProgressMap(allResults, language);
  const exerciseSubjectResultMap = getExerciseSubjectResults(allResults);
  logExerciseStats(exerciseProgressMap);

  const exercisesWithoutWantedProgress = getExercisesWithoutWantedProgress(exercises, allResults);

  logFilteredExercises(exercises, exercisesWithoutWantedProgress);

  const exercisesWithPriorities = getExercisesWithPriorities(
    exercisesWithoutWantedProgress,
    exercises,
    allResults,
    exerciseProgressMap,
    exerciseSubjectResultMap,
    language
  );

  logSortingTime(start);

  const sortedExercises = exercisesWithPriorities.map((e) => e.exercise);

  return {
    exercises: removeRepetitionFromBlocks(
      sortedExercises,
      (a, b) => a.getBaseWordAsString() === b.getBaseWordAsString(),
      10
    ),
    exercisesWithPriorities
  };
}

function logExerciseStats(exerciseProgressMap: Record<ExerciseType, ExerciseProgress[]>): void {
  Object.keys(exerciseProgressMap).forEach((key) => {
    const notStartedCount = exerciseProgressMap[key as ExerciseType].filter(
      (ex) => ex.progressType === ProgressType.NEVER_DONE
    ).length;
    const inProgressCount = exerciseProgressMap[key as ExerciseType].filter(
      (ex) => ex.progressType !== ProgressType.NEVER_DONE && ex.progressType !== ProgressType.DONE
    ).length;
    const doneCount = exerciseProgressMap[key as ExerciseType].filter(
      (ex) => ex.progressType === ProgressType.DONE
    ).length;

    logger.info(
      `${key} Type Not Started: [${notStartedCount}], In Progress: [${inProgressCount}], Done: [${doneCount}]`
    );
  });
}

function getExercisesWithoutWantedProgress(exercises: Exercise[], allResults: Result[]): ExerciseProgress[] {
  return exercises
    .map((ex) => getSingleExerciseProgress(allResults, ex))
    .filter((ex) => {
      return ex.progressType !== ProgressType.DONE;
    });
}

function logCurrentWordsInProgress(progressAggregate: ProgressAggregate, results: Result[], language: Language): void {
  logger.info(createTable('Verbs', progressAggregate.words.VERB, results, language).render());
  logger.info(createTable('Nouns', progressAggregate.words.NOUN, results, language).render());
  logger.info(createTable('Adjective', progressAggregate.words.ADJECTIVE, results, language).render());
  logger.info(createTable('Other', progressAggregate.words.OTHER, results, language).render());
}

function logFilteredExercises(exercises: Exercise[], exercisesWithoutWantedProgress: ExerciseProgress[]): void {
  logger.info(`Exercises Total Count: [${exercises.length}]`);
  logger.info(`Exercises Not Done Count: [${exercisesWithoutWantedProgress.length}]`);
  logger.info(
    `Exercises In Progress Count: [${
      exercisesWithoutWantedProgress.filter((e) => e.progressType !== ProgressType.NEVER_DONE).length
    }]`
  );
}

function getExercisesWithPriorities(
  exercisesWithoutWantedProgress: ExerciseProgress[],
  exercises: Exercise[],
  allResults: Result[],
  exerciseProgressMap: Record<ExerciseType, ExerciseProgress[]>,
  exerciseSubjectResultMap: Record<string, Result[]>,
  language: Language
): ExerciseWithPriorites[] {
  const priorityCompilerTimes: Record<string, number> = {};
  const progressAggregate = getProgressAggregate(allResults, exercises);
  logCurrentWordsInProgress(progressAggregate, allResults, language);

  const x = removeBaseWordLimit(exercisesWithoutWantedProgress, progressAggregate)
    .map((ex) => {
      const combinedPriorities = priorityCompilers
        .flatMap((priorityCompiler) => {
          const startTime = performance();
          const result = priorityCompiler(ex.exercise, {
            allExercises: exercises,
            allResults,
            exerciseSubjectResults: exerciseSubjectResultMap[ex.exercise.getBaseWordAsString() || '_'] || [],
            progressType: ex.progressType,
            exerciseTypeProgress: exerciseProgressMap[ex.exercise.exerciseType],
            exerciseResults: ex.exerciseResults,
            progressAggregate,
            language
          });
          const endTime = performance();

          const executionTime = endTime - startTime;
          priorityCompilerTimes[priorityCompiler.name] =
            (priorityCompilerTimes[priorityCompiler.name] || 0) + executionTime;

          return result;
        })
        .reduce(combinePriorities, initializePriorities(ex));

      return filterInvalidPriorities(combinedPriorities);
    })
    .sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);

  priorityCompilers.forEach((pc) => {
    priorityCompilerTimes[pc.name] = Number((priorityCompilerTimes[pc.name] / 1000).toFixed(2));
  });

  logger.info('Priority compiler execution times:', priorityCompilerTimes);

  return x;
}

function combinePriorities(previous: PriorityWithValue, current: Priority) {
  previous.priorities.push({
    priorityName: current.priorityName,
    priorityValue: current.priorityValue
  });
  return {
    ...previous,
    priorityValueTotal: previous.priorityValueTotal + current.priorityValue
  };
}

interface PriorityWithValue {
  priorities: {
    priorityName: string;
    priorityValue: number;
  }[];
  priorityValueTotal: number;
  exercise: Exercise;
}

function initializePriorities(ex: any): PriorityWithValue {
  return {
    priorities: [
      {
        priorityName: '',
        priorityValue: 0
      }
    ],
    priorityValueTotal: 0,
    exercise: ex.exercise
  };
}

function filterInvalidPriorities(combinedPriorities: PriorityWithValue) {
  return {
    ...combinedPriorities,
    priorities: combinedPriorities.priorities.filter(
      (priority) =>
        priority.priorityName !== '' && priority.priorityName !== 'NO_PRIORITY' && priority.priorityValue !== 0
    )
  };
}

function logSortingTime(start: number): void {
  const end = Date.now();
  logger.info(`Sorting took [${(end - start) / 1000} seconds]`);
}

function insertRandomExercise(
  exercisesWithPriorities: ExerciseWithPriorites[],
  randomIndex: number,
  randomExercise: Exercise
) {
  const sortedExercises = exercisesWithPriorities.map((ewp) => ewp.exercise);
  if (randomIndex < sortedExercises.length) {
    sortedExercises[randomIndex] = randomExercise;
    logger.info(`Including random exercise [${randomExercise.getCorrectAnswer()}]`);
  }

  return sortedExercises;
}

export function noPriority(exercise: Exercise): Priority[] {
  return [
    {
      exercise,
      priorityName: 'NO_PRIORITY',
      priorityValue: 0
    }
  ];
}
