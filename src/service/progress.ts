import { DateTime } from 'luxon';
import { Exercise, generateUniqeExercises } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translationExercise';
import { readAll } from '../repository/exercisesRepository';
import { getAllResults, getAllResultsByDate, getAllResultsForExercise } from '../repository/resultRepository';
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

export function getProgress(results: Result[]): Progress[] {
  const exerciseProgress: ExerciseProgress[] = generateUniqeExercises(10000, false)
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
  const sentenceWords = readAll().sentences.flatMap((sentence) => sentence.portuguese.split(' '));
  const fitInWords = readAll().fitIn.flatMap((fit) => fit.prefix.split(' ').concat(fit.prefix.split(' ')));

  const verbDecliatons = [
    readAll().verbs.flatMap((verb) => [verb.Eu, verb.Tu, verb['Ela/Ele/Você'], verb.Nós, verb['Eles/Elas/Vocēs']])
  ].flatMap((v) => v);

  const allWords = [nouns, verbs, sentenceWords, fitInWords]
    .flatMap((w) => w)
    .map((word) => word.replace('?', '').toLowerCase())
    .filter((verb) => !verbDecliatons.includes(verb))
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

function getAllUniqueWordsByDay(results: Result[]) {
  const verbDecliatons = [
    readAll().verbs.flatMap((verb) => [verb.Eu, verb.Tu, verb['Ela/Ele/Você'], verb.Nós, verb['Eles/Elas/Vocēs']])
  ].flatMap((v) => v);

  const allWords = results
    .filter((result) => {
      if (['VerbExercise', 'FitInGap'].includes(result.exercise.exercsiseType)) return false;
      return (result.exercise as unknown as TranslationExercise).isTranslationToPortuguese();
    })
    .filter((result) => result.wasCorrect)
    .flatMap((result) => result.answer)
    .map((word) => word.replace('?', '').toLowerCase())
    .filter((verb) => !verbDecliatons.includes(verb))
    .filter((word) => word)
    .flatMap((word) => word.split(' '));

  return [...new Set(allWords.filter((word) => allWords.filter((w) => w === word).length > 2))];
}
