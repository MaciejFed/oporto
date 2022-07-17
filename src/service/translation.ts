import { getRandomElement } from '../common/common';
import { IrregularVerb, readAll, RegularVerb } from '../repository/exercisesRepository';
import { Noun, Sentence } from '../repository/exercisesRepository';

export const getRandomNoun: () => Noun = () => {
  return getRandomElement(readAll().nouns);
};

export const getRandomVerb: () => IrregularVerb | RegularVerb = () => {
  const regularVerbs = readAll().verbs.regular;
  const irregularVerbs = readAll().verbs.irregular;
  const allVerbs: (IrregularVerb | RegularVerb)[] = regularVerbs;

  allVerbs.push(...irregularVerbs);

  return getRandomElement(allVerbs);
};

export const getRandomSentence: () => Sentence = () => {
  return getRandomElement(readAll().sentences);
};
