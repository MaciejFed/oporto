import { Comperable } from '../common/common';
import { Verb } from '../repository/exercisesRepository';
import {
  getCorrectVerbConjugation,
  getRandomPerson,
  getRandomVerb,
  Person
} from '../service/verb';
import { Exercise, ExerciseType } from './exercise';

export class VerbExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  verb: Verb;
  person: Person;
  correctAnswer: string;
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'VerbExercise';
    this.verb = getRandomVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = 1;
  }

  getExercsiseExplanation = () => undefined;

  getExerciseBodyPrefix = () => `${this.person}: `;

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => `Infinitive: ${this.verb.infinitive}`;

  getCorrectAnswer = () => getCorrectVerbConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => `${this.person} ${this.correctAnswer}`;

  equal = (exercise: VerbExercise) =>
    exercise.exercsiseType === 'VerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.person === exercise.person;
}
