import { Comperable, getRandomElement, onlyDistinct } from '../common/common';
import { VerbExercise } from './verbExercise';
import { sortExercises } from '../service/priority';
import { NounTranslationExercise, SentenceTranslationExercise, VerbTranslationExercise } from './translationExercise';
import { FitInGapExercise } from './fitInGapExercise';

export type ExerciseType = 'VerbExercise' | 'NounTranslation' | 'VerbTranslation' | 'SentenceTranslation' | 'FitInGap';

export interface Exercise extends Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  exerciseLevel: number;
  getExerciseBodyPrefix(): string;
  getExerciseBodySuffix(): string;
  getExerciseDescription(): string;
  getExercsiseExplanation(): string | undefined;
  getCorrectAnswer(): string;
  checkAnsweCorrect(answer: string): boolean;
  getRepeatAnswerPhrase(): string;
}

type ExerciseGenerator = () => Exercise;

export const exerciseGenerators: ExerciseGenerator[] = [
  () => new VerbExercise(),
  () => new NounTranslationExercise(),
  () => new VerbTranslationExercise(),
  () => new SentenceTranslationExercise(),
  () => new FitInGapExercise()
];

export function generateUniqeExercises(exerciseCount: number, sort: boolean): Exercise[] {
  const exercises = Array.from(Array(10000)).map(() => getRandomElement(exerciseGenerators)());
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
