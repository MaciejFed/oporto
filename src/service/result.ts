import { Exercise, ExerciseType } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';

export type Result = {
  exercise: Exercise;
  answer: string;
  answerInputType: AnswerInputType;
  isCorrect: boolean;
  date: Date;
};

export function convertToResult(exercise: Exercise, answer: string, answerInputType: AnswerInputType): Result {
  return {
    exercise: exercise,
    answer: answer,
    answerInputType,
    isCorrect: exercise.checkAnsweCorrect(answer),
    date: new Date()
  };
}

export function appendResultToDb() {}
