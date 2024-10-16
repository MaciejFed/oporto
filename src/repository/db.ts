import { Schema } from './exercises-repository';

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
      },
      imperfect: {
        Eu: 'era',
        Tu: 'eras',
        'Ela/Ele/Você': 'era',
        Nós: 'éramos',
        'Eles/Elas/Vocēs': 'eram'
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
      },
      imperfect: {
        Eu: 'estava',
        Tu: 'estavas',
        'Ela/Ele/Você': 'estava',
        Nós: 'estávamos',
        'Eles/Elas/Vocēs': 'estavam'
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
      },
      imperfect: {
        Eu: 'ia',
        Tu: 'ias',
        'Ela/Ele/Você': 'ia',
        Nós: 'íamos',
        'Eles/Elas/Vocēs': 'iam'
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
      },
      imperfect: {
        Eu: 'tinha',
        Tu: 'tinhas',
        'Ela/Ele/Você': 'tinha',
        Nós: 'tínhamos',
        'Eles/Elas/Vocēs': 'tinham'
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
      },
      imperfect: {
        Eu: 'queria',
        Tu: 'querias',
        'Ela/Ele/Você': 'queria',
        Nós: 'queríamos',
        'Eles/Elas/Vocēs': 'queriam'
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
      },
      imperfect: {
        Eu: 'sabia',
        Tu: 'sabias',
        'Ela/Ele/Você': 'sabia',
        Nós: 'sabíamos',
        'Eles/Elas/Vocēs': 'sabiam'
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
      },
      imperfect: {
        Eu: 'podia',
        Tu: 'podias',
        'Ela/Ele/Você': 'podia',
        Nós: 'podíamos',
        'Eles/Elas/Vocēs': 'podiam'
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
        'Ela/Ele/Você': 'andou',
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
      infinitive: 'corrigir',
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
        Nós: 'cuidámos',
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
        Nós: 'enchemos',
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
      english: 'to stroll',
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
    },
    {
      english: 'to believe',
      infinitive: 'acreditar',
      presentSimple: {
        Eu: 'acredito',
        Tu: 'acreditas',
        'Ela/Ele/Você': 'acredita',
        Nós: 'acreditamos',
        'Eles/Elas/Vocēs': 'acreditam'
      },
      pastPerfect: {
        Eu: 'acreditei',
        Tu: 'acreditaste',
        'Ela/Ele/Você': 'acreditou',
        Nós: 'acreditámos',
        'Eles/Elas/Vocēs': 'acreditaram'
      }
    },
    {
      english: 'to happen',
      infinitive: 'acontecer',
      presentSimple: {
        Eu: 'aconteço',
        Tu: 'aconteces',
        'Ela/Ele/Você': 'acontece',
        Nós: 'acontecemos',
        'Eles/Elas/Vocēs': 'acontecem'
      },
      pastPerfect: {
        Eu: 'aconteci',
        Tu: 'aconteceste',
        'Ela/Ele/Você': 'aconteceu',
        Nós: 'acontecemos',
        'Eles/Elas/Vocēs': 'aconteceram'
      }
    },
    {
      english: 'to adore',
      infinitive: 'adorar',
      presentSimple: {
        Eu: 'adoro',
        Tu: 'adoras',
        'Ela/Ele/Você': 'adora',
        Nós: 'adoramos',
        'Eles/Elas/Vocēs': 'adoram'
      },
      pastPerfect: {
        Eu: 'adorei',
        Tu: 'adoraste',
        'Ela/Ele/Você': 'adorou',
        Nós: 'adorámos',
        'Eles/Elas/Vocēs': 'adoraram'
      }
    },
    {
      english: 'to achieve',
      infinitive: 'alcançar',
      presentSimple: {
        Eu: 'alcanço',
        Tu: 'alcanças',
        'Ela/Ele/Você': 'alcança',
        Nós: 'alcançamos',
        'Eles/Elas/Vocēs': 'alcançam'
      },
      pastPerfect: {
        Eu: 'alcancei',
        Tu: 'alcançaste',
        'Ela/Ele/Você': 'alcançou',
        Nós: 'alcançámos',
        'Eles/Elas/Vocēs': 'alcançaram'
      }
    },
    {
      english: 'to alter',
      infinitive: 'alterar',
      presentSimple: {
        Eu: 'altero',
        Tu: 'alteras',
        'Ela/Ele/Você': 'altera',
        Nós: 'alteramos',
        'Eles/Elas/Vocēs': 'alteram'
      },
      pastPerfect: {
        Eu: 'alterei',
        Tu: 'alteraste',
        'Ela/Ele/Você': 'alterou',
        Nós: 'alterámos',
        'Eles/Elas/Vocēs': 'alteraram'
      }
    },
    {
      english: 'to apply',
      infinitive: 'aplicar',
      presentSimple: {
        Eu: 'aplico',
        Tu: 'aplicas',
        'Ela/Ele/Você': 'aplica',
        Nós: 'aplicamos',
        'Eles/Elas/Vocēs': 'aplicam'
      },
      pastPerfect: {
        Eu: 'apliquei',
        Tu: 'aplicaste',
        'Ela/Ele/Você': 'aplicou',
        Nós: 'aplicámos',
        'Eles/Elas/Vocēs': 'aplicaram'
      }
    },
    {
      english: 'to assure',
      infinitive: 'assegurar',
      presentSimple: {
        Eu: 'asseguro',
        Tu: 'asseguras',
        'Ela/Ele/Você': 'assegura',
        Nós: 'asseguramos',
        'Eles/Elas/Vocēs': 'asseguram'
      },
      pastPerfect: {
        Eu: 'assegurei',
        Tu: 'asseguraste',
        'Ela/Ele/Você': 'assegurou',
        Nós: 'assegurámos',
        'Eles/Elas/Vocēs': 'asseguraram'
      }
    },
    {
      english: 'to sign',
      infinitive: 'assinar',
      presentSimple: {
        Eu: 'assino',
        Tu: 'assinas',
        'Ela/Ele/Você': 'assina',
        Nós: 'assinamos',
        'Eles/Elas/Vocēs': 'assinam'
      },
      pastPerfect: {
        Eu: 'assinei',
        Tu: 'assinaste',
        'Ela/Ele/Você': 'assinou',
        Nós: 'assinámos',
        'Eles/Elas/Vocēs': 'assinaram'
      }
    },
    {
      english: 'to increase',
      infinitive: 'aumentar',
      presentSimple: {
        Eu: 'aumento',
        Tu: 'aumentas',
        'Ela/Ele/Você': 'aumenta',
        Nós: 'aumentamos',
        'Eles/Elas/Vocēs': 'aumentam'
      },
      pastPerfect: {
        Eu: 'aumentei',
        Tu: 'aumentaste',
        'Ela/Ele/Você': 'aumentou',
        Nós: 'aumentámos',
        'Eles/Elas/Vocēs': 'aumentaram'
      }
    },
    {
      english: 'to fall',
      infinitive: 'cair',
      presentSimple: {
        Eu: 'caio',
        Tu: 'cais',
        'Ela/Ele/Você': 'cai',
        Nós: 'caímos',
        'Eles/Elas/Vocēs': 'caem'
      },
      pastPerfect: {
        Eu: 'caí',
        Tu: 'caíste',
        'Ela/Ele/Você': 'caiu',
        Nós: 'caímos',
        'Eles/Elas/Vocēs': 'caíram'
      }
    },
    {
      english: 'to carry',
      infinitive: 'carregar',
      presentSimple: {
        Eu: 'carrego',
        Tu: 'carregas',
        'Ela/Ele/Você': 'carrega',
        Nós: 'carregamos',
        'Eles/Elas/Vocēs': 'carregam'
      },
      pastPerfect: {
        Eu: 'carreguei',
        Tu: 'carregaste',
        'Ela/Ele/Você': 'carregou',
        Nós: 'carregámos',
        'Eles/Elas/Vocēs': 'carregaram'
      }
    },
    {
      english: 'to arrive',
      infinitive: 'chegar',
      presentSimple: {
        Eu: 'chego',
        Tu: 'chegas',
        'Ela/Ele/Você': 'chega',
        Nós: 'chegamos',
        'Eles/Elas/Vocēs': 'chegam'
      },
      pastPerfect: {
        Eu: 'cheguei',
        Tu: 'chegaste',
        'Ela/Ele/Você': 'chegou',
        Nós: 'chegámos',
        'Eles/Elas/Vocēs': 'chegaram'
      }
    },
    {
      english: 'to focus',
      infinitive: 'concentrar',
      presentSimple: {
        Eu: 'concentro',
        Tu: 'concentras',
        'Ela/Ele/Você': 'concentra',
        Nós: 'concentramos',
        'Eles/Elas/Vocēs': 'concentram'
      },
      pastPerfect: {
        Eu: 'concentrei',
        Tu: 'concentraste',
        'Ela/Ele/Você': 'concentrou',
        Nós: 'concentrámos',
        'Eles/Elas/Vocēs': 'concentraram'
      }
    },
    // {
    //   english: 'to build',
    //   infinitive: 'construir',
    //   presentSimple: {
    //     Eu: 'construo',
    //     Tu: 'constróis',
    //     'Ela/Ele/Você': 'constrói',
    //     Nós: 'construímos',
    //     'Eles/Elas/Vocēs': 'constroem'
    //   },
    //   pastPerfect: {
    //     Eu: 'construí',
    //     Tu: 'construíste',
    //     'Ela/Ele/Você': 'construiu',
    //     Nós: 'construímos',
    //     'Eles/Elas/Vocēs': 'construíram'
    //   }
    // },
    {
      english: 'to continue',
      infinitive: 'continuar',
      presentSimple: {
        Eu: 'continuo',
        Tu: 'continuas',
        'Ela/Ele/Você': 'continua',
        Nós: 'continuamos',
        'Eles/Elas/Vocēs': 'continuam'
      },
      pastPerfect: {
        Eu: 'continuei',
        Tu: 'continuaste',
        'Ela/Ele/Você': 'continuou',
        Nós: 'continuámos',
        'Eles/Elas/Vocēs': 'continuaram'
      }
    },
    {
      english: 'to talk',
      infinitive: 'conversar',
      presentSimple: {
        Eu: 'converso',
        Tu: 'conversas',
        'Ela/Ele/Você': 'conversa',
        Nós: 'conversamos',
        'Eles/Elas/Vocēs': 'conversam'
      },
      pastPerfect: {
        Eu: 'conversei',
        Tu: 'conversaste',
        'Ela/Ele/Você': 'conversou',
        Nós: 'conversámos',
        'Eles/Elas/Vocēs': 'conversaram'
      }
    },
    {
      english: 'to create',
      infinitive: 'criar',
      presentSimple: {
        Eu: 'crio',
        Tu: 'crias',
        'Ela/Ele/Você': 'cria',
        Nós: 'criamos',
        'Eles/Elas/Vocēs': 'criam'
      },
      pastPerfect: {
        Eu: 'criei',
        Tu: 'criaste',
        'Ela/Ele/Você': 'criou',
        Nós: 'criámos',
        'Eles/Elas/Vocēs': 'criaram'
      }
    },
    {
      english: 'to dance',
      infinitive: 'dançar',
      presentSimple: {
        Eu: 'danço',
        Tu: 'danças',
        'Ela/Ele/Você': 'dança',
        Nós: 'dançamos',
        'Eles/Elas/Vocēs': 'dançam'
      },
      pastPerfect: {
        Eu: 'dancei',
        Tu: 'dançaste',
        'Ela/Ele/Você': 'dançou',
        Nós: 'dançámos',
        'Eles/Elas/Vocēs': 'dançaram'
      }
    },
    {
      english: 'to give',
      infinitive: 'dar',
      presentSimple: {
        Eu: 'dou',
        Tu: 'dás',
        'Ela/Ele/Você': 'dá',
        Nós: 'damos',
        'Eles/Elas/Vocēs': 'dão'
      },
      pastPerfect: {
        Eu: 'dei',
        Tu: 'deste',
        'Ela/Ele/Você': 'deu',
        Nós: 'demos',
        'Eles/Elas/Vocēs': 'deram'
      }
    },
    {
      english: 'to define',
      infinitive: 'definir',
      presentSimple: {
        Eu: 'defino',
        Tu: 'defines',
        'Ela/Ele/Você': 'define',
        Nós: 'definimos',
        'Eles/Elas/Vocēs': 'definem'
      },
      pastPerfect: {
        Eu: 'defini',
        Tu: 'definiste',
        'Ela/Ele/Você': 'definiu',
        Nós: 'definimos',
        'Eles/Elas/Vocēs': 'definiram'
      }
    },
    {
      english: 'to determine',
      infinitive: 'determinar',
      presentSimple: {
        Eu: 'determino',
        Tu: 'determinas',
        'Ela/Ele/Você': 'determina',
        Nós: 'determinamos',
        'Eles/Elas/Vocēs': 'determinam'
      },
      pastPerfect: {
        Eu: 'determinei',
        Tu: 'determinaste',
        'Ela/Ele/Você': 'determinou',
        Nós: 'determinámos',
        'Eles/Elas/Vocēs': 'determinaram'
      }
    },
    {
      english: 'to sleep',
      infinitive: 'dormir',
      presentSimple: {
        Eu: 'durmo',
        Tu: 'dormes',
        'Ela/Ele/Você': 'dorme',
        Nós: 'dormimos',
        'Eles/Elas/Vocēs': 'dormem'
      },
      pastPerfect: {
        Eu: 'dormi',
        Tu: 'dormiste',
        'Ela/Ele/Você': 'dormiu',
        Nós: 'dormimos',
        'Eles/Elas/Vocēs': 'dormiram'
      }
    },
    {
      english: 'to send message',
      infinitive: 'enviar',
      presentSimple: {
        Eu: 'envio',
        Tu: 'envias',
        'Ela/Ele/Você': 'envia',
        Nós: 'enviamos',
        'Eles/Elas/Vocēs': 'enviam'
      },
      pastPerfect: {
        Eu: 'enviei',
        Tu: 'enviaste',
        'Ela/Ele/Você': 'enviou',
        Nós: 'enviámos',
        'Eles/Elas/Vocēs': 'enviaram'
      }
    },
    {
      english: 'to wait',
      infinitive: 'esperar',
      presentSimple: {
        Eu: 'espero',
        Tu: 'esperas',
        'Ela/Ele/Você': 'espera',
        Nós: 'esperamos',
        'Eles/Elas/Vocēs': 'esperam'
      },
      pastPerfect: {
        Eu: 'esperei',
        Tu: 'esperaste',
        'Ela/Ele/Você': 'esperou',
        Nós: 'esperámos',
        'Eles/Elas/Vocēs': 'esperaram'
      }
    },
    {
      english: 'to study',
      infinitive: 'estudar',
      presentSimple: {
        Eu: 'estudo',
        Tu: 'estudas',
        'Ela/Ele/Você': 'estuda',
        Nós: 'estudamos',
        'Eles/Elas/Vocēs': 'estudam'
      },
      pastPerfect: {
        Eu: 'estudei',
        Tu: 'estudaste',
        'Ela/Ele/Você': 'estudou',
        Nós: 'estudámos',
        'Eles/Elas/Vocēs': 'estudaram'
      }
    },
    {
      english: 'to explain',
      infinitive: 'explicar',
      presentSimple: {
        Eu: 'explico',
        Tu: 'explicas',
        'Ela/Ele/Você': 'explica',
        Nós: 'explicamos',
        'Eles/Elas/Vocēs': 'explicam'
      },
      pastPerfect: {
        Eu: 'expliquei',
        Tu: 'explicaste',
        'Ela/Ele/Você': 'explicou',
        Nós: 'explicámos',
        'Eles/Elas/Vocēs': 'explicaram'
      }
    },
    {
      english: 'to smoke',
      infinitive: 'fumar',
      presentSimple: {
        Eu: 'fumo',
        Tu: 'fumas',
        'Ela/Ele/Você': 'fuma',
        Nós: 'fumamos',
        'Eles/Elas/Vocēs': 'fumam'
      },
      pastPerfect: {
        Eu: 'fumei',
        Tu: 'fumaste',
        'Ela/Ele/Você': 'fumou',
        Nós: 'fumámos',
        'Eles/Elas/Vocēs': 'fumaram'
      }
    },
    {
      english: 'to spend money',
      infinitive: 'gastar',
      presentSimple: {
        Eu: 'gasto',
        Tu: 'gastas',
        'Ela/Ele/Você': 'gasta',
        Nós: 'gastamos',
        'Eles/Elas/Vocēs': 'gastam'
      },
      pastPerfect: {
        Eu: 'gastei',
        Tu: 'gastaste',
        'Ela/Ele/Você': 'gastou',
        Nós: 'gastámos',
        'Eles/Elas/Vocēs': 'gastaram'
      }
    },
    {
      english: 'to remember',
      infinitive: 'lembrar',
      presentSimple: {
        Eu: 'lembro',
        Tu: 'lembras',
        'Ela/Ele/Você': 'lembra',
        Nós: 'lembramos',
        'Eles/Elas/Vocēs': 'lembram'
      },
      pastPerfect: {
        Eu: 'lembrei',
        Tu: 'lembraste',
        'Ela/Ele/Você': 'lembrou',
        Nós: 'lembrámos',
        'Eles/Elas/Vocēs': 'lembraram'
      }
    },
    {
      english: 'to mention',
      infinitive: 'mencionar',
      presentSimple: {
        Eu: 'menciono',
        Tu: 'mencionas',
        'Ela/Ele/Você': 'menciona',
        Nós: 'mencionamos',
        'Eles/Elas/Vocēs': 'mencionam'
      },
      pastPerfect: {
        Eu: 'mencionei',
        Tu: 'mencionaste',
        'Ela/Ele/Você': 'mencionou',
        Nós: 'mencionámos',
        'Eles/Elas/Vocēs': 'mencionaram'
      }
    },
    {
      english: 'to change',
      infinitive: 'mudar',
      presentSimple: {
        Eu: 'mudo',
        Tu: 'mudas',
        'Ela/Ele/Você': 'muda',
        Nós: 'mudamos',
        'Eles/Elas/Vocēs': 'mudam'
      },
      pastPerfect: {
        Eu: 'mudei',
        Tu: 'mudaste',
        'Ela/Ele/Você': 'mudou',
        Nós: 'mudámos',
        'Eles/Elas/Vocēs': 'mudaram'
      }
    },
    {
      english: 'to deny',
      infinitive: 'negar',
      presentSimple: {
        Eu: 'nego',
        Tu: 'negas',
        'Ela/Ele/Você': 'nega',
        Nós: 'negamos',
        'Eles/Elas/Vocēs': 'negam'
      },
      pastPerfect: {
        Eu: 'neguei',
        Tu: 'negaste',
        'Ela/Ele/Você': 'negou',
        Nós: 'negámos',
        'Eles/Elas/Vocēs': 'negaram'
      }
    },
    {
      english: 'to stop',
      infinitive: 'parar',
      presentSimple: {
        Eu: 'paro',
        Tu: 'paras',
        'Ela/Ele/Você': 'para',
        Nós: 'paramos',
        'Eles/Elas/Vocēs': 'param'
      },
      pastPerfect: {
        Eu: 'parei',
        Tu: 'paraste',
        'Ela/Ele/Você': 'parou',
        Nós: 'parámos',
        'Eles/Elas/Vocēs': 'pararam'
      }
    },
    {
      english: 'to pass by',
      infinitive: 'passar',
      presentSimple: {
        Eu: 'passo',
        Tu: 'passas',
        'Ela/Ele/Você': 'passa',
        Nós: 'passamos',
        'Eles/Elas/Vocēs': 'passam'
      },
      pastPerfect: {
        Eu: 'passei',
        Tu: 'passaste',
        'Ela/Ele/Você': 'passou',
        Nós: 'passámos',
        'Eles/Elas/Vocēs': 'passaram'
      }
    },
    {
      english: 'to think - more',
      infinitive: 'pensar',
      presentSimple: {
        Eu: 'penso',
        Tu: 'pensas',
        'Ela/Ele/Você': 'pensa',
        Nós: 'pensamos',
        'Eles/Elas/Vocēs': 'pensam'
      },
      pastPerfect: {
        Eu: 'pensei',
        Tu: 'pensaste',
        'Ela/Ele/Você': 'pensou',
        Nós: 'pensámos',
        'Eles/Elas/Vocēs': 'pensaram'
      }
    },
    {
      english: 'to save money',
      infinitive: 'poupar',
      presentSimple: {
        Eu: 'poupo',
        Tu: 'poupas',
        'Ela/Ele/Você': 'poupa',
        Nós: 'poupamos',
        'Eles/Elas/Vocēs': 'poupam'
      },
      pastPerfect: {
        Eu: 'poupei',
        Tu: 'poupaste',
        'Ela/Ele/Você': 'poupou',
        Nós: 'poupámos',
        'Eles/Elas/Vocēs': 'pouparam'
      }
    },
    {
      english: 'to prepare',
      infinitive: 'preparar',
      presentSimple: {
        Eu: 'preparo',
        Tu: 'preparas',
        'Ela/Ele/Você': 'prepara',
        Nós: 'preparamos',
        'Eles/Elas/Vocēs': 'preparam'
      },
      pastPerfect: {
        Eu: 'preparei',
        Tu: 'preparaste',
        'Ela/Ele/Você': 'preparou',
        Nós: 'preparámos',
        'Eles/Elas/Vocēs': 'prepararam'
      }
    },
    {
      english: 'to break',
      infinitive: 'quebrar',
      presentSimple: {
        Eu: 'quebro',
        Tu: 'quebras',
        'Ela/Ele/Você': 'quebra',
        Nós: 'quebramos',
        'Eles/Elas/Vocēs': 'quebram'
      },
      pastPerfect: {
        Eu: 'quebrei',
        Tu: 'quebraste',
        'Ela/Ele/Você': 'quebrou',
        Nós: 'quebrámos',
        'Eles/Elas/Vocēs': 'quebraram'
      }
    },
    {
      english: 'to carry out',
      infinitive: 'realizar',
      presentSimple: {
        Eu: 'realizo',
        Tu: 'realizas',
        'Ela/Ele/Você': 'realiza',
        Nós: 'realizamos',
        'Eles/Elas/Vocēs': 'realizam'
      },
      pastPerfect: {
        Eu: 'realizei',
        Tu: 'realizaste',
        'Ela/Ele/Você': 'realizou',
        Nós: 'realizámos',
        'Eles/Elas/Vocēs': 'realizaram'
      }
    },
    {
      english: 'to reflect',
      infinitive: 'refletir',
      presentSimple: {
        Eu: 'refleto',
        Tu: 'refletes',
        'Ela/Ele/Você': 'reflete',
        Nós: 'refletimos',
        'Eles/Elas/Vocēs': 'refletem'
      },
      pastPerfect: {
        Eu: 'refleti',
        Tu: 'refletiste',
        'Ela/Ele/Você': 'refletiu',
        Nós: 'refletimos',
        'Eles/Elas/Vocēs': 'refletiram'
      }
    },
    {
      english: 'to leave',
      infinitive: 'sair',
      presentSimple: {
        Eu: 'saio',
        Tu: 'sais',
        'Ela/Ele/Você': 'sai',
        Nós: 'saímos',
        'Eles/Elas/Vocēs': 'saem'
      },
      pastPerfect: {
        Eu: 'saí',
        Tu: 'saíste',
        'Ela/Ele/Você': 'saiu',
        Nós: 'saímos',
        'Eles/Elas/Vocēs': 'saíram'
      }
    },
    {
      english: 'to follow',
      infinitive: 'seguir',
      presentSimple: {
        Eu: 'sigo',
        Tu: 'segues',
        'Ela/Ele/Você': 'segue',
        Nós: 'seguimos',
        'Eles/Elas/Vocēs': 'seguem'
      },
      pastPerfect: {
        Eu: 'segui',
        Tu: 'seguiste',
        'Ela/Ele/Você': 'seguiu',
        Nós: 'seguimos',
        'Eles/Elas/Vocēs': 'seguiram'
      }
    },
    {
      english: 'to come',
      infinitive: 'vir',
      presentSimple: {
        Eu: 'venho',
        Tu: 'vens',
        'Ela/Ele/Você': 'vem',
        Nós: 'vimos',
        'Eles/Elas/Vocēs': 'vêm'
      },
      pastPerfect: {
        Eu: 'vim',
        Tu: 'vieste',
        'Ela/Ele/Você': 'veio',
        Nós: 'viemos',
        'Eles/Elas/Vocēs': 'vieram'
      },
      imperfect: {
        Eu: 'vinha',
        Tu: 'vinhas',
        'Ela/Ele/Você': 'vinha',
        Nós: 'vínhamos',
        'Eles/Elas/Vocēs': 'vinham'
      }
    },
    {
      english: 'to serve',
      infinitive: 'servir',
      presentSimple: {
        Eu: 'sirvo',
        Tu: 'serves',
        'Ela/Ele/Você': 'serve',
        Nós: 'servimos',
        'Eles/Elas/Vocēs': 'servem'
      },
      pastPerfect: {
        Eu: 'servi',
        Tu: 'serviste',
        'Ela/Ele/Você': 'serviu',
        Nós: 'servimos',
        'Eles/Elas/Vocēs': 'serviram'
      }
    },
    {
      english: 'to suggest',
      infinitive: 'sugerir',
      presentSimple: {
        Eu: 'sugiro',
        Tu: 'sugeres',
        'Ela/Ele/Você': 'sugere',
        Nós: 'sugerimos',
        'Eles/Elas/Vocēs': 'sugerem'
      },
      pastPerfect: {
        Eu: 'sugeri',
        Tu: 'sugeriste',
        'Ela/Ele/Você': 'sugeriu',
        Nós: 'sugerimos',
        'Eles/Elas/Vocēs': 'sugeriram'
      }
    },
    {
      english: 'to try',
      infinitive: 'tentar',
      presentSimple: {
        Eu: 'tento',
        Tu: 'tentas',
        'Ela/Ele/Você': 'tenta',
        Nós: 'tentamos',
        'Eles/Elas/Vocēs': 'tentam'
      },
      pastPerfect: {
        Eu: 'tentei',
        Tu: 'tentaste',
        'Ela/Ele/Você': 'tentou',
        Nós: 'tentámos',
        'Eles/Elas/Vocēs': 'tentaram'
      }
    },
    {
      english: 'to turn',
      infinitive: 'virar',
      presentSimple: {
        Eu: 'viro',
        Tu: 'viras',
        'Ela/Ele/Você': 'vira',
        Nós: 'viramos',
        'Eles/Elas/Vocēs': 'viram'
      },
      pastPerfect: {
        Eu: 'virei',
        Tu: 'viraste',
        'Ela/Ele/Você': 'virou',
        Nós: 'virámos',
        'Eles/Elas/Vocēs': 'viraram'
      }
    },
    {
      english: 'to sell',
      infinitive: 'vender',
      presentSimple: {
        Eu: 'vendo',
        Tu: 'vendes',
        'Ela/Ele/Você': 'vende',
        Nós: 'vendemos',
        'Eles/Elas/Vocēs': 'vendem'
      },
      pastPerfect: {
        Eu: 'vendi',
        Tu: 'vendeste',
        'Ela/Ele/Você': 'vendeu',
        Nós: 'vendemos',
        'Eles/Elas/Vocēs': 'venderam'
      }
    },
    {
      english: 'to bring',
      infinitive: 'trazer',
      presentSimple: {
        Eu: 'trago',
        Tu: 'trazes',
        'Ela/Ele/Você': 'traz',
        Nós: 'trazemos',
        'Eles/Elas/Vocēs': 'trazem'
      },
      pastPerfect: {
        Eu: 'trouxe',
        Tu: 'trouxeste',
        'Ela/Ele/Você': 'trouxe',
        Nós: 'trouxemos',
        'Eles/Elas/Vocēs': 'trouxeram'
      }
    },
    {
      english: 'to become',
      infinitive: 'transformar-se',
      presentSimple: {
        Eu: 'transformo-me',
        Tu: 'transformas-te',
        'Ela/Ele/Você': 'transforma-se',
        Nós: 'transformamo-nos',
        'Eles/Elas/Vocēs': 'transformam-se'
      },
      pastPerfect: {
        Eu: 'transformei-me',
        Tu: 'transformaste-te',
        'Ela/Ele/Você': 'transformou-se',
        Nós: 'transformámo-nos',
        'Eles/Elas/Vocēs': 'transformaram-se'
      }
    },
    {
      english: 'to transport',
      infinitive: 'transportar',
      presentSimple: {
        Eu: 'transporto',
        Tu: 'transportas',
        'Ela/Ele/Você': 'transporta',
        Nós: 'transportamos',
        'Eles/Elas/Vocēs': 'transportam'
      },
      pastPerfect: {
        Eu: 'transportei',
        Tu: 'transportaste',
        'Ela/Ele/Você': 'transportou',
        Nós: 'transportámos',
        'Eles/Elas/Vocēs': 'transportaram'
      }
    },
    {
      english: 'to suffer',
      infinitive: 'sofrer',
      presentSimple: {
        Eu: 'sofro',
        Tu: 'sofres',
        'Ela/Ele/Você': 'sofre',
        Nós: 'sofremos',
        'Eles/Elas/Vocēs': 'sofrem'
      },
      pastPerfect: {
        Eu: 'sofri',
        Tu: 'sofreste',
        'Ela/Ele/Você': 'sofreu',
        Nós: 'sofremos',
        'Eles/Elas/Vocēs': 'sofreram'
      }
    },
    {
      english: 'to hold',
      infinitive: 'segurar',
      presentSimple: {
        Eu: 'seguro',
        Tu: 'seguras',
        'Ela/Ele/Você': 'segura',
        Nós: 'seguramos',
        'Eles/Elas/Vocēs': 'seguram'
      },
      pastPerfect: {
        Eu: 'segurei',
        Tu: 'seguraste',
        'Ela/Ele/Você': 'segurou',
        Nós: 'segurámos',
        'Eles/Elas/Vocēs': 'seguraram'
      }
    },
    {
      english: 'to mean',
      infinitive: 'significar',
      presentSimple: {
        Eu: 'significo',
        Tu: 'significas',
        'Ela/Ele/Você': 'significa',
        Nós: 'significamos',
        'Eles/Elas/Vocēs': 'significam'
      },
      pastPerfect: {
        Eu: 'signifiquei',
        Tu: 'significaste',
        'Ela/Ele/Você': 'significou',
        Nós: 'significámos',
        'Eles/Elas/Vocēs': 'significaram'
      }
    },
    {
      english: 'to save',
      infinitive: 'salvar',
      presentSimple: {
        Eu: 'salvo',
        Tu: 'salvas',
        'Ela/Ele/Você': 'salva',
        Nós: 'salvamos',
        'Eles/Elas/Vocēs': 'salvam'
      },
      pastPerfect: {
        Eu: 'salvei',
        Tu: 'salvaste',
        'Ela/Ele/Você': 'salvou',
        Nós: 'salvámos',
        'Eles/Elas/Vocēs': 'salvaram'
      }
    },
    {
      english: 'to heal',
      infinitive: 'sarar',
      presentSimple: {
        Eu: 'saro',
        Tu: 'saras',
        'Ela/Ele/Você': 'sara',
        Nós: 'saramos',
        'Eles/Elas/Vocēs': 'saram'
      },
      pastPerfect: {
        Eu: 'sarei',
        Tu: 'saraste',
        'Ela/Ele/Você': 'sarou',
        Nós: 'sarámos',
        'Eles/Elas/Vocēs': 'sararam'
      }
    },
    {
      english: 'to break up',
      infinitive: 'romper',
      presentSimple: {
        Eu: 'rompo',
        Tu: 'rompes',
        'Ela/Ele/Você': 'rompe',
        Nós: 'rompemos',
        'Eles/Elas/Vocēs': 'rompem'
      },
      pastPerfect: {
        Eu: 'rompi',
        Tu: 'rompeste',
        'Ela/Ele/Você': 'rompeu',
        Nós: 'rompemos',
        'Eles/Elas/Vocēs': 'romperam'
      }
    },
    {
      english: 'to remain',
      infinitive: 'permanecer',
      presentSimple: {
        Eu: 'permaneço',
        Tu: 'permaneces',
        'Ela/Ele/Você': 'permanece',
        Nós: 'permanecemos',
        'Eles/Elas/Vocēs': 'permanecem'
      },
      pastPerfect: {
        Eu: 'permaneci',
        Tu: 'permaneceste',
        'Ela/Ele/Você': 'permaneceu',
        Nós: 'permanecemos',
        'Eles/Elas/Vocēs': 'permaneceram'
      }
    },
    {
      english: 'to need',
      infinitive: 'precisar',
      presentSimple: {
        Eu: 'preciso',
        Tu: 'precisas',
        'Ela/Ele/Você': 'precisa',
        Nós: 'precisamos',
        'Eles/Elas/Vocēs': 'precisam'
      },
      pastPerfect: {
        Eu: 'precisei',
        Tu: 'precisaste',
        'Ela/Ele/Você': 'precisou',
        Nós: 'precisámos',
        'Eles/Elas/Vocēs': 'precisaram'
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
      },
      pastPerfect: {
        Eu: 'ouvi',
        Tu: 'ouviste',
        'Ela/Ele/Você': 'ouviu',
        Nós: 'ouvimos',
        'Eles/Elas/Vocēs': 'ouviram'
      }
    },
    {
      english: 'to ask',
      infinitive: 'pedir',
      presentSimple: {
        Eu: 'peço',
        Tu: 'pedes',
        'Ela/Ele/Você': 'pede',
        Nós: 'pedimos',
        'Eles/Elas/Vocēs': 'pedem'
      },
      pastPerfect: {
        Eu: 'pedi',
        Tu: 'pediste',
        'Ela/Ele/Você': 'pediu',
        Nós: 'pedimos',
        'Eles/Elas/Vocēs': 'pediram'
      }
    },
    {
      english: 'to offer',
      infinitive: 'oferecer',
      presentSimple: {
        Eu: 'ofereço',
        Tu: 'ofereces',
        'Ela/Ele/Você': 'oferece',
        Nós: 'oferecemos',
        'Eles/Elas/Vocēs': 'oferecem'
      },
      pastPerfect: {
        Eu: 'ofereci',
        Tu: 'ofereceste',
        'Ela/Ele/Você': 'ofereceu',
        Nós: 'oferecemos',
        'Eles/Elas/Vocēs': 'ofereceram'
      }
    },
    {
      english: 'to obtain',
      infinitive: 'obter',
      presentSimple: {
        Eu: 'obtenho',
        Tu: 'obténs',
        'Ela/Ele/Você': 'obtém',
        Nós: 'obtemos',
        'Eles/Elas/Vocēs': 'obtêm'
      },
      pastPerfect: {
        Eu: 'obtive',
        Tu: 'obtiveste',
        'Ela/Ele/Você': 'obteve',
        Nós: 'obtivemos',
        'Eles/Elas/Vocēs': 'obtiveram'
      }
    },
    {
      english: 'to occur',
      infinitive: 'ocorrer',
      presentSimple: {
        Eu: 'ocorro',
        Tu: 'ocorres',
        'Ela/Ele/Você': 'ocorre',
        Nós: 'ocorremos',
        'Eles/Elas/Vocēs': 'ocorrem'
      },
      pastPerfect: {
        Eu: 'ocorri',
        Tu: 'ocorreste',
        'Ela/Ele/Você': 'ocorreu',
        Nós: 'ocorremos',
        'Eles/Elas/Vocēs': 'ocorreram'
      }
    },
    {
      english: 'to move',
      infinitive: 'mover',
      presentSimple: {
        Eu: 'movo',
        Tu: 'moves',
        'Ela/Ele/Você': 'move',
        Nós: 'movemos',
        'Eles/Elas/Vocēs': 'movem'
      },
      pastPerfect: {
        Eu: 'movi',
        Tu: 'moveste',
        'Ela/Ele/Você': 'moveu',
        Nós: 'movemos',
        'Eles/Elas/Vocēs': 'moveram'
      }
    },
    {
      english: 'to show',
      infinitive: 'mostrar',
      presentSimple: {
        Eu: 'mostro',
        Tu: 'mostras',
        'Ela/Ele/Você': 'mostra',
        Nós: 'mostramos',
        'Eles/Elas/Vocēs': 'mostram'
      },
      pastPerfect: {
        Eu: 'mostrei',
        Tu: 'mostraste',
        'Ela/Ele/Você': 'mostrou',
        Nós: 'mostrámos',
        'Eles/Elas/Vocēs': 'mostraram'
      }
    },
    {
      english: 'to be kidding',
      infinitive: 'brincar',
      presentSimple: {
        Eu: 'brinco',
        Tu: 'brincas',
        'Ela/Ele/Você': 'brinca',
        Nós: 'brincamos',
        'Eles/Elas/Vocēs': 'brincam'
      },
      pastPerfect: {
        Eu: 'brinquei',
        Tu: 'brincaste',
        'Ela/Ele/Você': 'brincou',
        Nós: 'brincámos',
        'Eles/Elas/Vocēs': 'brincaram'
      }
    },
    {
      english: 'to travel',
      infinitive: 'viajar',
      presentSimple: {
        Eu: 'viajo',
        Tu: 'viajas',
        'Ela/Ele/Você': 'viaja',
        Nós: 'viajamos',
        'Eles/Elas/Vocēs': 'viajam'
      },
      pastPerfect: {
        Eu: 'viajei',
        Tu: 'viajaste',
        'Ela/Ele/Você': 'viajou',
        Nós: 'viajámos',
        'Eles/Elas/Vocēs': 'viajaram'
      }
    },
    {
      english: 'to cross',
      infinitive: 'atravessar',
      presentSimple: {
        Eu: 'atravesso',
        Tu: 'atravessas',
        'Ela/Ele/Você': 'atravessa',
        Nós: 'atravessamos',
        'Eles/Elas/Vocēs': 'atravessam'
      },
      pastPerfect: {
        Eu: 'atravessei',
        Tu: 'atravessaste',
        'Ela/Ele/Você': 'atravessou',
        Nós: 'atravessámos',
        'Eles/Elas/Vocēs': 'atravessaram'
      }
    },
    {
      english: 'to promote',
      infinitive: 'promover',
      presentSimple: {
        Eu: 'promovo',
        Tu: 'promoves',
        'Ela/Ele/Você': 'promove',
        Nós: 'promovemos',
        'Eles/Elas/Vocēs': 'promovem'
      },
      pastPerfect: {
        Eu: 'promovi',
        Tu: 'promoveste',
        'Ela/Ele/Você': 'promoveu',
        Nós: 'promovemos',
        'Eles/Elas/Vocēs': 'promoveram'
      }
    },
    {
      english: 'to marry',
      infinitive: 'casar',
      presentSimple: {
        Eu: 'caso',
        Tu: 'casas',
        'Ela/Ele/Você': 'casa',
        Nós: 'casamos',
        'Eles/Elas/Vocēs': 'casam'
      },
      pastPerfect: {
        Eu: 'casei',
        Tu: 'casaste',
        'Ela/Ele/Você': 'casou',
        Nós: 'casámos',
        'Eles/Elas/Vocēs': 'casaram'
      }
    },
    {
      english: 'to take',
      infinitive: 'levar',
      presentSimple: {
        Eu: 'levo',
        Tu: 'levas',
        'Ela/Ele/Você': 'leva',
        Nós: 'levamos',
        'Eles/Elas/Vocēs': 'levam'
      },
      pastPerfect: {
        Eu: 'levei',
        Tu: 'levaste',
        'Ela/Ele/Você': 'levou',
        Nós: 'levámos',
        'Eles/Elas/Vocēs': 'levaram'
      }
    },
    {
      english: 'to grab',
      infinitive: 'agarrar',
      presentSimple: {
        Eu: 'agarro',
        Tu: 'agarras',
        'Ela/Ele/Você': 'agarra',
        Nós: 'agarramos',
        'Eles/Elas/Vocēs': 'agarram'
      },
      pastPerfect: {
        Eu: 'agarrei',
        Tu: 'agarraste',
        'Ela/Ele/Você': 'agarrou',
        Nós: 'agarrámos',
        'Eles/Elas/Vocēs': 'agarraram'
      }
    },
    {
      english: 'to answer',
      infinitive: 'responder',
      presentSimple: {
        Eu: 'respondo',
        Tu: 'respondes',
        'Ela/Ele/Você': 'responde',
        Nós: 'respondemos',
        'Eles/Elas/Vocēs': 'respondem'
      },
      pastPerfect: {
        Eu: 'respondi',
        Tu: 'respondeste',
        'Ela/Ele/Você': 'respondeu',
        Nós: 'respondemos',
        'Eles/Elas/Vocēs': 'responderam'
      }
    },
    {
      english: 'to smile',
      infinitive: 'sorrir',
      presentSimple: {
        Eu: 'sorrio',
        Tu: 'sorris',
        'Ela/Ele/Você': 'sorri',
        Nós: 'sorrimos',
        'Eles/Elas/Vocēs': 'sorriem'
      },
      pastPerfect: {
        Eu: 'sorri',
        Tu: 'sorriste',
        'Ela/Ele/Você': 'sorriu',
        Nós: 'sorrimos',
        'Eles/Elas/Vocēs': 'sorriram'
      }
    },
    {
      english: 'to sigh',
      infinitive: 'suspirar',
      presentSimple: {
        Eu: 'suspiro',
        Tu: 'suspiras',
        'Ela/Ele/Você': 'suspira',
        Nós: 'suspiramos',
        'Eles/Elas/Vocēs': 'suspiram'
      },
      pastPerfect: {
        Eu: 'suspirei',
        Tu: 'suspiraste',
        'Ela/Ele/Você': 'suspirou',
        Nós: 'suspirámos',
        'Eles/Elas/Vocēs': 'suspiraram'
      }
    },
    {
      english: 'to swim',
      infinitive: 'nadar',
      presentSimple: {
        Eu: 'nado',
        Tu: 'nadas',
        'Ela/Ele/Você': 'nada',
        Nós: 'nadamos',
        'Eles/Elas/Vocēs': 'nadam'
      },
      pastPerfect: {
        Eu: 'nadei',
        Tu: 'nadaste',
        'Ela/Ele/Você': 'nadou',
        Nós: 'nadámos',
        'Eles/Elas/Vocēs': 'nadaram'
      }
    },
    {
      english: 'to fly',
      infinitive: 'voar',
      presentSimple: {
        Eu: 'voo',
        Tu: 'voas',
        'Ela/Ele/Você': 'voa',
        Nós: 'voamos',
        'Eles/Elas/Vocēs': 'voam'
      },
      pastPerfect: {
        Eu: 'voei',
        Tu: 'voaste',
        'Ela/Ele/Você': 'voou',
        Nós: 'voámos',
        'Eles/Elas/Vocēs': 'voaram'
      }
    },
    {
      english: 'to drop',
      infinitive: 'soltar',
      presentSimple: {
        Eu: 'solto',
        Tu: 'soltas',
        'Ela/Ele/Você': 'solta',
        Nós: 'soltamos',
        'Eles/Elas/Vocēs': 'soltam'
      },
      pastPerfect: {
        Eu: 'soltei',
        Tu: 'soltaste',
        'Ela/Ele/Você': 'soltou',
        Nós: 'soltámos',
        'Eles/Elas/Vocēs': 'soltaram'
      }
    },
    {
      english: 'to separate',
      infinitive: 'separar',
      presentSimple: {
        Eu: 'separo',
        Tu: 'separas',
        'Ela/Ele/Você': 'separa',
        Nós: 'separamos',
        'Eles/Elas/Vocēs': 'separam'
      },
      pastPerfect: {
        Eu: 'separei',
        Tu: 'separaste',
        'Ela/Ele/Você': 'separou',
        Nós: 'separámos',
        'Eles/Elas/Vocēs': 'separaram'
      }
    },
    {
      english: 'to push',
      infinitive: 'empurrar',
      presentSimple: {
        Eu: 'empurro',
        Tu: 'empurras',
        'Ela/Ele/Você': 'empurra',
        Nós: 'empurramos',
        'Eles/Elas/Vocēs': 'empurram'
      },
      pastPerfect: {
        Eu: 'empurrei',
        Tu: 'empurraste',
        'Ela/Ele/Você': 'empurrou',
        Nós: 'empurrámos',
        'Eles/Elas/Vocēs': 'empurraram'
      }
    },
    {
      english: 'to return',
      infinitive: 'voltar',
      presentSimple: {
        Eu: 'volto',
        Tu: 'voltas',
        'Ela/Ele/Você': 'volta',
        Nós: 'voltamos',
        'Eles/Elas/Vocēs': 'voltam'
      },
      pastPerfect: {
        Eu: 'voltei',
        Tu: 'voltaste',
        'Ela/Ele/Você': 'voltou',
        Nós: 'voltámos',
        'Eles/Elas/Vocēs': 'voltaram'
      }
    },
    {
      english: 'to shake',
      infinitive: 'abanar',
      presentSimple: {
        Eu: 'abano',
        Tu: 'abanas',
        'Ela/Ele/Você': 'abana',
        Nós: 'abanamos',
        'Eles/Elas/Vocēs': 'abanam'
      },
      pastPerfect: {
        Eu: 'abanei',
        Tu: 'abanaste',
        'Ela/Ele/Você': 'abanou',
        Nós: 'abanámos',
        'Eles/Elas/Vocēs': 'abanaram'
      }
    },
    {
      english: 'to scream',
      infinitive: 'gritar',
      presentSimple: {
        Eu: 'grito',
        Tu: 'gritas',
        'Ela/Ele/Você': 'grita',
        Nós: 'gritamos',
        'Eles/Elas/Vocēs': 'gritam'
      },
      pastPerfect: {
        Eu: 'gritei',
        Tu: 'gritaste',
        'Ela/Ele/Você': 'gritou',
        Nós: 'gritámos',
        'Eles/Elas/Vocēs': 'gritaram'
      }
    },
    {
      english: 'to climb',
      infinitive: 'subir',
      presentSimple: {
        Eu: 'subo',
        Tu: 'sobes',
        'Ela/Ele/Você': 'sobe',
        Nós: 'subimos',
        'Eles/Elas/Vocēs': 'sobem'
      },
      pastPerfect: {
        Eu: 'subi',
        Tu: 'subiste',
        'Ela/Ele/Você': 'subiu',
        Nós: 'subimos',
        'Eles/Elas/Vocēs': 'subiram'
      }
    },
    {
      english: 'to poison',
      infinitive: 'envenenar',
      presentSimple: {
        Eu: 'enveneno',
        Tu: 'envenenas',
        'Ela/Ele/Você': 'envenena',
        Nós: 'envenenamos',
        'Eles/Elas/Vocēs': 'envenenam'
      },
      pastPerfect: {
        Eu: 'envenenei',
        Tu: 'envenenaste',
        'Ela/Ele/Você': 'envenenou',
        Nós: 'envenenámos',
        'Eles/Elas/Vocēs': 'envenenaram'
      }
    },
    {
      english: 'to sing',
      infinitive: 'cantar',
      presentSimple: {
        Eu: 'canto',
        Tu: 'cantas',
        'Ela/Ele/Você': 'canta',
        Nós: 'cantamos',
        'Eles/Elas/Vocēs': 'cantam'
      },
      pastPerfect: {
        Eu: 'cantei',
        Tu: 'cantaste',
        'Ela/Ele/Você': 'cantou',
        Nós: 'cantámos',
        'Eles/Elas/Vocēs': 'cantaram'
      }
    },
    {
      english: 'to laugh',
      infinitive: 'rir',
      presentSimple: {
        Eu: 'rio',
        Tu: 'ris',
        'Ela/Ele/Você': 'ri',
        Nós: 'rimos',
        'Eles/Elas/Vocēs': 'riem'
      },
      pastPerfect: {
        Eu: 'ri',
        Tu: 'riste',
        'Ela/Ele/Você': 'riu',
        Nós: 'rimos',
        'Eles/Elas/Vocēs': 'riram'
      }
    },
    {
      english: 'to scare',
      infinitive: 'assustar',
      presentSimple: {
        Eu: 'assusto',
        Tu: 'assustas',
        'Ela/Ele/Você': 'assusta',
        Nós: 'assustamos',
        'Eles/Elas/Vocēs': 'assustam'
      },
      pastPerfect: {
        Eu: 'assustei',
        Tu: 'assustaste',
        'Ela/Ele/Você': 'assustou',
        Nós: 'assustámos',
        'Eles/Elas/Vocēs': 'assustaram'
      }
    },
    {
      english: 'to bite',
      infinitive: 'trincar',
      presentSimple: {
        Eu: 'trinco',
        Tu: 'trincas',
        'Ela/Ele/Você': 'trinca',
        Nós: 'trincamos',
        'Eles/Elas/Vocēs': 'trincam'
      },
      pastPerfect: {
        Eu: 'trinquei',
        Tu: 'trincaste',
        'Ela/Ele/Você': 'trincou',
        Nós: 'trincámos',
        'Eles/Elas/Vocēs': 'trincaram'
      }
    },
    {
      english: 'to sit down',
      infinitive: 'sentar',
      presentSimple: {
        Eu: 'sento',
        Tu: 'sentas',
        'Ela/Ele/Você': 'senta',
        Nós: 'sentamos',
        'Eles/Elas/Vocēs': 'sentam'
      },
      pastPerfect: {
        Eu: 'sentei',
        Tu: 'sentaste',
        'Ela/Ele/Você': 'sentou',
        Nós: 'sentámos',
        'Eles/Elas/Vocēs': 'sentaram'
      }
    },
    {
      english: 'to fall asleep',
      infinitive: 'adormecer',
      presentSimple: {
        Eu: 'adormeço',
        Tu: 'adormeces',
        'Ela/Ele/Você': 'adormece',
        Nós: 'adormecemos',
        'Eles/Elas/Vocēs': 'adormecem'
      },
      pastPerfect: {
        Eu: 'adormeci',
        Tu: 'adormeceste',
        'Ela/Ele/Você': 'adormeceu',
        Nós: 'adormecemos',
        'Eles/Elas/Vocēs': 'adormeceram'
      }
    },
    {
      english: 'to wake up',
      infinitive: 'acordar',
      presentSimple: {
        Eu: 'acordo',
        Tu: 'acordas',
        'Ela/Ele/Você': 'acorda',
        Nós: 'acordamos',
        'Eles/Elas/Vocēs': 'acordam'
      },
      pastPerfect: {
        Eu: 'acordei',
        Tu: 'acordaste',
        'Ela/Ele/Você': 'acordou',
        Nós: 'acordámos',
        'Eles/Elas/Vocēs': 'acordaram'
      }
    },
    {
      english: 'to repair',
      infinitive: 'reparar',
      presentSimple: {
        Eu: 'reparo',
        Tu: 'reparas',
        'Ela/Ele/Você': 'repara',
        Nós: 'reparamos',
        'Eles/Elas/Vocēs': 'reparam'
      },
      pastPerfect: {
        Eu: 'reparei',
        Tu: 'reparaste',
        'Ela/Ele/Você': 'reparou',
        Nós: 'reparámos',
        'Eles/Elas/Vocēs': 'repararam'
      }
    },
    {
      english: 'to defend',
      infinitive: 'defender',
      presentSimple: {
        Eu: 'defendo',
        Tu: 'defendes',
        'Ela/Ele/Você': 'defende',
        Nós: 'defendemos',
        'Eles/Elas/Vocēs': 'defendem'
      },
      pastPerfect: {
        Eu: 'defendi',
        Tu: 'defendeste',
        'Ela/Ele/Você': 'defendeu',
        Nós: 'defendemos',
        'Eles/Elas/Vocēs': 'defenderam'
      }
    },
    {
      english: 'to escape',
      infinitive: 'fugir',
      presentSimple: {
        Eu: 'fujo',
        Tu: 'foges',
        'Ela/Ele/Você': 'foge',
        Nós: 'fugimos',
        'Eles/Elas/Vocēs': 'fogem'
      },
      pastPerfect: {
        Eu: 'fugi',
        Tu: 'fugiste',
        'Ela/Ele/Você': 'fugiu',
        Nós: 'fugimos',
        'Eles/Elas/Vocēs': 'fugiram'
      }
    },
    {
      english: 'to convince',
      infinitive: 'convencer',
      presentSimple: {
        Eu: 'convenço',
        Tu: 'convences',
        'Ela/Ele/Você': 'convence',
        Nós: 'convencemos',
        'Eles/Elas/Vocēs': 'convencem'
      },
      pastPerfect: {
        Eu: 'convenci',
        Tu: 'convenceste',
        'Ela/Ele/Você': 'convenceu',
        Nós: 'convencemos',
        'Eles/Elas/Vocēs': 'convenceram'
      }
    },
    {
      english: 'to hit',
      infinitive: 'bater',
      presentSimple: {
        Eu: 'bato',
        Tu: 'bates',
        'Ela/Ele/Você': 'bate',
        Nós: 'batemos',
        'Eles/Elas/Vocēs': 'batem'
      },
      pastPerfect: {
        Eu: 'bati',
        Tu: 'bateste',
        'Ela/Ele/Você': 'bateu',
        Nós: 'batemos',
        'Eles/Elas/Vocēs': 'bateram'
      }
    },
    {
      english: 'to blink',
      infinitive: 'piscar',
      presentSimple: {
        Eu: 'pisco',
        Tu: 'piscas',
        'Ela/Ele/Você': 'pisca',
        Nós: 'piscamos',
        'Eles/Elas/Vocēs': 'piscam'
      },
      pastPerfect: {
        Eu: 'pisquei',
        Tu: 'piscaste',
        'Ela/Ele/Você': 'piscou',
        Nós: 'piscámos',
        'Eles/Elas/Vocēs': 'piscaram'
      }
    },
    {
      english: 'to leave',
      infinitive: 'deixar',
      presentSimple: {
        Eu: 'deixo',
        Tu: 'deixas',
        'Ela/Ele/Você': 'deixa',
        Nós: 'deixamos',
        'Eles/Elas/Vocēs': 'deixam'
      },
      pastPerfect: {
        Eu: 'deixei',
        Tu: 'deixaste',
        'Ela/Ele/Você': 'deixou',
        Nós: 'deixámos',
        'Eles/Elas/Vocēs': 'deixaram'
      }
    },
    {
      english: 'to catch sight of',
      infinitive: 'avistar',
      presentSimple: {
        Eu: 'avisto',
        Tu: 'avistas',
        'Ela/Ele/Você': 'avista',
        Nós: 'avistamos',
        'Eles/Elas/Vocēs': 'avistam'
      },
      pastPerfect: {
        Eu: 'avistei',
        Tu: 'avistaste',
        'Ela/Ele/Você': 'avistou',
        Nós: 'avistámos',
        'Eles/Elas/Vocēs': 'avistaram'
      }
    },
    {
      english: 'to jump',
      infinitive: 'saltar',
      presentSimple: {
        Eu: 'salto',
        Tu: 'saltas',
        'Ela/Ele/Você': 'salta',
        Nós: 'saltamos',
        'Eles/Elas/Vocēs': 'saltam'
      },
      pastPerfect: {
        Eu: 'saltei',
        Tu: 'saltaste',
        'Ela/Ele/Você': 'saltou',
        Nós: 'saltámos',
        'Eles/Elas/Vocēs': 'saltaram'
      }
    },
    {
      english: 'to move',
      infinitive: 'mexer',
      presentSimple: {
        Eu: 'mexo',
        Tu: 'mexes',
        'Ela/Ele/Você': 'mexe',
        Nós: 'mexemos',
        'Eles/Elas/Vocēs': 'mexem'
      },
      pastPerfect: {
        Eu: 'mexi',
        Tu: 'mexeste',
        'Ela/Ele/Você': 'mexeu',
        Nós: 'mexemos',
        'Eles/Elas/Vocēs': 'mexeram'
      }
    },
    {
      english: 'to shoot',
      infinitive: 'atirar',
      presentSimple: {
        Eu: 'atiro',
        Tu: 'atiras',
        'Ela/Ele/Você': 'atira',
        Nós: 'atiramos',
        'Eles/Elas/Vocēs': 'atiram'
      },
      pastPerfect: {
        Eu: 'atirei',
        Tu: 'atiraste',
        'Ela/Ele/Você': 'atirou',
        Nós: 'atirámos',
        'Eles/Elas/Vocēs': 'atiraram'
      }
    },
    {
      english: 'to hit',
      infinitive: 'acertar',
      presentSimple: {
        Eu: 'acerto',
        Tu: 'acertas',
        'Ela/Ele/Você': 'acerta',
        Nós: 'acertamos',
        'Eles/Elas/Vocēs': 'acertam'
      },
      pastPerfect: {
        Eu: 'acertei',
        Tu: 'acertaste',
        'Ela/Ele/Você': 'acertou',
        Nós: 'acertámos',
        'Eles/Elas/Vocēs': 'acertaram'
      }
    },
    {
      english: 'to pull',
      infinitive: 'puxar',
      presentSimple: {
        Eu: 'puxo',
        Tu: 'puxas',
        'Ela/Ele/Você': 'puxa',
        Nós: 'puxamos',
        'Eles/Elas/Vocēs': 'puxam'
      },
      pastPerfect: {
        Eu: 'puxei',
        Tu: 'puxaste',
        'Ela/Ele/Você': 'puxou',
        Nós: 'puxámos',
        'Eles/Elas/Vocēs': 'puxaram'
      }
    },
    {
      english: 'be',
      infinitive: 'haver',
      presentSimple: {
        Eu: 'hei',
        Tu: 'hás',
        'Ela/Ele/Você': 'há',
        Nós: 'havemos',
        'Eles/Elas/Vocēs': 'hão'
      },
      pastPerfect: {
        Eu: 'havia',
        Tu: 'havias',
        'Ela/Ele/Você': 'havia',
        Nós: 'havíamos',
        'Eles/Elas/Vocēs': 'haviam'
      }
    },
    {
      english: 'should',
      infinitive: 'dever',
      presentSimple: {
        Eu: 'devo',
        Tu: 'deves',
        'Ela/Ele/Você': 'deve',
        Nós: 'devemos',
        'Eles/Elas/Vocēs': 'devem'
      },
      pastPerfect: {
        Eu: 'devi',
        Tu: 'deveste',
        'Ela/Ele/Você': 'deveu',
        Nós: 'devemos',
        'Eles/Elas/Vocēs': 'deveram'
      },
      imperfect: {
        Eu: 'devia',
        Tu: 'devias',
        'Ela/Ele/Você': 'devia',
        Nós: 'devíamos',
        'Eles/Elas/Vocēs': 'deviam'
      }
    },
    {
      english: 'to seem',
      infinitive: 'parecer',
      presentSimple: {
        Eu: 'pareço',
        Tu: 'pareces',
        'Ela/Ele/Você': 'parece',
        Nós: 'parecemos',
        'Eles/Elas/Vocēs': 'parecem'
      },
      pastPerfect: {
        Eu: 'pareci',
        Tu: 'pareceste',
        'Ela/Ele/Você': 'pareceu',
        Nós: 'parecemos',
        'Eles/Elas/Vocēs': 'pareceram'
      },
      imperfect: {
        Eu: 'parecia',
        Tu: 'parecias',
        'Ela/Ele/Você': 'parecia',
        Nós: 'parecíamos',
        'Eles/Elas/Vocēs': 'pareciam'
      }
    }
  ],
  nouns: [
    {
      english: 'city',
      portuguese: {
        word: 'cidade',
        plural: 'cidades',
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
      english: 'book',
      portuguese: {
        word: 'livro',
        plural: 'livros',
        gender: 'masculine'
      }
    },
    {
      english: 'girlfriend',
      portuguese: {
        word: 'namorada',
        plural: 'namoradas',
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
        plural: 'casa-de-banhos',
        gender: 'feminine'
      }
    },
    {
      english: 'lesson',
      portuguese: {
        word: 'aula',
        plural: 'aulas',
        gender: 'feminine'
      }
    },
    {
      english: 'year',
      portuguese: {
        word: 'ano',
        plural: 'anos',
        gender: 'masculine'
      }
    },
    {
      english: 'month',
      portuguese: {
        word: 'mês',
        plural: 'meses',
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
      english: 'desert',
      portuguese: {
        word: 'sobremesa',
        plural: 'sobremesas',
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
      english: 'stairs',
      portuguese: {
        word: 'escadas',
        gender: 'feminine'
      }
    },
    {
      english: 'calculator',
      portuguese: {
        word: 'calculadora',
        plural: 'calculadoras',
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
    {
      english: 'long sleeve',
      portuguese: {
        word: 'camisola',
        gender: 'masculine'
      }
    },
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
      english: 'bicycle',
      portuguese: {
        word: 'bicicleta',
        plural: 'bicicletas',
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
        plural: 'amigos',
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
        plural: 'vezes',
        gender: 'feminine'
      }
    },
    {
      english: 'thing',
      portuguese: {
        word: 'coisa',
        plural: 'coisas',
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
    },
    {
      english: 'accident',
      portuguese: {
        word: 'acidente',
        plural: 'acidentes',
        gender: 'masculine'
      }
    },
    {
      english: 'airport',
      portuguese: {
        word: 'aeroporto',
        plural: 'aeroportos',
        gender: 'masculine'
      }
    },
    {
      english: 'way',
      portuguese: {
        word: 'caminho',
        plural: 'caminhos',
        gender: 'masculine'
      }
    },
    {
      english: 'car',
      portuguese: {
        word: 'carro',
        plural: 'carros',
        gender: 'masculine'
      }
    },
    {
      english: 'letter',
      portuguese: {
        word: 'carta',
        plural: 'cartas',
        gender: 'feminine'
      }
    },
    {
      english: 'cause',
      portuguese: {
        word: 'causa',
        plural: 'causas',
        gender: 'feminine'
      }
    },
    {
      english: 'accusation',
      portuguese: {
        word: 'acusação',
        plural: 'acusações',
        gender: 'feminine'
      }
    },
    {
      english: 'birthday',
      portuguese: {
        word: 'aniversário',
        plural: 'aniversários',
        gender: 'masculine'
      }
    },
    {
      english: 'surrounding',
      portuguese: {
        word: 'arredor',
        plural: 'arredores',
        gender: 'masculine'
      }
    },
    {
      english: 'art',
      portuguese: {
        word: 'arte',
        gender: 'feminine'
      }
    },
    {
      english: 'subject',
      portuguese: {
        word: 'assunto',
        plural: 'assuntos',
        gender: 'masculine'
      }
    },
    {
      english: 'author',
      portuguese: {
        word: 'autor',
        plural: 'autores',
        gender: 'masculine'
      }
    },
    {
      english: 'bath',
      portuguese: {
        word: 'banho',
        plural: 'banhos',
        gender: 'masculine'
      }
    },
    {
      english: 'ball',
      portuguese: {
        word: 'bola',
        plural: 'bolas',
        gender: 'feminine'
      }
    },
    {
      english: 'dog',
      portuguese: {
        word: 'cachorro',
        plural: 'cachorros',
        gender: 'masculine'
      }
    },
    {
      english: 'coffee',
      portuguese: {
        word: 'café',
        plural: 'cafés',
        gender: 'masculine'
      }
    },
    {
      english: 'hike',
      portuguese: {
        word: 'caminhada',
        plural: 'caminhadas',
        gender: 'feminine'
      }
    },
    {
      english: 'truck',
      portuguese: {
        word: 'camião',
        plural: 'camiões',
        gender: 'masculine'
      }
    },
    {
      english: 'load',
      portuguese: {
        word: 'carga',
        plural: 'cargas',
        gender: 'feminine'
      }
    },
    {
      english: 'portfolio',
      portuguese: {
        word: 'carteira',
        plural: 'carteiras',
        gender: 'feminine'
      }
    },
    {
      english: 'colleague',
      portuguese: {
        word: 'colega',
        plural: 'colegas',
        gender: 'masculine'
      }
    },
    {
      english: 'condition',
      portuguese: {
        word: 'condição',
        plural: 'condições',
        gender: 'feminine'
      }
    },
    {
      english: 'contract',
      portuguese: {
        word: 'contrato',
        plural: 'contratos',
        gender: 'masculine'
      }
    },
    {
      english: 'god',
      portuguese: {
        word: 'deus',
        plural: 'deuses',
        gender: 'masculine'
      }
    },
    {
      english: 'day',
      portuguese: {
        word: 'dia',
        plural: 'dias',
        gender: 'masculine'
      }
    },
    {
      english: 'money',
      portuguese: {
        word: 'dinheiro',
        gender: 'masculine'
      }
    },
    {
      english: 'disk',
      portuguese: {
        word: 'disco',
        plural: 'discos',
        gender: 'masculine'
      }
    },
    {
      english: 'dialogue',
      portuguese: {
        word: 'diálogo',
        plural: 'diálogos',
        gender: 'masculine'
      }
    },
    {
      english: 'hunger',
      portuguese: {
        word: 'fome',
        gender: 'feminine'
      }
    },
    {
      english: 'photo',
      portuguese: {
        word: 'fotografia',
        plural: 'fotografias',
        gender: 'feminine'
      }
    },
    {
      english: 'employee',
      portuguese: {
        word: 'funcionário',
        plural: 'funcionários',
        gender: 'masculine'
      }
    },
    {
      english: 'factory',
      portuguese: {
        word: 'fábrica',
        plural: 'fábricas',
        gender: 'feminine'
      }
    },
    {
      english: 'drawer',
      portuguese: {
        word: 'gaveta',
        plural: 'gavetas',
        gender: 'feminine'
      }
    },
    {
      english: 'guitar',
      portuguese: {
        word: 'guitarra',
        plural: 'guitarras',
        gender: 'feminine'
      }
    },
    {
      english: 'ability',
      portuguese: {
        word: 'habilidade',
        plural: 'habilidades',
        gender: 'feminine'
      }
    },
    {
      english: 'history',
      portuguese: {
        word: 'história',
        plural: 'histórias',
        gender: 'feminine'
      }
    },
    {
      english: 'hour',
      portuguese: {
        word: 'hora',
        plural: 'horas',
        gender: 'feminine'
      }
    },
    {
      english: 'tax',
      portuguese: {
        word: 'imposto',
        plural: 'impostos',
        gender: 'masculine'
      }
    },
    {
      english: 'information',
      portuguese: {
        word: 'informação',
        plural: 'informações',
        gender: 'feminine'
      }
    },
    {
      english: 'instruction',
      portuguese: {
        word: 'instrução',
        plural: 'instruções',
        gender: 'feminine'
      }
    },
    {
      english: 'side',
      portuguese: {
        word: 'lado',
        plural: 'lados',
        gender: 'masculine'
      }
    },
    {
      english: 'garbage',
      portuguese: {
        word: 'lixo',
        plural: 'lixos',
        gender: 'masculine'
      }
    },
    {
      english: 'dishes',
      portuguese: {
        word: 'loiça',
        gender: 'feminine'
      }
    },
    {
      english: 'language',
      portuguese: {
        word: 'língua',
        plural: 'línguas',
        gender: 'feminine'
      }
    },
    {
      english: 'morning',
      portuguese: {
        word: 'manhã',
        plural: 'manhãs',
        gender: 'feminine'
      }
    },
    {
      english: 'sock',
      portuguese: {
        word: 'meia',
        plural: 'meias',
        gender: 'feminine'
      }
    },
    {
      english: 'backpack',
      portuguese: {
        word: 'mochila',
        plural: 'mochilas',
        gender: 'feminine'
      }
    },
    {
      english: 'strawberry',
      portuguese: {
        word: 'morango',
        plural: 'morangos',
        gender: 'masculine'
      }
    },
    {
      english: 'dress',
      portuguese: {
        word: 'vestido',
        plural: 'vestidos',
        gender: 'masculine'
      }
    },
    {
      english: 'life',
      portuguese: {
        word: 'vida',
        plural: 'vidas',
        gender: 'feminine'
      }
    },
    {
      english: 'visit',
      portuguese: {
        word: 'visita',
        plural: 'visitas',
        gender: 'feminine'
      }
    },
    {
      english: 'return',
      portuguese: {
        word: 'volta',
        plural: 'voltas',
        gender: 'feminine'
      }
    },
    {
      english: 'victim',
      portuguese: {
        word: 'vítima',
        plural: 'vítimas',
        gender: 'feminine'
      }
    },
    {
      english: 'television',
      portuguese: {
        word: 'televisão',
        plural: 'televisões',
        gender: 'feminine'
      }
    },
    {
      english: 'theory',
      portuguese: {
        word: 'teoria',
        plural: 'teorias',
        gender: 'feminine'
      }
    },
    {
      english: 'test',
      portuguese: {
        word: 'teste',
        plural: 'testes',
        gender: 'masculine'
      }
    },
    {
      english: 'text',
      portuguese: {
        word: 'texto',
        plural: 'textos',
        gender: 'masculine'
      }
    },
    {
      english: 'university',
      portuguese: {
        word: 'universidade',
        plural: 'universidades',
        gender: 'feminine'
      }
    },
    {
      english: 'vacancy',
      portuguese: {
        word: 'vaga',
        plural: 'vagas',
        gender: 'feminine'
      }
    },
    {
      english: 'supermarket',
      portuguese: {
        word: 'supermercado',
        plural: 'supermercados',
        gender: 'masculine'
      }
    },
    {
      english: 'talent',
      portuguese: {
        word: 'talento',
        gender: 'masculine'
      }
    },
    {
      english: 'afternoon',
      portuguese: {
        word: 'tarde',
        plural: 'tardes',
        gender: 'feminine'
      }
    },
    {
      english: 'telephone',
      portuguese: {
        word: 'telefone',
        plural: 'telefones',
        gender: 'masculine'
      }
    },
    {
      english: 'shoes',
      portuguese: {
        word: 'sapato',
        plural: 'sapatos',
        gender: 'masculine'
      }
    },
    {
      english: 'service',
      portuguese: {
        word: 'serviço',
        plural: 'serviços',
        gender: 'masculine'
      }
    },
    {
      english: 'situation',
      portuguese: {
        word: 'situação',
        plural: 'situações',
        gender: 'feminine'
      }
    },
    {
      english: 'solution',
      portuguese: {
        word: 'solução',
        plural: 'soluções',
        gender: 'feminine'
      }
    },
    {
      english: 'suggestion',
      portuguese: {
        word: 'sugestão',
        plural: 'sugestões',
        gender: 'feminine'
      }
    },
    {
      english: 'reaction',
      portuguese: {
        word: 'reação',
        plural: 'reações',
        gender: 'feminine'
      }
    },
    {
      english: 'rule',
      portuguese: {
        word: 'regra',
        plural: 'regras',
        gender: 'feminine'
      }
    },
    {
      english: 'response',
      portuguese: {
        word: 'resposta',
        plural: 'respostas',
        gender: 'feminine'
      }
    },
    {
      english: 'restaurant',
      portuguese: {
        word: 'restaurante',
        plural: 'restaurantes',
        gender: 'masculine'
      }
    },
    {
      english: 'meeting',
      portuguese: {
        word: 'reunião',
        plural: 'reuniões',
        gender: 'feminine'
      }
    },
    {
      english: 'salary',
      portuguese: {
        word: 'salário',
        plural: 'salários',
        gender: 'masculine'
      }
    },
    {
      english: 'product',
      portuguese: {
        word: 'produto',
        plural: 'produtos',
        gender: 'masculine'
      }
    },
    {
      english: 'teacher',
      portuguese: {
        word: 'professora',
        plural: 'professoras',
        gender: 'feminine'
      }
    },
    {
      english: 'project',
      portuguese: {
        word: 'projeto',
        plural: 'projetos',
        gender: 'masculine'
      }
    },
    {
      english: 'evidence',
      portuguese: {
        word: 'prova',
        plural: 'provas',
        gender: 'feminine'
      }
    },
    {
      english: 'experience',
      portuguese: {
        word: 'prática',
        plural: 'práticas',
        gender: 'feminine'
      }
    },
    {
      english: 'price',
      portuguese: {
        word: 'preço',
        plural: 'preços',
        gender: 'masculine'
      }
    },
    {
      english: 'person',
      portuguese: {
        word: 'pessoa',
        plural: 'pessoas',
        gender: 'feminine'
      }
    },
    {
      english: 'opinion',
      portuguese: {
        word: 'opinião',
        plural: 'opiniões',
        gender: 'feminine'
      }
    },
    {
      english: 'package',
      portuguese: {
        word: 'pacote',
        plural: 'pacotes',
        gender: 'masculine'
      }
    },
    {
      english: 'world',
      portuguese: {
        word: 'mundo',
        plural: 'mundos',
        gender: 'masculine'
      }
    },
    {
      english: 'love',
      portuguese: {
        word: 'amor',
        plural: 'amores',
        gender: 'masculine'
      }
    },
    {
      english: 'school',
      portuguese: {
        word: 'escola',
        plural: 'escolas',
        gender: 'feminine'
      }
    },
    {
      english: 'garden',
      portuguese: {
        word: 'jardim',
        plural: 'jardins',
        gender: 'masculine'
      }
    },
    {
      english: 'animal',
      portuguese: {
        word: 'animal',
        plural: 'animais',
        gender: 'masculine'
      }
    },
    {
      english: 'family',
      portuguese: {
        word: 'família',
        plural: 'famílias',
        gender: 'feminine'
      }
    },
    {
      english: 'store',
      portuguese: {
        word: 'loja',
        plural: 'lojas',
        gender: 'feminine'
      }
    },
    {
      english: 'key',
      portuguese: {
        word: 'chave',
        plural: 'chaves',
        gender: 'feminine'
      }
    },
    {
      english: 'color',
      portuguese: {
        word: 'cor',
        plural: 'cores',
        gender: 'feminine'
      }
    },
    {
      english: 'station',
      portuguese: {
        word: 'estação',
        plural: 'estações',
        gender: 'feminine'
      }
    },
    {
      english: 'hotel',
      portuguese: {
        word: 'hotel',
        plural: 'hotéis',
        gender: 'masculine'
      }
    },
    {
      english: 'bus',
      portuguese: {
        word: 'autocarro',
        plural: 'autocarros',
        gender: 'masculine'
      }
    },
    {
      english: 'paper',
      portuguese: {
        word: 'papel',
        plural: 'papéis',
        gender: 'masculine'
      }
    },
    {
      english: 'pen',
      portuguese: {
        word: 'caneta',
        plural: 'canetas',
        gender: 'feminine'
      }
    },
    {
      english: 'pencil',
      portuguese: {
        word: 'lápis',
        plural: 'lápis',
        gender: 'masculine'
      }
    },
    {
      english: 'summer',
      portuguese: {
        word: 'verão',
        plural: 'verãos,',
        gender: 'masculine'
      }
    },
    {
      english: 'winter',
      portuguese: {
        word: 'inverno',
        plural: 'invernos',
        gender: 'masculine'
      }
    },
    {
      english: 'spring',
      portuguese: {
        word: 'primavera',
        plural: 'primaveras',
        gender: 'feminine'
      }
    },
    {
      english: 'autumn',
      portuguese: {
        word: 'outono',
        plural: 'outonos',
        gender: 'masculine'
      }
    },
    {
      english: 'mountain',
      portuguese: {
        word: 'montanha',
        plural: 'montanhas',
        gender: 'feminine'
      }
    },
    {
      english: 'river',
      portuguese: {
        word: 'rio',
        plural: 'rios',
        gender: 'masculine'
      }
    },
    {
      english: 'bread',
      portuguese: {
        word: 'pão',
        plural: 'pães',
        gender: 'masculine'
      }
    },
    {
      english: 'wine',
      portuguese: {
        word: 'vinho',
        plural: 'vinhos',
        gender: 'masculine'
      }
    },
    {
      english: 'salt',
      portuguese: {
        word: 'sal',
        plural: 'sais',
        gender: 'masculine'
      }
    },
    {
      english: 'holiday',
      portuguese: {
        word: 'feriado',
        plural: 'feriados',
        gender: 'masculine'
      }
    },
    {
      english: 'clock',
      portuguese: {
        word: 'relógio',
        plural: 'relógios',
        gender: 'masculine'
      }
    },
    {
      english: 'fire',
      portuguese: {
        word: 'fogo',
        plural: 'fogos',
        gender: 'masculine'
      }
    },
    {
      english: 'night',
      portuguese: {
        word: 'noite',
        plural: 'noites',
        gender: 'feminine'
      }
    },
    {
      english: 'dream',
      portuguese: {
        word: 'sonho',
        plural: 'sonhos',
        gender: 'masculine'
      }
    },
    {
      english: 'sound',
      portuguese: {
        word: 'som',
        plural: 'sons',
        gender: 'masculine'
      }
    },
    {
      english: 'island',
      portuguese: {
        word: 'ilha',
        plural: 'ilhas',
        gender: 'feminine'
      }
    },
    {
      english: 'star',
      portuguese: {
        word: 'estrela',
        plural: 'estrelas',
        gender: 'feminine'
      }
    },
    {
      english: 'heart',
      portuguese: {
        word: 'coração',
        plural: 'corações',
        gender: 'masculine'
      }
    },
    {
      english: 'square - place',
      portuguese: {
        word: 'praça',
        plural: 'praças',
        gender: 'feminine'
      }
    },
    {
      english: 'hand',
      portuguese: {
        word: 'mão',
        plural: 'mãos',
        gender: 'feminine'
      }
    },
    {
      english: 'egg',
      portuguese: {
        word: 'ovo',
        plural: 'ovos',
        gender: 'masculine'
      }
    },
    {
      english: 'eye',
      portuguese: {
        word: 'olho',
        plural: 'olhos',
        gender: 'masculine'
      }
    },
    {
      english: 'tooth',
      portuguese: {
        word: 'dente',
        plural: 'dentes',
        gender: 'masculine'
      }
    },
    {
      english: 'smile',
      portuguese: {
        word: 'sorriso',
        plural: 'sorrisos',
        gender: 'masculine'
      }
    },
    {
      english: 'sky',
      portuguese: {
        word: 'céu',
        plural: 'céus',
        gender: 'masculine'
      }
    },
    {
      english: 'cloud',
      portuguese: {
        word: 'nuvem',
        plural: 'nuvens',
        gender: 'feminine'
      }
    },
    {
      english: 'sense',
      portuguese: {
        word: 'sentido',
        plural: 'sentidos',
        gender: 'masculine'
      }
    },
    {
      english: 'number',
      portuguese: {
        word: 'número',
        plural: 'números',
        gender: 'masculine'
      }
    },
    {
      english: 'travel',
      portuguese: {
        word: 'viagem',
        plural: 'viagens',
        gender: 'feminine'
      }
    },
    {
      english: 'market',
      portuguese: {
        word: 'mercado',
        plural: 'mercados',
        gender: 'masculine'
      }
    },
    {
      english: 'policy',
      portuguese: {
        word: 'política',
        plural: 'políticas',
        gender: 'feminine'
      }
    },
    {
      english: 'entry',
      portuguese: {
        word: 'entrada',
        plural: 'entradas',
        gender: 'feminine'
      }
    },
    {
      english: 'exit',
      portuguese: {
        word: 'saída',
        plural: 'saídas',
        gender: 'feminine'
      }
    },
    {
      english: 'magazine',
      portuguese: {
        word: 'revista',
        plural: 'revistas',
        gender: 'feminine'
      }
    },
    {
      english: 'machine',
      portuguese: {
        word: 'máquina',
        plural: 'máquinas',
        gender: 'feminine'
      }
    },
    {
      english: 'ring',
      portuguese: {
        word: 'anel',
        plural: 'anéis',
        gender: 'masculine'
      }
    },
    {
      english: 'earring',
      portuguese: {
        word: 'brinco',
        plural: 'brincos',
        gender: 'masculine'
      }
    },
    {
      english: 'building',
      portuguese: {
        word: 'prédio',
        plural: 'prédios',
        gender: 'masculine'
      }
    },
    {
      english: 'student',
      portuguese: {
        word: 'aluno',
        plural: 'alunos',
        gender: 'masculine'
      }
    },
    {
      english: 'terrace',
      portuguese: {
        word: 'terraço',
        plural: 'terraços',
        gender: 'masculine'
      }
    },
    {
      english: 'tie',
      portuguese: {
        word: 'gravata',
        plural: 'gravatas',
        gender: 'feminine'
      }
    },
    {
      english: 'construction',
      portuguese: {
        word: 'construção',
        plural: 'construções',
        gender: 'feminine'
      }
    },
    {
      english: 'church',
      portuguese: {
        word: 'igreja',
        plural: 'igrejas',
        gender: 'feminine'
      }
    },
    {
      english: 'farm',
      portuguese: {
        word: 'fazenda',
        plural: 'fazendas',
        gender: 'feminine'
      }
    },
    {
      english: 'field',
      portuguese: {
        word: 'campo',
        plural: 'campos',
        gender: 'masculine'
      }
    },
    {
      english: 'bridge',
      portuguese: {
        word: 'ponte',
        plural: 'pontes',
        gender: 'feminine'
      }
    },
    {
      english: 'block of flats',
      portuguese: {
        word: 'edifício',
        plural: 'edifícios',
        gender: 'masculine'
      }
    },
    {
      english: 'ladder',
      portuguese: {
        word: 'escada',
        plural: 'escadas',
        gender: 'feminine'
      }
    },
    {
      english: 'poem',
      portuguese: {
        word: 'poema',
        plural: 'poemas',
        gender: 'masculine'
      }
    },
    {
      english: 'museum',
      portuguese: {
        word: 'museu',
        plural: 'museus',
        gender: 'masculine'
      }
    },
    {
      english: 'brush',
      portuguese: {
        word: 'pincel',
        plural: 'pincéis',
        gender: 'masculine'
      }
    },
    {
      english: 'ink',
      portuguese: {
        word: 'tinta',
        plural: 'tintas',
        gender: 'feminine'
      }
    },
    {
      english: 'concert',
      portuguese: {
        word: 'concerto',
        plural: 'concertos',
        gender: 'masculine'
      }
    },
    {
      english: 'source',
      portuguese: {
        word: 'fonte',
        plural: 'fontes',
        gender: 'feminine'
      }
    },
    {
      english: 'ingredient',
      portuguese: {
        word: 'ingrediente',
        plural: 'ingredientes',
        gender: 'masculine'
      }
    },
    {
      english: 'sting',
      portuguese: {
        word: 'picada',
        plural: 'picadas',
        gender: 'feminine'
      }
    },
    {
      english: 'storm',
      portuguese: {
        word: 'tempestade',
        plural: 'tempestades',
        gender: 'feminine'
      }
    },
    {
      english: 'reflection',
      portuguese: {
        word: 'reflexo',
        plural: 'reflexos',
        gender: 'masculine'
      }
    },
    {
      english: 'trade',
      portuguese: {
        word: 'comércio',
        plural: 'comércios',
        gender: 'masculine'
      }
    },
    {
      english: 'diploma',
      portuguese: {
        word: 'diploma',
        plural: 'diplomas',
        gender: 'masculine'
      }
    },
    {
      english: 'conference',
      portuguese: {
        word: 'conferência',
        plural: 'conferências',
        gender: 'feminine'
      }
    },
    {
      english: 'debate',
      portuguese: {
        word: 'debate',
        plural: 'debates',
        gender: 'masculine'
      }
    },
    {
      english: 'room',
      portuguese: {
        word: 'sala',
        plural: 'salas',
        gender: 'feminine'
      }
    },
    {
      english: 'office',
      portuguese: {
        word: 'escritório',
        plural: 'escritórios',
        gender: 'masculine'
      }
    },
    {
      english: 'lie',
      portuguese: {
        word: 'mentira',
        plural: 'mentiras',
        gender: 'feminine'
      }
    },
    {
      english: 'castle',
      portuguese: {
        word: 'castelo',
        plural: 'castelos',
        gender: 'masculine'
      }
    },
    {
      english: 'planet',
      portuguese: {
        word: 'planeta',
        plural: 'planetas',
        gender: 'masculine'
      }
    },
    {
      english: 'biscuit',
      portuguese: {
        word: 'biscoito',
        plural: 'biscoitos',
        gender: 'masculine'
      }
    },
    {
      english: 'sweet',
      portuguese: {
        word: 'doce',
        plural: 'doces',
        gender: 'masculine'
      }
    },
    {
      english: 'herb',
      portuguese: {
        word: 'erva',
        plural: 'ervas',
        gender: 'feminine'
      }
    },
    {
      english: 'tree',
      portuguese: {
        word: 'árvore',
        plural: 'árvores',
        gender: 'feminine'
      }
    },
    {
      english: 'shadow',
      portuguese: {
        word: 'sombra',
        plural: 'sombras',
        gender: 'feminine'
      }
    },
    {
      english: 'voice',
      portuguese: {
        word: 'voz',
        plural: 'vozes',
        gender: 'feminine'
      }
    },
    {
      english: 'face',
      portuguese: {
        word: 'rosto',
        plural: 'rostos',
        gender: 'masculine'
      }
    },
    {
      english: 'skirt',
      portuguese: {
        word: 'saia',
        plural: 'saias',
        gender: 'feminine'
      }
    },
    {
      english: 'kingdom',
      portuguese: {
        word: 'reino',
        plural: 'reinos',
        gender: 'masculine'
      }
    },
    {
      english: 'boss',
      portuguese: {
        word: 'chefe',
        plural: 'chefes',
        gender: 'masculine'
      }
    },
    {
      english: 'horse',
      portuguese: {
        word: 'cavalo',
        gender: 'masculine'
      }
    },
    {
      english: 'sword',
      portuguese: {
        word: 'espada',
        plural: 'espadas',
        gender: 'feminine'
      }
    },
    {
      english: 'purse',
      portuguese: {
        word: 'bolsa',
        plural: 'bolsas',
        gender: 'feminine'
      }
    },
    {
      english: 'gold',
      portuguese: {
        word: 'ouro',
        gender: 'masculine'
      }
    },
    {
      english: 'currencie',
      portuguese: {
        word: 'moeda',
        plural: 'moedas',
        gender: 'feminine'
      }
    },
    {
      english: 'fear',
      portuguese: {
        word: 'medo',
        gender: 'masculine'
      }
    },
    {
      english: 'order',
      portuguese: {
        word: 'ordem',
        plural: 'ordens',
        gender: 'feminine'
      }
    },
    {
      english: 'envelope',
      portuguese: {
        word: 'envelope',
        plural: 'envelopes',
        gender: 'masculine'
      }
    },
    {
      english: 'declaration',
      portuguese: {
        word: 'declaração',
        plural: 'declarações',
        gender: 'feminine'
      }
    },
    {
      english: 'security',
      portuguese: {
        word: 'segurança',
        plural: 'seguranças',
        gender: 'feminine'
      }
    },
    {
      english: 'margin',
      portuguese: {
        word: 'margem',
        plural: 'margens',
        gender: 'feminine'
      }
    },
    {
      english: 'luck',
      portuguese: {
        word: 'sorte',
        gender: 'feminine'
      }
    },
    {
      english: 'bride',
      portuguese: {
        word: 'noiva',
        gender: 'feminine'
      }
    },
    {
      english: 'noise',
      portuguese: {
        word: 'ruído',
        plural: 'ruídos',
        gender: 'masculine'
      }
    },
    {
      english: 'rope',
      portuguese: {
        word: 'corda',
        plural: 'cordas',
        gender: 'feminine'
      }
    },
    {
      english: 'roof',
      portuguese: {
        word: 'telhado',
        plural: 'telhados',
        gender: 'masculine'
      }
    },
    {
      english: 'tower',
      portuguese: {
        word: 'torre',
        plural: 'torres',
        gender: 'feminine'
      }
    },
    {
      english: 'pension',
      portuguese: {
        word: 'pensão',
        plural: 'pensões',
        gender: 'feminine'
      }
    },
    {
      english: 'wolf',
      portuguese: {
        word: 'lobo',
        plural: 'lobos',
        gender: 'masculine'
      }
    },
    {
      english: 'glass',
      portuguese: {
        word: 'vidro',
        plural: 'vidros',
        gender: 'masculine'
      }
    },
    {
      english: 'lantern',
      portuguese: {
        word: 'lanterna',
        plural: 'lanternas',
        gender: 'feminine'
      }
    },
    {
      english: 'garden',
      portuguese: {
        word: 'horta',
        plural: 'hortas',
        gender: 'feminine'
      }
    },
    {
      english: 'vegetable',
      portuguese: {
        word: 'legume',
        plural: 'legumes',
        gender: 'masculine'
      }
    },
    {
      english: 'fruit',
      portuguese: {
        word: 'fruto',
        plural: 'frutos',
        gender: 'masculine'
      }
    },
    {
      english: 'place',
      portuguese: {
        word: 'lugar',
        plural: 'lugares',
        gender: 'masculine'
      }
    },
    {
      english: 'basket',
      portuguese: {
        word: 'cesto',
        plural: 'cestos',
        gender: 'masculine'
      }
    },
    {
      english: 'crow',
      portuguese: {
        word: 'corvo',
        plural: 'corvos',
        gender: 'masculine'
      }
    },
    {
      english: 'paw',
      portuguese: {
        word: 'pata',
        plural: 'patas',
        gender: 'feminine'
      }
    },
    {
      english: 'witch',
      portuguese: {
        word: 'bruxa',
        plural: 'bruxas',
        gender: 'feminine'
      }
    },
    {
      english: 'thief',
      portuguese: {
        word: 'ladra',
        plural: 'ladras',
        gender: 'feminine'
      }
    },
    {
      english: 'bar',
      portuguese: {
        word: 'bar',
        plural: 'bares',
        gender: 'masculine'
      }
    },
    {
      english: 'column',
      portuguese: {
        word: 'coluna',
        plural: 'colunas',
        gender: 'feminine'
      }
    },
    {
      english: 'plate',
      portuguese: {
        word: 'placa',
        plural: 'placas',
        gender: 'feminine'
      }
    },
    {
      english: 'spider',
      portuguese: {
        word: 'aranha',
        gender: 'feminine'
      }
    },
    {
      english: 'giant',
      portuguese: {
        word: 'gigante',
        plural: 'gigantes',
        gender: 'masculine'
      }
    },
    {
      english: 'relief',
      portuguese: {
        word: 'socorro',
        gender: 'masculine'
      }
    },
    {
      english: 'web',
      portuguese: {
        word: 'teia',
        plural: 'teias',
        gender: 'feminine'
      }
    },
    {
      english: 'corner',
      portuguese: {
        word: 'canto',
        plural: 'cantos',
        gender: 'masculine'
      }
    },
    {
      english: 'sign',
      portuguese: {
        word: 'sinal',
        plural: 'sinais',
        gender: 'masculine'
      }
    },
    {
      english: 'advice',
      portuguese: {
        word: 'conselho',
        plural: 'conselhos',
        gender: 'masculine'
      }
    },
    {
      english: 'sea',
      portuguese: {
        word: 'mar',
        plural: 'mares',
        gender: 'masculine'
      }
    },
    {
      english: 'brand',
      portuguese: {
        word: 'marca',
        plural: 'marcas',
        gender: 'feminine'
      }
    },
    {
      english: 'mask',
      portuguese: {
        word: 'máscara',
        plural: 'máscaras',
        gender: 'feminine'
      }
    },
    {
      english: 'mass',
      portuguese: {
        word: 'massa',
        plural: 'massas',
        gender: 'feminine'
      }
    },
    {
      english: 'material',
      portuguese: {
        word: 'material',
        plural: 'materiais',
        gender: 'masculine'
      }
    },
    {
      english: 'matter',
      portuguese: {
        word: 'matéria',
        plural: 'matérias',
        gender: 'feminine'
      }
    },
    {
      english: 'matrix',
      portuguese: {
        word: 'matriz',
        plural: 'matrizes',
        gender: 'feminine'
      }
    },
    {
      english: 'memory',
      portuguese: {
        word: 'memória',
        plural: 'memórias',
        gender: 'feminine'
      }
    },
    {
      english: 'method',
      portuguese: {
        word: 'método',
        plural: 'métodos',
        gender: 'masculine'
      }
    },
    {
      english: 'microphone',
      portuguese: {
        word: 'microfone',
        plural: 'microfones',
        gender: 'masculine'
      }
    },
    {
      english: 'miracle',
      portuguese: {
        word: 'milagre',
        plural: 'milagres',
        gender: 'masculine'
      }
    },
    {
      english: 'mile',
      portuguese: {
        word: 'milha',
        plural: 'milhas',
        gender: 'feminine'
      }
    },
    {
      english: 'model',
      portuguese: {
        word: 'modelo',
        plural: 'modelos',
        gender: 'masculine'
      }
    },
    {
      english: 'mode',
      portuguese: {
        word: 'modo',
        plural: 'modos',
        gender: 'masculine'
      }
    },
    {
      english: 'death',
      portuguese: {
        word: 'morte',
        plural: 'mortes',
        gender: 'feminine'
      }
    },
    {
      english: 'reason',
      portuguese: {
        word: 'motivo',
        plural: 'motivos',
        gender: 'masculine'
      }
    },
    {
      english: 'engine',
      portuguese: {
        word: 'motor',
        plural: 'motores',
        gender: 'masculine'
      }
    },
    {
      english: 'move',
      portuguese: {
        word: 'movimento',
        plural: 'movimentos',
        gender: 'masculine'
      }
    },
    {
      english: 'musician',
      portuguese: {
        word: 'músico',
        plural: 'músicos',
        gender: 'masculine'
      }
    },
    {
      english: 'birth',
      portuguese: {
        word: 'nascimento',
        plural: 'nascimentos',
        gender: 'masculine'
      }
    },
    {
      english: 'need',
      portuguese: {
        word: 'necessidade',
        plural: 'necessidades',
        gender: 'feminine'
      }
    },
    {
      english: 'party',
      portuguese: {
        word: 'festa',
        plural: 'festas',
        gender: 'feminine'
      }
    },
    {
      english: 'end',
      portuguese: {
        word: 'final',
        plural: 'finais',
        gender: 'masculine'
      }
    },
    {
      english: 'focus',
      portuguese: {
        word: 'foco',
        plural: 'focos',
        gender: 'masculine'
      }
    },
    {
      english: 'photo',
      portuguese: {
        word: 'foto',
        plural: 'fotos',
        gender: 'feminine'
      }
    },
    {
      english: 'sentence',
      portuguese: {
        word: 'frase',
        plural: 'frases',
        gender: 'feminine'
      }
    },
    {
      english: 'front',
      portuguese: {
        word: 'frente',
        plural: 'frentes',
        gender: 'feminine'
      }
    },
    {
      english: 'function',
      portuguese: {
        word: 'função',
        plural: 'funções',
        gender: 'feminine'
      }
    },
    {
      english: 'fund',
      portuguese: {
        word: 'fundo',
        plural: 'fundos',
        gender: 'masculine'
      }
    },
    {
      english: 'cat',
      portuguese: {
        word: 'gato',
        plural: 'gatos',
        gender: 'masculine'
      }
    },
    {
      english: 'gender',
      portuguese: {
        word: 'gênero',
        plural: 'gêneros',
        gender: 'masculine'
      }
    },
    {
      english: 'like',
      portuguese: {
        word: 'gosto',
        plural: 'gostos',
        gender: 'masculine'
      }
    },
    {
      english: 'grace',
      portuguese: {
        word: 'graça',
        plural: 'graças',
        gender: 'feminine'
      }
    },
    {
      english: 'chart',
      portuguese: {
        word: 'gráfico',
        plural: 'gráficos',
        gender: 'masculine'
      }
    },
    {
      english: 'war',
      portuguese: {
        word: 'guerra',
        plural: 'guerras',
        gender: 'feminine'
      }
    },
    {
      english: 'habit',
      portuguese: {
        word: 'hábito',
        plural: 'hábitos',
        gender: 'masculine'
      }
    },
    {
      english: 'hero',
      portuguese: {
        word: 'herói',
        plural: 'heróis',
        gender: 'masculine'
      }
    },
    {
      english: 'hospital',
      portuguese: {
        word: 'hospital',
        plural: 'hospitais',
        gender: 'masculine'
      }
    },
    {
      english: 'age',
      portuguese: {
        word: 'idade',
        plural: 'idades',
        gender: 'feminine'
      }
    },
    {
      english: 'index',
      portuguese: {
        word: 'índice',
        plural: 'índices',
        gender: 'masculine'
      }
    },
    {
      english: 'individual',
      portuguese: {
        word: 'indivíduo',
        plural: 'indivíduos',
        gender: 'masculine'
      }
    },
    {
      english: 'beginning',
      portuguese: {
        word: 'início',
        plural: 'inícios',
        gender: 'masculine'
      }
    },
    {
      english: 'enemy',
      portuguese: {
        word: 'inimigo',
        plural: 'inimigos',
        gender: 'masculine'
      }
    },
    {
      english: 'instrument',
      portuguese: {
        word: 'instrumento',
        plural: 'instrumentos',
        gender: 'masculine'
      }
    },
    {
      english: 'interest',
      portuguese: {
        word: 'interesse',
        plural: 'interesses',
        gender: 'masculine'
      }
    },
    {
      english: 'research',
      portuguese: {
        word: 'investigação',
        plural: 'investigações',
        gender: 'feminine'
      }
    },
    {
      english: 'newspaper',
      portuguese: {
        word: 'jornal',
        plural: 'jornais',
        gender: 'masculine'
      }
    },
    {
      english: 'judge',
      portuguese: {
        word: 'juiz',
        plural: 'juízes',
        gender: 'masculine'
      }
    },
    {
      english: 'lake',
      portuguese: {
        word: 'lago',
        plural: 'lagos',
        gender: 'masculine'
      }
    },
    {
      english: 'snack',
      portuguese: {
        word: 'lanche',
        plural: 'lanches',
        gender: 'masculine'
      }
    },
    {
      english: 'leader',
      portuguese: {
        word: 'líder',
        plural: 'líderes',
        gender: 'masculine'
      }
    },
    {
      english: 'reminder',
      portuguese: {
        word: 'lembrete',
        plural: 'lembretes',
        gender: 'masculine'
      }
    },
    {
      english: 'limit',
      portuguese: {
        word: 'limite',
        plural: 'limites',
        gender: 'masculine'
      }
    },
    {
      english: 'list',
      portuguese: {
        word: 'lista',
        plural: 'listas',
        gender: 'feminine'
      }
    },
    {
      english: 'logic',
      portuguese: {
        word: 'lógica',
        plural: 'lógicas',
        gender: 'feminine'
      }
    },
    {
      english: 'case',
      portuguese: {
        word: 'caso',
        plural: 'casos',
        gender: 'masculine'
      }
    },
    {
      english: 'country',
      portuguese: {
        word: 'país',
        plural: 'países',
        gender: 'masculine'
      }
    },
    {
      english: 'moment',
      portuguese: {
        word: 'momento',
        plural: 'momentos',
        gender: 'masculine'
      }
    },
    {
      english: 'level',
      portuguese: {
        word: 'nível',
        plural: 'níveis',
        gender: 'masculine'
      }
    },
    {
      english: 'process',
      portuguese: {
        word: 'processo',
        plural: 'processos',
        gender: 'masculine'
      }
    },
    {
      english: 'study',
      portuguese: {
        word: 'estudo',
        plural: 'estudos',
        gender: 'masculine'
      }
    },
    {
      english: 'program',
      portuguese: {
        word: 'programa',
        plural: 'programas',
        gender: 'masculine'
      }
    },
    {
      english: 'game',
      portuguese: {
        word: 'jogo',
        plural: 'jogos',
        gender: 'masculine'
      }
    },
    {
      english: 'example',
      portuguese: {
        word: 'exemplo',
        plural: 'exemplos',
        gender: 'masculine'
      }
    },
    {
      english: 'course',
      portuguese: {
        word: 'curso',
        plural: 'cursos',
        gender: 'masculine'
      }
    },
    {
      english: 'word',
      portuguese: {
        word: 'palavra',
        plural: 'palavras',
        gender: 'feminine'
      }
    },
    {
      english: 'map',
      portuguese: {
        word: 'mapa',
        plural: 'mapas',
        gender: 'masculine'
      }
    },
    {
      english: 'companion',
      portuguese: {
        word: 'companhia',
        plural: 'companhias',
        gender: 'feminine'
      }
    },
    {
      english: 'line',
      portuguese: {
        word: 'linha',
        plural: 'linhas',
        gender: 'feminine'
      }
    },
    {
      english: 'member',
      portuguese: {
        word: 'membro',
        plural: 'membros',
        gender: 'masculine'
      }
    },
    {
      english: 'law',
      portuguese: {
        word: 'lei',
        plural: 'leis',
        gender: 'feminine'
      }
    },
    {
      english: 'question',
      portuguese: {
        word: 'questão',
        plural: 'questões',
        gender: 'feminine'
      }
    },
    {
      english: 'fact',
      portuguese: {
        word: 'fato',
        plural: 'fatos',
        gender: 'masculine'
      }
    },
    {
      english: 'area',
      portuguese: {
        word: 'área',
        plural: 'áreas',
        gender: 'feminine'
      }
    },
    {
      english: 'activity',
      portuguese: {
        word: 'atividade',
        plural: 'atividades',
        gender: 'feminine'
      }
    },
    {
      english: 'letter',
      portuguese: {
        word: 'letra',
        plural: 'letras',
        gender: 'feminine'
      }
    },
    {
      english: 'road',
      portuguese: {
        word: 'estrada',
        plural: 'estradas',
        gender: 'feminine'
      }
    },
    {
      english: 'type',
      portuguese: {
        word: 'tipo',
        plural: 'tipos',
        gender: 'masculine'
      }
    },
    {
      english: 'child',
      portuguese: {
        word: 'criança',
        plural: 'crianças',
        gender: 'feminine'
      }
    },
    {
      english: 'image',
      portuguese: {
        word: 'imagem',
        plural: 'imagens',
        gender: 'feminine'
      }
    },
    {
      english: 'piece',
      portuguese: {
        word: 'peça',
        plural: 'peças',
        gender: 'feminine'
      }
    },
    {
      english: 'reason',
      portuguese: {
        word: 'razão',
        plural: 'razões',
        gender: 'feminine'
      }
    },
    {
      english: 'relationship',
      portuguese: {
        word: 'relação',
        plural: 'relações',
        gender: 'feminine'
      }
    },
    {
      english: 'use',
      portuguese: {
        word: 'uso',
        plural: 'usos',
        gender: 'masculine'
      }
    },
    {
      english: 'vision',
      portuguese: {
        word: 'visão',
        plural: 'visões',
        gender: 'feminine'
      }
    },
    {
      english: 'account',
      portuguese: {
        word: 'conta',
        plural: 'contas',
        gender: 'feminine'
      }
    },
    {
      english: 'body',
      portuguese: {
        word: 'corpo',
        plural: 'corpos',
        gender: 'masculine'
      }
    },
    {
      english: 'desire',
      portuguese: {
        word: 'desejo',
        plural: 'desejos',
        gender: 'masculine'
      }
    },
    {
      english: 'destination',
      portuguese: {
        word: 'destino',
        plural: 'destinos',
        gender: 'masculine'
      }
    },
    {
      english: 'direction',
      portuguese: {
        word: 'direção',
        plural: 'direções',
        gender: 'feminine'
      }
    },
    {
      english: 'disease',
      portuguese: {
        word: 'doença',
        plural: 'doenças',
        gender: 'feminine'
      }
    },
    {
      english: 'doubt',
      portuguese: {
        word: 'dúvida',
        plural: 'dúvidas',
        gender: 'feminine'
      }
    },
    {
      english: 'effect',
      portuguese: {
        word: 'efeito',
        plural: 'efeitos',
        gender: 'masculine'
      }
    },
    {
      english: 'employment',
      portuguese: {
        word: 'emprego',
        plural: 'empregos',
        gender: 'masculine'
      }
    },
    {
      english: 'team',
      portuguese: {
        word: 'equipe',
        plural: 'equipes',
        gender: 'feminine'
      }
    },
    {
      english: 'error',
      portuguese: {
        word: 'erro',
        plural: 'erros',
        gender: 'masculine'
      }
    },
    {
      english: 'style',
      portuguese: {
        word: 'estilo',
        plural: 'estilos',
        gender: 'masculine'
      }
    },
    {
      english: 'structure',
      portuguese: {
        word: 'estrutura',
        plural: 'estruturas',
        gender: 'feminine'
      }
    },
    {
      english: 'examination',
      portuguese: {
        word: 'exame',
        plural: 'exames',
        gender: 'masculine'
      }
    },
    {
      english: 'experience',
      portuguese: {
        word: 'experiência',
        plural: 'experiências',
        gender: 'feminine'
      }
    },
    {
      english: 'explanation',
      portuguese: {
        word: 'explicação',
        plural: 'explicações',
        gender: 'feminine'
      }
    },
    {
      english: 'expression',
      portuguese: {
        word: 'expressão',
        plural: 'expressões',
        gender: 'feminine'
      }
    },
    {
      english: 'faculty',
      portuguese: {
        word: 'faculdade',
        plural: 'faculdades',
        gender: 'feminine'
      }
    },
    {
      english: 'failure',
      portuguese: {
        word: 'falha',
        plural: 'falhas',
        gender: 'feminine'
      }
    },
    {
      english: 'phase',
      portuguese: {
        word: 'fase',
        plural: 'fases',
        gender: 'feminine'
      }
    },
    {
      english: 'investment',
      portuguese: {
        word: 'investimento',
        plural: 'investimentos',
        gender: 'masculine'
      }
    },
    {
      english: 'boy',
      portuguese: {
        word: 'menino',
        plural: 'meninos',
        gender: 'masculine'
      }
    },
    {
      english: 'wheel',
      portuguese: {
        word: 'roda',
        plural: 'rodas',
        gender: 'feminine'
      }
    },
    {
      english: 'feeling',
      portuguese: {
        word: 'sentimento',
        plural: 'sentimentos',
        gender: 'masculine'
      }
    },
    {
      english: 'theatre',
      portuguese: {
        word: 'teatro',
        plural: 'teatros',
        gender: 'masculine'
      }
    },
    {
      english: 'advantage',
      portuguese: {
        word: 'vantagem',
        plural: 'vantagens',
        gender: 'feminine'
      }
    },
    {
      english: 'version',
      portuguese: {
        word: 'versão',
        plural: 'versões',
        gender: 'feminine'
      }
    },
    {
      english: 'man',
      portuguese: {
        word: 'homen',
        plural: 'homens',
        gender: 'masculine'
      }
    },
    {
      english: 'folks',
      portuguese: {
        word: 'gente',
        plural: 'gentes',
        gender: 'feminine'
      }
    },
    {
      english: 'capitan',
      portuguese: {
        word: 'capitão',
        gender: 'masculine'
      }
    },
    {
      english: 'manner',
      portuguese: {
        word: 'maneira',
        plural: 'maneiras',
        gender: 'feminine'
      }
    },
    {
      english: 'blanket',
      portuguese: {
        word: 'manta',
        plural: 'mantas',
        gender: 'feminine'
      }
    },
    {
      english: 'ladder',
      portuguese: {
        word: 'escadote',
        plural: 'escadote',
        gender: 'masculine'
      }
    },
    {
      english: 'ceiling',
      portuguese: {
        word: 'teto',
        gender: 'masculine'
      }
    },
    {
      english: 'armchair',
      portuguese: {
        word: 'cadeirão',
        gender: 'masculine'
      }
    },
    {
      english: 'hourglass',
      portuguese: {
        word: 'ampulheta',
        plural: 'ampulhetas',
        gender: 'feminine'
      }
    },
    {
      english: 'handle',
      portuguese: {
        word: 'puxador',
        plural: 'puxadores',
        gender: 'masculine'
      }
    },
    {
      english: 'steam',
      portuguese: {
        word: 'vapor',
        plural: 'vapores',
        gender: 'masculine'
      }
    },
    {
      english: 'tiles',
      portuguese: {
        word: 'azulejo',
        plural: 'azulejos',
        gender: 'masculine'
      }
    },
    {
      english: 'pleasure',
      portuguese: {
        word: 'prazer',
        plural: 'prazeres',
        gender: 'masculine'
      }
    },
    {
      english: 'agreement',
      portuguese: {
        word: 'acordo',
        plural: 'acordos',
        gender: 'masculine'
      }
    }
  ],
  others: [
    {
      portuguese: 'pois',
      english: 'so then'
    },
    {
      portuguese: 'que',
      english: 'what'
    },
    {
      english: 'but',
      portuguese: 'mas'
    },
    {
      english: 'yes',
      portuguese: 'sim'
    },
    {
      english: 'yes',
      portuguese: 'si'
    },
    {
      english: 'no',
      portuguese: 'não'
    },
    {
      english: 'bye',
      portuguese: 'adeus'
    },
    {
      english: 'me',
      portuguese: 'me'
    },
    {
      english: 'only',
      portuguese: 'só'
    },
    {
      english: 'under',
      portuguese: 'debaixo'
    },
    {
      english: 'behind',
      portuguese: 'trás'
    },
    {
      english: 'ago',
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
      portuguese: 'amanhã'
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
      english: 'I',
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
      portuguese: 'á volta de'
    },
    {
      english: 'near',
      portuguese: 'perto'
    },
    {
      english: 'far',
      portuguese: 'longe'
    },
    {
      english: 'and',
      portuguese: 'e'
    },
    {
      english: 'or',
      portuguese: 'ou'
    },
    {
      english: 'with',
      portuguese: 'com'
    },
    {
      english: 'here',
      portuguese: 'aqui'
    },
    {
      english: 'until',
      portuguese: 'até'
    },
    {
      english: 'everything',
      portuguese: 'tudo'
    },
    {
      english: 'truth',
      portuguese: 'verdade'
    },
    {
      english: 'about',
      portuguese: 'sobre'
    },
    {
      english: 'that',
      portuguese: 'essa'
    },
    {
      english: 'now',
      portuguese: 'agora'
    },
    {
      english: 'both',
      portuguese: 'ambos'
    },
    {
      english: 'sincerely',
      portuguese: 'atenciosamente'
    },
    {
      english: 'well',
      portuguese: 'bem'
    },
    {
      english: 'early',
      portuguese: 'cedo'
    },
    {
      portuguese: 'demais',
      english: 'too'
    },
    {
      english: 'fast',
      portuguese: 'depressa'
    },
    {
      english: 'out',
      portuguese: 'fora'
    },
    {
      portuguese: 'mais',
      english: 'more'
    },

    {
      portuguese: 'novamente',
      english: 'again'
    },
    {
      portuguese: 'pacientemente',
      english: 'patiently'
    },
    {
      portuguese: 'como se',
      english: 'as if'
    },
    {
      portuguese: 'quanto',
      english: 'how much'
    },
    {
      portuguese: 'quase',
      english: 'almost'
    },
    {
      portuguese: 'rapidamente',
      english: 'quickly'
    },
    {
      portuguese: 'se',
      english: 'if'
    },
    {
      portuguese: 'lentamente',
      english: 'slowly'
    },
    {
      portuguese: 'ali',
      english: 'over there'
    },
    {
      portuguese: 'lá',
      english: 'there'
    },
    {
      portuguese: 'acima',
      english: 'above'
    },
    {
      portuguese: 'abaixo',
      english: 'below'
    },
    {
      portuguese: 'dentro',
      english: 'inside'
    },
    {
      portuguese: 'logo',
      english: 'soon'
    },
    {
      portuguese: 'então',
      english: 'then'
    },
    {
      portuguese: 'ainda',
      english: 'still'
    },
    {
      portuguese: 'já',
      english: 'already'
    },
    {
      portuguese: 'apenas',
      english: 'just'
    },
    {
      portuguese: 'também',
      english: 'also'
    },
    {
      portuguese: 'mais ou menos',
      english: 'more or less'
    },
    {
      portuguese: 'cerca',
      english: 'around'
    },
    {
      portuguese: 'aproximadamente',
      english: 'approximately'
    },
    {
      portuguese: 'talvez',
      english: 'perhaps'
    },
    {
      portuguese: 'provavelmente',
      english: 'probably'
    },
    {
      portuguese: 'possivelmente',
      english: 'possibly'
    },
    {
      portuguese: 'realmente',
      english: 'really'
    },
    {
      portuguese: 'efetivamente',
      english: 'effectively'
    },
    {
      portuguese: 'especialmente',
      english: 'especially'
    },
    {
      portuguese: 'finalmente',
      english: 'finally'
    },
    {
      portuguese: 'geralmente',
      english: 'generally'
    },
    {
      portuguese: 'durante',
      english: 'during'
    },
    {
      portuguese: 'esquerda',
      english: 'left'
    },
    {
      portuguese: 'direita',
      english: 'right'
    },

    {
      portuguese: 'alguém',
      english: 'someone'
    },
    {
      portuguese: 'assim',
      english: 'thus'
    },
    {
      portuguese: 'se calhar',
      english: 'maybe'
    },
    {
      portuguese: 'repente',
      english: 'suddenly'
    },
    {
      portuguese: 'porque',
      english: 'why'
    },
    {
      portuguese: 'você',
      english: 'you - formal'
    },
    {
      portuguese: 'sr',
      english: 'sr'
    },
    {
      portuguese: 'senhor',
      english: 'sir'
    },
    {
      portuguese: 'sem',
      english: 'without'
    },
    {
      portuguese: 'olá',
      english: 'hello'
    },
    {
      portuguese: 'embora',
      english: 'although'
    },
    {
      portuguese: 'te',
      english: 'you informal - object pronoun'
    },
    {
      portuguese: 'qualquer',
      english: 'any'
    },
    {
      portuguese: 'nem',
      english: 'nor'
    },
    {
      portuguese: 'ti',
      english: 'you informal - prepositional pronoun'
    },
    {
      portuguese: 'tão',
      english: 'so'
    },
    {
      portuguese: 'vós',
      english: 'you plural'
    },
    {
      portuguese: 'mim',
      english: 'me - prepositional pronoun'
    },
    {
      portuguese: 'vocês',
      english: 'tou plural formal'
    },
    {
      portuguese: 'seja',
      english: 'may it be'
    },
    {
      portuguese: 'nos',
      english: 'we - object pronoun'
    },
    {
      portuguese: 'nós',
      english: 'we'
    },
    {
      portuguese: 'algo',
      english: 'something'
    },
    {
      portuguese: 'vá',
      english: 'go formal'
    },
    {
      portuguese: 'vos',
      english: 'you formal - object pronoun'
    },
    {
      portuguese: 'às',
      english: 'to the'
    },
    {
      portuguese: 'qual',
      english: 'which'
    },
    {
      portuguese: 'será',
      english: 'will be'
    },
    {
      portuguese: 'cá',
      english: 'here'
    },
    {
      portuguese: 'aí',
      english: 'there'
    },
    {
      portuguese: 'duas',
      english: 'two female'
    },
    {
      portuguese: 'menos',
      english: 'less'
    },
    {
      portuguese: 'tal',
      english: 'such'
    },
    {
      portuguese: 'tenha',
      english: 'have a'
    },
    {
      portuguese: 'seria',
      english: 'would be'
    },
    {
      portuguese: 'contra',
      english: 'against'
    },
    {
      portuguese: 'fosse',
      english: 'were'
    },
    {
      portuguese: 'sido',
      english: 'has been'
    },
    {
      portuguese: 'cada',
      english: 'each'
    },
    {
      portuguese: 'enquanto',
      english: 'while'
    },
    {
      portuguese: 'certeza',
      english: 'certainty'
    },
    {
      portuguese: 'daqui',
      english: 'from here'
    },
    {
      portuguese: 'mal',
      english: 'badly'
    },
    {
      portuguese: 'além',
      english: 'in addition'
    },
    {
      portuguese: 'cima',
      english: 'top'
    },
    {
      portuguese: 'polícia',
      english: 'police'
    }
  ],
  othersWithGender: [
    {
      english: 'of',
      portuguese: {
        base: 'de',
        singular: {
          feminine: 'da',
          masculine: 'do'
        },
        plural: {
          feminine: 'das',
          masculine: 'dos'
        }
      }
    },
    {
      english: 'through',
      portuguese: {
        base: 'por',
        singular: {
          feminine: 'pela',
          masculine: 'pelo'
        },
        plural: {
          feminine: 'pelas',
          masculine: 'pelos'
        }
      }
    },
    {
      portuguese: {
        singular: {
          feminine: 'a',
          masculine: 'o'
        },
        plural: {
          feminine: 'as',
          masculine: 'os'
        }
      },
      english: 'the'
    },
    {
      portuguese: {
        singular: {
          feminine: 'uma',
          masculine: 'um'
        },
        plural: {
          feminine: 'umas',
          masculine: 'uns'
        }
      },
      english: 'a'
    },
    {
      english: 'in',
      portuguese: {
        base: 'em',
        singular: {
          feminine: 'na',
          masculine: 'no'
        },
        plural: {
          feminine: 'nas',
          masculine: 'nos'
        }
      }
    },
    {
      english: 'in a',
      portuguese: {
        base: 'em',
        singular: {
          feminine: 'numa',
          masculine: 'num'
        },
        plural: {
          feminine: 'numa',
          masculine: 'num'
        }
      }
    },
    {
      english: 'this',
      portuguese: {
        base: 'isto',
        singular: {
          feminine: 'esta',
          masculine: 'este'
        },
        plural: {
          feminine: 'estas',
          masculine: 'estes'
        }
      }
    },
    {
      english: 'mine',
      portuguese: {
        singular: {
          feminine: 'minha',
          masculine: 'meu'
        },
        plural: {
          feminine: 'minhas',
          masculine: 'meus'
        }
      }
    },
    {
      english: 'thank you',
      portuguese: {
        singular: {
          feminine: 'obrigada',
          masculine: 'obrigado'
        },
        plural: {
          feminine: 'obrigadas',
          masculine: 'obrigados'
        }
      }
    },
    {
      english: 'that - close to listener',
      portuguese: {
        base: 'isso',
        singular: {
          feminine: 'essa',
          masculine: 'esse'
        },
        plural: {
          feminine: 'essas',
          masculine: 'esses'
        }
      }
    },
    {
      english: 'that - far for both',
      portuguese: {
        base: 'aquilo',
        singular: {
          feminine: 'aquela',
          masculine: 'aquele'
        },
        plural: {
          feminine: 'aquelas',
          masculine: 'aqueles'
        }
      }
    },
    {
      portuguese: {
        singular: {
          masculine: 'seu',
          feminine: 'sua'
        },
        plural: {
          masculine: 'seus',
          feminine: 'suas'
        }
      },
      english: 'your'
    },
    {
      english: 'to - short',
      portuguese: {
        base: 'a',
        singular: {
          feminine: 'á',
          masculine: 'ao'
        },
        plural: {
          feminine: 'ás',
          masculine: 'aos'
        }
      }
    },
    {
      portuguese: {
        singular: {
          masculine: 'teu',
          feminine: 'tua'
        },
        plural: {
          masculine: 'teus',
          feminine: 'tuas'
        }
      },
      english: 'yours - informal'
    },
    {
      english: 'another',
      portuguese: {
        singular: {
          masculine: 'outro',
          feminine: 'outra'
        },
        plural: {
          masculine: 'outros',
          feminine: 'outras'
        }
      }
    },
    {
      english: 'to them indirect',
      portuguese: {
        singular: {
          masculine: 'lhe',
          feminine: 'lhe'
        },
        plural: {
          masculine: 'lhes',
          feminine: 'lhes'
        }
      }
    },
    {
      english: 'all',
      portuguese: {
        singular: {
          masculine: 'todo',
          feminine: 'toda'
        },
        plural: {
          masculine: 'todos',
          feminine: 'todas'
        }
      }
    },
    {
      english: 'our',
      portuguese: {
        singular: {
          masculine: 'nosso',
          feminine: 'nossa'
        },
        plural: {
          masculine: 'nossos',
          feminine: 'nossas'
        }
      }
    },
    {
      english: 'some',
      portuguese: {
        singular: {
          masculine: 'algum',
          feminine: 'alguma'
        },
        plural: {
          masculine: 'alguns',
          feminine: 'algumas'
        }
      }
    },
    {
      english: 'de + esta',
      portuguese: {
        singular: {
          masculine: 'deste',
          feminine: 'desta'
        },
        plural: {
          masculine: 'destes',
          feminine: 'destas'
        }
      }
    },
    {
      english: 'first',
      portuguese: {
        singular: {
          masculine: 'primeiro',
          feminine: 'primeira'
        },
        plural: {
          masculine: 'primeiros',
          feminine: 'primeiras'
        }
      }
    },
    {
      english: 'em + este',
      portuguese: {
        singular: {
          masculine: 'neste',
          feminine: 'nesta'
        },
        plural: {
          masculine: 'nestes',
          feminine: 'nestas'
        }
      }
    },
    {
      english: 'so much',
      portuguese: {
        singular: {
          masculine: 'tanto',
          feminine: 'tanta'
        },
        plural: {
          masculine: 'tantos',
          feminine: 'tantas'
        }
      }
    },
    {
      english: 'of someone',
      portuguese: {
        singular: {
          masculine: 'dele',
          feminine: 'dela'
        },
        plural: {
          masculine: 'deles',
          feminine: 'delas'
        }
      }
    },
    {
      english: 'your formal',
      portuguese: {
        singular: {
          masculine: 'vosso',
          feminine: 'vossa'
        },
        plural: {
          masculine: 'vossos',
          feminine: 'vossas'
        }
      }
    },
    {
      english: 'many',
      portuguese: {
        singular: {
          masculine: 'muito',
          feminine: 'muita'
        },
        plural: {
          masculine: 'muitos',
          feminine: 'muitas'
        }
      }
    }
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
      english: 'beautiful - classic'
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
    },
    {
      english: 'calm',
      masculine: {
        singular: 'calmo',
        plural: 'calmos'
      },
      feminine: {
        singular: 'calma',
        plural: 'calmas'
      }
    },
    {
      english: 'damaged',
      masculine: {
        singular: 'estragado',
        plural: 'estragados'
      },
      feminine: {
        singular: 'estragada',
        plural: 'estragadas'
      }
    },
    {
      english: 'strange',
      masculine: {
        singular: 'estranho',
        plural: 'estranhos'
      },
      feminine: {
        singular: 'estranha',
        plural: 'estranhas'
      }
    },
    {
      english: 'famous',
      masculine: {
        singular: 'famoso',
        plural: 'famosos'
      },
      feminine: {
        singular: 'famosa',
        plural: 'famosas'
      }
    },
    {
      english: 'happy',
      masculine: {
        singular: 'feliz',
        plural: 'feliz'
      },
      feminine: {
        singular: 'feliz',
        plural: 'feliz'
      }
    },
    {
      english: 'cold',
      masculine: {
        singular: 'frio',
        plural: 'frios'
      },
      feminine: {
        singular: 'fria',
        plural: 'frias'
      }
    },
    {
      english: 'icy',
      masculine: {
        singular: 'gelado',
        plural: 'gelados'
      },
      feminine: {
        singular: 'gelada',
        plural: 'geladas'
      }
    },
    {
      english: 'important',
      masculine: {
        singular: 'importante',
        plural: 'importantes'
      },
      feminine: {
        singular: 'importante',
        plural: 'importantes'
      }
    },
    {
      english: 'amazing',
      masculine: {
        singular: 'impressionante',
        plural: 'impressionante'
      },
      feminine: {
        singular: 'impressionante',
        plural: 'impressionante'
      }
    },
    {
      english: 'together',
      masculine: {
        singular: 'juntos',
        plural: 'juntos'
      },
      feminine: {
        singular: 'junta',
        plural: 'juntas'
      }
    },
    {
      english: 'beautiful',
      masculine: {
        singular: 'lindo',
        plural: 'lindos'
      },
      feminine: {
        singular: 'linda',
        plural: 'lindas'
      }
    },

    {
      english: 'better',
      masculine: {
        singular: 'melhor',
        plural: 'melhor'
      },
      feminine: {
        singular: 'melhor',
        plural: 'melhor'
      }
    },
    {
      english: 'liar',
      masculine: {
        singular: 'mentiroso',
        plural: 'mentirosos'
      },
      feminine: {
        singular: 'mentirosa',
        plural: 'mentirosas'
      }
    },
    {
      english: 'friendly',
      masculine: {
        singular: 'simpático',
        plural: 'simpáticos'
      },
      feminine: {
        singular: 'simpática',
        plural: 'simpáticas'
      }
    },
    {
      english: 'used',
      masculine: {
        singular: 'usado',
        plural: 'usados'
      },
      feminine: {
        singular: 'usada',
        plural: 'usadas'
      }
    },
    {
      english: 'quiet',
      masculine: {
        singular: 'quieto',
        plural: 'quietos'
      },
      feminine: {
        singular: 'quieta',
        plural: 'quietas'
      }
    },
    {
      english: 'fast',
      masculine: {
        singular: 'rápido',
        plural: 'rápidos'
      },
      feminine: {
        singular: 'rápida',
        plural: 'rápidas'
      }
    },
    {
      english: 'little',
      masculine: {
        singular: 'pouco',
        plural: 'poucos'
      },
      feminine: {
        singular: 'pouca',
        plural: 'poucas'
      }
    },
    {
      english: 'necessary',
      masculine: {
        singular: 'preciso',
        plural: 'precisos'
      },
      feminine: {
        singular: 'precisa',
        plural: 'precisas'
      }
    },
    {
      english: 'lazy',
      masculine: {
        singular: 'preguiçoso',
        plural: 'preguiçosos'
      },
      feminine: {
        singular: 'preguiçosa',
        plural: 'preguiçosas'
      }
    },
    {
      english: 'perfect',
      masculine: {
        singular: 'perfeito',
        plural: 'perfeitos'
      },
      feminine: {
        singular: 'perfeita',
        plural: 'perfeitas'
      }
    },
    {
      english: 'low',
      masculine: {
        singular: 'baixo',
        plural: 'baixos'
      },
      feminine: {
        singular: 'baixa',
        plural: 'baixas'
      }
    },
    {
      english: 'ugly',
      masculine: {
        singular: 'feio',
        plural: 'feios'
      },
      feminine: {
        singular: 'feia',
        plural: 'feias'
      }
    },
    {
      english: 'slow',
      masculine: {
        singular: 'lento',
        plural: 'lentos'
      },
      feminine: {
        singular: 'lenta',
        plural: 'lentas'
      }
    },
    {
      english: 'short',
      masculine: {
        singular: 'curto',
        plural: 'curtos'
      },
      feminine: {
        singular: 'curta',
        plural: 'curtas'
      }
    },
    {
      english: 'narrow',
      masculine: {
        singular: 'estreito',
        plural: 'estreitos'
      },
      feminine: {
        singular: 'estreita',
        plural: 'estreitas'
      }
    },
    {
      english: 'expensive',
      masculine: {
        singular: 'caro',
        plural: 'caros'
      },
      feminine: {
        singular: 'cara',
        plural: 'caras'
      }
    },
    {
      english: 'cheap',
      masculine: {
        singular: 'barato',
        plural: 'baratos'
      },
      feminine: {
        singular: 'barata',
        plural: 'baratas'
      }
    },
    {
      english: 'fat',
      masculine: {
        singular: 'gordo',
        plural: 'gordos'
      },
      feminine: {
        singular: 'gorda',
        plural: 'gordas'
      }
    },
    {
      english: 'lean',
      masculine: {
        singular: 'magro',
        plural: 'magros'
      },
      feminine: {
        singular: 'magra',
        plural: 'magras'
      }
    },
    {
      english: 'elderly',
      masculine: {
        singular: 'idoso',
        plural: 'idosos'
      },
      feminine: {
        singular: 'idosa',
        plural: 'idosas'
      }
    },
    {
      english: 'heavy',
      masculine: {
        singular: 'pesado',
        plural: 'pesados'
      },
      feminine: {
        singular: 'pesada',
        plural: 'pesadas'
      }
    },
    {
      english: 'clean',
      masculine: {
        singular: 'limpo',
        plural: 'limpos'
      },
      feminine: {
        singular: 'limpa',
        plural: 'limpas'
      }
    },
    {
      english: 'dirty',
      masculine: {
        singular: 'sujo',
        plural: 'sujos'
      },
      feminine: {
        singular: 'suja',
        plural: 'sujas'
      }
    },
    {
      english: 'dry',
      masculine: {
        singular: 'seco',
        plural: 'secos'
      },
      feminine: {
        singular: 'seca',
        plural: 'secas'
      }
    },
    {
      english: 'wet',
      masculine: {
        singular: 'molhado',
        plural: 'molhados'
      },
      feminine: {
        singular: 'molhada',
        plural: 'molhadas'
      }
    },
    {
      english: 'bitter',
      masculine: {
        singular: 'amargo',
        plural: 'amargos'
      },
      feminine: {
        singular: 'amarga',
        plural: 'amargas'
      }
    },
    {
      english: 'sour',
      masculine: {
        singular: 'azedo',
        plural: 'azedos'
      },
      feminine: {
        singular: 'azeda',
        plural: 'azedas'
      }
    },
    {
      english: 'salty',
      masculine: {
        singular: 'salgado',
        plural: 'salgados'
      },
      feminine: {
        singular: 'salgada',
        plural: 'salgadas'
      }
    },
    {
      english: 'deep',
      masculine: {
        singular: 'profundo',
        plural: 'profundos'
      },
      feminine: {
        singular: 'profunda',
        plural: 'profundas'
      }
    },
    {
      english: 'shallow',
      masculine: {
        singular: 'raso',
        plural: 'rasos'
      },
      feminine: {
        singular: 'rasa',
        plural: 'rasas'
      }
    },
    {
      english: 'sharp',
      masculine: {
        singular: 'afiado',
        plural: 'afiados'
      },
      feminine: {
        singular: 'afiada',
        plural: 'afiadas'
      }
    },
    {
      english: 'blind',
      masculine: {
        singular: 'cego',
        plural: 'cegos'
      },
      feminine: {
        singular: 'cega',
        plural: 'cegas'
      }
    },
    {
      english: 'deaf',
      masculine: {
        singular: 'surdo',
        plural: 'surdos'
      },
      feminine: {
        singular: 'surda',
        plural: 'surdas'
      }
    },
    {
      english: 'clear',
      masculine: {
        singular: 'claro',
        plural: 'claros'
      },
      feminine: {
        singular: 'clara',
        plural: 'claras'
      }
    },
    {
      english: 'dark',
      masculine: {
        singular: 'escuro',
        plural: 'escuros'
      },
      feminine: {
        singular: 'escura',
        plural: 'escuras'
      }
    },
    {
      english: 'adventurous',
      masculine: {
        singular: 'aventureiro',
        plural: 'aventureiros'
      },
      feminine: {
        singular: 'aventureira',
        plural: 'aventureiras'
      }
    },
    {
      english: 'serious',
      masculine: {
        singular: 'sério',
        plural: 'sérios'
      },
      feminine: {
        singular: 'séria',
        plural: 'sérias'
      }
    },
    {
      english: 'dangerous',
      masculine: {
        singular: 'perigoso',
        plural: 'perigosos'
      },
      feminine: {
        singular: 'perigosa',
        plural: 'perigosas'
      }
    },
    {
      english: 'courageous',
      masculine: {
        singular: 'corajoso',
        plural: 'corajosos'
      },
      feminine: {
        singular: 'corajosa',
        plural: 'corajosas'
      }
    },
    {
      english: 'suspicious',
      masculine: {
        singular: 'desconfiado',
        plural: 'desconfiados'
      },
      feminine: {
        singular: 'desconfiada',
        plural: 'desconfiadas'
      }
    },
    {
      english: 'stunned',
      masculine: {
        singular: 'atordoado',
        plural: 'atordoados'
      },
      feminine: {
        singular: 'atordoada',
        plural: 'atordoadas'
      }
    },
    {
      english: 'pleasant',
      masculine: {
        singular: 'agradável',
        plural: 'agradável'
      },
      feminine: {
        singular: 'agradável',
        plural: 'agradável'
      }
    },
    {
      english: 'several',
      masculine: {
        singular: 'vários',
        plural: 'vários'
      },
      feminine: {
        singular: 'vários',
        plural: 'vários'
      }
    },
    {
      english: 'brown',
      masculine: {
        singular: 'castanho',
        plural: 'castanhos'
      },
      feminine: {
        singular: 'castanha',
        plural: 'castanhas'
      }
    },
    {
      english: 'green',
      masculine: {
        singular: 'verde',
        plural: 'verdes'
      },
      feminine: {
        singular: 'verde',
        plural: 'verdes'
      }
    },
    {
      english: 'irritated',
      masculine: {
        singular: 'irritado',
        plural: 'irritados'
      },
      feminine: {
        singular: 'irritada',
        plural: 'irritadas'
      }
    },
    {
      english: 'silent',
      masculine: {
        singular: 'silencioso',
        plural: 'silenciosos'
      },
      feminine: {
        singular: 'silenciosa',
        plural: 'silenciosas'
      }
    },
    {
      english: 'aromatic',

      masculine: {
        singular: 'aromático',
        plural: 'aromáticos'
      },
      feminine: {
        singular: 'aromática',
        plural: 'aromáticas'
      }
    },
    {
      english: 'similar',
      masculine: {
        singular: 'parecido',
        plural: 'parecidos'
      },
      feminine: {
        singular: 'parecida',
        plural: 'parecidas'
      }
    },
    {
      english: 'tasty',
      masculine: {
        singular: 'saboroso',
        plural: 'saborosos'
      },
      feminine: {
        singular: 'saborosa',
        plural: 'saborosas'
      }
    },
    {
      english: 'dizzy',
      masculine: {
        singular: 'tonto',
        plural: 'tontos'
      },
      feminine: {
        singular: 'tonta',
        plural: 'tontas'
      }
    },
    {
      english: 'drowsy',
      masculine: {
        singular: 'sonolento',
        plural: 'sonolentos'
      },
      feminine: {
        singular: 'sonolenta',
        plural: 'sonolentas'
      }
    },
    {
      english: 'cursed',
      masculine: {
        singular: 'maldito',
        plural: 'malditos'
      },
      feminine: {
        singular: 'maldita',
        plural: 'malditas'
      }
    },
    {
      english: 'upset',
      masculine: {
        singular: 'chateado',
        plural: 'chateados'
      },
      feminine: {
        singular: 'chateada',
        plural: 'chateadas'
      }
    },
    {
      english: 'colored',
      masculine: {
        singular: 'colorido',
        plural: 'coloridos'
      },
      feminine: {
        singular: 'colorida',
        plural: 'coloridas'
      }
    },
    {
      english: 'decorated',
      masculine: {
        singular: 'decorado',
        plural: 'decorados'
      },
      feminine: {
        singular: 'decorada',
        plural: 'decoradas'
      }
    },
    {
      english: 'connected',
      masculine: {
        singular: 'ligado',
        plural: 'ligados'
      },
      feminine: {
        singular: 'ligada',
        plural: 'ligadas'
      }
    },
    {
      english: 'illuminated',
      masculine: {
        singular: 'iluminado',
        plural: 'iluminados'
      },
      feminine: {
        singular: 'iluminada',
        plural: 'iluminadas'
      }
    },
    {
      english: 'hairy',
      masculine: {
        singular: 'peludo',
        plural: 'peludos'
      },
      feminine: {
        singular: 'peluda',
        plural: 'peludas'
      }
    },
    {
      english: 'thoughtful',
      masculine: {
        singular: 'pensativo',
        plural: 'pensativos'
      },
      feminine: {
        singular: 'pensativa',
        plural: 'pensativas'
      }
    },
    {
      english: 'ethical',
      masculine: {
        singular: 'ético',
        plural: 'éticos'
      },
      feminine: {
        singular: 'ética',
        plural: 'éticas'
      }
    },
    {
      english: 'disappointed',
      masculine: {
        singular: 'desapontado',
        plural: 'desapontados'
      },
      feminine: {
        singular: 'desapontada',
        plural: 'desapontadas'
      }
    },
    {
      english: 'stuck',
      masculine: {
        singular: 'preso',
        plural: 'presos'
      },
      feminine: {
        singular: 'presa',
        plural: 'presas'
      }
    },
    {
      english: 'last',
      masculine: {
        singular: 'último',
        plural: 'últimos'
      },
      feminine: {
        singular: 'última',
        plural: 'últimas'
      }
    },
    {
      english: 'same',
      masculine: {
        singular: 'mesmo',
        plural: 'mesmos'
      },
      feminine: {
        singular: 'mesma',
        plural: 'mesmas'
      }
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
      english: 'André and Paula are friends',
      portuguese: 'O André e a Paula são amigos',
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
      portuguese: 'Sou de Lisboa',
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
      english: 'I always write sincerely at the end of letters',
      portuguese: 'Escrevo sempre atenciosamente no fim das cartas',
      sentenceType: 'statement'
    },
    {
      english: 'Would you fancy a drink?',
      portuguese: 'Deseja uma bebida?',
      sentenceType: 'question'
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
    },
    {
      portuguese: 'Sou de Portugal',
      english: 'I am from Portugal'
    },
    {
      portuguese: 'Estou feliz hoje',
      english: 'I am happy today'
    },
    {
      portuguese: 'Tenho um carro',
      english: 'I have a car'
    },
    {
      portuguese: 'Temos que sair agora',
      english: 'We have to leave now'
    },
    {
      portuguese: 'O que fazes?',
      english: 'What are you doing?'
    },
    {
      portuguese: 'Fazemos tudo juntos',
      english: 'We do everything together'
    },
    {
      portuguese: 'O que dizes?',
      english: 'What are you saying?'
    },
    {
      portuguese: 'Digo sempre a verdade',
      english: 'I always tell the truth'
    },
    {
      portuguese: 'Vamos para a praia',
      english: "Let's go to the beach."
    },
    {
      portuguese: 'Fui ao supermercado',
      english: 'I went to the supermarket'
    },
    {
      portuguese: 'Podemos resolver isso',
      english: 'We can solve this'
    },
    {
      portuguese: 'Preciso de obter um visto',
      english: 'I need to get a visa'
    },
    {
      portuguese: 'Vou pegar o meu casaco',
      english: 'I am going to get my coat'
    },
    {
      portuguese: 'Vou fazer o jantar',
      english: 'I am going to make dinner'
    },
    {
      portuguese: 'Ele faz sapatos',
      english: 'He makes shoes'
    },
    {
      portuguese: 'Vejo-te amanhã',
      english: 'I will see you tomorrow'
    },
    {
      portuguese: 'Vamos ver um filme',
      english: "Let's watch a movie."
    },
    {
      portuguese: 'Não sei a resposta',
      english: "I don't know the answer."
    },
    {
      portuguese: 'Conheço a cidade muito bem',
      english: 'I know the city very well'
    },
    {
      portuguese: 'Vem cá, por favor',
      english: 'Come here, please'
    },
    {
      portuguese: 'Ele vem de longe',
      english: 'He comes from far away'
    },
    {
      portuguese: 'Estou a pensar em ti',
      english: "I'm thinking about you."
    },
    {
      portuguese: 'Penso que ela não sabe',
      english: "I think she doesn't know."
    },
    {
      portuguese: 'Olha para mim',
      english: 'Look at me'
    },
    {
      portuguese: 'Estou a ver a televisão',
      english: 'I am watching TV'
    },
    {
      portuguese: 'Quero ir ao cinema',
      english: 'I want to go to the cinema'
    },
    {
      portuguese: 'Ela deseja o melhor para ele',
      english: 'She wishes the best for him'
    },
    {
      portuguese: 'Vou usar o computador',
      english: 'I am going to use the computer'
    },
    {
      portuguese: 'Usamos o mesmo shampoo',
      english: 'We use the same shampoo'
    },
    {
      portuguese: 'Onde posso encontrar um bom restaurante?',
      english: 'Where can I find a good restaurant?'
    },
    {
      portuguese: 'Encontrei a minha carteira perdida',
      english: 'I found my lost wallet'
    },
    {
      portuguese: 'Vou dar-te um presente',
      english: 'I am going to give you a present'
    },
    {
      portuguese: 'Ele dá aulas de matemática',
      english: 'He teaches math classes'
    },
    {
      portuguese: 'Conta-me uma história',
      english: 'Tell me a story'
    },
    {
      portuguese: 'Ele diz a verdade',
      english: 'He tells the truth'
    },
    {
      portuguese: 'Preciso de trabalhar mais',
      english: 'I need to work more'
    },
    {
      portuguese: 'Ele trabalha numa fábrica',
      english: 'He works in a factory'
    },
    {
      portuguese: 'Pareces feliz hoje',
      english: 'You seem happy today'
    },
    {
      portuguese: 'Parece que ele está doente',
      english: 'It seems that he is sick'
    },
    {
      portuguese: 'Ela sente a dor',
      english: 'She feels the pain'
    },
    {
      portuguese: 'Vou tentar fazer o meu melhor',
      english: 'I will try to do my best'
    },
    {
      portuguese: 'Prova este bolo',
      english: 'Try this cake'
    },
    {
      portuguese: 'Não quero sair de casa hoje',
      english: "I don't want to go out of the house today."
    },
    {
      portuguese: 'Deixe-me em paz!',
      english: 'Leave me alone!'
    },
    {
      portuguese: 'Vou chamar o meu amigo',
      english: 'I am going to call my friend'
    },
    {
      portuguese: 'Ele ligou para o trabalho',
      english: 'He called work'
    },
    {
      portuguese: 'Posso perguntar-te uma coisa?',
      english: 'Can I ask you something?'
    },
    {
      portuguese: 'Ele pediu um favor',
      english: 'He asked for a favor'
    },
    {
      portuguese: 'Preciso de ajuda',
      english: 'I need help'
    },
    {
      portuguese: 'Necessitamos de mais tempo',
      english: 'We need more time'
    },
    {
      portuguese: 'Ela sente a pressão',
      english: 'She feels the pressure'
    },
    {
      portuguese: 'Vou tornar-me um chef',
      english: 'I will become a chef'
    },
    {
      portuguese: 'Ela tornou-se famosa',
      english: 'She became famous'
    },
    {
      portuguese: 'Deixa-me em paz!',
      english: 'Leave me alone!'
    },
    {
      portuguese: 'Vou sair agora',
      english: "I'm going to leave now."
    },
    {
      portuguese: 'Vou pôr a mesa',
      english: 'I am going to set the table'
    },
    {
      portuguese: 'Ele colocou o livro na prateleira',
      english: 'He put the book on the shelf'
    },
    {
      portuguese: 'O que é que isso significa?',
      english: 'What does that mean?'
    },
    {
      portuguese: 'Ela quer dizer o que pensa',
      english: 'She wants to say what she thinks'
    },
    {
      portuguese: 'Vou manter o meu telefone ligado',
      english: 'I will keep my phone on'
    },
    {
      portuguese: 'Ele mantém a sua casa limpa',
      english: 'He keeps his house clean'
    },
    {
      portuguese: 'Não o deixe entrar',
      english: "Don't let him in."
    },
    {
      portuguese: 'Vamos começar o jogo',
      english: "Let's start the game."
    },
    {
      portuguese: 'Ele começou a trabalhar cedo',
      english: 'He started working early'
    },
    {
      portuguese: 'Parece que está frio lá fora',
      english: 'It seems to be cold outside'
    },
    {
      portuguese: 'Ela parece feliz',
      english: 'She seems happy'
    },
    {
      portuguese: 'Podes ajudar-me com isto?',
      english: 'Can you help me with this?'
    },
    {
      portuguese: 'Ele ajuda os seus amigos',
      english: 'He helps his friends'
    },
    {
      portuguese: 'Gosto de falar contigo',
      english: 'I like talking to you'
    },
    {
      portuguese: 'Ele fala muitas línguas',
      english: 'He speaks many languages'
    },
    {
      portuguese: 'Vou virar à direita',
      english: "I'm going to turn right."
    },
    {
      portuguese: 'Ele transformou-se numa pessoa melhor',
      english: 'He became a better person'
    },
    {
      portuguese: 'Ele começou a correr',
      english: 'He started running'
    },
    {
      portuguese: 'Podes mostrar-me o caminho?',
      english: 'Can you show me the way?'
    },
    {
      portuguese: 'Ele mostrou o seu talento na música',
      english: 'He showed his talent in music'
    },
    {
      portuguese: 'Posso ouvir música?',
      english: 'Can I listen to music?'
    },
    {
      portuguese: 'Ele ouviu um barulho estranho',
      english: 'He heard a strange noise'
    },
    {
      portuguese: 'Gosto de jogar futebol',
      english: 'I like playing soccer'
    },
    {
      portuguese: 'Ele toca guitarra',
      english: 'He plays guitar'
    },
    {
      english: "I'm going to run in the park.",
      portuguese: 'Vou correr no parque'
    },
    {
      english: 'He ran a marathon',
      portuguese: 'Ele correu uma maratona'
    },
    {
      english: "I'm going to move the table.",
      portuguese: 'Vou mover a mesa'
    },
    {
      english: 'He moves gracefully',
      portuguese: 'Ele move-se com graça'
    },
    {
      english: 'I like chocolate',
      portuguese: 'Gosto de chocolate'
    },
    {
      english: 'She likes to dance',
      portuguese: 'Ela gosta de dançar'
    },
    {
      english: 'I want to live in Lisbon',
      portuguese: 'Quero viver em Lisboa'
    },
    {
      english: 'He lives with his parents',
      portuguese: 'Ele vive com os pais'
    },
    {
      english: 'I believe that anything is possible',
      portuguese: 'Acredito que tudo é possível'
    },
    {
      english: 'He believes in God',
      portuguese: 'Ele acredita em Deus'
    },
    {
      english: 'Please hold the door',
      portuguese: 'Por favor segure a porta'
    },
    {
      english: 'I will bring dinner',
      portuguese: 'Vou trazer o jantar'
    },
    {
      english: 'He took the suitcase to the airport',
      portuguese: 'Ele levou a mala para o aeroporto'
    },
    {
      english: 'What happened here?',
      portuguese: 'O que aconteceu aqui?'
    },
    {
      english: "This doesn't usually happen",
      portuguese: 'Isso não costuma ocorrer'
    },
    {
      english: 'Can I provide information?',
      portuguese: 'Posso fornecer informações?'
    },
    {
      english: 'We need to talk about this',
      portuguese: 'Precisamos conversar sobre isso'
    },
    {
      english: 'I will meet her at the café',
      portuguese: 'Vou encontrar-me com ela no café'
    },
    {
      english: 'We met at the party',
      portuguese: 'Encontramo-nos na festa'
    },
    {
      english: 'The package includes breakfast',
      portuguese: 'O pacote inclui o café da manhã'
    },
    {
      english: 'It does not include tax',
      portuguese: 'Não inclui o imposto'
    },
    {
      english: "Let's keep walking.",
      portuguese: 'Vamos continuar a caminhada'
    },
    {
      english: 'He wants to keep studying',
      portuguese: 'Ele quer continuar estudando'
    },
    {
      english: 'We need to set the rules',
      portuguese: 'Precisamos definir as regras'
    },
    {
      english: 'I will establish the schedule',
      portuguese: 'Vou estabelecer o cronograma'
    },
    {
      english: 'I want to learn to play guitar',
      portuguese: 'Quero aprender a tocar violão'
    },
    {
      english: 'He learns quickly',
      portuguese: 'Ele aprende rápido'
    },
    {
      english: 'I am going to change jobs',
      portuguese: 'Vou mudar de emprego'
    },
    {
      english: 'He altered the plans',
      portuguese: 'Ele alterou os planos'
    },
    {
      english: 'I will follow the instructions',
      portuguese: 'Vou seguir as instruções'
    },
    {
      english: 'He follows a healthy diet',
      portuguese: 'Ele segue uma dieta saudável'
    },
    {
      english: 'I am going to quit smoking',
      portuguese: 'Vou parar de fumar'
    },
    {
      english: 'He was arrested by the police',
      portuguese: 'Ele foi detido pela polícia'
    },
    {
      english: 'I will start a company',
      portuguese: 'Vou criar uma empresa'
    },
    {
      english: 'He easily creates music',
      portuguese: 'Ele cria música com facilidade'
    },
    {
      english: 'I want to develop my skills',
      portuguese: 'Quero desenvolver as minhas habilidades'
    },
    {
      english: 'Can you explain again?',
      portuguese: 'Pode explicar novamente?'
    },
    {
      english: 'He explained the theory clearly',
      portuguese: 'Ele explicou a teoria com clareza'
    },
    {
      english: 'The package includes dinner',
      portuguese: 'O pacote inclui o jantar'
    },
    {
      english: 'The price includes the service charge',
      portuguese: 'O preço inclui a taxa de serviço'
    },
    {
      english: 'We will build a house',
      portuguese: 'Vamos construir uma casa'
    },
    {
      english: 'He built an impressive building',
      portuguese: 'Ele construiu um prédio impressionante'
    },
    {
      english: 'Can I offer help?',
      portuguese: 'Posso oferecer ajuda?'
    },
    {
      english: 'The company offers benefits to employees',
      portuguese: 'A empresa oferece benefícios aos funcionários'
    },
    {
      portuguese: 'Não me consigo lembrar do nome dele',
      english: "I can't remember his name."
    },
    {
      portuguese: 'Ele lembra-se sempre de datas importantes',
      english: 'He always remembers important dates'
    },
    {
      portuguese: 'Vou comprar um presente',
      english: "I'm going to buy a present."
    },
    {
      portuguese: 'Ele comprou um carro novo',
      english: 'He bought a new car'
    },
    {
      portuguese: 'Vou esperar aqui',
      english: "I'm going to wait here."
    },
    {
      portuguese: 'Ele esperou pacientemente pela resposta',
      english: 'He waited patiently for the answer'
    },
    {
      portuguese: 'Posso servir o jantar?',
      english: 'Can I serve dinner?'
    },
    {
      portuguese: 'Ele serve o exército há anos',
      english: 'He has been serving in the army for years'
    },
    {
      portuguese: 'Não esperava essa reação',
      english: "I didn't expect that reaction."
    },
    {
      portuguese: 'Vou escolher um vestido',
      english: "I'm going to choose a dress."
    },
    {
      portuguese: 'Ele pegou o livro da estante',
      english: 'He took the book from the shelf'
    },
    {
      portuguese: 'Vamos chegar tarde',
      english: "We're going to arrive late."
    },
    {
      portuguese: 'Ele chegou ao aeroporto cedo',
      english: 'He arrived at the airport early'
    },
    {
      portuguese: 'Vamos assegurar que isso não aconteça',
      english: "Let's make sure that doesn't happen."
    },
    {
      portuguese: 'Ele garantiu que estaria presente',
      english: 'He guaranteed he would be present'
    },
    {
      portuguese: 'Vou carregar as malas',
      english: "I'm going to carry the suitcases."
    },
    {
      portuguese: 'O camião transportou a carga',
      english: 'The truck transported the cargo'
    },
    {
      portuguese: 'Cuidado para não quebrar o copo',
      english: 'Be careful not to break the glass'
    },
    {
      portuguese: 'Ele rompeu o contrato com a empresa',
      english: 'He broke the contract with the company'
    },
    {
      portuguese: 'Cuidado para não cair',
      english: 'Be careful not to fall'
    },
    {
      portuguese: 'Ele caiu fora do projeto',
      english: 'He dropped out of the project'
    },
    {
      portuguese: 'Quero alcançar os meus objetivos',
      english: 'I want to achieve my goals'
    },
    {
      portuguese: 'Ele alcançou a fama em pouco tempo',
      english: 'He achieved fame in a short time'
    },
    {
      portuguese: 'O assassino matou a vítima',
      english: 'The killer killed the victim'
    },
    {
      portuguese: 'Ele matou um mosquito',
      english: 'He killed a mosquito'
    },
    {
      portuguese: 'Vamos permanecer aqui',
      english: "Let's stay here."
    },
    {
      portuguese: 'Ele permaneceu calmo durante a reunião',
      english: 'He remained calm during the meeting'
    },
    {
      portuguese: 'Quero poupar dinheiro',
      english: 'I want to save money'
    },
    {
      portuguese: 'Ele salvou a vida do cachorro',
      english: "He saved the dog's life."
    },
    {
      portuguese: 'Vou gastar o dinheiro no shopping',
      english: "I'm going to spend the money at the mall."
    },
    {
      portuguese: 'Ele passou o dia a estudar',
      english: 'He spent the day studying'
    },
    {
      portuguese: 'Vou enviar um e-mail',
      english: "I'm going to send an email."
    },
    {
      portuguese: 'Ele enviou a carta pelo correio',
      english: 'He sent the letter by mail'
    },
    {
      portuguese: 'Vamos determinar a causa do problema',
      english: "Let's determine the cause of the problem."
    },
    {
      portuguese: 'Ele determinou as regras do jogo',
      english: 'He determined the rules of the game'
    },
    {
      portuguese: 'Vou levantar-me da cama agora',
      english: "I'm going to get out of bed now."
    },
    {
      portuguese: 'A empresa decidiu aumentar os salários',
      english: 'The company decided to increase salaries'
    },
    {
      portuguese: 'Vou oferecer uma sugestão',
      english: "I'm going to offer a suggestion."
    },
    {
      portuguese: 'Ele propôs uma solução para o problema',
      english: 'He proposed a solution to the problem'
    },
    {
      portuguese: 'Vou passar no supermercado',
      english: "I'm going to stop by the supermarket."
    },
    {
      portuguese: 'Ele passou no teste com facilidade',
      english: 'He passed the test with ease'
    },
    {
      portuguese: 'Vou vender a minha bicicleta usada',
      english: "I'm going to sell my used bike."
    },
    {
      portuguese: 'Ele vende produtos pela internet',
      english: 'He sells products online'
    },
    {
      portuguese: 'Não quero sofrer mais',
      english: "I don't want to suffer anymore."
    },
    {
      portuguese: 'Ele sofre de insônia há anos',
      english: 'He has been suffering from insomnia for years'
    },
    {
      portuguese: 'Vou realizar o plano',
      english: "I'm going to carry out the plan."
    },
    {
      portuguese: 'Ele executou o projeto com perfeição',
      english: 'He executed the project perfectly'
    },
    {
      portuguese: 'Vou servir o jantar agora',
      english: "I'm going to serve dinner now."
    },
    {
      portuguese: 'O garçom serviu a bebida rapidamente',
      english: 'The waiter served the drink quickly'
    },
    {
      portuguese: 'Vou mandar a bola para ti',
      english: "I'm going to pass the ball to you."
    },
    {
      portuguese: 'Ele mandou a garrafa ao lixo',
      english: 'He threw the bottle in the trash'
    },
    {
      portuguese: 'Vou candidatar-me para a vaga',
      english: "I'm going to apply for the position."
    },
    {
      portuguese: 'Ele aplicou o conhecimento na prática',
      english: 'He applied his knowledge in practice'
    },
    {
      portuguese: 'Quero mencionar um ponto importante',
      english: 'I want to mention an important point'
    },
    {
      portuguese: 'Ele mencionou o nome do autor no texto',
      english: "He mentioned the author's name in the text."
    },
    {
      portuguese: 'Vou sugerir uma ideia',
      english: "I'm going to suggest an idea."
    },
    {
      portuguese: 'Ele sugeriu um novo caminho a seguir',
      english: 'He suggested a new path to follow'
    },
    {
      portuguese: 'Concordo com sua opinião',
      english: 'I agree with your opinion'
    },
    {
      portuguese: 'Eles concordaram com as regras',
      english: 'They agreed with the rules'
    },
    {
      portuguese: 'Vou negar as acusações',
      english: "I'm going to deny the accusations."
    },
    {
      portuguese: 'Ele negou o pedido do cliente',
      english: "He denied the customer's request."
    },
    {
      portuguese: 'Vou refletir sobre o assunto',
      english: "I'm going to reflect on the subject."
    },
    {
      portuguese: 'Ele refletiu sobre sua vida',
      english: 'He reflected on his life'
    },
    {
      portuguese: 'Vou assinar o contrato',
      english: "I'm going to sign the contract."
    },
    {
      portuguese: 'Ele assinou o livro de visitas',
      english: 'He signed the guestbook'
    },
    {
      portuguese: 'Quero ver o filme',
      english: 'I want to watch the movie'
    },
    {
      portuguese: 'Ele viu o acidente acontecer',
      english: 'He saw the accident happen'
    },
    {
      portuguese: 'Mesmo as pessoas mais inteligentes cometem erros',
      english: 'Even the most intelligent people make mistakes'
    },
    {
      portuguese: 'O dono anterior vendeu a casa porque se mudou',
      english: 'The previous owner sold the house because he moved'
    },
    {
      portuguese: 'A história do livro é triste mas tem um final feliz',
      english: 'The story of the book is sad, but it has a happy ending'
    },
    {
      portuguese: 'O professor corrigiu o erro do aluno',
      english: "The teacher corrected the student's mistake"
    },
    {
      portuguese: 'O filme encheu a minha mente de pensamentos felizes',
      english: 'The film filled my mind with happy thoughts'
    },
    {
      portuguese: 'Posso precisar de ajuda com as caixas grandes',
      english: 'I might need help with the big boxes'
    },
    {
      portuguese: 'Ninguém percebeu minha ausência no trabalho hoje',
      english: 'Nobody noticed my absence at work today'
    },
    {
      portuguese: 'Escorreguei no caminho gelado',
      english: 'I slipped on the icy road'
    },
    {
      portuguese: 'As letras no ecrã estão nítidas e fáceis de ler',
      english: 'The letters on the screen are clear and easy to read'
    },
    {
      portuguese: 'A criança acariciou o pelo macio do coelho',
      english: "The child stroked the rabbit's soft fur"
    },
    {
      portuguese: 'Aos domingos o meu marido e eu normalmente passeamos no parque',
      english: 'On Sundays my husband and I usually stroll in the park'
    }
  ],
  phrases: [
    {
      portuguese: 'para ser preciso',
      english: 'to be precise'
    },
    {
      portuguese: 'por isso mesmo',
      english: 'precisely because of that'
    },
    {
      portuguese: 'ter medo',
      english: 'to be afraid'
    },
    {
      portuguese: 'tem cuidado com',
      english: 'be careful with'
    }
  ],
  fitIn: [
    {
      prefix: 'Eu',
      answer: 'tomo',
      suffix: 'um chá',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Angola',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Ela é',
      answer: 'de',
      suffix: 'Paris',
      explanation: '"de" - Indica origem'
    },
    {
      prefix: 'Moro',
      answer: 'em',
      suffix: 'Cascais',
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
      suffix: 'Avenida do Mar',
      explanation: '"na" - em + a'
    },
    {
      prefix: 'Eles estudam',
      answer: 'na',
      suffix: 'universidade',
      explanation: '"na" - em + a'
    },
    {
      prefix: 'Moro',
      answer: 'no',
      suffix: 'número treze',
      explanation: '"no" - em + o'
    },
    {
      prefix: 'O Paulo estuda',
      answer: 'no',
      suffix: 'Japão',
      explanation: '"no" - em + o'
    }
  ]
};
