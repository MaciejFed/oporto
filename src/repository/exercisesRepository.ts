/* eslint-disable quotes */
import { Person } from '../service/verb';

export type Verb = { english: string } & { [key in Person]: string } & {
  infinitive: string;
  exerciseLevel: number;
};

type NounGender = 'masculine' | 'feminine' | 'none';

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
  verbs: Verb[];
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
  verbs: [
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
    {
      english: 'to go',
      infinitive: 'ir',
      Eu: 'vou',
      Tu: 'vais',
      'Ela/Ele/Você': 'vai',
      Nós: 'vamos',
      'Eles/Elas/Vocēs': 'vão',
      exerciseLevel: 1
    },
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
    },
    {
      english: 'to speak',
      infinitive: 'falar',
      Eu: 'falo',
      Tu: 'falas',
      'Ela/Ele/Você': 'fala',
      Nós: 'falamos',
      'Eles/Elas/Vocēs': 'falam',
      exerciseLevel: 1
    },
    {
      english: 'to eat',
      infinitive: 'comer',
      Eu: 'como',
      Tu: 'comes',
      'Ela/Ele/Você': 'come',
      Nós: 'comemos',
      'Eles/Elas/Vocēs': 'comem',
      exerciseLevel: 1
    },
    {
      english: 'to open',
      infinitive: 'abrir',
      Eu: 'abro',
      Tu: 'abres',
      'Ela/Ele/Você': 'abre',
      Nós: 'abrimos',
      'Eles/Elas/Vocēs': 'abrem',
      exerciseLevel: 1
    },
    {
      english: 'to think',
      infinitive: 'achar',
      Eu: 'acho',
      Tu: 'achas',
      'Ela/Ele/Você': 'acha',
      Nós: 'achamos',
      'Eles/Elas/Vocēs': 'acham',
      exerciseLevel: 1
    },
    {
      english: 'to walk',
      infinitive: 'andar',
      Eu: 'ando',
      Tu: 'andas',
      'Ela/Ele/Você': 'anda',
      Nós: 'andamos',
      'Eles/Elas/Vocēs': 'andam',
      exerciseLevel: 1
    },
    {
      english: 'to drink',
      infinitive: 'beber',
      Eu: 'bebo',
      Tu: 'bebes',
      'Ela/Ele/Você': 'bebe',
      Nós: 'bebemos',
      'Eles/Elas/Vocēs': 'bebem',
      exerciseLevel: 1
    },
    {
      english: 'to enter',
      infinitive: 'entrar',
      Eu: 'entro',
      Tu: 'entras',
      'Ela/Ele/Você': 'entra',
      Nós: 'entramos',
      'Eles/Elas/Vocēs': 'entram',
      exerciseLevel: 1
    },
    {
      english: 'to live',
      infinitive: 'morar',
      Eu: 'moro',
      Tu: 'moras',
      'Ela/Ele/Você': 'mora',
      Nós: 'moramos',
      'Eles/Elas/Vocēs': 'moram',
      exerciseLevel: 1
    },
    {
      english: 'to look',
      infinitive: 'olhar',
      Eu: 'olho',
      Tu: 'olhas',
      'Ela/Ele/Você': 'olha',
      Nós: 'olhamos',
      'Eles/Elas/Vocēs': 'olham',
      exerciseLevel: 1
    },
    {
      english: 'to be called',
      infinitive: 'chamar-se',
      Eu: 'chamo-me',
      Tu: 'chamas-te',
      'Ela/Ele/Você': 'chama-se',
      Nós: 'chamamo-nos',
      'Eles/Elas/Vocēs': 'chamam-se',
      exerciseLevel: 1
    },
    {
      english: 'to work',
      infinitive: 'trabalhar',
      Eu: 'trabalho',
      Tu: 'trabalhas',
      'Ela/Ele/Você': 'trabalha',
      Nós: 'trabalhamos',
      'Eles/Elas/Vocēs': 'trabalham',
      exerciseLevel: 1
    },
    {
      english: 'to greet',
      infinitive: 'cumprimentar',
      Eu: 'cumprimento',
      Tu: 'cumprimentas',
      'Ela/Ele/Você': 'cumprimenta',
      Nós: 'cumprimentamos',
      'Eles/Elas/Vocēs': 'cumprimentam',
      exerciseLevel: 1
    },
    {
      english: 'to introduce yourself',
      infinitive: 'apresentar-se',
      Eu: 'apresento-me',
      Tu: 'apresentas-te',
      'Ela/Ele/Você': 'apresenta-se',
      Nós: 'apresentamo-nos',
      'Eles/Elas/Vocēs': 'apresentam-se',
      exerciseLevel: 1
    },
    {
      english: 'to find',
      infinitive: 'encontrar',
      Eu: 'encontro',
      Tu: 'encontras',
      'Ela/Ele/Você': 'encontra',
      Nós: 'encontramos',
      'Eles/Elas/Vocēs': 'encontram',
      exerciseLevel: 1
    },
    {
      english: 'to hear',
      infinitive: 'ouvir',
      Eu: 'ouço',
      Tu: 'ouves',
      'Ela/Ele/Você': 'ouve',
      Nós: 'ouvimos',
      'Eles/Elas/Vocēs': 'ouvem',
      exerciseLevel: 1
    },
    {
      english: 'to ask',
      infinitive: 'perguntar',
      Eu: 'pergunto',
      Tu: 'perguntas',
      'Ela/Ele/Você': 'pergunta',
      Nós: 'perguntamos',
      'Eles/Elas/Vocēs': 'perguntam',
      exerciseLevel: 1
    },
    {
      english: 'to play',
      infinitive: 'jogar',
      Eu: 'jogo',
      Tu: 'jogas',
      'Ela/Ele/Você': 'joga',
      Nós: 'jogamos',
      'Eles/Elas/Vocēs': 'jogam',
      exerciseLevel: 1
    }
  ],
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
      english: 'bathtube',
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
      english: 'foot',
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
        gender: 'feminine'
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
    },
    {
      english: 'girl',
      portuguese: {
        word: 'rapariga',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'friend',
      portuguese: {
        word: 'amigo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: '0',
      portuguese: {
        word: 'zero',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '1',
      portuguese: {
        word: 'um',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '2',
      portuguese: {
        word: 'dois',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '3',
      portuguese: {
        word: 'três',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '4',
      portuguese: {
        word: 'quatro',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '5',
      portuguese: {
        word: 'cinco',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '6',
      portuguese: {
        word: 'seis',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '7',
      portuguese: {
        word: 'sete',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '8',
      portuguese: {
        word: 'oito',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '9',
      portuguese: {
        word: 'nove',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '10',
      portuguese: {
        word: 'dez',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '11',
      portuguese: {
        word: 'onze',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '12',
      portuguese: {
        word: 'doze',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '13',
      portuguese: {
        word: 'treze',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '14',
      portuguese: {
        word: 'catorze',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '15',
      portuguese: {
        word: 'quinze',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '16',
      portuguese: {
        word: 'dezasseis',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '17',
      portuguese: {
        word: 'dezassete',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '18',
      portuguese: {
        word: 'dezoito',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '19',
      portuguese: {
        word: 'dezanove',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '20',
      portuguese: {
        word: 'vinte',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '21',
      portuguese: {
        word: 'vinte e um',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '22',
      portuguese: {
        word: 'vinte e dois',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '23',
      portuguese: {
        word: 'vinte e três',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '30',
      portuguese: {
        word: 'trinta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '40',
      portuguese: {
        word: 'quarenta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '50',
      portuguese: {
        word: 'cinquenta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '60',
      portuguese: {
        word: 'sessenta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '70',
      portuguese: {
        word: 'setenta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '80',
      portuguese: {
        word: 'oitenta',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '90',
      portuguese: {
        word: 'noventa',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: '100',
      portuguese: {
        word: 'cem',
        gender: 'none'
      },
      exerciseLevel: 1
    },
    {
      english: 'turn',
      portuguese: {
        word: 'vez',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'thing',
      portuguese: {
        word: 'coisa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'thing',
      portuguese: {
        word: 'coisa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'weather',
      portuguese: {
        word: 'tempo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'person',
      portuguese: {
        word: 'pessoa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'form',
      portuguese: {
        word: 'forma',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'part',
      portuguese: {
        word: 'parte',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'state',
      portuguese: {
        word: 'estado',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'government',
      portuguese: {
        word: 'governo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'caso',
      portuguese: {
        word: 'point',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'work',
      portuguese: {
        word: 'trabalho',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'people',
      portuguese: {
        word: 'folks',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'people',
      portuguese: {
        word: 'gente',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'side',
      portuguese: {
        word: 'lado',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'group',
      portuguese: {
        word: 'grupo',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'work',
      portuguese: {
        word: 'obra',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'earth',
      portuguese: {
        word: 'terra',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'name',
      portuguese: {
        word: 'nome',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'son',
      portuguese: {
        word: 'filho',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'problem',
      portuguese: {
        word: 'problema',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'company',
      portuguese: {
        word: 'empresa',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'right',
      portuguese: {
        word: 'direito',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'system',
      portuguese: {
        word: 'sistema',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'region',
      portuguese: {
        word: 'região',
        gender: 'feminine'
      },
      exerciseLevel: 1
    },
    {
      english: 'point',
      portuguese: {
        word: 'ponto',
        gender: 'masculine'
      },
      exerciseLevel: 1
    },
    {
      english: 'end',
      portuguese: {
        word: 'fim',
        gender: 'masculine'
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
      english: 'Until tomorrow',
      portuguese: 'Até amanhã',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
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
      english: "I don't know what to do",
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
      english: 'I love washing the dishes',
      portuguese: 'Adoro lavar a loiça',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Are you comfortable?',
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
      english: 'What is it in the fridge?',
      portuguese: 'O que está no frigorífico?',
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
      portuguese: 'O que vais fazer amanhã?',
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
      english: 'Your backpack is in another room',
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
      english: "You can't use this computer because it's broken",
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
    },
    {
      english: 'Pair work',
      portuguese: 'Trabalho de pares',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Greet a colleague',
      portuguese: 'Cumprimentar um colega',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Introduce yourself to a professor',
      portuguese: 'Apresentar-se a um professor',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "What's your name?",
      portuguese: 'Como te chamas?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'With your colleague, have dialogues for the following situations',
      portuguese: 'Com o seu colega, faça diálogos para as seguintes situações',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Sara has a coffee with Paulo and Marta',
      portuguese: 'A Sara toma um café com o Paulo e a Marta',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Sara is at the cafe',
      portuguese: 'A Sara está no café',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'This is Sara',
      portuguese: 'Está é a Sara',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Do you study here at the university?',
      portuguese: 'Estudas aqui na universidade?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: "I'm from Lisbon",
      portuguese: 'Eu sou de Lisboa',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'What street do you live on?',
      portuguese: 'Em que rua moras?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'Where do you live?',
      portuguese: 'Onde moras?',
      sentenceType: 'question',
      exerciseLevel: 1
    },
    {
      english: 'I finished the work before the deadline',
      portuguese: 'Eu concluí o trabalho antes do prazo',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "These folks can't win all the time",
      portuguese: 'Esta gente não pode vencer sempre',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "There's plenty of nice people in the world.",
      portuguese: 'Há muitas pessoas legais no mundo',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'Both sides of the record are in perfect condition',
      portuguese: 'Ambos os lados do disco estão em perfeitas condições',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'My new painting is a work of art',
      portuguese: 'Minha nova pintura é uma obra de arte',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'My son is almost six years old.',
      portuguese: 'Meu filho tem quase seis anos',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: 'I know the city and the surrounding region very well',
      portuguese: 'Conheço a cidade e a região adjacente muito bem',
      sentenceType: 'statement',
      exerciseLevel: 1
    },
    {
      english: "I always write 'sincerely' at the end of letters",
      portuguese: "Eu sempre escrevo 'atenciosamente' no fim das cartas",
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
