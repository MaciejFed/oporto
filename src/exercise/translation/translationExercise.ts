import { Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';

type TranslationType = 'toEnglish' | 'toPolish' | 'toPolishFromHearing';

export abstract class TranslationExercise implements Exercise {
  translationType: TranslationType;

  protected constructor() {
    const probability = Math.random();
    if (probability < 0.33) {
      this.translationType = 'toEnglish';
    } else if (probability > 0.33 && probability < 0.66) {
      this.translationType = 'toPolish';
    } else {
      this.translationType = 'toPolishFromHearing';
    }
  }

  public abstract isTranslationSubjectEqual(translationSubject: Exercise): boolean;

  isTranslationToPolish(): boolean {
    return this.translationType === 'toPolish' || this.translationType === 'toPolishFromHearing';
  }

  isTranslationToPolishFromHearing(): boolean {
    return this.translationType === 'toPolishFromHearing';
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
