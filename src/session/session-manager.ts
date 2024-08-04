import {
  ANSWER_SUBMITTED,
  ANSWER_CHECKED,
  APP_FINISHED,
  APP_STARTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_NEXT,
  EXERCISE_STARTED,
  KEY_PRESSED,
  HEARING_EXERCISE_REPEAT,
  NEW_WORD_LEARNED
} from '../event/events';
import { AppEventListener } from '../event/event-listener';
import { EventProcessor } from '../event/event-processor';
import { logger } from '../common/logger';
import { convertToResult, Result } from '../service/result';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { exec, execSync } from 'child_process';
import { Exercise } from '../exercise/exercise';
import { generateExercisesForSession, getExercisesForSession } from '../exercise/generator';
import { AnswerInputType } from '../io/terminal/terminal-utils';
import { getVoice, Language } from '../common/language';
import { fetchExercisesForSession, getAudio, saveNewResult } from '../client/client';
import { getSavedAudioPath } from '../server/configuration';
import { getAllResults } from '../repository/result-repository';
import { newWordsBetweenResults } from '../service/progress/progress';
import { DateTime } from 'luxon';

export class SessionManager implements AppEventListener {
  eventProcessor: EventProcessor;
  exercises: Exercise[];
  currentExercise: Exercise;
  answer: string;
  exerciseInProgress: boolean;
  hearingLoop?: NodeJS.Timer;
  language: Language;
  lastResult?: Result;

  constructor(eventProcessor: EventProcessor, language: Language) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exercises = getExercisesForSession(language);
    this.currentExercise = this.exercises[0];
    this.answer = '';
    this.exerciseInProgress = false;
    this.language = language;
  }

  registerListeners() {
    this.registerAppStartedEventListener();
    this.registerExerciseStartedEventListener();
    this.registerKeyPressedEventListener();
    this.registerAnswerSubmittedEventListener();
    this.registerNextExerciseEventListener();
    this.registerHearingExerciseRepeat();
  }

  private registerAppStartedEventListener() {
    this.eventProcessor.on(APP_STARTED, () => {
      this.eventProcessor.emit(EXERCISE_STARTED);
    });
  }

  private registerExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.currentExercise = this.exercises.pop() || this.exercises[0];
      this.eventProcessor.emit(EXERCISE_DESCRIPTION_PRINTED, this.currentExercise?.getDescription());
      this.eventProcessor.emit(EXERCISE_BODY_PRINTED, {
        exerciseBodyPrefix: this.currentExercise?.getBodyPrefix(),
        exerciseBodySuffix: this.currentExercise?.getBodySuffix(),
        exerciseTranslation: this.currentExercise?.getTranslation()
      });
      this.exerciseInProgress = true;
      this.handleExerciseFromHearing(this.currentExercise);
    });
  }

  private registerKeyPressedEventListener() {
    this.eventProcessor.on(KEY_PRESSED, (key) => {
      if (key === 'backspace') {
        this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
      } else {
        this.answer += key;
      }
      logger.debug(`Answer: "${this.answer}"`);
    });
  }

  private registerAnswerSubmittedEventListener() {
    this.eventProcessor.on(ANSWER_SUBMITTED, (answerInputType: AnswerInputType) => {
      const correctAnswer = this.currentExercise?.getCorrectAnswer();
      this.answer = !this.exerciseInProgress ? this.answer.trim().substring(correctAnswer?.length) : this.answer.trim();
      const wasCorrect = this.currentExercise?.isAnswerCorrect(this.answer);
      const result = convertToResult(this.currentExercise, this.answer, wasCorrect, answerInputType);
      const newWords = newWordsBetweenResults(
        getAllResults(this.language),
        getAllResults(this.language).concat(result),
        this.language
      );
      if (newWords.length) {
        const allResults = getAllResults(this.language)
          .concat(result)
          .filter((res) => res.exercise.getBaseWordAsString() === newWords[0]);
        const firstAttempt = DateTime.fromJSDate(allResults[0].date);
        const lastTimeAttempted = DateTime.fromJSDate(allResults[allResults.length - 1].date);
        this.eventProcessor.emit(NEW_WORD_LEARNED, {
          word: newWords[0],
          time: Math.round(lastTimeAttempted.diff(firstAttempt, 'days').days)
        });
      }
      if (!this.lastResult || !this.lastResult.exercise.equal(result.exercise)) {
        saveNewResult(this.language, result);
        this.lastResult = result;
      }
      logger.debug(`Answer: "${this.answer}", correctAnswer: "${correctAnswer}" `);
      this.eventProcessor.emit(ANSWER_CHECKED, {
        wasCorrect,
        correctAnswer,
        answerInputType,
        exercise: this.currentExercise
      });
      this.resetAnswer();
      this.exerciseInProgress = false;
    });
  }

  private registerNextExerciseEventListener() {
    this.eventProcessor.on(EXERCISE_NEXT, () => {
      this.resetAnswer();
      if (this.exercises.length > 0) {
        this.eventProcessor.emit(EXERCISE_STARTED);
      } else {
        process.stdin.removeAllListeners();

        this.eventProcessor.emit(APP_FINISHED);
      }
    });
  }

  private registerHearingExerciseRepeat() {
    this.eventProcessor.on(HEARING_EXERCISE_REPEAT, () => {
      this.handleExerciseFromHearing(this.currentExercise);
    });
  }

  private resetAnswer() {
    logger.debug('Resting answer...');
    this.answer = '';
    if (this.hearingLoop) {
      clearInterval(this.hearingLoop);
    }
  }

  handleExerciseFromHearing(exercise: Exercise) {
    if (exercise instanceof TranslationExercise && exercise.isTranslationToPortugueseFromHearing()) {
      const translationExercise = exercise as Exercise;
      const correctAnswer = translationExercise.getCorrectAnswer();

      getAudio(this.language, correctAnswer, 'google', 'normal');
      execSync(`afplay ${getSavedAudioPath()}`);
    }
  }
}

export default SessionManager;
