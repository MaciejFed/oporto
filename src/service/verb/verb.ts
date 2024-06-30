import { Person, readAll, Verb, VerbInfinitive, wordDatabase } from '../../repository/exercises-repository';
import { getRandomElement } from '../../common/common';
import { VerbTime } from '../../exercise/verb-exercise';
import { GermanPerson, GermanVerb, readAllDE } from '../../repository/german-exercises-repository';

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};

export const getRandomGermanPerson: () => GermanPerson = () => {
  return getRandomElement(Object.values(GermanPerson));
};

export const getCorrectVerbConjugation = (verb: Verb, person: Person, verbTime: VerbTime): string => {
  const VerbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  return VerbExercise[verbTime]![person];
};

export const getCorrectGermanVerbConjugation = (verb: GermanVerb, person: GermanPerson, verbTime: VerbTime): string => {
  const VerbExercise = readAllDE().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return VerbExercise[verbTime][person];
};

export interface VerbChecked {
  infinitive: string;
  presentSimple?: {
    [key in Person]: {
      conjugation: string;
      isStandard: boolean;
      expectedConjugation: string;
    };
  };
  pastPerfect?: {
    [key in Person]: {
      conjugation: string;
      isStandard: boolean;
      expectedConjugation: string;
    };
  };
}

export interface StandardConjugation {
  isStandard: boolean;
  verb: VerbChecked;
}

export function checkStandardConjugation(verbInfinitive: VerbInfinitive): StandardConjugation {
  const verb = wordDatabase.verb(verbInfinitive);
  const normalize = (word: string) => {
    return word.includes('-') ? word.substring(0, word.indexOf('-')) : word;
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
        [Person.Nós]: 'ámos',
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

  let returnValue: Partial<StandardConjugation> = {
    isStandard: true
  };
  let isStandard = true;

  for (const tense of tenses) {
    if (!verb[tense]) continue;
    const verbEnding = normalize(verb.infinitive).slice(-2) as VerbEnding;
    if (!standardVerbEndings.includes(verbEnding)) {
      return {
        isStandard: false,
        verb: {
          infinitive: verb.infinitive,
          // @ts-ignore
          presentSimple: Object.keys(verb.presentSimple).reduce(
            (prev, curr) => ({
              ...prev,
              [curr]: {
                isStandard: false,
                // @ts-ignore
                conjugation: verb.presentSimple[curr]
              }
            }),
            {}
          ),
          // @ts-ignore
          pastPerfect: !verb.pastPerfect
            ? undefined
            : Object.keys(verb.pastPerfect).reduce(
                (prev, curr) => ({
                  ...prev,
                  [curr]: {
                    isStandard: false,
                    // @ts-ignore
                    conjugation: verb.pastPerfect[curr]
                  }
                }),
                {}
              )
        }
      };
    }

    const standardPatterns = standardConjugations[tense][verbEnding];

    for (const person of Object.values(Person)) {
      const expectedConjugation = normalize(verb.infinitive).slice(0, -2) + standardPatterns[person];
      const verbTense = verb[tense];
      if (!verbTense) continue;
      const actualConjugation: string = normalize(verbTense[person]);
      if (expectedConjugation !== actualConjugation) {
        isStandard = false;
        returnValue = {
          ...returnValue,
          isStandard: false,
          verb: {
            ...returnValue.verb,
            infinitive: verb.infinitive,
            [tense]: {
              // @ts-ignore
              ...(returnValue.verb ? returnValue.verb[tense] : undefined),
              [person]: {
                isStandard: false,
                conjugation: verbTense[person],
                expectedConjugation
              }
            }
          }
        };
      } else {
        returnValue = {
          ...returnValue,
          verb: {
            ...returnValue.verb,
            infinitive: verb.infinitive,
            [tense]: {
              // @ts-ignore
              ...(returnValue.verb ? returnValue.verb[tense] : undefined),
              [person]: {
                isStandard: true,
                conjugation: verbTense[person],
                expectedConjugation
              }
            }
          }
        };
      }
    }
  }
  // @ts-ignore

  return {
    ...returnValue,
    isStandard
  };
}
