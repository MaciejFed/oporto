import { Comparable } from '../common/common';
import { Person, Verb } from '../repository/exercises-repository';
import { getCorrectVerbConjugation, getRandomPerson, getRandomVerb } from '../service/verb/verb';
import { BaseExercise, BaseWordType, Exercise, ExerciseType } from './exercise';

export type VerbTime = 'presentSimple' | 'pastPerfect';

const vertTimePrintVersion = (verbTime: VerbTime) => {
  if (verbTime === 'presentSimple') return 'Present Simple';
  return 'Past Perfect';
};

export class VerbExercise extends BaseExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verbTime: VerbTime;
  verb: Verb;
  person: Person;

  constructor() {
    super();
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

  toString(): string {
    return `${this.exerciseType}_${this.getBaseWordAsString()}_${this.person}`;
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

  getBaseWord() {
    return this.verb;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.VERB;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().infinitive;
  }

  getRetryPrompt = () => `${this.person} ${this.getCorrectAnswer()}`;

  equal = (exercise: VerbExercise) =>
    exercise.exerciseType === 'VerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verb.english === exercise.verb.english &&
    this.verbTime === exercise.verbTime &&
    this.person === exercise.person;
}
