/* eslint-disable quotes */

export type WordTypes = GermanNoun;

type NounGender = 'masculine' | 'feminine' | 'none';

export enum GermanPerson {
  Ich = 'Ich',
  Du = 'Du',
  ErSieEs = 'Er/Sie/Es',
  Wir = 'Wir',
  Ihr = 'Ihr',
  Sie = 'Sie'
}

export type GermanVerb = {
  english: string;
  infinitive: string;
  presentSimple: { [key in GermanPerson]: string };
  pastPerfect?: { [key in GermanPerson]: string };
};

export type GermanNoun = {
  english: string;
  german: {
    singular: string;
    plural?: string;
    gender: NounGender;
  };
};

export type Schema = {
  nouns: GermanNoun[];
  verbs: GermanVerb[];
};

export const db: Schema = {
  nouns: [
    {
      english: 'house',
      german: {
        singular: 'Haus',
        plural: 'Häuser',
        gender: 'none'
      }
    },
    {
      english: 'time',
      german: {
        singular: 'Zeit',
        plural: 'Zeiten',
        gender: 'feminine'
      }
    },
    {
      english: 'man',
      german: {
        singular: 'Mann',
        plural: 'Männer',
        gender: 'masculine'
      }
    },
    {
      english: 'woman',
      german: {
        singular: 'Frau',
        plural: 'Frauen',
        gender: 'feminine'
      }
    },
    {
      english: 'child',
      german: {
        singular: 'Kind',
        plural: 'Kinder',
        gender: 'none'
      }
    },
    {
      english: 'day',
      german: {
        singular: 'Tag',
        plural: 'Tage',
        gender: 'masculine'
      }
    },
    {
      english: 'year',
      german: {
        singular: 'Jahr',
        plural: 'Jahre',
        gender: 'none'
      }
    },
    {
      english: 'hand',
      german: {
        singular: 'Hand',
        plural: 'Hände',
        gender: 'feminine'
      }
    },
    {
      english: 'eye',
      german: {
        singular: 'Auge',
        plural: 'Augen',
        gender: 'none'
      }
    },
    {
      english: 'way',
      german: {
        singular: 'Weg',
        plural: 'Wege',
        gender: 'masculine'
      }
    },
    {
      english: 'car',
      german: {
        singular: 'Auto',
        plural: 'Autos',
        gender: 'none'
      }
    },
    {
      english: 'friend',
      german: {
        singular: 'Freund',
        plural: 'Freunde',
        gender: 'masculine'
      }
    },
    {
      english: 'water',
      german: {
        singular: 'Wasser',
        plural: 'Wasser',
        gender: 'none'
      }
    },
    {
      english: 'city',
      german: {
        singular: 'Stadt',
        plural: 'Städte',
        gender: 'feminine'
      }
    },
    {
      english: 'country',
      german: {
        singular: 'Land',
        plural: 'Länder',
        gender: 'none'
      }
    },
    {
      english: 'word',
      german: {
        singular: 'Wort',
        plural: 'Wörter',
        gender: 'none'
      }
    },
    {
      english: 'family',
      german: {
        singular: 'Familie',
        plural: 'Familien',
        gender: 'feminine'
      }
    },
    {
      english: 'head',
      german: {
        singular: 'Kopf',
        plural: 'Köpfe',
        gender: 'masculine'
      }
    },
    {
      english: 'father',
      german: {
        singular: 'Vater',
        plural: 'Väter',
        gender: 'masculine'
      }
    },
    {
      english: 'mother',
      german: {
        singular: 'Mutter',
        plural: 'Mütter',
        gender: 'feminine'
      }
    },
    {
      english: 'work',
      german: {
        singular: 'Arbeit',
        plural: 'Arbeiten',
        gender: 'feminine'
      }
    },
    {
      english: 'life',
      german: {
        singular: 'Leben',
        plural: 'Leben',
        gender: 'none'
      }
    },
    {
      english: 'world',
      german: {
        singular: 'Welt',
        plural: 'Welten',
        gender: 'feminine'
      }
    },
    {
      english: 'person',
      german: {
        singular: 'Person',
        plural: 'Personen',
        gender: 'feminine'
      }
    },
    {
      english: 'moment',
      german: {
        singular: 'Moment',
        plural: 'Momente',
        gender: 'masculine'
      }
    },
    {
      english: 'school',
      german: {
        singular: 'Schule',
        plural: 'Schulen',
        gender: 'feminine'
      }
    },
    {
      english: 'history',
      german: {
        singular: 'Geschichte',
        plural: 'Geschichten',
        gender: 'feminine'
      }
    },
    {
      english: 'war',
      german: {
        singular: 'Krieg',
        plural: 'Kriege',
        gender: 'masculine'
      }
    },
    {
      english: 'space',
      german: {
        singular: 'Raum',
        plural: 'Räume',
        gender: 'masculine'
      }
    },
    {
      english: 'face',
      german: {
        singular: 'Gesicht',
        plural: 'Gesichter',
        gender: 'none'
      }
    },
    {
      english: 'night',
      german: {
        singular: 'Nacht',
        plural: 'Nächte',
        gender: 'feminine'
      }
    },
    {
      english: 'book',
      german: {
        singular: 'Buch',
        plural: 'Bücher',
        gender: 'none'
      }
    },
    {
      english: 'end',
      german: {
        singular: 'Ende',
        plural: 'Enden',
        gender: 'none'
      }
    },
    {
      english: 'group',
      german: {
        singular: 'Gruppe',
        plural: 'Gruppen',
        gender: 'feminine'
      }
    },
    {
      english: 'heart',
      german: {
        singular: 'Herz',
        plural: 'Herzen',
        gender: 'none'
      }
    },
    {
      english: 'sun',
      german: {
        singular: 'Sonne',
        plural: 'Sonnen',
        gender: 'feminine'
      }
    },
    {
      english: 'brother',
      german: {
        singular: 'Bruder',
        plural: 'Brüder',
        gender: 'masculine'
      }
    },
    {
      english: 'sister',
      german: {
        singular: 'Schwester',
        plural: 'Schwestern',
        gender: 'feminine'
      }
    },
    {
      english: 'question',
      german: {
        singular: 'Frage',
        plural: 'Fragen',
        gender: 'feminine'
      }
    },
    {
      english: 'answer',
      german: {
        singular: 'Antwort',
        plural: 'Antworten',
        gender: 'feminine'
      }
    },
    {
      english: 'love',
      german: {
        singular: 'Liebe',
        plural: 'Lieben',
        gender: 'feminine'
      }
    },
    {
      english: 'game',
      german: {
        singular: 'Spiel',
        plural: 'Spiele',
        gender: 'none'
      }
    },
    {
      english: 'view',
      german: {
        singular: 'Bild',
        plural: 'Bilder',
        gender: 'none'
      }
    },
    {
      english: 'science',
      german: {
        singular: 'Wissenschaft',
        plural: 'Wissenschaften',
        gender: 'feminine'
      }
    },
    {
      english: 'music',
      german: {
        singular: 'Musik',
        plural: 'Musiken',
        gender: 'feminine'
      }
    },
    {
      english: 'idea',
      german: {
        singular: 'Idee',
        plural: 'Ideen',
        gender: 'feminine'
      }
    },
    {
      english: 'problem',
      german: {
        singular: 'Problem',
        plural: 'Probleme',
        gender: 'none'
      }
    },
    {
      english: 'newspaper',
      german: {
        singular: 'Zeitung',
        plural: 'Zeitungen',
        gender: 'feminine'
      }
    },
    {
      english: 'week',
      german: {
        singular: 'Woche',
        plural: 'Wochen',
        gender: 'feminine'
      }
    },
    {
      english: 'table',
      german: {
        singular: 'Tisch',
        plural: 'Tische',
        gender: 'masculine'
      }
    }
  ],
  verbs: [
    {
      english: 'to be',
      infinitive: 'sein',
      presentSimple: {
        Ich: 'bin',
        Du: 'bist',
        'Er/Sie/Es': 'ist',
        Wir: 'sind',
        Ihr: 'seid',
        Sie: 'sind'
      }
    },
    {
      english: 'to have',
      infinitive: 'haben',
      presentSimple: {
        Ich: 'habe',
        Du: 'hast',
        'Er/Sie/Es': 'hat',
        Wir: 'haben',
        Ihr: 'habt',
        Sie: 'haben'
      }
    },
    {
      english: 'will',
      infinitive: 'werden',
      presentSimple: {
        Ich: 'werde',
        Du: 'wirst',
        'Er/Sie/Es': 'wird',
        Wir: 'werden',
        Ihr: 'werdet',
        Sie: 'werden'
      }
    },
    {
      english: 'to can',
      infinitive: 'können',
      presentSimple: {
        Ich: 'kann',
        Du: 'kannst',
        'Er/Sie/Es': 'kann',
        Wir: 'können',
        Ihr: 'könnt',
        Sie: 'können'
      }
    },
    {
      english: 'to must',
      infinitive: 'müssen',
      presentSimple: {
        Ich: 'muss',
        Du: 'musst',
        'Er/Sie/Es': 'muss',
        Wir: 'müssen',
        Ihr: 'müsst',
        Sie: 'müssen'
      }
    },
    {
      english: 'to say',
      infinitive: 'sagen',
      presentSimple: {
        Ich: 'sage',
        Du: 'sagst',
        'Er/Sie/Es': 'sagt',
        Wir: 'sagen',
        Ihr: 'sagt',
        Sie: 'sagen'
      }
    },
    {
      english: 'to make',
      infinitive: 'machen',
      presentSimple: {
        Ich: 'mache',
        Du: 'machst',
        'Er/Sie/Es': 'macht',
        Wir: 'machen',
        Ihr: 'macht',
        Sie: 'machen'
      }
    },
    {
      english: 'to go',
      infinitive: 'gehen',
      presentSimple: {
        Ich: 'gehe',
        Du: 'gehst',
        'Er/Sie/Es': 'geht',
        Wir: 'gehen',
        Ihr: 'geht',
        Sie: 'gehen'
      }
    },
    {
      english: 'to want to',
      infinitive: 'wollen',
      presentSimple: {
        Ich: 'will',
        Du: 'willst',
        'Er/Sie/Es': 'will',
        Wir: 'wollen',
        Ihr: 'wollt',
        Sie: 'wollen'
      }
    },
    {
      english: 'to come',
      infinitive: 'kommen',
      presentSimple: {
        Ich: 'komme',
        Du: 'kommst',
        'Er/Sie/Es': 'kommt',
        Wir: 'kommen',
        Ihr: 'kommt',
        Sie: 'kommen'
      }
    },
    {
      english: 'to see',
      infinitive: 'sehen',
      presentSimple: {
        Ich: 'sehe',
        Du: 'siehst',
        'Er/Sie/Es': 'sieht',
        Wir: 'sehen',
        Ihr: 'seht',
        Sie: 'sehen'
      }
    },
    {
      english: 'to let',
      infinitive: 'lassen',
      presentSimple: {
        Ich: 'lasse',
        Du: 'lässt',
        'Er/Sie/Es': 'lässt',
        Wir: 'lassen',
        Ihr: 'lasst',
        Sie: 'lassen'
      }
    },
    {
      english: 'to give',
      infinitive: 'geben',
      presentSimple: {
        Ich: 'gebe',
        Du: 'gibst',
        'Er/Sie/Es': 'gibt',
        Wir: 'geben',
        Ihr: 'gebt',
        Sie: 'geben'
      }
    },
    {
      english: 'to find',
      infinitive: 'finden',
      presentSimple: {
        Ich: 'finde',
        Du: 'findest',
        'Er/Sie/Es': 'findet',
        Wir: 'finden',
        Ihr: 'findet',
        Sie: 'finden'
      }
    },
    {
      english: 'to take',
      infinitive: 'nehmen',
      presentSimple: {
        Ich: 'nehme',
        Du: 'nimmst',
        'Er/Sie/Es': 'nimmt',
        Wir: 'nehmen',
        Ihr: 'nehmt',
        Sie: 'nehmen'
      }
    },
    {
      english: 'to stand',
      infinitive: 'stehen',
      presentSimple: {
        Ich: 'stehe',
        Du: 'stehst',
        'Er/Sie/Es': 'steht',
        Wir: 'stehen',
        Ihr: 'steht',
        Sie: 'stehen'
      }
    },
    {
      english: 'to stay',
      infinitive: 'bleiben',
      presentSimple: {
        Ich: 'bleibe',
        Du: 'bleibst',
        'Er/Sie/Es': 'bleibt',
        Wir: 'bleiben',
        Ihr: 'bleibt',
        Sie: 'bleiben'
      }
    },
    {
      english: 'to do',
      infinitive: 'tun',
      presentSimple: {
        Ich: 'tue',
        Du: 'tust',
        'Er/Sie/Es': 'tut',
        Wir: 'tun',
        Ihr: 'tut',
        Sie: 'tun'
      }
    },
    {
      english: 'to speak',
      infinitive: 'sprechen',
      presentSimple: {
        Ich: 'spreche',
        Du: 'sprichst',
        'Er/Sie/Es': 'spricht',
        Wir: 'sprechen',
        Ihr: 'sprecht',
        Sie: 'sprechen'
      }
    },
    {
      english: 'to know',
      infinitive: 'wissen',
      presentSimple: {
        Ich: 'weiß',
        Du: 'weißt',
        'Er/Sie/Es': 'weiß',
        Wir: 'wissen',
        Ihr: 'wisst',
        Sie: 'wissen'
      }
    }
  ]
};

export function readAllDE() {
  return db;
}
