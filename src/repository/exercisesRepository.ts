import { Person } from '../service/verb';

export type RegularVerb = string;

export type IrregularVerb = { [key in Person]: string } & { Infinitive: string };

type Verbs = {
  regular: RegularVerb[];
  irregular: IrregularVerb[];
};

type NounGender = 'male' | 'female';

type SentenceType = 'question' | 'statement';

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

export type Sentence = {
  english: string;
  portuguese: string;
  exerciseLevel: number;
  sentenceType: SentenceType;
};

export type Schema = {
  verbs: Verbs;
  nouns: Noun[];
  sentences: Sentence[];
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
    regular: ['falar', 'comer', 'abrir', 'estudar'],
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
  sentences: [
    {
      english: 'How are you?',
      portuguese: 'Como estás?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Good idea',
      portuguese: 'Boa ideia',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'All good',
      portuguese: 'Tudo bem',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Until tomorrow/See you tomorrow',
      portuguese: 'Até amanhã',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Do you want a coffee?',
      portuguese: 'Tomas um café?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      // eslint-disable-next-line quotes
      english: "I'm Marta",
      portuguese: 'Sou a Marta',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Nice to meet you',
      portuguese: 'Muito gosto',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'And you?',
      portuguese: 'E tu?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Sandra is a studend',
      portuguese: 'A Sandra é estudante',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Andre and Paula are friends',
      portuguese: 'O Andre e a Paula são amigos',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Paulo is a friend of Vasco',
      portuguese: 'O Paulo é a amigo do Vasco',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Professor Vasco is very simpatic',
      portuguese: 'O professor Vasco é muito simpático',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'What a surprise',
      portuguese: 'Que surpesa',
      sentenceType: 'statement',
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
