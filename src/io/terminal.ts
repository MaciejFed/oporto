import { exec, execSync } from 'child_process';
import { clear } from 'console';
import { clearLine } from 'readline';
import { terminal } from 'terminal-kit';
import { EventProcessor } from '../event/event-processor';
import { logger } from '../common/logger';
import {
  ANSWER_CHECKED,
  APP_STARTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_BODY_PRINTED_BODY,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_NEXT,
  EXERCISE_STARTED,
  KEY_PRESSED,
  NEW_WORD_LEARNED
} from '../event/events';
import {
  animateExerciseSummary,
  displayGenericWeeklyStatistics,
  EXERCISE_BODY_MARGIN,
  EXERCISE_REPEAT_BODY_MARGIN,
  logSaved,
  preExerciseClear,
  printAllAnswers,
  printAllVerbConjugations,
  printExampleSentence,
  printExampleTranslation,
  printExerciseBody,
  printExerciseBodyWithCorrection,
  printExerciseDescription,
  printExerciseFeedback,
  printExerciseRepeatAnswer,
  printExerciseRepeatAnswerKey,
  printExerciseRepeatBody,
  printExerciseTranslation,
  printInBetweenMenu,
  printNewWordLearned
} from './terminal/terminal-utils';
import { BaseWordType, Exercise } from '../exercise/exercise';
import { getExerciseProgress, getStatisticForBaseWord } from '../service/result';
import { getAllResults, getAllResultsForExercise } from '../repository/result-repository';
import { extractWordToFindFromExercise, findExampleSentenceAndWord } from '../service/example-finder/example-finder';
import { Language } from '../common/language';
import { VerbExercise } from '../exercise/verb-exercise';
import { checkStandardConjugation } from '../service/verb/verb';
import { sleep } from '../common/common';
import { MovieExample } from './file';
import { getAudio, saveFavoriteExample } from '../client/client';
import { getSavedAudioPath } from '../server/configuration';
import { Rate } from '../server/audio/audio.types';

enum Phase {
  FIRST_RESPONSE = 'FIRST_RESPONSE',
  REPETITION = 'REPETITION',
  REPETITION_RESPONSE = 'REPETITION_RESPONSE',
  EXAMPLE = 'EXAMPLE',
  MENU = 'MENU'
}

export class Terminal {
  exerciseBodyPrefix: string;
  exerciseBodySuffix: string;
  exerciseTranslation: string | undefined;
  answer: string;
  repetitionAnswer: string;
  correctAnswer: string;
  exercise?: Exercise;
  exampleSentence: MovieExample | undefined;
  exampleSentenceFull?: string | undefined;
  canGoNext: boolean;
  exampleSentenceTranslation?: string | undefined;
  exampleSentenceTranslationApi?: string | undefined;
  phase: Phase;

  constructor(private readonly eventProcessor: EventProcessor, private readonly language: Language) {
    this.registerListeners();
    this.exerciseBodyPrefix = '';
    this.exerciseBodySuffix = '';
    this.answer = '';
    this.repetitionAnswer = '';
    this.correctAnswer = '';
    this.language = language;
    this.canGoNext = false;
    this.phase = Phase.FIRST_RESPONSE;
    clear();
  }

