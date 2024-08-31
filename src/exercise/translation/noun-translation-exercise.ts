import { BaseWordType, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Noun } from '../../repository/exercises-repository';
import { getRandomNoun } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class NounTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  noun: Noun;

  constructor() {
    super();
    this.exerciseType = 'NounTranslation';
    this.noun = getRandomNoun();
  }

  static new(noun: Noun, translationType: TranslationType): NounTranslationExercise {
    const nounExercise = new NounTranslationExercise();
    nounExercise.noun = noun;
    nounExercise.translationType = translationType;

    return nounExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof NounTranslationExercise)) return false;
    return this.noun.portuguese.word === translationExercise.noun.portuguese.word;
  }
  // Ranodm verb order exercises

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getBaseWord() {
    return this.noun;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.NOUN;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().portuguese.word;
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

  equal = (other: NounTranslationExercise) =>
    other.exerciseType === 'NounTranslation' &&
    this.noun.portuguese.word === other.noun.portuguese.word &&
    this.noun.portuguese.plural === other.noun.portuguese.plural &&
    this.noun.portuguese.gender === other.noun.portuguese.gender &&
    this.noun.english === other.noun.english &&
    this.translationType === other.translationType;

  getWordWithGender() {
    if (this.noun.portuguese.gender === 'none') return this.noun.portuguese.word;
    return `${this.noun.portuguese.gender === 'masculine' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}
