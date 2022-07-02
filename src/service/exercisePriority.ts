import { Exercise, ExerciseType } from '../exercise/exercise';
import { getAllResultsForExercise, getAllResultsForExerciseType } from '../repository/resultRepository';
import fs from 'fs';

const VALUE_EXERCISE_DONE_WRONG = 30;
const VALUE_EXERCISE_DONE_CORRECT = -10;
const VALUE_EXERCISE_NEVER_DONE = 25;
const VALUE_EXERCISE_TYPE_NEVER_DONE = 100;
const VALUE_EXERCISE_DONE_TODAY = -15;

type PriorityName =
  | 'EXERCISE_NEVER_DONE'
  | 'EXERCISE_TYPE_NEVER_DONE'
  | 'EXERCISE_WRONG'
  | 'EXERCISE_CORRECT'
  | 'EXERCISE_DONE_TODAY'
  | 'NO_PRIORITY';

type Priority = {
  exercise: Exercise;
  priorityName: PriorityName;
  priorityValue: number;
};

type PriorityCompiler = (exercise: Exercise) => Priority[];

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
        .flatMap((priorityCompiler) => priorityCompiler(ex))
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

function exerciseNeverDone(exercise: Exercise): Priority[] {
  return getAllResultsForExercise(exercise).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE', priorityValue: VALUE_EXERCISE_NEVER_DONE }]
    : noPriority(exercise);
}

function exerciseTypeNeverDone(exercise: Exercise): Priority[] {
  return getAllResultsForExerciseType(exercise.exercsiseType).length === 0
    ? [{ exercise, priorityName: 'EXERCISE_TYPE_NEVER_DONE', priorityValue: VALUE_EXERCISE_TYPE_NEVER_DONE }]
    : noPriority(exercise);
}

function exerciseWrong(exercise: Exercise): Priority[] {
  return getAllResultsForExercise(exercise)
    .filter((result) => !result.isCorrect)
    .map(() =>
      Object.assign({ exercise: exercise, priorityName: 'EXERCISE_WRONG', priorityValue: VALUE_EXERCISE_DONE_WRONG })
    );
}

function exerciseCorrect(exercise: Exercise): Priority[] {
  return getAllResultsForExercise(exercise)
    .filter((result) => result.isCorrect)
    .map(() =>
      Object.assign({
        exercise: exercise,
        priorityName: 'EXERCISE_CORRECT',
        priorityValue: VALUE_EXERCISE_DONE_CORRECT
      })
    );
}

function exerciseDoneToday(exercise: Exercise): Priority[] {
  return getAllResultsForExercise(exercise)
    .filter((result) => new Date(result.date).toDateString() === new Date().toDateString())
    .map(() =>
      Object.assign({
        exercise: exercise,
        priorityName: 'EXERCISE_DONE_TODAY',
        priorityValue: VALUE_EXERCISE_DONE_TODAY
      })
    );
}

function noPriority(exercise: Exercise): Priority[] {
  return [
    {
      exercise,
      priorityName: 'NO_PRIORITY',
      priorityValue: 0
    }
  ];
}
