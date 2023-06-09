import { Person, readAll, Verb } from '../repository/exercises-repository';
import { getRandomElement } from '../common/common';
import { VerbTime } from '../exercise/verb-exercise';
import { GermanPerson, GermanVerb, readAllDE } from '../repository/german-exercises-repository';

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getCorrectVerbConjugation = (verb: Verb, person: Person, verbTime: VerbTime): string => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return VerbExercise[verbTime][person];
};

export const getCorrectGermanVerbConjugation = (verb: GermanVerb, person: GermanPerson, verbTime: VerbTime): string => {
  const VerbExercise = readAllDE().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return VerbExercise[verbTime][person];
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};

export const getRandomGermanPerson: () => GermanPerson = () => {
  return getRandomElement(Object.values(GermanPerson));
};
