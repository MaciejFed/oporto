import { getRandomElement } from '../common/common';
import { readAll } from '../repository/exercisesRepository';
import { Noun, Sentence } from '../repository/exercisesRepository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};

export const getRandomSentence: () => Sentence = () => {
  return getRandomElement(readAll().sentences);
};
