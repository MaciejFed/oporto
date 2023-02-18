export const APP_STARTED = 'APP_STARTED';
export const APP_FINISHED = 'APP_FINISHED';
export const KEY_PRESSED = 'KEY_PRESSED';
export const ANSWER_SUBMITTED = 'ANSWER_SUBMITTED';
export const ANSWER_CHECKED = 'ANSWER_CHECKED';
export const EXERCISE_STARTED = 'EXERCISE_STARTED';
export const EXERCISE_NEXT = 'EXERCISE_NEXT';
export const EXERCISE_DESCRIPTION_PRINTED = 'EXERCISE_DESCRIPTION_PRINTED';
export const EXERCISE_BODY_PRINTED = 'EXERCISE_BODY_PRINTED';
export const TERMINAL_CLEARED = 'TERMINAL_CLEARED';

export type EXERCISE_BODY_PRINTED_BODY = {
  exerciseBodyPrefix: string;
  exerciseBodySuffix: string;
  exerciseTranslation: string;
};

export type APP_EVENT =
  | typeof APP_STARTED
  | typeof KEY_PRESSED
  | typeof ANSWER_SUBMITTED
  | typeof ANSWER_CHECKED
  | typeof EXERCISE_STARTED
  | typeof EXERCISE_NEXT
  | typeof EXERCISE_DESCRIPTION_PRINTED
  | typeof EXERCISE_BODY_PRINTED
  | typeof APP_FINISHED
  | typeof TERMINAL_CLEARED;
