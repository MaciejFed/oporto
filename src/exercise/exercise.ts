import { Comparable, getRandomElement, onlyDistinct } from '../common/common';
import { VerbExercise } from './verbExercise';
import { sortExercises } from '../service/priority';
import { FitInGapExercise } from './fitInGapExercise';
import { NounTranslationExercise } from './translation/nounTranslationExercise';
import { AdjectiveTranslationExercise } from './translation/adjectiveTranslationExercise';
import { SentenceTranslationExercise } from './translation/sentenceTranslationExercise';
import { VerbTranslationExercise } from './translation/verbTranslationExercise';
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
  correctAnswer: string;
  getExerciseBodyPrefix(): string;
  getExerciseBodySuffix(): string;
  getExerciseDescription(): string;
  getExerciseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnswerCorrect(answer: string): boolean;
  getRepeatAnswerPhrase(): string;
}

type ExerciseGenerator = () => Exercise;

export const exerciseGenerators: ExerciseGenerator[] = [
  () => new VerbExercise(),
  () => new NounTranslationExercise(),
  () => new AdjectiveTranslationExercise(),
  () => new VerbTranslationExercise(),
  () => new SentenceTranslationExercise()
];

export function generateUniqeExercises(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean
): Exercise[] {
  const exercises = Array.from(Array(100000))
    .map(() => getRandomElement(exerciseGenerators)())
    .filter((exercise) => filter(exercise));
  const distinctExercises = onlyDistinct(exercises).map((e) => e as Exercise);
  const exercisesFinal = sort ? sortExercises(distinctExercises) : distinctExercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}

// all exercises start with zero priority
// give all of them from 0 to 10 % priority by random
// if never done add 50
// for every done correctly subtract (10 - days from today (if done 10 days ago correctly who cares))
// for every done wrong add (20 - days from today (if done wrong) days ago who cares))
// for not beign tried add 5 per day
// log sorted logic
// bronze standard - answered 10+ times in a row correctly in span of over a week
// silver standard - answered 10+ times in a row times correctly in span of over a 2 weeks
// gold standard - answered 10+ times in a row correctly in span of over a month
