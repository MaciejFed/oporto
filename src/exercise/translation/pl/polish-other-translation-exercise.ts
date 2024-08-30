import { BaseWordType, ExerciseType } from '../../exercise';
import { Comparable } from '../../../common/common';
import { getRandomPolishOther } from '../../../service/translation';
import { TranslationExercise, TranslationType } from './../translation-exercise';
import { PolishOther } from '../../../repository/polish-exercises-repository';

export class PolishOtherTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  other: PolishOther;

  constructor() {
    super();
    this.exerciseType = 'PolishOtherTranslation';
    this.other = getRandomPolishOther();
  }

  static new(other: PolishOther, translationType: TranslationType): PolishOtherTranslationExercise {
    const otherTranslationExercise = new PolishOtherTranslationExercise();
    otherTranslationExercise.other = other;
    otherTranslationExercise.translationType = translationType;

    return otherTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof PolishOtherTranslationExercise)) return false;
    return this.other.polish === translationExercise.other.polish;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Polish: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.other.english}`;
    }
    return `German: ${this.other.polish}`;
  };

  getTranslation = () => this.other.english;

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.other.polish : this.other.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.other.polish);

  getBaseWord() {
    return this.other;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.OTHER;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().polish;
  }

  equal = (other: PolishOtherTranslationExercise) =>
    other.exerciseType === 'PolishOtherTranslation' &&
    this.other.polish === other.other.polish &&
    this.other.english === other.other.english &&
    this.translationType === other.translationType;
}
