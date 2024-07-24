/* eslint-disable quotes */

export enum PolishPerson {
  Ja = 'Ja',
  Ty = 'Ty',
  OnOnaOno = 'On/Ona/Ono',
  My = 'My',
  Wy = 'Wy',
  OniOne = 'Oni/One'
}

export type PolishVerb = {
  english: string;
  infinitive: string;
  presentSimple: { [key in PolishPerson]: string };
  past?: { [key in PolishPerson]: string };
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
  case: PolishCaseWord[];
};

export const db: Schema = {
  verbs: [
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
    }
  ],
  others: [
    {
      polish: 'tak',
      english: 'yes'
    },
    {
      polish: 'nie',
      english: 'no'
    }
  ],
  case: []
};

export function readAllDE() {
  return db;
}
