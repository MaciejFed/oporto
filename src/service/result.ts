import { logger } from '../common/logger';
import { Exercise } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';

export type ExerciseStatistics = {
  exercise: Exercise;
  correctAttempts: number;
  failedAttempts: number;
  lastTimeAttempted: Date;
};

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

export function getStatisticForExercise(exercise: Exercise): ExerciseStatistics | undefined {
  const allResults = getAllResultsForExercise(getAllResults(), exercise).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  if (allResults.length === 0) {
    logger.error(`no results for exercise ${JSON.stringify(exercise)}`);
    return undefined;
  }
  const correctAttempts = allResults.filter((r) => r.isCorrect).length;

  return {
    exercise,
    correctAttempts,
    failedAttempts: allResults.length - correctAttempts,
    lastTimeAttempted: allResults.length > 1 ? allResults[1].date : allResults[0].date
  };
}
