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

export class SessionManager implements AppEventListener {
  eventProcessor: EventProcessor;
  exercises: Exercise[];
  currentExercise?: Exercise;
  answer: string;

  constructor(eventProcessor: EventProcessor, exerciseCount = 3) {
    this.eventProcessor = eventProcessor;
    this.registerListeners();
    this.exercises = Array.from(Array(exerciseCount)).map(
      () => new VerbExercise()
    );
    this.answer = '';
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
        this.answer += key;
      }
    });
  }

  registerAnswerSubmittedEventListener() {
    this.eventProcessor.on(ANSWER_SUBMITED, () => {
      const correctAnswer = this.currentExercise?.checkAnsweCorrect(
        this.answer
      );
      this.eventProcessor.emit(ANSWER_CHECKED, {
        isCorrect: correctAnswer,
        correctAnswer: this.currentExercise?.getCorrectAnswer().toLowerCase()
      });
    });
  }

  registerNextExerciseEventListener() {
    this.eventProcessor.on(EXERCISE_NEXT, () => {
      this.answer = '';
      if (this.exercises.length > 0) {
        this.eventProcessor.emit(EXERCISE_STARTED);
      } else {
        process.stdin.removeAllListeners();
        this.eventProcessor.emit(APP_FINISHED);
      }
    });
  }
}
