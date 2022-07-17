import { Comperable } from '../common/common';
import { IrregularVerb, RegularVerb } from '../repository/exercisesRepository';
import {
  getRandomRegularVerb,
  getRandomPerson,
  getCorrectIrregularConjugation,
  getCorrectRegularConjugation,
  Person,
  getRandomIrregularVerb
} from '../service/verb';
import { Exercise, ExerciseType } from './exercise';

export class RegularVerbExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  verb: RegularVerb;
  person: Person;
  correctAnswer: string;
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'RegularVerb';
    this.verb = getRandomRegularVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = 1;
  }

  getExercsiseExplanation = () => undefined;

  getExerciseBodyPrefix = () => `${this.person}: `;

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => `Infinitive: ${this.verb.infinitive}`;

  getCorrectAnswer = () => getCorrectRegularConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => `${this.person} ${this.correctAnswer}`;

  equal = (exercise: RegularVerbExercise) =>
    exercise.exercsiseType === 'RegularVerb' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.person === exercise.person;
}

export class IrregularVerbExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  verb: IrregularVerb;
  person: Person;
  correctAnswer: string;
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'IrregularVerb';
    this.verb = getRandomIrregularVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = 1;
  }

  getExercsiseExplanation = () => undefined;

  getExerciseBodyPrefix = () => `${this.person}: `;

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => `Infinitive: ${this.verb.infinitive}`;

  getCorrectAnswer = () => getCorrectIrregularConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => `${this.person} ${this.correctAnswer}`;

  equal = (exercise: IrregularVerbExercise) =>
    exercise.exercsiseType === 'IrregularVerb' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.person === exercise.person;
}
