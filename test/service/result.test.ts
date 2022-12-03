import { VerbExercise } from '../../src/exercise/verbExercise';
import { convertToResult } from '../../src/service/result';

describe('Result Service', () => {
    it('Converts Exercise To Result', () => {
        const verbExercise = new VerbExercise();

        const result = convertToResult(verbExercise, verbExercise.getCorrectAnswer(), true, 'keyboard');

        expect(result.answer).toEqual(verbExercise.getCorrectAnswer());
        expect(result.exercise.getCorrectAnswer()).toEqual(verbExercise.getCorrectAnswer());
        expect(result.exercise.equal(verbExercise)).toBe(true);
    })
})
