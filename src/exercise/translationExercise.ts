import { Comperable } from '../common/common';
import { Translation } from '../repository/schema';
import { getRandomTranslation } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

export class TranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  translation: Translation;

  constructor() {
    this.exercsiseType = 'Translation';
    this.translation = getRandomTranslation();
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExerciseBody(): string {
    return 'Portuguese: ';
  }

  getExerciseDescription = () => `English: ${this.translation.english}`;

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () =>
    `${this.translation.portuguese.gender === 'male' ? 'o' : 'a'} ${this.translation.portuguese.word}`;

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  equal = (other: TranslationExercise) => {
    return (
      other.exercsiseType === 'Translation' && this.translation.portuguese.word === other.translation.portuguese.word
    );
  };
}
