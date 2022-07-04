import { Comperable } from '../common/common';
import { IrregularVerb, RegularVerb } from '../repository/schema';
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

  constructor() {
    this.exercsiseType = 'RegularVerb';
    this.verb = getRandomRegularVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExercsiseExplanation = () => undefined;

  getExerciseBody = () => `${this.person}: `;

  getExerciseDescription = () => `Infinitive: ${this.verb}`;

  getCorrectAnswer = () => getCorrectRegularConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  equal = (exercise: RegularVerbExercise) => this.verb === exercise.verb && this.person === exercise.person;
}

export class IrregularVerbExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  verb: IrregularVerb;
  person: Person;
  correctAnswer: string;

  constructor() {
    this.exercsiseType = 'IrregularVerb';
    this.verb = getRandomIrregularVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExercsiseExplanation = () => undefined;

  getExerciseBody = () => `${this.person}: `;

  getExerciseDescription = () => `Infinitive: ${this.verb.Infinitive}`;

  getCorrectAnswer = () => getCorrectIrregularConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  equal = (exercise: IrregularVerbExercise) =>
    this.verb.Infinitive === exercise.verb.Infinitive && this.person === exercise.person;
}
