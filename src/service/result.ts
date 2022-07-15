import { Exercise } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';

export type Result = {
  exercise: Exercise;
  answer: string;
  answerInputType: AnswerInputType;
  isCorrect: boolean;
  date: Date;
  totalAttempts?: number;
};

export function convertToResult(
  exercise: Exercise,
  answer: string,
  isCorrect: boolean,
  answerInputType: AnswerInputType
): Result {
  const totalAttemtps = getAllResultsForExercise(getAllResults(), exercise).length;
  return {
    exercise: exercise,
    answer: answer,
    answerInputType,
    isCorrect: isCorrect,
    date: new Date(),
    totalAttempts: totalAttemtps
  };
}
