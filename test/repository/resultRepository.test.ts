import { getAllResults, getAllResultsForExercise, saveNewResult } from '../../src/repository/resultRepository';
import { convertToResult } from '../../src/service/result';
import { generateAllPossibleExercises } from '../../src/exercise/generator';

describe('Result Repository', () => {

    it.skip('Can Save Results For All Exercise Types And Read Correctly', () => {
        const exercies = generateAllPossibleExercises();
        const results = exercies.map((exercise) => convertToResult(exercise, 'foo', false, 'keyboard'));

        results.forEach((result) => saveNewResult(result));
        const allResults = getAllResults();

        expect(allResults.length).toBe(exercies.length);
        exercies.forEach((exercise, index) => {
            const resultsForExercise = getAllResultsForExercise(allResults, exercise);
            expect(resultsForExercise.length).toBe(1)
            expect(exercise.getCorrectAnswer()).toEqual(exercies[index].getCorrectAnswer())
        })
    })
})
