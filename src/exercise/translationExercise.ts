import { Comperable } from '../common/common';
import { Noun, Sentence } from '../repository/exercisesRepository';
import { getRandomNoun, getRandomSentence } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

export class NounTranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  noun: Noun;
  translationType: 'toEnglish' | 'toPortuguese';
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'NounTranslation';
    this.noun = getRandomNoun();
    this.correctAnswer = this.getCorrectAnswer();
    this.translationType = Math.random() < 0.25 ? 'toEnglish' : 'toPortuguese';
    this.exerciseLevel = this.noun.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.translationType === 'toEnglish' ? 'English: ' : 'Portuguese: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.translationType === 'toPortuguese') {
      return `English: ${this.noun.english}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.translationType === 'toEnglish' ? this.noun.english : this.getWordWithGender());

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.translationType === 'toEnglish' ? '' : this.correctAnswer);

  equal = (other: NounTranslationExercise) =>
    other.exercsiseType === 'NounTranslation' &&
    this.noun.portuguese.word === other.noun.portuguese.word &&
    this.translationType === other.translationType;

  getWordWithGender() {
    return `${this.noun.portuguese.gender === 'male' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}

export class SentenceTranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  sentence: Sentence;
  translationType: 'toEnglish' | 'toPortuguese';
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'SentenceTranslation';
    this.sentence = getRandomSentence();
    this.correctAnswer = this.getCorrectAnswer();
    this.translationType = Math.random() < 0.1 ? 'toEnglish' : 'toPortuguese';
    this.exerciseLevel = this.sentence.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.translationType === 'toEnglish' ? 'English: ' : 'Portuguese: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.translationType === 'toPortuguese') {
      return `English: ${this.sentence.english}`;
    }
    return `Portuguese: ${this.sentence.portuguese}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.translationType === 'toEnglish' ? this.sentence.english : this.sentence.portuguese);

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.translationType === 'toEnglish' ? '' : this.correctAnswer);

  equal = (other: SentenceTranslationExercise) =>
    other.exercsiseType === 'SentenceTranslation' &&
    this.sentence.portuguese === other.sentence.portuguese &&
    this.translationType === other.translationType;
}
