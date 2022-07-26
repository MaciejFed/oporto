import { Exercise, generateUniqeExercises } from '../exercise/exercise';
import { getAllResultsForExercise } from '../repository/resultRepository';
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
  const allExercises = generateUniqeExercises(10000);
  const exerciseProgress: ExerciseProgress[] = generateUniqeExercises(10000)
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
  progress.unshift({
    ratioRange: 'All',
    count: allExercises.length
  });

  return progress;
}

function mapToRatioRange(ratio: number, neverDone: boolean): RatioRange {
  if (neverDone) return 'Never Done';
  if (!isFinite(ratio) || ratio >= 80) return '80-100';
  if (ratio >= 40 && ratio < 80) return '40-79';
  return '0-39';
}
