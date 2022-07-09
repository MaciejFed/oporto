import {
  ANSWER_SUBMITED,
  ANSWER_CHECKED,
  APP_FINISHED,
  APP_STARTED,
  EXERCISE_BODY_PRINTED,
  EXERCISE_DESCRIPTION_PRINTED,
  EXERCISE_NEXT,
  EXERCISE_STARTED,
  KEY_PRESSED
} from '../event/events';
import { AppEventListener } from '../event/eventListener';
import { EventProcessor } from '../event/eventProcessor';
import { Exercise, generateUniqeExercises } from '../exercise/exercise';
import { logger } from '../common/logger';
import { convertToResult, Result } from '../service/result';
import { saveNewResult } from '../repository/resultRepository';
import { AnswerInputType } from '../io/input';

export class SessionManager implements AppEventListener {
  eventProcessor: EventProcessor;
  exercises: Exercise[];
  results: Result[];
  currentExercise: Exercise;
  answer: string;
  exerciseInProgress: boolean;

  constructor(eventProcessor: EventProcessor, exerciseCount: number) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exercises = generateUniqeExercises(exerciseCount);
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

  registerAppStartedEventListener() {
    this.eventProcessor.on(APP_STARTED, () => {
      this.eventProcessor.emit(EXERCISE_STARTED);
    });
  }

  registerExerciseStartedEventListener() {
    this.eventProcessor.on(EXERCISE_STARTED, () => {
      this.currentExercise = this.exercises.pop() || this.exercises[0];
      this.eventProcessor.emit(EXERCISE_DESCRIPTION_PRINTED, this.currentExercise?.getExerciseDescription());
      this.eventProcessor.emit(EXERCISE_BODY_PRINTED, {
        exerciseBodyPrefix: this.currentExercise?.getExerciseBodyPrefix(),
        exerciseBodySuffix: this.currentExercise?.getExerciseBodySuffix(),
        exerciseExplanation: this.currentExercise?.getExercsiseExplanation(),
        cursor: {
          x: 0,
          y: 0
        }
      });
      this.exerciseInProgress = true;
    });
  }

  registerKeyPressedEventListener() {
    this.eventProcessor.on(KEY_PRESSED, (key) => {
      if (key === 'backspace') {
        this.answer = this.answer.substring(0, Math.max(0, this.answer.length - 1));
      } else {
        this.answer += key;
      }
      logger.info(`Answer: "${this.answer}"`);
    });
  }

  registerAnswerSubmittedEventListener() {
    this.eventProcessor.on(ANSWER_SUBMITED, (answerInputType: AnswerInputType) => {
      if (!this.exerciseInProgress) {
        return;
      }
      this.exerciseInProgress = false;
      const correctAnswer = this.currentExercise?.getCorrectAnswer().toLowerCase();
      const isCorrect = this.currentExercise?.checkAnsweCorrect(this.answer);
      saveNewResult(convertToResult(this.currentExercise, this.answer, answerInputType));
      logger.info(`Answer: "${this.answer}", correctAnswer: "${correctAnswer}" `);
      this.eventProcessor.emit(ANSWER_CHECKED, {
        isCorrect,
        correctAnswer,
        answerInputType
      });
      this.resetAnswer();
    });
  }

  registerNextExerciseEventListener() {
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

  resetAnswer() {
    logger.info('Reseting answer...');
    this.answer = '';
  }
}
