import { Exercise, ExerciseType } from '../exercise/exercise';

export type Result = {
  exercise: Exercise;
  answer: string;
  isCorrect: boolean;
  date: string;
};

export function convertToResult(exercise: Exercise, answer: string): Result {
  return {
    exercise: exercise,
    answer: answer,
    isCorrect: exercise.checkAnsweCorrect(answer),
    date: Date()
  };
}

export function appendResultToDb() {}
