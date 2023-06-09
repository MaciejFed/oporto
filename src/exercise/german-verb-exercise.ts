import { Comparable } from '../common/common';
import {
  getCorrectGermanVerbConjugation,
  getRandomGermanPerson,
  getRandomPerson,
  getRandomVerb
} from '../service/verb';
import { Exercise, ExerciseType } from './exercise';
import { RatioRange } from '../service/progress';
import { GermanPerson, GermanVerb } from '../repository/german-exercises-repository';
import { getRandomGermanVerb } from '../service/translation';

export type VerbTime = 'presentSimple' | 'pastPerfect';

const verbTimePrintVersion = (verbTime: VerbTime) => {
  if (verbTime === 'presentSimple') return 'Present Simple';
  return 'Past Perfect';
};

export class GermanVerbExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verbTime: VerbTime;
  verb: GermanVerb;
  person: GermanPerson;

  constructor() {
    this.exerciseType = 'GermanVerbExercise';
    this.verb = getRandomGermanVerb();
    this.person = getRandomGermanPerson();
    this.verbTime = 'presentSimple';
  }

  static new(verb: GermanVerb, person: GermanPerson, verbTime: VerbTime): GermanVerbExercise {
    const verbExercise = new GermanVerbExercise();
    verbExercise.verb = verb;
    verbExercise.person = person;
    verbExercise.verbTime = verbTime;

    return verbExercise;
  }

  getTranslation = () => undefined;

  getBodyPrefix = () => `[${verbTimePrintVersion(this.verbTime)}] ${this.person}: `;

  getBodySuffix = () => '';

  getDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectGermanVerbConjugation(this.verb, this.person, this.verbTime);

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

  equal = (exercise: GermanVerbExercise) =>
    exercise.exerciseType === 'GermanVerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verb.english === exercise.verb.english &&
    this.verbTime === exercise.verbTime &&
    this.person === exercise.person;
}
