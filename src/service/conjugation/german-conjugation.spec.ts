import { readAllDE } from '../../repository/german-exercises-repository';
import { parseGermanVerb } from './german-conjugation';

describe('German Conjugation', () => {
  it('Should Parse Regular Verb', () => {
    const regularVerb = readAllDE().verbs.find((verb) => verb.infinitive === 'kommen')!;

    const parsedVerb = parseGermanVerb(regularVerb);
    expect(parsedVerb).toEqual({
      Inf: {
        text: 'Inf: kommen',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'B']
      },
      Ich: {
        text: 'Ich: komme',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G']
      },
      Du: {
        text: 'Du:  kommst',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G']
      },
      ErSieEs: {
        text: 'Er:  kommt',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G']
      },
      Wir: {
        text: 'Wir: kommen',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G']
      },
      Ihr: {
        text: 'Ihr: kommt',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G']
      },
      Sie: {
        text: 'Sie: kommen',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G']
      }
    });
  });

  it('Should Parse Irregular Verb', () => {
    const irregularVerb = readAllDE().verbs.find((verb) => verb.infinitive === 'geben')!;

    const parsedVerb = parseGermanVerb(irregularVerb);
    expect(parsedVerb).toEqual({
      Inf: {
        text: 'Inf: geben',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'B', 'B']
      },
      Ich: {
        text: 'Ich: gebe',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G']
      },
      Du: {
        text: 'Du:  gibst',
        colors: ['W', 'W', 'W', 'W', 'W', 'Y', 'Y', 'Y', 'Y', 'Y']
      },
      ErSieEs: {
        text: 'Er:  gibt',
        colors: ['W', 'W', 'W', 'W', 'W', 'Y', 'Y', 'Y', 'Y']
      },
      Wir: {
        text: 'Wir: geben',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G']
      },
      Ihr: {
        text: 'Ihr: gebt',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G']
      },
      Sie: {
        text: 'Sie: geben',
        colors: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'G', 'G']
      }
    });
  });
});
