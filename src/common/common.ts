import { DateTime } from 'luxon';
import { Zone } from 'luxon/src/zone';
import { DurationLike } from 'luxon/src/duration';

export class DateTimeExtended {
  private readonly date: DateTime;

  private constructor(date: Date) {
    this.date = DateTime.fromJSDate(date);
  }

  public plus(duration: DurationLike) {
    const newDate = this.date.plus(duration);
    return DateTimeExtended.fromJSDate(newDate.toJSDate());
  }

  public toJSDate(): Date {
    return this.date.toJSDate();
  }

  get ordinal(): number {
    return this.date.year * 365 + this.date.ordinal;
  }

  get weekday(): number {
    return this.date.weekday;
  }

  get weekNumber(): number {
    this.date.toJSDate();
    return this.date.weekNumber;
  }

  static fromJSDate(date: Date, options?: { zone?: string | Zone }): DateTimeExtended {
    return new DateTimeExtended(date);
  }

  static now(): DateTimeExtended {
    return new DateTimeExtended(new Date());
  }
}

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
