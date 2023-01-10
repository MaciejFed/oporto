/* eslint-disable quotes */
import { Person } from '../service/verb';

export type Verb = {
  english: string;
  infinitive: string;
  presentSimple: { [key in Person]: string };
  pastPerfect?: { [key in Person]: string };
};

type NounGender = 'masculine' | 'feminine' | 'none';

type SentenceType = 'question' | 'statement';

type PortugueseNoun = {
  word: string;
  plural?: string;
  gender: NounGender;
};

export type Adjective = {
  masculine: {
    singular: string;
    plural: string;
  };
  feminine: {
    singular: string;
    plural: string;
  };
  placing: 'before' | 'after';
  english: string;
};

export type Noun = {
  english: string;
  portuguese: PortugueseNoun;
};

export type Sentence = {
  english: string;
  portuguese: string;
  sentenceType: SentenceType;
};

export type Other = {
  english: string;
  portuguese: string;
}

export type Schema = {
  verbs: Verb[];
  nouns: Noun[];
  others: Other[];
  adjectives: Adjective[];
  sentences: Sentence[];
  fitIn: FitIn[];
};

export type FitIn = {
  prefix: string;
  answer: string;
  suffix: string;
  explanation?: string;
};

export const db: Schema = {
  verbs: [
    {
      english: 'to be - long',
      infinitive: 'ser',
      presentSimple: {
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Você': 'é',
        Nós: 'somos',
        'Eles/Elas/Vocēs': 'são'
      },
      pastPerfect: {
        Eu: 'fui',
        Tu: 'foste',
        'Ela/Ele/Você': 'foi',
        Nós: 'fomos',
        'Eles/Elas/Vocēs': 'foram'
      }
    },
    {
      english: 'to be - moment',
      infinitive: 'estar',
      presentSimple: {
        Eu: 'estou',
        Tu: 'estás',
        'Ela/Ele/Você': 'está',
        Nós: 'estamos',
        'Eles/Elas/Vocēs': 'estão'
      },
      pastPerfect: {
        Eu: 'estive',
        Tu: 'estiveste',
        'Ela/Ele/Você': 'esteve',
        Nós: 'estivemos',
        'Eles/Elas/Vocēs': 'estiveram'
      }
    },
    {
      english: 'to go',
      infinitive: 'ir',
      presentSimple: {
        Eu: 'vou',
        Tu: 'vais',
        'Ela/Ele/Você': 'vai',
        Nós: 'vamos',
        'Eles/Elas/Vocēs': 'vão'
      },
      pastPerfect: {
        Eu: 'fui',
        Tu: 'foste',
        'Ela/Ele/Você': 'foi',
        Nós: 'fomos',
        'Eles/Elas/Vocēs': 'foram'
      }
    },
    {
      english: 'to have',
      infinitive: 'ter',
      presentSimple: {
        Eu: 'tenho',
        Tu: 'tens',
        'Ela/Ele/Você': 'tem',
        Nós: 'temos',
        'Eles/Elas/Vocēs': 'têm'
      },
      pastPerfect: {
        Eu: 'tive',
        Tu: 'tiveste',
        'Ela/Ele/Você': 'teve',
        Nós: 'tivemos',
        'Eles/Elas/Vocēs': 'tiveram'
      }
    },
    {
      english: 'to want',
      infinitive: 'querer',
      presentSimple: {
        Eu: 'quero',
        Tu: 'queres',
        'Ela/Ele/Você': 'quer',
        Nós: 'queremos',
        'Eles/Elas/Vocēs': 'querem'
      },
      pastPerfect: {
        Eu: 'quis',
        Tu: 'quiseste',
        'Ela/Ele/Você': 'quis',
        Nós: 'quisemos',
        'Eles/Elas/Vocēs': 'quiseram'
      }
    },
    {
      english: 'to see',
      infinitive: 'ver',
      presentSimple: {
        Eu: 'vejo',
        Tu: 'vês',
        'Ela/Ele/Você': 'vê',
        Nós: 'vemos',
        'Eles/Elas/Vocēs': 'vêem'
      },
      pastPerfect: {
        Eu: 'vi',
        Tu: 'viste',
        'Ela/Ele/Você': 'viu',
        Nós: 'vimos',
        'Eles/Elas/Vocēs': 'viram'
      }
    },
    {
      english: 'to do/make',
      infinitive: 'fazer',
      presentSimple: {
        Eu: 'faço',
        Tu: 'fazes',
        'Ela/Ele/Você': 'faz',
        Nós: 'fazemos',
        'Eles/Elas/Vocēs': 'fazem'
      },
      pastPerfect: {
        Eu: 'fiz',
        Tu: 'fizeste',
        'Ela/Ele/Você': 'fez',
        Nós: 'fizemos',
        'Eles/Elas/Vocēs': 'fizeram'
      }
    },
    {
      english: 'to know',
      infinitive: 'saber',
      presentSimple: {
        Eu: 'sei',
        Tu: 'sabes',
        'Ela/Ele/Você': 'sabe',
        Nós: 'sabemos',
        'Eles/Elas/Vocēs': 'sabem'
      },
      pastPerfect: {
        Eu: 'soube',
        Tu: 'soubeste',
        'Ela/Ele/Você': 'soube',
        Nós: 'soubemos',
        'Eles/Elas/Vocēs': 'souberam'
      }
    },
    {
      english: 'to read',
      infinitive: 'ler',
      presentSimple: {
        Eu: 'leio',
        Tu: 'lês',
        'Ela/Ele/Você': 'lê',
        Nós: 'lemos',
        'Eles/Elas/Vocēs': 'leem'
      },
      pastPerfect: {
        Eu: 'li',
        Tu: 'leste',
        'Ela/Ele/Você': 'leu',
        Nós: 'lemos',
        'Eles/Elas/Vocēs': 'leram'
      }
    },
    {
      english: 'to say',
      infinitive: 'dizer',
      presentSimple: {
        Eu: 'digo',
        Tu: 'dizes',
        'Ela/Ele/Você': 'diz',
        Nós: 'dizemos',
        'Eles/Elas/Vocēs': 'dizem'
      },
      pastPerfect: {
        Eu: 'disse',
        Tu: 'disseste',
        'Ela/Ele/Você': 'disse',
        Nós: 'dissemos',
        'Eles/Elas/Vocēs': 'disseram'
      }
    },
    {
      english: 'can',
      infinitive: 'poder',
      presentSimple: {
        Eu: 'posso',
        Tu: 'podes',
        'Ela/Ele/Você': 'pode',
        Nós: 'podemos',
        'Eles/Elas/Vocēs': 'podem'
      },
      pastPerfect: {
        Eu: 'pude',
        Tu: 'pudeste',
        'Ela/Ele/Você': 'pôde',
        Nós: 'pudemos',
        'Eles/Elas/Vocēs': 'puderam'
      }
    },
    {
      english: 'to speak',
      infinitive: 'falar',
      presentSimple: {
        Eu: 'falo',
        Tu: 'falas',
        'Ela/Ele/Você': 'fala',
        Nós: 'falamos',
        'Eles/Elas/Vocēs': 'falam'
      },
      pastPerfect: {
        Eu: 'falei',
        Tu: 'falaste',
        'Ela/Ele/Você': 'falou',
        Nós: 'falámos',
        'Eles/Elas/Vocēs': 'falaram'
      }
    },
    {
      english: 'to eat',
      infinitive: 'comer',
      presentSimple: {
        Eu: 'como',
        Tu: 'comes',
        'Ela/Ele/Você': 'come',
        Nós: 'comemos',
        'Eles/Elas/Vocēs': 'comem'
      },
      pastPerfect: {
        Eu: 'comi',
        Tu: 'comeste',
        'Ela/Ele/Você': 'comeu',
        Nós: 'comemos',
        'Eles/Elas/Vocēs': 'comeram'
      }
    },
    {
      english: 'to open',
      infinitive: 'abrir',
      presentSimple: {
        Eu: 'abro',
        Tu: 'abres',
        'Ela/Ele/Você': 'abre',
        Nós: 'abrimos',
        'Eles/Elas/Vocēs': 'abrem'
      },
      pastPerfect: {
        Eu: 'abri',
        Tu: 'abriste',
        'Ela/Ele/Você': 'abriu',
        Nós: 'abrimos',
        'Eles/Elas/Vocēs': 'abriram'
      }
    },
    {
      english: 'to think',
      infinitive: 'achar',
      presentSimple: {
        Eu: 'acho',
        Tu: 'achas',
        'Ela/Ele/Você': 'acha',
        Nós: 'achamos',
        'Eles/Elas/Vocēs': 'acham'
      },
      pastPerfect: {
        Eu: 'achei',
        Tu: 'achaste',
        'Ela/Ele/Você': 'achou',
        Nós: 'achámos',
        'Eles/Elas/Vocēs': 'acharam'
      }
    },
    {
      english: 'to walk',
      infinitive: 'andar',
      presentSimple: {
        Eu: 'ando',
        Tu: 'andas',
        'Ela/Ele/Você': 'anda',
        Nós: 'andamos',
        'Eles/Elas/Vocēs': 'andam'
      },
      pastPerfect: {
        Eu: 'andei',
        Tu: 'andaste',
        'Ela/Ele/Você': 'andaste',
        Nós: 'andámos',
        'Eles/Elas/Vocēs': 'andaram'
      }
    },
    {
      english: 'to drink',
      infinitive: 'beber',
      presentSimple: {
        Eu: 'bebo',
        Tu: 'bebes',
        'Ela/Ele/Você': 'bebe',
        Nós: 'bebemos',
        'Eles/Elas/Vocēs': 'bebem'
      },
      pastPerfect: {
        Eu: 'bebi',
        Tu: 'bebeste',
        'Ela/Ele/Você': 'bebeu',
        Nós: 'bebemos',
        'Eles/Elas/Vocēs': 'beberam'
      }
    },
    {
      english: 'to enter',
      infinitive: 'entrar',
      presentSimple: {
        Eu: 'entro',
        Tu: 'entras',
        'Ela/Ele/Você': 'entra',
        Nós: 'entramos',
        'Eles/Elas/Vocēs': 'entram'
      },
      pastPerfect: {
        Eu: 'entrei',
        Tu: 'entraste',
        'Ela/Ele/Você': 'entrou',
        Nós: 'entrámos',
        'Eles/Elas/Vocēs': 'entraram'
      }
    },
    {
      english: 'to reside',
      infinitive: 'morar',
      presentSimple: {
        Eu: 'moro',
        Tu: 'moras',
        'Ela/Ele/Você': 'mora',
        Nós: 'moramos',
        'Eles/Elas/Vocēs': 'moram'
      },
      pastPerfect: {
        Eu: 'morei',
        Tu: 'moraste',
        'Ela/Ele/Você': 'morou',
        Nós: 'morámos',
        'Eles/Elas/Vocēs': 'moraram'
      }
    },
    {
      english: 'to look',
      infinitive: 'olhar',
      presentSimple: {
        Eu: 'olho',
        Tu: 'olhas',
        'Ela/Ele/Você': 'olha',
        Nós: 'olhamos',
        'Eles/Elas/Vocēs': 'olham'
      },
      pastPerfect: {
        Eu: 'olhei',
        Tu: 'olhaste',
        'Ela/Ele/Você': 'olhou',
        Nós: 'olhámos',
        'Eles/Elas/Vocēs': 'olharam'
      }
    },
    {
      english: 'to be called',
      infinitive: 'chamar-se',
      presentSimple: {
        Eu: 'chamo-me',
        Tu: 'chamas-te',
        'Ela/Ele/Você': 'chama-se',
        Nós: 'chamamo-nos',
        'Eles/Elas/Vocēs': 'chamam-se'
      },
      pastPerfect: {
        Eu: 'chamei-me',
        Tu: 'chamaste-te',
        'Ela/Ele/Você': 'chamou-se',
        Nós: 'chamámo-nos',
        'Eles/Elas/Vocēs': 'chamaram-se'
      }
    },
    {
      english: 'to work',
      infinitive: 'trabalhar',
      presentSimple: {
        Eu: 'trabalho',
        Tu: 'trabalhas',
        'Ela/Ele/Você': 'trabalha',
        Nós: 'trabalhamos',
        'Eles/Elas/Vocēs': 'trabalham'
      },
      pastPerfect: {
        Eu: 'trabalhei',
        Tu: 'trabalhaste',
        'Ela/Ele/Você': 'trabalhou',
        Nós: 'trabalhámos',
        'Eles/Elas/Vocēs': 'trabalharam'
      }
    },
    {
      english: 'to greet',
      infinitive: 'cumprimentar',
      presentSimple: {
        Eu: 'cumprimento',
        Tu: 'cumprimentas',
        'Ela/Ele/Você': 'cumprimenta',
        Nós: 'cumprimentamos',
        'Eles/Elas/Vocēs': 'cumprimentam'
      },
      pastPerfect: {
        Eu: 'cumprimentei',
        Tu: 'cumprimentaste',
        'Ela/Ele/Você': 'cumprimentou',
        Nós: 'cumprimentámos',
        'Eles/Elas/Vocēs': 'cumprimentaram'
      }
    },
    {
      english: 'to introduce yourself',
      infinitive: 'apresentar-se',
      presentSimple: {
        Eu: 'apresento-me',
        Tu: 'apresentas-te',
        'Ela/Ele/Você': 'apresenta-se',
        Nós: 'apresentamo-nos',
        'Eles/Elas/Vocēs': 'apresentam-se'
      },
      pastPerfect: {
        Eu: 'apresentei-me',
        Tu: 'apresentaste-te',
        'Ela/Ele/Você': 'apresentou-se',
        Nós: 'apresentámo-nos',
        'Eles/Elas/Vocēs': 'apresentaram-se'
      }
    },
    {
      english: 'to find',
      infinitive: 'encontrar',
      presentSimple: {
        Eu: 'encontro',
        Tu: 'encontras',
        'Ela/Ele/Você': 'encontra',
        Nós: 'encontramos',
        'Eles/Elas/Vocēs': 'encontram'
      }
    },
    {
      english: 'to hear',
      infinitive: 'ouvir',
      presentSimple: {
        Eu: 'ouço',
        Tu: 'ouves',
        'Ela/Ele/Você': 'ouve',
        Nós: 'ouvimos',
        'Eles/Elas/Vocēs': 'ouvem'
      }
    },
    {
      english: 'to ask',
      infinitive: 'perguntar',
      presentSimple: {
        Eu: 'pergunto',
        Tu: 'perguntas',
        'Ela/Ele/Você': 'pergunta',
        Nós: 'perguntamos',
        'Eles/Elas/Vocēs': 'perguntam'
      }
    },
    {
      english: 'to play',
      infinitive: 'jogar',
      presentSimple: {
        Eu: 'jogo',
        Tu: 'jogas',
        'Ela/Ele/Você': 'joga',
        Nós: 'jogamos',
        'Eles/Elas/Vocēs': 'jogam'
      }
    },
    {
      english: 'to write',
      infinitive: 'escrever',
      presentSimple: {
        Eu: 'escrevo',
        Tu: 'escreves',
        'Ela/Ele/Você': 'escreve',
        Nós: 'escrevemos',
        'Eles/Elas/Vocēs': 'escrevem'
      }
    },
    {
      english: 'to understand',
      infinitive: 'compreender',
      presentSimple: {
        Eu: 'compreendo',
        Tu: 'compreendes',
        'Ela/Ele/Você': 'compreende',
        Nós: 'compreendemos',
        'Eles/Elas/Vocēs': 'compreendem'
      }
    },
    {
      english: 'to be familiar',
      infinitive: 'conhecer',
      presentSimple: {
        Eu: 'conheço',
        Tu: 'conheces',
        'Ela/Ele/Você': 'conhece',
        Nós: 'conhecemos',
        'Eles/Elas/Vocēs': 'conhecem'
      }
    },
    {
      english: 'to solve',
      infinitive: 'resolver',
      presentSimple: {
        Eu: 'resolvo',
        Tu: 'resolves',
        'Ela/Ele/Você': 'resolve',
        Nós: 'resolvemos',
        'Eles/Elas/Vocēs': 'resolvem'
      }
    },
    {
      english: 'to go down',
      infinitive: 'descer',
      presentSimple: {
        Eu: 'desço',
        Tu: 'desces',
        'Ela/Ele/Você': 'desce',
        Nós: 'descemos',
        'Eles/Elas/Vocēs': 'descem'
      }
    },
    {
      english: 'to warm up',
      infinitive: 'aquecer',
      presentSimple: {
        Eu: 'aqueço',
        Tu: 'aqueces',
        'Ela/Ele/Você': 'aquece',
        Nós: 'aquecemos',
        'Eles/Elas/Vocēs': 'aquecem'
      }
    },
    {
      english: 'to live',
      infinitive: 'viver',
      presentSimple: {
        Eu: 'vivo',
        Tu: 'vives',
        'Ela/Ele/Você': 'vive',
        Nós: 'vivemos',
        'Eles/Elas/Vocēs': 'vivem'
      }
    },
    {
      english: 'to run',
      infinitive: 'correr',
      presentSimple: {
        Eu: 'corro',
        Tu: 'corres',
        'Ela/Ele/Você': 'corre',
        Nós: 'corremos',
        'Eles/Elas/Vocēs': 'correm'
      }
    },
    {
      english: 'to learn',
      infinitive: 'aprender',
      presentSimple: {
        Eu: 'aprendo',
        Tu: 'aprendes',
        'Ela/Ele/Você': 'aprende',
        Nós: 'aprendemos',
        'Eles/Elas/Vocēs': 'aprendem'
      }
    },
    {
      english: 'to forget',
      infinitive: 'esquecer',
      presentSimple: {
        Eu: 'esqueço',
        Tu: 'esqueces',
        'Ela/Ele/Você': 'esquece',
        Nós: 'esquecemos',
        'Eles/Elas/Vocēs': 'esquecem'
      }
    },
    {
      english: 'to use',
      infinitive: 'usar',
      presentSimple: {
        Eu: 'uso',
        Tu: 'usas',
        'Ela/Ele/Você': 'usa',
        Nós: 'usamos',
        'Eles/Elas/Vocēs': 'usam'
      }
    },
    {
      english: 'to have lunch',
      infinitive: 'almoçar',
      presentSimple: {
        Eu: 'almoço',
        Tu: 'almoças',
        'Ela/Ele/Você': 'almoça',
        Nós: 'almoçamos',
        'Eles/Elas/Vocēs': 'almoçam'
      }
    },
    {
      english: 'to phone',
      infinitive: 'telefonar',
      presentSimple: {
        Eu: 'telefono',
        Tu: 'telefonas',
        'Ela/Ele/Você': 'telefona',
        Nós: 'telefonamos',
        'Eles/Elas/Vocēs': 'telefonam'
      }
    },
    {
      english: 'to pay',
      infinitive: 'pagar',
      presentSimple: {
        Eu: 'pago',
        Tu: 'pagas',
        'Ela/Ele/Você': 'paga',
        Nós: 'pagamos',
        'Eles/Elas/Vocēs': 'pagam'
      }
    },
    {
      english: 'to take',
      infinitive: 'tomar',
      presentSimple: {
        Eu: 'tomo',
        Tu: 'tomas',
        'Ela/Ele/Você': 'toma',
        Nós: 'tomamos',
        'Eles/Elas/Vocēs': 'tomam'
      }
    },
    {
      english: 'to stay',
      infinitive: 'ficar',
      presentSimple: {
        Eu: 'fico',
        Tu: 'ficas',
        'Ela/Ele/Você': 'fica',
        Nós: 'ficamos',
        'Eles/Elas/Vocēs': 'ficam'
      }
    },
    {
      english: 'to get up',
      infinitive: 'levantar-se',
      presentSimple: {
        Eu: 'levanto-me',
        Tu: 'levantas-te',
        'Ela/Ele/Você': 'levanta-se',
        Nós: 'levantamo-nos',
        'Eles/Elas/Vocēs': 'levantam-se'
      }
    },
    {
      english: 'to buy',
      infinitive: 'comprar',
      presentSimple: {
        Eu: 'compro',
        Tu: 'compras',
        'Ela/Ele/Você': 'compra',
        Nós: 'compramos',
        'Eles/Elas/Vocēs': 'compram'
      }
    },
    {
      english: 'to teach',
      infinitive: 'ensinar',
      presentSimple: {
        Eu: 'ensino',
        Tu: 'ensinas',
        'Ela/Ele/Você': 'ensina',
        Nós: 'ensinamos',
        'Eles/Elas/Vocēs': 'ensinam'
      }
    },
    {
      english: 'to close',
      infinitive: 'fechar',
      presentSimple: {
        Eu: 'fecho',
        Tu: 'fechas',
        'Ela/Ele/Você': 'fecha',
        Nós: 'fechamos',
        'Eles/Elas/Vocēs': 'fecham'
      }
    },
    {
      english: 'to like',
      infinitive: 'gostar',
      presentSimple: {
        Eu: 'gosto',
        Tu: 'gostas',
        'Ela/Ele/Você': 'gosta',
        Nós: 'gostamos',
        'Eles/Elas/Vocēs': 'gostam'
      }
    },
    {
      english: 'to start',
      infinitive: 'começar',
      presentSimple: {
        Eu: 'começo',
        Tu: 'começas',
        'Ela/Ele/Você': 'começa',
        Nós: 'começamos',
        'Eles/Elas/Vocēs': 'começam'
      }
    },
    {
      english: 'to wash',
      infinitive: 'lavar',
      presentSimple: {
        Eu: 'lavo',
        Tu: 'lavas',
        'Ela/Ele/Você': 'lava',
        Nós: 'lavamos',
        'Eles/Elas/Vocēs': 'lavam'
      }
    },
    {
      english: 'to end',
      infinitive: 'acabar',
      presentSimple: {
        Eu: 'acabo',
        Tu: 'acabas',
        'Ela/Ele/Você': 'acaba',
        Nós: 'acabamos',
        'Eles/Elas/Vocēs': 'acabam'
      }
    },
    {
      english: 'to catch',
      infinitive: 'apanhar',
      presentSimple: {
        Eu: 'apanho',
        Tu: 'apanhas',
        'Ela/Ele/Você': 'apanha',
        Nós: 'apanhamos',
        'Eles/Elas/Vocēs': 'apanham'
      }
    },
    {
      english: 'to wear',
      infinitive: 'vestir',
      presentSimple: {
        Eu: 'visto',
        Tu: 'vestes',
        'Ela/Ele/Você': 'veste',
        Nós: 'vestimos',
        'Eles/Elas/Vocēs': 'vestem'
      }
    },
    {
      english: 'to divide',
      infinitive: 'dividir',
      presentSimple: {
        Eu: 'divido',
        Tu: 'divides',
        'Ela/Ele/Você': 'divide',
        Nós: 'dividimos',
        'Eles/Elas/Vocēs': 'dividem'
      }
    },
    {
      english: 'to take off',
      infinitive: 'despir',
      presentSimple: {
        Eu: 'dispo',
        Tu: 'despes',
        'Ela/Ele/Você': 'despe',
        Nós: 'despimos',
        'Eles/Elas/Vocēs': 'despem'
      }
    },
    {
      english: 'to correct',
      infinitive: 'despir',
      presentSimple: {
        Eu: 'corrijo',
        Tu: 'corriges',
        'Ela/Ele/Você': 'corrige',
        Nós: 'corrigimos',
        'Eles/Elas/Vocēs': 'corrigem'
      }
    },
    {
      english: 'to decide',
      infinitive: 'decidir',
      presentSimple: {
        Eu: 'decido',
        Tu: 'decides',
        'Ela/Ele/Você': 'decide',
        Nós: 'decidimos',
        'Eles/Elas/Vocēs': 'decidem'
      }
    },
    {
      english: 'to get',
      infinitive: 'conseguir',
      presentSimple: {
        Eu: 'consigo',
        Tu: 'consegues',
        'Ela/Ele/Você': 'consegue',
        Nós: 'conseguimos',
        'Eles/Elas/Vocēs': 'conseguem'
      }
    },
    {
      english: 'to serve',
      infinitive: 'sirver',
      presentSimple: {
        Eu: 'sirvo',
        Tu: 'serves',
        'Ela/Ele/Você': 'serve',
        Nós: 'servimos',
        'Eles/Elas/Vocēs': 'servem'
      }
    },
    {
      english: 'to feel',
      infinitive: 'sentir',
      presentSimple: {
        Eu: 'sinto',
        Tu: 'sentes',
        'Ela/Ele/Você': 'sente',
        Nós: 'sentimos',
        'Eles/Elas/Vocēs': 'sentem'
      }
    },
    {
      english: 'to translate',
      infinitive: 'traduzir',
      presentSimple: {
        Eu: 'traduzo',
        Tu: 'traduzes',
        'Ela/Ele/Você': 'traduz',
        Nós: 'traduzimos',
        'Eles/Elas/Vocēs': 'traduzem'
      }
    },
    {
      english: 'to leave',
      infinitive: 'partir',
      presentSimple: {
        Eu: 'parto',
        Tu: 'partes',
        'Ela/Ele/Você': 'parte',
        Nós: 'partimos',
        'Eles/Elas/Vocēs': 'partem'
      }
    },
    {
      english: 'to prefer',
      infinitive: 'preferir',
      presentSimple: {
        Eu: 'prefiro',
        Tu: 'preferes',
        'Ela/Ele/Você': 'prefere',
        Nós: 'preferimos',
        'Eles/Elas/Vocēs': 'preferem'
      }
    },
    {
      english: 'to discuss',
      infinitive: 'discutir',
      presentSimple: {
        Eu: 'discuto',
        Tu: 'discutes',
        'Ela/Ele/Você': 'discute',
        Nós: 'discutimos',
        'Eles/Elas/Vocēs': 'discutem'
      }
    },
    {
      english: 'to conduct',
      infinitive: 'conduzir',
      presentSimple: {
        Eu: 'conduzo',
        Tu: 'conduzes',
        'Ela/Ele/Você': 'conduz',
        Nós: 'conduzimos',
        'Eles/Elas/Vocēs': 'conduzem'
      }
    },
    {
      english: 'to allow',
      infinitive: 'permitir',
      presentSimple: {
        Eu: 'permito',
        Tu: 'permites',
        'Ela/Ele/Você': 'permite',
        Nós: 'permitimos',
        'Eles/Elas/Vocēs': 'permitem'
      }
    },
    {
      english: 'to allow',
      infinitive: 'permitir',
      presentSimple: {
        Eu: 'permito',
        Tu: 'permites',
        'Ela/Ele/Você': 'permite',
        Nós: 'permitimos',
        'Eles/Elas/Vocēs': 'permitem'
      }
    },
    {
      english: 'to organise',
      infinitive: 'organizar',
      presentSimple: {
        Eu: 'organizo',
        Tu: 'organizas',
        'Ela/Ele/Você': 'organiza',
        Nós: 'organizamos',
        'Eles/Elas/Vocēs': 'organizam'
      }
    },
    {
      english: 'to clean',
      infinitive: 'limpar',
      presentSimple: {
        Eu: 'limpo',
        Tu: 'limpas',
        'Ela/Ele/Você': 'limpa',
        Nós: 'limpamos',
        'Eles/Elas/Vocēs': 'limpam'
      }
    },
    {
      english: 'to put',
      infinitive: 'pôr',
      presentSimple: {
        Eu: 'ponho',
        Tu: 'pões',
        'Ela/Ele/Você': 'põe',
        Nós: 'pomos',
        'Eles/Elas/Vocēs': 'põem'
      },
      pastPerfect: {
        Eu: 'pus',
        Tu: 'puseste',
        'Ela/Ele/Você': 'pôs',
        Nós: 'pusemos',
        'Eles/Elas/Vocēs': 'puseram'
      }
    },
    {
      english: 'to take care',
      infinitive: 'cuidar',
      presentSimple: {
        Eu: 'cuido',
        Tu: 'cuidas',
        'Ela/Ele/Você': 'cuida',
        Nós: 'cuidamos',
        'Eles/Elas/Vocēs': 'cuidam'
      },
      pastPerfect: {
        Eu: 'cuidei',
        Tu: 'cuidaste',
        'Ela/Ele/Você': 'cuidou',
        Nós: 'cuidastes',
        'Eles/Elas/Vocēs': 'cuidaram'
      }
    },
    {
      english: 'to send',
      infinitive: 'mandar',
      presentSimple: {
        Eu: 'mando',
        Tu: 'mandas',
        'Ela/Ele/Você': 'manda',
        Nós: 'mandamos',
        'Eles/Elas/Vocēs': 'mandam'
      },
      pastPerfect: {
        Eu: 'mandei',
        Tu: 'mandaste',
        'Ela/Ele/Você': 'mandou',
        Nós: 'mandámos',
        'Eles/Elas/Vocēs': 'mandaram'
      }
    },
    {
      english: 'to fill',
      infinitive: 'encher',
      presentSimple: {
        Eu: 'encho',
        Tu: 'enches',
        'Ela/Ele/Você': 'enche',
        Nós: 'enchemos',
        'Eles/Elas/Vocēs': 'enchem'
      },
      pastPerfect: {
        Eu: 'enchi',
        Tu: 'encheste',
        'Ela/Ele/Você': 'encheu',
        Nós: 'enchestes',
        'Eles/Elas/Vocēs': 'encheram'
      }
    },
    {
      english: 'to hold',
      infinitive: 'pegar',
      presentSimple: {
        Eu: 'pego',
        Tu: 'pegas',
        'Ela/Ele/Você': 'pega',
        Nós: 'pegamos',
        'Eles/Elas/Vocēs': 'pegam'
      },
      pastPerfect: {
        Eu: 'peguei',
        Tu: 'pegaste',
        'Ela/Ele/Você': 'pegou',
        Nós: 'pegámos',
        'Eles/Elas/Vocēs': 'pegaram'
      }
    },
    {
      english: 'to play instrument',
      infinitive: 'tocar',
      presentSimple: {
        Eu: 'toco',
        Tu: 'tocas',
        'Ela/Ele/Você': 'toca',
        Nós: 'tocamos',
        'Eles/Elas/Vocēs': 'tocam'
      },
      pastPerfect: {
        Eu: 'toquei',
        Tu: 'tocaste',
        'Ela/Ele/Você': 'tocou',
        Nós: 'tocámos',
        'Eles/Elas/Vocēs': 'tocaram'
      }
    },
    {
      english: 'to help',
      infinitive: 'ajudar',
      presentSimple: {
        Eu: 'ajudo',
        Tu: 'ajudas',
        'Ela/Ele/Você': 'ajuda',
        Nós: 'ajudamos',
        'Eles/Elas/Vocēs': 'ajudam'
      },
      pastPerfect: {
        Eu: 'ajudei',
        Tu: 'ajudaste',
        'Ela/Ele/Você': 'ajudou',
        Nós: 'ajudámos',
        'Eles/Elas/Vocēs': 'ajudaram'
      }
    },
    {
      english: 'to walk',
      infinitive: 'passear',
      presentSimple: {
        Eu: 'passeio',
        Tu: 'passeias',
        'Ela/Ele/Você': 'passeia',
        Nós: 'passeamos',
        'Eles/Elas/Vocēs': 'passeiam'
      },
      pastPerfect: {
        Eu: 'passeei',
        Tu: 'passeaste',
        'Ela/Ele/Você': 'passeou',
        Nós: 'passeámos',
        'Eles/Elas/Vocēs': 'passearam'
      }
    }
  ],
  nouns: [
    {
      english: 'girlfriend',
      portuguese: {
        word: 'namorada',
        plural: 'namoradas',
        gender: 'feminine'
      }
    },
    {
      english: 'tea',
      portuguese: {
        word: 'chá',
        gender: 'masculine'
      }
    },
    {
      english: 'home',
      portuguese: {
        word: 'casa',
        plural: 'casas',
        gender: 'feminine'
      }
    },
    {
      english: 'book',
      portuguese: {
        word: 'livro',
        plural: 'livros',
        gender: 'masculine'
      }
    },
    {
      english: 'city',
      portuguese: {
        word: 'cidade',
        plural: 'cidades',
        gender: 'feminine'
      }
    },
    {
      english: 'time',
      portuguese: {
        word: 'tempo',
        gender: 'masculine'
      }
    },
    {
      english: 'street',
      portuguese: {
        word: 'rua',
        gender: 'feminine'
      }
    },
    {
      english: 'city',
      portuguese: {
        word: 'cidade',
        gender: 'feminine'
      }
    },
    {
      english: 'table',
      portuguese: {
        word: 'mesa',
        gender: 'feminine'
      }
    },
    {
      english: 'sport',
      portuguese: {
        word: 'desporto',
        gender: 'masculine'
      }
    },
    {
      english: 'dinner',
      portuguese: {
        word: 'jantar',
        gender: 'masculine'
      }
    },
    {
      english: 'lunch',
      portuguese: {
        word: 'almoço',
        gender: 'masculine'
      }
    },
    {
      english: 'food',
      portuguese: {
        word: 'comida',
        gender: 'feminine'
      }
    },
    {
      english: 'kitchen',
      portuguese: {
        word: 'cozinha',
        gender: 'feminine'
      }
    },
    {
      english: 'computer',
      portuguese: {
        word: 'computador',
        gender: 'masculine'
      }
    },
    {
      english: 'bathroom',
      portuguese: {
        word: 'casa-de-banho',
        gender: 'feminine'
      }
    },
    {
      english: 'lesson',
      portuguese: {
        word: 'aula',
        gender: 'feminine'
      }
    },
    {
      english: 'year',
      portuguese: {
        word: 'ano',
        gender: 'masculine'
      }
    },
    {
      english: 'month',
      portuguese: {
        word: 'mês',
        gender: 'masculine'
      }
    },
    {
      english: 'week',
      portuguese: {
        word: 'semana',
        gender: 'feminine'
      }
    },
    {
      english: 'day',
      portuguese: {
        word: 'dia',
        gender: 'masculine'
      }
    },
    {
      english: 'country',
      portuguese: {
        word: 'pais',
        gender: 'masculine'
      }
    },
    {
      english: 'desert',
      portuguese: {
        word: 'sobremesa',
        gender: 'feminine'
      }
    },
    {
      english: 'cake',
      portuguese: {
        word: 'bolo',
        gender: 'masculine'
      }
    },
    {
      english: 'bottle',
      portuguese: {
        word: 'garrafa',
        gender: 'feminine'
      }
    },
    {
      english: 'chicken',
      portuguese: {
        word: 'galinha',
        gender: 'feminine'
      }
    },
    {
      english: 'plant',
      portuguese: {
        word: 'planta',
        gender: 'feminine'
      }
    },
    {
      english: 'flower',
      portuguese: {
        word: 'flor',
        gender: 'feminine'
      }
    },
    {
      english: 'soup',
      portuguese: {
        word: 'sopa',
        gender: 'feminine'
      }
    },
    {
      english: 'drink',
      portuguese: {
        word: 'bebida',
        gender: 'feminine'
      }
    },
    {
      english: 'water',
      portuguese: {
        word: 'água',
        gender: 'feminine'
      }
    },
    {
      english: 'door',
      portuguese: {
        word: 'porta',
        gender: 'feminine'
      }
    },
    {
      english: 'window',
      portuguese: {
        word: 'janela',
        gender: 'feminine'
      }
    },
    {
      english: 'fish',
      portuguese: {
        word: 'peixe',
        gender: 'masculine'
      }
    },
    {
      english: 'cheese',
      portuguese: {
        word: 'queijo',
        gender: 'masculine'
      }
    },
    {
      english: 'balcony',
      portuguese: {
        word: 'varanda',
        gender: 'feminine'
      }
    },
    {
      english: 'apartment',
      portuguese: {
        word: 'apartamento',
        gender: 'masculine'
      }
    },
    {
      english: 'house',
      portuguese: {
        word: 'casa',
        gender: 'feminine'
      }
    },
    {
      english: 'women',
      portuguese: {
        word: 'mulher',
        gender: 'feminine'
      }
    },
    {
      english: 'man',
      portuguese: {
        word: 'homem',
        gender: 'masculine'
      }
    },
    {
      english: 'floor',
      portuguese: {
        word: 'chão',
        gender: 'masculine'
      }
    },
    {
      english: 'mother',
      portuguese: {
        word: 'mãe',
        gender: 'feminine'
      }
    },
    {
      english: 'father',
      portuguese: {
        word: 'pai',
        gender: 'masculine'
      }
    },
    {
      english: 'bathtube',
      portuguese: {
        word: 'banheira',
        gender: 'feminine'
      }
    },
    {
      english: 'light',
      portuguese: {
        word: 'luz',
        gender: 'feminine'
      }
    },
    {
      english: 'desk',
      portuguese: {
        word: 'secretária',
        gender: 'feminine'
      }
    },
    {
      english: 'sister',
      portuguese: {
        word: 'irmã',
        gender: 'feminine'
      }
    },
    {
      english: 'brother',
      portuguese: {
        word: 'irmão',
        gender: 'masculine'
      }
    },
    {
      english: 'hour',
      portuguese: {
        word: 'hora',
        gender: 'feminine'
      }
    },
    {
      english: 'stairs',
      portuguese: {
        word: 'escadas',
        gender: 'feminine'
      }
    },
    {
      english: 'calculator',
      portuguese: {
        word: 'calculadore',
        gender: 'feminine'
      }
    },
    {
      english: 'plain',
      portuguese: {
        word: 'avião',
        gender: 'masculine'
      }
    },
    {
      english: 'second',
      portuguese: {
        word: 'segundo',
        gender: 'masculine'
      }
    },
    {
      english: 'minute',
      portuguese: {
        word: 'minuto',
        gender: 'masculine'
      }
    },
    {
      english: 'boat',
      portuguese: {
        word: 'barco',
        gender: 'masculine'
      }
    },
    {
      english: 'ship',
      portuguese: {
        word: 'navio',
        gender: 'masculine'
      }
    },
    {
      english: 'jacket',
      portuguese: {
        word: 'casaco',
        gender: 'masculine'
      }
    },
    // {
    //   english: 'shoes',
    //   portuguese: {
    //     word: 'sapatos',
    //     gender: 'masculine'
    //   },
    //
    // },
    {
      english: 'long sleeve',
      portuguese: {
        word: 'camisola',
        gender: 'masculine'
      }
    },
    // {
    //   english: 'pants',
    //   portuguese: {
    //     word: 'calças',
    //     gender: 'feminine'
    //   },
    //
    // },
    {
      english: 'mobile phone',
      portuguese: {
        word: 'telemóvel',
        gender: 'masculine'
      }
    },
    {
      english: 'pillow',
      portuguese: {
        word: 'almofada',
        gender: 'feminine'
      }
    },
    {
      english: 'chair',
      portuguese: {
        word: 'cadeira',
        gender: 'feminine'
      }
    },
    {
      english: 'hair',
      portuguese: {
        word: 'cabelo',
        gender: 'masculine'
      }
    },
    {
      english: 'eyes',
      portuguese: {
        word: 'olhos',
        gender: 'masculine'
      }
    },
    {
      english: 'arm',
      portuguese: {
        word: 'braço',
        gender: 'masculine'
      }
    },
    {
      english: 'leg',
      portuguese: {
        word: 'perna',
        gender: 'feminine'
      }
    },
    {
      english: 'foot',
      portuguese: {
        word: 'pé',
        gender: 'masculine'
      }
    },
    {
      english: 'head',
      portuguese: {
        word: 'cabeça',
        gender: 'feminine'
      }
    },
    {
      english: 'bicicle',
      portuguese: {
        word: 'bicicleta',
        gender: 'feminine'
      }
    },
    {
      english: 'oven',
      portuguese: {
        word: 'forno',
        gender: 'masculine'
      }
    },
    {
      english: 'frying pan',
      portuguese: {
        word: 'frigideira',
        gender: 'feminine'
      }
    },
    // {
    //   english: 'socks',
    //   portuguese: {
    //     word: 'meias',
    //     gender: 'feminine'
    //   },
    //
    // },
    {
      english: 'sink',
      portuguese: {
        word: 'lavatório',
        gender: 'masculine'
      }
    },
    {
      english: 'toilet',
      portuguese: {
        word: 'sanita',
        gender: 'feminine'
      }
    },
    {
      english: 'knife',
      portuguese: {
        word: 'faca',
        gender: 'feminine'
      }
    },
    {
      english: 'spoon',
      portuguese: {
        word: 'colher',
        gender: 'feminine'
      }
    },
    {
      english: 'fork',
      portuguese: {
        word: 'garfo',
        gender: 'masculine'
      }
    },
    {
      english: 'saucepan',
      portuguese: {
        word: 'panela',
        gender: 'feminine'
      }
    },
    {
      english: 'glass',
      portuguese: {
        word: 'copo',
        gender: 'masculine'
      }
    },
    {
      english: 'mug',
      portuguese: {
        word: 'caneca',
        gender: 'feminine'
      }
    },
    {
      english: 'plate',
      portuguese: {
        word: 'prato',
        gender: 'masculine'
      }
    },
    // {
    //   english: 'cutlery',
    //   portuguese: {
    //     word: 'talheres',
    //     gender: 'masculine'
    //   },
    //
    // },
    {
      english: 'sofa',
      portuguese: {
        word: 'sofá',
        gender: 'masculine'
      }
    },
    {
      english: 'picture',
      portuguese: {
        word: 'quadro',
        gender: 'masculine'
      }
    },
    {
      english: 'wall',
      portuguese: {
        word: 'parede',
        gender: 'feminine'
      }
    },
    {
      english: 'microwave',
      portuguese: {
        word: 'micro-ondas',
        gender: 'masculine'
      }
    },
    {
      english: 'towel',
      portuguese: {
        word: 'toalha',
        gender: 'feminine'
      }
    },
    {
      english: 'soap',
      portuguese: {
        word: 'sabonete',
        gender: 'masculine'
      }
    },
    {
      english: 'fridge',
      portuguese: {
        word: 'frigorífico',
        gender: 'masculine'
      }
    },
    {
      english: 'freezer',
      portuguese: {
        word: 'congelador',
        gender: 'masculine'
      }
    },
    {
      english: 'garbage bin',
      portuguese: {
        word: 'caixote do lixo',
        gender: 'masculine'
      }
    },
    {
      english: 'toothpaste',
      portuguese: {
        word: 'pasta dos dentes',
        gender: 'feminine'
      }
    },
    {
      english: 'mirror',
      portuguese: {
        word: 'espelho',
        gender: 'masculine'
      }
    },
    {
      english: 'napkin',
      portuguese: {
        word: 'guardanapo',
        gender: 'masculine'
      }
    },
    {
      english: 'bowl',
      portuguese: {
        word: 'taça',
        gender: 'feminine'
      }
    },
    {
      english: 'box',
      portuguese: {
        word: 'caixa',
        gender: 'feminine'
      }
    },
    {
      english: 'tree',
      portuguese: {
        word: 'árvore',
        gender: 'feminine'
      }
    },
    {
      english: 'girl',
      portuguese: {
        word: 'rapariga',
        gender: 'feminine'
      }
    },
    {
      english: 'friend',
      portuguese: {
        word: 'amigo',
        gender: 'masculine'
      }
    },
    {
      english: '0',
      portuguese: {
        word: 'zero',
        gender: 'none'
      }
    },
    {
      english: '1',
      portuguese: {
        word: 'um',
        gender: 'none'
      }
    },
    {
      english: '2',
      portuguese: {
        word: 'dois',
        gender: 'none'
      }
    },
    {
      english: '3',
      portuguese: {
        word: 'três',
        gender: 'none'
      }
    },
    {
      english: '4',
      portuguese: {
        word: 'quatro',
        gender: 'none'
      }
    },
    {
      english: '5',
      portuguese: {
        word: 'cinco',
        gender: 'none'
      }
    },
    {
      english: '6',
      portuguese: {
        word: 'seis',
        gender: 'none'
      }
    },
    {
      english: '7',
      portuguese: {
        word: 'sete',
        gender: 'none'
      }
    },
    {
      english: '8',
      portuguese: {
        word: 'oito',
        gender: 'none'
      }
    },
    {
      english: '9',
      portuguese: {
        word: 'nove',
        gender: 'none'
      }
    },
    {
      english: '10',
      portuguese: {
        word: 'dez',
        gender: 'none'
      }
    },
    {
      english: '11',
      portuguese: {
        word: 'onze',
        gender: 'none'
      }
    },
    {
      english: '12',
      portuguese: {
        word: 'doze',
        gender: 'none'
      }
    },
    {
      english: '13',
      portuguese: {
        word: 'treze',
        gender: 'none'
      }
    },
    {
      english: '14',
      portuguese: {
        word: 'catorze',
        gender: 'none'
      }
    },
    {
      english: '15',
      portuguese: {
        word: 'quinze',
        gender: 'none'
      }
    },
    {
      english: '16',
      portuguese: {
        word: 'dezasseis',
        gender: 'none'
      }
    },
    {
      english: '17',
      portuguese: {
        word: 'dezassete',
        gender: 'none'
      }
    },
    {
      english: '18',
      portuguese: {
        word: 'dezoito',
        gender: 'none'
      }
    },
    {
      english: '19',
      portuguese: {
        word: 'dezanove',
        gender: 'none'
      }
    },
    {
      english: '20',
      portuguese: {
        word: 'vinte',
        gender: 'none'
      }
    },
    {
      english: '21',
      portuguese: {
        word: 'vinte e um',
        gender: 'none'
      }
    },
    {
      english: '22',
      portuguese: {
        word: 'vinte e dois',
        gender: 'none'
      }
    },
    {
      english: '23',
      portuguese: {
        word: 'vinte e três',
        gender: 'none'
      }
    },
    {
      english: '30',
      portuguese: {
        word: 'trinta',
        gender: 'none'
      }
    },
    {
      english: '40',
      portuguese: {
        word: 'quarenta',
        gender: 'none'
      }
    },
    {
      english: '50',
      portuguese: {
        word: 'cinquenta',
        gender: 'none'
      }
    },
    {
      english: '60',
      portuguese: {
        word: 'sessenta',
        gender: 'none'
      }
    },
    {
      english: '70',
      portuguese: {
        word: 'setenta',
        gender: 'none'
      }
    },
    {
      english: '80',
      portuguese: {
        word: 'oitenta',
        gender: 'none'
      }
    },
    {
      english: '90',
      portuguese: {
        word: 'noventa',
        gender: 'none'
      }
    },
    {
      english: '100',
      portuguese: {
        word: 'cem',
        gender: 'none'
      }
    },
    {
      english: 'turn',
      portuguese: {
        word: 'vez',
        gender: 'feminine'
      }
    },
    {
      english: 'thing',
      portuguese: {
        word: 'coisa',
        gender: 'feminine'
      }
    },
    {
      english: 'weather',
      portuguese: {
        word: 'tempo',
        gender: 'masculine'
      }
    },
    {
      english: 'person',
      portuguese: {
        word: 'pessoa',
        gender: 'feminine'
      }
    },
    {
      english: 'form',
      portuguese: {
        word: 'forma',
        gender: 'feminine'
      }
    },
    {
      english: 'part',
      portuguese: {
        word: 'parte',
        gender: 'feminine'
      }
    },
    {
      english: 'state',
      portuguese: {
        word: 'estado',
        gender: 'masculine'
      }
    },
    {
      english: 'government',
      portuguese: {
        word: 'governo',
        gender: 'masculine'
      }
    },
    {
      english: 'work',
      portuguese: {
        word: 'trabalho',
        gender: 'masculine'
      }
    },
    {
      english: 'side',
      portuguese: {
        word: 'lado',
        gender: 'masculine'
      }
    },
    {
      english: 'group',
      portuguese: {
        word: 'grupo',
        gender: 'masculine'
      }
    },
    {
      english: 'earth',
      portuguese: {
        word: 'terra',
        gender: 'feminine'
      }
    },
    {
      english: 'name',
      portuguese: {
        word: 'nome',
        gender: 'masculine'
      }
    },
    {
      english: 'son',
      portuguese: {
        word: 'filho',
        gender: 'masculine'
      }
    },
    {
      english: 'problem',
      portuguese: {
        word: 'problema',
        gender: 'masculine'
      }
    },
    {
      english: 'company',
      portuguese: {
        word: 'empresa',
        gender: 'feminine'
      }
    },
    {
      english: 'right',
      portuguese: {
        word: 'direito',
        gender: 'masculine'
      }
    },
    {
      english: 'system',
      portuguese: {
        word: 'sistema',
        gender: 'masculine'
      }
    },
    {
      english: 'region',
      portuguese: {
        word: 'região',
        gender: 'feminine'
      }
    },
    {
      english: 'point',
      portuguese: {
        word: 'ponto',
        gender: 'masculine'
      }
    },
    {
      english: 'end',
      portuguese: {
        word: 'fim',
        gender: 'masculine'
      }
    },
    {
      english: 'lamp',
      portuguese: {
        word: 'lâmpada',
        plural: 'lâmpadas',
        gender: 'feminine'
      }
    },
    {
      english: 'shelf',
      portuguese: {
        word: 'prateleira',
        plural: 'prateleiras',
        gender: 'feminine'
      }
    },
    {
      english: 'washing machine',
      portuguese: {
        word: 'maquina de lavar',
        plural: 'maquinas de lavar',
        gender: 'feminine'
      }
    },
    {
      english: 'air',
      portuguese: {
        word: 'ar',
        plural: '',
        gender: 'masculine'
      }
    },
    {
      english: 'leaf',
      portuguese: {
        word: 'folha',
        plural: 'folhas',
        gender: 'feminine'
      }
    },
    {
      english: 'forest',
      portuguese: {
        word: 'floresta',
        plural: 'florestas',
        gender: 'feminine'
      }
    },
    {
      english: 'beach',
      portuguese: {
        word: 'praia',
        plural: 'praias',
        gender: 'feminine'
      }
    },
    {
      english: 'Easter',
      portuguese: {
        word: 'Páscoa',
        plural: 'Páscoas',
        gender: 'feminine'
      }
    },
    {
      english: 'christmas',
      portuguese: {
        word: 'Natal',
        plural: 'natais',
        gender: 'masculine'
      }
    },
    {
      english: 'knowledge',
      portuguese: {
        word: 'conhecimento',
        plural: 'conhecimentos',
        gender: 'masculine'
      }
    },
    {
      english: 'spinach',
      portuguese: {
        word: 'espinafre',
        plural: 'espinafres',
        gender: 'masculine'
      }
    },
    {
      english: 'gym',
      portuguese: {
        word: 'ginásio',
        plural: 'ginásios',
        gender: 'masculine'
      }
    },
    {
      english: 'cable',
      portuguese: {
        word: 'cabo',
        plural: 'cabos',
        gender: 'masculine'
      }
    },
    {
      english: 'bag',
      portuguese: {
        word: 'saco',
        plural: 'sacos',
        gender: 'masculine'
      }
    },
    {
      english: 'mall',
      portuguese: {
        word: 'centro comercial',
        plural: 'centros comerciais',
        gender: 'masculine'
      }
    },
    {
      english: 'park',
      portuguese: {
        word: 'parque',
        plural: 'parques',
        gender: 'masculine'
      }
    },
    {
      english: 'space',
      portuguese: {
        word: 'espaço',
        plural: 'espaços',
        gender: 'masculine'
      }
    },
    {
      english: 'thought',
      portuguese: {
        word: 'pensamento',
        plural: 'pensamentos',
        gender: 'masculine'
      }
    },
    {
      english: 'idea',
      portuguese: {
        word: 'ideia',
        plural: 'ideias',
        gender: 'feminine'
      }
    },
    {
      english: 'heater',
      portuguese: {
        word: 'aquecedor',
        plural: 'aquecedores',
        gender: 'masculine'
      }
    },
    {
      english: 'decoration',
      portuguese: {
        word: 'decoração',
        plural: 'decorações',
        gender: 'feminine'
      }
    },
    {
      english: 'food container',
      portuguese: {
        word: 'tupperware',
        plural: 'tupperwares',
        gender: 'masculine'
      }
    },
    {
      english: 'container',
      portuguese: {
        word: 'contentor',
        plural: 'contentores',
        gender: 'masculine'
      }
    },
    {
      english: 'future',
      portuguese: {
        word: 'futuro',
        plural: 'futuros',
        gender: 'masculine'
      }
    },
    {
      english: 'music',
      portuguese: {
        word: 'música',
        plural: 'músicas',
        gender: 'feminine'
      }
    },
    {
      english: 'neck',
      portuguese: {
        word: 'pescoço',
        plural: 'pescoços',
        gender: 'masculine'
      }
    },
    {
      english: 'belly',
      portuguese: {
        word: 'umbigo',
        plural: 'umbigos',
        gender: 'masculine'
      }
    },
    {
      english: 'finger',
      portuguese: {
        word: 'dedo',
        plural: 'dedos',
        gender: 'masculine'
      }
    },
    {
      english: 'nose',
      portuguese: {
        word: 'nariz',
        plural: 'narizes',
        gender: 'masculine'
      }
    },
    {
      english: 'head',
      portuguese: {
        word: 'cabeça',
        plural: 'cabeças',
        gender: 'feminine'
      }
    },
    {
      english: 'pain',
      portuguese: {
        word: 'dor',
        plural: 'dores',
        gender: 'feminine'
      }
    },
    {
      english: 'rug',
      portuguese: {
        word: 'tapete',
        plural: 'tapetes',
        gender: 'masculine'
      }
    },
    {
      english: 'conversation',
      portuguese: {
        word: 'conversa',
        plural: 'conversas',
        gender: 'feminine'
      }
    },
    {
      english: 'message',
      portuguese: {
        word: 'mensagem',
        plural: 'mensagens',
        gender: 'feminine'
      }
    },
    {
      english: 'train',
      portuguese: {
        word: 'comboio',
        plural: 'comboios',
        gender: 'masculine'
      }
    },
    {
      english: 'cabinet',
      portuguese: {
        word: 'armário',
        plural: 'armários',
        gender: 'masculine'
      }
    },
    {
      english: 'movie',
      portuguese: {
        word: 'filme',
        plural: 'filmes',
        gender: 'masculine'
      }
    },
    {
      english: 'sand',
      portuguese: {
        word: 'areia',
        plural: 'areias',
        gender: 'feminine'
      }
    },
    {
      english: 'health',
      portuguese: {
        word: 'saúde',
        plural: 'saúde',
        gender: 'feminine'
      }
    },
    {
      english: 'piano',
      portuguese: {
        word: 'piano',
        plural: 'pianos',
        gender: 'masculine'
      }
    },
    {
      english: 'blinders',
      portuguese: {
        word: 'persiana',
        plural: 'persianas',
        gender: 'feminine'
      }
    },
    {
      english: 'bed',
      portuguese: {
        word: 'cama',
        plural: 'camas',
        gender: 'feminine'
      }
    },
    {
      english: 'bedroom',
      portuguese: {
        word: 'quarto',
        plural: 'quartos',
        gender: 'masculine'
      }
    },
    {
      english: 'apple',
      portuguese: {
        word: 'maça',
        plural: 'maças',
        gender: 'feminine'
      }
    },
    {
      english: 'peace',
      portuguese: {
        word: 'paz',
        gender: 'feminine'
      }
    },
    {
      english: 'plan',
      portuguese: {
        word: 'plano',
        plural: 'planos',
        gender: 'masculine'
      }
    },
    {
      english: 'honey',
      portuguese: {
        word: 'mel',
        gender: 'masculine'
      }
    },
    {
      english: 'ginger',
      portuguese: {
        word: 'gengibre',
        gender: 'masculine'
      }
    }
  ],
  others: [
    {
      english: 'under',
      portuguese: 'debaixo'
    },
    {
      english: 'behind',
      portuguese: 'atrás'
    },
    {
      english: 'next to',
      portuguese: 'ao lado de'
    },
    {
      english: 'on top of',
      portuguese: 'em cima de'
    },
    {
      english: 'in',
      portuguese: 'no'
    },
    {
      english: 'between',
      portuguese: 'entre'
    },
    {
      english: 'before',
      portuguese: 'antes'
    },
    {
      english: 'after',
      portuguese: 'depois'
    },
    {
      english: 'today',
      portuguese: 'hoje'
    },
    {
      english: 'yesterday',
      portuguese: 'ontem'
    },
    {
      english: 'tomorrow',
      portuguese: 'amanha'
    },
    {
      english: 'since',
      portuguese: 'desde'
    },
    {
      english: 'when',
      portuguese: 'quando'
    },
    {
      english: 'where',
      portuguese: 'onde'
    },
    {
      english: 'who',
      portuguese: 'quem'
    },
    {
      english: 'nobody',
      portuguese: 'ninguém'
    },
    {
      english: 'everybody',
      portuguese: 'toda a gente'
    },
    {
      english: 'another',
      portuguese: 'outro'
    },
    {
      english: 'next',
      portuguese: 'próximo'
    },
    {
      english: 'previous',
      portuguese: 'anterior'
    },
    {
      english: 'last',
      portuguese: 'último'
    },
    {
      english: 'first',
      portuguese: 'primeiro'
    },
    {
      english: 'middle',
      portuguese: 'meio'
    },
    {
      english: 'Monday',
      portuguese: 'segunda-feira'
    },
    {
      english: 'Tuesday',
      portuguese: 'terça-feira'
    },
    {
      english: 'Wednesday',
      portuguese: 'quarta-feira'
    },
    {
      english: 'Thursday',
      portuguese: 'quinta-feira'
    },
    {
      english: 'Friday',
      portuguese: 'sexta-feira'
    },
    {
      english: 'Saturday',
      portuguese: 'sábado'
    },
    {
      english: 'Sunday',
      portuguese: 'domingo'
    },
    {
      english: 'only',
      portuguese: 'único'
    },
    {
      english: 'every',
      portuguese: 'todos'
    },
    {
      english: 'none of',
      portuguese: 'nenhum'
    },
    {
      english: 'never',
      portuguese: 'nunca'
    },
    {
      english: 'always',
      portuguese: 'sempre'
    },
    {
      english: 'sometimes',
      portuguese: 'algumas vezes'
    },
    {
      english: 'often',
      portuguese: 'muitas vezes'
    },
    {
      english: 'frequently',
      portuguese: 'frequentemente'
    },
    {
      english: 'half',
      portuguese: 'meio'
    },
    {
      english: 'quarter',
      portuguese: 'quarto'
    },
    {
      english: 'whole',
      portuguese: 'inteiro'
    },
    {
      english: 'part of',
      portuguese: 'parte de'
    },
    {
      english: 'me',
      portuguese: 'eu'
    },
    {
      english: 'you',
      portuguese: 'tu'
    },
    {
      english: 'she',
      portuguese: 'ela'
    },
    {
      english: 'he',
      portuguese: 'ele'
    },
    {
      english: 'they',
      portuguese: 'eles'
    },
    {
      english: 'we',
      portuguese: 'nos'
    },
    {
      english: 'mine - feminine',
      portuguese: 'minha'
    },
    {
      english: 'mine - masculine',
      portuguese: 'meu'
    },
    {
      english: 'yours - feminine',
      portuguese: 'tuas'
    },
    {
      english: 'yours - masculine',
      portuguese: 'teus'
    },
    {
      english: 'January',
      portuguese: 'Janeiro'
    },
    {
      english: 'February',
      portuguese: 'Fevereiro'
    },
    {
      english: 'March',
      portuguese: 'Março'
    },
    {
      english: 'April',
      portuguese: 'Abril'
    },
    {
      english: 'May',
      portuguese: 'Maio'
    },
    {
      english: 'June',
      portuguese: 'Junho'
    },
    {
      english: 'July',
      portuguese: 'Julho'
    },
    {
      english: 'August',
      portuguese: 'Agosto'
    },
    {
      english: 'September',
      portuguese: 'Setembro'
    },
    {
      english: 'October',
      portuguese: 'Outubro'
    },
    {
      english: 'November',
      portuguese: 'Novembro'
    },
    {
      english: 'December',
      portuguese: 'Dezembro'
    },
    {
      english: 'around',
      portuguese: 'à volta de'
    },
    {
      english: 'near',
      portuguese: 'perto'
    },
    {
      english: 'far',
      portuguese: 'longe'
    },
  ],
  adjectives: [
    {
      masculine: {
        singular: 'grande',
        plural: 'grandes'
      },
      feminine: {
        singular: 'grande',
        plural: 'grandes'
      },
      placing: 'after',
      english: 'big'
    },
    {
      masculine: {
        singular: 'alto',
        plural: 'altos'
      },
      feminine: {
        singular: 'alta',
        plural: 'altas'
      },
      placing: 'after',
      english: 'tall'
    },
    {
      masculine: {
        singular: 'bom',
        plural: 'bons'
      },
      feminine: {
        singular: 'boa',
        plural: 'boas'
      },
      placing: 'after',
      english: 'good'
    },
    {
      masculine: {
        singular: 'quente',
        plural: 'quentes'
      },
      feminine: {
        singular: 'quente',
        plural: 'quentes'
      },
      placing: 'after',
      english: 'hot'
    },
    {
      masculine: {
        singular: 'cansado',
        plural: 'cansados'
      },
      feminine: {
        singular: 'cansada',
        plural: 'cansadas'
      },
      placing: 'after',
      english: 'tired'
    },
    {
      masculine: {
        singular: 'bonito',
        plural: 'bonitos'
      },
      feminine: {
        singular: 'bonita',
        plural: 'bonitas'
      },
      placing: 'after',
      english: 'beautiful'
    },
    {
      masculine: {
        singular: 'velho',
        plural: 'velhos'
      },
      feminine: {
        singular: 'velha',
        plural: 'velhas'
      },
      placing: 'after',
      english: 'old'
    },
    {
      masculine: {
        singular: 'triste',
        plural: 'tristes'
      },
      feminine: {
        singular: 'triste',
        plural: 'tristes'
      },
      placing: 'after',
      english: 'sad'
    },
    {
      masculine: {
        singular: 'responsável',
        plural: 'responsáveis'
      },
      feminine: {
        singular: 'responsável',
        plural: 'responsáveis'
      },
      placing: 'after',
      english: 'responsible'
    },
    {
      masculine: {
        singular: 'pequeno',
        plural: 'pequenos'
      },
      feminine: {
        singular: 'pequena',
        plural: 'pequenas'
      },
      placing: 'after',
      english: 'small'
    },
    {
      masculine: {
        singular: 'novo',
        plural: 'novos'
      },
      feminine: {
        singular: 'nova',
        plural: 'novas'
      },
      placing: 'after',
      english: 'new'
    },
    {
      masculine: {
        singular: 'longo',
        plural: 'longos'
      },
      feminine: {
        singular: 'longa',
        plural: 'longas'
      },
      placing: 'after',
      english: 'long'
    },
    {
      masculine: {
        singular: 'forte',
        plural: 'fortes'
      },
      feminine: {
        singular: 'forte',
        plural: 'fortes'
      },
      placing: 'after',
      english: 'strong'
    },
    {
      masculine: {
        singular: 'fácil',
        plural: 'fáceis'
      },
      feminine: {
        singular: 'fácil',
        plural: 'fáceis'
      },
      placing: 'after',
      english: 'easy'
    },
    {
      masculine: {
        singular: 'fraco',
        plural: 'fracos'
      },
      feminine: {
        singular: 'fraca',
        plural: 'fracas'
      },
      placing: 'after',
      english: 'weak'
    },
    {
      masculine: {
        singular: 'vazio',
        plural: 'vazios'
      },
      feminine: {
        singular: 'vazia',
        plural: 'vazias'
      },
      placing: 'after',
      english: 'empty'
    },
    {
      masculine: {
        singular: 'cheio',
        plural: 'cheios'
      },
      feminine: {
        singular: 'cheia',
        plural: 'cheias'
      },
      placing: 'after',
      english: 'full'
    },
    {
      masculine: {
        singular: 'macio',
        plural: 'macios'
      },
      feminine: {
        singular: 'macia',
        plural: 'macias'
      },
      placing: 'after',
      english: 'soft'
    },
    {
      masculine: {
        singular: 'duro',
        plural: 'duros'
      },
      feminine: {
        singular: 'dura',
        plural: 'duras'
      },
      placing: 'after',
      english: 'hard'
    }
  ],
  sentences: [
    {
      english: 'How are you?',
      portuguese: 'Como estás?',
      sentenceType: 'question'
    },
    {
      english: 'Good idea',
      portuguese: 'Boa ideia',
      sentenceType: 'statement'
    },
    {
      english: 'All good',
      portuguese: 'Tudo bem',
      sentenceType: 'statement'
    },
    {
      english: 'Until tomorrow',
      portuguese: 'Até amanhã',
      sentenceType: 'statement'
    },
    {
      english: "I'm Marta",
      portuguese: 'Sou a Marta',
      sentenceType: 'statement'
    },
    {
      english: 'Nice to meet you',
      portuguese: 'Prazer',
      sentenceType: 'statement'
    },
    {
      english: 'And you?',
      portuguese: 'E tu?',
      sentenceType: 'question'
    },
    {
      english: 'Sandra is a studend',
      portuguese: 'A Sandra é estudante',
      sentenceType: 'statement'
    },
    {
      english: 'Andre and Paula are friends',
      portuguese: 'O Andre e a Paula são amigos',
      sentenceType: 'statement'
    },
    {
      english: 'Paulo is a friend of Vasco',
      portuguese: 'O Paulo é um amigo do Vasco',
      sentenceType: 'statement'
    },
    {
      english: 'Professor Vasco is very simpatic',
      portuguese: 'O professor Vasco é muito simpático',
      sentenceType: 'statement'
    },
    {
      english: 'What a surprise',
      portuguese: 'Que surpresa',
      sentenceType: 'statement'
    },
    {
      english: 'My friends think I walk too fast',
      portuguese: 'Os meus amigos acham que eu ando depressa demais',
      sentenceType: 'statement'
    },
    {
      english: 'Can you help me?',
      portuguese: 'Podes ajudar-me?',
      sentenceType: 'question'
    },
    {
      english: 'Do you want a coffee?',
      portuguese: 'Queres um café?',
      sentenceType: 'question'
    },
    {
      english: 'How much it costs?',
      portuguese: 'Quanto custa?',
      sentenceType: 'question'
    },
    {
      english: 'Where are you?',
      portuguese: 'Onde estás?',
      sentenceType: 'question'
    },
    {
      english: 'I am a strawberry',
      portuguese: 'Sou um morango',
      sentenceType: 'statement'
    },
    {
      english: "I'm going for a walk",
      portuguese: 'Vou dar uma volta',
      sentenceType: 'statement'
    },
    {
      english: 'I have to focus now',
      portuguese: 'Preciso de me concentrar agora',
      sentenceType: 'statement'
    },
    {
      english: 'What do you want to eat for dinner?',
      portuguese: 'O que queres comer para o jantar?',
      sentenceType: 'question'
    },
    {
      english: 'What time is it?',
      portuguese: 'Que horas são?',
      sentenceType: 'question'
    },
    {
      english: 'I have to prepare a coffee for Leonor',
      portuguese: 'Tenho de preparar um café para a Leonor',
      sentenceType: 'statement'
    },
    {
      english: 'I sleep until noon',
      portuguese: 'Durmo até ao meio dia',
      sentenceType: 'statement'
    },
    {
      english: "I'm going to take a shower",
      portuguese: 'Vou tomar banho',
      sentenceType: 'statement'
    },
    {
      english: 'Do you want an ice cream?',
      portuguese: 'Queres um gelado?',
      sentenceType: 'question'
    },
    {
      english: 'Is it cold outside?',
      portuguese: 'Está frio lá fora?',
      sentenceType: 'question'
    },
    {
      english: 'You are beautiful',
      portuguese: 'És linda',
      sentenceType: 'statement'
    },
    {
      english: 'Today I ate a kilo of strawberries',
      portuguese: 'Hoje comi um kilo de morangos',
      sentenceType: 'statement'
    },
    {
      english: 'I like to sleep',
      portuguese: 'Gosto de dormir',
      sentenceType: 'statement'
    },
    {
      english: 'Tomorrow is my birthday',
      portuguese: 'Amanhã é o meu aniversário',
      sentenceType: 'statement'
    },
    {
      english: 'Paula is my portuguese professor',
      portuguese: 'A Paula é a minha professora de português',
      sentenceType: 'statement'
    },
    {
      english: 'Can you speak slower?',
      portuguese: 'Podes falar mais devagar?',
      sentenceType: 'question'
    },
    {
      english: "I don't know what to do",
      portuguese: 'Não sei o que fazer',
      sentenceType: 'statement'
    },
    {
      english: "I'm tired because I'm hungry",
      portuguese: 'Estou cansado porque estou com fome',
      sentenceType: 'statement'
    },
    {
      english: 'I love washing the dishes',
      portuguese: 'Adoro lavar a loiça',
      sentenceType: 'statement'
    },
    {
      english: 'Are you comfortable?',
      portuguese: 'Estás confortável?',
      sentenceType: 'question'
    },
    {
      english: 'What does it mean liar?',
      portuguese: 'O que significa mentiroso?',
      sentenceType: 'question'
    },
    {
      english: 'I read every day',
      portuguese: 'Leio todos os dias',
      sentenceType: 'statement'
    },
    {
      english: "What's in the fridge?",
      portuguese: 'O que está no frigorífico?',
      sentenceType: 'question'
    },
    {
      english: 'This flat is a mess',
      portuguese: 'Este apartamento está todo desarrumado',
      sentenceType: 'statement'
    },
    {
      english: "I'm lazy",
      portuguese: 'Sou preguiçoso',
      sentenceType: 'statement'
    },
    {
      english: 'How was your work?',
      portuguese: 'Como foi o teu trabalho?',
      sentenceType: 'question'
    },
    {
      english: 'What are you going to do tomorrow?',
      portuguese: 'O que vais fazer amanhã?',
      sentenceType: 'question'
    },
    {
      english: 'The book is on the table',
      portuguese: 'O livro está na mesa',
      sentenceType: 'statement'
    },
    {
      english: 'Your backpack is in another room',
      portuguese: 'A tua mochila está em outro quarto',
      sentenceType: 'statement'
    },
    {
      english: "There's dust under the sofa",
      portuguese: 'Há pó debaixo do sofá',
      sentenceType: 'statement'
    },
    {
      english: 'The box is on top of the closet',
      portuguese: 'A caixa está em cima do armário',
      sentenceType: 'statement'
    },
    {
      english: 'Your socks are in the drawer',
      portuguese: 'As tuas meias estão na gaveta',
      sentenceType: 'statement'
    },
    {
      english: 'Your bike is next to the red car',
      portuguese: 'A tua bicicleta está ao lado do carro vermelho',
      sentenceType: 'statement'
    },
    {
      english: 'The picture on the wall is very beautiful',
      portuguese: 'A fotografia na parede é muito bonita',
      sentenceType: 'statement'
    },
    {
      english: 'The main door is tall',
      portuguese: 'A porta da entrada é alta',
      sentenceType: 'statement'
    },
    {
      english: "I want to open the window but it's too cold outside",
      portuguese: 'Quero abrir a janela mas está muito frio lá fora',
      sentenceType: 'statement'
    },
    {
      english: "You can't use this computer because it's broken",
      portuguese: 'Não podes usar este computador porque está estragado',
      sentenceType: 'statement'
    },
    {
      english: 'Next weekend we are going on holidays',
      portuguese: 'No próximo fim de semana vamos de férias',
      sentenceType: 'statement'
    },
    {
      english: 'Can you come here?',
      portuguese: 'Podes chegar aqui?',
      sentenceType: 'question'
    },
    {
      english: 'Pair work',
      portuguese: 'Trabalho de pares',
      sentenceType: 'statement'
    },
    {
      english: 'Greet a colleague',
      portuguese: 'Cumprimentar um colega',
      sentenceType: 'statement'
    },
    {
      english: 'Introduce yourself to a professor',
      portuguese: 'Apresentar-se a um professor',
      sentenceType: 'statement'
    },
    {
      english: "What's your name?",
      portuguese: 'Como te chamas?',
      sentenceType: 'question'
    },
    {
      english: 'With your colleague, have dialogues for the following situations',
      portuguese: 'Com o seu colega, faça diálogos para as seguintes situações',
      sentenceType: 'statement'
    },
    {
      english: 'Sara has a coffee with Paulo and Marta',
      portuguese: 'A Sara toma um café com o Paulo e a Marta',
      sentenceType: 'statement'
    },
    {
      english: 'Sara is at the cafe',
      portuguese: 'A Sara está no café',
      sentenceType: 'statement'
    },
    {
      english: 'This is Sara',
      portuguese: 'Está é a Sara',
      sentenceType: 'statement'
    },
    {
      english: 'Do you study here at the university?',
      portuguese: 'Estudas aqui na universidade?',
      sentenceType: 'question'
    },
    {
      english: "I'm from Lisbon",
      portuguese: 'Eu sou de Lisboa',
      sentenceType: 'statement'
    },
    {
      english: 'What street do you live on?',
      portuguese: 'Em que rua moras?',
      sentenceType: 'question'
    },
    {
      english: 'Where do you live?',
      portuguese: 'Onde moras?',
      sentenceType: 'question'
    },
    {
      english: 'I finished the work before the deadline',
      portuguese: 'Eu concluí o trabalho antes do prazo',
      sentenceType: 'statement'
    },
    {
      english: "There's plenty of nice people in the world",
      portuguese: 'Há muitas pessoas boas no mundo',
      sentenceType: 'statement'
    },
    {
      english: 'Both sides of the record are in perfect condition',
      portuguese: 'Ambos os lados do disco estão em perfeitas condições',
      sentenceType: 'statement'
    },
    {
      english: 'My new painting is a work of art',
      portuguese: 'A minha nova pintura é uma obra de arte',
      sentenceType: 'statement'
    },
    {
      english: 'My son is almost six years old',
      portuguese: 'O meu filho tem quase seis anos',
      sentenceType: 'statement'
    },
    {
      english: 'I know the city and the surroundings very well',
      portuguese: 'Conheço a cidade e os arredores muito bem',
      sentenceType: 'statement'
    },
    {
      english: "I always write 'sincerely' at the end of letters",
      portuguese: "Escrevo sempre 'atenciosamente' no fim das cartas",
      sentenceType: 'statement'
    },
    {
      english: 'Would you fancy a drink?',
      portuguese: 'Deseja um café?',
      sentenceType: 'statement'
    },
    {
      english: 'Stop bothering me',
      portuguese: 'Está quieto!',
      sentenceType: 'statement'
    },
    {
      english: 'Leave me alone',
      portuguese: 'Deixa-me em paz',
      sentenceType: 'statement'
    }
  ],
  fitIn: [
    {
      prefix: 'Eu',
      answer: 'tomo',
      suffix: 'um chá.',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Angola.',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Paris.',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Moro',
      answer: 'em',
      suffix: 'Cascais.',
      explanation: '"em" - Indica localização'
    },
    {
      prefix: '',
      answer: 'em',
      suffix: 'que rua mora?',
      explanation: '"em" - Indica localização'
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
