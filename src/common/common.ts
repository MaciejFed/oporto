import { DateTime } from 'luxon';

export interface Comparable {
  equal(other: Comparable): boolean;
}

export function onlyDistinct(arr: Comparable[]): Comparable[] {
  const distinctElements: Comparable[] = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < distinctElements.length; j++) {
      if (i !== j && arr[i].equal(distinctElements[j])) {
        unique = false;
      }
    }
    if (unique) {
      distinctElements.push(arr[i]);
    }
  }
  return distinctElements;
}

export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function sleep(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function formatDate(date: Date): string {
  const dateTime = DateTime.fromJSDate(date);
  return `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()} [${dateTime.toRelative()}]`;
}

export function isBeforeWeekday(resultDate: Date, weekday: number) {
  const now = DateTime.now();
  const dayInYearNow = (now.weekNumber - 1) * 7 + weekday;

  const resultDateTime = DateTime.fromJSDate(resultDate);
  const resultDayInYear = (resultDateTime.weekNumber - 1) * 7 + resultDateTime.weekday;

  return resultDayInYear <= dayInYearNow;
}

export function isOnWeekDay(resultDate: Date, weekday: number) {
  const now = DateTime.now();
  const resultDateTime = DateTime.fromJSDate(resultDate);

  return now.weekNumber === resultDateTime.weekNumber && resultDateTime.weekday === weekday;
}
