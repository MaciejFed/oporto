import { BaseExercise, BaseWord, BaseWordType, Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';

export type TranslationType = 'toEnglish' | 'toPortuguese' | 'toPortugueseFromHearing' | 'introduction';

export abstract class TranslationExercise extends BaseExercise implements Exercise {
  translationType: TranslationType;

  protected constructor() {
    super();
    const probability = Math.random();
    if (probability < 0.33) {
      this.translationType = 'toEnglish';
    } else if (probability > 0.33 && probability < 0.66) {
      this.translationType = 'toPortuguese';
    } else {
      this.translationType = 'toPortugueseFromHearing';
    }
  }

  toString(): string {
    return `${this.exerciseType}_${this.getBaseWordAsString()}_${this.translationType}`;
  }

  public abstract isTranslationSubjectEqual(translationSubject: Exercise): boolean;

  public isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese' || this.translationType === 'toPortugueseFromHearing';
  }

  public isTranslationToPortugueseFromHearing(): boolean {
    return this.translationType === 'toPortugueseFromHearing';
  }

  supportsMovieExampleAnswer(): boolean {
    return this.isTranslationToPortuguese();
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
