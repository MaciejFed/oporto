import { Comparable } from '../common/common';

import { BaseExercise, BaseWordType, Exercise, ExerciseType } from './exercise';
import { getRandomPolishVerb } from '../service/translation';
import { getCorrectPolishVerbConjugation, getRandomPolishPerson } from '../service/verb/verb';
import { PolishPerson, PolishVerb } from '../repository/polish-exercises-repository';

export class PolishVerbExercise extends BaseExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  verb: PolishVerb;
  person: PolishPerson;

  constructor() {
    super();
    this.exerciseType = 'PolishVerbExercise';
    this.verb = getRandomPolishVerb();
    this.person = getRandomPolishPerson();
  }

  static new(verb: PolishVerb, person: PolishPerson): PolishVerbExercise {
    const verbExercise = new PolishVerbExercise();
    verbExercise.verb = verb;
    verbExercise.person = person;

    return verbExercise;
  }

  getTranslation = () => this.verb.english;

  getBodyPrefix = () => `${this.person}: `;

  getBodySuffix = () => '';

  getDescription = () => `Infinitive: ${this.verb.english}`;

  getCorrectAnswer = () => getCorrectPolishVerbConjugation(this.verb, this.person);

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

  equal = (exercise: PolishVerbExercise) =>
    exercise.exerciseType === 'PolishVerbExercise' &&
    this.verb.infinitive === exercise.verb.infinitive &&
    this.verb.english === exercise.verb.english &&
    this.person === exercise.person;
}
