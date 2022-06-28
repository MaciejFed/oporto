import { Comperable } from '../common/common';
import { getRandomVerb, getRandomPerson, getCorrectConjugation, Person } from '../service/verb';
import { Exercise, ExerciseType } from './exercise';

export class RegularVerbExercise implements Exercise, Comperable<RegularVerbExercise> {
  verb: string;
  person: Person;

  constructor() {
    this.verb = getRandomVerb();
    this.person = getRandomPerson();
  }

  getExercsiseExplanation = () => undefined;

  getExerciseType = () => ExerciseType.REGULAR_VERB;

  getExerciseBody = () => `${this.person}: `;

  getExerciseDescription = () => `Infinitive: ${this.verb}`;

  getCorrectAnswer = () => getCorrectConjugation(this.verb, this.person);

  checkAnsweCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  equal = (exercise: RegularVerbExercise) => this.verb === exercise.verb && this.person === exercise.person;
}
