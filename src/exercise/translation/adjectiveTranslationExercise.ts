import { ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Adjective } from '../../repository/exercisesRepository';
import { getRandomAdjective } from '../../service/translation';
import { TranslationExercise } from './translationExercise';

export class AdjectiveTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  adjective: Adjective;
  gender: 'masculine' | 'feminine';
  number: 'singular' | 'plural';

  constructor() {
    super();
    this.exerciseType = 'AdjectiveTranslation';
    this.adjective = getRandomAdjective();
    this.gender = Math.random() > 0.5 ? 'masculine' : 'feminine';
    this.number = 'singular';
    this.correctAnswer = this.getCorrectAnswer();
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof AdjectiveTranslationExercise)) return false;
    return this.adjective.masculine.singular === translationExercise.adjective.masculine.singular;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPolish() ? 'Polish: ' : 'English: ';
  }

  getExerciseBodySuffix = () => ` [${this.gender}, ${this.number}]`;

  getExerciseDescription = () => {
    if (this.isTranslationToPolishFromHearing()) return 'Listen...';
    if (this.isTranslationToPolish()) {
      return `English: ${this.adjective.english}`;
    }
    return `Polish: ${this.adjective.masculine.singular}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPolishFromHearing() ? this.adjective.english : undefined);

  getCorrectAnswer = () =>
    this.isTranslationToPolish() ? this.adjective[this.gender][this.number] : this.adjective.english;

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () =>
    this.isTranslationToPolish() ? this.correctAnswer : this.adjective[this.gender][this.number];

  equal = (other: AdjectiveTranslationExercise) =>
    other.exerciseType === 'AdjectiveTranslation' &&
    this.adjective.masculine.singular === other.adjective.masculine.singular &&
    this.translationType === other.translationType;
}
