import { Exercise, generateUniqeExercises, translationTypes } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translation/translationExercise';
import { readAll } from '../repository/exercisesRepository';
import {
  getAllResultsBeforeDateOneWeek,
  getAllResultsByDate,
  getAllResultsForExercise
} from '../repository/resultRepository';
import { VALUE_WRONG_TO_CORRECT_RATIO } from './priority';
import { Result } from './result';

export type RatioRange = 'Never Done' | '0-39' | '40-79' | '80-100';
const ratioRanges: RatioRange[] = ['Never Done', '0-39', '40-79', '80-100'];

type ExerciseProgress = {
  exercise: Exercise;
  correctAnswers: number;
  incorrectAnswers: number;
  ratio: number;
  ratioRange: RatioRange;
};

export type Progress = {
  ratioRange: RatioRange & 'All';
  count: number;
};

function getExercisesProgress(results: Result[]) {
  const exerciseProgress: ExerciseProgress[] = generateUniqeExercises(50000, false, () => true)
    .filter((exercise) => exercise instanceof TranslationExercise && exercise.isTranslationToPortuguese())
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
        ratioRange: mapToRatioRange(ratio, exerciseResults.length === 0)
      };
    })
    .sort((a, b) => a.correctAnswers - b.correctAnswers);

  return exerciseProgress;
}

export function getProgress(results: Result[]): Progress[] {
  const exerciseProgress = getExercisesProgress(results);

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
  const adjectives = readAll().adjectives.map((adjective) => adjective.masculine.singular);

  const allWords = [nouns, verbs, adjectives]
    .flatMap((w) => w)
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

function getAllVariations(): string[] {
  const verbVariations = [
    readAll().verbs.flatMap((verb) => [verb.Eu, verb.Tu, verb['Ela/Ele/Você'], verb.Nós, verb['Eles/Elas/Vocēs']])
  ].flatMap((v) => v);
  const adjectivesVariations = readAll().adjectives.flatMap((adjective) => [
    adjective.masculine.plural,
    adjective.feminine.singular,
    adjective.feminine.plural
  ]);

  return verbVariations.concat(adjectivesVariations);
}

type ProgressOnDay = {
  day: string;
  wordCount: number;
  newWords: string[];
  lostWords: string[];
};

export function progressByDate(): ProgressOnDay[] {
  const uniqueByDay = getAllResultsByDate()
    .map((dateResult) => {
      const exerciseProgress = getExercisesProgress(dateResult.results);
      return {
        ...dateResult,
        words: [
          ...new Set(
            dateResult.results
              .filter(
                (result) => exerciseProgress.find((ep) => ep.exercise.equal(result.exercise))?.ratioRange === '80-100'
              )
              .map((result) => result.exercise)
              .filter((exercise) => exercise instanceof TranslationExercise)
              .filter((translationExercise) => (translationExercise as TranslationExercise).isTranslationToPortuguese())
              .filter(
                (translationExercise) =>
                  !getAllVariations().includes((translationExercise as TranslationExercise).getCorrectAnswer())
              )
              .filter(
                (translationExercise) =>
                  (translationExercise as TranslationExercise).exerciseType !== 'SentenceTranslation'
              )
              .map((exercise) => exercise.getCorrectAnswer())
          )
        ],
        exercisesDone: getAllResultsBeforeDateOneWeek(dateResult.date)
      };
    })
    .map((dateResult, index, array) => {
      return {
        day: dateResult.date,
        words: dateResult.words,
        exercisesDone: Math.floor(dateResult.exercisesDone.length / 10)
      };
    });
  return uniqueByDay.map((unique, index) => {
    const previous = index > 0 ? uniqueByDay[index - 1].words : [];
    const newWords = unique.words.filter((word) => !previous.includes(word));
    const lostWords = previous.filter((word) => !unique.words.includes(word));
    return {
      day: unique.day.toJSDate().toDateString(),
      wordCount: unique.words.length,
      exercisesDone: unique.exercisesDone,
      newWords,
      lostWords
    };
  });
}
