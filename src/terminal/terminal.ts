import { clear } from 'console';
import { clearLine } from 'readline';
import { terminal } from 'terminal-kit';
import { EventProcessor } from '../event/eventProcessor';
import {
  APP_STARTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_BODY_PRINTED_BODY,
  KEY_PRESSED,
  ANSWER_CHECKED,
  EXERCISE_NEXT,
  EXERCISE_STARTED
} from './../event/events';
import { preExerciseClear, printInBetweenMenu } from './terminalUtils';

export type Point = {
  x: number;
  y: number;
};

export class Terminakl {
  eventProcessor: EventProcessor;
  cursor: Point;
  exercise = '';
  exerciseLoop: any;
  exerciseInProgress: boolean;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.cursor = {
      x: 0,
      y: 0
    };
    clear();
    this.exerciseInProgress = false;
  }

  registerListeners() {
    this.registerOnAppStartedEventListerner();
    this.registerOnDescriptionPrintedEventListener();
    this.registerOnBodyPrintedEventListener();
    this.registerOnKeyPressedEventListener();
    this.registerOnExerciseStartedEventListener();
    this.registerOnAnswerCheckedEventListener();
  }

  private registerOnAppStartedEventListerner() {
    this.eventProcessor.on(APP_STARTED, () => {
      preExerciseClear();
    });
  }

  private registerOnDescriptionPrintedEventListener() {
    this.eventProcessor.on(
      EXERCISE_DESCRIPTION_PRINTED,
      (description: string) => {
        terminal.moveTo(1, 10, description);
      }
    );
  }

  private registerOnBodyPrintedEventListener() {
    this.eventProcessor.on(
      EXERCISE_BODY_PRINTED,
      (body: EXERCISE_BODY_PRINTED_BODY) => {
        this.cursor = body.cursor;
        this.exercise = body.exercise;
        terminal.moveTo(1, 11, this.exercise);
      }
    );
  }

  private registerOnKeyPressedEventListener() {
    this.eventProcessor.on(KEY_PRESSED, (key) => {
      const onKeyAction = this.exerciseInProgress
        ? this.onKeyExerciseInProgress.bind(this)
        : this.onKeyMenu.bind(this);
      onKeyAction(key);
    });
  }

  private registerOnExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.exerciseInProgress = true;
      preExerciseClear();
    });
  }

  private registerOnAnswerCheckedEventListener() {
    this.eventProcessor.on(ANSWER_CHECKED, (correctAnswer) => {
      this.exerciseInProgress = false;
      terminal.moveTo(1, 12, correctAnswer ? 'Correct!' : 'Wrong!');
      printInBetweenMenu();
      // this.eventProcessor.emit(EXERCISE_NEXT);
    });
  }

  private onKeyExerciseInProgress(key: string) {
    if (key === 'backspace') {
      this.exercise = this.exercise.substring(
        0,
        Math.max(0, this.exercise.length - 1)
      );
      clearLine(process.stdout, 0);
    } else {
      this.exercise = this.exercise + key;
    }
    terminal.moveTo(1, 11, this.exercise);
  }

  private onKeyMenu(key: string) {
    if (key !== 'e' && key !== 's') {
      this.eventProcessor.emit(EXERCISE_NEXT);
    }
  }
}
