import { getRandomElement } from '../common/common';
import { Adjective, Other, OtherWithGender, Phrase, readAll, Verb } from '../repository/exercises-repository';
import { Noun, Sentence } from '../repository/exercises-repository';
import {
  GermanCaseWord,
  GermanNoun,
  GermanOther,
  GermanVerb,
  readAllDE
} from '../repository/german-exercises-repository';
import {
  PolishNoun,
  PolishOther,
  PolishPerson,
  PolishVerb,
  readAllPL
} from '../repository/polish-exercises-repository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};

export const getRandomGermanNoun: () => GermanNoun = () => {
  return getRandomElement(readAllDE().nouns);
};

export const getRandomPolishNoun: () => PolishNoun = () => {
  return getRandomElement(readAllPL().nouns);
};

export const getRandomGermanVerb: () => GermanVerb = () => {
  return getRandomElement(readAllDE().verbs);
};

export const getRandomPolishVerb: () => PolishVerb = () => {
  return getRandomElement(readAllPL().verbs);
};

export const getRandomOther: () => Other = () => {
  return getRandomElement(readAll().others);
};

export const getRandomGermanOther: () => GermanOther = () => {
  return getRandomElement(readAllDE().others);
};

export const getRandomPolishOther: () => PolishOther = () => {
  return getRandomElement(readAllPL().others);
};

export const getRandomGermanCaseWord: () => GermanCaseWord = () => {
  return getRandomElement(readAllDE().case);
};

export const getRandomAdjective: () => Adjective = () => {
  return getRandomElement(readAll().adjectives);
};

export const getRandomOtherWithGender: () => OtherWithGender = () => {
  return getRandomElement(readAll().othersWithGender);
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
