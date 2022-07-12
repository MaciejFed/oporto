/* eslint-disable default-case */
import { readAll } from '../repository/exercisesRepository';
import { IrregularVerb, RegularVerb } from '../repository/exercisesRepository';
import { getRandomElement } from '../common/common';

export enum Person {
  Eu = 'Eu',
  Tu = 'Tu',
  ElaEleVocê = 'Ela/Ele/Você',
  Nós = 'Nós',
  ElesElasVosēs = 'Eles/Elas/Vocēs'
}

export const getRandomRegularVerb: () => RegularVerb = () => {
  return getRandomElement(readAll().verbs.regular);
};

export const getRandomIrregularVerb: () => IrregularVerb = () => {
  return getRandomElement(readAll().verbs.irregular);
};

export const getCorrectIrregularConjugation: (verb: IrregularVerb, person: Person) => string = (verb, person) => {
  return verb[person];
};

export const getCorrectRegularConjugation: (verb: RegularVerb, person: Person) => string = ({ portuguese }, person) => {
  if (portuguese.endsWith('ar') || portuguese.endsWith('er')) {
    switch (person) {
      case 'Eu':
        return `${portuguese.substring(0, portuguese.length - 2)}o`;
      case 'Tu':
        return `${portuguese.substring(0, portuguese.length - 2)}es`;
      case 'Ela/Ele/Você':
        return portuguese.substring(0, portuguese.length - 1);
      case 'Nós':
        return `${portuguese.substring(0, portuguese.length - 1)}mos`;
      case 'Eles/Elas/Vocēs':
        return `${portuguese.substring(0, portuguese.length - 1)}m`;
    }
  }
  if (portuguese.endsWith('ir')) {
    switch (person) {
      case 'Eu':
        return `${portuguese.substring(0, portuguese.length - 2)}o`;
      case 'Tu':
        return `${portuguese.substring(0, portuguese.length - 2)}es`;
      case 'Ela/Ele/Você':
        return `${portuguese.substring(0, portuguese.length - 2)}e`;
      case 'Nós':
        return `${portuguese.substring(0, portuguese.length - 1)}mos`;
      case 'Eles/Elas/Vocēs':
        return `${portuguese.substring(0, portuguese.length - 2)}em`;
    }
  }
  throw Error(`Incorrect Regular Verb: "${portuguese}"`);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
