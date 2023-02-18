import { Comparable } from '../common/common';
import { RatioRange } from '../service/progress';
export type ExerciseType =
  | 'VerbExercise'
  | 'NounTranslation'
  | 'OtherTranslation'
  | 'AdjectiveTranslation'
  | 'VerbTranslation'
  | 'SentenceTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'VerbTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'SentenceTranslation'
];

export interface Exercise extends Comparable {
  exerciseType: ExerciseType;
  getExerciseBodyPrefix(): string;
  getExerciseBodySuffix(): string;
  getExerciseDescription(): string;
  getExerciseTranslation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnswerCorrect(answer: string): boolean;
  getRepeatAnswerPhrase(): string;
  getMaxWantedProgress(): RatioRange | '100+';
  getMinimumAnswers(): number;
}
