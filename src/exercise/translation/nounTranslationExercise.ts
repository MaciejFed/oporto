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
    return this.noun.polish.word === translationExercise.noun.polish.word;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPolish() ? 'Polish: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPolishFromHearing()) return 'Listen...';
    if (this.isTranslationToPolish()) {
      return `English: ${this.noun.english}`;
    }
    return `Polish: ${this.noun.polish.word}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPolishFromHearing() ? this.noun.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPolish() ? this.noun.polish.word : this.noun.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPolish() ? this.correctAnswer : this.noun.polish.word);

  equal = (other: NounTranslationExercise) =>
    other.exerciseType === 'NounTranslation' &&
    this.noun.polish.word === other.noun.polish.word &&
    this.translationType === other.translationType;
}
