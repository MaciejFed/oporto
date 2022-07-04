import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercisesRepository';
import { Translation } from '../repository/schema';

export const getRandomTranslation: () => Translation = () => {
  return getRandomElement(readAll().translations);
};
