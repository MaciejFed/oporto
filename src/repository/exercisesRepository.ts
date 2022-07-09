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
  fitIn: FitIn[];
};

export type FitIn = {
  prefix: string;
  answer: string;
  suffix: string;
  explanation?: string;
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
        'Eles/Elas/Vocēs': 'são'
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
  ],
  fitIn: [
    {
      prefix: 'Eu',
      answer: 'tomo',
      suffix: 'um chá.',
      explanation: '"de" - Inidca origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Angola.',
      explanation: '"de" - Inidca origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Paris.',
      explanation: '"de" - Inidca origem'
    },
    {
      prefix: 'Moro',
      answer: 'em',
      suffix: 'Cascais.',
      explanation: '"em" - Inidca localização'
    },
    {
      prefix: '',
      answer: 'em',
      suffix: 'que rua mora?',
      explanation: '"em" - Inidca localização'
    },
    {
      prefix: 'Moro',
      answer: 'na',
      suffix: 'Avenida do Mar.',
      explanation: '"na" - em + a'
    },
    {
      prefix: 'Eles estudam',
      answer: 'na',
      suffix: 'universidade.',
      explanation: '"na" - em + a'
    },
    {
      prefix: 'Moro',
      answer: 'no',
      suffix: 'número treze.',
      explanation: '"no" - em + o'
    },
    {
      prefix: 'O Paulo estuda',
      answer: 'no',
      suffix: 'Japão.',
      explanation: '"no" - em + o'
    }
  ]
};

export function readAll() {
  return db;
}
