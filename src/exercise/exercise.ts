import { RegularVerbExercise } from './verbExercise';

export enum ExerciseType {
  REGULAR_VERB = 'RegularVerb',
  IRREUGAL_VERB = 'IrregularVerb',
  WORD_TRANSLATION = 'WordTranslation'
}

export interface Exercise {
  getExerciseType(): ExerciseType;
  getExerciseBody(): string;
  getExerciseDescription(): string;
  getExercsiseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnsweCorrect(answer: string): boolean;
}


export function generateUniqeExercises(exerciseCount: number) {
  Array.from(Array(exerciseCount)).map(() => new RegularVerbExercise())
}