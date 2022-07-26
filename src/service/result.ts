import { DateTime } from 'luxon';
import { isBeforeWeekday, isOnWeekDay, onlyDistinct } from '../common/common';
import { logger } from '../common/logger';
import { Exercise } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';
import { getProgress } from './progress';

type KeyMarker = {
  color: string;
  marker: string;
};

interface StatisticPoint {
  keyName: string;
  keyMarker: KeyMarker;
  value: number;
}

interface GenericStatistics {
  points: StatisticPoint[];
}

interface Statistics {
  correctAttempts: number;
  failedAttempts: number;
  distinctExercises: number;
}

export interface WeeklyStatistics extends Statistics {
  weekNumber: number;
}

export interface WeekdayStatistics extends GenericStatistics {
  weekday: number;
}

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
  const correctAttempts = allResultsForExercise.filter((r) => r.wasCorrect).length;

  return {
    exercise,
    correctAttempts,
    failedAttempts: allResultsForExercise.length - correctAttempts,
    lastTimeAttempted: allResultsForExercise.length > 1 ? allResultsForExercise[1].date : allResultsForExercise[0].date
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
      const distinctExercises = onlyDistinct(resultInWeek.map((result) => result.exercise)).length;

      return {
        weekNumber,
        correctAttempts,
        failedAttempts,
        distinctExercises
      };
    });
}

export function getWeekdayStatistics(): WeekdayStatistics[] {
  const currentWeekday = DateTime.fromJSDate(new Date()).weekday;
  const allResults = getAllResults();

  return [...Array(currentWeekday).keys()]
    .map((i) => i + 1)
    .map((weekday) => {
      const resultOnDay = allResults.filter((result) => isOnWeekDay(result.date, weekday));
      const allAttempts: StatisticPoint = {
        keyName: 'All',
        value: resultOnDay.length,
        keyMarker: { color: 'blue', marker: '🔵' }
      };
      const distinctExercises: StatisticPoint = {
        keyName: 'Distinct',
        value: onlyDistinct(resultOnDay.map((result) => result.exercise)).length,
        keyMarker: { color: 'yellow', marker: '🟡' }
      };
      const correctAttempts: StatisticPoint = {
        keyName: 'Correct',
        value: resultOnDay.filter((result) => result.wasCorrect).length,
        keyMarker: { color: 'green', marker: '🟢' }
      };
      const failedAttempts: StatisticPoint = {
        keyName: 'Wrong',
        value: resultOnDay.length - correctAttempts.value,
        keyMarker: { color: 'red', marker: '🔴' }
      };

      return {
        weekday,
        points: [allAttempts, distinctExercises, correctAttempts, failedAttempts]
      };
    });
}

export function getWeekdayProgress(): WeekdayStatistics[] {
  const currentWeekday = DateTime.fromJSDate(new Date()).weekday;
  const allResults = getAllResults();

  return [...Array(currentWeekday).keys()]
    .map((i) => i + 1)
    .map((weekday) => {
      const resultOnDay = allResults.filter((result) => isBeforeWeekday(result.date, weekday));
      const progressOnDay = getProgress(resultOnDay);

      const range039: StatisticPoint = {
        keyName: '0-39',
        value: progressOnDay.find((p) => p.ratioRange === '0-39')?.count || 0,
        keyMarker: { color: 'red', marker: '🔴' }
      };
      const range4079: StatisticPoint = {
        keyName: '40-79',
        value: progressOnDay.find((p) => p.ratioRange === '40-79')?.count || 0,
        keyMarker: { color: 'yellow', marker: '🟡' }
      };
      const range80100: StatisticPoint = {
        keyName: '80-100',
        value: progressOnDay.find((p) => p.ratioRange === '80-100')?.count || 0,
        keyMarker: { color: 'green', marker: '🟢' }
      };

      return {
        weekday,
        points: [range039, range4079, range80100]
      };
    });
}
