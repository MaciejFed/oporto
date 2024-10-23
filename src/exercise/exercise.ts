import { Comparable } from '../common/common';
import { Adjective, Noun, Other, OtherWithGender, Verb } from '../repository/exercises-repository';
import { GermanCaseWord, GermanNoun, GermanOther, GermanVerb } from '../repository/german-exercises-repository';
import { PolishOther, PolishVerb } from '../repository/polish-exercises-repository';
import { MovieExample } from '../io/file';
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
  | 'VerbOtherFormTranslation'
  | 'SentenceTranslation'
  | 'PhraseTranslation'
  | 'OtherWithGenderTranslation'
  | 'FitInGap';

export const translationTypes: ExerciseType[] = [
  'NounTranslation',
  'GermanNounTranslation',
  'GermanVerbTranslation',
  'PolishVerbTranslation',
  'PolishNounTranslation',
  'PolishOtherTranslation',
  'VerbTranslation',
  'VerbOtherFormTranslation',
  'OtherTranslation',
  'AdjectiveTranslation',
  'PhraseTranslation',
  'SentenceTranslation'
];

export type Frequency = {
  place: number;
  frequency: number;
};

export type BaseWord =
  | Noun
  | Adjective
  | Verb
  | Other
  | OtherWithGender
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
  name: string;
  getBodyPrefix(): string;
  getBodySuffix(): string;
  getDescription(): string;
  getTranslation(): string | undefined;
  getBaseWord(): BaseWord | undefined;
  getBaseWordType(): BaseWordType | undefined;
  getBaseWordAsString(): string | undefined;
  addMovieExample(movieExample: MovieExample): void;
  addFrequency(frequency: Frequency): void;
  getFrequency(): Frequency;
  getMovieExample(): MovieExample | undefined;
  getMovieExamplePrefix(): string;
  getMovieExampleSuffix(): string;
  supportsMovieExampleAnswer(): boolean;
  toString(): string;
}

export interface ExerciseBehavior {
  getCorrectAnswer(): string;
  isAnswerCorrect(answer: string): boolean;
  getRetryPrompt(): string;
}

export interface Exercise extends ExerciseContent, ExerciseBehavior, Comparable {}

export abstract class BaseExercise implements Exercise {
  public movieExample: MovieExample | undefined;
  public frequency: Frequency = { place: 0, frequency: 0 };
  public name = '';
  abstract exerciseType: ExerciseType;

  toString(): string {
    return `${this.exerciseType}_${this.getBaseWordAsString()}`;
  }

  supportsMovieExampleAnswer(): boolean {
    return true;
  }

  getMovieExample(): MovieExample | undefined {
    return this.movieExample;
  }

  addMovieExample(movieExample: MovieExample) {
    this.movieExample = movieExample;
  }

  addFrequency(frequency: Frequency) {
    this.frequency = frequency;
  }

  getFrequency(): Frequency {
    return this.frequency;
  }

  getMovieExamplePrefix(): string {
    if (!this.movieExample || !this.supportsMovieExampleAnswer()) return '';
    return ` "${this.movieExample.targetLanguage.substring(0, this.movieExample.wordStartIndex)}`;
  }

  getMovieExampleSuffix(): string {
    if (!this.movieExample || !this.supportsMovieExampleAnswer()) return '';
    return `${this.movieExample.targetLanguage.substring(
      this.movieExample.wordStartIndex + this.movieExample.word.length + 1
    )}`;
  }

  abstract getBaseWordAsString(): string | undefined;
  abstract isAnswerCorrect(answer: string): boolean;
  abstract equal(other: Comparable): boolean;
  abstract getCorrectAnswer(): string;
  abstract getBodyPrefix(): string;
  abstract getBodySuffix(): string;
  abstract getDescription(): string;
  abstract getTranslation(): string | undefined;
  abstract getRetryPrompt(): string;
  abstract getBaseWord(): BaseWord | undefined;
  abstract getBaseWordType(): BaseWordType | undefined;
}
