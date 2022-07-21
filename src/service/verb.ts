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
  const irregularVerb = readAll().verbs.irregular.filter((v) => v.infinitive === verb.infinitive)[0];
  switch (person) {
    case 'Eu':
      return irregularVerb.Eu;
    case 'Tu':
      return irregularVerb.Tu;
    case 'Ela/Ele/Você':
      return irregularVerb['Ela/Ele/Você'];
    case 'Nós':
      return irregularVerb.Nós;
    case 'Eles/Elas/Vocēs':
      return irregularVerb['Eles/Elas/Vocēs'];
    default:
      return irregularVerb[person];
  }
};

export const getCorrectRegularConjugation: (verb: RegularVerb, person: Person) => string = ({ infinitive }, person) => {
  if (infinitive.endsWith('ar')) {
    switch (person) {
      case 'Eu':
        return `${infinitive.substring(0, infinitive.length - 2)}o`;
      case 'Tu':
        return `${infinitive.substring(0, infinitive.length - 1)}s`;
      case 'Ela/Ele/Você':
        return infinitive.substring(0, infinitive.length - 1);
      case 'Nós':
        return `${infinitive.substring(0, infinitive.length - 1)}mos`;
      case 'Eles/Elas/Vocēs':
        return `${infinitive.substring(0, infinitive.length - 1)}m`;
    }
  }
  if (infinitive.endsWith('ir') || infinitive.endsWith('er')) {
    switch (person) {
      case 'Eu':
        return `${infinitive.substring(0, infinitive.length - 2)}o`;
      case 'Tu':
        return `${infinitive.substring(0, infinitive.length - 2)}es`;
      case 'Ela/Ele/Você':
        return `${infinitive.substring(0, infinitive.length - 2)}e`;
      case 'Nós':
        return `${infinitive.substring(0, infinitive.length - 1)}mos`;
      case 'Eles/Elas/Vocēs':
        return `${infinitive.substring(0, infinitive.length - 2)}em`;
    }
  }
  throw Error(`Incorrect Regular Verb: "${infinitive}"`);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
