import { exec } from 'child_process';
import { clear } from 'console';
import { clearLine } from 'readline';
import { terminal } from 'terminal-kit';
import { EventProcessor } from '../event/event-processor';
import { logger } from '../common/logger';
import {
  APP_STARTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_BODY_PRINTED_BODY,
  KEY_PRESSED,
  ANSWER_CHECKED,
  EXERCISE_NEXT,
  EXERCISE_STARTED
} from '../event/events';
import {
  animateExerciseSummary,
  displayGenericWeeklyStatistics,
  preExerciseClear,
  printAllAnswers,
  printExerciseBody,
  printExerciseBodyWithCorrection,
  printExerciseDescription,
  printExerciseTranslation,
  printExerciseFeedback,
  printExerciseRepeatAnswer,
  printExerciseRepeatAnswerKey,
  printExerciseRepeatBody,
  printInBetweenMenu,
  printExampleSentence,
  printAllVerbConjugations
} from './terminal/terminal-utils';
import { Exercise } from '../exercise/exercise';
import { getExerciseProgress, getStatisticForExercise } from '../service/result';
import { getAllAnswersForExercise, getAllResults, getAllResultsForExercise } from '../repository/result-repository';
import { sleep } from '../common/common';
import { findSentenceExamplesForExercise } from '../service/example-finder';

export class Terminal {
  eventProcessor: EventProcessor;
  exerciseBodyPrefix: string;
  exerciseBodySuffix: string;
  exerciseTranslation: string | undefined;
  answer: string;
  repetitionAnswer: string;
  correctAnswer: string;
  exerciseInProgress: boolean;
  exerciseRepetitionInProgress: boolean;
  exercise?: Exercise;
  exampleSentence?: { wordStartIndex: number; exampleSentence: string; exerciseWord: string } | undefined;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exerciseInProgress = false;
    this.exerciseRepetitionInProgress = true;
    this.exerciseBodyPrefix = '';
    this.exerciseBodySuffix = '';
    this.answer = '';
    this.repetitionAnswer = '';
    this.correctAnswer = '';
    clear();
  }

  private registerListeners() {
    this.registerOnAppStartedEventListener();
    this.registerOnDescriptionPrintedEventListener();
    this.registerOnBodyPrintedEventListener();
    this.registerOnKeyPressedEventListener();
    this.registerOnExerciseStartedEventListener();
    this.registerOnAnswerCheckedEventListener();
  }

  private registerOnAppStartedEventListener() {
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
      logger.debug(`exercise: ${JSON.stringify(body)}`);
      this.exerciseBodyPrefix = body.exerciseBodyPrefix;
      this.exerciseBodySuffix = body.exerciseBodySuffix;
      this.exerciseTranslation = body.exerciseTranslation;
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
      this.exampleSentence = undefined;
      clear();
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
      this.exampleSentence = findSentenceExamplesForExercise(exercise);
      if (this.exampleSentence) {
        printExampleSentence(
          this.exampleSentence.wordStartIndex,
          this.exampleSentence.exerciseWord,
          this.exampleSentence.exampleSentence
        );
      }
      this.sayCorrectAnswerPhrase();
      if (wasCorrect) {
        this.endOfExerciseMenu();
      } else {
        this.exerciseRepetitionInProgress = true;
        printExerciseRepeatBody();
      }
    });
  }

  private onKeyExerciseInProgress(key: string) {
    if (key === 'backspace') {
      this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
      clearLine(process.stdout, 0);
    } else {
      if (this.answer.length === 0 && key === ' ') {
        logger.debug('Empty space as a first input - skipping...');
        return;
      }
      this.answer = this.answer + key;
    }
    printExerciseBody(this.exerciseBodyPrefix, this.answer, this.exerciseBodySuffix);
  }

  private endOfExerciseMenu() {
    this.exerciseRepetitionInProgress = false;
    terminal.hideCursor();
    printInBetweenMenu(this.exerciseTranslation !== undefined && this.exerciseTranslation.length > 0);
    if (this.exercise) {
      const allResults = getAllResults();
      printAllAnswers(getAllResultsForExercise(allResults, this.exercise));
      if (['VerbExercise', 'VerbTranslation'].includes(this.exercise.exerciseType)) {
        // @ts-ignore
        printAllVerbConjugations(this.exercise.verb);
      }
      const exerciseStatistics = getStatisticForExercise(allResults, this.exercise);
      if (exerciseStatistics) {
        animateExerciseSummary(exerciseStatistics);
      }
      displayGenericWeeklyStatistics(getExerciseProgress(allResults, this.exercise), 30);
    }
  }

  private onKeyExerciseRepetitionInProgress(key: string) {
    if (key === 'backspace') {
      this.repetitionAnswer = this.repetitionAnswer.substring(0, Math.max(0, this.repetitionAnswer.length - 1));
      clearLine(process.stdout, 0);
      printExerciseRepeatAnswer(this.repetitionAnswer, this.correctAnswer);
    } else {
      if (this.repetitionAnswer.length === 0 && key === ' ') {
        logger.debug('Empty space as a first input - skipping...');
        return;
      }
      this.repetitionAnswer = this.repetitionAnswer + key;
    }
    printExerciseRepeatAnswerKey(this.repetitionAnswer, this.correctAnswer, key);
    if (this.correctAnswer.toLowerCase() === this.repetitionAnswer.toLowerCase()) {
      this.endOfExerciseMenu();
    }
  }

  private async onKeyMenu(key: string) {
    switch (key) {
      case 't':
        printExerciseTranslation(this.exerciseTranslation);
        break;
      case 'r':
        this.sayCorrectAnswerPhrase();
        break;
      default:
        terminal.hideCursor(false);
        this.eventProcessor.emit(EXERCISE_NEXT);
    }
  }

  private async sayCorrectAnswerPhrase() {
    exec(`say "${this.exercise?.getRetryPrompt()}"`);
    await sleep(2000);
    if (this.exampleSentence) {
      exec(`say "${this.exampleSentence.exampleSentence}"`);
    }
  }
}

export default Terminal;
