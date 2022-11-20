import { getRandomElement } from '../common/common';
import { Adjective, readAll, Verb } from '../repository/exercisesRepository';
import { Noun, Sentence } from '../repository/exercisesRepository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};

export const getRandomAdjective: () => Adjective = () => {
  return getRandomElement(readAll().adjectives);
};

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getRandomSentence: () => Sentence = () => {
  return getRandomElement(readAll().sentences);
};
