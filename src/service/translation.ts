import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercisesRepository';
import { Noun } from '../repository/exercisesRepository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};
