import { Exercise, ExerciseType } from '../exercise/exercise';
import { getAllResults, getAllResultsForExercise, getAllResultsForExerciseType } from '../repository/resultRepository';
import fs from 'fs';
import { Result } from './result';

export const VALUE_EXERCISE_DONE_WRONG = 30;
export const VALUE_EXERCISE_DONE_CORRECT = -10;
export const VALUE_EXERCISE_NEVER_DONE = 25;
export const VALUE_EXERCISE_TYPE_NEVER_DONE = 100;
export const VALUE_EXERCISE_DONE_TODAY = -15;

export type PriorityName =
  | 'EXERCISE_NEVER_DONE'
  | 'EXERCISE_TYPE_NEVER_DONE'
  | 'EXERCISE_WRONG'
  | 'EXERCISE_CORRECT'
  | 'EXERCISE_DONE_TODAY'
  | 'NO_PRIORITY';

export type Priority = {
  exercise: Exercise;
  priorityName: PriorityName;
  priorityValue: number;
};

type PriorityCompiler = (exercise: Exercise, results: Result[]) => Priority[];

export function sortExercises(exercises: Exercise[]): Exercise[] {
  const exercisesWithProrities = exercises
    .map((ex) => {
      const priorityCompilers: PriorityCompiler[] = [
        exerciseNeverDone,
        exerciseTypeNeverDone,
        exerciseWrong,
        exerciseCorrect,
        exerciseDoneToday
      ];
      const combinedProrites = priorityCompilers
        .flatMap((priorityCompiler) => priorityCompiler(ex, getAllResults()))
        .reduce(
          (pevious, current) => {
            pevious.priorityNames.push(current.priorityName);
            pevious.priorityValueTotal = pevious.priorityValueTotal + current.priorityValue;
            return pevious;
          },
          {
            priorityNames: [''],
            priorityValueTotal: 0,
            exercise: ex
          }
        );
      combinedProrites.priorityNames = combinedProrites.priorityNames.filter(
        (name) => name !== '' && name !== 'NO_PRIORITY'
      );
      return combinedProrites;
    })
    .sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);

  fs.writeFileSync('prio.json', JSON.stringify(exercisesWithProrities, null, 2));

  return exercisesWithProrities.map((ewp) => ewp.exercise);
}

export function exerciseNeverDone(exercise: Exercise, results: Result[]): Priority[] {
  return getAllResultsForExercise(results, exercise).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE', priorityValue: VALUE_EXERCISE_NEVER_DONE }]
    : noPriority(exercise);
}

export function exerciseTypeNeverDone(exercise: Exercise, results: Result[]): Priority[] {
  return getAllResultsForExerciseType(results, exercise.exercsiseType).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_TYPE_NEVER_DONE', priorityValue: VALUE_EXERCISE_TYPE_NEVER_DONE }]
    : noPriority(exercise);
}

export function exerciseWrong(exercise: Exercise, results: Result[]): Priority[] {
  return [getAllResultsForExercise(results, exercise)
    .filter((result) => !result.isCorrect)
    .reduce((previous) => {
       previous.priorityValue += VALUE_EXERCISE_DONE_WRONG;
       return previous;
    }, { 
      exercise: exercise, priorityName: 'EXERCISE_WRONG', priorityValue: 0 
    })];
}

export function exerciseCorrect(exercise: Exercise, results: Result[]): Priority[] {
  return results
    .filter((result) => result.isCorrect)
    .map(() =>
      Object.assign({
        exercise: exercise,
        priorityName: 'EXERCISE_CORRECT',
        priorityValue: VALUE_EXERCISE_DONE_CORRECT
      })
    );
}

function exerciseDoneToday(exercise: Exercise, results: Result[]): Priority[] {
  const resultsToday = results.filter((result) => new Date(result.date).toDateString() === new Date().toDateString());

  return resultsToday.map(() =>
    Object.assign({
      exercise: exercise,
      priorityName: 'EXERCISE_DONE_TODAY',
      priorityValue: VALUE_EXERCISE_DONE_TODAY
    })
  );
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
