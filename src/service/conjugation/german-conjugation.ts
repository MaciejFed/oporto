import { type } from 'os';
import { Color, ColoredText } from '../../io/output';
import { GermanPerson, GermanVerb } from '../../repository/german-exercises-repository';

type Conjugation = Record<GermanPerson, string>;

export type GermanPersonWithInf = keyof typeof GermanPerson | 'Inf';

export function parseGermanVerb(verb: GermanVerb): Record<GermanPersonWithInf, ColoredText> {
  const standardConjugation = followsStandardConjugation(verb);
  const endsWithEn = verb.infinitive.endsWith('en');
  const verbStem = (endsWithEn ? verb.infinitive.slice(0, -2) : verb.infinitive.slice(0, -1)).length + 5;

  const infText = `Inf: ${verb.infinitive}`;
  const ichText = `Ich: ${verb.presentSimple.Ich}`;
  const duText = `Du:  ${verb.presentSimple.Du}`;
  const erText = `Er:  ${verb.presentSimple['Er/Sie/Es']}`;
  const wirText = `Wir: ${verb.presentSimple.Wir}`;
  const ihrText = `Ihr: ${verb.presentSimple.Ihr}`;
  const sieText = `Sie: ${verb.presentSimple.Sie}`;
  return {
    Inf: new ColoredText(
      infText,
      createColorArray({ white: infText.length - (endsWithEn ? 2 : 1), blue: endsWithEn ? 2 : 1 })
    ),
    Ich: new ColoredText(
      ichText,
      standardConjugation[GermanPerson.Ich]
        ? createColorArray({ white: verbStem, green: 1 })
        : createColorArray({ white: 5, yellow: ichText.length - 5 })
    ),
    Du: new ColoredText(
      duText,
      standardConjugation[GermanPerson.Du]
        ? createColorArray({ white: verbStem, green: 2 })
        : createColorArray({ white: 5, yellow: duText.length - 5 })
    ),
    ErSieEs: new ColoredText(
      erText,
      standardConjugation[GermanPerson.ErSieEs]
        ? createColorArray({ white: verbStem, green: 1 })
        : createColorArray({ white: 5, yellow: erText.length - 5 })
    ),
    Wir: new ColoredText(
      wirText,
      standardConjugation[GermanPerson.Wir]
        ? createColorArray({ white: verbStem, green: 2 })
        : createColorArray({ white: 5, yellow: wirText.length - 5 })
    ),
    Ihr: new ColoredText(
      ihrText,
      standardConjugation[GermanPerson.Ihr]
        ? createColorArray({ white: verbStem, green: 1 })
        : createColorArray({ white: 5, yellow: ihrText.length - 5 })
    ),
    Sie: new ColoredText(
      sieText,
      standardConjugation[GermanPerson.Sie]
        ? createColorArray({ white: verbStem, green: 2 })
        : createColorArray({ white: 5, yellow: sieText.length - 5 })
    )
  };
}

function followsStandardConjugation({ infinitive, presentSimple }: GermanVerb): Record<GermanPerson, boolean> {
  const verbStem = infinitive.endsWith('en') ? infinitive.slice(0, -2) : infinitive.slice(0, -1);

  const expectedConjugation: Conjugation = {
    Ich: `${verbStem}e`,
    Du: `${verbStem}st`,
    'Er/Sie/Es': `${verbStem}t`,
    Wir: `${verbStem}en`,
    Ihr: `${verbStem}t`,
    Sie: `${verbStem}en`
  };
  return (Object.keys(presentSimple) as Array<keyof typeof GermanPerson>).reduce((acc, curr) => {
    const follows = expectedConjugation[curr as GermanPerson] === presentSimple[curr as GermanPerson];
    return {
      ...acc,
      [curr]: follows
    };
  }, {}) as Record<GermanPerson, boolean>;
}

interface CreateColorArrayArg {
  white: number;
  green?: number;
  yellow?: number;
  blue?: number;
}

function createColorArray({ white, green, yellow, blue }: CreateColorArrayArg): Color[] {
  return Array(white)
    .fill(Color.W)
    .concat(Array(green ?? 0).fill(Color.G))
    .concat(Array(yellow ?? 0).fill(Color.Y))
    .concat(Array(blue ?? 0).fill(Color.B));
}
