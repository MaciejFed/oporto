import { Comparable, onlyDistinct } from '../common/common';
import { sortExercises } from '../priority/priority';
import { generateAllPossibleExercises } from './generator';
import { RatioRange } from '../service/progress';
export type ExerciseType =
  | 'VerbExercise'
  | 'NounTranslation'
  | 'AdjectiveTranslation'
  | 'VerbTranslation'
  | 'SentenceTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'VerbTranslation',
  'AdjectiveTranslation',
  'SentenceTranslation'
];

export interface Exercise extends Comparable {
  exerciseType: ExerciseType;
  getExerciseBodyPrefix(): string;
  getExerciseBodySuffix(): string;
  getExerciseDescription(): string;
  getExerciseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnswerCorrect(answer: string): boolean;
  getRepeatAnswerPhrase(): string;
  getMaxWantedProgress(): RatioRange | '100+';
  getMinimumAnswers(): number;
}

export function generateUniqueExercises(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean
): Exercise[] {
  const exercises = generateAllPossibleExercises().filter((exercise) => filter(exercise));
  const distinctExercises = onlyDistinct(exercises).map((e) => e as Exercise);
  const exercisesFinal = sort ? sortExercises(distinctExercises) : distinctExercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}
