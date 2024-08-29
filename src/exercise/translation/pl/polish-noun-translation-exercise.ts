import { Comparable } from '../../../common/common';
import { getRandomPolishNoun } from '../../../service/translation';
import { BaseWordType, ExerciseType } from '../../exercise';
import { TranslationExercise, TranslationType } from '../translation-exercise';
import { PolishNoun } from '../../../repository/polish-exercises-repository';

export class PolishNounTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  noun: PolishNoun;

  constructor() {
    super();
    this.exerciseType = 'PolishNounTranslation';
    this.noun = getRandomPolishNoun();
  }

  static new(noun: PolishNoun, translationType: TranslationType): PolishNounTranslationExercise {
    const nounExercise = new PolishNounTranslationExercise();
    nounExercise.noun = noun;
    nounExercise.translationType = translationType;

    return nounExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof PolishNounTranslationExercise)) return false;
    return this.noun.polish === translationExercise.noun.polish;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Polish: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getBaseWord() {
    return this.noun;
  }

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.noun.english}`;
    }
    return `Polish: ${this.noun.polish}`;
  };

  getTranslation = () => this.noun.polish;

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.noun.polish : this.noun.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.noun.polish);

  getBaseWordAsString(): string | undefined {
    return this.noun.polish;
  }

  getBaseWordType(): BaseWordType | undefined {
    return BaseWordType.NOUN;
  }

  equal = (other: PolishNounTranslationExercise) =>
    other.exerciseType === 'PolishNounTranslation' &&
    this.noun.english === other.noun.english &&
    this.translationType === other.translationType;
}
