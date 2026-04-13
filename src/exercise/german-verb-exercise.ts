import { Comparable } from '../common/common';

import { BaseExercise, BaseWordType, Exercise, ExerciseType } from './exercise';
import { GermanPerson, GermanVerb } from '../repository/german-exercises-repository';
import { getRandomGermanVerb } from '../service/translation';
import { getCorrectGermanVerbConjugation, getRandomGermanPerson } from '../service/verb/verb';

export type GermanVerbTime = 'presentSimple' | 'pastPerfect' | 'präteritum';

const verbTimePrintVersion = (verbTime: GermanVerbTime) => {
  switch (verbTime) {
    case 'presentSimple':
      return 'Present Simple';
    case 'pastPerfect':
      return 'Past Perfect';
    case 'präteritum':
      return 'Präteritum';
    default:
      return '';
  }
};

export class GermanVerbExercise extends BaseExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verbTime: GermanVerbTime;
  verb: GermanVerb;
  person: GermanPerson;

  constructor() {
    super();
    this.exerciseType = 'GermanVerbExercise';
    this.verb = getRandomGermanVerb();
    this.person = getRandomGermanPerson();
    this.verbTime = 'presentSimple';
  }

  static new(verb: GermanVerb, person: GermanPerson, verbTime: GermanVerbTime): GermanVerbExercise {
    const verbExercise = new GermanVerbExercise();
    verbExercise.verb = verb;
    verbExercise.person = person;
    verbExercise.verbTime = verbTime;

    return verbExercise;
  }

  getTranslation = () => this.verb.english;

  getBodyPrefix = () => `[${verbTimePrintVersion(this.verbTime)}] ${this.person}: `;

  getBodySuffix = () => '';

  getDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectGermanVerbConjugation(this.verb, this.person, this.verbTime);

  isAnswerCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getBaseWord() {
    return this.verb;
  }

  getRetryPrompt = () => `${this.person} ${this.getCorrectAnswer()}`;

  getBaseWordType(): BaseWordType | undefined {
    return BaseWordType.VERB;
  }

  getBaseWordAsString(): string | undefined {
    return this.verb.infinitive;
  }

  equal = (exercise: GermanVerbExercise) =>
    exercise.exerciseType === 'GermanVerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verb.english === exercise.verb.english &&
    this.verbTime === exercise.verbTime &&
    this.person === exercise.person;
}
