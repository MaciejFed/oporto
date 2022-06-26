import {
  getRandomVerb,
  getRandomPerson,
  getCorrectConjugation,
  Person
} from '../service/verb';
import { Exercise } from './exercise';

export class VerbExercise implements Exercise {
  verb: string;
  person: Person;

  constructor() {
    this.verb = getRandomVerb();
    this.person = getRandomPerson();
  }

  getExerciseBody = () => `${this.person}: `;

  getExerciseDescription = () => `Infinitive: ${this.verb}`;

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = getCorrectConjugation(this.verb, this.person);
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }
}
