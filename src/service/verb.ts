import { readAll, Verb } from '../repository/exercisesRepository';
import { getRandomElement } from '../common/common';
import { VerbTime } from '../exercise/verbExercise';

export enum Person {
  Eu = 'Eu',
  Tu = 'Tu',
  ElaEleVocê = 'Ela/Ele/Você',
  Nós = 'Nós',
  ElesElasVosēs = 'Eles/Elas/Vocēs'
}

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getCorrectVerbConjugation = (verb: Verb, person: Person, verbTime: VerbTime): string => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return VerbExercise[verbTime][person];
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
