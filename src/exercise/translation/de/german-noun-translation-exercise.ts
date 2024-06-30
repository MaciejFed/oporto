import { Comparable } from '../../../common/common';
import { GermanNoun } from '../../../repository/german-exercises-repository';
import { getRandomGermanNoun, getRandomNoun } from '../../../service/translation';
import { BaseWordType, ExerciseType } from '../../exercise';
import { TranslationExercise, TranslationType } from '../translation-exercise';

export class GermanNounTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  noun: GermanNoun;

  constructor() {
    super();
    this.exerciseType = 'GermanNounTranslation';
    this.noun = getRandomGermanNoun();
  }

  static new(noun: GermanNoun, translationType: TranslationType): GermanNounTranslationExercise {
    const nounExercise = new GermanNounTranslationExercise();
    nounExercise.noun = noun;
    nounExercise.translationType = translationType;

    return nounExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof GermanNounTranslationExercise)) return false;
    return this.noun.german.singular === translationExercise.noun.german.singular;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'German: ' : 'English: ';
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
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.noun.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.getWordWithGender() : this.noun.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.getWordWithGender());

  getBaseWordAsString(): string | undefined {
    return this.noun.german.singular;
  }

  getBaseWordType(): BaseWordType | undefined {
    return BaseWordType.NOUN;
  }

  equal = (other: GermanNounTranslationExercise) =>
    other.exerciseType === 'GermanNounTranslation' &&
    this.noun.german.singular === other.noun.german.singular &&
    this.noun.german.plural === other.noun.german.plural &&
    this.noun.german.gender === other.noun.german.gender &&
    this.noun.english === other.noun.english &&
    this.translationType === other.translationType;

  getWordWithGender() {
    switch (this.noun.german.gender) {
      case 'masculine':
        return `Der ${this.noun.german.singular}`;
      case 'feminine':
        return `Die ${this.noun.german.singular}`;
      case 'none':
        return `Das ${this.noun.german.singular}`;
      default:
        throw new Error(`Unknown gender ${this.noun.german.gender}`);
    }
  }
}
