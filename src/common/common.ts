import { DateTime } from 'luxon';
import { Zone } from 'luxon/src/zone';
import { DurationLike } from 'luxon/src/duration';
import { Exercise } from '../exercise/exercise';

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

export function enforceArrayLimit(arr: any[], limit: number) {
  if (arr.length > limit) {
    arr.splice(limit);
  }
  return arr;
}

export function onlyDistinctSubjects(arr: Exercise[]): Exercise[] {
  const distinctElements: Exercise[] = [];
  for (let i = 0; i < arr.length; i++) {
    let unique = true;
    for (let j = 0; j < distinctElements.length; j++) {
      if (i !== j && arr[i].getBaseWord() === distinctElements[j].getBaseWord()) {
        unique = false;
      }
    }
    if (unique) {
      distinctElements.push(arr[i]);
    }
  }
  return distinctElements;
}

export function findWordStartIndex(sentence: string, word: string) {
  const words = sentence.split(' ');
  const wordsNormal = words.map((w) => w.toLowerCase().replace(/[,.]/g, ''));
  const index = wordsNormal.indexOf(word);

  return words.slice(0, index).reduce((prev, curr) => curr.length + prev + 1, 0);
}

export function getRandomElement<T>(arr: T[], maxLength?: number): T {
  // eslint-disable-next-line no-nested-ternary
  const length = maxLength ? (arr.length > maxLength ? maxLength : arr.length) : arr.length;
  return arr[Math.floor(Math.random() * length)];
}

export function removeRepetitionFromBlocks<T>(arr: T[], equalFn: (a: T, b: T) => boolean, blockSize = 5): T[] {
  const hasDuplicates = (block: T[]): boolean => {
    return block.some((element) => block.filter((e) => equalFn(element, e)).length > 1);
  };

  const removeRepetition = (array: T[]) =>
    array
      .reduce<T[][]>(
        (prev, curr) => {
          const firstElementWithoutRepetition = prev.findIndex(
            (subArray) => !hasDuplicates([...subArray, curr]) && subArray.length < blockSize
          );
          if (firstElementWithoutRepetition === -1) return prev.concat([[curr]]);
          return prev.map((subArray, index) =>
            index === firstElementWithoutRepetition ? [...subArray, curr] : subArray
          );
        },
        [[]]
      )
      .flatMap((a) => a);

  return removeRepetition(removeRepetition(removeRepetition(arr)));
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

export function isOnWeekDay(resultDate: Date, weekday: number, year: number) {
  const now = DateTime.now();
  const resultDateTime = DateTime.fromJSDate(resultDate);

  return (
    now.weekNumber === resultDateTime.weekNumber && resultDateTime.weekday === weekday && resultDateTime.year === year
  );
}

export function areSameCalendarDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function assertNonNull<T>(value?: T): T {
  if (!value) throw new Error('Unexpected Undefined!');

  return value;
}
