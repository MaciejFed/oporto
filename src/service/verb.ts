import { readAll, Verb } from '../repository/exercisesRepository';
import { getRandomElement } from '../common/common';

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

export const getCorrectVerbConjugation: (verb: Verb, person: Person) => string = (verb, person) => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  switch (person) {
    case 'Eu':
      return VerbExercise.Eu;
    case 'Tu':
      return VerbExercise.Tu;
    case 'Ela/Ele/Você':
      return VerbExercise['Ela/Ele/Você'];
    case 'Nós':
      return VerbExercise.Nós;
    case 'Eles/Elas/Vocēs':
      return VerbExercise['Eles/Elas/Vocēs'];
    default:
      return VerbExercise[person];
  }
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};
