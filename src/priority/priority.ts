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

export const priorityCompilers: PriorityCompiler[] = [
  exerciseNeverDone,
  // exerciseNeverDoneByVoice,
  exerciseTranslationNeverDoneToEnglish,
  exerciseTranslationNeverDoneFromHearing,
  exerciseVerbNeverTranslated,
  exerciseWrong,
  exerciseCorrect,
  exerciseDoneToday,
  exerciseDoneInLastHour,
  exerciseDoneCorrectly2TimesInRow
  // exerciseRandomness
];

export interface ExerciseResultContext {
  exerciseResults: Result[];
  exerciseSubjectResults: Result[];
  allExercises: Exercise[];
  progressType: ProgressType;
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
  const exerciseSubjectResultMap = getExerciseSubjectResults(allResults);
  const exercisesWithoutWantedProgress = getExercisesWithoutWantedProgress(exercises, allResults);

  logFilteredExercises(exercises, exercisesWithoutWantedProgress);

  console.time('exercisesWithPriorities');
  const exercisesWithPriorities = getExercisesWithPriorities(
    exercisesWithoutWantedProgress,
    exercises,
    allResults,
    exerciseSubjectResultMap,
    language
  );
  console.timeEnd('exercisesWithPriorities');

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

function getExercisesWithoutWantedProgress(exercises: Exercise[], allResults: Result[]): ExerciseProgress[] {
  return exercises
    .map((ex) => getSingleExerciseProgress(allResults, ex))
    .filter((ex) => {
      return ex.progressType !== ProgressType.DONE;
    });
}

function logCurrentWordsInProgress(progressAggregate: ProgressAggregate, results: Result[], language: Language): void {
  const clone = structuredClone(progressAggregate);
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
  exerciseSubjectResultMap: Record<string, Result[]>,
  language: Language
): ExerciseWithPriorites[] {
  const progressAggregate = getProgressAggregate(allResults, exercises);

  const inLimit = removeBaseWordLimit(language, exercisesWithoutWantedProgress, progressAggregate);

  const x = inLimit.map((ex) => {
    const combinedPriorities = priorityCompilers
      .flatMap((priorityCompiler) => {
        const result = priorityCompiler(ex.exercise, {
          allExercises: exercises,
          exerciseSubjectResults: exerciseSubjectResultMap[ex.exercise.getBaseWordAsString() || '_'] || [],
          progressType: ex.progressType,
          exerciseResults: ex.exerciseResults,
          language
        });
        return result;
      })
      .reduce(combinePriorities, initializePriorities(ex));

    return filterInvalidPriorities(combinedPriorities);
  });

  const sorted = x.sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);
  console.timeEnd('main');

  return sorted;
}

function combinePriorities(previous: PriorityWithValue, current: Priority) {
  previous.priorities.push({
    priorityName: current.priorityName,
    priorityValue: current.priorityValue
  });
  previous.priorityValueTotal = previous.priorityValueTotal + current.priorityValue;
  return previous;
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
  combinedPriorities.priorities = combinedPriorities.priorities.filter(
    (priority) =>
      priority.priorityName !== '' && priority.priorityName !== 'NO_PRIORITY' && priority.priorityValue !== 0
  );
  return combinedPriorities;
}

function logSortingTime(start: number): void {
  const end = Date.now();
  logger.info(`Sorting took [${(end - start) / 1000} seconds]`);
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
