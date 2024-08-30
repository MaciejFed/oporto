import { BaseWordType, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Adjective } from '../../repository/exercises-repository';
import { getRandomAdjective } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class AdjectiveTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  adjective: Adjective;
  gender: 'masculine' | 'feminine';
  number: 'singular' | 'plural';

  constructor() {
    super();
    this.exerciseType = 'AdjectiveTranslation';
    this.adjective = getRandomAdjective();
    this.gender = Math.random() > 0.5 ? 'masculine' : 'feminine';
    this.number = Math.random() > 0.5 ? 'singular' : 'plural';
  }

  static new(
    adjective: Adjective,
    translationType: TranslationType,
    gender: 'masculine' | 'feminine',
    number: 'singular' | 'plural'
  ): AdjectiveTranslationExercise {
    const adjectiveTranslationExercise = new AdjectiveTranslationExercise();
    adjectiveTranslationExercise.adjective = adjective;
    adjectiveTranslationExercise.translationType = translationType;
    adjectiveTranslationExercise.gender = gender;
    adjectiveTranslationExercise.number = number;

    return adjectiveTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof AdjectiveTranslationExercise)) return false;
    return this.adjective.masculine.singular === translationExercise.adjective.masculine.singular;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getBodySuffix = () => ` [${this.gender}, ${this.number}]`;

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.adjective.english}`;
    }
    return `Portuguese: ${this.adjective.masculine.singular}`;
  };

  getTranslation = () => this.adjective.english;

  getCorrectAnswer = () =>
    this.isTranslationToPortuguese() ? this.adjective[this.gender][this.number] : this.adjective.english;

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () =>
    this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.adjective[this.gender][this.number];

  getBaseWord() {
    return this.adjective;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.ADJECTIVE;
  }

  getBaseWordAsString(): string {
    return this.getBaseWord().masculine.singular;
  }

  equal = (other: AdjectiveTranslationExercise) =>
    other.exerciseType === 'AdjectiveTranslation' &&
    this.gender === other.gender &&
    this.number === other.number &&
    this.adjective.masculine.singular === other.adjective.masculine.singular &&
    this.adjective.masculine.singular === other.adjective.masculine.singular &&
    this.adjective.feminine.plural === other.adjective.feminine.plural &&
    this.adjective.masculine.plural === other.adjective.masculine.plural &&
    this.translationType === other.translationType;
}
