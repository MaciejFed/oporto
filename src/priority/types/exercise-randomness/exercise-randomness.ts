import { getRandomElement } from '../../../common/common';
import { getLanguage, Language } from '../../../common/language';
import { logger } from '../../../common/logger';
import { Exercise } from '../../../exercise/exercise';
import { generateAllPossibleExercises } from '../../../exercise/generator';
import { ExerciseResultContext, Priority } from '../../priority';

export function exerciseRandomness(exercise: Exercise, { allExercises }: ExerciseResultContext): Priority[] {
  const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = getLanguage() === Language.Portuguese ? 200 : 25;

  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT)
    }
  ];
}
