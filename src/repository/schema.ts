import { Person } from '../service/verb';

export type RegularVerb = string;

export type IrregularVerb = { [key in Person]: string } & { Infinitive: string };

type NounGender = 'male' | 'female';

type PortugueseNoun = {
  word: string;
  gender: NounGender;
};

type Verbs = {
  regular: RegularVerb[];
  irregular: IrregularVerb[];
};

export type Translation = {
  english: string;
  portuguese: PortugueseNoun;
};

export type Schema = {
  verbs: Verbs;
  translations: Translation[];
};

export const db: Schema = {
  verbs: {
    regular: ['falar', 'comer', 'abrir'],
    irregular: [
      {
        Infinitive: 'ser',
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Vocé': 'é',
        Nós: 'somos',
        'Eles/Elas/Vocēs': 'sāo'
      }
    ]
  },
  translations: [
    {
      english: 'girlfriend',
      portuguese: {
        word: 'namorada',
        gender: 'female'
      }
    },
    {
      english: 'tea',
      portuguese: {
        word: 'chá',
        gender: 'male'
      }
    }
  ]
};
