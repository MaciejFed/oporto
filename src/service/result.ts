import { DateTime } from 'luxon';
import { isBeforeWeekday, isOnWeekDay, onlyDistinct } from '../common/common';
import { logger } from '../common/logger';
import { Exercise } from '../exercise/exercise';
import { VerbExercise } from '../exercise/verbExercise';
import { AnswerInputType } from '../io/input';
import { displayGenericWeeklyStatistics } from '../io/terminalUtils';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../priority/priority';
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

export function getStatisticForExercise(allResults: Result[], exercise: Exercise): ExerciseStatistics | undefined {
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

      const all: StatisticPoint = {
        keyName: 'All',
        value: progressOnDay.find((p) => p.ratioRange === 'All')?.count || 0,
        keyMarker: { color: 'blue', marker: '🔵' }
      };
      const neverDone: StatisticPoint = {
        keyName: 'NeverDone',
        value: progressOnDay.find((p) => p.ratioRange === 'Never Done')?.count || 0,
        keyMarker: { color: 'white', marker: '⚪️' }
      };
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
        points: [all, neverDone, range039, range4079, range80100]
      };
    });
}

export function getExerciseProgress(allResults: Result[], exercise: Exercise): WeekdayStatistics[] {
  const resultForExercise = getAllResultsForExercise(allResults, exercise);
  if (resultForExercise.length < 3) return [];
  type timeLineType = 'daily' | 'weekly';
  if (
    DateTime.fromJSDate(resultForExercise[resultForExercise.length - 1].date).ordinal -
      DateTime.fromJSDate(resultForExercise[0].date).ordinal <=
    7
  ) {
    return getExerciseProgressDaily(resultForExercise, 1);
  }

  return getExerciseProgressDaily(resultForExercise, 7);
}

function getExerciseProgressDaily(resultForExercise: Result[], devider: number): WeekdayStatistics[] {
  const startingDay = Math.ceil(DateTime.fromJSDate(resultForExercise[0].date).ordinal / devider);
  const daysApart =
    Math.ceil(DateTime.fromJSDate(resultForExercise[resultForExercise.length - 1].date).ordinal / devider) -
    startingDay;
  return [...Array(daysApart).keys()]
    .map((day) => day + 1)
    .map((day) => {
      const resultOnDay = resultForExercise.filter(
        (result) => Math.ceil(DateTime.fromJSDate(result.date).ordinal / devider) - startingDay <= day
      );
      const all: StatisticPoint = {
        keyName: 'All',
        value: resultOnDay.length,
        keyMarker: { color: 'blue', marker: '🔵' }
      };
      const good: StatisticPoint = {
        keyName: 'Correct',
        value: resultOnDay.filter((result) => result.wasCorrect).length,
        keyMarker: { color: 'green', marker: '🟢' }
      };
      const bad: StatisticPoint = {
        keyName: 'Wrong',
        value: resultOnDay.filter((result) => !result.wasCorrect).length,
        keyMarker: { color: 'red', marker: '🔴' }
      };

      return {
        weekday: day,
        points: [all, good, bad]
      };
    });
}

export function getOverallProgres(): string {
  const results = getAllResults();
  const correctAnswers = results.filter((r) => r.wasCorrect).length;
  const wrongAsnwers = results.length - correctAnswers;

  const ratio = ((correctAnswers / ((results.length - correctAnswers) * VALUE_WRONG_TO_CORRECT_RATIO)) * 100).toFixed(
    2
  );
  return `${ratio} (${correctAnswers - wrongAsnwers * VALUE_WRONG_TO_CORRECT_RATIO})`;
}
