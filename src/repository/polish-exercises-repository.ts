/* eslint-disable quotes */

export enum PolishPerson {
  Ja = 'Ja',
  Ty = 'Ty',
  'On/Ona/Ono' = 'On/Ona/Ono',
  My = 'My',
  Wy = 'Wy',
  'Oni/One' = 'Oni/One'
}

export type PolishVerb = {
  english: string;
  infinitive: string;
  presentSimple: { [key in PolishPerson]: string };
  past?: { [key in PolishPerson]: string };
};

export type PolishNoun = {
  english: string;
  polish: string;
};

export type PolishOther = {
  english: string;
  polish: string;
};

export enum PolishGender {
  męska = 'męska',
  żeńska = 'żeńska',
  nijaki = 'nijaki',
  mnoga = 'mnoga'
}

export type GenderWord = {
  maskulinum: string;
  femininum: string;
  neutrum: string;
  plural?: string;
};

export const Genders = [];

export enum PolishCase {
  mianownik = 'mianownik'
}

export type PolishCaseWord = {
  english: string;
  german: {
    [key in PolishCase]?: GenderWord | string;
  };
};

export type Schema = {
  verbs: PolishVerb[];
  others: PolishOther[];
  nouns: PolishNoun[];
  case: PolishCaseWord[];
};

