import { Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';

type TranslationType = 'toEnglish' | 'toPortuguese' | 'toPortugueseFromHearing';

export abstract class TranslationExercise implements Exercise {
  translationType: TranslationType;

  protected constructor() {
    const probability = Math.random();
    if (probability < 0.33) {
      this.translationType = 'toEnglish';
    } else if (probability > 0.33 && probability < 0.66) {
      this.translationType = 'toPortuguese';
    } else {
      this.translationType = 'toPortugueseFromHearing';
    }
  }

  public abstract isTranslationSubjectEqual(translationSubject: Exercise): boolean;

  isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese';
  }

  isTranslationToPortugueseFromHearing(): boolean {
    return this.translationType === 'toPortugueseFromHearing';
  }

  abstract correctAnswer: string;
  abstract exerciseType: ExerciseType;
  abstract checkAnswerCorrect(answer: string): boolean;
  abstract equal(other: Comparable): boolean;
  abstract getCorrectAnswer(): string;
  abstract getExerciseBodyPrefix(): string;
  abstract getExerciseBodySuffix(): string;
  abstract getExerciseDescription(): string;
  abstract getExerciseExplanation(): string | undefined;
  abstract getRepeatAnswerPhrase(): string;
}
