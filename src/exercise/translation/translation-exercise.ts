import { BaseWord, BaseWordType, Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { RatioRange } from '../../service/progress/progress';

export type TranslationType = 'toEnglish' | 'toPortuguese' | 'toPortugueseFromHearing' | 'introduction';

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

  public isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese' || this.translationType === 'toPortugueseFromHearing';
  }

  public isTranslationToPortugueseFromHearing(): boolean {
    return this.translationType === 'toPortugueseFromHearing';
  }

  public getMaxProgressRange(): RatioRange {
    return '80-100';
  }

  getMinAnswerCount(): number {
    if (this.translationType === 'toEnglish') return 2;
    else if (this.translationType === 'toPortugueseFromHearing') return 3;
    return 5;
  }

  abstract exerciseType: ExerciseType;
  abstract isAnswerCorrect(answer: string): boolean;
  abstract equal(other: Comparable): boolean;
  abstract getCorrectAnswer(): string;
  abstract getBodyPrefix(): string;
  abstract getBodySuffix(): string;
  abstract getDescription(): string;
  abstract getTranslation(): string | undefined;
  abstract getRetryPrompt(): string;
  abstract getBaseWord(): BaseWord | undefined;
  abstract getBaseWordType(): BaseWordType | undefined;
  abstract getBaseWordAsString(): string | undefined;
}
