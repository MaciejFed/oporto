import { readAll, Verb } from '../repository/exercisesRepository';
import { getRandomElement } from '../common/common';

export enum Person {
  Ja = 'Ja'
}

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getCorrectVerbConjugation: (verb: Verb, person: Person) => string = (verb, person) => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  switch (person) {
    case 'Ja':
      return VerbExercise.Ja;
    default:
      return VerbExercise[person];
  }
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
