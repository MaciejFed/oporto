import { BaseWordType, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Adjective, OtherWithGender } from '../../repository/exercises-repository';
import { getRandomAdjective, getRandomOtherWithGender } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class OtherGenderTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  other: OtherWithGender;
  base: boolean;
  gender: 'masculine' | 'feminine';
  number: 'singular' | 'plural';

  constructor() {
    super();
    this.exerciseType = 'OtherWithGenderTranslation';
    this.other = getRandomOtherWithGender();
    this.gender = Math.random() > 0.5 ? 'masculine' : 'feminine';
    this.number = Math.random() > 0.5 ? 'singular' : 'plural';
    this.base = false;
  }

  static new(
    other: OtherWithGender,
    translationType: TranslationType,
    gender: 'masculine' | 'feminine',
    number: 'singular' | 'plural',
    base?: boolean
  ): OtherGenderTranslationExercise {
    const otherGenderTranslationExercise = new OtherGenderTranslationExercise();
    otherGenderTranslationExercise.other = other;
    otherGenderTranslationExercise.translationType = translationType;
    otherGenderTranslationExercise.gender = gender;
    otherGenderTranslationExercise.number = number;
    otherGenderTranslationExercise.base = base || false;

    return otherGenderTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof OtherGenderTranslationExercise)) return false;
    return this.other.portuguese.singular.masculine === translationExercise.other.portuguese.singular.masculine;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? `Portuguese: ${this.getBodySuffix()}` : 'English: ';
  }

  getBodySuffix = () => ` [${this.gender}, ${this.number}] `;

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.other.english}`;
    }
    return `Portuguese: ${this.other.portuguese.singular.masculine}`;
  };

  getTranslation = () => this.other.english;

  getCorrectAnswer = () =>
    this.isTranslationToPortuguese() ? this.other.portuguese[this.number][this.gender] : this.other.english;

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () =>
    this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.other.portuguese[this.number][this.gender];

  getBaseWord() {
    return this.other;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.OTHER;
  }

  getBaseWordAsString(): string {
    return this.getBaseWord().portuguese.singular.masculine;
  }

  equal = (other: OtherGenderTranslationExercise) =>
    other.exerciseType === 'OtherWithGenderTranslation' &&
    this.gender === other.gender &&
    this.number === other.number &&
    this.other.portuguese.singular.masculine === other.other.portuguese.singular.masculine &&
    this.other.portuguese.singular.feminine === other.other.portuguese.singular.feminine &&
    this.other.portuguese.plural.masculine === other.other.portuguese.plural.masculine &&
    this.other.portuguese.plural.feminine === other.other.portuguese.plural.feminine &&
    this.translationType === other.translationType;
}
