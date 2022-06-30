import { Comperable, getRandomElement, onlyDistinct } from '../common/common';
import { IrregularVerbExercise, RegularVerbExercise } from './verbExercise';

export enum ExerciseType {
  REGULAR_VERB = 'RegularVerb',
  IRREUGAL_VERB = 'IrregularVerb',
  WORD_TRANSLATION = 'WordTranslation'
}

export interface Exercise extends Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  getExerciseType(): ExerciseType;
  getExerciseBody(): string;
  getExerciseDescription(): string;
  getExercsiseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnsweCorrect(answer: string): boolean;
}

type ExerciseGenerator = () => Exercise;

const exerciseGenerators: ExerciseGenerator[] = [() => new RegularVerbExercise(), () => new IrregularVerbExercise()];

export function generateUniqeExercises<T>(exerciseCount: number): Exercise[] {
  const exercises = Array.from(Array(100)).map(() => getRandomElement(exerciseGenerators)());
  const distrinctExercises = onlyDistinct(exercises).map((e) => e as Exercise);

  return distrinctExercises.splice(0, exerciseCount);
}
