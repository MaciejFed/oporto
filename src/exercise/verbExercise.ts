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
  verb: RegularVerb;
  person: Person;
  exercsiseType: ExerciseType;
  correctAnswer: string;

  constructor() {
    this.verb = getRandomRegularVerb();
    this.person = getRandomPerson();
    this.exercsiseType = ExerciseType.REGULAR_VERB;
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExercsiseExplanation = () => undefined;

  getExerciseType = () => ExerciseType.REGULAR_VERB;

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
  verb: IrregularVerb;
  person: Person;
  exercsiseType: ExerciseType;
  correctAnswer: string;

  constructor() {
    this.verb = getRandomIrregularVerb();
    this.person = getRandomPerson();
    this.exercsiseType = ExerciseType.IRREUGAL_VERB;
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExercsiseExplanation = () => undefined;

  getExerciseType = () => ExerciseType.IRREUGAL_VERB;

  getExerciseBody = () => `${this.person}: `;

  getExerciseDescription = () => `Infinitive: ${this.verb.Infinitive}`;

  getCorrectAnswer = () => getCorrectIrregularConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  equal = (exercise: IrregularVerbExercise) => this.verb === exercise.verb && this.person === exercise.person;
}
