import { Exercise, ExerciseType } from '../exercise/exercise';
import { getAllAnswersForExercise, getAllResults, getAllResultsForExercise } from '../repository/result-repository';
import fs from 'fs';
import { Result } from '../service/result';
import { exerciseNeverDone } from './types/exercise-never-done/exercise-never-done';
import { exerciseNeverDoneByVoice } from './types/exercise-never-done-by-voice/exercise-never-done-by-voice';
import { exerciseWrong } from './types/exercise-wrong/exercise-wrong';
import { exerciseVerbNeverTranslated } from './types/exercise-verb-never-translated/exercise-verb-never-translated';
import { exerciseDoneToday } from './types/exercise-done-today/exercise-done-today';
import { exerciseCorrect } from './types/exercise-correct/exercise-correct';
import { exerciseDoneInLastHour } from './types/exercise-done-in-last-hour/exercise-done-in-last-hour';
import { exerciseTranslationNeverDoneToEnglish } from './types/exercise-translation-never-done-to-english/exercise-translation-never-done-to-english';
import { exerciseTranslationNeverDoneFromHearing } from './types/exercise-translation-never-done-from-hearing/exercise-translation-never-done-from-hearing';
import { exerciseDoneCorrectly2TimesInRow } from './types/exercise-done-correctly-2-times-in-row/exercise-done-correctly-2-times-in-row';
import { exerciseRandomness } from './types/exercise-randomness/exercise-randomness';
import { exerciseMaxProgressDone } from './types/exercise-max-progress-done/exercise-max-progress-done';
import {
  ExerciseProgress,
  getExerciseProgressMap,
  getGroupExerciseProgress,
  getSingleExerciseProgress,
  RatioRange
} from '../service/progress';
import { exerciseTypeInProgressLimit } from './types/exercise-type-in-progress-limit/exercise-type-in-progress-limit';
import { exerciseSentenceUnknownWords } from './types/exercise-sentence-unknown-words/exercise-sentence-unknown-words';
import { logger } from '../common/logger';
import { getRandomElement } from '../common/common';

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

const priorityCompilers: PriorityCompiler[] = [
  exerciseNeverDone,
  // exerciseNeverDoneByVoice,
  exerciseTranslationNeverDoneToEnglish,
  exerciseTranslationNeverDoneFromHearing,
  exerciseSentenceUnknownWords,
  exerciseVerbNeverTranslated,
  exerciseWrong,
  exerciseCorrect,
  exerciseDoneToday,
  exerciseDoneInLastHour,
  exerciseDoneCorrectly2TimesInRow,
  exerciseTypeInProgressLimit,
  exerciseRandomness
];

export interface ExerciseResultContext {
  allResults: Result[];
  allExercises: Exercise[];
  ratioRange: RatioRange;
  exerciseTypeProgress: ExerciseProgress[];
  exerciseResults: Result[];
}

type PriorityCompiler = (exercise: Exercise, exerciseResultContext: ExerciseResultContext) => Priority[];

export function sortExercises(exercises: Exercise[]): Exercise[] {
  const allResults = getAllResults();
  const exerciseProgressMap = getExerciseProgressMap(allResults);
  logExerciseStats(exerciseProgressMap);

  const start = Date.now();

  const exercisesWithoutWantedProgress = getExercisesWithoutWantedProgress(exercises, allResults);

  logFilteredExercises(exercises, exercisesWithoutWantedProgress);

  const exercisesWithPriorities = getExercisesWithPriorities(
    exercisesWithoutWantedProgress,
    exercises,
    allResults,
    exerciseProgressMap
  );

  logSortingTime(start);

  const randomIndex = Math.floor(Math.random() * 10);
  const randomExercise = getRandomElement(exercises);
  const sortedExercises = insertRandomExercise(exercisesWithPriorities, randomIndex, randomExercise);

  return sortedExercises;
}

function logExerciseStats(exerciseProgressMap: Record<ExerciseType, ExerciseProgress[]>): void {
  Object.keys(exerciseProgressMap).forEach((key) => {
    const notStartedCount = exerciseProgressMap[key as ExerciseType].filter(
      (ex) => ex.ratioRange === 'Never Done'
    ).length;
    const inProgressCount = exerciseProgressMap[key as ExerciseType].filter(
      (ex) => ex.ratioRange !== 'Never Done' && ex.ratioRange !== '80-100'
    ).length;

    logger.info(`${key} Type Not Started: [${notStartedCount}], In Progress: [${inProgressCount}]`);
  });
}

function getExercisesWithoutWantedProgress(exercises: Exercise[], allResults: Result[]) {
  return exercises
    .map((ex) => getSingleExerciseProgress(allResults, ex))
    .filter((ex) => {
      return ex.ratioRange !== ex.exercise.getMaxWantedProgress();
    });
}

function logFilteredExercises(exercises: Exercise[], exercisesWithoutWantedProgress: any[]): void {
  logger.info(`Exercises Total Count: [${exercises.length}]`);
  logger.info(`Exercises Not Done Count: [${exercisesWithoutWantedProgress.length}]`);
  logger.info(
    `Exercises In Progress Count: [${
      exercisesWithoutWantedProgress.filter((e) => e.ratioRange !== 'Never Done').length
    }]`
  );
}

function getExercisesWithPriorities(
  exercisesWithoutWantedProgress: ExerciseProgress[],
  exercises: Exercise[],
  allResults: Result[],
  exerciseProgressMap: Record<ExerciseType, ExerciseProgress[]>
) {
  return exercisesWithoutWantedProgress
    .map((ex) => {
      const combinedPriorities = priorityCompilers
        .flatMap((priorityCompiler) =>
          priorityCompiler(ex.exercise, {
            allExercises: exercises,
            allResults,
            ratioRange: ex.ratioRange,
            exerciseTypeProgress: exerciseProgressMap[ex.exercise.exerciseType],
            exerciseResults: ex.exerciseResults
          })
        )
        .reduce(combinePriorities, initializePriorities(ex));

      return filterInvalidPriorities(combinedPriorities);
    })
    .sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);
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

function insertRandomExercise(exercisesWithPriorities: any[], randomIndex: number, randomExercise: Exercise) {
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
