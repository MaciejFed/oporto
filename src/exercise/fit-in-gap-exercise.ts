import { Comparable } from '../common/common';
import { FitIn } from '../repository/exercises-repository';
import { getRandomFitInExercise } from '../service/fit-in';
import { BaseWordType, Exercise, ExerciseType } from './exercise';

export class FitInGapExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  fitIn: FitIn;

  constructor() {
    this.exerciseType = 'FitInGap';
    this.fitIn = getRandomFitInExercise();
  }

  getTranslation = () => this.fitIn.explanation;

  getBodyPrefix = () => `${this.fitIn.prefix.length === 0 ? this.fitIn.prefix : this.fitIn.prefix.concat(' ')}`;

  getBodySuffix = () => ' '.concat(this.fitIn.suffix);

  getDescription = () => 'Complete the sentence.';

  getCorrectAnswer = () => this.fitIn.answer;

  getMinAnswerCount(): number {
    return 3;
  }

  getBaseWordType(): BaseWordType | undefined {
    return undefined;
  }

  isAnswerCorrect(answer: string): boolean {
    return this.fitIn.answer.toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => `${this.getBodyPrefix()} ${this.getCorrectAnswer()} ${this.getBodySuffix()}}`;

  getBaseWord = () => undefined;

  getBaseWordAsString = () => undefined;

  equal = (exercise: FitInGapExercise) =>
    exercise.exerciseType === 'FitInGap' && JSON.stringify(this.fitIn) === JSON.stringify(exercise.fitIn);
}
