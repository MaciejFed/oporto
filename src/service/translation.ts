import { getRandomElement } from '../common/common';
import { Adjective, Other, readAll, Verb } from '../repository/exercisesRepository';
import { Noun, Sentence } from '../repository/exercisesRepository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};

export const getRandomOther: () => Other = () => {
  return getRandomElement(readAll().others);
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
