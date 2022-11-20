import { Comparable } from '../common/common';
import { FitIn } from '../repository/exercisesRepository';
import { getRandomFitInExercise } from '../service/fitin';
import { Exercise, ExerciseType } from './exercise';

export class FitInGapExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  fitIn: FitIn;

  constructor() {
    this.exerciseType = 'FitInGap';
    this.fitIn = getRandomFitInExercise();
    this.correctAnswer = this.getCorrectAnswer();
  }

  getExerciseExplanation = () => this.fitIn.explanation;

  getExerciseBodyPrefix = () => `${this.fitIn.prefix.length === 0 ? this.fitIn.prefix : this.fitIn.prefix.concat(' ')}`;

  getExerciseBodySuffix = () => ' '.concat(this.fitIn.suffix);

  getExerciseDescription = () => 'Complete the sentence.';

  getCorrectAnswer = () => this.fitIn.answer;

  checkAnswerCorrect(answer: string): boolean {
    return this.fitIn.answer.toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () =>
    `${this.getExerciseBodyPrefix()} ${this.correctAnswer} ${this.getExerciseBodySuffix()}}`;

  equal = (exercise: FitInGapExercise) =>
    exercise.exerciseType === 'FitInGap' && JSON.stringify(this.fitIn) === JSON.stringify(exercise.fitIn);
}
