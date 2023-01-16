import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercises-repository';
import { FitIn } from '../repository/exercises-repository';

export function getRandomFitInExercise(): FitIn {
  return getRandomElement(readAll().fitIn);
}
