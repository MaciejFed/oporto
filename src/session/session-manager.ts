import {
  ANSWER_SUBMITTED,
  ANSWER_CHECKED,
  APP_FINISHED,
  APP_STARTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_NEXT,
  EXERCISE_STARTED,
  KEY_PRESSED
} from '../event/events';
import { AppEventListener } from '../event/event-listener';
import { EventProcessor } from '../event/event-processor';
import { logger } from '../common/logger';
import { convertToResult, Result } from '../service/result';
import { saveNewResult } from '../repository/result-repository';
import { AnswerInputType } from '../io/input';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { exec } from 'child_process';
import { Exercise } from '../exercise/exercise';
import { generateExercisesForSession } from '../exercise/generator';

export class SessionManager implements AppEventListener {
  eventProcessor: EventProcessor;
  exercises: Exercise[];
  results: Result[];
  currentExercise: Exercise;
  answer: string;
  exerciseInProgress: boolean;
  hearingLoop?: NodeJS.Timer;

  constructor(
    eventProcessor: EventProcessor,
    exerciseCount: number,
    sortExercises: boolean,
    exerciseFilter: (ex: Exercise) => boolean
  ) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exercises = generateExercisesForSession(exerciseCount, sortExercises, exerciseFilter);
    this.results = [];
    this.currentExercise = this.exercises[0];
    this.answer = '';
    this.exerciseInProgress = false;
  }

  registerListeners() {
    this.registerAppStartedEventListener();
    this.registerExerciseStartedEventListener();
    this.registerKeyPressedEventListener();
    this.registerAnswerSubmittedEventListener();
    this.registerNextExerciseEventListener();
  }

  private registerAppStartedEventListener() {
    this.eventProcessor.on(APP_STARTED, () => {
      this.eventProcessor.emit(EXERCISE_STARTED);
    });
  }

  private registerExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.currentExercise = this.exercises.pop() || this.exercises[0];
      this.eventProcessor.emit(EXERCISE_DESCRIPTION_PRINTED, this.currentExercise?.getExerciseDescription());
      this.eventProcessor.emit(EXERCISE_BODY_PRINTED, {
        exerciseBodyPrefix: this.currentExercise?.getExerciseBodyPrefix(),
        exerciseBodySuffix: this.currentExercise?.getExerciseBodySuffix(),
        exerciseTranslation: this.currentExercise?.getExerciseTranslation()
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
      logger.info(`Answer: "${this.answer}"`);
    });
  }

  private registerAnswerSubmittedEventListener() {
    this.eventProcessor.on(ANSWER_SUBMITTED, (answerInputType: AnswerInputType) => {
      if (!this.exerciseInProgress) {
        return;
      }
      this.exerciseInProgress = false;
      const correctAnswer = this.currentExercise?.getCorrectAnswer();
      this.answer = this.answer.trim();
      const wasCorrect = this.currentExercise?.checkAnswerCorrect(this.answer);
      saveNewResult(convertToResult(this.currentExercise, this.answer, wasCorrect, answerInputType));
      logger.info(`Answer: "${this.answer}", correctAnswer: "${correctAnswer}" `);
      this.eventProcessor.emit(ANSWER_CHECKED, {
        wasCorrect,
        correctAnswer,
        answerInputType,
        exercise: this.currentExercise
      });
      this.resetAnswer();
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

  private resetAnswer() {
    logger.info('Resting answer...');
    this.answer = '';
    if (this.hearingLoop) {
      clearInterval(this.hearingLoop);
    }
  }

  handleExerciseFromHearing(exercise: Exercise) {
    if (exercise instanceof TranslationExercise && exercise.isTranslationToPortugueseFromHearing()) {
      const translationExercise = exercise as Exercise;
      const correctAnswer = translationExercise.getCorrectAnswer();
      exec(`say ${correctAnswer}`);
      this.hearingLoop = setInterval(() => {
        exec(`say ${correctAnswer}`);
      }, 5000);
    }
  }
}

export default SessionManager;
