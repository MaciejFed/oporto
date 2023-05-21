import { getRandomElement } from '../common/common';
import { Adjective, Other, Phrase, readAll, Verb } from '../repository/exercises-repository';
import { Noun, Sentence } from '../repository/exercises-repository';

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

export const getRandomPhrase: () => Phrase = () => {
  return getRandomElement(readAll().phrases);
};
