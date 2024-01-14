import { Comparable } from '../common/common';
import { Person, Verb } from '../repository/exercises-repository';
import { getCorrectVerbConjugation, getRandomPerson, getRandomVerb } from '../service/verb/verb';
import { Exercise, ExerciseType } from './exercise';
import { RatioRange } from '../service/progress';

export type VerbTime = 'presentSimple' | 'pastPerfect';

const vertTimePrintVersion = (verbTime: VerbTime) => {
  if (verbTime === 'presentSimple') return 'Present Simple';
  return 'Past Perfect';
};

export class VerbExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verbTime: VerbTime;
  verb: Verb;
  person: Person;

  constructor() {
    this.exerciseType = 'VerbExercise';
    this.verb = getRandomVerb();
    this.person = getRandomPerson();
    this.verbTime = 'presentSimple';
  }

  static new(verb: Verb, person: Person, verbTime: VerbTime): VerbExercise {
    const verbExercise = new VerbExercise();
    verbExercise.verb = verb;
    verbExercise.person = person;
    verbExercise.verbTime = verbTime;

    return verbExercise;
  }

  getTranslation = () => undefined;

  getBodyPrefix = () => `[${vertTimePrintVersion(this.verbTime)}] ${this.person}: `;

  getBodySuffix = () => '';

  getDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectVerbConjugation(this.verb, this.person, this.verbTime);

  isAnswerCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getMaxProgressRange(): RatioRange {
    return '80-100';
  }

  getMinAnswerCount(): number {
    return 2;
  }

  getBaseWord() {
    return this.verb;
  }

  getRetryPrompt = () => `${this.person} ${this.getCorrectAnswer()}`;

  equal = (exercise: VerbExercise) =>
    exercise.exerciseType === 'VerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verb.english === exercise.verb.english &&
    this.verbTime === exercise.verbTime &&
    this.person === exercise.person;
}
