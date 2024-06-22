import { Comparable } from '../common/common';
import { Adjective, Noun, Other, Verb } from '../repository/exercises-repository';
import { RatioRange } from '../service/progress/progress';
export type ExerciseType =
  | 'VerbExercise'
  | 'NounTranslation'
  | 'OtherTranslation'
  | 'AdjectiveTranslation'
  | 'VerbTranslation'
  | 'SentenceTranslation'
  | 'PhraseTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'VerbTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'PhraseTranslation',
  'SentenceTranslation'
];

export type BaseWord = Noun | Adjective | Verb | Other;

export enum BaseWordType {
  NOUN = 'NOUN',
  VERB = 'VERB',
  ADJECTIVE = 'ADJECTIVE',
  OTHER = 'OTHER'
}

export interface ExerciseContent {
  exerciseType: ExerciseType;
  getBodyPrefix(): string;
  getBodySuffix(): string;
  getDescription(): string;
  getTranslation(): string | undefined;
  getBaseWord(): BaseWord | undefined;
  getBaseWordType(): BaseWordType | undefined;
  getBaseWordAsString(): string | undefined;
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
