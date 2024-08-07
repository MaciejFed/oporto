import { Comparable } from '../common/common';
import { Adjective, Noun, Other, Verb } from '../repository/exercises-repository';
import { GermanCaseWord, GermanNoun, GermanOther, GermanVerb } from '../repository/german-exercises-repository';
import { PolishOther, PolishVerb } from '../repository/polish-exercises-repository';
export type ExerciseType =
  | 'VerbExercise'
  | 'GermanVerbExercise'
  | 'PolishVerbExercise'
  | 'NounTranslation'
  | 'GermanNounTranslation'
  | 'PolishNounTranslation'
  | 'GermanVerbTranslation'
  | 'PolishVerbTranslation'
  | 'OtherTranslation'
  | 'GermanOtherTranslation'
  | 'PolishOtherTranslation'
  | 'GermanCaseExercise'
  | 'AdjectiveTranslation'
  | 'VerbTranslation'
  | 'SentenceTranslation'
  | 'PhraseTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'GermanNounTranslation',
  'GermanVerbTranslation',
  'PolishVerbTranslation',
  'PolishNounTranslation',
  'PolishOtherTranslation',
  'VerbTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'PhraseTranslation',
  'SentenceTranslation'
];

export type BaseWord =
  | Noun
  | Adjective
  | Verb
  | Other
  | GermanNoun
  | GermanVerb
  | GermanOther
  | GermanCaseWord
  | PolishVerb
  | PolishOther;

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
  getMinAnswerCount(): number;
}

export interface Exercise extends ExerciseContent, ExerciseBehavior, ExerciseProgress, Comparable {}
