import { Person } from '../service/verb';

export type RegularVerb = {
  english: string;
  portuguese: string;
};

export type IrregularVerb = { english: string } & { [key in Person]: string } & { Infinitive: string };

type Verbs = {
  regular: RegularVerb[];
  irregular: IrregularVerb[];
};

type NounGender = 'masculine' | 'feminine';

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
    regular: [
      {
        portuguese: 'falar',
        english: 'to speak'
      },
      {
        portuguese: 'comer',
        english: 'to eat'
      },
      {
        portuguese: 'abrir',
        english: 'to open'
      },
      {
        portuguese: 'estudar',
        english: 'to study'
      },
      {
        portuguese: 'achar',
        english: 'to think'
      },
      {
        portuguese: 'andar',
        english: 'to walk'
      },
      {
        portuguese: 'beber',
        english: 'to drink'
      },
      {
        portuguese: 'entrar',
        english: 'to enter'
      },
      {
        portuguese: 'morar',
        english: 'to live'
      },
      {
        portuguese: 'olhar',
        english: 'to look'
      }
    ],
    irregular: [
      {
        english: 'to be - long',
        Infinitive: 'ser',
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Você': 'é',
        Nós: 'somos',
        'Eles/Elas/Vocēs': 'são'
      },
      {
        english: 'to be - moment',
        Infinitive: 'estar',
        Eu: 'estou',
        Tu: 'estás',
        'Ela/Ele/Você': 'está',
        Nós: 'estamos',
        'Eles/Elas/Vocēs': 'estão'
      },
      {
        english: 'to go',
        Infinitive: 'ir',
        Eu: 'vou',
        Tu: 'vais',
        'Ela/Ele/Você': 'vai',
        Nós: 'vamos',
        'Eles/Elas/Vocēs': 'vão'
      },
      {
        english: 'to have',
        Infinitive: 'ter',
        Eu: 'tenho',
        Tu: 'tens   ',
        'Ela/Ele/Você': 'tem',
        Nós: 'temos',
        'Eles/Elas/Vocēs': 'têm'
      },
      {
        english: 'to want',
        Infinitive: 'querer',
        Eu: 'quero',
        Tu: 'queres   ',
        'Ela/Ele/Você': 'quer',
        Nós: 'queremos',
        'Eles/Elas/Vocēs': 'querem'
      },
      {
        english: 'to see',
        Infinitive: 'ver',
        Eu: 'vejo',
        Tu: 'vês   ',
        'Ela/Ele/Você': 'vê',
        Nós: 'vemos',
        'Eles/Elas/Vocēs': 'vêem'
      },
      {
        english: 'to do/make',
        Infinitive: 'fazer',
        Eu: 'faço',
        Tu: 'fazes   ',
        'Ela/Ele/Você': 'faz',
        Nós: 'fazemos',
        'Eles/Elas/Vocēs': 'fazem'
      },
      {
        english: 'to know',
        Infinitive: 'saber',
        Eu: 'sei',
        Tu: 'sabes   ',
        'Ela/Ele/Você': 'sabe',
        Nós: 'soubéramos',
        'Eles/Elas/Vocēs': 'souberam'
      },
      {
        english: 'to read',
        Infinitive: 'ler',
        Eu: 'leio',
        Tu: 'lês   ',
        'Ela/Ele/Você': 'lê',
        Nós: 'lemos',
        'Eles/Elas/Vocēs': 'leem'
      },
      {
        english: 'to say',
        Infinitive: 'dizer',
        Eu: 'digo',
        Tu: 'dizes   ',
        'Ela/Ele/Você': 'diz',
        Nós: 'dizemos',
        'Eles/Elas/Vocēs': 'dizem'
      },
      {
        english: 'can',
        Infinitive: 'poder',
        Eu: 'posso',
        Tu: 'podes   ',
        'Ela/Ele/Você': 'pode',
        Nós: 'podemos',
        'Eles/Elas/Vocēs': 'podem'
      }
    ]
  },
  nouns: [
    {
      english: 'girlfriend',
      portuguese: {
        word: 'namorada',
        plurar: 'namoradas',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'tea',
      portuguese: {
        word: 'chá',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'home',
      portuguese: {
        word: 'casa',
        plurar: 'casas',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'book',
      portuguese: {
        word: 'livro',
        plurar: 'livros',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'city',
      portuguese: {
        word: 'cidade',
        plurar: 'cidades',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'time',
      portuguese: {
        word: 'tempo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'street',
      portuguese: {
        word: 'rua',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'city',
      portuguese: {
        word: 'cidade',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'table',
      portuguese: {
        word: 'mesa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'sport',
      portuguese: {
        word: 'desporto',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'dinner',
      portuguese: {
        word: 'jantar',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'lunch',
      portuguese: {
        word: 'almoço',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'food',
      portuguese: {
        word: 'comida',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'kitchen',
      portuguese: {
        word: 'cozinha',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'computer',
      portuguese: {
        word: 'computador',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'bathroom',
      portuguese: {
        word: 'casa-de-banho',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'lesson',
      portuguese: {
        word: 'aula',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'year',
      portuguese: {
        word: 'ano',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'month',
      portuguese: {
        word: 'mês',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'week',
      portuguese: {
        word: 'semana',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'day',
      portuguese: {
        word: 'dia',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'country',
      portuguese: {
        word: 'pais',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'desert',
      portuguese: {
        word: 'sobremesa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'cake',
      portuguese: {
        word: 'bolo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'bottle',
      portuguese: {
        word: 'garrafa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'chicken',
      portuguese: {
        word: 'galinha',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'plant',
      portuguese: {
        word: 'planta',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'flower',
      portuguese: {
        word: 'flor',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'soup',
      portuguese: {
        word: 'sopa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'drink',
      portuguese: {
        word: 'bebida',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'water',
      portuguese: {
        word: 'água',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'door',
      portuguese: {
        word: 'porta',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'window',
      portuguese: {
        word: 'janela',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'fish',
      portuguese: {
        word: 'peixe',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'cheese',
      portuguese: {
        word: 'queijo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'balcony',
      portuguese: {
        word: 'varanda',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'flat',
      portuguese: {
        word: 'apartamento',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'house',
      portuguese: {
        word: 'casa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'women',
      portuguese: {
        word: 'mulher',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'man',
      portuguese: {
        word: 'homem',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'floor',
      portuguese: {
        word: 'chão',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'mother',
      portuguese: {
        word: 'mãe',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'father',
      portuguese: {
        word: 'pai',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'bath tube',
      portuguese: {
        word: 'banheira',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'light',
      portuguese: {
        word: 'luz',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'desk',
      portuguese: {
        word: 'secretária',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'sister',
      portuguese: {
        word: 'irmã',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'brother',
      portuguese: {
        word: 'irmão',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'hour',
      portuguese: {
        word: 'hora',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'stairs',
      portuguese: {
        word: 'escadas',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'calculator',
      portuguese: {
        word: 'calculadore',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'plain',
      portuguese: {
        word: 'avião',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'second',
      portuguese: {
        word: 'segundo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'minute',
      portuguese: {
        word: 'minuto',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'boat',
      portuguese: {
        word: 'barco',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'ship',
      portuguese: {
        word: 'navío',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'jacket',
      portuguese: {
        word: 'casaco',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'shoes',
      portuguese: {
        word: 'sapatos',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'long sleeve',
      portuguese: {
        word: 'camisola',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'panths',
      portuguese: {
        word: 'calças',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'mobile phone',
      portuguese: {
        word: 'telemóvel',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'pillow',
      portuguese: {
        word: 'almofada',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'chair',
      portuguese: {
        word: 'cadeira',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'hair',
      portuguese: {
        word: 'cabelo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'eyes',
      portuguese: {
        word: 'olhos',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'arm',
      portuguese: {
        word: 'braço',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'leg',
      portuguese: {
        word: 'perna',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'feet',
      portuguese: {
        word: 'pé',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'head',
      portuguese: {
        word: 'cabeça',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'bicicle',
      portuguese: {
        word: 'bicicleta',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'oven',
      portuguese: {
        word: 'forno',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'fry pan',
      portuguese: {
        word: 'frigideira',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'socks',
      portuguese: {
        word: 'meias',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'sink',
      portuguese: {
        word: 'lavatório',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'toilet',
      portuguese: {
        word: 'sanita',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'knife',
      portuguese: {
        word: 'faca',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'spoon',
      portuguese: {
        word: 'colher',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'fork',
      portuguese: {
        word: 'garfo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'saucepan',
      portuguese: {
        word: 'panela',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'glass',
      portuguese: {
        word: 'copo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'mug',
      portuguese: {
        word: 'caneca',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'plate',
      portuguese: {
        word: 'prato',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'cutlery',
      portuguese: {
        word: 'talheres',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'sofa',
      portuguese: {
        word: 'sofá',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'picture',
      portuguese: {
        word: 'quadro',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'wall',
      portuguese: {
        word: 'parede',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'microwave',
      portuguese: {
        word: 'micro-ondas',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'towel',
      portuguese: {
        word: 'toalha',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'soap bar',
      portuguese: {
        word: 'sabonete',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'fridge',
      portuguese: {
        word: 'frigorífico',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'freezer',
      portuguese: {
        word: 'congelador',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'garbage bin',
      portuguese: {
        word: 'caixote do lixo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'tooth brush',
      portuguese: {
        word: 'pasta dos dentes',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'mirror',
      portuguese: {
        word: 'espelho',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'napkin',
      portuguese: {
        word: 'guardanapo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'bowl',
      portuguese: {
        word: 'taça',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'box',
      portuguese: {
        word: 'caixa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'tree',
      portuguese: {
        word: 'árvore',
        gender: 'feminine'
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
      portuguese: 'Prazer',
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
      portuguese: 'O Paulo é um amigo do Vasco',
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
      portuguese: 'Que surpresa',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'My friends think I walk too fast',
      portuguese: 'Os meus amigos acham que eu ando depressa demais',
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
