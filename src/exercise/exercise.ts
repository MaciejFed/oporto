import { Comperable, onlyDistinct } from '../common/common';
import { RegularVerbExercise } from './verbExercise';

export enum ExerciseType {
  REGULAR_VERB = 'RegularVerb',
  IRREUGAL_VERB = 'IrregularVerb',
  WORD_TRANSLATION = 'WordTranslation'
}

export interface Exercise extends Comperable {
  getExerciseType(): ExerciseType;
  getExerciseBody(): string;
  getExerciseDescription(): string;
  getExercsiseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnsweCorrect(answer: string): boolean;
}

export function generateUniqeExercises<T>(exerciseCount: number): Exercise[] {
  const exercises = Array.from(Array(100)).map(() => new RegularVerbExercise());
  const distrinctExercises = onlyDistinct(exercises).map((e) => e as Exercise);

  return distrinctExercises.splice(0, exerciseCount);
}
