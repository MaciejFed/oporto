import { ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Other } from '../../repository/exercisesRepository';
import { getRandomOther } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translationExercise';

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

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.other.english}`;
    }
    return `Portuguese: ${this.other.portuguese}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.other.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.other.portuguese : this.other.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getMinimumAnswers(): number {
    if (this.translationType === 'toEnglish') return 2;
    else if (this.translationType === 'toPortugueseFromHearing') return 3;
    return 10;
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.other.english);

  equal = (other: OtherTranslationExercise) =>
    other.exerciseType === 'OtherTranslation' &&
    this.other.portuguese === other.other.portuguese &&
    this.translationType === other.translationType;
}
