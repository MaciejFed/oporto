import { Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Sentence } from '../../repository/exercisesRepository';
import { getRandomSentence } from '../../service/translation';
import { TranslationExercise } from './translationExercise';
import { NounTranslationExercise } from './nounTranslationExercise';

export class SentenceTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  sentence: Sentence;

  constructor() {
    super();
    this.exerciseType = 'SentenceTranslation';
    this.sentence = getRandomSentence();
    this.correctAnswer = this.getCorrectAnswer();
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof SentenceTranslationExercise)) return false;
    return this.sentence.polish === translationExercise.sentence.polish;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPolish() ? 'Polish: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPolishFromHearing()) return 'Listen...';
    if (this.isTranslationToPolish()) {
      return `English: ${this.sentence.english}`;
    }
    return `Polish: ${this.sentence.polish}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPolishFromHearing() ? this.sentence.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPolish() ? this.sentence.polish : this.sentence.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase().replace('?', '') === answer.toLowerCase().replace('?', '');
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPolish() ? this.correctAnswer : this.sentence.polish);

  equal = (other: SentenceTranslationExercise) =>
    other.exerciseType === 'SentenceTranslation' &&
    this.sentence.polish === other.sentence.polish &&
    this.translationType === other.translationType;
}
