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
