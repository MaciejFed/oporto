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
  printExerciseRepeatBody,
  printInBetweenMenu
} from './terminalUtils';
import { Exercise } from '../exercise/exercise';
import { getStatisticForExercise } from '../service/result';
import { sleep } from '../common/common';
import { displayStatistics } from '../commands/stat';

export class Terminal {
  eventProcessor: EventProcessor;
  exerciseBodyPrefix: string;
  exerciseBodySuffix: string;
  exerciseExplanation: string;
  answer: string;
  repetitionAnswer: string;
  correctAnswer: string;
  exerciseLoop: any;
  exerciseInProgress: boolean;
  exerciseRepetitionInProgress: boolean;
  exercise?: Exercise;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exerciseInProgress = false;
    this.exerciseRepetitionInProgress = true;
    this.exerciseBodyPrefix = '';
    this.exerciseBodySuffix = '';
    this.exerciseExplanation = '';
    this.answer = '';
    this.repetitionAnswer = '';
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
      let onKeyAction;
      if (this.exerciseInProgress) {
        onKeyAction = this.onKeyExerciseInProgress.bind(this);
      } else if (this.exerciseRepetitionInProgress) {
        onKeyAction = this.onKeyExerciseRepetitionInProgress.bind(this);
      } else {
        onKeyAction = this.onKeyMenu.bind(this);
      }
      onKeyAction(key);
    });
  }

  private registerOnExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.exerciseInProgress = true;
      this.answer = '';
      this.repetitionAnswer = '';
      preExerciseClear();
    });
  }

  private registerOnAnswerCheckedEventListener() {
    this.eventProcessor.on(ANSWER_CHECKED, ({ wasCorrect, correctAnswer, answerInputType, exercise }) => {
      this.exercise = exercise;
      this.exerciseInProgress = false;
      this.correctAnswer = correctAnswer;
      printExerciseFeedback(wasCorrect, answerInputType);
      printExerciseBodyWithCorrection(this.exerciseBodyPrefix, this.answer, correctAnswer);
      this.sayCorrectAnswerPhrase();
      if (wasCorrect) {
        this.endOfExerciseMenu();
      } else {
        this.exerciseRepetitionInProgress = true;
        printExerciseRepeatBody('', this.correctAnswer);
      }
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

  private endOfExerciseMenu() {
    this.exerciseRepetitionInProgress = false;
    terminal.hideCursor();
    printInBetweenMenu(this.exerciseExplanation !== undefined && this.exerciseExplanation.length > 0);
    if (this.exercise) {
      const exerciseStatistics = getStatisticForExercise(this.exercise);
      if (exerciseStatistics) {
        animateExerciseSummary(exerciseStatistics);
      }
    }
  }

  private onKeyExerciseRepetitionInProgress(key: string) {
    logger.info(`getting new key ${key}`);
    if (key === 'backspace') {
      this.repetitionAnswer = this.repetitionAnswer.substring(0, Math.max(0, this.repetitionAnswer.length - 1));
      clearLine(process.stdout, 0);
    } else {
      if (this.repetitionAnswer.length === 0 && key === ' ') {
        logger.info('Empty space as a first input - skipping...');
        return;
      }
      this.repetitionAnswer = this.repetitionAnswer + key;
    }
    printExerciseRepeatBody(this.repetitionAnswer, this.correctAnswer);
    if (this.correctAnswer.toLowerCase() === this.repetitionAnswer.toLowerCase()) {
      this.endOfExerciseMenu();
    }
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
