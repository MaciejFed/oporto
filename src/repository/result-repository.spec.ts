import { getAllResults, getAllResultsForExercise } from './result-repository';
import { convertToResult } from '../service/result';
import { generateAllPossibleExercises } from '../exercise/generator';
import { saveNewResult } from '../client/client';
import { Language } from '../common/language';

describe('Result Repository', () => {
  it('Can Save Results For All Exercise Types And Read Correctly', () => {
    const exercises = generateAllPossibleExercises(Language.Portuguese);
    const results = exercises.map((exercise) => convertToResult(exercise, 'foo', false, 'keyboard'));

    results.forEach((result) => saveNewResult(result));
    const allResults = getAllResults();

    expect(allResults.length).toBe(exercises.length);
    exercises.forEach((exercise, index) => {
      const resultsForExercise = getAllResultsForExercise(allResults, exercise);

      if (resultsForExercise.length > 1) {
        console.log(resultsForExercise);
        throw Error(JSON.stringify(resultsForExercise));
      }
      expect(resultsForExercise.length).toBe(1);
      expect(exercise.getCorrectAnswer()).toEqual(exercises[index].getCorrectAnswer());
    });
  });
});
