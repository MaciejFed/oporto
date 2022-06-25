import { type } from 'os';
import { Point } from '../terminal/terminal';

export const APP_STARTED = 'APP_STARTED';
export const APP_FINISHED = 'APP_FINISHED';
export const KEY_PRESSED = 'KEY_PRESSSED';
export const ANSWER_SUBMITED = 'ANSWER_SUBMITED';
export const EXERCISE_STARTED = 'EXERCISE_STARTED';
export const EXERCISE_DONE = 'EXERCISE_DONE';
export const EXERCISE_NEXT = 'EXERCISE_NEXT';
export const EXERCISE_DESCRIPTION_PRINTED = 'EXERCISE_DESCRIPTION_PRINTED';
export const EXERCISE_BODY_PRINTED = 'EXERCISE_BODY_PRINTED';

export type EXERCISE_BODY_PRINTED_BODY = {
  exercise: string;
  cursor: Point;
};

export type APP_EVENT =
  | typeof APP_STARTED
  | typeof KEY_PRESSED
  | typeof ANSWER_SUBMITED
  | typeof EXERCISE_STARTED
  | typeof EXERCISE_DONE
  | typeof EXERCISE_NEXT
  | typeof EXERCISE_DESCRIPTION_PRINTED
  | typeof EXERCISE_BODY_PRINTED
  | typeof APP_FINISHED;
