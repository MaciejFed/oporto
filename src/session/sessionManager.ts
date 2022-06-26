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
import { getRandomVerb, Person } from '../service/verb';
import { getRandomPerson, getCorrectConjugation } from '../service/verb';
import { AppEventListener } from '../event/eventListener';
import { EventProcessor } from '../event/eventProcessor';
import { VerbExercise } from '../exercise/verbExercise';
import { Exercise } from '../exercise/exercise';
import { logger } from '../logger/logger';

export class SessionManager implements AppEventListener {
  eventProcessor: EventProcessor;
  exercises: Exercise[];
  currentExercise?: Exercise;
  answer: string;
  exerciseInProgress: boolean;

  constructor(eventProcessor: EventProcessor, exerciseCount = 3) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exercises = Array.from(Array(exerciseCount)).map(
      () => new VerbExercise()
    );
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
      this.currentExercise = this.exercises.pop();
      this.eventProcessor.emit(
        EXERCISE_DESCRIPTION_PRINTED,
        this.currentExercise?.getExerciseDescription()
      );
      this.eventProcessor.emit(EXERCISE_BODY_PRINTED, {
        exercise: this.currentExercise?.getExerciseBody(),
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
        this.answer = this.answer.substring(
          0,
          Math.max(0, this.answer.length - 1)
        );
      } else {
        if (this.exerciseInProgress) {
          this.answer += key;
        }
      }
      logger.info(`Answer: "${this.answer}"`);
    });
  }

  registerAnswerSubmittedEventListener() {
    this.eventProcessor.on(ANSWER_SUBMITED, () => {
      this.exerciseInProgress = false;
      const correctAnswer = this.currentExercise
        ?.getCorrectAnswer()
        .toLowerCase();
      const isCorrect = this.currentExercise?.checkAnsweCorrect(this.answer);
      logger.info(
        `Answer: "${this.answer}", correctAnswer: "${correctAnswer}" `
      );
      this.eventProcessor.emit(ANSWER_CHECKED, {
        isCorrect: isCorrect,
        correctAnswer: correctAnswer
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
