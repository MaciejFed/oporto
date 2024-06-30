import { generatePriority, generateResultForExercise } from '../../priority.util';
import { exerciseMaxProgressDone, VALUE_EXERCISE_MAX_PROGRESS_DONE } from './exercise-max-progress-done';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { readAll } from '../../../repository/exercises-repository';
import { noPriority } from '../../priority';
import { getExercisesProgress } from '../../../service/progress/progress';
import { Language } from '../../../common/language';

describe('Priority - EXERCISE_MAX_PROGRESS_DONE', () => {
  it('Exercise translation in 80-100 range done only 1 time', () => {
    const testExercise = VerbTranslationExercise.new(readAll().verbs[0], 'toEnglish');
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const expectedPriority = noPriority(testExercise);
    const { ratioRange } = getExercisesProgress(results, (e) => e.equal(testExercise), Language.Portuguese)[0];
    const actualPriority = exerciseMaxProgressDone(testExercise, results, ratioRange);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise translation in 80-100 range done 5 times', () => {
    const testExercise = VerbTranslationExercise.new(readAll().verbs[0], 'toEnglish');
    const results = generateResultForExercise(testExercise, true, 'keyboard', 5);
    const expectedPriority = generatePriority(
      testExercise,
      'EXERCISE_MAX_PROGRESS_DONE',
      VALUE_EXERCISE_MAX_PROGRESS_DONE
    );
    const { ratioRange } = getExercisesProgress(results, (e) => e.equal(testExercise), Language.Portuguese)[0];
    const actualPriority = exerciseMaxProgressDone(testExercise, results, ratioRange);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise translation in 80-100 range but missing points', () => {
    const testExercise = VerbTranslationExercise.new(readAll().verbs[0], 'toEnglish');
    const results = [
      generateResultForExercise(testExercise, true, 'keyboard', 1),
      generateResultForExercise(testExercise, false, 'keyboard', 2)
    ].flatMap((r) => r);
    const expectedPriority = noPriority(testExercise);
    const { ratioRange } = getExercisesProgress(results, (e) => e.equal(testExercise), Language.Portuguese)[0];
    const actualPriority = exerciseMaxProgressDone(testExercise, results, ratioRange);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise translation in 100+ range', () => {
    const testExercise = VerbTranslationExercise.new(readAll().verbs[0], 'toPortuguese');
    const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
    const expectedPriority = noPriority(testExercise);
    const { ratioRange } = getExercisesProgress(results, (e) => e.equal(testExercise), Language.Portuguese)[0];
    const actualPriority = exerciseMaxProgressDone(testExercise, results, ratioRange);

    expect(actualPriority.length).toEqual(1);
    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
