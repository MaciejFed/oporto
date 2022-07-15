import { exec } from 'child_process';
import { clear } from 'console';
import { clearLine } from 'readline';
import { terminal } from 'terminal-kit';
import { EventProcessor } from '../event/eventProcessor';
import { logger } from '../common/logger';
import {
  APP_STARTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_BODY_PRINTED_BODY,
  KEY_PRESSED,
  ANSWER_CHECKED,
  EXERCISE_NEXT,
  EXERCISE_STARTED,
  APP_FINISHED
} from '../event/events';
import {
  animateExerciseSummary,
  preExerciseClear,
  printExerciseBody,
  printExerciseBodyWithCorrection,
  printExerciseDescription,
  printExerciseExplanation,
  printExerciseFeedback,
  printInBetweenMenu
} from './terminalUtils';
import { Exercise } from '../exercise/exercise';
import { getStatisticForExercise } from '../service/result';
import { sleep } from '../common/common';

export class Terminal {
  eventProcessor: EventProcessor;
  exerciseBodyPrefix: string;
  exerciseBodySuffix: string;
  exerciseExplanation: string;
  answer: string;
  correctAnswer: string;
  exerciseLoop: any;
  exerciseInProgress: boolean;
  exercise?: Exercise;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exerciseInProgress = false;
    this.exerciseBodyPrefix = '';
    this.exerciseBodySuffix = '';
    this.exerciseExplanation = '';
    this.answer = '';
    this.correctAnswer = '';
    clear();
  }

  registerListeners() {
    this.registerOnAppStartedEventListerner();
    this.registerOnDescriptionPrintedEventListener();
    this.registerOnBodyPrintedEventListener();
    this.registerOnKeyPressedEventListener();
    this.registerOnExerciseStartedEventListener();
    this.registerOnAnswerCheckedEventListener();
    this.registerOnAppFinishedEventListener();
  }

  private registerOnAppStartedEventListerner() {
    this.eventProcessor.on(APP_STARTED, () => {
      preExerciseClear();
    });
  }

  private registerOnDescriptionPrintedEventListener() {
    this.eventProcessor.on(EXERCISE_DESCRIPTION_PRINTED, (description: string) => {
      printExerciseDescription(description);
    });
  }

  private registerOnBodyPrintedEventListener() {
    this.eventProcessor.on(EXERCISE_BODY_PRINTED, (body: EXERCISE_BODY_PRINTED_BODY) => {
      logger.info(`exercise: ${JSON.stringify(body)}`);
      this.exerciseBodyPrefix = body.exerciseBodyPrefix;
      this.exerciseBodySuffix = body.exerciseBodySuffix;
      this.exerciseExplanation = body.exerciseExplanation;
      printExerciseBody(this.exerciseBodyPrefix, this.answer, this.exerciseBodySuffix);
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
    this.eventProcessor.on(ANSWER_CHECKED, ({ isCorrect, correctAnswer, answerInputType, exercise }) => {
      this.exercise = exercise;
      terminal.hideCursor();
      this.exerciseInProgress = false;
      printExerciseFeedback(isCorrect, answerInputType);
      printExerciseBodyWithCorrection(this.exerciseBodyPrefix, this.answer, correctAnswer);
      printInBetweenMenu(this.exerciseExplanation !== undefined && this.exerciseExplanation.length > 0);
      sleep(250).then(() => {
        const exerciseStatistics = getStatisticForExercise(exercise);
        if (exerciseStatistics) {
          animateExerciseSummary(exerciseStatistics);
        }
      });
      this.correctAnswer = correctAnswer;
      this.sayCorrectAnswerPhrase();
      // this.eventProcessor.emit(EXERCISE_NEXT);
    });
  }

  private registerOnAppFinishedEventListener() {
    this.eventProcessor.on(APP_FINISHED, () => {
      terminal.hideCursor(false);
    });
  }

  private onKeyExerciseInProgress(key: string) {
    if (key === 'backspace') {
      this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
      clearLine(process.stdout, 0);
    } else {
      if (this.answer.length === 0 && key === ' ') {
        logger.info('Empty space as a first input - skipping...');
        return;
      }
      this.answer = this.answer + key;
    }
    printExerciseBody(this.exerciseBodyPrefix, this.answer, this.exerciseBodySuffix);
  }

  private onKeyMenu(key: string) {
    switch (key) {
      case 'e':
        printExerciseExplanation(this.exerciseExplanation);
        break;
      case 'r':
        this.sayCorrectAnswerPhrase();
        break;
      default:
        terminal.hideCursor(false);
        setTimeout(() => {
          this.eventProcessor.emit(EXERCISE_NEXT);
        }, 50);
    }
  }

  private sayCorrectAnswerPhrase() {
    exec(`say "${this.exercise?.getRepeatAnswerPhrase()}"`);
  }
}
