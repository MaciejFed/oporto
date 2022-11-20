import { Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Noun } from '../../repository/exercisesRepository';
import { getRandomNoun } from '../../service/translation';
import { TranslationExercise } from './translationExercise';

export class NounTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  noun: Noun;

  constructor() {
    super();
    this.exerciseType = 'NounTranslation';
    this.noun = getRandomNoun();
    this.correctAnswer = this.getCorrectAnswer();
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof NounTranslationExercise)) return false;
    return this.noun.portuguese.word === translationExercise.noun.portuguese.word;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.noun.english}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.noun.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.getWordWithGender() : this.noun.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.getWordWithGender());

  equal = (other: NounTranslationExercise) =>
    other.exerciseType === 'NounTranslation' &&
    this.noun.portuguese.word === other.noun.portuguese.word &&
    this.translationType === other.translationType;

  getWordWithGender() {
    if (this.noun.portuguese.gender === 'none') return this.noun.portuguese.word;
    return `${this.noun.portuguese.gender === 'masculine' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}
