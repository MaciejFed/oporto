import { Comparable } from '../common/common';
import { Adjective, Noun, Other, Verb } from '../repository/exercises-repository';
import { RatioRange } from '../service/progress/progress';
import { GermanNoun, GermanVerb } from '../repository/german-exercises-repository';
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
