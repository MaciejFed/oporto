import { Person, readAll, Verb, VerbInfinitive, wordDatabase } from '../../repository/exercises-repository';
import { getRandomElement } from '../../common/common';
import { VerbExercise, VerbTime } from '../../exercise/verb-exercise';
import { GermanPerson, GermanVerb, readAllDE } from '../../repository/german-exercises-repository';
import { Result } from '../result';
import { getSingleExerciseProgress } from '../progress/progress';
import { GermanVerbExercise, GermanVerbTime } from '../../exercise/german-verb-exercise';
import { PolishPerson, PolishVerb, readAllPL } from '../../repository/polish-exercises-repository';
import { Language } from '../../common/language';
import { PolishVerbExercise } from '../../exercise/polish-verb-exercise';
import { VerbTranslationExercise } from '../../exercise/translation/verb-translation-exercise';
import { GermanVerbTranslationExercise } from '../../exercise/translation/de/german-verb-translation-exercise';
import { PolishVerbTranslationExercise } from '../../exercise/translation/pl/polish-verb-translation-exercise';

export const getRandomVerb: () => Verb = () => {
  return getRandomElement(readAll().verbs);
};

export const getRandomPerson: () => Person = () => {
  return getRandomElement(Object.values(Person));
};

export const getRandomGermanPerson: () => GermanPerson = () => {
  return getRandomElement(Object.values(GermanPerson));
};

export const getRandomPolishPerson: () => PolishPerson = () => {
  return getRandomElement(Object.values(PolishPerson));
};

export const getCorrectVerbConjugation = (verb: Verb, person: Person, verbTime: VerbTime): string => {
  const verbExercise = readAll().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  return verbExercise[verbTime]![person];
};

export const getCorrectGermanVerbConjugation = (
  verb: GermanVerb,
  person: GermanPerson,
  verbTime: GermanVerbTime
): string => {
  const verbExercise = readAllDE().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  // @ts-ignore
  return verbExercise[verbTime][person];
};

export const getCorrectPolishVerbConjugation = (verb: PolishVerb, person: PolishPerson): string => {
  const verbExercise = readAllPL().verbs.filter((v) => v.infinitive === verb.infinitive)[0];
  return verbExercise.presentSimple[person];
};

export const getVerbExerciseTypeForLanguage = (lanugage: Language) => {
  switch (lanugage) {
    case Language.Portuguese:
      return VerbTranslationExercise;
    case Language.German:
      return GermanVerbTranslationExercise;
    case Language.Polish:
      return PolishVerbTranslationExercise;
    default:
      throw new Error('');
  }
};

interface VerbDetails {
  conjugation: string;
  isStandard: boolean;
  expectedConjugation: string;
  status?: 'string';
}

export interface VerbChecked {
  infinitive: string;
  presentSimple?: {
    [key in Person]: VerbDetails;
  };
  pastPerfect?: {
    [key in Person]: VerbDetails;
  };
}

export interface StandardConjugation {
  isStandard: boolean;
  verb: VerbChecked;
}

export function checkStandardConjugation(verbInfinitive: VerbInfinitive, allResults: Result[]): StandardConjugation {
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
                conjugation: verb.presentSimple[curr],
                status: getSingleExerciseProgress(allResults, VerbExercise.new(verb, curr as Person, 'presentSimple'))
                  .progressType
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
                    conjugation: verb.pastPerfect[curr],
                    status: getSingleExerciseProgress(allResults, VerbExercise.new(verb, curr as Person, 'pastPerfect'))
                      .progressType
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
                expectedConjugation,
                status: getSingleExerciseProgress(allResults, VerbExercise.new(verb, person as Person, tense))
                  .progressType
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
                expectedConjugation,
                status: getSingleExerciseProgress(allResults, VerbExercise.new(verb, person as Person, tense))
                  .progressType
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
