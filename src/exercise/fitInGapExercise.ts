import { Comperable } from '../common/common';
import { FitIn } from '../repository/schema';
import { getRandomFitInExercise } from '../service/fitin';
import { Exercise, ExerciseType } from './exercise';

export class FitInGapExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  fitIn: FitIn;

  constructor() {
    this.exercsiseType = 'FitInGap';
    this.fitIn = getRandomFitInExercise();
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExercsiseExplanation = () => this.fitIn.explanation;

  getExerciseBodyPrefix = () => `${this.fitIn.prefix.length === 0 ? this.fitIn.prefix : this.fitIn.prefix.concat(' ')}`;

  getExerciseBodySuffix = () => ' '.concat(this.fitIn.suffix);

  getExerciseDescription = () => 'Complete the sentece.';

  getCorrectAnswer = () => this.fitIn.answer;

  checkAnsweCorrect(answer: string): boolean {
    return this.fitIn.answer.toLowerCase() === answer.toLowerCase();
  }

  equal = (exercise: FitInGapExercise) =>
    exercise.exercsiseType === 'FitInGap' && JSON.stringify(this.fitIn) === JSON.stringify(exercise.fitIn);
}
