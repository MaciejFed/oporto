import { Exercise, ExerciseType } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { readAll } from '../repository/exercises-repository';
import {
  getAllResults,
  getAllResultsBeforeDateOneWeek,
  getAllResultsByDate,
  getAllResultsForExercise
} from '../repository/result-repository';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../priority/priority';
import { Result } from './result';
import { generateAllPossibleExercises, generateExercisesForSession } from '../exercise/generator';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { onlyDistinct } from '../common/common';

export type RatioRange = 'Never Done' | '0-39' | '40-79' | '80-100';
const ratioRanges: RatioRange[] = ['Never Done', '0-39', '40-79', '80-100'];

export type ExerciseProgress = {
  exercise: Exercise;
  correctAnswers: number;
  incorrectAnswers: number;
  ratio: number;
  exerciseResults: Result[];
  ratioRange: RatioRange;
};

export type Progress = {
  ratioRange: RatioRange & 'All';
  count: number;
};

export function getGroupExerciseProgress(results: Result[], exerciseType: ExerciseType): ExerciseProgress[] {
  const exercisesOfType = generateAllPossibleExercises().filter((exercise) => exercise.exerciseType === exerciseType);
  return exercisesOfType.map((exerciseOfType) => getSingleExerciseProgress(results, exerciseOfType as Exercise));
}

export function getSingleExerciseProgress(results: Result[], exercise: Exercise): ExerciseProgress {
  const exerciseResults = getAllResultsForExercise(results, exercise);
  const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
  const incorrectAnswers = exerciseResults.length - correctAnswers;
  const ratio = (correctAnswers / (incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO)) * 100;
  return {
    exercise,
    correctAnswers,
    incorrectAnswers,
    ratio,
    exerciseResults,
    ratioRange: mapToRatioRange(ratio, exerciseResults.length === 0)
  };
}

export function getExercisesProgress(results: Result[], filter: (e: Exercise) => boolean) {
  const exerciseProgress: ExerciseProgress[] = generateExercisesForSession(50000, false, () => true)
    .filter(filter)
    .map((exercise) => {
      const exerciseResults = getAllResultsForExercise(results, exercise);
      const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
      const incorrectAnswers = exerciseResults.length - correctAnswers;
      const ratio = (correctAnswers / (incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO)) * 100;
      return {
        exercise,
        correctAnswers,
        incorrectAnswers,
        ratio,
        exerciseResults,
        ratioRange: mapToRatioRange(ratio, exerciseResults.length === 0)
      };
    })
    .sort((a, b) => a.correctAnswers - b.correctAnswers);

  return exerciseProgress;
}

export function getProgress(results: Result[]): Progress[] {
  const exerciseProgress = getExercisesProgress(
    results,
    (exercise) => exercise instanceof TranslationExercise && exercise.isTranslationToPortuguese()
  );

  const progress = ratioRanges.map((ratioRange) =>
    Object.assign({
      ratioRange: ratioRange,
      count: exerciseProgress.filter((e) => e.ratioRange === ratioRange).length
    })
  );
  // progress.unshift({
  //   ratioRange: 'All',
  //   count: allExercises.length
  // });

  return progress;
}

function mapToRatioRange(ratio: number, neverDone: boolean): RatioRange {
  if (neverDone) return 'Never Done';
  if (!isFinite(ratio) || ratio >= 80) return '80-100';
  if (ratio >= 40 && ratio < 80) return '40-79';
  return '0-39';
}

export function getAllUniqueWords(): string[] {
  const nouns = readAll().nouns.map((noun) => noun.portuguese.word);
  const verbs = readAll().verbs.map((verb) => verb.infinitive);
  const others = readAll().others.map((other) => other.portuguese);
  const adjectives = readAll().adjectives.map((adjective) => adjective.masculine.singular);

  const allWords = [nouns, verbs, others, adjectives]
    .flatMap((w) => w)
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

export function getAllUniqueWordsAsExercises(): Exercise[] {
  const nounExercises = readAll().nouns.map((noun) => NounTranslationExercise.new(noun, 'toPortuguese'));
  const verbExercises = readAll().verbs.map((verb) => VerbTranslationExercise.new(verb, 'toPortuguese'));
  const otherExercises = readAll().others.map((other) => OtherTranslationExercise.new(other, 'toPortuguese'));
  const adjectivesExercises = readAll().adjectives.map((adjective) =>
    AdjectiveTranslationExercise.new(adjective, 'toPortuguese', 'masculine', 'singular')
  );

  return [...nounExercises, ...verbExercises, ...otherExercises, ...adjectivesExercises];
}

type ProgressOnDay = {
  day: string;
  wordCount: number;
  newWords: string[];
  lostWords: string[];
};

export function getExerciseProgressMap(results: Result[]): Record<ExerciseType, ExerciseProgress[]> {
  return {
    VerbExercise: getGroupExerciseProgress(results, 'VerbExercise'),
    SentenceTranslation: getGroupExerciseProgress(results, 'SentenceTranslation'),
    NounTranslation: getGroupExerciseProgress(results, 'NounTranslation'),
    OtherTranslation: getGroupExerciseProgress(results, 'OtherTranslation'),
    AdjectiveTranslation: getGroupExerciseProgress(results, 'AdjectiveTranslation'),
    VerbTranslation: getGroupExerciseProgress(results, 'VerbTranslation'),
    FitInGap: getGroupExerciseProgress(results, 'FitInGap')
  };
}

export function progressByDate(results: Result[]): ProgressOnDay[] {
  const allUniqueWordsAsExercises = getAllUniqueWordsAsExercises();
  const resultsByDate = getAllResultsByDate(results);
  const uniqueByDay = resultsByDate
    .map((dateResult) => {
      const resultsByDay = allUniqueWordsAsExercises.map((exercise) =>
        getSingleExerciseProgress(dateResult.results, exercise)
      );
      return {
        ...dateResult,
        words: resultsByDay.filter((r) => r.ratioRange === '80-100').map((r) => r.exercise.getCorrectAnswer()),
        exercisesDone: getAllResultsBeforeDateOneWeek(dateResult.date)
      };
    })
    .map((dateResult) => {
      return {
        day: dateResult.date.toJSDate(),
        words: dateResult.words,
        exercisesDone: Math.floor(dateResult.exercisesDone.length / 10)
      };
    });
  const alluniqueWords = getAllUniqueWords();
  return uniqueByDay.map((unique, index) => {
    const previous = index > 0 ? uniqueByDay[index - 1].words : [];
    const newWords = unique.words.filter((word) => !previous.includes(word));
    const lostWords = previous.filter((word) => !unique.words.includes(word));
    return {
      day: unique.day.toDateString(),
      wordCount: unique.words.length,
      wordsDone: unique.words,
      wordsMissing: alluniqueWords.filter((w) => !unique.words.includes(w)),
      exercisesDone: unique.exercisesDone,
      newWords,
      lostWords
    };
  });
}
