/* eslint-disable quotes */
import { Person } from '../service/verb';

export type RegularVerb = {
  english: string;
  infinitive: string;
  exerciseLevel: number;
};

export type IrregularVerb = { english: string } & { [key in Person]: string } & {
  infinitive: string;
  exerciseLevel: number;
};

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
        infinitive: 'falar',
        english: 'to speak',
        exerciseLevel: 1
      },
      {
        infinitive: 'comer',
        english: 'to eat',
        exerciseLevel: 1
      },
      {
        infinitive: 'abrir',
        english: 'to open',
        exerciseLevel: 1
      },
      {
        infinitive: 'achar',
        english: 'to think',
        exerciseLevel: 1
      },
      {
        infinitive: 'andar',
        english: 'to walk',
        exerciseLevel: 1
      },
      {
        infinitive: 'beber',
        english: 'to drink',
        exerciseLevel: 1
      },
      {
        infinitive: 'entrar',
        english: 'to enter',
        exerciseLevel: 1
      },
      {
        infinitive: 'morar',
        english: 'to live',
        exerciseLevel: 1
      },
      {
        infinitive: 'olhar',
        english: 'to look',
        exerciseLevel: 1
      }
    ],
    irregular: [
      {
        english: 'to be - long',
        infinitive: 'ser',
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Você': 'é',
        Nós: 'somos',
        'Eles/Elas/Vocēs': 'são',
        exerciseLevel: 1
      },
      {
        english: 'to be - moment',
        infinitive: 'estar',
        Eu: 'estou',
        Tu: 'estás',
        'Ela/Ele/Você': 'está',
        Nós: 'estamos',
        'Eles/Elas/Vocēs': 'estão',
        exerciseLevel: 1
      },
      // {
      //   english: 'to go',
      //   infinitive: 'ir',
      //   Eu: 'vou',
      //   Tu: 'vais',
      //   'Ela/Ele/Você': 'vai',
      //   Nós: 'vamos',
      //   'Eles/Elas/Vocēs': 'vão',
      //   exerciseLevel: 1
      // },
      {
        english: 'to have',
        infinitive: 'ter',
        Eu: 'tenho',
        Tu: 'tens',
        'Ela/Ele/Você': 'tem',
        Nós: 'temos',
        'Eles/Elas/Vocēs': 'têm',
        exerciseLevel: 1
      },
      {
        english: 'to want',
        infinitive: 'querer',
        Eu: 'quero',
        Tu: 'queres',
        'Ela/Ele/Você': 'quer',
        Nós: 'queremos',
        'Eles/Elas/Vocēs': 'querem',
        exerciseLevel: 1
      },
      {
        english: 'to see',
        infinitive: 'ver',
        Eu: 'vejo',
        Tu: 'vês',
        'Ela/Ele/Você': 'vê',
        Nós: 'vemos',
        'Eles/Elas/Vocēs': 'vêem',
        exerciseLevel: 1
      },
      {
        english: 'to do/make',
        infinitive: 'fazer',
        Eu: 'faço',
        Tu: 'fazes',
        'Ela/Ele/Você': 'faz',
        Nós: 'fazemos',
        'Eles/Elas/Vocēs': 'fazem',
        exerciseLevel: 1
      },
      {
        english: 'to know',
        infinitive: 'saber',
        Eu: 'sei',
        Tu: 'sabes',
        'Ela/Ele/Você': 'sabe',
        Nós: 'sabemos',
        'Eles/Elas/Vocēs': 'sabem',
        exerciseLevel: 1
      },
      {
        english: 'to read',
        infinitive: 'ler',
        Eu: 'leio',
        Tu: 'lês',
        'Ela/Ele/Você': 'lê',
        Nós: 'lemos',
        'Eles/Elas/Vocēs': 'leem',
        exerciseLevel: 1
      },
      {
        english: 'to say',
        infinitive: 'dizer',
        Eu: 'digo',
        Tu: 'dizes',
        'Ela/Ele/Você': 'diz',
        Nós: 'dizemos',
        'Eles/Elas/Vocēs': 'dizem',
        exerciseLevel: 1
      },
      {
        english: 'can',
        infinitive: 'poder',
        Eu: 'posso',
        Tu: 'podes',
        'Ela/Ele/Você': 'pode',
        Nós: 'podemos',
        'Eles/Elas/Vocēs': 'podem',
        exerciseLevel: 1
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
      english: 'apartment',
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
        word: 'navio',
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
    // {
    //   english: 'shoes',
    //   portuguese: {
    //     word: 'sapatos',
    //     gender: 'masculine'
    //   },
    //   exerciseLevel: 1
    // },
    {
      english: 'long sleeve',
      portuguese: {
        word: 'camisola',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    // {
    //   english: 'pants',
    //   portuguese: {
    //     word: 'calças',
    //     gender: 'feminine'
    //   },
    //   exerciseLevel: 1
    // },
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
      english: 'frying pan',
      portuguese: {
        word: 'frigideira',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    // {
    //   english: 'socks',
    //   portuguese: {
    //     word: 'meias',
    //     gender: 'feminine'
    //   },
    //   exerciseLevel: 1
    // },
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
    // {
    //   english: 'cutlery',
    //   portuguese: {
    //     word: 'talheres',
    //     gender: 'masculine'
    //   },
    //   exerciseLevel: 1
    // },
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
      english: 'soap',
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
      english: 'toothpaste',
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
    },
    {
      english: 'Can you help me?',
      portuguese: 'Podes ajudar-me?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Do you want a coffee?',
      portuguese: 'Queres um café?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'How much it costs?',
      portuguese: 'Quanto custa?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Where are you?',
      portuguese: 'Onde estás?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'I am a strawberry',
      portuguese: 'Sou um morango',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I'm going for a walk",
      portuguese: 'Vou dar uma volta',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'I have to focus now',
      portuguese: 'Preciso de me concentrar agora',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'What do you want to eat for dinner?',
      portuguese: 'O que queres comer para o jantar?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'What time is it?',
      portuguese: 'Que horas são?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'I have to prepare a coffee for Leonor',
      portuguese: 'Tenho de preparar um café para a Leonor',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'I sleep until noon',
      portuguese: 'Durmo até ao meio dia',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I'm going to take a shower",
      portuguese: 'Vou tomar banho',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Do you want an ice cream?',
      portuguese: 'Queres um gelado?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Is it cold outside?',
      portuguese: 'Está frio lá fora?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'You are beautiful',
      portuguese: 'És linda',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Today I ate a kilo of strawberries',
      portuguese: 'Hoje comi um kilo de morangos',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'I like to sleep',
      portuguese: 'Gosto de dormir',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Tomorrow is my birthday',
      portuguese: 'Amanhã é o meu aniversário',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Paula is my portuguese professor',
      portuguese: 'A Paula é a minha professora de português',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Can you speak slower?',
      portuguese: 'Podes falar mais devagar?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: "I dont't know what to do",
      portuguese: 'Não sei o que fazer',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I'm tired because I'm hungry",
      portuguese: 'Estou cansado porque estou com fome',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'I love to wash the dishes',
      portuguese: 'Adoro lavar a loiça',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Are you confortable?',
      portuguese: 'Estás confortável?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'What does it mean liar?',
      portuguese: 'O que significa mentiroso?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'I read every day',
      portuguese: 'Leio todos os dias',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "What's in the fridge?",
      portuguese: 'O que está no frigorifico?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'This flat is a mess',
      portuguese: 'Este apartamento está todo desarrumado',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I'm lazy",
      portuguese: 'Sou preguiçoso',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'How was your work?',
      portuguese: 'Como foi o teu trabalho?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'What are you going to do tomorrow?',
      portuguese: 'Que vais fazer amanhã?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'The book is on the table',
      portuguese: 'O livro está na mesa',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'You backpack is in another room',
      portuguese: 'A tua mochila está em outro quarto',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "There's dust under the sofa",
      portuguese: 'Há pó debaixo do sofá',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'The box is on top of the closet',
      portuguese: 'A caixa está em cima do armário',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Your socks are in the drawer',
      portuguese: 'As tuas meias estão na gaveta',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Your bike is next to the red car',
      portuguese: 'A tua bicicleta está ao lado do carro vermelho',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'The picture on the wall is very beautiful',
      portuguese: 'A fotografia na parede é muito bonita',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'The main door is tall',
      portuguese: 'A porta da entrada é alta',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I want to open the window but it's too cold outside",
      portuguese: 'Quero abrir a janela mas está muito frio lá fora',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "You can't use this computer because is broken",
      portuguese: 'Não podes usar este computador porque está estragado',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Next weekend we are going on holidays',
      portuguese: 'No próximo fim de semana vamos de férias',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Can you come here?',
      portuguese: 'Podes chegar aqui?',
      sentenceType: 'question',
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
