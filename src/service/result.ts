import { Exercise, ExerciseType } from '../exercise/exercise';

export type Result = {
  exercise: Exercise;
  answer: string;
  isCorrect: boolean;
  date: Date;
};

export function convertToResult(exercise: Exercise, answer: string): Result {
  return {
    exercise: exercise,
    answer: answer,
    isCorrect: exercise.checkAnsweCorrect(answer),
    date: new Date()
  };
}

export function appendResultToDb() {}
