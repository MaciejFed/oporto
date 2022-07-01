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
