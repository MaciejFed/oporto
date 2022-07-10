import { Comperable } from '../common/common';
import { Translation } from '../repository/exercisesRepository';
import { getRandomTranslation } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

export class TranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  translation: Translation;
  translationType: 'toEnglish' | 'toPortuguese';
  exerciseLevel: number;

  constructor() {
    this.exercsiseType = 'Translation';
    this.translation = getRandomTranslation();
    this.correctAnswer = this.getCorrectAnswer();
    this.translationType = Math.random() < 0.25 ? 'toEnglish' : 'toPortuguese';
    this.exerciseLevel = this.translation.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.translationType === 'toEnglish' ? 'English: ' : 'Portuguese: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.translationType === 'toPortuguese') {
      return `English: ${this.translation.english}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.translationType === 'toEnglish' ? this.translation.english : this.getWordWithGender());

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  equal = (other: TranslationExercise) =>
    other.exercsiseType === 'Translation' && this.translation.portuguese.word === other.translation.portuguese.word;

  getWordWithGender() {
    return `${this.translation.portuguese.gender === 'male' ? 'o' : 'a'} ${this.translation.portuguese.word}`;
  }
}
