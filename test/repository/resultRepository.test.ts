import { exerciseGenerators } from '../../src/exercise/exercise';
import { getAllResults, getAllResultsForExercise, saveNewResult } from '../../src/repository/resultRepository';
import { convertToResult } from '../../src/service/result';

describe('Result Repository', () => {

    it('Can Save Results For All Exercise Types And Read Correctly', () => {
        const exercies = exerciseGenerators.map((eg) => eg());
        const results = exercies.map((exercise) => convertToResult(exercise, 'foo', false, 'keyboard'));
        
        results.forEach((result) => saveNewResult(result));
        const allResults = getAllResults();

        expect(allResults.length).toBe(exerciseGenerators.length);
        exercies.forEach((exercise, index) => {
            const resultsForExercise = getAllResultsForExercise(allResults, exercise);
            expect(resultsForExercise.length).toBe(1)
            expect(exercise.correctAnswer).toEqual(exercies[index].correctAnswer)
        })
    })
})