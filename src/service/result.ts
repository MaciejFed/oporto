import { Exercise } from '../exercise/exercise';
import { RegularVerbExercise } from '../exercise/verbExercise';

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

console.log(JSON.stringify(convertToResult(new RegularVerbExercise(), 'como')));

export function appendResultToDb() {}
