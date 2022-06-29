import { exec } from 'child_process';
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
import {
  preExerciseClear,
  printExerciseBody,
  printExerciseBodyWithCorrection,
  printInBetweenMenu,
  printSampleSentence
} from './terminalUtils';

export type Point = {
  x: number;
  y: number;
};

export class Terminakl {
  eventProcessor: EventProcessor;
  cursor: Point;
  exerciseBody: string;
  answer: string;
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
    this.exerciseBody = '';
    this.answer = '';
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
    this.eventProcessor.on(EXERCISE_DESCRIPTION_PRINTED, (description: string) => {
      terminal.moveTo(1, 10, description);
    });
  }

  private registerOnBodyPrintedEventListener() {
    this.eventProcessor.on(EXERCISE_BODY_PRINTED, (body: EXERCISE_BODY_PRINTED_BODY) => {
      this.cursor = body.cursor;
      this.exerciseBody = body.exercise;
      terminal.moveTo(1, 11, this.exerciseBody);
    });
  }

  private registerOnKeyPressedEventListener() {
    this.eventProcessor.on(KEY_PRESSED, (key) => {
      const onKeyAction = this.exerciseInProgress ? this.onKeyExerciseInProgress.bind(this) : this.onKeyMenu.bind(this);
      onKeyAction(key);
    });
  }

  private registerOnExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.exerciseInProgress = true;
      this.answer = '';
      preExerciseClear();
    });
  }

  private registerOnAnswerCheckedEventListener() {
    this.eventProcessor.on(ANSWER_CHECKED, ({ isCorrect, correctAnswer }) => {
      terminal.hideCursor();
      this.exerciseInProgress = false;
      terminal.moveTo(1, 12, isCorrect ? 'Correct!' : 'Wrong!');
      printExerciseBodyWithCorrection(this.exerciseBody, this.answer, correctAnswer);
      printInBetweenMenu();
      this.sayCorrectAnswer(correctAnswer);
      // this.eventProcessor.emit(EXERCISE_NEXT);
    });
  }

  private onKeyExerciseInProgress(key: string) {
    if (key === 'backspace') {
      this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
      clearLine(process.stdout, 0);
    } else {
      this.answer = this.answer + key;
    }
    printExerciseBody(this.exerciseBody, this.answer);
  }

  private onKeyMenu(key: string) {
    switch (key) {
      case 'e':
        printSampleSentence();
        break;
      case 's':
        this.saySampleSentence();
        break;
      default:
        terminal.hideCursor(false);
        setTimeout(() => {
          this.eventProcessor.emit(EXERCISE_NEXT);
        }, 250);
    }
  }

  private saySampleSentence() {
    exec(`say "${this.answer}"`);
  }

  private sayCorrectAnswer(correctAnswer: string) {
    exec(`say "${correctAnswer}"`);
  }
}
