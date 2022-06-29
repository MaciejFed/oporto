/* eslint-disable default-case */
import { readAll } from '../repository/repository';
import { IrregularVerb, RegularVerb } from '../repository/db';
import { getRandomElement } from '../common/common';

export enum Person {
  Eu = 'Eu',
  Tu = 'Tu',
  ElaEleVocé = 'Ela/Ele/Vocé',
  Nós = 'Nós',
  ElesElasVosēs = 'Eles/Elas/Vosēs'
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

export const getCorrectRegularConjugation: (verb: RegularVerb, person: Person) => string = (verb, person) => {
  if (verb.endsWith('ar') || verb.endsWith('er')) {
    switch (person) {
      case 'Eu':
        return `${verb.substring(0, verb.length - 2)}o`;
      case 'Tu':
        return `${verb.substring(0, verb.length - 2)}es`;
      case 'Ela/Ele/Vocé':
        return verb.substring(0, verb.length - 1);
      case 'Nós':
        return `${verb.substring(0, verb.length - 1)}mos`;
      case 'Eles/Elas/Vosēs':
        return `${verb.substring(0, verb.length - 1)}m`;
    }
  }
  if (verb.endsWith('ir')) {
    switch (person) {
      case 'Eu':
        return `${verb.substring(0, verb.length - 2)}o`;
      case 'Tu':
        return `${verb.substring(0, verb.length - 2)}es`;
      case 'Ela/Ele/Vocé':
        return `${verb.substring(0, verb.length - 2)}e`;
      case 'Nós':
        return `${verb.substring(0, verb.length - 1)}mos`;
      case 'Eles/Elas/Vosēs':
        return `${verb.substring(0, verb.length - 2)}em`;
    }
  }
  throw Error(`Incorrect Regular Verb: "${verb}"`);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
