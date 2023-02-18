import { Comparable } from '../common/common';
import { Person, Verb } from '../repository/exercises-repository';
import { getCorrectVerbConjugation, getRandomPerson, getRandomVerb } from '../service/verb';
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

  getExerciseTranslation = () => undefined;

  getExerciseBodyPrefix = () => `[${vertTimePrintVersion(this.verbTime)}] ${this.person}: `;

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectVerbConjugation(this.verb, this.person, this.verbTime);

  checkAnswerCorrect(answer: string): boolean {
    const correctConjugation = this.getCorrectAnswer();
    return correctConjugation.toLowerCase() === answer.toLowerCase();
  }

  getMaxWantedProgress(): RatioRange | '100+' {
    return '80-100';
  }

  getMinimumAnswers(): number {
    return 2;
  }

  getRepeatAnswerPhrase = () => `${this.person} ${this.getCorrectAnswer()}`;

  equal = (exercise: VerbExercise) =>
    exercise.exerciseType === 'VerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verbTime === exercise.verbTime &&
    this.person === exercise.person;
}