export const db: Schema = {
  verbs: [
    {
      infinitive: 'lubić',
      english: 'to like',
      presentSimple: {
        Ja: 'lubię',
        Ty: 'lubisz',
        'On/Ona/Ono': 'lubi',
        My: 'lubimy',
        Wy: 'lubicie',
        'Oni/One': 'lubią'
      }
    },
    {
      infinitive: 'mówić',
      english: 'to speak',
      presentSimple: {
        Ja: 'mówię',
        Ty: 'mówisz',
        'On/Ona/Ono': 'mówi',
        My: 'mówimy',
        Wy: 'mówicie',
        'Oni/One': 'mówią'
      }
    },
    {
      infinitive: 'być',
      english: 'to be',
      presentSimple: {
        Ja: 'jestem',
        Ty: 'jesteś',
        'On/Ona/Ono': 'jest',
        My: 'jesteśmy',
        Wy: 'jesteście',
        'Oni/One': 'są'
      }
    },
    {
      infinitive: 'dziękować',
      english: 'to thank',
      presentSimple: {
        Ja: 'dziękuję',
        Ty: 'dziękujesz',
        'On/Ona/Ono': 'dziękuje',
        My: 'dziękujemy',
        Wy: 'dziękujecie',
        'Oni/One': 'dziękują'
      }
    },
    {
      infinitive: 'robić',
      english: 'to do',
      presentSimple: {
        Ja: 'robię',
        Ty: 'robisz',
        'On/Ona/Ono': 'robi',
        My: 'robimy',
        Wy: 'robicie',
        'Oni/One': 'robią'
      }
    },
    {
      infinitive: 'potrzebować',
      english: 'to need',
      presentSimple: {
        Ja: 'potrzebuję',
        Ty: 'potrzebujesz',
        'On/Ona/Ono': 'potrzebuje',
        My: 'potrzebujemy',
        Wy: 'potrzebujecie',
        'Oni/One': 'potrzebują'
      }
    },
    {
      infinitive: 'wiedzieć',
      english: 'to know',
      presentSimple: {
        Ja: 'wiem',
        Ty: 'wiesz',
        'On/Ona/Ono': 'wie',
        My: 'wiemy',
        Wy: 'wiecie',
        'Oni/One': 'wiedzą'
      }
    },
    {
      infinitive: 'mieć',
      english: 'to have',
      presentSimple: {
        Ja: 'mam',
        Ty: 'masz',
        'On/Ona/Ono': 'ma',
        My: 'mamy',
        Wy: 'macie',
        'Oni/One': 'mają'
      }
    },
    {
      infinitive: 'móc',
      english: 'to be able to',
      presentSimple: {
        Ja: 'mogę',
        Ty: 'możesz',
        'On/Ona/Ono': 'może',
        My: 'możemy',
        Wy: 'możecie',
        'Oni/One': 'mogą'
      }
    },
    {
      infinitive: 'jeść',
      english: 'to eat',
      presentSimple: {
        Ja: 'jem',
        Ty: 'jesz',
        'On/Ona/Ono': 'je',
        My: 'jemy',
        Wy: 'jecie',
        'Oni/One': 'jedzą'
      }
    }
  ],
  nouns: [
    {
      english: 'lunch',
      polish: 'obiad'
    },
    {
      english: 'dinner',
      polish: 'kolacja'
    },
    {
      english: 'breakfast',
      polish: 'śniadanie'
    },
    {
      english: 'day',
      polish: 'dzień'
    },
    {
      english: 'night',
      polish: 'noc'
    },
    {
      english: 'bread',
      polish: 'chleb'
    },
    {
      english: 'coffee',
      polish: 'kawa'
    },
    {
      english: 'tea',
      polish: 'herbata'
    },
    {
      english: 'city',
      polish: 'miasto'
    },
    {
      english: 'computer',
      polish: 'komputer'
    },
    {
      english: 'soup',
      polish: 'zupa'
    },
    {
      english: 'water',
      polish: 'woda'
    },
    {
      english: 'fish',
      polish: 'ryba'
    },
    {
      english: 'cheese',
      polish: 'ser'
    },
    {
      english: 'house',
      polish: 'dom'
    },
    {
      english: 'sister',
      polish: 'siostra'
    },
    {
      english: 'brother',
      polish: 'brat'
    },
    {
      english: 'minute',
      polish: 'minuta'
    },
    {
      english: 'mug',
      polish: 'kubek'
    },
    {
      english: 'idea',
      polish: 'pomysł'
    },
    {
      english: 'head',
      polish: 'głowa'
    },
    {
      english: 'movie',
      polish: 'film'
    },
    {
      english: 'hour',
      polish: 'godzina'
    },
    {
      english: 'bagpack',
      polish: 'plecak'
    },
    {
      english: 'road',
      polish: 'droga'
    },
    {
      english: 'color',
      polish: 'kolor'
    },
    {
      english: 'eye',
      polish: 'oko'
    }
  ],
  others: [
    {
      polish: 'proszę',
      english: 'please'
    },
    {
      polish: 'miło poznać',
      english: 'nice to meet you'
    },
    {
      polish: 'pyszne',
      english: 'delicious'
    },
    {
      polish: 'bardzo',
      english: 'very'
    },
    {
      polish: 'smacznego',
      english: 'enjoy your meal'
    },
    {
      polish: 'miło widzieć',
      english: 'nice to see you'
    },
    {
      polish: 'ja',
      english: 'I'
    },
    {
      polish: 'ty',
      english: 'you - singular'
    },
    {
      polish: 'on',
      english: 'he'
    },
    {
      polish: 'ona',
      english: 'she'
    },
    {
      polish: 'ono',
      english: 'it'
    },
    {
      polish: 'my',
      english: 'we'
    },
    {
      polish: 'wy',
      english: 'you - plural'
    },
    {
      polish: 'oni',
      english: 'they - male'
    },
    {
      polish: 'one',
      english: 'they - female'
    },
    {
      polish: 'tak',
      english: 'yes'
    },
    {
      polish: 'nie',
      english: 'no'
    },
    {
      polish: 'co',
      english: 'what'
    },
    {
      polish: 'kiedy',
      english: 'when'
    },
    {
      polish: 'kto',
      english: 'who'
    },
    {
      polish: 'jak',
      english: 'how'
    },
    {
      polish: 'nigdy',
      english: 'never'
    },
    {
      polish: 'zawsze',
      english: 'always'
    },
    {
      polish: 'i',
      english: 'and'
    },
    {
      polish: 'albo',
      english: 'or'
    },
    {
      polish: 'dobranoc',
      english: 'goodnight'
    },
    {
      polish: 'dzień dobry',
      english: 'good day'
    },
    {
      polish: 'cześć',
      english: 'hi'
    },
    {
      polish: 'bardzo',
      english: 'very'
    },
    {
      polish: 'więc',
      english: 'so'
    }
  ],
  case: []
};

export function readAllPL() {
  return db;
}
