import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercisesRepository';
import { Translation } from '../repository/exercisesRepository';

export const getRandomTranslation: () => Translation = () => {
  return getRandomElement(readAll().translations);
};
