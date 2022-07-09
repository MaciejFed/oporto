import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercisesRepository';
import { FitIn } from '../repository/schema';

export function getRandomFitInExercise(): FitIn {
  return getRandomElement(readAll().fitIn);
}
