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
      english: 'factory',
      german: {
        singular: 'Fabrik',
        gender: 'feminine'
      }
    },
    {
      english: 'schnitzel',
      german: {
        singular: 'Schnitzel',
        gender: 'none'
      }
    },
    {
      english: 'soup',
      german: {
        singular: 'Suppe',
        gender: 'feminine'
      }
    },
    {
      english: 'piece',
      german: {
        singular: 'Stück',
        gender: 'none'
      }
    },
    {
      english: 'lemon',
      german: {
        singular: 'Zitrone',
        gender: 'feminine'
      }
    },
    {
      english: 'beef',
      german: {
        singular: 'Rind',
        gender: 'none'
      }
    },
    {
      english: 'tip',
      german: {
        singular: 'Trinkgeld',
        gender: 'none'
      }
    },
    {
      english: 'spoon',
      german: {
        singular: 'Löffel',
        gender: 'masculine'
      }
    },
    {
      english: 'knife',
      german: {
        singular: 'Messer',
        gender: 'none'
      }
    },
    {
      english: 'plate',
      german: {
        singular: 'Teller',
        gender: 'masculine'
      }
    },
    {
      english: 'fork',
      german: {
        singular: 'Gabel',
        gender: 'feminine'
      }
    },
    {
      english: 'pot',
      german: {
        singular: 'Topf',
        gender: 'masculine'
      }
    },
    {
      english: 'glass',
      german: {
        singular: 'Glas',
        gender: 'none'
      }
    },
    {
      english: 'cup',
      german: {
        singular: 'Tasse',
        gender: 'feminine'
      }
    },
    {
      english: 'can',
      german: {
        singular: 'Kanne',
        gender: 'feminine'
      }
    },
    {
      english: 'bowl',
      german: {
        singular: 'Schüssel',
        gender: 'feminine'
      }
    },
    {
      english: 'pan',
      german: {
        singular: 'Pfanne',
        gender: 'feminine'
      }
    },
    {
      english: 'kind',
      german: {
        singular: 'Art',
        gender: 'feminine'
      }
    },
    {
      english: 'muesli',
      german: {
        singular: 'Müsli',
        gender: 'none'
      }
    },
    {
      english: 'fruit',
      german: {
        singular: 'Frucht',
        gender: 'feminine'
      }
    },
    {
      english: 'starter',
      german: {
        singular: 'Vorspeise',
        gender: 'feminine'
      }
    },
    {
      english: 'percent',
      german: {
        singular: 'Prozent',
        gender: 'none'
      }
    },
    {
      english: 'market',
      german: {
        singular: 'Markt',
        gender: 'masculine'
      }
    },
    {
      english: 'product',
      german: {
        singular: 'Produkt',
        gender: 'none'
      }
    },
    {
      english: 'environment',
      german: {
        singular: 'Umgebung',
        gender: 'feminine'
      }
    },
    {
      english: 'steak',
      german: {
        singular: 'Steak',
        gender: 'none'
      }
    },
    {
      english: 'alcohol',
      german: {
        singular: 'Alkohol',
        gender: 'masculine'
      }
    },
    {
      english: 'spoon',
      german: {
        singular: 'Löffel',
        gender: 'masculine'
      }
    },
    {
      english: 'knife',
      german: {
        singular: 'Messer',
        gender: 'none'
      }
    },
    {
      english: 'plate',
      german: {
        singular: 'Teller',
        gender: 'masculine'
      }
    },
    {
      english: 'fork',
      german: {
        singular: 'Gabel',
        gender: 'feminine'
      }
    },
    {
      english: 'quartet',
      german: {
        singular: 'Quartett',
        gender: 'none'
      }
    },
    {
      english: 'pot',
      german: {
        singular: 'Topf',
        gender: 'masculine'
      }
    },
    {
      english: 'can',
      german: {
        singular: 'Kanne',
        gender: 'feminine'
      }
    },
    {
      english: 'bowl',
      german: {
        singular: 'Schüssel',
        gender: 'feminine'
      }
    },
    {
      english: 'pan',
      german: {
        singular: 'Pfanne',
        gender: 'feminine'
      }
    },
    {
      english: 'appetite',
      german: {
        singular: 'Appetit',
        gender: 'masculine'
      }
    },
    {
      english: 'diet',
      german: {
        singular: 'Diät',
        gender: 'feminine'
      }
    },
    {
      english: 'dessert',
      german: {
        singular: 'Nachspeise',
        gender: 'feminine'
      }
    },
    {
      english: 'honey',
      german: {
        singular: 'Honig',
        gender: 'masculine'
      }
    },
    {
      english: 'cup',
      german: {
        singular: 'Tasse',
        gender: 'feminine'
      }
    },
    {
      english: 'lunch',
      german: {
        singular: 'Mittagessen',
        gender: 'none'
      }
    },
    {
      english: 'canteen',
      german: {
        singular: 'Kantine',
        gender: 'feminine'
      }
    },
    {
      english: 'court',
      german: {
        singular: 'Gericht',
        gender: 'none'
      }
    },
    {
      english: 'habit',
      german: {
        singular: 'Gewohnheit',
        gender: 'feminine'
      }
    },
    {
      english: 'jamBE',
      german: {
        singular: 'Marmelade',
        gender: 'feminine'
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
    },
    {
      english: 'to roast',
      infinitive: 'braten',
      presentSimple: {
        Ich: 'brate',
        Du: 'brätst',
        'Er/Sie/Es': 'brät',
        Wir: 'braten',
        Ihr: 'bratet',
        Sie: 'braten'
      }
    },
    {
      english: 'to agree',
      infinitive: 'stimmen',
      presentSimple: {
        Ich: 'stimme',
        Du: 'stimmst',
        'Er/Sie/Es': 'stimmt',
        Wir: 'stimmen',
        Ihr: 'stimmt',
        Sie: 'stimmen'
      }
    },
    {
      english: 'to take over',
      infinitive: 'übernehmen',
      presentSimple: {
        Ich: 'übernehme',
        Du: 'übernimmst',
        'Er/Sie/Es': 'übernimmt',
        Wir: 'übernehmen',
        Ihr: 'übernehmt',
        Sie: 'übernehmen'
      }
    },
    {
      english: 'to smell',
      infinitive: 'riechen',
      presentSimple: {
        Ich: 'rieche',
        Du: 'riechst',
        'Er/Sie/Es': 'riecht',
        Wir: 'riechen',
        Ihr: 'riecht',
        Sie: 'riechen'
      }
    },
    {
      english: 'to take off',
      infinitive: 'ausziehen',
      presentSimple: {
        Ich: 'ziehe aus',
        Du: 'ziehst aus',
        'Er/Sie/Es': 'zieht aus',
        Wir: 'ziehen aus',
        Ihr: 'zieht aus',
        Sie: 'ziehen aus'
      }
    },
    {
      english: 'to surprise',
      infinitive: 'überraschen',
      presentSimple: {
        Ich: 'überrasche',
        Du: 'überraschst',
        'Er/Sie/Es': 'überrascht',
        Wir: 'überraschen',
        Ihr: 'überrascht',
        Sie: 'überraschen'
      }
    },
    {
      english: 'to guide',
      infinitive: 'leiten',
      presentSimple: {
        Ich: 'leite',
        Du: 'leitest',
        'Er/Sie/Es': 'leitet',
        Wir: 'leiten',
        Ihr: 'leitet',
        Sie: 'leiten'
      }
    },
    {
      english: 'to be against',
      infinitive: 'gegen',
      presentSimple: {
        Ich: 'gege',
        Du: 'gegst',
        'Er/Sie/Es': 'gegt',
        Wir: 'gegen',
        Ihr: 'gegt',
        Sie: 'gegen'
      }
    },
    {
      english: 'to plan',
      infinitive: 'planen',
      presentSimple: {
        Ich: 'plane',
        Du: 'planst',
        'Er/Sie/Es': 'plant',
        Wir: 'planen',
        Ihr: 'plant',
        Sie: 'planen'
      }
    }
  ]
};

export function readAllDE() {
  return db;
}
