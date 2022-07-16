import { DateTime } from 'luxon';
import { onlyDistinct } from '../common/common';
import { logger } from '../common/logger';
import { Exercise } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';

export type WeeklyStatistics = {
  weekNumber: number;
  correctAttempts: number;
  failedAttempts: number;
  distrinctExercises: number;
};

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
  wasCorrect: boolean;
  date: Date;
};

export function convertToResult(
  exercise: Exercise,
  answer: string,
  wasCorrect: boolean,
  answerInputType: AnswerInputType
): Result {
  return {
    exercise: exercise,
    answer: answer,
    answerInputType,
    wasCorrect: wasCorrect,
    date: new Date()
  };
}

export function getStatisticForExercise(exercise: Exercise): ExerciseStatistics | undefined {
  const allResults = getAllResults();
  const allResultsForExercise = getAllResultsForExercise(allResults, exercise).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  if (allResultsForExercise.length === 0) {
    logger.error(`no results for exercise: ${JSON.stringify(exercise)}, all results: ${JSON.stringify(allResults)}`);
    return undefined;
  }
  const correctAttempts = allResults.filter((r) => r.wasCorrect).length;

  return {
    exercise,
    correctAttempts,
    failedAttempts: allResults.length - correctAttempts,
    lastTimeAttempted: allResults.length > 1 ? allResults[1].date : allResults[0].date
  };
}

export function getWeeklyStatistics(): WeeklyStatistics[] {
  const weeksBack = 10;
  const allResults = getAllResults();
  const currentWekkNumber = DateTime.fromJSDate(new Date()).weekNumber;

  return [...Array(weeksBack).keys()]
    .map((i) => i + 1 + currentWekkNumber - weeksBack)
    .map((weekNumber) => {
      const resultInWeek = allResults.filter((result) => DateTime.fromJSDate(result.date).weekNumber === weekNumber);
      const correctAttempts = resultInWeek.filter((result) => result.wasCorrect).length;
      const failedAttempts = resultInWeek.length - correctAttempts;
      const distrinctExercises = onlyDistinct(resultInWeek.map((result) => result.exercise)).length;

      return {
        weekNumber,
        correctAttempts,
        failedAttempts,
        distrinctExercises
      };
    });
}
