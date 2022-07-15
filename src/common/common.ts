import { DateTime } from 'luxon';
import { logger } from './logger';

export interface Comperable {
  equal(other: Comperable): boolean;
}

export function onlyDistinct(arr: Comperable[]): Comperable[] {
  const distinctElements: Comperable[] = [];
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
