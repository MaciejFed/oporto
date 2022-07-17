import { Exercise, ExerciseType } from '../exercise/exercise';
import { getAllResults, getAllResultsForExercise, getAllResultsForExerciseType } from '../repository/resultRepository';
import fs from 'fs';
import { Result } from './result';
import { DateTime } from 'luxon';

let neverDoneExercisesCount = 0;
let neverDoneByVoiceExercisesCount = 0;

export const VALUE_EXERCISE_DONE_WRONG = 30;
export const VALUE_EXERCISE_DONE_CORRECT = -10;
export const VALUE_EXERCISE_NEVER_DONE = 25;
export const VALUE_EXERCISE_NEVER_DONE_BY_VOICE = 25;
export const VALUE_EXERCISE_TYPE_NEVER_DONE = 100;
export const VALUE_EXERCISE_PER_ONE_LEVEL = 25;
export const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = 100;

export function valueDoneToday(doneTodayCount: number): number {
  switch (doneTodayCount) {
    case 1:
      return -10;
    case 2:
      return -30;
    case 3:
      return -90;
    case 4:
      return -200;
    case 5:
      return -350;
    default:
      return -1000;
  }
}

export type PriorityName =
  | 'EXERCISE_NEVER_DONE'
  | 'EXERCISE_NEVER_DONE_BY_VOICE'
  | 'EXERCISE_TYPE_NEVER_DONE'
  | 'EXERCISE_WRONG'
  | 'EXERCISE_CORRECT'
  | 'EXERCISE_DONE_TODAY'
  | 'EXERCISE_DONE_IN_LAST_HOUR'
  | 'EXERCISE_RANDOMNESS'
  | 'EXERCISE_LEVEL'
  | 'NO_PRIORITY';

export type Priority = {
  exercise: Exercise;
  priorityName: PriorityName;
  priorityValue: number;
};

const priorityCompilers: PriorityCompiler[] = [
  exerciseNeverDone,
  exerciseTypeNeverDone,
  exerciseNeverDoneByVoice,
  exerciseWrong,
  exerciseCorrect,
  exerciseDoneToday,
  exerciseDoneInLastHour,
  exerciseLevelPriority,
  exerciseRandomnessPriority
];

type PriorityCompiler = (exercise: Exercise, results: Result[]) => Priority[];

export function sortExercises(exercises: Exercise[]): Exercise[] {
  const allResults = getAllResults();
  const exercisesWithProrities = exercises
    .map((ex) => {
      const combinedProrites = priorityCompilers
        .flatMap((priorityCompiler) => priorityCompiler(ex, allResults))
        .reduce(
          (pevious, current) => {
            pevious.priorities.push({
              priorityName: current.priorityName,
              priorityValue: current.priorityValue
            });
            pevious.priorityValueTotal = pevious.priorityValueTotal + current.priorityValue;
            return pevious;
          },
          {
            priorities: [
              {
                priorityName: '',
                priorityValue: 0
              }
            ],
            priorityValueTotal: 0,
            exercise: ex
          }
        );
      combinedProrites.priorities = combinedProrites.priorities.filter(
        (priority) =>
          priority.priorityName !== '' && priority.priorityName !== 'NO_PRIORITY' && priority.priorityValue !== 0
      );
      return combinedProrites;
    })
    .sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);

  fs.writeFileSync('priorities.json', JSON.stringify(exercisesWithProrities, null, 2));

  return exercisesWithProrities.map((ewp) => ewp.exercise);
}

export function exerciseNeverDone(exercise: Exercise, results: Result[]): Priority[] {
  const neverDoneExerciseValue = neverDoneExercisesCount++ === 0 ? VALUE_EXERCISE_NEVER_DONE : 0;
  return getAllResultsForExercise(results, exercise).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE', priorityValue: neverDoneExerciseValue }]
    : noPriority(exercise);
}

export function exerciseNeverDoneByVoice(exercise: Exercise, results: Result[]): Priority[] {
  const neverDoneByVoiceExerciseValue = neverDoneByVoiceExercisesCount++ === 0 ? VALUE_EXERCISE_NEVER_DONE_BY_VOICE : 0;
  return getAllResultsForExercise(results, exercise).filter((ex) => ex.wasCorrect && ex.answerInputType === 'voice')
    .length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE_BY_VOICE', priorityValue: neverDoneByVoiceExerciseValue }]
    : noPriority(exercise);
}

export function exerciseTypeNeverDone(exercise: Exercise, results: Result[]): Priority[] {
  return getAllResultsForExerciseType(results, exercise.exercsiseType).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_TYPE_NEVER_DONE', priorityValue: VALUE_EXERCISE_TYPE_NEVER_DONE }]
    : noPriority(exercise);
}

export function exerciseWrong(exercise: Exercise, results: Result[]): Priority[] {
  return [
    getAllResultsForExercise(results, exercise)
      .filter((result) => !result.wasCorrect)
      .reduce(
        (previous) => {
          previous.priorityValue += VALUE_EXERCISE_DONE_WRONG;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_WRONG',
          priorityValue: 0
        }
      )
  ];
}

export function exerciseCorrect(exercise: Exercise, results: Result[]): Priority[] {
  return [
    getAllResultsForExercise(results, exercise)
      .filter((result) => result.wasCorrect)
      .reduce(
        (previous) => {
          previous.priorityValue += VALUE_EXERCISE_DONE_CORRECT;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_CORRECT',
          priorityValue: 0
        }
      )
  ];
}

export function exerciseDoneToday(exercise: Exercise, results: Result[]): Priority[] {
  const resultsToday = getAllResultsForExercise(results, exercise).filter(
    (result) => new Date(result.date).toDateString() === new Date().toDateString()
  );
  if (resultsToday.length > 0) {
    return [
      {
        exercise: exercise,
        priorityName: 'EXERCISE_DONE_TODAY',
        priorityValue: valueDoneToday(resultsToday.length)
      }
    ];
  }
  return noPriority(exercise);
}

export function exerciseDoneInLastHour(exercise: Exercise, results: Result[]): Priority[] {
  const resultsToday = getAllResultsForExercise(results, exercise).filter(
    (result) => result.date.getTime() > new Date().getTime() - 1000 * 60 * 60
  );
  if (resultsToday.length > 0) {
    return [
      resultsToday.reduce(
        (previous, current) => {
          previous.priorityValue += (Math.round((current.date.getTime() - new Date().getTime()) / 60000) + 60) * -1;
          return previous;
        },
        {
          exercise: exercise,
          priorityName: 'EXERCISE_DONE_IN_LAST_HOUR',
          priorityValue: 0
        }
      )
    ];
  }
  return noPriority(exercise);
}

export function exerciseRandomnessPriority(exercise: Exercise, results: Result[]): Priority[] {
  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT)
    }
  ];
}

export function exerciseLevelPriority(exercise: Exercise, results: Result[]): Priority[] {
  return [
    {
      exercise,
      priorityName: 'EXERCISE_LEVEL',
      priorityValue: exercise.exerciseLevel * VALUE_EXERCISE_PER_ONE_LEVEL
    }
  ];
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
