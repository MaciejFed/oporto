import { Comparable } from '../common/common';
import { Verb } from '../repository/exercisesRepository';
import { getCorrectVerbConjugation, getRandomPerson, getRandomVerb, Person } from '../service/verb';
import { Exercise, ExerciseType } from './exercise';

export class VerbExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verb: Verb;
  person: Person;
  correctAnswer: string;
  exerciseLevel: number;

  constructor() {
    this.exerciseType = 'VerbExercise';
    this.verb = getRandomVerb();
    this.person = getRandomPerson();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = 1;
  }

  getExerciseExplanation = () => undefined;

  getExerciseBodyPrefix = () => `${this.person}: `;

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectVerbConjugation(this.verb, this.person);

  checkAnswerCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => `${this.person} ${this.correctAnswer}`;

  equal = (exercise: VerbExercise) =>
    exercise.exerciseType === 'VerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.person === exercise.person;
}