  private registerListeners() {
    this.registerOnAppStartedEventListener();
    this.registerOnDescriptionPrintedEventListener();
    this.registerOnBodyPrintedEventListener();
    this.registerOnKeyPressedEventListener();
    this.registerOnExerciseStartedEventListener();
    this.registerOnAnswerCheckedEventListener();
    this.registerNewWordLearnedListener();
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
      switch (this.phase) {
        case Phase.FIRST_RESPONSE:
        case Phase.REPETITION_RESPONSE:
          this.onKeyExerciseInProgress(key);
          break;
        case Phase.REPETITION:
          this.onKeyExerciseRepetitionInProgress(key);
          break;
        case Phase.EXAMPLE:
          this.onExampleMenu(key);
          break;
        case Phase.MENU:
          this.onKeyMenu(key);
          break;
        default:
      }
    });
  }

  private registerOnExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.phase = Phase.FIRST_RESPONSE;
      this.canGoNext = false;
      this.exampleSentenceFull = undefined;
      clear();
      preExerciseClear();
    });
  }

  private registerOnAnswerCheckedEventListener() {
    this.eventProcessor.on(ANSWER_CHECKED, ({ wasCorrect, correctAnswer, answerInputType, exercise }) => {
      this.exercise = exercise;
      this.correctAnswer = correctAnswer;
      printExerciseFeedback(wasCorrect, answerInputType);
      printExerciseBodyWithCorrection(this.exerciseBodyPrefix, this.answer, correctAnswer);
      this.answer = '';
      this.repetitionAnswer = '';
      if (!wasCorrect) {
        this.phase = Phase.REPETITION;
        printExerciseRepeatBody();
      } else {
        this.fetchExample();
        this.phase = Phase.EXAMPLE;
      }
      this.playAudio('answer', 'normal', 'google', false);
    });
  }

  private registerNewWordLearnedListener() {
    this.eventProcessor.on(NEW_WORD_LEARNED, ({ word, time }) => {
      printNewWordLearned(word, time);
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
    terminal.hideCursor();
    if (this.exercise) {
      const allResults = getAllResults(this.language);
      printAllAnswers(getAllResultsForExercise(allResults, this.exercise));
      printAllVerbConjugations(this.exercise, allResults);
      const exerciseStatistics = getStatisticForBaseWord(allResults, this.exercise, this.language);
      if (exerciseStatistics) {
        animateExerciseSummary(exerciseStatistics);
      }
      displayGenericWeeklyStatistics(getExerciseProgress(allResults, this.exercise), 30);
      this.canGoNext = true;
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
      this.phase = Phase.REPETITION_RESPONSE;
      terminal.moveTo(0, EXERCISE_REPEAT_BODY_MARGIN);
      clearLine(process.stdout, 0);
      terminal.moveTo(0, EXERCISE_BODY_MARGIN);
      clearLine(process.stdout, 0);
      terminal.moveTo(0, EXERCISE_BODY_MARGIN + 1);
      clearLine(process.stdout, 0);
      terminal.hideCursor();
    }
  }

  private async onKeyMenu(key: string) {
    switch (key) {
      case 't':
        printExerciseTranslation(this.exerciseTranslation);
        break;
      case 'r':
        this.playAudio('answer', 'normal', 'google', false);
        break;
      default:
        terminal.hideCursor(false);
        this.eventProcessor.emit(EXERCISE_NEXT);
    }
  }

  private async onExampleMenu(key: string) {
    switch (key) {
      case 'a':
        this.playAudio('example', 'normal', 'google', false);
        break;
      case 's':
        this.playAudio('example', 'slow', 'google', false);
        break;
      case 'd':
        this.playAudio('example', 'normal', 'openai', false);
        break;
      case 't':
        printExerciseTranslation(this.exerciseTranslation);
        printExampleTranslation('Api:  ', this.exampleSentenceTranslationApi);
        break;
      case 'l':
        logSaved('Saving example...');
        await saveFavoriteExample(this.language, this.exampleSentence!);
        logSaved('Example saved.');
        break;
      case 'e':
        printExampleSentence(
          this.exampleSentence!.wordStartIndex,
          this.exampleSentence!.word,
          this.exampleSentence!.targetLanguage!
        );
        break;
      case 'n':
      case ' ':
        this.phase = Phase.MENU;
        this.endOfExerciseMenu();
        break;
      default:
        break;
    }
  }

  private async playAudio(type: 'answer' | 'example', rate: Rate, api: 'google' | 'openai', sync = true) {
    try {
      const text = type === 'answer' ? this.exercise?.getRetryPrompt() : this.exampleSentence?.targetLanguage;
      getAudio(this.language, text!, api, rate);

      const syncFn = sync ? execSync : exec;
      const volumeParam = api === 'openai' ? '-v 2' : '';
      syncFn(`afplay ${volumeParam} ${getSavedAudioPath()}`);
    } catch (e: any) {
      logger.error(e);
    }
  }

  private fetchExample(): void {
    findExampleSentenceAndWord(
      this.language,
      this.exercise!,
      ({ wordStartIndex, word, targetLanguage, english, englishApi }) => {
        this.exampleSentence = {
          english,
          englishApi,
          targetLanguage,
          wordStartIndex,
          word
        };
        this.exampleSentenceTranslation = english;
        this.exampleSentenceTranslationApi = englishApi;
      }
    );
  }
}

export default Terminal;
