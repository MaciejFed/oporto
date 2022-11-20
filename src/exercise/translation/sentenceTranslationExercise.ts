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
    return this.sentence.portuguese === translationExercise.sentence.portuguese;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.sentence.english}`;
    }
    return `Portuguese: ${this.sentence.portuguese}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.sentence.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.sentence.portuguese : this.sentence.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase().replace('?', '') === answer.toLowerCase().replace('?', '');
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.sentence.portuguese);

  equal = (other: SentenceTranslationExercise) =>
    other.exerciseType === 'SentenceTranslation' &&
    this.sentence.portuguese === other.sentence.portuguese &&
    this.translationType === other.translationType;
}
