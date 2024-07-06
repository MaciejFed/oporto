import { checkStandardConjugation } from './verb';
import { readAll } from '../../repository/exercises-repository';

describe('Verb Service', () => {
  it('checks the standard conjugations', () => {
    const verbs = readAll().verbs.map((verb) => verb.infinitive);
    const standardConjugations = verbs.filter((verb) => checkStandardConjugation(verb, []).isStandard);
    const nonStandardConjugations = verbs.filter((verb) => !checkStandardConjugation(verb, []).isStandard);
    expect(standardConjugations.length).toEqual(117);
    expect(nonStandardConjugations.length).toEqual(65);
  });
});
