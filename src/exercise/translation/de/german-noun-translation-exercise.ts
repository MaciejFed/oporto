import { Comparable } from '../../../common/common';
import { GermanNoun } from '../../../repository/german-exercises-repository';
import { getRandomGermanNoun, getRandomNoun } from '../../../service/translation';
import { BaseWordType, ExerciseType } from '../../exercise';
import { TranslationExercise, TranslationType } from '../translation-exercise';

export class GermanNounTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  noun: GermanNoun;
  number?: 'singular' | 'plural';

  constructor() {
    super();
    this.exerciseType = 'GermanNounTranslation';
    this.noun = getRandomGermanNoun();
    this.number = 'singular';
  }

  static new(
    noun: GermanNoun,
    translationType: TranslationType,
    number?: 'singular' | 'plural'
  ): GermanNounTranslationExercise {
    const nounExercise = new GermanNounTranslationExercise();
    nounExercise.noun = noun;
    nounExercise.translationType = translationType;
    nounExercise.number = number;

    return nounExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof GermanNounTranslationExercise)) return false;
    return this.noun.german.singular === translationExercise.noun.german.singular;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? `German [${this.getNumber()}]: ` : 'English: ';
  }

  getBodySuffix = () => '';

  getBaseWord() {
    return this.noun;
  }

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.english()}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.english() : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.getWordWithGender() : this.english());

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  english = () => `${this.noun.english}${this.number === 'plural' ? 's' : ''}`;

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.getWordWithGender());

  getBaseWordAsString(): string | undefined {
    return this.getWordWithGender(false);
  }

  getBaseWordType(): BaseWordType | undefined {
    return BaseWordType.NOUN;
  }

  getNumber(): 'singular' | 'plural' {
    return this.number || 'singular';
  }

  equal = (other: GermanNounTranslationExercise) =>
    other.exerciseType === 'GermanNounTranslation' &&
    this.noun.german.singular === other.noun.german.singular &&
    this.noun.german.plural === other.noun.german.plural &&
    this.noun.german.gender === other.noun.german.gender &&
    this.noun.english === other.noun.english &&
    this.getNumber() === other.getNumber() &&
    this.translationType === other.translationType;

  getWordWithGender(withPlural = true) {
    if (withPlural && this.getNumber() === 'plural') return `Die ${this.noun.german.plural}`;
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
