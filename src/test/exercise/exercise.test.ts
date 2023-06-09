import { onlyDistinct } from '../../common/common';
import { Language } from '../../common/language';
import { generateExercisesForSession } from '../../exercise/generator';

describe('Exercise Provider', () => {
  it('Generate Distinct Exercises', async () => {
    const maybeUniqueExercises = generateExercisesForSession(10, true, Language.Portuguese);
    const uniqueExercises = onlyDistinct(maybeUniqueExercises);

    expect(uniqueExercises.length).toEqual(10);
    expect(uniqueExercises[0].equal(uniqueExercises[1])).toBe(false);
  });
});
