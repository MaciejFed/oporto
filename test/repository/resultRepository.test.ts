import { exerciseGenerators } from '../../src/exercise/exercise';
import { FitInGapExercise } from '../../src/exercise/fitInGapExercise';
import { NounTranslationExercise, SentenceTranslationExercise } from '../../src/exercise/translationExercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { getAllResults, getAllResultsForExercise, saveNewResult } from '../../src/repository/resultRepository';
import { convertToResult } from '../../src/service/result';

describe('Result Repository', () => {

    beforeEach(() => {
      })
    
      afterEach(() => {
        process.stdin.removeAllListeners();
      });

    it('Can Save Results For All Exercise Types And Read Correctly', () => {
        const exercies = exerciseGenerators.map((eg) => eg());
        const results = exercies.map((exercise) => convertToResult(exercise, 'foo', false, 'keyboard'));
        
        results.forEach((result) => saveNewResult(result));
        const allResults = getAllResults();


        expect(allResults.length).toBe(exerciseGenerators.length);
        exercies.forEach((exercise) => {
            expect(getAllResultsForExercise(allResults, exercise).length).toBe(1)
        })
    })
})