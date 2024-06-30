import { Language } from '../../../common/language';
import { Exercise } from '../../../exercise/exercise';
import { ExerciseResultContext, Priority } from '../../priority';

export function exerciseRandomness(exercise: Exercise, { language }: ExerciseResultContext): Priority[] {
  const VALUE_EXERCISE_RANDOMNESS_UP_LIMIT = language === Language.Portuguese ? 200 : 25;

  return [
    {
      exercise,
      priorityName: 'EXERCISE_RANDOMNESS',
      priorityValue: Math.floor(Math.random() * VALUE_EXERCISE_RANDOMNESS_UP_LIMIT)
    }
  ];
}
