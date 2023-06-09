import { Comparable } from '../common/common';
import { Adjective, Noun, Other, Verb } from '../repository/exercises-repository';
import { GermanNoun, GermanVerb } from '../repository/german-exercises-repository';
import { RatioRange } from '../service/progress';
export type ExerciseType =
  | 'VerbExercise'
  | 'GermanVerbExercise'
  | 'NounTranslation'
  | 'GermanNounTranslation'
  | 'GermanVerbTranslation'
  | 'OtherTranslation'
  | 'AdjectiveTranslation'
  | 'VerbTranslation'
  | 'SentenceTranslation'
  | 'PhraseTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'GermanNounTranslation',
  'GermanVerbTranslation',
  'VerbTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'PhraseTranslation',
  'SentenceTranslation'
];

export type BaseWord = Noun | Adjective | Verb | Other | GermanNoun | GermanVerb;

export interface ExerciseContent {
  exerciseType: ExerciseType;
  getBodyPrefix(): string;
  getBodySuffix(): string;
  getDescription(): string;
  getTranslation(): string | undefined;
  getBaseWord(): BaseWord | undefined;
}

export interface ExerciseBehavior {
  getCorrectAnswer(): string;
  isAnswerCorrect(answer: string): boolean;
  getRetryPrompt(): string;
}

export interface ExerciseProgress {
  getMaxProgressRange(): RatioRange;
  getMinAnswerCount(): number;
}

export interface Exercise extends ExerciseContent, ExerciseBehavior, ExerciseProgress, Comparable {}
