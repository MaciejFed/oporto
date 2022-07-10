import { Comperable } from '../common/common';
import { Noun } from '../repository/exercisesRepository';
import { getRandomNoun } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

export class NounTranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  noun: Noun;
  translationType: 'toEnglish' | 'toPortuguese';
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'Translation';
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

  equal = (other: NounTranslationExercise) =>
    other.exercsiseType === 'Translation' && this.noun.portuguese.word === other.noun.portuguese.word;

  getWordWithGender() {
    return `${this.noun.portuguese.gender === 'male' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}
