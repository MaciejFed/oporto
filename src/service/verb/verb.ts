import { Person, readAll, Verb, VerbInfinitive, wordDatabase } from '../../repository/exercises-repository';
import { getRandomElement } from '../../common/common';
import { VerbTime } from '../../exercise/verb-exercise';

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};

export const getCorrectVerbConjugation = (verb: Verb, person: Person, verbTime: VerbTime): string => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return VerbExercise[verbTime][person];
};

export interface StandardConjugation {
  isStandard: boolean;
  verbExpected?: Verb;
  verbActual?: Verb;
}

export function checkStandardConjugation(verbInfinitive: VerbInfinitive): StandardConjugation {
  const verb = wordDatabase.verb(verbInfinitive);
  const normalize = (word: string) => {
    const normalized = word.replace('á', 'a').replace('ç', 'c');
    return normalized.includes('-') ? normalized.substring(0, normalized.indexOf('-')) : normalized;
  };

  type Tense = 'presentSimple' | 'pastPerfect';
  type VerbEnding = 'ar' | 'er' | 'ir';
  const standardVerbEndings: VerbEnding[] = ['ar', 'er', 'ir'];

  const standardConjugations: Record<Tense, Record<VerbEnding, Record<Person, string>>> = {
    presentSimple: {
      ar: {
        [Person.Eu]: 'o',
        [Person.Tu]: 'as',
        [Person.ElaEleVocê]: 'a',
        [Person.Nós]: 'amos',
        [Person.ElesElasVosēs]: 'am'
      },
      er: {
        [Person.Eu]: 'o',
        [Person.Tu]: 'es',
        [Person.ElaEleVocê]: 'e',
        [Person.Nós]: 'emos',
        [Person.ElesElasVosēs]: 'em'
      },
      ir: {
        [Person.Eu]: 'o',
        [Person.Tu]: 'es',
        [Person.ElaEleVocê]: 'e',
        [Person.Nós]: 'imos',
        [Person.ElesElasVosēs]: 'em'
      }
    },
    pastPerfect: {
      ar: {
        [Person.Eu]: 'ei',
        [Person.Tu]: 'aste',
        [Person.ElaEleVocê]: 'ou',
        [Person.Nós]: 'amos',
        [Person.ElesElasVosēs]: 'aram'
      },
      er: {
        [Person.Eu]: 'i',
        [Person.Tu]: 'este',
        [Person.ElaEleVocê]: 'eu',
        [Person.Nós]: 'emos',
        [Person.ElesElasVosēs]: 'eram'
      },
      ir: {
        [Person.Eu]: 'i',
        [Person.Tu]: 'iste',
        [Person.ElaEleVocê]: 'iu',
        [Person.Nós]: 'imos',
        [Person.ElesElasVosēs]: 'iram'
      }
    }
  };

  const tenses: Tense[] = ['presentSimple', 'pastPerfect'];

  for (const tense of tenses) {
    if (!verb[tense]) continue;
    const verbEnding = normalize(verb.infinitive).slice(-2) as VerbEnding;
    if (!standardVerbEndings.includes(verbEnding))
      return {
        isStandard: false
      };
    const standardPatterns = standardConjugations[tense][verbEnding];

    for (const person of Object.values(Person)) {
      const expectedConjugation = normalize(verb.infinitive).slice(0, -2) + standardPatterns[person];
      const verbTense = verb[tense];
      if (!verbTense) continue;
      const actualConjugation: string = normalize(verbTense[person]);
      if (expectedConjugation !== actualConjugation) {
        return {
          isStandard: false
        };
      }
    }
  }

  return {
    isStandard: true
  };
}
