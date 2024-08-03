import { BaseWordType, ExerciseType } from '../../exercise';
import { Comparable } from '../../../common/common';
import { getRandomGermanOther, getRandomOther } from '../../../service/translation';
import { TranslationExercise, TranslationType } from './../translation-exercise';
import { GermanOther } from '../../../repository/german-exercises-repository';

export class GermanOtherTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  other: GermanOther;

  constructor() {
    super();
    this.exerciseType = 'GermanOtherTranslation';
    this.other = getRandomGermanOther();
  }

  static new(other: GermanOther, translationType: TranslationType): GermanOtherTranslationExercise {
    const otherTranslationExercise = new GermanOtherTranslationExercise();
    otherTranslationExercise.other = other;
    otherTranslationExercise.translationType = translationType;

    return otherTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof GermanOtherTranslationExercise)) return false;
    return this.other.german === translationExercise.other.german;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'German: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.other.english}`;
    }
    return `German: ${this.other.german}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.other.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.other.german : this.other.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getMinAnswerCount(): number {
    if (this.translationType === 'toEnglish') return 2;
    else if (this.translationType === 'toPortugueseFromHearing') return 3;
    return 10;
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.other.german);

  getBaseWord() {
    return this.other;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.OTHER;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().german;
  }

  equal = (other: GermanOtherTranslationExercise) =>
    other.exerciseType === 'GermanOtherTranslation' &&
    this.other.german === other.other.german &&
    this.other.english === other.other.english &&
    this.translationType === other.translationType;
}
