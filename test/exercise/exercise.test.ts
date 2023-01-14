import { onlyDistinct } from '../../src/common/common';
import { generateExercisesForSession } from '../../src/exercise/generator';


describe('Exercise Provider', () => {

    it('Generate Distinct Exercises', async () => {
        const maybeUniqueExercises = generateExercisesForSession(10, true, () => true);
        const uniqueExercises = onlyDistinct(maybeUniqueExercises);

        expect(uniqueExercises.length).toEqual(10);
        expect(uniqueExercises[0].equal(uniqueExercises[1])).toBe(false);
    });

});

