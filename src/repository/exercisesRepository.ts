import { Person } from '../service/verb';

export type RegularVerb = string;

export type IrregularVerb = { [key in Person]: string } & { Infinitive: string };

type Verbs = {
  regular: RegularVerb[];
  irregular: IrregularVerb[];
};

type NounGender = 'male' | 'female';

type PortugueseNoun = {
  word: string;
  plurar?: string;
  gender: NounGender;
};

export type Noun = {
  english: string;
  portuguese: PortugueseNoun;
  exerciseLevel: number;
};

export type Schema = {
  verbs: Verbs;
  nouns: Noun[];
  fitIn: FitIn[];
};

export type FitIn = {
  prefix: string;
  answer: string;
  suffix: string;
  explanation?: string;
  exerciseLevel: number;
};

export const db: Schema = {
  verbs: {
    regular: ['falar', 'comer', 'abrir'],
    irregular: [
      {
        Infinitive: 'ser',
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Você': 'é',
        Nós: 'somos',
        'Eles/Elas/Vocēs': 'são'
      },
      {
        Infinitive: 'estar',
        Eu: 'estou',
        Tu: 'estás',
        'Ela/Ele/Você': 'está',
        Nós: 'estamos',
        'Eles/Elas/Vocēs': 'estão'
      },
      {
        Infinitive: 'ir',
        Eu: 'vou',
        Tu: 'vais',
        'Ela/Ele/Você': 'vai',
        Nós: 'vamos',
        'Eles/Elas/Vocēs': 'vão'
      },
      {
        Infinitive: 'ter',
        Eu: 'tenho',
        Tu: 'tens   ',
        'Ela/Ele/Você': 'tem',
        Nós: 'temos',
        'Eles/Elas/Vocēs': 'têm'
      },
      {
        Infinitive: 'querer',
        Eu: 'quero',
        Tu: 'queres   ',
        'Ela/Ele/Você': 'quer',
        Nós: 'queremos',
        'Eles/Elas/Vocēs': 'querem'
      },
      {
        Infinitive: 'ver',
        Eu: 'vejo',
        Tu: 'vês   ',
        'Ela/Ele/Você': 'vê',
        Nós: 'vemos',
        'Eles/Elas/Vocēs': 'vêem'
      },
      {
        Infinitive: 'fazer',
        Eu: 'faço',
        Tu: 'fazes   ',
        'Ela/Ele/Você': 'faz',
        Nós: 'fazemos',
        'Eles/Elas/Vocēs': 'fazem'
      }
    ]
  },
  nouns: [
    {
      english: 'girlfriend',
      portuguese: {
        word: 'namorada',
        plurar: 'namoradas',
        gender: 'female'
      },
      exerciseLevel: 1
    },
    {
      english: 'tea',
      portuguese: {
        word: 'chá',
        gender: 'male'
      },
      exerciseLevel: 1
    }
  ],
  fitIn: [
    {
      prefix: 'Eu',
      answer: 'tomo',
      suffix: 'um chá.',
      explanation: '"de" - Indica origem',
      exerciseLevel: 1
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Angola.',
      explanation: '"de" - Indica origem',
      exerciseLevel: 1
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Paris.',
      explanation: '"de" - Indica origem',
      exerciseLevel: 1
    },
    {
      prefix: 'Moro',
      answer: 'em',
      suffix: 'Cascais.',
      explanation: '"em" - Indica localização',
      exerciseLevel: 1
    },
    {
      prefix: '',
      answer: 'em',
      suffix: 'que rua mora?',
      explanation: '"em" - Indica localização',
      exerciseLevel: 1
    },
    {
      prefix: 'Moro',
      answer: 'na',
      suffix: 'Avenida do Mar.',
      explanation: '"na" - em + a',
      exerciseLevel: 1
    },
    {
      prefix: 'Eles estudam',
      answer: 'na',
      suffix: 'universidade.',
      explanation: '"na" - em + a',
      exerciseLevel: 1
    },
    {
      prefix: 'Moro',
      answer: 'no',
      suffix: 'número treze.',
      explanation: '"no" - em + o',
      exerciseLevel: 1
    },
    {
      prefix: 'O Paulo estuda',
      answer: 'no',
      suffix: 'Japão.',
      explanation: '"no" - em + o',
      exerciseLevel: 1
    }
  ]
};

export function readAll() {
  return db;
}
