import { BaseWordType, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Other } from '../../repository/exercises-repository';
import { getRandomOther } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class OtherTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  other: Other;

  constructor() {
    super();
    this.exerciseType = 'OtherTranslation';
    this.other = getRandomOther();
  }

  static new(other: Other, translationType: TranslationType): OtherTranslationExercise {
    const otherTranslationExercise = new OtherTranslationExercise();
    otherTranslationExercise.other = other;
    otherTranslationExercise.translationType = translationType;

    return otherTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof OtherTranslationExercise)) return false;
    return this.other.portuguese === translationExercise.other.portuguese;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.other.english}`;
    }
    return `Portuguese: ${this.other.portuguese}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.other.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.other.portuguese : this.other.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.other.portuguese);

  getBaseWord() {
    return this.other;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.OTHER;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().portuguese;
  }

  equal = (other: OtherTranslationExercise) =>
    other.exerciseType === 'OtherTranslation' &&
    this.other.portuguese === other.other.portuguese &&
    this.other.english === other.other.english &&
    this.translationType === other.translationType;
}
