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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fora',
        Tu: 'foras',
        'Ela/Ele/Você': 'fora',
        Nós: 'fôramos',
        'Eles/Elas/Vocēs': 'foram'
      },
      futuroDoPresenteSimples: {
        Eu: 'serei',
        Tu: 'serás',
        'Ela/Ele/Você': 'será',
        Nós: 'seremos',
        'Eles/Elas/Vocēs': 'serão'
      },
      subjuntivoPresente: {
        Eu: 'seja',
        Tu: 'sejas',
        'Ela/Ele/Você': 'seja',
        Nós: 'sejamos',
        'Eles/Elas/Vocēs': 'sejam'
      },
      pretéritoImperfeito: {
        Eu: 'fosse',
        Tu: 'fosses',
        'Ela/Ele/Você': 'fosse',
        Nós: 'fôssemos',
        'Eles/Elas/Vocēs': 'fossem'
      },
      subjuntivoFuturo: {
        Eu: 'for',
        Tu: 'fores',
        'Ela/Ele/Você': 'for',
        Nós: 'formos',
        'Eles/Elas/Vocēs': 'forem'
      },
      futurodoPretéritoSimples: {
        Eu: 'seria',
        Tu: 'serias',
        'Ela/Ele/Você': 'seria',
        Nós: 'seríamos',
        'Eles/Elas/Vocēs': 'seriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sendo'
        },
        {
          form: 'particípio',
          portuguese: 'sido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'estivera',
        Tu: 'estiveras',
        'Ela/Ele/Você': 'estivera',
        Nós: 'estivéramos',
        'Eles/Elas/Vocēs': 'estiveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'estarei',
        Tu: 'estarás',
        'Ela/Ele/Você': 'estará',
        Nós: 'estaremos',
        'Eles/Elas/Vocēs': 'estarão'
      },
      subjuntivoPresente: {
        Eu: 'esteja',
        Tu: 'estejas',
        'Ela/Ele/Você': 'esteja',
        Nós: 'estejamos',
        'Eles/Elas/Vocēs': 'estejam'
      },
      pretéritoImperfeito: {
        Eu: 'estivesse',
        Tu: 'estivesses',
        'Ela/Ele/Você': 'estivesse',
        Nós: 'estivéssemos',
        'Eles/Elas/Vocēs': 'estivessem'
      },
      subjuntivoFuturo: {
        Eu: 'estiver',
        Tu: 'estiveres',
        'Ela/Ele/Você': 'estiver',
        Nós: 'estivermos',
        'Eles/Elas/Vocēs': 'estiverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'estaria',
        Tu: 'estarias',
        'Ela/Ele/Você': 'estaria',
        Nós: 'estaríamos',
        'Eles/Elas/Vocēs': 'estariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'estando'
        },
        {
          form: 'particípio',
          portuguese: 'estado'
        }
      ]
    },
    {
      english: 'to go',
      infinitive: 'ir',
      presentSimple: {
        Eu: 'vou',
        Tu: 'vais',
        'Ela/Ele/Você': 'vai',
        Nós: 'vamos/imos',
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fora',
        Tu: 'foras',
        'Ela/Ele/Você': 'fora',
        Nós: 'fôramos',
        'Eles/Elas/Vocēs': 'foram'
      },
      futuroDoPresenteSimples: {
        Eu: 'irei',
        Tu: 'irás',
        'Ela/Ele/Você': 'irá',
        Nós: 'iremos',
        'Eles/Elas/Vocēs': 'irão'
      },
      subjuntivoPresente: {
        Eu: 'vá',
        Tu: 'vás',
        'Ela/Ele/Você': 'vá',
        Nós: 'vamos',
        'Eles/Elas/Vocēs': 'vão'
      },
      pretéritoImperfeito: {
        Eu: 'fosse',
        Tu: 'fosses',
        'Ela/Ele/Você': 'fosse',
        Nós: 'fôssemos',
        'Eles/Elas/Vocēs': 'fossem'
      },
      subjuntivoFuturo: {
        Eu: 'for',
        Tu: 'fores',
        'Ela/Ele/Você': 'for',
        Nós: 'formos',
        'Eles/Elas/Vocēs': 'forem'
      },
      futurodoPretéritoSimples: {
        Eu: 'iria',
        Tu: 'irias',
        'Ela/Ele/Você': 'iria',
        Nós: 'iríamos',
        'Eles/Elas/Vocēs': 'iriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'indo'
        },
        {
          form: 'particípio',
          portuguese: 'ido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tivera',
        Tu: 'tiveras',
        'Ela/Ele/Você': 'tivera',
        Nós: 'tivéramos',
        'Eles/Elas/Vocēs': 'tiveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'terei',
        Tu: 'terás',
        'Ela/Ele/Você': 'terá',
        Nós: 'teremos',
        'Eles/Elas/Vocēs': 'terão'
      },
      subjuntivoPresente: {
        Eu: 'tenha',
        Tu: 'tenhas',
        'Ela/Ele/Você': 'tenha',
        Nós: 'tenhamos',
        'Eles/Elas/Vocēs': 'tenham'
      },
      pretéritoImperfeito: {
        Eu: 'tivesse',
        Tu: 'tivesses',
        'Ela/Ele/Você': 'tivesse',
        Nós: 'tivéssemos',
        'Eles/Elas/Vocēs': 'tivessem'
      },
      subjuntivoFuturo: {
        Eu: 'tiver',
        Tu: 'tiveres',
        'Ela/Ele/Você': 'tiver',
        Nós: 'tivermos',
        'Eles/Elas/Vocēs': 'tiverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'teria',
        Tu: 'terias',
        'Ela/Ele/Você': 'teria',
        Nós: 'teríamos',
        'Eles/Elas/Vocēs': 'teriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tendo'
        },
        {
          form: 'particípio',
          portuguese: 'tido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'quisera',
        Tu: 'quiseras',
        'Ela/Ele/Você': 'quisera',
        Nós: 'quiséramos',
        'Eles/Elas/Vocēs': 'quiseram'
      },
      futuroDoPresenteSimples: {
        Eu: 'quererei',
        Tu: 'quererás',
        'Ela/Ele/Você': 'quererá',
        Nós: 'quereremos',
        'Eles/Elas/Vocēs': 'quererão'
      },
      subjuntivoPresente: {
        Eu: 'queira',
        Tu: 'queiras',
        'Ela/Ele/Você': 'queira',
        Nós: 'queiramos',
        'Eles/Elas/Vocēs': 'queiram'
      },
      pretéritoImperfeito: {
        Eu: 'quisesse',
        Tu: 'quisesses',
        'Ela/Ele/Você': 'quisesse',
        Nós: 'quiséssemos',
        'Eles/Elas/Vocēs': 'quisessem'
      },
      subjuntivoFuturo: {
        Eu: 'quiser',
        Tu: 'quiseres',
        'Ela/Ele/Você': 'quiser',
        Nós: 'quisermos',
        'Eles/Elas/Vocēs': 'quiserem'
      },
      futurodoPretéritoSimples: {
        Eu: 'quereria',
        Tu: 'quererias',
        'Ela/Ele/Você': 'quereria',
        Nós: 'quereríamos',
        'Eles/Elas/Vocēs': 'quereriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'querendo'
        },
        {
          form: 'particípio',
          portuguese: 'querido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'via',
        Tu: 'vias',
        'Ela/Ele/Você': 'via',
        Nós: 'víamos',
        'Eles/Elas/Vocēs': 'viam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'vira',
        Tu: 'viras',
        'Ela/Ele/Você': 'vira',
        Nós: 'víramos',
        'Eles/Elas/Vocēs': 'viram'
      },
      futuroDoPresenteSimples: {
        Eu: 'verei',
        Tu: 'verás',
        'Ela/Ele/Você': 'verá',
        Nós: 'veremos',
        'Eles/Elas/Vocēs': 'verão'
      },
      subjuntivoPresente: {
        Eu: 'veja',
        Tu: 'vejas',
        'Ela/Ele/Você': 'veja',
        Nós: 'vejamos',
        'Eles/Elas/Vocēs': 'vejam'
      },
      pretéritoImperfeito: {
        Eu: 'visse',
        Tu: 'visses',
        'Ela/Ele/Você': 'visse',
        Nós: 'víssemos',
        'Eles/Elas/Vocēs': 'vissem'
      },
      subjuntivoFuturo: {
        Eu: 'vir',
        Tu: 'vires',
        'Ela/Ele/Você': 'vir',
        Nós: 'virmos',
        'Eles/Elas/Vocēs': 'virem'
      },
      futurodoPretéritoSimples: {
        Eu: 'veria',
        Tu: 'verias',
        'Ela/Ele/Você': 'veria',
        Nós: 'veríamos',
        'Eles/Elas/Vocēs': 'veriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'vendo'
        },
        {
          form: 'particípio',
          portuguese: 'visto'
        }
      ]
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
      },
      imperfect: {
        Eu: 'fazia',
        Tu: 'fazias',
        'Ela/Ele/Você': 'fazia',
        Nós: 'fazíamos',
        'Eles/Elas/Vocēs': 'faziam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fizera',
        Tu: 'fizeras',
        'Ela/Ele/Você': 'fizera',
        Nós: 'fizéramos',
        'Eles/Elas/Vocēs': 'fizeram'
      },
      futuroDoPresenteSimples: {
        Eu: 'farei',
        Tu: 'farás',
        'Ela/Ele/Você': 'fará',
        Nós: 'faremos',
        'Eles/Elas/Vocēs': 'farão'
      },
      subjuntivoPresente: {
        Eu: 'faça',
        Tu: 'faças',
        'Ela/Ele/Você': 'faça',
        Nós: 'façamos',
        'Eles/Elas/Vocēs': 'façam'
      },
      pretéritoImperfeito: {
        Eu: 'fizesse',
        Tu: 'fizesses',
        'Ela/Ele/Você': 'fizesse',
        Nós: 'fizéssemos',
        'Eles/Elas/Vocēs': 'fizessem'
      },
      subjuntivoFuturo: {
        Eu: 'fizer',
        Tu: 'fizeres',
        'Ela/Ele/Você': 'fizer',
        Nós: 'fizermos',
        'Eles/Elas/Vocēs': 'fizerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'faria',
        Tu: 'farias',
        'Ela/Ele/Você': 'faria',
        Nós: 'faríamos',
        'Eles/Elas/Vocēs': 'fariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'fazendo'
        },
        {
          form: 'particípio',
          portuguese: 'feito'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'soubera',
        Tu: 'souberas',
        'Ela/Ele/Você': 'soubera',
        Nós: 'soubéramos',
        'Eles/Elas/Vocēs': 'souberam'
      },
      futuroDoPresenteSimples: {
        Eu: 'saberei',
        Tu: 'saberás',
        'Ela/Ele/Você': 'saberá',
        Nós: 'saberemos',
        'Eles/Elas/Vocēs': 'saberão'
      },
      subjuntivoPresente: {
        Eu: 'saiba',
        Tu: 'saibas',
        'Ela/Ele/Você': 'saiba',
        Nós: 'saibamos',
        'Eles/Elas/Vocēs': 'saibam'
      },
      pretéritoImperfeito: {
        Eu: 'soubesse',
        Tu: 'soubesses',
        'Ela/Ele/Você': 'soubesse',
        Nós: 'soubéssemos',
        'Eles/Elas/Vocēs': 'soubessem'
      },
      subjuntivoFuturo: {
        Eu: 'souber',
        Tu: 'souberes',
        'Ela/Ele/Você': 'souber',
        Nós: 'soubermos',
        'Eles/Elas/Vocēs': 'souberem'
      },
      futurodoPretéritoSimples: {
        Eu: 'saberia',
        Tu: 'saberias',
        'Ela/Ele/Você': 'saberia',
        Nós: 'saberíamos',
        'Eles/Elas/Vocēs': 'saberiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sabendo'
        },
        {
          form: 'particípio',
          portuguese: 'sabido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'lia',
        Tu: 'lias',
        'Ela/Ele/Você': 'lia',
        Nós: 'líamos',
        'Eles/Elas/Vocēs': 'liam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'lera',
        Tu: 'leras',
        'Ela/Ele/Você': 'lera',
        Nós: 'lêramos',
        'Eles/Elas/Vocēs': 'leram'
      },
      futuroDoPresenteSimples: {
        Eu: 'lerei',
        Tu: 'lerás',
        'Ela/Ele/Você': 'lerá',
        Nós: 'leremos',
        'Eles/Elas/Vocēs': 'lerão'
      },
      subjuntivoPresente: {
        Eu: 'leia',
        Tu: 'leias',
        'Ela/Ele/Você': 'leia',
        Nós: 'leiamos',
        'Eles/Elas/Vocēs': 'leiam'
      },
      pretéritoImperfeito: {
        Eu: 'lesse',
        Tu: 'lesses',
        'Ela/Ele/Você': 'lesse',
        Nós: 'lêssemos',
        'Eles/Elas/Vocēs': 'lessem'
      },
      subjuntivoFuturo: {
        Eu: 'ler',
        Tu: 'leres',
        'Ela/Ele/Você': 'ler',
        Nós: 'lermos',
        'Eles/Elas/Vocēs': 'lerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'leria',
        Tu: 'lerias',
        'Ela/Ele/Você': 'leria',
        Nós: 'leríamos',
        'Eles/Elas/Vocēs': 'leriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'lendo'
        },
        {
          form: 'particípio',
          portuguese: 'lido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'dizia',
        Tu: 'dizias',
        'Ela/Ele/Você': 'dizia',
        Nós: 'dizíamos',
        'Eles/Elas/Vocēs': 'diziam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'dissera',
        Tu: 'disseras',
        'Ela/Ele/Você': 'dissera',
        Nós: 'disséramos',
        'Eles/Elas/Vocēs': 'disseram'
      },
      futuroDoPresenteSimples: {
        Eu: 'direi',
        Tu: 'dirás',
        'Ela/Ele/Você': 'dirá',
        Nós: 'diremos',
        'Eles/Elas/Vocēs': 'dirão'
      },
      subjuntivoPresente: {
        Eu: 'diga',
        Tu: 'digas',
        'Ela/Ele/Você': 'diga',
        Nós: 'digamos',
        'Eles/Elas/Vocēs': 'digam'
      },
      pretéritoImperfeito: {
        Eu: 'dissesse',
        Tu: 'dissesses',
        'Ela/Ele/Você': 'dissesse',
        Nós: 'disséssemos',
        'Eles/Elas/Vocēs': 'dissessem'
      },
      subjuntivoFuturo: {
        Eu: 'disser',
        Tu: 'disseres',
        'Ela/Ele/Você': 'disser',
        Nós: 'dissermos',
        'Eles/Elas/Vocēs': 'disserem'
      },
      futurodoPretéritoSimples: {
        Eu: 'diria',
        Tu: 'dirias',
        'Ela/Ele/Você': 'diria',
        Nós: 'diríamos',
        'Eles/Elas/Vocēs': 'diriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'dizendo'
        },
        {
          form: 'particípio',
          portuguese: 'dito'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pudera',
        Tu: 'puderas',
        'Ela/Ele/Você': 'pudera',
        Nós: 'pudéramos',
        'Eles/Elas/Vocēs': 'puderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'poderei',
        Tu: 'poderás',
        'Ela/Ele/Você': 'poderá',
        Nós: 'poderemos',
        'Eles/Elas/Vocēs': 'poderão'
      },
      subjuntivoPresente: {
        Eu: 'possa',
        Tu: 'possas',
        'Ela/Ele/Você': 'possa',
        Nós: 'possamos',
        'Eles/Elas/Vocēs': 'possam'
      },
      pretéritoImperfeito: {
        Eu: 'pudesse',
        Tu: 'pudesses',
        'Ela/Ele/Você': 'pudesse',
        Nós: 'pudéssemos',
        'Eles/Elas/Vocēs': 'pudessem'
      },
      subjuntivoFuturo: {
        Eu: 'puder',
        Tu: 'puderes',
        'Ela/Ele/Você': 'puder',
        Nós: 'pudermos',
        'Eles/Elas/Vocēs': 'puderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'poderia',
        Tu: 'poderias',
        'Ela/Ele/Você': 'poderia',
        Nós: 'poderíamos',
        'Eles/Elas/Vocēs': 'poderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'podendo'
        },
        {
          form: 'particípio',
          portuguese: 'podido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'falava',
        Tu: 'falavas',
        'Ela/Ele/Você': 'falava',
        Nós: 'falávamos',
        'Eles/Elas/Vocēs': 'falavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'falara',
        Tu: 'falaras',
        'Ela/Ele/Você': 'falara',
        Nós: 'faláramos',
        'Eles/Elas/Vocēs': 'falaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'falarei',
        Tu: 'falarás',
        'Ela/Ele/Você': 'falará',
        Nós: 'falaremos',
        'Eles/Elas/Vocēs': 'falarão'
      },
      subjuntivoPresente: {
        Eu: 'fale',
        Tu: 'fales',
        'Ela/Ele/Você': 'fale',
        Nós: 'falemos',
        'Eles/Elas/Vocēs': 'falem'
      },
      pretéritoImperfeito: {
        Eu: 'falasse',
        Tu: 'falasses',
        'Ela/Ele/Você': 'falasse',
        Nós: 'falássemos',
        'Eles/Elas/Vocēs': 'falassem'
      },
      subjuntivoFuturo: {
        Eu: 'falar',
        Tu: 'falares',
        'Ela/Ele/Você': 'falar',
        Nós: 'falarmos',
        'Eles/Elas/Vocēs': 'falarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'falaria',
        Tu: 'falarias',
        'Ela/Ele/Você': 'falaria',
        Nós: 'falaríamos',
        'Eles/Elas/Vocēs': 'falariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'falando'
        },
        {
          form: 'particípio',
          portuguese: 'falado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'comia',
        Tu: 'comias',
        'Ela/Ele/Você': 'comia',
        Nós: 'comíamos',
        'Eles/Elas/Vocēs': 'comiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'comera',
        Tu: 'comeras',
        'Ela/Ele/Você': 'comera',
        Nós: 'comêramos',
        'Eles/Elas/Vocēs': 'comeram'
      },
      futuroDoPresenteSimples: {
        Eu: 'comerei',
        Tu: 'comerás',
        'Ela/Ele/Você': 'comerá',
        Nós: 'comeremos',
        'Eles/Elas/Vocēs': 'comerão'
      },
      subjuntivoPresente: {
        Eu: 'coma',
        Tu: 'comas',
        'Ela/Ele/Você': 'coma',
        Nós: 'comamos',
        'Eles/Elas/Vocēs': 'comam'
      },
      pretéritoImperfeito: {
        Eu: 'comesse',
        Tu: 'comesses',
        'Ela/Ele/Você': 'comesse',
        Nós: 'comêssemos',
        'Eles/Elas/Vocēs': 'comessem'
      },
      subjuntivoFuturo: {
        Eu: 'comer',
        Tu: 'comeres',
        'Ela/Ele/Você': 'comer',
        Nós: 'comermos',
        'Eles/Elas/Vocēs': 'comerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'comeria',
        Tu: 'comerias',
        'Ela/Ele/Você': 'comeria',
        Nós: 'comeríamos',
        'Eles/Elas/Vocēs': 'comeriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'comendo'
        },
        {
          form: 'particípio',
          portuguese: 'comido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'abria',
        Tu: 'abrias',
        'Ela/Ele/Você': 'abria',
        Nós: 'abríamos',
        'Eles/Elas/Vocēs': 'abriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'abrira',
        Tu: 'abriras',
        'Ela/Ele/Você': 'abrira',
        Nós: 'abríramos',
        'Eles/Elas/Vocēs': 'abriram'
      },
      futuroDoPresenteSimples: {
        Eu: 'abrirei',
        Tu: 'abrirás',
        'Ela/Ele/Você': 'abrirá',
        Nós: 'abriremos',
        'Eles/Elas/Vocēs': 'abrirão'
      },
      subjuntivoPresente: {
        Eu: 'abra',
        Tu: 'abras',
        'Ela/Ele/Você': 'abra',
        Nós: 'abramos',
        'Eles/Elas/Vocēs': 'abram'
      },
      pretéritoImperfeito: {
        Eu: 'abrisse',
        Tu: 'abrisses',
        'Ela/Ele/Você': 'abrisse',
        Nós: 'abríssemos',
        'Eles/Elas/Vocēs': 'abrissem'
      },
      subjuntivoFuturo: {
        Eu: 'abrir',
        Tu: 'abrires',
        'Ela/Ele/Você': 'abrir',
        Nós: 'abrirmos',
        'Eles/Elas/Vocēs': 'abrirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'abriria',
        Tu: 'abririas',
        'Ela/Ele/Você': 'abriria',
        Nós: 'abriríamos',
        'Eles/Elas/Vocēs': 'abririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'abrindo'
        },
        {
          form: 'particípio',
          portuguese: 'aberto'
        }
      ]
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
      },
      imperfect: {
        Eu: 'achava',
        Tu: 'achavas',
        'Ela/Ele/Você': 'achava',
        Nós: 'achávamos',
        'Eles/Elas/Vocēs': 'achavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'achara',
        Tu: 'acharas',
        'Ela/Ele/Você': 'achara',
        Nós: 'acháramos',
        'Eles/Elas/Vocēs': 'acharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'acharei',
        Tu: 'acharás',
        'Ela/Ele/Você': 'achará',
        Nós: 'acharemos',
        'Eles/Elas/Vocēs': 'acharão'
      },
      subjuntivoPresente: {
        Eu: 'ache',
        Tu: 'aches',
        'Ela/Ele/Você': 'ache',
        Nós: 'achemos',
        'Eles/Elas/Vocēs': 'achem'
      },
      pretéritoImperfeito: {
        Eu: 'achasse',
        Tu: 'achasses',
        'Ela/Ele/Você': 'achasse',
        Nós: 'achássemos',
        'Eles/Elas/Vocēs': 'achassem'
      },
      subjuntivoFuturo: {
        Eu: 'achar',
        Tu: 'achares',
        'Ela/Ele/Você': 'achar',
        Nós: 'acharmos',
        'Eles/Elas/Vocēs': 'acharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'acharia',
        Tu: 'acharias',
        'Ela/Ele/Você': 'acharia',
        Nós: 'acharíamos',
        'Eles/Elas/Vocēs': 'achariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'achando'
        },
        {
          form: 'particípio',
          portuguese: 'achado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'andava',
        Tu: 'andavas',
        'Ela/Ele/Você': 'andava',
        Nós: 'andávamos',
        'Eles/Elas/Vocēs': 'andavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'andara',
        Tu: 'andaras',
        'Ela/Ele/Você': 'andara',
        Nós: 'andáramos',
        'Eles/Elas/Vocēs': 'andaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'andarei',
        Tu: 'andarás',
        'Ela/Ele/Você': 'andará',
        Nós: 'andaremos',
        'Eles/Elas/Vocēs': 'andarão'
      },
      subjuntivoPresente: {
        Eu: 'ande',
        Tu: 'andes',
        'Ela/Ele/Você': 'ande',
        Nós: 'andemos',
        'Eles/Elas/Vocēs': 'andem'
      },
      pretéritoImperfeito: {
        Eu: 'andasse',
        Tu: 'andasses',
        'Ela/Ele/Você': 'andasse',
        Nós: 'andássemos',
        'Eles/Elas/Vocēs': 'andassem'
      },
      subjuntivoFuturo: {
        Eu: 'andar',
        Tu: 'andares',
        'Ela/Ele/Você': 'andar',
        Nós: 'andarmos',
        'Eles/Elas/Vocēs': 'andarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'andaria',
        Tu: 'andarias',
        'Ela/Ele/Você': 'andaria',
        Nós: 'andaríamos',
        'Eles/Elas/Vocēs': 'andariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'andando'
        },
        {
          form: 'particípio',
          portuguese: 'andado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'bebia',
        Tu: 'bebias',
        'Ela/Ele/Você': 'bebia',
        Nós: 'bebíamos',
        'Eles/Elas/Vocēs': 'bebiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'bebera',
        Tu: 'beberas',
        'Ela/Ele/Você': 'bebera',
        Nós: 'bebêramos',
        'Eles/Elas/Vocēs': 'beberam'
      },
      futuroDoPresenteSimples: {
        Eu: 'beberei',
        Tu: 'beberás',
        'Ela/Ele/Você': 'beberá',
        Nós: 'beberemos',
        'Eles/Elas/Vocēs': 'beberão'
      },
      subjuntivoPresente: {
        Eu: 'beba',
        Tu: 'bebas',
        'Ela/Ele/Você': 'beba',
        Nós: 'bebamos',
        'Eles/Elas/Vocēs': 'bebam'
      },
      pretéritoImperfeito: {
        Eu: 'bebesse',
        Tu: 'bebesses',
        'Ela/Ele/Você': 'bebesse',
        Nós: 'bebêssemos',
        'Eles/Elas/Vocēs': 'bebessem'
      },
      subjuntivoFuturo: {
        Eu: 'beber',
        Tu: 'beberes',
        'Ela/Ele/Você': 'beber',
        Nós: 'bebermos',
        'Eles/Elas/Vocēs': 'beberem'
      },
      futurodoPretéritoSimples: {
        Eu: 'beberia',
        Tu: 'beberias',
        'Ela/Ele/Você': 'beberia',
        Nós: 'beberíamos',
        'Eles/Elas/Vocēs': 'beberiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'bebendo'
        },
        {
          form: 'particípio',
          portuguese: 'bebido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'entrava',
        Tu: 'entravas',
        'Ela/Ele/Você': 'entrava',
        Nós: 'entrávamos',
        'Eles/Elas/Vocēs': 'entravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'entrara',
        Tu: 'entraras',
        'Ela/Ele/Você': 'entrara',
        Nós: 'entráramos',
        'Eles/Elas/Vocēs': 'entraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'entrarei',
        Tu: 'entrarás',
        'Ela/Ele/Você': 'entrará',
        Nós: 'entraremos',
        'Eles/Elas/Vocēs': 'entrarão'
      },
      subjuntivoPresente: {
        Eu: 'entre',
        Tu: 'entres',
        'Ela/Ele/Você': 'entre',
        Nós: 'entremos',
        'Eles/Elas/Vocēs': 'entrem'
      },
      pretéritoImperfeito: {
        Eu: 'entrasse',
        Tu: 'entrasses',
        'Ela/Ele/Você': 'entrasse',
        Nós: 'entrássemos',
        'Eles/Elas/Vocēs': 'entrassem'
      },
      subjuntivoFuturo: {
        Eu: 'entrar',
        Tu: 'entrares',
        'Ela/Ele/Você': 'entrar',
        Nós: 'entrarmos',
        'Eles/Elas/Vocēs': 'entrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'entraria',
        Tu: 'entrarias',
        'Ela/Ele/Você': 'entraria',
        Nós: 'entraríamos',
        'Eles/Elas/Vocēs': 'entrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'entrando'
        },
        {
          form: 'particípio',
          portuguese: 'entrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'morava',
        Tu: 'moravas',
        'Ela/Ele/Você': 'morava',
        Nós: 'morávamos',
        'Eles/Elas/Vocēs': 'moravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'morara',
        Tu: 'moraras',
        'Ela/Ele/Você': 'morara',
        Nós: 'moráramos',
        'Eles/Elas/Vocēs': 'moraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'morarei',
        Tu: 'morarás',
        'Ela/Ele/Você': 'morará',
        Nós: 'moraremos',
        'Eles/Elas/Vocēs': 'morarão'
      },
      subjuntivoPresente: {
        Eu: 'more',
        Tu: 'mores',
        'Ela/Ele/Você': 'more',
        Nós: 'moremos',
        'Eles/Elas/Vocēs': 'morem'
      },
      pretéritoImperfeito: {
        Eu: 'morasse',
        Tu: 'morasses',
        'Ela/Ele/Você': 'morasse',
        Nós: 'morássemos',
        'Eles/Elas/Vocēs': 'morassem'
      },
      subjuntivoFuturo: {
        Eu: 'morar',
        Tu: 'morares',
        'Ela/Ele/Você': 'morar',
        Nós: 'morarmos',
        'Eles/Elas/Vocēs': 'morarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'moraria',
        Tu: 'morarias',
        'Ela/Ele/Você': 'moraria',
        Nós: 'moraríamos',
        'Eles/Elas/Vocēs': 'morariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'morando'
        },
        {
          form: 'particípio',
          portuguese: 'morado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'olhava',
        Tu: 'olhavas',
        'Ela/Ele/Você': 'olhava',
        Nós: 'olhávamos',
        'Eles/Elas/Vocēs': 'olhavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'olhara',
        Tu: 'olharas',
        'Ela/Ele/Você': 'olhara',
        Nós: 'olháramos',
        'Eles/Elas/Vocēs': 'olharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'olharei',
        Tu: 'olharás',
        'Ela/Ele/Você': 'olhará',
        Nós: 'olharemos',
        'Eles/Elas/Vocēs': 'olharão'
      },
      subjuntivoPresente: {
        Eu: 'olhe',
        Tu: 'olhes',
        'Ela/Ele/Você': 'olhe',
        Nós: 'olhemos',
        'Eles/Elas/Vocēs': 'olhem'
      },
      pretéritoImperfeito: {
        Eu: 'olhasse',
        Tu: 'olhasses',
        'Ela/Ele/Você': 'olhasse',
        Nós: 'olhássemos',
        'Eles/Elas/Vocēs': 'olhassem'
      },
      subjuntivoFuturo: {
        Eu: 'olhar',
        Tu: 'olhares',
        'Ela/Ele/Você': 'olhar',
        Nós: 'olharmos',
        'Eles/Elas/Vocēs': 'olharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'olharia',
        Tu: 'olharias',
        'Ela/Ele/Você': 'olharia',
        Nós: 'olharíamos',
        'Eles/Elas/Vocēs': 'olhariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'olhando'
        },
        {
          form: 'particípio',
          portuguese: 'olhado'
        }
      ]
    },
    {
      english: 'to be called',
      infinitive: 'chamar',
      presentSimple: {
        Eu: 'chamo',
        Tu: 'chamas',
        'Ela/Ele/Você': 'chama',
        Nós: 'chamamos',
        'Eles/Elas/Vocēs': 'chamam'
      },
      pastPerfect: {
        Eu: 'chamei',
        Tu: 'chamaste',
        'Ela/Ele/Você': 'chamou',
        Nós: 'chamámos',
        'Eles/Elas/Vocēs': 'chamaram'
      },
      imperfect: {
        Eu: 'chamava',
        Tu: 'chamavas',
        'Ela/Ele/Você': 'chamava',
        Nós: 'chamávamos',
        'Eles/Elas/Vocēs': 'chamavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'chamara',
        Tu: 'chamaras',
        'Ela/Ele/Você': 'chamara',
        Nós: 'chamáramos',
        'Eles/Elas/Vocēs': 'chamaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'chamarei',
        Tu: 'chamarás',
        'Ela/Ele/Você': 'chamará',
        Nós: 'chamaremos',
        'Eles/Elas/Vocēs': 'chamarão'
      },
      subjuntivoPresente: {
        Eu: 'chame',
        Tu: 'chames',
        'Ela/Ele/Você': 'chame',
        Nós: 'chamemos',
        'Eles/Elas/Vocēs': 'chamem'
      },
      pretéritoImperfeito: {
        Eu: 'chamasse',
        Tu: 'chamasses',
        'Ela/Ele/Você': 'chamasse',
        Nós: 'chamássemos',
        'Eles/Elas/Vocēs': 'chamassem'
      },
      subjuntivoFuturo: {
        Eu: 'chamar',
        Tu: 'chamares',
        'Ela/Ele/Você': 'chamar',
        Nós: 'chamarmos',
        'Eles/Elas/Vocēs': 'chamarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'chamaria',
        Tu: 'chamarias',
        'Ela/Ele/Você': 'chamaria',
        Nós: 'chamaríamos',
        'Eles/Elas/Vocēs': 'chamariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'chamando'
        },
        {
          form: 'particípio',
          portuguese: 'chamado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'trabalhava',
        Tu: 'trabalhavas',
        'Ela/Ele/Você': 'trabalhava',
        Nós: 'trabalhávamos',
        'Eles/Elas/Vocēs': 'trabalhavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'trabalhara',
        Tu: 'trabalharas',
        'Ela/Ele/Você': 'trabalhara',
        Nós: 'trabalháramos',
        'Eles/Elas/Vocēs': 'trabalharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'trabalharei',
        Tu: 'trabalharás',
        'Ela/Ele/Você': 'trabalhará',
        Nós: 'trabalharemos',
        'Eles/Elas/Vocēs': 'trabalharão'
      },
      subjuntivoPresente: {
        Eu: 'trabalhe',
        Tu: 'trabalhes',
        'Ela/Ele/Você': 'trabalhe',
        Nós: 'trabalhemos',
        'Eles/Elas/Vocēs': 'trabalhem'
      },
      pretéritoImperfeito: {
        Eu: 'trabalhasse',
        Tu: 'trabalhasses',
        'Ela/Ele/Você': 'trabalhasse',
        Nós: 'trabalhássemos',
        'Eles/Elas/Vocēs': 'trabalhassem'
      },
      subjuntivoFuturo: {
        Eu: 'trabalhar',
        Tu: 'trabalhares',
        'Ela/Ele/Você': 'trabalhar',
        Nós: 'trabalharmos',
        'Eles/Elas/Vocēs': 'trabalharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'trabalharia',
        Tu: 'trabalharias',
        'Ela/Ele/Você': 'trabalharia',
        Nós: 'trabalharíamos',
        'Eles/Elas/Vocēs': 'trabalhariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'trabalhando'
        },
        {
          form: 'particípio',
          portuguese: 'trabalhado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'cumprimentava',
        Tu: 'cumprimentavas',
        'Ela/Ele/Você': 'cumprimentava',
        Nós: 'cumprimentávamos',
        'Eles/Elas/Vocēs': 'cumprimentavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'cumprimentara',
        Tu: 'cumprimentaras',
        'Ela/Ele/Você': 'cumprimentara',
        Nós: 'cumprimentáramos',
        'Eles/Elas/Vocēs': 'cumprimentaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'cumprimentarei',
        Tu: 'cumprimentarás',
        'Ela/Ele/Você': 'cumprimentará',
        Nós: 'cumprimentaremos',
        'Eles/Elas/Vocēs': 'cumprimentarão'
      },
      subjuntivoPresente: {
        Eu: 'cumprimente',
        Tu: 'cumprimentes',
        'Ela/Ele/Você': 'cumprimente',
        Nós: 'cumprimentemos',
        'Eles/Elas/Vocēs': 'cumprimentem'
      },
      pretéritoImperfeito: {
        Eu: 'cumprimentasse',
        Tu: 'cumprimentasses',
        'Ela/Ele/Você': 'cumprimentasse',
        Nós: 'cumprimentássemos',
        'Eles/Elas/Vocēs': 'cumprimentassem'
      },
      subjuntivoFuturo: {
        Eu: 'cumprimentar',
        Tu: 'cumprimentares',
        'Ela/Ele/Você': 'cumprimentar',
        Nós: 'cumprimentarmos',
        'Eles/Elas/Vocēs': 'cumprimentarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'cumprimentaria',
        Tu: 'cumprimentarias',
        'Ela/Ele/Você': 'cumprimentaria',
        Nós: 'cumprimentaríamos',
        'Eles/Elas/Vocēs': 'cumprimentariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'cumprimentando'
        },
        {
          form: 'particípio',
          portuguese: 'cumprimentado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'apresentava-me',
        Tu: 'apresentavas-te',
        'Ela/Ele/Você': 'apresentava-se',
        Nós: 'apresentávamo-nos',
        'Eles/Elas/Vocēs': 'apresentavam-se'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'apresentara-me',
        Tu: 'apresentaras-te',
        'Ela/Ele/Você': 'apresentara-se',
        Nós: 'apresentáramo-nos',
        'Eles/Elas/Vocēs': 'apresentaram-se'
      },
      futuroDoPresenteSimples: {
        Eu: 'apresentar-me-ei',
        Tu: 'apresentar-te-ás',
        'Ela/Ele/Você': 'apresentar-se-á',
        Nós: 'apresentar-nos-emos',
        'Eles/Elas/Vocēs': 'apresentar-se-ão'
      },
      subjuntivoPresente: {
        Eu: 'meapresente',
        Tu: 'teapresentes',
        'Ela/Ele/Você': 'seapresente',
        Nós: 'nosapresentemos',
        'Eles/Elas/Vocēs': 'seapresentem'
      },
      pretéritoImperfeito: {
        Eu: 'meapresentasse',
        Tu: 'teapresentasses',
        'Ela/Ele/Você': 'seapresentasse',
        Nós: 'nosapresentássemos',
        'Eles/Elas/Vocēs': 'seapresentassem'
      },
      subjuntivoFuturo: {
        Eu: 'meapresentar',
        Tu: 'teapresentares',
        'Ela/Ele/Você': 'seapresentar',
        Nós: 'nosapresentarmos',
        'Eles/Elas/Vocēs': 'seapresentarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'apresentar-me-ia',
        Tu: 'apresentar-te-ias',
        'Ela/Ele/Você': 'apresentar-se-ia',
        Nós: 'apresentar-nos-íamos',
        'Eles/Elas/Vocēs': 'apresentar-se-iam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'apresentando-me'
        },
        {
          form: 'particípio',
          portuguese: 'apresentado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'encontrei',
        Tu: 'encontraste',
        'Ela/Ele/Você': 'encontrou',
        Nós: 'encontrámos',
        'Eles/Elas/Vocēs': 'encontraram'
      },
      imperfect: {
        Eu: 'encontrava',
        Tu: 'encontravas',
        'Ela/Ele/Você': 'encontrava',
        Nós: 'encontrávamos',
        'Eles/Elas/Vocēs': 'encontravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'encontrara',
        Tu: 'encontraras',
        'Ela/Ele/Você': 'encontrara',
        Nós: 'encontráramos',
        'Eles/Elas/Vocēs': 'encontraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'encontrarei',
        Tu: 'encontrarás',
        'Ela/Ele/Você': 'encontrará',
        Nós: 'encontraremos',
        'Eles/Elas/Vocēs': 'encontrarão'
      },
      subjuntivoPresente: {
        Eu: 'encontre',
        Tu: 'encontres',
        'Ela/Ele/Você': 'encontre',
        Nós: 'encontremos',
        'Eles/Elas/Vocēs': 'encontrem'
      },
      pretéritoImperfeito: {
        Eu: 'encontrasse',
        Tu: 'encontrasses',
        'Ela/Ele/Você': 'encontrasse',
        Nós: 'encontrássemos',
        'Eles/Elas/Vocēs': 'encontrassem'
      },
      subjuntivoFuturo: {
        Eu: 'encontrar',
        Tu: 'encontrares',
        'Ela/Ele/Você': 'encontrar',
        Nós: 'encontrarmos',
        'Eles/Elas/Vocēs': 'encontrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'encontraria',
        Tu: 'encontrarias',
        'Ela/Ele/Você': 'encontraria',
        Nós: 'encontraríamos',
        'Eles/Elas/Vocēs': 'encontrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'encontrando'
        },
        {
          form: 'particípio',
          portuguese: 'encontrado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'perguntei',
        Tu: 'perguntaste',
        'Ela/Ele/Você': 'perguntou',
        Nós: 'perguntámos',
        'Eles/Elas/Vocēs': 'perguntaram'
      },
      imperfect: {
        Eu: 'perguntava',
        Tu: 'perguntavas',
        'Ela/Ele/Você': 'perguntava',
        Nós: 'perguntávamos',
        'Eles/Elas/Vocēs': 'perguntavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'perguntara',
        Tu: 'perguntaras',
        'Ela/Ele/Você': 'perguntara',
        Nós: 'perguntáramos',
        'Eles/Elas/Vocēs': 'perguntaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'perguntarei',
        Tu: 'perguntarás',
        'Ela/Ele/Você': 'perguntará',
        Nós: 'perguntaremos',
        'Eles/Elas/Vocēs': 'perguntarão'
      },
      subjuntivoPresente: {
        Eu: 'pergunte',
        Tu: 'perguntes',
        'Ela/Ele/Você': 'pergunte',
        Nós: 'perguntemos',
        'Eles/Elas/Vocēs': 'perguntem'
      },
      pretéritoImperfeito: {
        Eu: 'perguntasse',
        Tu: 'perguntasses',
        'Ela/Ele/Você': 'perguntasse',
        Nós: 'perguntássemos',
        'Eles/Elas/Vocēs': 'perguntassem'
      },
      subjuntivoFuturo: {
        Eu: 'perguntar',
        Tu: 'perguntares',
        'Ela/Ele/Você': 'perguntar',
        Nós: 'perguntarmos',
        'Eles/Elas/Vocēs': 'perguntarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'perguntaria',
        Tu: 'perguntarias',
        'Ela/Ele/Você': 'perguntaria',
        Nós: 'perguntaríamos',
        'Eles/Elas/Vocēs': 'perguntariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'perguntando'
        },
        {
          form: 'particípio',
          portuguese: 'perguntado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'joguei',
        Tu: 'jogaste',
        'Ela/Ele/Você': 'jogou',
        Nós: 'jogámos',
        'Eles/Elas/Vocēs': 'jogaram'
      },
      imperfect: {
        Eu: 'jogava',
        Tu: 'jogavas',
        'Ela/Ele/Você': 'jogava',
        Nós: 'jogávamos',
        'Eles/Elas/Vocēs': 'jogavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'jogara',
        Tu: 'jogaras',
        'Ela/Ele/Você': 'jogara',
        Nós: 'jogáramos',
        'Eles/Elas/Vocēs': 'jogaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'jogarei',
        Tu: 'jogarás',
        'Ela/Ele/Você': 'jogará',
        Nós: 'jogaremos',
        'Eles/Elas/Vocēs': 'jogarão'
      },
      subjuntivoPresente: {
        Eu: 'jogue',
        Tu: 'jogues',
        'Ela/Ele/Você': 'jogue',
        Nós: 'joguemos',
        'Eles/Elas/Vocēs': 'joguem'
      },
      pretéritoImperfeito: {
        Eu: 'jogasse',
        Tu: 'jogasses',
        'Ela/Ele/Você': 'jogasse',
        Nós: 'jogássemos',
        'Eles/Elas/Vocēs': 'jogassem'
      },
      subjuntivoFuturo: {
        Eu: 'jogar',
        Tu: 'jogares',
        'Ela/Ele/Você': 'jogar',
        Nós: 'jogarmos',
        'Eles/Elas/Vocēs': 'jogarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'jogaria',
        Tu: 'jogarias',
        'Ela/Ele/Você': 'jogaria',
        Nós: 'jogaríamos',
        'Eles/Elas/Vocēs': 'jogariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'jogando'
        },
        {
          form: 'particípio',
          portuguese: 'jogado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'escrevi',
        Tu: 'escreveste',
        'Ela/Ele/Você': 'escreveu',
        Nós: 'escrevemos',
        'Eles/Elas/Vocēs': 'escreveram'
      },
      imperfect: {
        Eu: 'escrevia',
        Tu: 'escrevias',
        'Ela/Ele/Você': 'escrevia',
        Nós: 'escrevíamos',
        'Eles/Elas/Vocēs': 'escreviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'escrevera',
        Tu: 'escreveras',
        'Ela/Ele/Você': 'escrevera',
        Nós: 'escrevêramos',
        'Eles/Elas/Vocēs': 'escreveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'escreverei',
        Tu: 'escreverás',
        'Ela/Ele/Você': 'escreverá',
        Nós: 'escreveremos',
        'Eles/Elas/Vocēs': 'escreverão'
      },
      subjuntivoPresente: {
        Eu: 'escreva',
        Tu: 'escrevas',
        'Ela/Ele/Você': 'escreva',
        Nós: 'escrevamos',
        'Eles/Elas/Vocēs': 'escrevam'
      },
      pretéritoImperfeito: {
        Eu: 'escrevesse',
        Tu: 'escrevesses',
        'Ela/Ele/Você': 'escrevesse',
        Nós: 'escrevêssemos',
        'Eles/Elas/Vocēs': 'escrevessem'
      },
      subjuntivoFuturo: {
        Eu: 'escrever',
        Tu: 'escreveres',
        'Ela/Ele/Você': 'escrever',
        Nós: 'escrevermos',
        'Eles/Elas/Vocēs': 'escreverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'escreveria',
        Tu: 'escreverias',
        'Ela/Ele/Você': 'escreveria',
        Nós: 'escreveríamos',
        'Eles/Elas/Vocēs': 'escreveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'escrevendo'
        },
        {
          form: 'particípio',
          portuguese: 'escrito'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'compreendi',
        Tu: 'compreendeste',
        'Ela/Ele/Você': 'compreendeu',
        Nós: 'compreendemos',
        'Eles/Elas/Vocēs': 'compreenderam'
      },
      imperfect: {
        Eu: 'compreendia',
        Tu: 'compreendias',
        'Ela/Ele/Você': 'compreendia',
        Nós: 'compreendíamos',
        'Eles/Elas/Vocēs': 'compreendiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'compreendera',
        Tu: 'compreenderas',
        'Ela/Ele/Você': 'compreendera',
        Nós: 'compreendêramos',
        'Eles/Elas/Vocēs': 'compreenderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'compreenderei',
        Tu: 'compreenderás',
        'Ela/Ele/Você': 'compreenderá',
        Nós: 'compreenderemos',
        'Eles/Elas/Vocēs': 'compreenderão'
      },
      subjuntivoPresente: {
        Eu: 'compreenda',
        Tu: 'compreendas',
        'Ela/Ele/Você': 'compreenda',
        Nós: 'compreendamos',
        'Eles/Elas/Vocēs': 'compreendam'
      },
      pretéritoImperfeito: {
        Eu: 'compreendesse',
        Tu: 'compreendesses',
        'Ela/Ele/Você': 'compreendesse',
        Nós: 'compreendêssemos',
        'Eles/Elas/Vocēs': 'compreendessem'
      },
      subjuntivoFuturo: {
        Eu: 'compreender',
        Tu: 'compreenderes',
        'Ela/Ele/Você': 'compreender',
        Nós: 'compreendermos',
        'Eles/Elas/Vocēs': 'compreenderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'compreenderia',
        Tu: 'compreenderias',
        'Ela/Ele/Você': 'compreenderia',
        Nós: 'compreenderíamos',
        'Eles/Elas/Vocēs': 'compreenderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'compreendendo'
        },
        {
          form: 'particípio',
          portuguese: 'compreendido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'conheci',
        Tu: 'conheceste',
        'Ela/Ele/Você': 'conheceu',
        Nós: 'conhecemos',
        'Eles/Elas/Vocēs': 'conheceram'
      },
      imperfect: {
        Eu: 'conhecia',
        Tu: 'conhecias',
        'Ela/Ele/Você': 'conhecia',
        Nós: 'conhecíamos',
        'Eles/Elas/Vocēs': 'conheciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'conhecera',
        Tu: 'conheceras',
        'Ela/Ele/Você': 'conhecera',
        Nós: 'conhecêramos',
        'Eles/Elas/Vocēs': 'conheceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'conhecerei',
        Tu: 'conhecerás',
        'Ela/Ele/Você': 'conhecerá',
        Nós: 'conheceremos',
        'Eles/Elas/Vocēs': 'conhecerão'
      },
      subjuntivoPresente: {
        Eu: 'conheça',
        Tu: 'conheças',
        'Ela/Ele/Você': 'conheça',
        Nós: 'conheçamos',
        'Eles/Elas/Vocēs': 'conheçam'
      },
      pretéritoImperfeito: {
        Eu: 'conhecesse',
        Tu: 'conhecesses',
        'Ela/Ele/Você': 'conhecesse',
        Nós: 'conhecêssemos',
        'Eles/Elas/Vocēs': 'conhecessem'
      },
      subjuntivoFuturo: {
        Eu: 'conhecer',
        Tu: 'conheceres',
        'Ela/Ele/Você': 'conhecer',
        Nós: 'conhecermos',
        'Eles/Elas/Vocēs': 'conhecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'conheceria',
        Tu: 'conhecerias',
        'Ela/Ele/Você': 'conheceria',
        Nós: 'conheceríamos',
        'Eles/Elas/Vocēs': 'conheceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'conhecendo'
        },
        {
          form: 'particípio',
          portuguese: 'conhecido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'resolvi',
        Tu: 'resolveste',
        'Ela/Ele/Você': 'resolveu',
        Nós: 'resolvemos',
        'Eles/Elas/Vocēs': 'resolveram'
      },
      imperfect: {
        Eu: 'resolvia',
        Tu: 'resolvias',
        'Ela/Ele/Você': 'resolvia',
        Nós: 'resolvíamos',
        'Eles/Elas/Vocēs': 'resolviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'resolvera',
        Tu: 'resolveras',
        'Ela/Ele/Você': 'resolvera',
        Nós: 'resolvêramos',
        'Eles/Elas/Vocēs': 'resolveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'resolverei',
        Tu: 'resolverás',
        'Ela/Ele/Você': 'resolverá',
        Nós: 'resolveremos',
        'Eles/Elas/Vocēs': 'resolverão'
      },
      subjuntivoPresente: {
        Eu: 'resolva',
        Tu: 'resolvas',
        'Ela/Ele/Você': 'resolva',
        Nós: 'resolvamos',
        'Eles/Elas/Vocēs': 'resolvam'
      },
      pretéritoImperfeito: {
        Eu: 'resolvesse',
        Tu: 'resolvesses',
        'Ela/Ele/Você': 'resolvesse',
        Nós: 'resolvêssemos',
        'Eles/Elas/Vocēs': 'resolvessem'
      },
      subjuntivoFuturo: {
        Eu: 'resolver',
        Tu: 'resolveres',
        'Ela/Ele/Você': 'resolver',
        Nós: 'resolvermos',
        'Eles/Elas/Vocēs': 'resolverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'resolveria',
        Tu: 'resolverias',
        'Ela/Ele/Você': 'resolveria',
        Nós: 'resolveríamos',
        'Eles/Elas/Vocēs': 'resolveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'resolvendo'
        },
        {
          form: 'particípio',
          portuguese: 'resolvido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'desci',
        Tu: 'desceste',
        'Ela/Ele/Você': 'desceu',
        Nós: 'descemos',
        'Eles/Elas/Vocēs': 'desceram'
      },
      imperfect: {
        Eu: 'descia',
        Tu: 'descias',
        'Ela/Ele/Você': 'descia',
        Nós: 'descíamos',
        'Eles/Elas/Vocēs': 'desciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'descera',
        Tu: 'desceras',
        'Ela/Ele/Você': 'descera',
        Nós: 'descêramos',
        'Eles/Elas/Vocēs': 'desceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'descerei',
        Tu: 'descerás',
        'Ela/Ele/Você': 'descerá',
        Nós: 'desceremos',
        'Eles/Elas/Vocēs': 'descerão'
      },
      subjuntivoPresente: {
        Eu: 'desça',
        Tu: 'desças',
        'Ela/Ele/Você': 'desça',
        Nós: 'desçamos',
        'Eles/Elas/Vocēs': 'desçam'
      },
      pretéritoImperfeito: {
        Eu: 'descesse',
        Tu: 'descesses',
        'Ela/Ele/Você': 'descesse',
        Nós: 'descêssemos',
        'Eles/Elas/Vocēs': 'descessem'
      },
      subjuntivoFuturo: {
        Eu: 'descer',
        Tu: 'desceres',
        'Ela/Ele/Você': 'descer',
        Nós: 'descermos',
        'Eles/Elas/Vocēs': 'descerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'desceria',
        Tu: 'descerias',
        'Ela/Ele/Você': 'desceria',
        Nós: 'desceríamos',
        'Eles/Elas/Vocēs': 'desceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'descendo'
        },
        {
          form: 'particípio',
          portuguese: 'descido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'aqueci',
        Tu: 'aqueceste',
        'Ela/Ele/Você': 'aqueceu',
        Nós: 'aquecemos',
        'Eles/Elas/Vocēs': 'aqueceram'
      },
      imperfect: {
        Eu: 'aquecia',
        Tu: 'aquecias',
        'Ela/Ele/Você': 'aquecia',
        Nós: 'aquecíamos',
        'Eles/Elas/Vocēs': 'aqueciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'aquecera',
        Tu: 'aqueceras',
        'Ela/Ele/Você': 'aquecera',
        Nós: 'aquecêramos',
        'Eles/Elas/Vocēs': 'aqueceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'aquecerei',
        Tu: 'aquecerás',
        'Ela/Ele/Você': 'aquecerá',
        Nós: 'aqueceremos',
        'Eles/Elas/Vocēs': 'aquecerão'
      },
      subjuntivoPresente: {
        Eu: 'aqueça',
        Tu: 'aqueças',
        'Ela/Ele/Você': 'aqueça',
        Nós: 'aqueçamos',
        'Eles/Elas/Vocēs': 'aqueçam'
      },
      pretéritoImperfeito: {
        Eu: 'aquecesse',
        Tu: 'aquecesses',
        'Ela/Ele/Você': 'aquecesse',
        Nós: 'aquecêssemos',
        'Eles/Elas/Vocēs': 'aquecessem'
      },
      subjuntivoFuturo: {
        Eu: 'aquecer',
        Tu: 'aqueceres',
        'Ela/Ele/Você': 'aquecer',
        Nós: 'aquecermos',
        'Eles/Elas/Vocēs': 'aquecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'aqueceria',
        Tu: 'aquecerias',
        'Ela/Ele/Você': 'aqueceria',
        Nós: 'aqueceríamos',
        'Eles/Elas/Vocēs': 'aqueceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'aquecendo'
        },
        {
          form: 'particípio',
          portuguese: 'aquecido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'vivi',
        Tu: 'viveste',
        'Ela/Ele/Você': 'viveu',
        Nós: 'vivemos',
        'Eles/Elas/Vocēs': 'viveram'
      },
      imperfect: {
        Eu: 'vivia',
        Tu: 'vivias',
        'Ela/Ele/Você': 'vivia',
        Nós: 'vivíamos',
        'Eles/Elas/Vocēs': 'viviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'vivera',
        Tu: 'viveras',
        'Ela/Ele/Você': 'vivera',
        Nós: 'vivêramos',
        'Eles/Elas/Vocēs': 'viveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'viverei',
        Tu: 'viverás',
        'Ela/Ele/Você': 'viverá',
        Nós: 'viveremos',
        'Eles/Elas/Vocēs': 'viverão'
      },
      subjuntivoPresente: {
        Eu: 'viva',
        Tu: 'vivas',
        'Ela/Ele/Você': 'viva',
        Nós: 'vivamos',
        'Eles/Elas/Vocēs': 'vivam'
      },
      pretéritoImperfeito: {
        Eu: 'vivesse',
        Tu: 'vivesses',
        'Ela/Ele/Você': 'vivesse',
        Nós: 'vivêssemos',
        'Eles/Elas/Vocēs': 'vivessem'
      },
      subjuntivoFuturo: {
        Eu: 'viver',
        Tu: 'viveres',
        'Ela/Ele/Você': 'viver',
        Nós: 'vivermos',
        'Eles/Elas/Vocēs': 'viverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'viveria',
        Tu: 'viverias',
        'Ela/Ele/Você': 'viveria',
        Nós: 'viveríamos',
        'Eles/Elas/Vocēs': 'viveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'vivendo'
        },
        {
          form: 'particípio',
          portuguese: 'vivido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'corri',
        Tu: 'correste',
        'Ela/Ele/Você': 'correu',
        Nós: 'corremos',
        'Eles/Elas/Vocēs': 'correram'
      },
      imperfect: {
        Eu: 'corria',
        Tu: 'corrias',
        'Ela/Ele/Você': 'corria',
        Nós: 'corríamos',
        'Eles/Elas/Vocēs': 'corriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'correra',
        Tu: 'correras',
        'Ela/Ele/Você': 'correra',
        Nós: 'corrêramos',
        'Eles/Elas/Vocēs': 'correram'
      },
      futuroDoPresenteSimples: {
        Eu: 'correrei',
        Tu: 'correrás',
        'Ela/Ele/Você': 'correrá',
        Nós: 'correremos',
        'Eles/Elas/Vocēs': 'correrão'
      },
      subjuntivoPresente: {
        Eu: 'corra',
        Tu: 'corras',
        'Ela/Ele/Você': 'corra',
        Nós: 'corramos',
        'Eles/Elas/Vocēs': 'corram'
      },
      pretéritoImperfeito: {
        Eu: 'corresse',
        Tu: 'corresses',
        'Ela/Ele/Você': 'corresse',
        Nós: 'corrêssemos',
        'Eles/Elas/Vocēs': 'corressem'
      },
      subjuntivoFuturo: {
        Eu: 'correr',
        Tu: 'correres',
        'Ela/Ele/Você': 'correr',
        Nós: 'corrermos',
        'Eles/Elas/Vocēs': 'correrem'
      },
      futurodoPretéritoSimples: {
        Eu: 'correria',
        Tu: 'correrias',
        'Ela/Ele/Você': 'correria',
        Nós: 'correríamos',
        'Eles/Elas/Vocēs': 'correriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'correndo'
        },
        {
          form: 'particípio',
          portuguese: 'corrido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'aprendi',
        Tu: 'aprendeste',
        'Ela/Ele/Você': 'aprendeu',
        Nós: 'aprendemos',
        'Eles/Elas/Vocēs': 'aprenderam'
      },
      imperfect: {
        Eu: 'aprendia',
        Tu: 'aprendias',
        'Ela/Ele/Você': 'aprendia',
        Nós: 'aprendíamos',
        'Eles/Elas/Vocēs': 'aprendiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'aprendera',
        Tu: 'aprenderas',
        'Ela/Ele/Você': 'aprendera',
        Nós: 'aprendêramos',
        'Eles/Elas/Vocēs': 'aprenderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'aprenderei',
        Tu: 'aprenderás',
        'Ela/Ele/Você': 'aprenderá',
        Nós: 'aprenderemos',
        'Eles/Elas/Vocēs': 'aprenderão'
      },
      subjuntivoPresente: {
        Eu: 'aprenda',
        Tu: 'aprendas',
        'Ela/Ele/Você': 'aprenda',
        Nós: 'aprendamos',
        'Eles/Elas/Vocēs': 'aprendam'
      },
      pretéritoImperfeito: {
        Eu: 'aprendesse',
        Tu: 'aprendesses',
        'Ela/Ele/Você': 'aprendesse',
        Nós: 'aprendêssemos',
        'Eles/Elas/Vocēs': 'aprendessem'
      },
      subjuntivoFuturo: {
        Eu: 'aprender',
        Tu: 'aprenderes',
        'Ela/Ele/Você': 'aprender',
        Nós: 'aprendermos',
        'Eles/Elas/Vocēs': 'aprenderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'aprenderia',
        Tu: 'aprenderias',
        'Ela/Ele/Você': 'aprenderia',
        Nós: 'aprenderíamos',
        'Eles/Elas/Vocēs': 'aprenderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'aprendendo'
        },
        {
          form: 'particípio',
          portuguese: 'aprendido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'esqueci',
        Tu: 'esqueceste',
        'Ela/Ele/Você': 'esqueceu',
        Nós: 'esquecemos',
        'Eles/Elas/Vocēs': 'esqueceram'
      },
      imperfect: {
        Eu: 'esquecia',
        Tu: 'esquecias',
        'Ela/Ele/Você': 'esquecia',
        Nós: 'esquecíamos',
        'Eles/Elas/Vocēs': 'esqueciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'esquecera',
        Tu: 'esqueceras',
        'Ela/Ele/Você': 'esquecera',
        Nós: 'esquecêramos',
        'Eles/Elas/Vocēs': 'esqueceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'esquecerei',
        Tu: 'esquecerás',
        'Ela/Ele/Você': 'esquecerá',
        Nós: 'esqueceremos',
        'Eles/Elas/Vocēs': 'esquecerão'
      },
      subjuntivoPresente: {
        Eu: 'esqueça',
        Tu: 'esqueças',
        'Ela/Ele/Você': 'esqueça',
        Nós: 'esqueçamos',
        'Eles/Elas/Vocēs': 'esqueçam'
      },
      pretéritoImperfeito: {
        Eu: 'esquecesse',
        Tu: 'esquecesses',
        'Ela/Ele/Você': 'esquecesse',
        Nós: 'esquecêssemos',
        'Eles/Elas/Vocēs': 'esquecessem'
      },
      subjuntivoFuturo: {
        Eu: 'esquecer',
        Tu: 'esqueceres',
        'Ela/Ele/Você': 'esquecer',
        Nós: 'esquecermos',
        'Eles/Elas/Vocēs': 'esquecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'esqueceria',
        Tu: 'esquecerias',
        'Ela/Ele/Você': 'esqueceria',
        Nós: 'esqueceríamos',
        'Eles/Elas/Vocēs': 'esqueceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'esquecendo'
        },
        {
          form: 'particípio',
          portuguese: 'esquecido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'usei',
        Tu: 'usaste',
        'Ela/Ele/Você': 'usou',
        Nós: 'usámos',
        'Eles/Elas/Vocēs': 'usaram'
      },
      imperfect: {
        Eu: 'usava',
        Tu: 'usavas',
        'Ela/Ele/Você': 'usava',
        Nós: 'usávamos',
        'Eles/Elas/Vocēs': 'usavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'usara',
        Tu: 'usaras',
        'Ela/Ele/Você': 'usara',
        Nós: 'usáramos',
        'Eles/Elas/Vocēs': 'usaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'usarei',
        Tu: 'usarás',
        'Ela/Ele/Você': 'usará',
        Nós: 'usaremos',
        'Eles/Elas/Vocēs': 'usarão'
      },
      subjuntivoPresente: {
        Eu: 'use',
        Tu: 'uses',
        'Ela/Ele/Você': 'use',
        Nós: 'usemos',
        'Eles/Elas/Vocēs': 'usem'
      },
      pretéritoImperfeito: {
        Eu: 'usasse',
        Tu: 'usasses',
        'Ela/Ele/Você': 'usasse',
        Nós: 'usássemos',
        'Eles/Elas/Vocēs': 'usassem'
      },
      subjuntivoFuturo: {
        Eu: 'usar',
        Tu: 'usares',
        'Ela/Ele/Você': 'usar',
        Nós: 'usarmos',
        'Eles/Elas/Vocēs': 'usarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'usaria',
        Tu: 'usarias',
        'Ela/Ele/Você': 'usaria',
        Nós: 'usaríamos',
        'Eles/Elas/Vocēs': 'usariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'usando'
        },
        {
          form: 'particípio',
          portuguese: 'usado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'almocei',
        Tu: 'almoçaste',
        'Ela/Ele/Você': 'almoçou',
        Nós: 'almoçámos',
        'Eles/Elas/Vocēs': 'almoçaram'
      },
      imperfect: {
        Eu: 'almoçava',
        Tu: 'almoçavas',
        'Ela/Ele/Você': 'almoçava',
        Nós: 'almoçávamos',
        'Eles/Elas/Vocēs': 'almoçavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'almoçara',
        Tu: 'almoçaras',
        'Ela/Ele/Você': 'almoçara',
        Nós: 'almoçáramos',
        'Eles/Elas/Vocēs': 'almoçaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'almoçarei',
        Tu: 'almoçarás',
        'Ela/Ele/Você': 'almoçará',
        Nós: 'almoçaremos',
        'Eles/Elas/Vocēs': 'almoçarão'
      },
      subjuntivoPresente: {
        Eu: 'almoce',
        Tu: 'almoces',
        'Ela/Ele/Você': 'almoce',
        Nós: 'almocemos',
        'Eles/Elas/Vocēs': 'almocem'
      },
      pretéritoImperfeito: {
        Eu: 'almoçasse',
        Tu: 'almoçasses',
        'Ela/Ele/Você': 'almoçasse',
        Nós: 'almoçássemos',
        'Eles/Elas/Vocēs': 'almoçassem'
      },
      subjuntivoFuturo: {
        Eu: 'almoçar',
        Tu: 'almoçares',
        'Ela/Ele/Você': 'almoçar',
        Nós: 'almoçarmos',
        'Eles/Elas/Vocēs': 'almoçarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'almoçaria',
        Tu: 'almoçarias',
        'Ela/Ele/Você': 'almoçaria',
        Nós: 'almoçaríamos',
        'Eles/Elas/Vocēs': 'almoçariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'almoçando'
        },
        {
          form: 'particípio',
          portuguese: 'almoçado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'telefonei',
        Tu: 'telefonaste',
        'Ela/Ele/Você': 'telefonou',
        Nós: 'telefonámos',
        'Eles/Elas/Vocēs': 'telefonaram'
      },
      imperfect: {
        Eu: 'telefonava',
        Tu: 'telefonavas',
        'Ela/Ele/Você': 'telefonava',
        Nós: 'telefonávamos',
        'Eles/Elas/Vocēs': 'telefonavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'telefonara',
        Tu: 'telefonaras',
        'Ela/Ele/Você': 'telefonara',
        Nós: 'telefonáramos',
        'Eles/Elas/Vocēs': 'telefonaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'telefonarei',
        Tu: 'telefonarás',
        'Ela/Ele/Você': 'telefonará',
        Nós: 'telefonaremos',
        'Eles/Elas/Vocēs': 'telefonarão'
      },
      subjuntivoPresente: {
        Eu: 'telefone',
        Tu: 'telefones',
        'Ela/Ele/Você': 'telefone',
        Nós: 'telefonemos',
        'Eles/Elas/Vocēs': 'telefonem'
      },
      pretéritoImperfeito: {
        Eu: 'telefonasse',
        Tu: 'telefonasses',
        'Ela/Ele/Você': 'telefonasse',
        Nós: 'telefonássemos',
        'Eles/Elas/Vocēs': 'telefonassem'
      },
      subjuntivoFuturo: {
        Eu: 'telefonar',
        Tu: 'telefonares',
        'Ela/Ele/Você': 'telefonar',
        Nós: 'telefonarmos',
        'Eles/Elas/Vocēs': 'telefonarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'telefonaria',
        Tu: 'telefonarias',
        'Ela/Ele/Você': 'telefonaria',
        Nós: 'telefonaríamos',
        'Eles/Elas/Vocēs': 'telefonariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'telefonando'
        },
        {
          form: 'particípio',
          portuguese: 'telefonado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'paguei',
        Tu: 'pagaste',
        'Ela/Ele/Você': 'pagou',
        Nós: 'pagámos',
        'Eles/Elas/Vocēs': 'pagaram'
      },
      imperfect: {
        Eu: 'pagava',
        Tu: 'pagavas',
        'Ela/Ele/Você': 'pagava',
        Nós: 'pagávamos',
        'Eles/Elas/Vocēs': 'pagavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pagara',
        Tu: 'pagaras',
        'Ela/Ele/Você': 'pagara',
        Nós: 'pagáramos',
        'Eles/Elas/Vocēs': 'pagaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'pagarei',
        Tu: 'pagarás',
        'Ela/Ele/Você': 'pagará',
        Nós: 'pagaremos',
        'Eles/Elas/Vocēs': 'pagarão'
      },
      subjuntivoPresente: {
        Eu: 'pague',
        Tu: 'pagues',
        'Ela/Ele/Você': 'pague',
        Nós: 'paguemos',
        'Eles/Elas/Vocēs': 'paguem'
      },
      pretéritoImperfeito: {
        Eu: 'pagasse',
        Tu: 'pagasses',
        'Ela/Ele/Você': 'pagasse',
        Nós: 'pagássemos',
        'Eles/Elas/Vocēs': 'pagassem'
      },
      subjuntivoFuturo: {
        Eu: 'pagar',
        Tu: 'pagares',
        'Ela/Ele/Você': 'pagar',
        Nós: 'pagarmos',
        'Eles/Elas/Vocēs': 'pagarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pagaria',
        Tu: 'pagarias',
        'Ela/Ele/Você': 'pagaria',
        Nós: 'pagaríamos',
        'Eles/Elas/Vocēs': 'pagariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'pagando'
        },
        {
          form: 'particípio',
          portuguese: 'pagado/pago'
        }
      ]
    },
    {
      english: 'to take food',
      infinitive: 'tomar',
      presentSimple: {
        Eu: 'tomo',
        Tu: 'tomas',
        'Ela/Ele/Você': 'toma',
        Nós: 'tomamos',
        'Eles/Elas/Vocēs': 'tomam'
      },
      pastPerfect: {
        Eu: 'tomei',
        Tu: 'tomaste',
        'Ela/Ele/Você': 'tomou',
        Nós: 'tomámos',
        'Eles/Elas/Vocēs': 'tomaram'
      },
      imperfect: {
        Eu: 'tomava',
        Tu: 'tomavas',
        'Ela/Ele/Você': 'tomava',
        Nós: 'tomávamos',
        'Eles/Elas/Vocēs': 'tomavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tomara',
        Tu: 'tomaras',
        'Ela/Ele/Você': 'tomara',
        Nós: 'tomáramos',
        'Eles/Elas/Vocēs': 'tomaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'tomarei',
        Tu: 'tomarás',
        'Ela/Ele/Você': 'tomará',
        Nós: 'tomaremos',
        'Eles/Elas/Vocēs': 'tomarão'
      },
      subjuntivoPresente: {
        Eu: 'tome',
        Tu: 'tomes',
        'Ela/Ele/Você': 'tome',
        Nós: 'tomemos',
        'Eles/Elas/Vocēs': 'tomem'
      },
      pretéritoImperfeito: {
        Eu: 'tomasse',
        Tu: 'tomasses',
        'Ela/Ele/Você': 'tomasse',
        Nós: 'tomássemos',
        'Eles/Elas/Vocēs': 'tomassem'
      },
      subjuntivoFuturo: {
        Eu: 'tomar',
        Tu: 'tomares',
        'Ela/Ele/Você': 'tomar',
        Nós: 'tomarmos',
        'Eles/Elas/Vocēs': 'tomarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'tomaria',
        Tu: 'tomarias',
        'Ela/Ele/Você': 'tomaria',
        Nós: 'tomaríamos',
        'Eles/Elas/Vocēs': 'tomariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tomando'
        },
        {
          form: 'particípio',
          portuguese: 'tomado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'fiquei',
        Tu: 'ficaste',
        'Ela/Ele/Você': 'ficou',
        Nós: 'ficámos',
        'Eles/Elas/Vocēs': 'ficaram'
      },
      imperfect: {
        Eu: 'ficava',
        Tu: 'ficavas',
        'Ela/Ele/Você': 'ficava',
        Nós: 'ficávamos',
        'Eles/Elas/Vocēs': 'ficavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ficara',
        Tu: 'ficaras',
        'Ela/Ele/Você': 'ficara',
        Nós: 'ficáramos',
        'Eles/Elas/Vocēs': 'ficaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ficarei',
        Tu: 'ficarás',
        'Ela/Ele/Você': 'ficará',
        Nós: 'ficaremos',
        'Eles/Elas/Vocēs': 'ficarão'
      },
      subjuntivoPresente: {
        Eu: 'fique',
        Tu: 'fiques',
        'Ela/Ele/Você': 'fique',
        Nós: 'fiquemos',
        'Eles/Elas/Vocēs': 'fiquem'
      },
      pretéritoImperfeito: {
        Eu: 'ficasse',
        Tu: 'ficasses',
        'Ela/Ele/Você': 'ficasse',
        Nós: 'ficássemos',
        'Eles/Elas/Vocēs': 'ficassem'
      },
      subjuntivoFuturo: {
        Eu: 'ficar',
        Tu: 'ficares',
        'Ela/Ele/Você': 'ficar',
        Nós: 'ficarmos',
        'Eles/Elas/Vocēs': 'ficarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ficaria',
        Tu: 'ficarias',
        'Ela/Ele/Você': 'ficaria',
        Nós: 'ficaríamos',
        'Eles/Elas/Vocēs': 'ficariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ficando'
        },
        {
          form: 'particípio',
          portuguese: 'ficado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'levantei-me',
        Tu: 'levantaste-te',
        'Ela/Ele/Você': 'levantou-se',
        Nós: 'levantámo-nos',
        'Eles/Elas/Vocēs': 'levantaram-se'
      },
      imperfect: {
        Eu: 'levantava-me',
        Tu: 'levantavas-te',
        'Ela/Ele/Você': 'levantava-se',
        Nós: 'levantávamo-nos',
        'Eles/Elas/Vocēs': 'levantavam-se'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'levantara-me',
        Tu: 'levantaras-te',
        'Ela/Ele/Você': 'levantara-se',
        Nós: 'levantáramo-nos',
        'Eles/Elas/Vocēs': 'levantaram-se'
      },
      futuroDoPresenteSimples: {
        Eu: 'levantar-me-ei',
        Tu: 'levantar-te-ás',
        'Ela/Ele/Você': 'levantar-se-á',
        Nós: 'levantar-nos-emos',
        'Eles/Elas/Vocēs': 'levantar-se-ão'
      },
      subjuntivoPresente: {
        Eu: 'melevante',
        Tu: 'televantes',
        'Ela/Ele/Você': 'selevante',
        Nós: 'noslevantemos',
        'Eles/Elas/Vocēs': 'selevantem'
      },
      pretéritoImperfeito: {
        Eu: 'melevantasse',
        Tu: 'televantasses',
        'Ela/Ele/Você': 'selevantasse',
        Nós: 'noslevantássemos',
        'Eles/Elas/Vocēs': 'selevantassem'
      },
      subjuntivoFuturo: {
        Eu: 'melevantar',
        Tu: 'televantares',
        'Ela/Ele/Você': 'selevantar',
        Nós: 'noslevantarmos',
        'Eles/Elas/Vocēs': 'selevantarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'levantar-me-ia',
        Tu: 'levantar-te-ias',
        'Ela/Ele/Você': 'levantar-se-ia',
        Nós: 'levantar-nos-íamos',
        'Eles/Elas/Vocēs': 'levantar-se-iam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'levantando-me'
        },
        {
          form: 'particípio',
          portuguese: 'levantado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'comprei',
        Tu: 'compraste',
        'Ela/Ele/Você': 'comprou',
        Nós: 'comprámos',
        'Eles/Elas/Vocēs': 'compraram'
      },
      imperfect: {
        Eu: 'comprava',
        Tu: 'compravas',
        'Ela/Ele/Você': 'comprava',
        Nós: 'comprávamos',
        'Eles/Elas/Vocēs': 'compravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'comprara',
        Tu: 'compraras',
        'Ela/Ele/Você': 'comprara',
        Nós: 'compráramos',
        'Eles/Elas/Vocēs': 'compraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'comprarei',
        Tu: 'comprarás',
        'Ela/Ele/Você': 'comprará',
        Nós: 'compraremos',
        'Eles/Elas/Vocēs': 'comprarão'
      },
      subjuntivoPresente: {
        Eu: 'compre',
        Tu: 'compres',
        'Ela/Ele/Você': 'compre',
        Nós: 'compremos',
        'Eles/Elas/Vocēs': 'comprem'
      },
      pretéritoImperfeito: {
        Eu: 'comprasse',
        Tu: 'comprasses',
        'Ela/Ele/Você': 'comprasse',
        Nós: 'comprássemos',
        'Eles/Elas/Vocēs': 'comprassem'
      },
      subjuntivoFuturo: {
        Eu: 'comprar',
        Tu: 'comprares',
        'Ela/Ele/Você': 'comprar',
        Nós: 'comprarmos',
        'Eles/Elas/Vocēs': 'comprarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'compraria',
        Tu: 'comprarias',
        'Ela/Ele/Você': 'compraria',
        Nós: 'compraríamos',
        'Eles/Elas/Vocēs': 'comprariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'comprando'
        },
        {
          form: 'particípio',
          portuguese: 'comprado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'ensinei',
        Tu: 'ensinaste',
        'Ela/Ele/Você': 'ensinou',
        Nós: 'ensinámos',
        'Eles/Elas/Vocēs': 'ensinaram'
      },
      imperfect: {
        Eu: 'ensinava',
        Tu: 'ensinavas',
        'Ela/Ele/Você': 'ensinava',
        Nós: 'ensinávamos',
        'Eles/Elas/Vocēs': 'ensinavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ensinara',
        Tu: 'ensinaras',
        'Ela/Ele/Você': 'ensinara',
        Nós: 'ensináramos',
        'Eles/Elas/Vocēs': 'ensinaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ensinarei',
        Tu: 'ensinarás',
        'Ela/Ele/Você': 'ensinará',
        Nós: 'ensinaremos',
        'Eles/Elas/Vocēs': 'ensinarão'
      },
      subjuntivoPresente: {
        Eu: 'ensine',
        Tu: 'ensines',
        'Ela/Ele/Você': 'ensine',
        Nós: 'ensinemos',
        'Eles/Elas/Vocēs': 'ensinem'
      },
      pretéritoImperfeito: {
        Eu: 'ensinasse',
        Tu: 'ensinasses',
        'Ela/Ele/Você': 'ensinasse',
        Nós: 'ensinássemos',
        'Eles/Elas/Vocēs': 'ensinassem'
      },
      subjuntivoFuturo: {
        Eu: 'ensinar',
        Tu: 'ensinares',
        'Ela/Ele/Você': 'ensinar',
        Nós: 'ensinarmos',
        'Eles/Elas/Vocēs': 'ensinarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ensinaria',
        Tu: 'ensinarias',
        'Ela/Ele/Você': 'ensinaria',
        Nós: 'ensinaríamos',
        'Eles/Elas/Vocēs': 'ensinariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ensinando'
        },
        {
          form: 'particípio',
          portuguese: 'ensinado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'fechei',
        Tu: 'fechaste',
        'Ela/Ele/Você': 'fechou',
        Nós: 'fechámos',
        'Eles/Elas/Vocēs': 'fecharam'
      },
      imperfect: {
        Eu: 'fechava',
        Tu: 'fechavas',
        'Ela/Ele/Você': 'fechava',
        Nós: 'fechávamos',
        'Eles/Elas/Vocēs': 'fechavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fechara',
        Tu: 'fecharas',
        'Ela/Ele/Você': 'fechara',
        Nós: 'fecháramos',
        'Eles/Elas/Vocēs': 'fecharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'fecharei',
        Tu: 'fecharás',
        'Ela/Ele/Você': 'fechará',
        Nós: 'fecharemos',
        'Eles/Elas/Vocēs': 'fecharão'
      },
      subjuntivoPresente: {
        Eu: 'feche',
        Tu: 'feches',
        'Ela/Ele/Você': 'feche',
        Nós: 'fechemos',
        'Eles/Elas/Vocēs': 'fechem'
      },
      pretéritoImperfeito: {
        Eu: 'fechasse',
        Tu: 'fechasses',
        'Ela/Ele/Você': 'fechasse',
        Nós: 'fechássemos',
        'Eles/Elas/Vocēs': 'fechassem'
      },
      subjuntivoFuturo: {
        Eu: 'fechar',
        Tu: 'fechares',
        'Ela/Ele/Você': 'fechar',
        Nós: 'fecharmos',
        'Eles/Elas/Vocēs': 'fecharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'fecharia',
        Tu: 'fecharias',
        'Ela/Ele/Você': 'fecharia',
        Nós: 'fecharíamos',
        'Eles/Elas/Vocēs': 'fechariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'fechando'
        },
        {
          form: 'particípio',
          portuguese: 'fechado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'gostei',
        Tu: 'gostaste',
        'Ela/Ele/Você': 'gostou',
        Nós: 'gostámos',
        'Eles/Elas/Vocēs': 'gostaram'
      },
      imperfect: {
        Eu: 'gostava',
        Tu: 'gostavas',
        'Ela/Ele/Você': 'gostava',
        Nós: 'gostávamos',
        'Eles/Elas/Vocēs': 'gostavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'gostara',
        Tu: 'gostaras',
        'Ela/Ele/Você': 'gostara',
        Nós: 'gostáramos',
        'Eles/Elas/Vocēs': 'gostaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'gostarei',
        Tu: 'gostarás',
        'Ela/Ele/Você': 'gostará',
        Nós: 'gostaremos',
        'Eles/Elas/Vocēs': 'gostarão'
      },
      subjuntivoPresente: {
        Eu: 'goste',
        Tu: 'gostes',
        'Ela/Ele/Você': 'goste',
        Nós: 'gostemos',
        'Eles/Elas/Vocēs': 'gostem'
      },
      pretéritoImperfeito: {
        Eu: 'gostasse',
        Tu: 'gostasses',
        'Ela/Ele/Você': 'gostasse',
        Nós: 'gostássemos',
        'Eles/Elas/Vocēs': 'gostassem'
      },
      subjuntivoFuturo: {
        Eu: 'gostar',
        Tu: 'gostares',
        'Ela/Ele/Você': 'gostar',
        Nós: 'gostarmos',
        'Eles/Elas/Vocēs': 'gostarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'gostaria',
        Tu: 'gostarias',
        'Ela/Ele/Você': 'gostaria',
        Nós: 'gostaríamos',
        'Eles/Elas/Vocēs': 'gostariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'gostando'
        },
        {
          form: 'particípio',
          portuguese: 'gostado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'comecei',
        Tu: 'começaste',
        'Ela/Ele/Você': 'começou',
        Nós: 'começámos',
        'Eles/Elas/Vocēs': 'começaram'
      },
      imperfect: {
        Eu: 'começava',
        Tu: 'começavas',
        'Ela/Ele/Você': 'começava',
        Nós: 'começávamos',
        'Eles/Elas/Vocēs': 'começavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'começara',
        Tu: 'começaras',
        'Ela/Ele/Você': 'começara',
        Nós: 'começáramos',
        'Eles/Elas/Vocēs': 'começaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'começarei',
        Tu: 'começarás',
        'Ela/Ele/Você': 'começará',
        Nós: 'começaremos',
        'Eles/Elas/Vocēs': 'começarão'
      },
      subjuntivoPresente: {
        Eu: 'comece',
        Tu: 'comeces',
        'Ela/Ele/Você': 'comece',
        Nós: 'comecemos',
        'Eles/Elas/Vocēs': 'comecem'
      },
      pretéritoImperfeito: {
        Eu: 'começasse',
        Tu: 'começasses',
        'Ela/Ele/Você': 'começasse',
        Nós: 'começássemos',
        'Eles/Elas/Vocēs': 'começassem'
      },
      subjuntivoFuturo: {
        Eu: 'começar',
        Tu: 'começares',
        'Ela/Ele/Você': 'começar',
        Nós: 'começarmos',
        'Eles/Elas/Vocēs': 'começarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'começaria',
        Tu: 'começarias',
        'Ela/Ele/Você': 'começaria',
        Nós: 'começaríamos',
        'Eles/Elas/Vocēs': 'começariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'começando'
        },
        {
          form: 'particípio',
          portuguese: 'começado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'lavei',
        Tu: 'lavaste',
        'Ela/Ele/Você': 'lavou',
        Nós: 'lavámos',
        'Eles/Elas/Vocēs': 'lavaram'
      },
      imperfect: {
        Eu: 'lavava',
        Tu: 'lavavas',
        'Ela/Ele/Você': 'lavava',
        Nós: 'lavávamos',
        'Eles/Elas/Vocēs': 'lavavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'lavara',
        Tu: 'lavaras',
        'Ela/Ele/Você': 'lavara',
        Nós: 'laváramos',
        'Eles/Elas/Vocēs': 'lavaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'lavarei',
        Tu: 'lavarás',
        'Ela/Ele/Você': 'lavará',
        Nós: 'lavaremos',
        'Eles/Elas/Vocēs': 'lavarão'
      },
      subjuntivoPresente: {
        Eu: 'lave',
        Tu: 'laves',
        'Ela/Ele/Você': 'lave',
        Nós: 'lavemos',
        'Eles/Elas/Vocēs': 'lavem'
      },
      pretéritoImperfeito: {
        Eu: 'lavasse',
        Tu: 'lavasses',
        'Ela/Ele/Você': 'lavasse',
        Nós: 'lavássemos',
        'Eles/Elas/Vocēs': 'lavassem'
      },
      subjuntivoFuturo: {
        Eu: 'lavar',
        Tu: 'lavares',
        'Ela/Ele/Você': 'lavar',
        Nós: 'lavarmos',
        'Eles/Elas/Vocēs': 'lavarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'lavaria',
        Tu: 'lavarias',
        'Ela/Ele/Você': 'lavaria',
        Nós: 'lavaríamos',
        'Eles/Elas/Vocēs': 'lavariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'lavando'
        },
        {
          form: 'particípio',
          portuguese: 'lavado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'acabei',
        Tu: 'acabaste',
        'Ela/Ele/Você': 'acabou',
        Nós: 'acabámos',
        'Eles/Elas/Vocēs': 'acabaram'
      },
      imperfect: {
        Eu: 'acabava',
        Tu: 'acabavas',
        'Ela/Ele/Você': 'acabava',
        Nós: 'acabávamos',
        'Eles/Elas/Vocēs': 'acabavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'acabara',
        Tu: 'acabaras',
        'Ela/Ele/Você': 'acabara',
        Nós: 'acabáramos',
        'Eles/Elas/Vocēs': 'acabaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'acabarei',
        Tu: 'acabarás',
        'Ela/Ele/Você': 'acabará',
        Nós: 'acabaremos',
        'Eles/Elas/Vocēs': 'acabarão'
      },
      subjuntivoPresente: {
        Eu: 'acabe',
        Tu: 'acabes',
        'Ela/Ele/Você': 'acabe',
        Nós: 'acabemos',
        'Eles/Elas/Vocēs': 'acabem'
      },
      pretéritoImperfeito: {
        Eu: 'acabasse',
        Tu: 'acabasses',
        'Ela/Ele/Você': 'acabasse',
        Nós: 'acabássemos',
        'Eles/Elas/Vocēs': 'acabassem'
      },
      subjuntivoFuturo: {
        Eu: 'acabar',
        Tu: 'acabares',
        'Ela/Ele/Você': 'acabar',
        Nós: 'acabarmos',
        'Eles/Elas/Vocēs': 'acabarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'acabaria',
        Tu: 'acabarias',
        'Ela/Ele/Você': 'acabaria',
        Nós: 'acabaríamos',
        'Eles/Elas/Vocēs': 'acabariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'acabando'
        },
        {
          form: 'particípio',
          portuguese: 'acabado'
        }
      ]
    },
    {
      english: 'to call',
      infinitive: 'ligar',
      presentSimple: {
        Eu: 'ligo',
        Tu: 'ligas',
        'Ela/Ele/Você': 'liga',
        Nós: 'ligamos',
        'Eles/Elas/Vocēs': 'ligam'
      },
      pastPerfect: {
        Eu: 'liguei',
        Tu: 'ligaste',
        'Ela/Ele/Você': 'ligou',
        Nós: 'ligámos',
        'Eles/Elas/Vocēs': 'ligaram'
      },
      imperfect: {
        Eu: 'ligava',
        Tu: 'ligavas',
        'Ela/Ele/Você': 'ligava',
        Nós: 'ligávamos',
        'Eles/Elas/Vocēs': 'ligavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ligara',
        Tu: 'ligaras',
        'Ela/Ele/Você': 'ligara',
        Nós: 'ligáramos',
        'Eles/Elas/Vocēs': 'ligaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ligarei',
        Tu: 'ligarás',
        'Ela/Ele/Você': 'ligará',
        Nós: 'ligaremos',
        'Eles/Elas/Vocēs': 'ligarão'
      },
      subjuntivoPresente: {
        Eu: 'ligue',
        Tu: 'ligues',
        'Ela/Ele/Você': 'ligue',
        Nós: 'liguemos',
        'Eles/Elas/Vocēs': 'liguem'
      },
      pretéritoImperfeito: {
        Eu: 'ligasse',
        Tu: 'ligasses',
        'Ela/Ele/Você': 'ligasse',
        Nós: 'ligássemos',
        'Eles/Elas/Vocēs': 'ligassem'
      },
      subjuntivoFuturo: {
        Eu: 'ligar',
        Tu: 'ligares',
        'Ela/Ele/Você': 'ligar',
        Nós: 'ligarmos',
        'Eles/Elas/Vocēs': 'ligarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ligaria',
        Tu: 'ligarias',
        'Ela/Ele/Você': 'ligaria',
        Nós: 'ligaríamos',
        'Eles/Elas/Vocēs': 'ligariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ligando'
        },
        {
          form: 'particípio',
          portuguese: 'ligado'
        }
      ]
    },
    {
      english: 'to die',
      infinitive: 'morrer',
      presentSimple: {
        Eu: 'morro',
        Tu: 'morres',
        'Ela/Ele/Você': 'morre',
        Nós: 'morremos',
        'Eles/Elas/Vocēs': 'morrem'
      },
      pastPerfect: {
        Eu: 'morri',
        Tu: 'morreste',
        'Ela/Ele/Você': 'morreu',
        Nós: 'morremos',
        'Eles/Elas/Vocēs': 'morreram'
      },
      imperfect: {
        Eu: 'morria',
        Tu: 'morrias',
        'Ela/Ele/Você': 'morria',
        Nós: 'morríamos',
        'Eles/Elas/Vocēs': 'morriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'morrera',
        Tu: 'morreras',
        'Ela/Ele/Você': 'morrera',
        Nós: 'morrêramos',
        'Eles/Elas/Vocēs': 'morreram'
      },
      futuroDoPresenteSimples: {
        Eu: 'morrerei',
        Tu: 'morrerás',
        'Ela/Ele/Você': 'morrerá',
        Nós: 'morreremos',
        'Eles/Elas/Vocēs': 'morrerão'
      },
      subjuntivoPresente: {
        Eu: 'morra',
        Tu: 'morras',
        'Ela/Ele/Você': 'morra',
        Nós: 'morramos',
        'Eles/Elas/Vocēs': 'morram'
      },
      pretéritoImperfeito: {
        Eu: 'morresse',
        Tu: 'morresses',
        'Ela/Ele/Você': 'morresse',
        Nós: 'morrêssemos',
        'Eles/Elas/Vocēs': 'morressem'
      },
      subjuntivoFuturo: {
        Eu: 'morrer',
        Tu: 'morreres',
        'Ela/Ele/Você': 'morrer',
        Nós: 'morrermos',
        'Eles/Elas/Vocēs': 'morrerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'morreria',
        Tu: 'morrerias',
        'Ela/Ele/Você': 'morreria',
        Nós: 'morreríamos',
        'Eles/Elas/Vocēs': 'morreriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'morrendo'
        },
        {
          form: 'particípio',
          portuguese: 'morto'
        }
      ]
    },
    {
      english: 'to exist',
      infinitive: 'existir',
      presentSimple: {
        Eu: 'existo',
        Tu: 'existes',
        'Ela/Ele/Você': 'existe',
        Nós: 'existimos',
        'Eles/Elas/Vocēs': 'existem'
      },
      pastPerfect: {
        Eu: 'existi',
        Tu: 'exististe',
        'Ela/Ele/Você': 'existiu',
        Nós: 'existimos',
        'Eles/Elas/Vocēs': 'existiram'
      },
      imperfect: {
        Eu: 'existia',
        Tu: 'existias',
        'Ela/Ele/Você': 'existia',
        Nós: 'existíamos',
        'Eles/Elas/Vocēs': 'existiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'existira',
        Tu: 'existiras',
        'Ela/Ele/Você': 'existira',
        Nós: 'existíramos',
        'Eles/Elas/Vocēs': 'existiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'existirei',
        Tu: 'existirás',
        'Ela/Ele/Você': 'existirá',
        Nós: 'existiremos',
        'Eles/Elas/Vocēs': 'existirão'
      },
      subjuntivoPresente: {
        Eu: 'exista',
        Tu: 'existas',
        'Ela/Ele/Você': 'exista',
        Nós: 'existamos',
        'Eles/Elas/Vocēs': 'existam'
      },
      pretéritoImperfeito: {
        Eu: 'existisse',
        Tu: 'existisses',
        'Ela/Ele/Você': 'existisse',
        Nós: 'existíssemos',
        'Eles/Elas/Vocēs': 'existissem'
      },
      subjuntivoFuturo: {
        Eu: 'existir',
        Tu: 'existires',
        'Ela/Ele/Você': 'existir',
        Nós: 'existirmos',
        'Eles/Elas/Vocēs': 'existirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'existiria',
        Tu: 'existirias',
        'Ela/Ele/Você': 'existiria',
        Nós: 'existiríamos',
        'Eles/Elas/Vocēs': 'existiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'existindo'
        },
        {
          form: 'particípio',
          portuguese: 'existido'
        }
      ]
    },
    {
      english: 'to gain',
      infinitive: 'ganhar',
      presentSimple: {
        Eu: 'ganho',
        Tu: 'ganhas',
        'Ela/Ele/Você': 'ganha',
        Nós: 'ganhamos',
        'Eles/Elas/Vocēs': 'ganham'
      },
      pastPerfect: {
        Eu: 'ganhei',
        Tu: 'ganhaste',
        'Ela/Ele/Você': 'ganhou',
        Nós: 'ganhámos',
        'Eles/Elas/Vocēs': 'ganharam'
      },
      imperfect: {
        Eu: 'ganhava',
        Tu: 'ganhavas',
        'Ela/Ele/Você': 'ganhava',
        Nós: 'ganhávamos',
        'Eles/Elas/Vocēs': 'ganhavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ganhara',
        Tu: 'ganharas',
        'Ela/Ele/Você': 'ganhara',
        Nós: 'ganháramos',
        'Eles/Elas/Vocēs': 'ganharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'ganharei',
        Tu: 'ganharás',
        'Ela/Ele/Você': 'ganhará',
        Nós: 'ganharemos',
        'Eles/Elas/Vocēs': 'ganharão'
      },
      subjuntivoPresente: {
        Eu: 'ganhe',
        Tu: 'ganhes',
        'Ela/Ele/Você': 'ganhe',
        Nós: 'ganhemos',
        'Eles/Elas/Vocēs': 'ganhem'
      },
      pretéritoImperfeito: {
        Eu: 'ganhasse',
        Tu: 'ganhasses',
        'Ela/Ele/Você': 'ganhasse',
        Nós: 'ganhássemos',
        'Eles/Elas/Vocēs': 'ganhassem'
      },
      subjuntivoFuturo: {
        Eu: 'ganhar',
        Tu: 'ganhares',
        'Ela/Ele/Você': 'ganhar',
        Nós: 'ganharmos',
        'Eles/Elas/Vocēs': 'ganharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ganharia',
        Tu: 'ganharias',
        'Ela/Ele/Você': 'ganharia',
        Nós: 'ganharíamos',
        'Eles/Elas/Vocēs': 'ganhariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ganhando'
        },
        {
          form: 'particípio',
          portuguese: 'ganhado/ganho'
        }
      ]
    },
    {
      english: 'to keep',
      infinitive: 'manter',
      presentSimple: {
        Eu: 'mantenho',
        Tu: 'manténs',
        'Ela/Ele/Você': 'mantém',
        Nós: 'mantemos',
        'Eles/Elas/Vocēs': 'mantêm'
      },
      pastPerfect: {
        Eu: 'mantive',
        Tu: 'mantiveste',
        'Ela/Ele/Você': 'manteve',
        Nós: 'mantivemos',
        'Eles/Elas/Vocēs': 'mantiveram'
      },
      imperfect: {
        Eu: 'mantinha',
        Tu: 'mantinhas',
        'Ela/Ele/Você': 'mantinha',
        Nós: 'mantínhamos',
        'Eles/Elas/Vocēs': 'mantinham'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mantivera',
        Tu: 'mantiveras',
        'Ela/Ele/Você': 'mantivera',
        Nós: 'mantivéramos',
        'Eles/Elas/Vocēs': 'mantiveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'manterei',
        Tu: 'manterás',
        'Ela/Ele/Você': 'manterá',
        Nós: 'manteremos',
        'Eles/Elas/Vocēs': 'manterão'
      },
      subjuntivoPresente: {
        Eu: 'mantenha',
        Tu: 'mantenhas',
        'Ela/Ele/Você': 'mantenha',
        Nós: 'mantenhamos',
        'Eles/Elas/Vocēs': 'mantenham'
      },
      pretéritoImperfeito: {
        Eu: 'mantivesse',
        Tu: 'mantivesses',
        'Ela/Ele/Você': 'mantivesse',
        Nós: 'mantivéssemos',
        'Eles/Elas/Vocēs': 'mantivessem'
      },
      subjuntivoFuturo: {
        Eu: 'mantiver',
        Tu: 'mantiveres',
        'Ela/Ele/Você': 'mantiver',
        Nós: 'mantivermos',
        'Eles/Elas/Vocēs': 'mantiverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'manteria',
        Tu: 'manterias',
        'Ela/Ele/Você': 'manteria',
        Nós: 'manteríamos',
        'Eles/Elas/Vocēs': 'manteriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mantendo'
        },
        {
          form: 'particípio',
          portuguese: 'mantido'
        }
      ]
    },
    {
      english: 'to treat',
      infinitive: 'tratar',
      presentSimple: {
        Eu: 'trato',
        Tu: 'tratas',
        'Ela/Ele/Você': 'trata',
        Nós: 'tratamos',
        'Eles/Elas/Vocēs': 'tratam'
      },
      pastPerfect: {
        Eu: 'tratei',
        Tu: 'trataste',
        'Ela/Ele/Você': 'tratou',
        Nós: 'tratámos',
        'Eles/Elas/Vocēs': 'trataram'
      },
      imperfect: {
        Eu: 'tratava',
        Tu: 'tratavas',
        'Ela/Ele/Você': 'tratava',
        Nós: 'tratávamos',
        'Eles/Elas/Vocēs': 'tratavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tratara',
        Tu: 'trataras',
        'Ela/Ele/Você': 'tratara',
        Nós: 'tratáramos',
        'Eles/Elas/Vocēs': 'trataram'
      },
      futuroDoPresenteSimples: {
        Eu: 'tratarei',
        Tu: 'tratarás',
        'Ela/Ele/Você': 'tratará',
        Nós: 'trataremos',
        'Eles/Elas/Vocēs': 'tratarão'
      },
      subjuntivoPresente: {
        Eu: 'trate',
        Tu: 'trates',
        'Ela/Ele/Você': 'trate',
        Nós: 'tratemos',
        'Eles/Elas/Vocēs': 'tratem'
      },
      pretéritoImperfeito: {
        Eu: 'tratasse',
        Tu: 'tratasses',
        'Ela/Ele/Você': 'tratasse',
        Nós: 'tratássemos',
        'Eles/Elas/Vocēs': 'tratassem'
      },
      subjuntivoFuturo: {
        Eu: 'tratar',
        Tu: 'tratares',
        'Ela/Ele/Você': 'tratar',
        Nós: 'tratarmos',
        'Eles/Elas/Vocēs': 'tratarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'trataria',
        Tu: 'tratarias',
        'Ela/Ele/Você': 'trataria',
        Nós: 'trataríamos',
        'Eles/Elas/Vocēs': 'tratariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tratando'
        },
        {
          form: 'particípio',
          portuguese: 'tratado'
        }
      ]
    },
    {
      english: 'to discover',
      infinitive: 'descobrir',
      presentSimple: {
        Eu: 'descubro',
        Tu: 'descobres',
        'Ela/Ele/Você': 'descobre',
        Nós: 'descobrimos',
        'Eles/Elas/Vocēs': 'descobrem'
      },
      pastPerfect: {
        Eu: 'descobri',
        Tu: 'descobriste',
        'Ela/Ele/Você': 'descobriu',
        Nós: 'descobrimos',
        'Eles/Elas/Vocēs': 'descobriram'
      },
      imperfect: {
        Eu: 'descobria',
        Tu: 'descobrias',
        'Ela/Ele/Você': 'descobria',
        Nós: 'descobríamos',
        'Eles/Elas/Vocēs': 'descobriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'descobrira',
        Tu: 'descobriras',
        'Ela/Ele/Você': 'descobrira',
        Nós: 'descobríramos',
        'Eles/Elas/Vocēs': 'descobriram'
      },
      futuroDoPresenteSimples: {
        Eu: 'descobrirei',
        Tu: 'descobrirás',
        'Ela/Ele/Você': 'descobrirá',
        Nós: 'descobriremos',
        'Eles/Elas/Vocēs': 'descobrirão'
      },
      subjuntivoPresente: {
        Eu: 'descubra',
        Tu: 'descubras',
        'Ela/Ele/Você': 'descubra',
        Nós: 'descubramos',
        'Eles/Elas/Vocēs': 'descubram'
      },
      pretéritoImperfeito: {
        Eu: 'descobrisse',
        Tu: 'descobrisses',
        'Ela/Ele/Você': 'descobrisse',
        Nós: 'descobríssemos',
        'Eles/Elas/Vocēs': 'descobrissem'
      },
      subjuntivoFuturo: {
        Eu: 'descobrir',
        Tu: 'descobrires',
        'Ela/Ele/Você': 'descobrir',
        Nós: 'descobrirmos',
        'Eles/Elas/Vocēs': 'descobrirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'descobriria',
        Tu: 'descobririas',
        'Ela/Ele/Você': 'descobriria',
        Nós: 'descobriríamos',
        'Eles/Elas/Vocēs': 'descobririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'descobrindo'
        },
        {
          form: 'particípio',
          portuguese: 'descoberto'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'apanhei',
        Tu: 'apanhaste',
        'Ela/Ele/Você': 'apanhou',
        Nós: 'apanhámos',
        'Eles/Elas/Vocēs': 'apanharam'
      },
      imperfect: {
        Eu: 'apanhava',
        Tu: 'apanhavas',
        'Ela/Ele/Você': 'apanhava',
        Nós: 'apanhávamos',
        'Eles/Elas/Vocēs': 'apanhavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'apanhara',
        Tu: 'apanharas',
        'Ela/Ele/Você': 'apanhara',
        Nós: 'apanháramos',
        'Eles/Elas/Vocēs': 'apanharam'
      },
      futuroDoPresenteSimples: {
        Eu: 'apanharei',
        Tu: 'apanharás',
        'Ela/Ele/Você': 'apanhará',
        Nós: 'apanharemos',
        'Eles/Elas/Vocēs': 'apanharão'
      },
      subjuntivoPresente: {
        Eu: 'apanhe',
        Tu: 'apanhes',
        'Ela/Ele/Você': 'apanhe',
        Nós: 'apanhemos',
        'Eles/Elas/Vocēs': 'apanhem'
      },
      pretéritoImperfeito: {
        Eu: 'apanhasse',
        Tu: 'apanhasses',
        'Ela/Ele/Você': 'apanhasse',
        Nós: 'apanhássemos',
        'Eles/Elas/Vocēs': 'apanhassem'
      },
      subjuntivoFuturo: {
        Eu: 'apanhar',
        Tu: 'apanhares',
        'Ela/Ele/Você': 'apanhar',
        Nós: 'apanharmos',
        'Eles/Elas/Vocēs': 'apanharem'
      },
      futurodoPretéritoSimples: {
        Eu: 'apanharia',
        Tu: 'apanharias',
        'Ela/Ele/Você': 'apanharia',
        Nós: 'apanharíamos',
        'Eles/Elas/Vocēs': 'apanhariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'apanhando'
        },
        {
          form: 'particípio',
          portuguese: 'apanhado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'vesti',
        Tu: 'vestiste',
        'Ela/Ele/Você': 'vestiu',
        Nós: 'vestimos',
        'Eles/Elas/Vocēs': 'vestiram'
      },
      imperfect: {
        Eu: 'vestia',
        Tu: 'vestias',
        'Ela/Ele/Você': 'vestia',
        Nós: 'vestíamos',
        'Eles/Elas/Vocēs': 'vestiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'vestira',
        Tu: 'vestiras',
        'Ela/Ele/Você': 'vestira',
        Nós: 'vestíramos',
        'Eles/Elas/Vocēs': 'vestiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'vestirei',
        Tu: 'vestirás',
        'Ela/Ele/Você': 'vestirá',
        Nós: 'vestiremos',
        'Eles/Elas/Vocēs': 'vestirão'
      },
      subjuntivoPresente: {
        Eu: 'vista',
        Tu: 'vistas',
        'Ela/Ele/Você': 'vista',
        Nós: 'vistamos',
        'Eles/Elas/Vocēs': 'vistam'
      },
      pretéritoImperfeito: {
        Eu: 'vestisse',
        Tu: 'vestisses',
        'Ela/Ele/Você': 'vestisse',
        Nós: 'vestíssemos',
        'Eles/Elas/Vocēs': 'vestissem'
      },
      subjuntivoFuturo: {
        Eu: 'vestir',
        Tu: 'vestires',
        'Ela/Ele/Você': 'vestir',
        Nós: 'vestirmos',
        'Eles/Elas/Vocēs': 'vestirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'vestiria',
        Tu: 'vestirias',
        'Ela/Ele/Você': 'vestiria',
        Nós: 'vestiríamos',
        'Eles/Elas/Vocēs': 'vestiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'vestindo'
        },
        {
          form: 'particípio',
          portuguese: 'vestido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'dividi',
        Tu: 'dividiste',
        'Ela/Ele/Você': 'dividiu',
        Nós: 'dividimos',
        'Eles/Elas/Vocēs': 'dividiram'
      },
      imperfect: {
        Eu: 'dividia',
        Tu: 'dividias',
        'Ela/Ele/Você': 'dividia',
        Nós: 'dividíamos',
        'Eles/Elas/Vocēs': 'dividiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'dividira',
        Tu: 'dividiras',
        'Ela/Ele/Você': 'dividira',
        Nós: 'dividíramos',
        'Eles/Elas/Vocēs': 'dividiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'dividirei',
        Tu: 'dividirás',
        'Ela/Ele/Você': 'dividirá',
        Nós: 'dividiremos',
        'Eles/Elas/Vocēs': 'dividirão'
      },
      subjuntivoPresente: {
        Eu: 'divida',
        Tu: 'dividas',
        'Ela/Ele/Você': 'divida',
        Nós: 'dividamos',
        'Eles/Elas/Vocēs': 'dividam'
      },
      pretéritoImperfeito: {
        Eu: 'dividisse',
        Tu: 'dividisses',
        'Ela/Ele/Você': 'dividisse',
        Nós: 'dividíssemos',
        'Eles/Elas/Vocēs': 'dividissem'
      },
      subjuntivoFuturo: {
        Eu: 'dividir',
        Tu: 'dividires',
        'Ela/Ele/Você': 'dividir',
        Nós: 'dividirmos',
        'Eles/Elas/Vocēs': 'dividirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'dividiria',
        Tu: 'dividirias',
        'Ela/Ele/Você': 'dividiria',
        Nós: 'dividiríamos',
        'Eles/Elas/Vocēs': 'dividiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'dividindo'
        },
        {
          form: 'particípio',
          portuguese: 'dividido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'despi',
        Tu: 'despiste',
        'Ela/Ele/Você': 'despiu',
        Nós: 'despimos',
        'Eles/Elas/Vocēs': 'despiram'
      },
      imperfect: {
        Eu: 'despia',
        Tu: 'despias',
        'Ela/Ele/Você': 'despia',
        Nós: 'despíamos',
        'Eles/Elas/Vocēs': 'despiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'despira',
        Tu: 'despiras',
        'Ela/Ele/Você': 'despira',
        Nós: 'despíramos',
        'Eles/Elas/Vocēs': 'despiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'despirei',
        Tu: 'despirás',
        'Ela/Ele/Você': 'despirá',
        Nós: 'despiremos',
        'Eles/Elas/Vocēs': 'despirão'
      },
      subjuntivoPresente: {
        Eu: 'dispa',
        Tu: 'dispas',
        'Ela/Ele/Você': 'dispa',
        Nós: 'dispamos',
        'Eles/Elas/Vocēs': 'dispam'
      },
      pretéritoImperfeito: {
        Eu: 'despisse',
        Tu: 'despisses',
        'Ela/Ele/Você': 'despisse',
        Nós: 'despíssemos',
        'Eles/Elas/Vocēs': 'despissem'
      },
      subjuntivoFuturo: {
        Eu: 'despir',
        Tu: 'despires',
        'Ela/Ele/Você': 'despir',
        Nós: 'despirmos',
        'Eles/Elas/Vocēs': 'despirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'despiria',
        Tu: 'despirias',
        'Ela/Ele/Você': 'despiria',
        Nós: 'despiríamos',
        'Eles/Elas/Vocēs': 'despiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'despindo'
        },
        {
          form: 'particípio',
          portuguese: 'despido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'corrigi',
        Tu: 'corrigiste',
        'Ela/Ele/Você': 'corrigiu',
        Nós: 'corrigimos',
        'Eles/Elas/Vocēs': 'corrigiram'
      },
      imperfect: {
        Eu: 'corrigia',
        Tu: 'corrigias',
        'Ela/Ele/Você': 'corrigia',
        Nós: 'corrigíamos',
        'Eles/Elas/Vocēs': 'corrigiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'corrigira',
        Tu: 'corrigiras',
        'Ela/Ele/Você': 'corrigira',
        Nós: 'corrigíramos',
        'Eles/Elas/Vocēs': 'corrigiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'corrigirei',
        Tu: 'corrigirás',
        'Ela/Ele/Você': 'corrigirá',
        Nós: 'corrigiremos',
        'Eles/Elas/Vocēs': 'corrigirão'
      },
      subjuntivoPresente: {
        Eu: 'corrija',
        Tu: 'corrijas',
        'Ela/Ele/Você': 'corrija',
        Nós: 'corrijamos',
        'Eles/Elas/Vocēs': 'corrijam'
      },
      pretéritoImperfeito: {
        Eu: 'corrigisse',
        Tu: 'corrigisses',
        'Ela/Ele/Você': 'corrigisse',
        Nós: 'corrigíssemos',
        'Eles/Elas/Vocēs': 'corrigissem'
      },
      subjuntivoFuturo: {
        Eu: 'corrigir',
        Tu: 'corrigires',
        'Ela/Ele/Você': 'corrigir',
        Nós: 'corrigirmos',
        'Eles/Elas/Vocēs': 'corrigirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'corrigiria',
        Tu: 'corrigirias',
        'Ela/Ele/Você': 'corrigiria',
        Nós: 'corrigiríamos',
        'Eles/Elas/Vocēs': 'corrigiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'corrigindo'
        },
        {
          form: 'particípio',
          portuguese: 'corrigido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'decidi',
        Tu: 'decidiste',
        'Ela/Ele/Você': 'decidiu',
        Nós: 'decidimos',
        'Eles/Elas/Vocēs': 'decidiram'
      },
      imperfect: {
        Eu: 'decidia',
        Tu: 'decidias',
        'Ela/Ele/Você': 'decidia',
        Nós: 'decidíamos',
        'Eles/Elas/Vocēs': 'decidiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'decidira',
        Tu: 'decidiras',
        'Ela/Ele/Você': 'decidira',
        Nós: 'decidíramos',
        'Eles/Elas/Vocēs': 'decidiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'decidirei',
        Tu: 'decidirás',
        'Ela/Ele/Você': 'decidirá',
        Nós: 'decidiremos',
        'Eles/Elas/Vocēs': 'decidirão'
      },
      subjuntivoPresente: {
        Eu: 'decida',
        Tu: 'decidas',
        'Ela/Ele/Você': 'decida',
        Nós: 'decidamos',
        'Eles/Elas/Vocēs': 'decidam'
      },
      pretéritoImperfeito: {
        Eu: 'decidisse',
        Tu: 'decidisses',
        'Ela/Ele/Você': 'decidisse',
        Nós: 'decidíssemos',
        'Eles/Elas/Vocēs': 'decidissem'
      },
      subjuntivoFuturo: {
        Eu: 'decidir',
        Tu: 'decidires',
        'Ela/Ele/Você': 'decidir',
        Nós: 'decidirmos',
        'Eles/Elas/Vocēs': 'decidirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'decidiria',
        Tu: 'decidirias',
        'Ela/Ele/Você': 'decidiria',
        Nós: 'decidiríamos',
        'Eles/Elas/Vocēs': 'decidiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'decidindo'
        },
        {
          form: 'particípio',
          portuguese: 'decidido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'consegui',
        Tu: 'conseguiste',
        'Ela/Ele/Você': 'conseguiu',
        Nós: 'conseguimos',
        'Eles/Elas/Vocēs': 'conseguiram'
      },
      imperfect: {
        Eu: 'conseguia',
        Tu: 'conseguias',
        'Ela/Ele/Você': 'conseguia',
        Nós: 'conseguíamos',
        'Eles/Elas/Vocēs': 'conseguiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'conseguira',
        Tu: 'conseguiras',
        'Ela/Ele/Você': 'conseguira',
        Nós: 'conseguíramos',
        'Eles/Elas/Vocēs': 'conseguiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'conseguirei',
        Tu: 'conseguirás',
        'Ela/Ele/Você': 'conseguirá',
        Nós: 'conseguiremos',
        'Eles/Elas/Vocēs': 'conseguirão'
      },
      subjuntivoPresente: {
        Eu: 'consiga',
        Tu: 'consigas',
        'Ela/Ele/Você': 'consiga',
        Nós: 'consigamos',
        'Eles/Elas/Vocēs': 'consigam'
      },
      pretéritoImperfeito: {
        Eu: 'conseguisse',
        Tu: 'conseguisses',
        'Ela/Ele/Você': 'conseguisse',
        Nós: 'conseguíssemos',
        'Eles/Elas/Vocēs': 'conseguissem'
      },
      subjuntivoFuturo: {
        Eu: 'conseguir',
        Tu: 'conseguires',
        'Ela/Ele/Você': 'conseguir',
        Nós: 'conseguirmos',
        'Eles/Elas/Vocēs': 'conseguirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'conseguiria',
        Tu: 'conseguirias',
        'Ela/Ele/Você': 'conseguiria',
        Nós: 'conseguiríamos',
        'Eles/Elas/Vocēs': 'conseguiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'conseguindo'
        },
        {
          form: 'particípio',
          portuguese: 'conseguido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'senti',
        Tu: 'sentiste',
        'Ela/Ele/Você': 'sentiu',
        Nós: 'sentimos',
        'Eles/Elas/Vocēs': 'sentiram'
      },
      imperfect: {
        Eu: 'sentia',
        Tu: 'sentias',
        'Ela/Ele/Você': 'sentia',
        Nós: 'sentíamos',
        'Eles/Elas/Vocēs': 'sentiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sentira',
        Tu: 'sentiras',
        'Ela/Ele/Você': 'sentira',
        Nós: 'sentíramos',
        'Eles/Elas/Vocēs': 'sentiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sentirei',
        Tu: 'sentirás',
        'Ela/Ele/Você': 'sentirá',
        Nós: 'sentiremos',
        'Eles/Elas/Vocēs': 'sentirão'
      },
      subjuntivoPresente: {
        Eu: 'sinta',
        Tu: 'sintas',
        'Ela/Ele/Você': 'sinta',
        Nós: 'sintamos',
        'Eles/Elas/Vocēs': 'sintam'
      },
      pretéritoImperfeito: {
        Eu: 'sentisse',
        Tu: 'sentisses',
        'Ela/Ele/Você': 'sentisse',
        Nós: 'sentíssemos',
        'Eles/Elas/Vocēs': 'sentissem'
      },
      subjuntivoFuturo: {
        Eu: 'sentir',
        Tu: 'sentires',
        'Ela/Ele/Você': 'sentir',
        Nós: 'sentirmos',
        'Eles/Elas/Vocēs': 'sentirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sentiria',
        Tu: 'sentirias',
        'Ela/Ele/Você': 'sentiria',
        Nós: 'sentiríamos',
        'Eles/Elas/Vocēs': 'sentiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sentindo'
        },
        {
          form: 'particípio',
          portuguese: 'sentido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'traduzi',
        Tu: 'traduziste',
        'Ela/Ele/Você': 'traduziu',
        Nós: 'traduzimos',
        'Eles/Elas/Vocēs': 'traduziram'
      },
      imperfect: {
        Eu: 'traduzia',
        Tu: 'traduzias',
        'Ela/Ele/Você': 'traduzia',
        Nós: 'traduzíamos',
        'Eles/Elas/Vocēs': 'traduziam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'traduzira',
        Tu: 'traduziras',
        'Ela/Ele/Você': 'traduzira',
        Nós: 'traduzíramos',
        'Eles/Elas/Vocēs': 'traduziram'
      },
      futuroDoPresenteSimples: {
        Eu: 'traduzirei',
        Tu: 'traduzirás',
        'Ela/Ele/Você': 'traduzirá',
        Nós: 'traduziremos',
        'Eles/Elas/Vocēs': 'traduzirão'
      },
      subjuntivoPresente: {
        Eu: 'traduza',
        Tu: 'traduzas',
        'Ela/Ele/Você': 'traduza',
        Nós: 'traduzamos',
        'Eles/Elas/Vocēs': 'traduzam'
      },
      pretéritoImperfeito: {
        Eu: 'traduzisse',
        Tu: 'traduzisses',
        'Ela/Ele/Você': 'traduzisse',
        Nós: 'traduzíssemos',
        'Eles/Elas/Vocēs': 'traduzissem'
      },
      subjuntivoFuturo: {
        Eu: 'traduzir',
        Tu: 'traduzires',
        'Ela/Ele/Você': 'traduzir',
        Nós: 'traduzirmos',
        'Eles/Elas/Vocēs': 'traduzirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'traduziria',
        Tu: 'traduzirias',
        'Ela/Ele/Você': 'traduziria',
        Nós: 'traduziríamos',
        'Eles/Elas/Vocēs': 'traduziriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'traduzindo'
        },
        {
          form: 'particípio',
          portuguese: 'traduzido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'parti',
        Tu: 'partiste',
        'Ela/Ele/Você': 'partiu',
        Nós: 'partimos',
        'Eles/Elas/Vocēs': 'partiram'
      },
      imperfect: {
        Eu: 'partia',
        Tu: 'partias',
        'Ela/Ele/Você': 'partia',
        Nós: 'partíamos',
        'Eles/Elas/Vocēs': 'partiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'partira',
        Tu: 'partiras',
        'Ela/Ele/Você': 'partira',
        Nós: 'partíramos',
        'Eles/Elas/Vocēs': 'partiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'partirei',
        Tu: 'partirás',
        'Ela/Ele/Você': 'partirá',
        Nós: 'partiremos',
        'Eles/Elas/Vocēs': 'partirão'
      },
      subjuntivoPresente: {
        Eu: 'parta',
        Tu: 'partas',
        'Ela/Ele/Você': 'parta',
        Nós: 'partamos',
        'Eles/Elas/Vocēs': 'partam'
      },
      pretéritoImperfeito: {
        Eu: 'partisse',
        Tu: 'partisses',
        'Ela/Ele/Você': 'partisse',
        Nós: 'partíssemos',
        'Eles/Elas/Vocēs': 'partissem'
      },
      subjuntivoFuturo: {
        Eu: 'partir',
        Tu: 'partires',
        'Ela/Ele/Você': 'partir',
        Nós: 'partirmos',
        'Eles/Elas/Vocēs': 'partirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'partiria',
        Tu: 'partirias',
        'Ela/Ele/Você': 'partiria',
        Nós: 'partiríamos',
        'Eles/Elas/Vocēs': 'partiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'partindo'
        },
        {
          form: 'particípio',
          portuguese: 'partido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'preferi',
        Tu: 'preferiste',
        'Ela/Ele/Você': 'preferiu',
        Nós: 'preferimos',
        'Eles/Elas/Vocēs': 'preferiram'
      },
      imperfect: {
        Eu: 'preferia',
        Tu: 'preferias',
        'Ela/Ele/Você': 'preferia',
        Nós: 'preferíamos',
        'Eles/Elas/Vocēs': 'preferiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'preferira',
        Tu: 'preferiras',
        'Ela/Ele/Você': 'preferira',
        Nós: 'preferíramos',
        'Eles/Elas/Vocēs': 'preferiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'preferirei',
        Tu: 'preferirás',
        'Ela/Ele/Você': 'preferirá',
        Nós: 'preferiremos',
        'Eles/Elas/Vocēs': 'preferirão'
      },
      subjuntivoPresente: {
        Eu: 'prefira',
        Tu: 'prefiras',
        'Ela/Ele/Você': 'prefira',
        Nós: 'prefiramos',
        'Eles/Elas/Vocēs': 'prefiram'
      },
      pretéritoImperfeito: {
        Eu: 'preferisse',
        Tu: 'preferisses',
        'Ela/Ele/Você': 'preferisse',
        Nós: 'preferíssemos',
        'Eles/Elas/Vocēs': 'preferissem'
      },
      subjuntivoFuturo: {
        Eu: 'preferir',
        Tu: 'preferires',
        'Ela/Ele/Você': 'preferir',
        Nós: 'preferirmos',
        'Eles/Elas/Vocēs': 'preferirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'preferiria',
        Tu: 'preferirias',
        'Ela/Ele/Você': 'preferiria',
        Nós: 'preferiríamos',
        'Eles/Elas/Vocēs': 'prefeririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'preferindo'
        },
        {
          form: 'particípio',
          portuguese: 'preferido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'discuti',
        Tu: 'discutiste',
        'Ela/Ele/Você': 'discutiu',
        Nós: 'discutimos',
        'Eles/Elas/Vocēs': 'discutiram'
      },
      imperfect: {
        Eu: 'discutia',
        Tu: 'discutias',
        'Ela/Ele/Você': 'discutia',
        Nós: 'discutíamos',
        'Eles/Elas/Vocēs': 'discutiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'discutira',
        Tu: 'discutiras',
        'Ela/Ele/Você': 'discutira',
        Nós: 'discutíramos',
        'Eles/Elas/Vocēs': 'discutiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'discutirei',
        Tu: 'discutirás',
        'Ela/Ele/Você': 'discutirá',
        Nós: 'discutiremos',
        'Eles/Elas/Vocēs': 'discutirão'
      },
      subjuntivoPresente: {
        Eu: 'discuta',
        Tu: 'discutas',
        'Ela/Ele/Você': 'discuta',
        Nós: 'discutamos',
        'Eles/Elas/Vocēs': 'discutam'
      },
      pretéritoImperfeito: {
        Eu: 'discutisse',
        Tu: 'discutisses',
        'Ela/Ele/Você': 'discutisse',
        Nós: 'discutíssemos',
        'Eles/Elas/Vocēs': 'discutissem'
      },
      subjuntivoFuturo: {
        Eu: 'discutir',
        Tu: 'discutires',
        'Ela/Ele/Você': 'discutir',
        Nós: 'discutirmos',
        'Eles/Elas/Vocēs': 'discutirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'discutiria',
        Tu: 'discutirias',
        'Ela/Ele/Você': 'discutiria',
        Nós: 'discutiríamos',
        'Eles/Elas/Vocēs': 'discutiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'discutindo'
        },
        {
          form: 'particípio',
          portuguese: 'discutido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'conduzi',
        Tu: 'conduziste',
        'Ela/Ele/Você': 'conduziu',
        Nós: 'conduzimos',
        'Eles/Elas/Vocēs': 'conduziram'
      },
      imperfect: {
        Eu: 'conduzia',
        Tu: 'conduzias',
        'Ela/Ele/Você': 'conduzia',
        Nós: 'conduzíamos',
        'Eles/Elas/Vocēs': 'conduziam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'conduzira',
        Tu: 'conduziras',
        'Ela/Ele/Você': 'conduzira',
        Nós: 'conduzíramos',
        'Eles/Elas/Vocēs': 'conduziram'
      },
      futuroDoPresenteSimples: {
        Eu: 'conduzirei',
        Tu: 'conduzirás',
        'Ela/Ele/Você': 'conduzirá',
        Nós: 'conduziremos',
        'Eles/Elas/Vocēs': 'conduzirão'
      },
      subjuntivoPresente: {
        Eu: 'conduza',
        Tu: 'conduzas',
        'Ela/Ele/Você': 'conduza',
        Nós: 'conduzamos',
        'Eles/Elas/Vocēs': 'conduzam'
      },
      pretéritoImperfeito: {
        Eu: 'conduzisse',
        Tu: 'conduzisses',
        'Ela/Ele/Você': 'conduzisse',
        Nós: 'conduzíssemos',
        'Eles/Elas/Vocēs': 'conduzissem'
      },
      subjuntivoFuturo: {
        Eu: 'conduzir',
        Tu: 'conduzires',
        'Ela/Ele/Você': 'conduzir',
        Nós: 'conduzirmos',
        'Eles/Elas/Vocēs': 'conduzirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'conduziria',
        Tu: 'conduzirias',
        'Ela/Ele/Você': 'conduziria',
        Nós: 'conduziríamos',
        'Eles/Elas/Vocēs': 'conduziriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'conduzindo'
        },
        {
          form: 'particípio',
          portuguese: 'conduzido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'permiti',
        Tu: 'permitiste',
        'Ela/Ele/Você': 'permitiu',
        Nós: 'permitimos',
        'Eles/Elas/Vocēs': 'permitiram'
      },
      imperfect: {
        Eu: 'permitia',
        Tu: 'permitias',
        'Ela/Ele/Você': 'permitia',
        Nós: 'permitíamos',
        'Eles/Elas/Vocēs': 'permitiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'permitira',
        Tu: 'permitiras',
        'Ela/Ele/Você': 'permitira',
        Nós: 'permitíramos',
        'Eles/Elas/Vocēs': 'permitiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'permitirei',
        Tu: 'permitirás',
        'Ela/Ele/Você': 'permitirá',
        Nós: 'permitiremos',
        'Eles/Elas/Vocēs': 'permitirão'
      },
      subjuntivoPresente: {
        Eu: 'permita',
        Tu: 'permitas',
        'Ela/Ele/Você': 'permita',
        Nós: 'permitamos',
        'Eles/Elas/Vocēs': 'permitam'
      },
      pretéritoImperfeito: {
        Eu: 'permitisse',
        Tu: 'permitisses',
        'Ela/Ele/Você': 'permitisse',
        Nós: 'permitíssemos',
        'Eles/Elas/Vocēs': 'permitissem'
      },
      subjuntivoFuturo: {
        Eu: 'permitir',
        Tu: 'permitires',
        'Ela/Ele/Você': 'permitir',
        Nós: 'permitirmos',
        'Eles/Elas/Vocēs': 'permitirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'permitiria',
        Tu: 'permitirias',
        'Ela/Ele/Você': 'permitiria',
        Nós: 'permitiríamos',
        'Eles/Elas/Vocēs': 'permitiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'permitindo'
        },
        {
          form: 'particípio',
          portuguese: 'permitido'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'organizei',
        Tu: 'organizaste',
        'Ela/Ele/Você': 'organizou',
        Nós: 'organizámos',
        'Eles/Elas/Vocēs': 'organizaram'
      },
      imperfect: {
        Eu: 'organizava',
        Tu: 'organizavas',
        'Ela/Ele/Você': 'organizava',
        Nós: 'organizávamos',
        'Eles/Elas/Vocēs': 'organizavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'organizara',
        Tu: 'organizaras',
        'Ela/Ele/Você': 'organizara',
        Nós: 'organizáramos',
        'Eles/Elas/Vocēs': 'organizaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'organizarei',
        Tu: 'organizarás',
        'Ela/Ele/Você': 'organizará',
        Nós: 'organizaremos',
        'Eles/Elas/Vocēs': 'organizarão'
      },
      subjuntivoPresente: {
        Eu: 'organize',
        Tu: 'organizes',
        'Ela/Ele/Você': 'organize',
        Nós: 'organizemos',
        'Eles/Elas/Vocēs': 'organizem'
      },
      pretéritoImperfeito: {
        Eu: 'organizasse',
        Tu: 'organizasses',
        'Ela/Ele/Você': 'organizasse',
        Nós: 'organizássemos',
        'Eles/Elas/Vocēs': 'organizassem'
      },
      subjuntivoFuturo: {
        Eu: 'organizar',
        Tu: 'organizares',
        'Ela/Ele/Você': 'organizar',
        Nós: 'organizarmos',
        'Eles/Elas/Vocēs': 'organizarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'organizaria',
        Tu: 'organizarias',
        'Ela/Ele/Você': 'organizaria',
        Nós: 'organizaríamos',
        'Eles/Elas/Vocēs': 'organizariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'organizando'
        },
        {
          form: 'particípio',
          portuguese: 'organizado'
        }
      ]
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
      },
      pastPerfect: {
        Eu: 'limpei',
        Tu: 'limpaste',
        'Ela/Ele/Você': 'limpou',
        Nós: 'limpámos',
        'Eles/Elas/Vocēs': 'limparam'
      },
      imperfect: {
        Eu: 'limpava',
        Tu: 'limpavas',
        'Ela/Ele/Você': 'limpava',
        Nós: 'limpávamos',
        'Eles/Elas/Vocēs': 'limpavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'limpara',
        Tu: 'limparas',
        'Ela/Ele/Você': 'limpara',
        Nós: 'limpáramos',
        'Eles/Elas/Vocēs': 'limparam'
      },
      futuroDoPresenteSimples: {
        Eu: 'limparei',
        Tu: 'limparás',
        'Ela/Ele/Você': 'limpará',
        Nós: 'limparemos',
        'Eles/Elas/Vocēs': 'limparão'
      },
      subjuntivoPresente: {
        Eu: 'limpe',
        Tu: 'limpes',
        'Ela/Ele/Você': 'limpe',
        Nós: 'limpemos',
        'Eles/Elas/Vocēs': 'limpem'
      },
      pretéritoImperfeito: {
        Eu: 'limpasse',
        Tu: 'limpasses',
        'Ela/Ele/Você': 'limpasse',
        Nós: 'limpássemos',
        'Eles/Elas/Vocēs': 'limpassem'
      },
      subjuntivoFuturo: {
        Eu: 'limpar',
        Tu: 'limpares',
        'Ela/Ele/Você': 'limpar',
        Nós: 'limparmos',
        'Eles/Elas/Vocēs': 'limparem'
      },
      futurodoPretéritoSimples: {
        Eu: 'limparia',
        Tu: 'limparias',
        'Ela/Ele/Você': 'limparia',
        Nós: 'limparíamos',
        'Eles/Elas/Vocēs': 'limpariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'limpando'
        },
        {
          form: 'particípio',
          portuguese: 'limpado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'punha',
        Tu: 'punhas',
        'Ela/Ele/Você': 'punha',
        Nós: 'púnhamos',
        'Eles/Elas/Vocēs': 'punham'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pusera',
        Tu: 'puseras',
        'Ela/Ele/Você': 'pusera',
        Nós: 'puséramos',
        'Eles/Elas/Vocēs': 'puseram'
      },
      futuroDoPresenteSimples: {
        Eu: 'porei',
        Tu: 'porás',
        'Ela/Ele/Você': 'porá',
        Nós: 'poremos',
        'Eles/Elas/Vocēs': 'porão'
      },
      subjuntivoPresente: {
        Eu: 'ponha',
        Tu: 'ponhas',
        'Ela/Ele/Você': 'ponha',
        Nós: 'ponhamos',
        'Eles/Elas/Vocēs': 'ponham'
      },
      pretéritoImperfeito: {
        Eu: 'pusesse',
        Tu: 'pusesses',
        'Ela/Ele/Você': 'pusesse',
        Nós: 'puséssemos',
        'Eles/Elas/Vocēs': 'pusessem'
      },
      subjuntivoFuturo: {
        Eu: 'puser',
        Tu: 'puseres',
        'Ela/Ele/Você': 'puser',
        Nós: 'pusermos',
        'Eles/Elas/Vocēs': 'puserem'
      },
      futurodoPretéritoSimples: {
        Eu: 'poria',
        Tu: 'porias',
        'Ela/Ele/Você': 'poria',
        Nós: 'poríamos',
        'Eles/Elas/Vocēs': 'poriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'pondo'
        },
        {
          form: 'particípio',
          portuguese: 'posto'
        }
      ]
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
      },
      imperfect: {
        Eu: 'cuidava',
        Tu: 'cuidavas',
        'Ela/Ele/Você': 'cuidava',
        Nós: 'cuidávamos',
        'Eles/Elas/Vocēs': 'cuidavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'cuidara',
        Tu: 'cuidaras',
        'Ela/Ele/Você': 'cuidara',
        Nós: 'cuidáramos',
        'Eles/Elas/Vocēs': 'cuidaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'cuidarei',
        Tu: 'cuidarás',
        'Ela/Ele/Você': 'cuidará',
        Nós: 'cuidaremos',
        'Eles/Elas/Vocēs': 'cuidarão'
      },
      subjuntivoPresente: {
        Eu: 'cuide',
        Tu: 'cuides',
        'Ela/Ele/Você': 'cuide',
        Nós: 'cuidemos',
        'Eles/Elas/Vocēs': 'cuidem'
      },
      pretéritoImperfeito: {
        Eu: 'cuidasse',
        Tu: 'cuidasses',
        'Ela/Ele/Você': 'cuidasse',
        Nós: 'cuidássemos',
        'Eles/Elas/Vocēs': 'cuidassem'
      },
      subjuntivoFuturo: {
        Eu: 'cuidar',
        Tu: 'cuidares',
        'Ela/Ele/Você': 'cuidar',
        Nós: 'cuidarmos',
        'Eles/Elas/Vocēs': 'cuidarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'cuidaria',
        Tu: 'cuidarias',
        'Ela/Ele/Você': 'cuidaria',
        Nós: 'cuidaríamos',
        'Eles/Elas/Vocēs': 'cuidariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'cuidando'
        },
        {
          form: 'particípio',
          portuguese: 'cuidado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'mandava',
        Tu: 'mandavas',
        'Ela/Ele/Você': 'mandava',
        Nós: 'mandávamos',
        'Eles/Elas/Vocēs': 'mandavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mandara',
        Tu: 'mandaras',
        'Ela/Ele/Você': 'mandara',
        Nós: 'mandáramos',
        'Eles/Elas/Vocēs': 'mandaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'mandarei',
        Tu: 'mandarás',
        'Ela/Ele/Você': 'mandará',
        Nós: 'mandaremos',
        'Eles/Elas/Vocēs': 'mandarão'
      },
      subjuntivoPresente: {
        Eu: 'mande',
        Tu: 'mandes',
        'Ela/Ele/Você': 'mande',
        Nós: 'mandemos',
        'Eles/Elas/Vocēs': 'mandem'
      },
      pretéritoImperfeito: {
        Eu: 'mandasse',
        Tu: 'mandasses',
        'Ela/Ele/Você': 'mandasse',
        Nós: 'mandássemos',
        'Eles/Elas/Vocēs': 'mandassem'
      },
      subjuntivoFuturo: {
        Eu: 'mandar',
        Tu: 'mandares',
        'Ela/Ele/Você': 'mandar',
        Nós: 'mandarmos',
        'Eles/Elas/Vocēs': 'mandarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mandaria',
        Tu: 'mandarias',
        'Ela/Ele/Você': 'mandaria',
        Nós: 'mandaríamos',
        'Eles/Elas/Vocēs': 'mandariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mandando'
        },
        {
          form: 'particípio',
          portuguese: 'mandado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'enchia',
        Tu: 'enchias',
        'Ela/Ele/Você': 'enchia',
        Nós: 'enchíamos',
        'Eles/Elas/Vocēs': 'enchiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'enchera',
        Tu: 'encheras',
        'Ela/Ele/Você': 'enchera',
        Nós: 'enchêramos',
        'Eles/Elas/Vocēs': 'encheram'
      },
      futuroDoPresenteSimples: {
        Eu: 'encherei',
        Tu: 'encherás',
        'Ela/Ele/Você': 'encherá',
        Nós: 'encheremos',
        'Eles/Elas/Vocēs': 'encherão'
      },
      subjuntivoPresente: {
        Eu: 'encha',
        Tu: 'enchas',
        'Ela/Ele/Você': 'encha',
        Nós: 'enchamos',
        'Eles/Elas/Vocēs': 'encham'
      },
      pretéritoImperfeito: {
        Eu: 'enchesse',
        Tu: 'enchesses',
        'Ela/Ele/Você': 'enchesse',
        Nós: 'enchêssemos',
        'Eles/Elas/Vocēs': 'enchessem'
      },
      subjuntivoFuturo: {
        Eu: 'encher',
        Tu: 'encheres',
        'Ela/Ele/Você': 'encher',
        Nós: 'enchermos',
        'Eles/Elas/Vocēs': 'encherem'
      },
      futurodoPretéritoSimples: {
        Eu: 'encheria',
        Tu: 'encherias',
        'Ela/Ele/Você': 'encheria',
        Nós: 'encheríamos',
        'Eles/Elas/Vocēs': 'encheriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'enchendo'
        },
        {
          form: 'particípio',
          portuguese: 'enchido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'pegava',
        Tu: 'pegavas',
        'Ela/Ele/Você': 'pegava',
        Nós: 'pegávamos',
        'Eles/Elas/Vocēs': 'pegavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pegara',
        Tu: 'pegaras',
        'Ela/Ele/Você': 'pegara',
        Nós: 'pegáramos',
        'Eles/Elas/Vocēs': 'pegaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'pegarei',
        Tu: 'pegarás',
        'Ela/Ele/Você': 'pegará',
        Nós: 'pegaremos',
        'Eles/Elas/Vocēs': 'pegarão'
      },
      subjuntivoPresente: {
        Eu: 'pegue',
        Tu: 'pegues',
        'Ela/Ele/Você': 'pegue',
        Nós: 'peguemos',
        'Eles/Elas/Vocēs': 'peguem'
      },
      pretéritoImperfeito: {
        Eu: 'pegasse',
        Tu: 'pegasses',
        'Ela/Ele/Você': 'pegasse',
        Nós: 'pegássemos',
        'Eles/Elas/Vocēs': 'pegassem'
      },
      subjuntivoFuturo: {
        Eu: 'pegar',
        Tu: 'pegares',
        'Ela/Ele/Você': 'pegar',
        Nós: 'pegarmos',
        'Eles/Elas/Vocēs': 'pegarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pegaria',
        Tu: 'pegarias',
        'Ela/Ele/Você': 'pegaria',
        Nós: 'pegaríamos',
        'Eles/Elas/Vocēs': 'pegariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'pegando'
        },
        {
          form: 'particípio',
          portuguese: 'pegado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'tocava',
        Tu: 'tocavas',
        'Ela/Ele/Você': 'tocava',
        Nós: 'tocávamos',
        'Eles/Elas/Vocēs': 'tocavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tocara',
        Tu: 'tocaras',
        'Ela/Ele/Você': 'tocara',
        Nós: 'tocáramos',
        'Eles/Elas/Vocēs': 'tocaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'tocarei',
        Tu: 'tocarás',
        'Ela/Ele/Você': 'tocará',
        Nós: 'tocaremos',
        'Eles/Elas/Vocēs': 'tocarão'
      },
      subjuntivoPresente: {
        Eu: 'toque',
        Tu: 'toques',
        'Ela/Ele/Você': 'toque',
        Nós: 'toquemos',
        'Eles/Elas/Vocēs': 'toquem'
      },
      pretéritoImperfeito: {
        Eu: 'tocasse',
        Tu: 'tocasses',
        'Ela/Ele/Você': 'tocasse',
        Nós: 'tocássemos',
        'Eles/Elas/Vocēs': 'tocassem'
      },
      subjuntivoFuturo: {
        Eu: 'tocar',
        Tu: 'tocares',
        'Ela/Ele/Você': 'tocar',
        Nós: 'tocarmos',
        'Eles/Elas/Vocēs': 'tocarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'tocaria',
        Tu: 'tocarias',
        'Ela/Ele/Você': 'tocaria',
        Nós: 'tocaríamos',
        'Eles/Elas/Vocēs': 'tocariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tocando'
        },
        {
          form: 'particípio',
          portuguese: 'tocado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'ajudava',
        Tu: 'ajudavas',
        'Ela/Ele/Você': 'ajudava',
        Nós: 'ajudávamos',
        'Eles/Elas/Vocēs': 'ajudavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ajudara',
        Tu: 'ajudaras',
        'Ela/Ele/Você': 'ajudara',
        Nós: 'ajudáramos',
        'Eles/Elas/Vocēs': 'ajudaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ajudarei',
        Tu: 'ajudarás',
        'Ela/Ele/Você': 'ajudará',
        Nós: 'ajudaremos',
        'Eles/Elas/Vocēs': 'ajudarão'
      },
      subjuntivoPresente: {
        Eu: 'ajude',
        Tu: 'ajudes',
        'Ela/Ele/Você': 'ajude',
        Nós: 'ajudemos',
        'Eles/Elas/Vocēs': 'ajudem'
      },
      pretéritoImperfeito: {
        Eu: 'ajudasse',
        Tu: 'ajudasses',
        'Ela/Ele/Você': 'ajudasse',
        Nós: 'ajudássemos',
        'Eles/Elas/Vocēs': 'ajudassem'
      },
      subjuntivoFuturo: {
        Eu: 'ajudar',
        Tu: 'ajudares',
        'Ela/Ele/Você': 'ajudar',
        Nós: 'ajudarmos',
        'Eles/Elas/Vocēs': 'ajudarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ajudaria',
        Tu: 'ajudarias',
        'Ela/Ele/Você': 'ajudaria',
        Nós: 'ajudaríamos',
        'Eles/Elas/Vocēs': 'ajudariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ajudando'
        },
        {
          form: 'particípio',
          portuguese: 'ajudado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'passeava',
        Tu: 'passeavas',
        'Ela/Ele/Você': 'passeava',
        Nós: 'passeávamos',
        'Eles/Elas/Vocēs': 'passeavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'passeara',
        Tu: 'passearas',
        'Ela/Ele/Você': 'passeara',
        Nós: 'passeáramos',
        'Eles/Elas/Vocēs': 'passearam'
      },
      futuroDoPresenteSimples: {
        Eu: 'passearei',
        Tu: 'passearás',
        'Ela/Ele/Você': 'passeará',
        Nós: 'passearemos',
        'Eles/Elas/Vocēs': 'passearão'
      },
      subjuntivoPresente: {
        Eu: 'passeie',
        Tu: 'passeies',
        'Ela/Ele/Você': 'passeie',
        Nós: 'passeemos',
        'Eles/Elas/Vocēs': 'passeiem'
      },
      pretéritoImperfeito: {
        Eu: 'passeasse',
        Tu: 'passeasses',
        'Ela/Ele/Você': 'passeasse',
        Nós: 'passeássemos',
        'Eles/Elas/Vocēs': 'passeassem'
      },
      subjuntivoFuturo: {
        Eu: 'passear',
        Tu: 'passeares',
        'Ela/Ele/Você': 'passear',
        Nós: 'passearmos',
        'Eles/Elas/Vocēs': 'passearem'
      },
      futurodoPretéritoSimples: {
        Eu: 'passearia',
        Tu: 'passearias',
        'Ela/Ele/Você': 'passearia',
        Nós: 'passearíamos',
        'Eles/Elas/Vocēs': 'passeariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'passeando'
        },
        {
          form: 'particípio',
          portuguese: 'passeado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'acreditava',
        Tu: 'acreditavas',
        'Ela/Ele/Você': 'acreditava',
        Nós: 'acreditávamos',
        'Eles/Elas/Vocēs': 'acreditavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'acreditara',
        Tu: 'acreditaras',
        'Ela/Ele/Você': 'acreditara',
        Nós: 'acreditáramos',
        'Eles/Elas/Vocēs': 'acreditaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'acreditarei',
        Tu: 'acreditarás',
        'Ela/Ele/Você': 'acreditará',
        Nós: 'acreditaremos',
        'Eles/Elas/Vocēs': 'acreditarão'
      },
      subjuntivoPresente: {
        Eu: 'acredite',
        Tu: 'acredites',
        'Ela/Ele/Você': 'acredite',
        Nós: 'acreditemos',
        'Eles/Elas/Vocēs': 'acreditem'
      },
      pretéritoImperfeito: {
        Eu: 'acreditasse',
        Tu: 'acreditasses',
        'Ela/Ele/Você': 'acreditasse',
        Nós: 'acreditássemos',
        'Eles/Elas/Vocēs': 'acreditassem'
      },
      subjuntivoFuturo: {
        Eu: 'acreditar',
        Tu: 'acreditares',
        'Ela/Ele/Você': 'acreditar',
        Nós: 'acreditarmos',
        'Eles/Elas/Vocēs': 'acreditarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'acreditaria',
        Tu: 'acreditarias',
        'Ela/Ele/Você': 'acreditaria',
        Nós: 'acreditaríamos',
        'Eles/Elas/Vocēs': 'acreditariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'acreditando'
        },
        {
          form: 'particípio',
          portuguese: 'acreditado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'acontecia',
        Tu: 'acontecias',
        'Ela/Ele/Você': 'acontecia',
        Nós: 'acontecíamos',
        'Eles/Elas/Vocēs': 'aconteciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'acontecera',
        Tu: 'aconteceras',
        'Ela/Ele/Você': 'acontecera',
        Nós: 'acontecêramos',
        'Eles/Elas/Vocēs': 'aconteceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'acontecerei',
        Tu: 'acontecerás',
        'Ela/Ele/Você': 'acontecerá',
        Nós: 'aconteceremos',
        'Eles/Elas/Vocēs': 'acontecerão'
      },
      subjuntivoPresente: {
        Eu: 'aconteça',
        Tu: 'aconteças',
        'Ela/Ele/Você': 'aconteça',
        Nós: 'aconteçamos',
        'Eles/Elas/Vocēs': 'aconteçam'
      },
      pretéritoImperfeito: {
        Eu: 'acontecesse',
        Tu: 'acontecesses',
        'Ela/Ele/Você': 'acontecesse',
        Nós: 'acontecêssemos',
        'Eles/Elas/Vocēs': 'acontecessem'
      },
      subjuntivoFuturo: {
        Eu: 'acontecer',
        Tu: 'aconteceres',
        'Ela/Ele/Você': 'acontecer',
        Nós: 'acontecermos',
        'Eles/Elas/Vocēs': 'acontecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'aconteceria',
        Tu: 'acontecerias',
        'Ela/Ele/Você': 'aconteceria',
        Nós: 'aconteceríamos',
        'Eles/Elas/Vocēs': 'aconteceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'acontecendo'
        },
        {
          form: 'particípio',
          portuguese: 'acontecido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'adorava',
        Tu: 'adoravas',
        'Ela/Ele/Você': 'adorava',
        Nós: 'adorávamos',
        'Eles/Elas/Vocēs': 'adoravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'adorara',
        Tu: 'adoraras',
        'Ela/Ele/Você': 'adorara',
        Nós: 'adoráramos',
        'Eles/Elas/Vocēs': 'adoraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'adorarei',
        Tu: 'adorarás',
        'Ela/Ele/Você': 'adorará',
        Nós: 'adoraremos',
        'Eles/Elas/Vocēs': 'adorarão'
      },
      subjuntivoPresente: {
        Eu: 'adore',
        Tu: 'adores',
        'Ela/Ele/Você': 'adore',
        Nós: 'adoremos',
        'Eles/Elas/Vocēs': 'adorem'
      },
      pretéritoImperfeito: {
        Eu: 'adorasse',
        Tu: 'adorasses',
        'Ela/Ele/Você': 'adorasse',
        Nós: 'adorássemos',
        'Eles/Elas/Vocēs': 'adorassem'
      },
      subjuntivoFuturo: {
        Eu: 'adorar',
        Tu: 'adorares',
        'Ela/Ele/Você': 'adorar',
        Nós: 'adorarmos',
        'Eles/Elas/Vocēs': 'adorarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'adoraria',
        Tu: 'adorarias',
        'Ela/Ele/Você': 'adoraria',
        Nós: 'adoraríamos',
        'Eles/Elas/Vocēs': 'adorariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'adorando'
        },
        {
          form: 'particípio',
          portuguese: 'adorado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'alcançava',
        Tu: 'alcançavas',
        'Ela/Ele/Você': 'alcançava',
        Nós: 'alcançávamos',
        'Eles/Elas/Vocēs': 'alcançavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'alcançara',
        Tu: 'alcançaras',
        'Ela/Ele/Você': 'alcançara',
        Nós: 'alcançáramos',
        'Eles/Elas/Vocēs': 'alcançaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'alcançarei',
        Tu: 'alcançarás',
        'Ela/Ele/Você': 'alcançará',
        Nós: 'alcançaremos',
        'Eles/Elas/Vocēs': 'alcançarão'
      },
      subjuntivoPresente: {
        Eu: 'alcance',
        Tu: 'alcances',
        'Ela/Ele/Você': 'alcance',
        Nós: 'alcancemos',
        'Eles/Elas/Vocēs': 'alcancem'
      },
      pretéritoImperfeito: {
        Eu: 'alcançasse',
        Tu: 'alcançasses',
        'Ela/Ele/Você': 'alcançasse',
        Nós: 'alcançássemos',
        'Eles/Elas/Vocēs': 'alcançassem'
      },
      subjuntivoFuturo: {
        Eu: 'alcançar',
        Tu: 'alcançares',
        'Ela/Ele/Você': 'alcançar',
        Nós: 'alcançarmos',
        'Eles/Elas/Vocēs': 'alcançarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'alcançaria',
        Tu: 'alcançarias',
        'Ela/Ele/Você': 'alcançaria',
        Nós: 'alcançaríamos',
        'Eles/Elas/Vocēs': 'alcançariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'alcançando'
        },
        {
          form: 'particípio',
          portuguese: 'alcançado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'alterava',
        Tu: 'alteravas',
        'Ela/Ele/Você': 'alterava',
        Nós: 'alterávamos',
        'Eles/Elas/Vocēs': 'alteravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'alterara',
        Tu: 'alteraras',
        'Ela/Ele/Você': 'alterara',
        Nós: 'alteráramos',
        'Eles/Elas/Vocēs': 'alteraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'alterarei',
        Tu: 'alterarás',
        'Ela/Ele/Você': 'alterará',
        Nós: 'alteraremos',
        'Eles/Elas/Vocēs': 'alterarão'
      },
      subjuntivoPresente: {
        Eu: 'altere',
        Tu: 'alteres',
        'Ela/Ele/Você': 'altere',
        Nós: 'alteremos',
        'Eles/Elas/Vocēs': 'alterem'
      },
      pretéritoImperfeito: {
        Eu: 'alterasse',
        Tu: 'alterasses',
        'Ela/Ele/Você': 'alterasse',
        Nós: 'alterássemos',
        'Eles/Elas/Vocēs': 'alterassem'
      },
      subjuntivoFuturo: {
        Eu: 'alterar',
        Tu: 'alterares',
        'Ela/Ele/Você': 'alterar',
        Nós: 'alterarmos',
        'Eles/Elas/Vocēs': 'alterarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'alteraria',
        Tu: 'alterarias',
        'Ela/Ele/Você': 'alteraria',
        Nós: 'alteraríamos',
        'Eles/Elas/Vocēs': 'alterariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'alterando'
        },
        {
          form: 'particípio',
          portuguese: 'alterado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'aplicava',
        Tu: 'aplicavas',
        'Ela/Ele/Você': 'aplicava',
        Nós: 'aplicávamos',
        'Eles/Elas/Vocēs': 'aplicavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'aplicara',
        Tu: 'aplicaras',
        'Ela/Ele/Você': 'aplicara',
        Nós: 'aplicáramos',
        'Eles/Elas/Vocēs': 'aplicaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'aplicarei',
        Tu: 'aplicarás',
        'Ela/Ele/Você': 'aplicará',
        Nós: 'aplicaremos',
        'Eles/Elas/Vocēs': 'aplicarão'
      },
      subjuntivoPresente: {
        Eu: 'aplique',
        Tu: 'apliques',
        'Ela/Ele/Você': 'aplique',
        Nós: 'apliquemos',
        'Eles/Elas/Vocēs': 'apliquem'
      },
      pretéritoImperfeito: {
        Eu: 'aplicasse',
        Tu: 'aplicasses',
        'Ela/Ele/Você': 'aplicasse',
        Nós: 'aplicássemos',
        'Eles/Elas/Vocēs': 'aplicassem'
      },
      subjuntivoFuturo: {
        Eu: 'aplicar',
        Tu: 'aplicares',
        'Ela/Ele/Você': 'aplicar',
        Nós: 'aplicarmos',
        'Eles/Elas/Vocēs': 'aplicarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'aplicaria',
        Tu: 'aplicarias',
        'Ela/Ele/Você': 'aplicaria',
        Nós: 'aplicaríamos',
        'Eles/Elas/Vocēs': 'aplicariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'aplicando'
        },
        {
          form: 'particípio',
          portuguese: 'aplicado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'assegurava',
        Tu: 'asseguravas',
        'Ela/Ele/Você': 'assegurava',
        Nós: 'assegurávamos',
        'Eles/Elas/Vocēs': 'asseguravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'assegurara',
        Tu: 'asseguraras',
        'Ela/Ele/Você': 'assegurara',
        Nós: 'asseguráramos',
        'Eles/Elas/Vocēs': 'asseguraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'assegurarei',
        Tu: 'assegurarás',
        'Ela/Ele/Você': 'assegurará',
        Nós: 'asseguraremos',
        'Eles/Elas/Vocēs': 'assegurarão'
      },
      subjuntivoPresente: {
        Eu: 'assegure',
        Tu: 'assegures',
        'Ela/Ele/Você': 'assegure',
        Nós: 'asseguremos',
        'Eles/Elas/Vocēs': 'assegurem'
      },
      pretéritoImperfeito: {
        Eu: 'assegurasse',
        Tu: 'assegurasses',
        'Ela/Ele/Você': 'assegurasse',
        Nós: 'assegurássemos',
        'Eles/Elas/Vocēs': 'assegurassem'
      },
      subjuntivoFuturo: {
        Eu: 'assegurar',
        Tu: 'assegurares',
        'Ela/Ele/Você': 'assegurar',
        Nós: 'assegurarmos',
        'Eles/Elas/Vocēs': 'assegurarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'asseguraria',
        Tu: 'assegurarias',
        'Ela/Ele/Você': 'asseguraria',
        Nós: 'asseguraríamos',
        'Eles/Elas/Vocēs': 'assegurariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'assegurando'
        },
        {
          form: 'particípio',
          portuguese: 'assegurado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'assinava',
        Tu: 'assinavas',
        'Ela/Ele/Você': 'assinava',
        Nós: 'assinávamos',
        'Eles/Elas/Vocēs': 'assinavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'assinara',
        Tu: 'assinaras',
        'Ela/Ele/Você': 'assinara',
        Nós: 'assináramos',
        'Eles/Elas/Vocēs': 'assinaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'assinarei',
        Tu: 'assinarás',
        'Ela/Ele/Você': 'assinará',
        Nós: 'assinaremos',
        'Eles/Elas/Vocēs': 'assinarão'
      },
      subjuntivoPresente: {
        Eu: 'assine',
        Tu: 'assines',
        'Ela/Ele/Você': 'assine',
        Nós: 'assinemos',
        'Eles/Elas/Vocēs': 'assinem'
      },
      pretéritoImperfeito: {
        Eu: 'assinasse',
        Tu: 'assinasses',
        'Ela/Ele/Você': 'assinasse',
        Nós: 'assinássemos',
        'Eles/Elas/Vocēs': 'assinassem'
      },
      subjuntivoFuturo: {
        Eu: 'assinar',
        Tu: 'assinares',
        'Ela/Ele/Você': 'assinar',
        Nós: 'assinarmos',
        'Eles/Elas/Vocēs': 'assinarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'assinaria',
        Tu: 'assinarias',
        'Ela/Ele/Você': 'assinaria',
        Nós: 'assinaríamos',
        'Eles/Elas/Vocēs': 'assinariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'assinando'
        },
        {
          form: 'particípio',
          portuguese: 'assinado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'aumentava',
        Tu: 'aumentavas',
        'Ela/Ele/Você': 'aumentava',
        Nós: 'aumentávamos',
        'Eles/Elas/Vocēs': 'aumentavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'aumentara',
        Tu: 'aumentaras',
        'Ela/Ele/Você': 'aumentara',
        Nós: 'aumentáramos',
        'Eles/Elas/Vocēs': 'aumentaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'aumentarei',
        Tu: 'aumentarás',
        'Ela/Ele/Você': 'aumentará',
        Nós: 'aumentaremos',
        'Eles/Elas/Vocēs': 'aumentarão'
      },
      subjuntivoPresente: {
        Eu: 'aumente',
        Tu: 'aumentes',
        'Ela/Ele/Você': 'aumente',
        Nós: 'aumentemos',
        'Eles/Elas/Vocēs': 'aumentem'
      },
      pretéritoImperfeito: {
        Eu: 'aumentasse',
        Tu: 'aumentasses',
        'Ela/Ele/Você': 'aumentasse',
        Nós: 'aumentássemos',
        'Eles/Elas/Vocēs': 'aumentassem'
      },
      subjuntivoFuturo: {
        Eu: 'aumentar',
        Tu: 'aumentares',
        'Ela/Ele/Você': 'aumentar',
        Nós: 'aumentarmos',
        'Eles/Elas/Vocēs': 'aumentarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'aumentaria',
        Tu: 'aumentarias',
        'Ela/Ele/Você': 'aumentaria',
        Nós: 'aumentaríamos',
        'Eles/Elas/Vocēs': 'aumentariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'aumentando'
        },
        {
          form: 'particípio',
          portuguese: 'aumentado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'caía',
        Tu: 'caías',
        'Ela/Ele/Você': 'caía',
        Nós: 'caíamos',
        'Eles/Elas/Vocēs': 'caíam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'caíra',
        Tu: 'caíras',
        'Ela/Ele/Você': 'caíra',
        Nós: 'caíramos',
        'Eles/Elas/Vocēs': 'caíram'
      },
      futuroDoPresenteSimples: {
        Eu: 'cairei',
        Tu: 'cairás',
        'Ela/Ele/Você': 'cairá',
        Nós: 'cairemos',
        'Eles/Elas/Vocēs': 'cairão'
      },
      subjuntivoPresente: {
        Eu: 'caia',
        Tu: 'caias',
        'Ela/Ele/Você': 'caia',
        Nós: 'caiamos',
        'Eles/Elas/Vocēs': 'caiam'
      },
      pretéritoImperfeito: {
        Eu: 'caísse',
        Tu: 'caísses',
        'Ela/Ele/Você': 'caísse',
        Nós: 'caíssemos',
        'Eles/Elas/Vocēs': 'caíssem'
      },
      subjuntivoFuturo: {
        Eu: 'cair',
        Tu: 'caíres',
        'Ela/Ele/Você': 'cair',
        Nós: 'cairmos',
        'Eles/Elas/Vocēs': 'caírem'
      },
      futurodoPretéritoSimples: {
        Eu: 'cairia',
        Tu: 'cairias',
        'Ela/Ele/Você': 'cairia',
        Nós: 'cairíamos',
        'Eles/Elas/Vocēs': 'cairiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'caindo'
        },
        {
          form: 'particípio',
          portuguese: 'caído'
        }
      ]
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
      },
      imperfect: {
        Eu: 'carregava',
        Tu: 'carregavas',
        'Ela/Ele/Você': 'carregava',
        Nós: 'carregávamos',
        'Eles/Elas/Vocēs': 'carregavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'carregara',
        Tu: 'carregaras',
        'Ela/Ele/Você': 'carregara',
        Nós: 'carregáramos',
        'Eles/Elas/Vocēs': 'carregaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'carregarei',
        Tu: 'carregarás',
        'Ela/Ele/Você': 'carregará',
        Nós: 'carregaremos',
        'Eles/Elas/Vocēs': 'carregarão'
      },
      subjuntivoPresente: {
        Eu: 'carregue',
        Tu: 'carregues',
        'Ela/Ele/Você': 'carregue',
        Nós: 'carreguemos',
        'Eles/Elas/Vocēs': 'carreguem'
      },
      pretéritoImperfeito: {
        Eu: 'carregasse',
        Tu: 'carregasses',
        'Ela/Ele/Você': 'carregasse',
        Nós: 'carregássemos',
        'Eles/Elas/Vocēs': 'carregassem'
      },
      subjuntivoFuturo: {
        Eu: 'carregar',
        Tu: 'carregares',
        'Ela/Ele/Você': 'carregar',
        Nós: 'carregarmos',
        'Eles/Elas/Vocēs': 'carregarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'carregaria',
        Tu: 'carregarias',
        'Ela/Ele/Você': 'carregaria',
        Nós: 'carregaríamos',
        'Eles/Elas/Vocēs': 'carregariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'carregando'
        },
        {
          form: 'particípio',
          portuguese: 'carregado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'chegava',
        Tu: 'chegavas',
        'Ela/Ele/Você': 'chegava',
        Nós: 'chegávamos',
        'Eles/Elas/Vocēs': 'chegavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'chegara',
        Tu: 'chegaras',
        'Ela/Ele/Você': 'chegara',
        Nós: 'chegáramos',
        'Eles/Elas/Vocēs': 'chegaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'chegarei',
        Tu: 'chegarás',
        'Ela/Ele/Você': 'chegará',
        Nós: 'chegaremos',
        'Eles/Elas/Vocēs': 'chegarão'
      },
      subjuntivoPresente: {
        Eu: 'chegue',
        Tu: 'chegues',
        'Ela/Ele/Você': 'chegue',
        Nós: 'cheguemos',
        'Eles/Elas/Vocēs': 'cheguem'
      },
      pretéritoImperfeito: {
        Eu: 'chegasse',
        Tu: 'chegasses',
        'Ela/Ele/Você': 'chegasse',
        Nós: 'chegássemos',
        'Eles/Elas/Vocēs': 'chegassem'
      },
      subjuntivoFuturo: {
        Eu: 'chegar',
        Tu: 'chegares',
        'Ela/Ele/Você': 'chegar',
        Nós: 'chegarmos',
        'Eles/Elas/Vocēs': 'chegarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'chegaria',
        Tu: 'chegarias',
        'Ela/Ele/Você': 'chegaria',
        Nós: 'chegaríamos',
        'Eles/Elas/Vocēs': 'chegariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'chegando'
        },
        {
          form: 'particípio',
          portuguese: 'chegado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'concentrava',
        Tu: 'concentravas',
        'Ela/Ele/Você': 'concentrava',
        Nós: 'concentrávamos',
        'Eles/Elas/Vocēs': 'concentravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'concentrara',
        Tu: 'concentraras',
        'Ela/Ele/Você': 'concentrara',
        Nós: 'concentráramos',
        'Eles/Elas/Vocēs': 'concentraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'concentrarei',
        Tu: 'concentrarás',
        'Ela/Ele/Você': 'concentrará',
        Nós: 'concentraremos',
        'Eles/Elas/Vocēs': 'concentrarão'
      },
      subjuntivoPresente: {
        Eu: 'concentre',
        Tu: 'concentres',
        'Ela/Ele/Você': 'concentre',
        Nós: 'concentremos',
        'Eles/Elas/Vocēs': 'concentrem'
      },
      pretéritoImperfeito: {
        Eu: 'concentrasse',
        Tu: 'concentrasses',
        'Ela/Ele/Você': 'concentrasse',
        Nós: 'concentrássemos',
        'Eles/Elas/Vocēs': 'concentrassem'
      },
      subjuntivoFuturo: {
        Eu: 'concentrar',
        Tu: 'concentrares',
        'Ela/Ele/Você': 'concentrar',
        Nós: 'concentrarmos',
        'Eles/Elas/Vocēs': 'concentrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'concentraria',
        Tu: 'concentrarias',
        'Ela/Ele/Você': 'concentraria',
        Nós: 'concentraríamos',
        'Eles/Elas/Vocēs': 'concentrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'concentrando'
        },
        {
          form: 'particípio',
          portuguese: 'concentrado'
        }
      ]
    },
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
      },
      imperfect: {
        Eu: 'continuava',
        Tu: 'continuavas',
        'Ela/Ele/Você': 'continuava',
        Nós: 'continuávamos',
        'Eles/Elas/Vocēs': 'continuavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'continuara',
        Tu: 'continuaras',
        'Ela/Ele/Você': 'continuara',
        Nós: 'continuáramos',
        'Eles/Elas/Vocēs': 'continuaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'continuarei',
        Tu: 'continuarás',
        'Ela/Ele/Você': 'continuará',
        Nós: 'continuaremos',
        'Eles/Elas/Vocēs': 'continuarão'
      },
      subjuntivoPresente: {
        Eu: 'continue',
        Tu: 'continues',
        'Ela/Ele/Você': 'continue',
        Nós: 'continuemos',
        'Eles/Elas/Vocēs': 'continuem'
      },
      pretéritoImperfeito: {
        Eu: 'continuasse',
        Tu: 'continuasses',
        'Ela/Ele/Você': 'continuasse',
        Nós: 'continuássemos',
        'Eles/Elas/Vocēs': 'continuassem'
      },
      subjuntivoFuturo: {
        Eu: 'continuar',
        Tu: 'continuares',
        'Ela/Ele/Você': 'continuar',
        Nós: 'continuarmos',
        'Eles/Elas/Vocēs': 'continuarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'continuaria',
        Tu: 'continuarias',
        'Ela/Ele/Você': 'continuaria',
        Nós: 'continuaríamos',
        'Eles/Elas/Vocēs': 'continuariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'continuando'
        },
        {
          form: 'particípio',
          portuguese: 'continuado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'conversava',
        Tu: 'conversavas',
        'Ela/Ele/Você': 'conversava',
        Nós: 'conversávamos',
        'Eles/Elas/Vocēs': 'conversavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'conversara',
        Tu: 'conversaras',
        'Ela/Ele/Você': 'conversara',
        Nós: 'conversáramos',
        'Eles/Elas/Vocēs': 'conversaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'conversarei',
        Tu: 'conversarás',
        'Ela/Ele/Você': 'conversará',
        Nós: 'conversaremos',
        'Eles/Elas/Vocēs': 'conversarão'
      },
      subjuntivoPresente: {
        Eu: 'converse',
        Tu: 'converses',
        'Ela/Ele/Você': 'converse',
        Nós: 'conversemos',
        'Eles/Elas/Vocēs': 'conversem'
      },
      pretéritoImperfeito: {
        Eu: 'conversasse',
        Tu: 'conversasses',
        'Ela/Ele/Você': 'conversasse',
        Nós: 'conversássemos',
        'Eles/Elas/Vocēs': 'conversassem'
      },
      subjuntivoFuturo: {
        Eu: 'conversar',
        Tu: 'conversares',
        'Ela/Ele/Você': 'conversar',
        Nós: 'conversarmos',
        'Eles/Elas/Vocēs': 'conversarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'conversaria',
        Tu: 'conversarias',
        'Ela/Ele/Você': 'conversaria',
        Nós: 'conversaríamos',
        'Eles/Elas/Vocēs': 'conversariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'conversando'
        },
        {
          form: 'particípio',
          portuguese: 'conversado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'criava',
        Tu: 'criavas',
        'Ela/Ele/Você': 'criava',
        Nós: 'criávamos',
        'Eles/Elas/Vocēs': 'criavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'criara',
        Tu: 'criaras',
        'Ela/Ele/Você': 'criara',
        Nós: 'criáramos',
        'Eles/Elas/Vocēs': 'criaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'criarei',
        Tu: 'criarás',
        'Ela/Ele/Você': 'criará',
        Nós: 'criaremos',
        'Eles/Elas/Vocēs': 'criarão'
      },
      subjuntivoPresente: {
        Eu: 'crie',
        Tu: 'cries',
        'Ela/Ele/Você': 'crie',
        Nós: 'criemos',
        'Eles/Elas/Vocēs': 'criem'
      },
      pretéritoImperfeito: {
        Eu: 'criasse',
        Tu: 'criasses',
        'Ela/Ele/Você': 'criasse',
        Nós: 'criássemos',
        'Eles/Elas/Vocēs': 'criassem'
      },
      subjuntivoFuturo: {
        Eu: 'criar',
        Tu: 'criares',
        'Ela/Ele/Você': 'criar',
        Nós: 'criarmos',
        'Eles/Elas/Vocēs': 'criarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'criaria',
        Tu: 'criarias',
        'Ela/Ele/Você': 'criaria',
        Nós: 'criaríamos',
        'Eles/Elas/Vocēs': 'criariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'criando'
        },
        {
          form: 'particípio',
          portuguese: 'criado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'dançava',
        Tu: 'dançavas',
        'Ela/Ele/Você': 'dançava',
        Nós: 'dançávamos',
        'Eles/Elas/Vocēs': 'dançavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'dançara',
        Tu: 'dançaras',
        'Ela/Ele/Você': 'dançara',
        Nós: 'dançáramos',
        'Eles/Elas/Vocēs': 'dançaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'dançarei',
        Tu: 'dançarás',
        'Ela/Ele/Você': 'dançará',
        Nós: 'dançaremos',
        'Eles/Elas/Vocēs': 'dançarão'
      },
      subjuntivoPresente: {
        Eu: 'dance',
        Tu: 'dances',
        'Ela/Ele/Você': 'dance',
        Nós: 'dancemos',
        'Eles/Elas/Vocēs': 'dancem'
      },
      pretéritoImperfeito: {
        Eu: 'dançasse',
        Tu: 'dançasses',
        'Ela/Ele/Você': 'dançasse',
        Nós: 'dançássemos',
        'Eles/Elas/Vocēs': 'dançassem'
      },
      subjuntivoFuturo: {
        Eu: 'dançar',
        Tu: 'dançares',
        'Ela/Ele/Você': 'dançar',
        Nós: 'dançarmos',
        'Eles/Elas/Vocēs': 'dançarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'dançaria',
        Tu: 'dançarias',
        'Ela/Ele/Você': 'dançaria',
        Nós: 'dançaríamos',
        'Eles/Elas/Vocēs': 'dançariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'dançando'
        },
        {
          form: 'particípio',
          portuguese: 'dançado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'dava',
        Tu: 'davas',
        'Ela/Ele/Você': 'dava',
        Nós: 'dávamos',
        'Eles/Elas/Vocēs': 'davam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'dera',
        Tu: 'deras',
        'Ela/Ele/Você': 'dera',
        Nós: 'déramos',
        'Eles/Elas/Vocēs': 'deram'
      },
      futuroDoPresenteSimples: {
        Eu: 'darei',
        Tu: 'darás',
        'Ela/Ele/Você': 'dará',
        Nós: 'daremos',
        'Eles/Elas/Vocēs': 'darão'
      },
      subjuntivoPresente: {
        Eu: 'dê',
        Tu: 'dês',
        'Ela/Ele/Você': 'dê',
        Nós: 'dêmos',
        'Eles/Elas/Vocēs': 'dêem'
      },
      pretéritoImperfeito: {
        Eu: 'desse',
        Tu: 'desses',
        'Ela/Ele/Você': 'desse',
        Nós: 'déssemos',
        'Eles/Elas/Vocēs': 'dessem'
      },
      subjuntivoFuturo: {
        Eu: 'der',
        Tu: 'deres',
        'Ela/Ele/Você': 'der',
        Nós: 'dermos',
        'Eles/Elas/Vocēs': 'derem'
      },
      futurodoPretéritoSimples: {
        Eu: 'daria',
        Tu: 'darias',
        'Ela/Ele/Você': 'daria',
        Nós: 'daríamos',
        'Eles/Elas/Vocēs': 'dariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'dando'
        },
        {
          form: 'particípio',
          portuguese: 'dado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'definia',
        Tu: 'definias',
        'Ela/Ele/Você': 'definia',
        Nós: 'definíamos',
        'Eles/Elas/Vocēs': 'definiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'definira',
        Tu: 'definiras',
        'Ela/Ele/Você': 'definira',
        Nós: 'definíramos',
        'Eles/Elas/Vocēs': 'definiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'definirei',
        Tu: 'definirás',
        'Ela/Ele/Você': 'definirá',
        Nós: 'definiremos',
        'Eles/Elas/Vocēs': 'definirão'
      },
      subjuntivoPresente: {
        Eu: 'defina',
        Tu: 'definas',
        'Ela/Ele/Você': 'defina',
        Nós: 'definamos',
        'Eles/Elas/Vocēs': 'definam'
      },
      pretéritoImperfeito: {
        Eu: 'definisse',
        Tu: 'definisses',
        'Ela/Ele/Você': 'definisse',
        Nós: 'definíssemos',
        'Eles/Elas/Vocēs': 'definissem'
      },
      subjuntivoFuturo: {
        Eu: 'definir',
        Tu: 'definires',
        'Ela/Ele/Você': 'definir',
        Nós: 'definirmos',
        'Eles/Elas/Vocēs': 'definirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'definiria',
        Tu: 'definirias',
        'Ela/Ele/Você': 'definiria',
        Nós: 'definiríamos',
        'Eles/Elas/Vocēs': 'definiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'definindo'
        },
        {
          form: 'particípio',
          portuguese: 'definido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'determinava',
        Tu: 'determinavas',
        'Ela/Ele/Você': 'determinava',
        Nós: 'determinávamos',
        'Eles/Elas/Vocēs': 'determinavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'determinara',
        Tu: 'determinaras',
        'Ela/Ele/Você': 'determinara',
        Nós: 'determináramos',
        'Eles/Elas/Vocēs': 'determinaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'determinarei',
        Tu: 'determinarás',
        'Ela/Ele/Você': 'determinará',
        Nós: 'determinaremos',
        'Eles/Elas/Vocēs': 'determinarão'
      },
      subjuntivoPresente: {
        Eu: 'determine',
        Tu: 'determines',
        'Ela/Ele/Você': 'determine',
        Nós: 'determinemos',
        'Eles/Elas/Vocēs': 'determinem'
      },
      pretéritoImperfeito: {
        Eu: 'determinasse',
        Tu: 'determinasses',
        'Ela/Ele/Você': 'determinasse',
        Nós: 'determinássemos',
        'Eles/Elas/Vocēs': 'determinassem'
      },
      subjuntivoFuturo: {
        Eu: 'determinar',
        Tu: 'determinares',
        'Ela/Ele/Você': 'determinar',
        Nós: 'determinarmos',
        'Eles/Elas/Vocēs': 'determinarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'determinaria',
        Tu: 'determinarias',
        'Ela/Ele/Você': 'determinaria',
        Nós: 'determinaríamos',
        'Eles/Elas/Vocēs': 'determinariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'determinando'
        },
        {
          form: 'particípio',
          portuguese: 'determinado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'dormia',
        Tu: 'dormias',
        'Ela/Ele/Você': 'dormia',
        Nós: 'dormíamos',
        'Eles/Elas/Vocēs': 'dormiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'dormira',
        Tu: 'dormiras',
        'Ela/Ele/Você': 'dormira',
        Nós: 'dormíramos',
        'Eles/Elas/Vocēs': 'dormiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'dormirei',
        Tu: 'dormirás',
        'Ela/Ele/Você': 'dormirá',
        Nós: 'dormiremos',
        'Eles/Elas/Vocēs': 'dormirão'
      },
      subjuntivoPresente: {
        Eu: 'durma',
        Tu: 'durmas',
        'Ela/Ele/Você': 'durma',
        Nós: 'durmamos',
        'Eles/Elas/Vocēs': 'durmam'
      },
      pretéritoImperfeito: {
        Eu: 'dormisse',
        Tu: 'dormisses',
        'Ela/Ele/Você': 'dormisse',
        Nós: 'dormíssemos',
        'Eles/Elas/Vocēs': 'dormissem'
      },
      subjuntivoFuturo: {
        Eu: 'dormir',
        Tu: 'dormires',
        'Ela/Ele/Você': 'dormir',
        Nós: 'dormirmos',
        'Eles/Elas/Vocēs': 'dormirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'dormiria',
        Tu: 'dormirias',
        'Ela/Ele/Você': 'dormiria',
        Nós: 'dormiríamos',
        'Eles/Elas/Vocēs': 'dormiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'dormindo'
        },
        {
          form: 'particípio',
          portuguese: 'dormido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'enviava',
        Tu: 'enviavas',
        'Ela/Ele/Você': 'enviava',
        Nós: 'enviávamos',
        'Eles/Elas/Vocēs': 'enviavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'enviara',
        Tu: 'enviaras',
        'Ela/Ele/Você': 'enviara',
        Nós: 'enviáramos',
        'Eles/Elas/Vocēs': 'enviaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'enviarei',
        Tu: 'enviarás',
        'Ela/Ele/Você': 'enviará',
        Nós: 'enviaremos',
        'Eles/Elas/Vocēs': 'enviarão'
      },
      subjuntivoPresente: {
        Eu: 'envie',
        Tu: 'envies',
        'Ela/Ele/Você': 'envie',
        Nós: 'enviemos',
        'Eles/Elas/Vocēs': 'enviem'
      },
      pretéritoImperfeito: {
        Eu: 'enviasse',
        Tu: 'enviasses',
        'Ela/Ele/Você': 'enviasse',
        Nós: 'enviássemos',
        'Eles/Elas/Vocēs': 'enviassem'
      },
      subjuntivoFuturo: {
        Eu: 'enviar',
        Tu: 'enviares',
        'Ela/Ele/Você': 'enviar',
        Nós: 'enviarmos',
        'Eles/Elas/Vocēs': 'enviarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'enviaria',
        Tu: 'enviarias',
        'Ela/Ele/Você': 'enviaria',
        Nós: 'enviaríamos',
        'Eles/Elas/Vocēs': 'enviariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'enviando'
        },
        {
          form: 'particípio',
          portuguese: 'enviado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'esperava',
        Tu: 'esperavas',
        'Ela/Ele/Você': 'esperava',
        Nós: 'esperávamos',
        'Eles/Elas/Vocēs': 'esperavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'esperara',
        Tu: 'esperaras',
        'Ela/Ele/Você': 'esperara',
        Nós: 'esperáramos',
        'Eles/Elas/Vocēs': 'esperaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'esperarei',
        Tu: 'esperarás',
        'Ela/Ele/Você': 'esperará',
        Nós: 'esperaremos',
        'Eles/Elas/Vocēs': 'esperarão'
      },
      subjuntivoPresente: {
        Eu: 'espere',
        Tu: 'esperes',
        'Ela/Ele/Você': 'espere',
        Nós: 'esperemos',
        'Eles/Elas/Vocēs': 'esperem'
      },
      pretéritoImperfeito: {
        Eu: 'esperasse',
        Tu: 'esperasses',
        'Ela/Ele/Você': 'esperasse',
        Nós: 'esperássemos',
        'Eles/Elas/Vocēs': 'esperassem'
      },
      subjuntivoFuturo: {
        Eu: 'esperar',
        Tu: 'esperares',
        'Ela/Ele/Você': 'esperar',
        Nós: 'esperarmos',
        'Eles/Elas/Vocēs': 'esperarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'esperaria',
        Tu: 'esperarias',
        'Ela/Ele/Você': 'esperaria',
        Nós: 'esperaríamos',
        'Eles/Elas/Vocēs': 'esperariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'esperando'
        },
        {
          form: 'particípio',
          portuguese: 'esperado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'estudava',
        Tu: 'estudavas',
        'Ela/Ele/Você': 'estudava',
        Nós: 'estudávamos',
        'Eles/Elas/Vocēs': 'estudavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'estudara',
        Tu: 'estudaras',
        'Ela/Ele/Você': 'estudara',
        Nós: 'estudáramos',
        'Eles/Elas/Vocēs': 'estudaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'estudarei',
        Tu: 'estudarás',
        'Ela/Ele/Você': 'estudará',
        Nós: 'estudaremos',
        'Eles/Elas/Vocēs': 'estudarão'
      },
      subjuntivoPresente: {
        Eu: 'estude',
        Tu: 'estudes',
        'Ela/Ele/Você': 'estude',
        Nós: 'estudemos',
        'Eles/Elas/Vocēs': 'estudem'
      },
      pretéritoImperfeito: {
        Eu: 'estudasse',
        Tu: 'estudasses',
        'Ela/Ele/Você': 'estudasse',
        Nós: 'estudássemos',
        'Eles/Elas/Vocēs': 'estudassem'
      },
      subjuntivoFuturo: {
        Eu: 'estudar',
        Tu: 'estudares',
        'Ela/Ele/Você': 'estudar',
        Nós: 'estudarmos',
        'Eles/Elas/Vocēs': 'estudarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'estudaria',
        Tu: 'estudarias',
        'Ela/Ele/Você': 'estudaria',
        Nós: 'estudaríamos',
        'Eles/Elas/Vocēs': 'estudariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'estudando'
        },
        {
          form: 'particípio',
          portuguese: 'estudado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'explicava',
        Tu: 'explicavas',
        'Ela/Ele/Você': 'explicava',
        Nós: 'explicávamos',
        'Eles/Elas/Vocēs': 'explicavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'explicara',
        Tu: 'explicaras',
        'Ela/Ele/Você': 'explicara',
        Nós: 'explicáramos',
        'Eles/Elas/Vocēs': 'explicaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'explicarei',
        Tu: 'explicarás',
        'Ela/Ele/Você': 'explicará',
        Nós: 'explicaremos',
        'Eles/Elas/Vocēs': 'explicarão'
      },
      subjuntivoPresente: {
        Eu: 'explique',
        Tu: 'expliques',
        'Ela/Ele/Você': 'explique',
        Nós: 'expliquemos',
        'Eles/Elas/Vocēs': 'expliquem'
      },
      pretéritoImperfeito: {
        Eu: 'explicasse',
        Tu: 'explicasses',
        'Ela/Ele/Você': 'explicasse',
        Nós: 'explicássemos',
        'Eles/Elas/Vocēs': 'explicassem'
      },
      subjuntivoFuturo: {
        Eu: 'explicar',
        Tu: 'explicares',
        'Ela/Ele/Você': 'explicar',
        Nós: 'explicarmos',
        'Eles/Elas/Vocēs': 'explicarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'explicaria',
        Tu: 'explicarias',
        'Ela/Ele/Você': 'explicaria',
        Nós: 'explicaríamos',
        'Eles/Elas/Vocēs': 'explicariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'explicando'
        },
        {
          form: 'particípio',
          portuguese: 'explicado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'fumava',
        Tu: 'fumavas',
        'Ela/Ele/Você': 'fumava',
        Nós: 'fumávamos',
        'Eles/Elas/Vocēs': 'fumavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fumara',
        Tu: 'fumaras',
        'Ela/Ele/Você': 'fumara',
        Nós: 'fumáramos',
        'Eles/Elas/Vocēs': 'fumaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'fumarei',
        Tu: 'fumarás',
        'Ela/Ele/Você': 'fumará',
        Nós: 'fumaremos',
        'Eles/Elas/Vocēs': 'fumarão'
      },
      subjuntivoPresente: {
        Eu: 'fume',
        Tu: 'fumes',
        'Ela/Ele/Você': 'fume',
        Nós: 'fumemos',
        'Eles/Elas/Vocēs': 'fumem'
      },
      pretéritoImperfeito: {
        Eu: 'fumasse',
        Tu: 'fumasses',
        'Ela/Ele/Você': 'fumasse',
        Nós: 'fumássemos',
        'Eles/Elas/Vocēs': 'fumassem'
      },
      subjuntivoFuturo: {
        Eu: 'fumar',
        Tu: 'fumares',
        'Ela/Ele/Você': 'fumar',
        Nós: 'fumarmos',
        'Eles/Elas/Vocēs': 'fumarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'fumaria',
        Tu: 'fumarias',
        'Ela/Ele/Você': 'fumaria',
        Nós: 'fumaríamos',
        'Eles/Elas/Vocēs': 'fumariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'fumando'
        },
        {
          form: 'particípio',
          portuguese: 'fumado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'gastava',
        Tu: 'gastavas',
        'Ela/Ele/Você': 'gastava',
        Nós: 'gastávamos',
        'Eles/Elas/Vocēs': 'gastavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'gastara',
        Tu: 'gastaras',
        'Ela/Ele/Você': 'gastara',
        Nós: 'gastáramos',
        'Eles/Elas/Vocēs': 'gastaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'gastarei',
        Tu: 'gastarás',
        'Ela/Ele/Você': 'gastará',
        Nós: 'gastaremos',
        'Eles/Elas/Vocēs': 'gastarão'
      },
      subjuntivoPresente: {
        Eu: 'gaste',
        Tu: 'gastes',
        'Ela/Ele/Você': 'gaste',
        Nós: 'gastemos',
        'Eles/Elas/Vocēs': 'gastem'
      },
      pretéritoImperfeito: {
        Eu: 'gastasse',
        Tu: 'gastasses',
        'Ela/Ele/Você': 'gastasse',
        Nós: 'gastássemos',
        'Eles/Elas/Vocēs': 'gastassem'
      },
      subjuntivoFuturo: {
        Eu: 'gastar',
        Tu: 'gastares',
        'Ela/Ele/Você': 'gastar',
        Nós: 'gastarmos',
        'Eles/Elas/Vocēs': 'gastarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'gastaria',
        Tu: 'gastarias',
        'Ela/Ele/Você': 'gastaria',
        Nós: 'gastaríamos',
        'Eles/Elas/Vocēs': 'gastariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'gastando'
        },
        {
          form: 'particípio',
          portuguese: 'gastado/gasto'
        }
      ]
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
      },
      imperfect: {
        Eu: 'lembrava',
        Tu: 'lembravas',
        'Ela/Ele/Você': 'lembrava',
        Nós: 'lembrávamos',
        'Eles/Elas/Vocēs': 'lembravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'lembrara',
        Tu: 'lembraras',
        'Ela/Ele/Você': 'lembrara',
        Nós: 'lembráramos',
        'Eles/Elas/Vocēs': 'lembraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'lembrarei',
        Tu: 'lembrarás',
        'Ela/Ele/Você': 'lembrará',
        Nós: 'lembraremos',
        'Eles/Elas/Vocēs': 'lembrarão'
      },
      subjuntivoPresente: {
        Eu: 'lembre',
        Tu: 'lembres',
        'Ela/Ele/Você': 'lembre',
        Nós: 'lembremos',
        'Eles/Elas/Vocēs': 'lembrem'
      },
      pretéritoImperfeito: {
        Eu: 'lembrasse',
        Tu: 'lembrasses',
        'Ela/Ele/Você': 'lembrasse',
        Nós: 'lembrássemos',
        'Eles/Elas/Vocēs': 'lembrassem'
      },
      subjuntivoFuturo: {
        Eu: 'lembrar',
        Tu: 'lembrares',
        'Ela/Ele/Você': 'lembrar',
        Nós: 'lembrarmos',
        'Eles/Elas/Vocēs': 'lembrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'lembraria',
        Tu: 'lembrarias',
        'Ela/Ele/Você': 'lembraria',
        Nós: 'lembraríamos',
        'Eles/Elas/Vocēs': 'lembrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'lembrando'
        },
        {
          form: 'particípio',
          portuguese: 'lembrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'mencionava',
        Tu: 'mencionavas',
        'Ela/Ele/Você': 'mencionava',
        Nós: 'mencionávamos',
        'Eles/Elas/Vocēs': 'mencionavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mencionara',
        Tu: 'mencionaras',
        'Ela/Ele/Você': 'mencionara',
        Nós: 'mencionáramos',
        'Eles/Elas/Vocēs': 'mencionaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'mencionarei',
        Tu: 'mencionarás',
        'Ela/Ele/Você': 'mencionará',
        Nós: 'mencionaremos',
        'Eles/Elas/Vocēs': 'mencionarão'
      },
      subjuntivoPresente: {
        Eu: 'mencione',
        Tu: 'menciones',
        'Ela/Ele/Você': 'mencione',
        Nós: 'mencionemos',
        'Eles/Elas/Vocēs': 'mencionem'
      },
      pretéritoImperfeito: {
        Eu: 'mencionasse',
        Tu: 'mencionasses',
        'Ela/Ele/Você': 'mencionasse',
        Nós: 'mencionássemos',
        'Eles/Elas/Vocēs': 'mencionassem'
      },
      subjuntivoFuturo: {
        Eu: 'mencionar',
        Tu: 'mencionares',
        'Ela/Ele/Você': 'mencionar',
        Nós: 'mencionarmos',
        'Eles/Elas/Vocēs': 'mencionarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mencionaria',
        Tu: 'mencionarias',
        'Ela/Ele/Você': 'mencionaria',
        Nós: 'mencionaríamos',
        'Eles/Elas/Vocēs': 'mencionariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mencionando'
        },
        {
          form: 'particípio',
          portuguese: 'mencionado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'mudava',
        Tu: 'mudavas',
        'Ela/Ele/Você': 'mudava',
        Nós: 'mudávamos',
        'Eles/Elas/Vocēs': 'mudavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mudara',
        Tu: 'mudaras',
        'Ela/Ele/Você': 'mudara',
        Nós: 'mudáramos',
        'Eles/Elas/Vocēs': 'mudaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'mudarei',
        Tu: 'mudarás',
        'Ela/Ele/Você': 'mudará',
        Nós: 'mudaremos',
        'Eles/Elas/Vocēs': 'mudarão'
      },
      subjuntivoPresente: {
        Eu: 'mude',
        Tu: 'mudes',
        'Ela/Ele/Você': 'mude',
        Nós: 'mudemos',
        'Eles/Elas/Vocēs': 'mudem'
      },
      pretéritoImperfeito: {
        Eu: 'mudasse',
        Tu: 'mudasses',
        'Ela/Ele/Você': 'mudasse',
        Nós: 'mudássemos',
        'Eles/Elas/Vocēs': 'mudassem'
      },
      subjuntivoFuturo: {
        Eu: 'mudar',
        Tu: 'mudares',
        'Ela/Ele/Você': 'mudar',
        Nós: 'mudarmos',
        'Eles/Elas/Vocēs': 'mudarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mudaria',
        Tu: 'mudarias',
        'Ela/Ele/Você': 'mudaria',
        Nós: 'mudaríamos',
        'Eles/Elas/Vocēs': 'mudariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mudando'
        },
        {
          form: 'particípio',
          portuguese: 'mudado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'negava',
        Tu: 'negavas',
        'Ela/Ele/Você': 'negava',
        Nós: 'negávamos',
        'Eles/Elas/Vocēs': 'negavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'negara',
        Tu: 'negaras',
        'Ela/Ele/Você': 'negara',
        Nós: 'negáramos',
        'Eles/Elas/Vocēs': 'negaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'negarei',
        Tu: 'negarás',
        'Ela/Ele/Você': 'negará',
        Nós: 'negaremos',
        'Eles/Elas/Vocēs': 'negarão'
      },
      subjuntivoPresente: {
        Eu: 'negue',
        Tu: 'negues',
        'Ela/Ele/Você': 'negue',
        Nós: 'neguemos',
        'Eles/Elas/Vocēs': 'neguem'
      },
      pretéritoImperfeito: {
        Eu: 'negasse',
        Tu: 'negasses',
        'Ela/Ele/Você': 'negasse',
        Nós: 'negássemos',
        'Eles/Elas/Vocēs': 'negassem'
      },
      subjuntivoFuturo: {
        Eu: 'negar',
        Tu: 'negares',
        'Ela/Ele/Você': 'negar',
        Nós: 'negarmos',
        'Eles/Elas/Vocēs': 'negarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'negaria',
        Tu: 'negarias',
        'Ela/Ele/Você': 'negaria',
        Nós: 'negaríamos',
        'Eles/Elas/Vocēs': 'negariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'negando'
        },
        {
          form: 'particípio',
          portuguese: 'negado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'parava',
        Tu: 'paravas',
        'Ela/Ele/Você': 'parava',
        Nós: 'parávamos',
        'Eles/Elas/Vocēs': 'paravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'parara',
        Tu: 'pararas',
        'Ela/Ele/Você': 'parara',
        Nós: 'paráramos',
        'Eles/Elas/Vocēs': 'pararam'
      },
      futuroDoPresenteSimples: {
        Eu: 'pararei',
        Tu: 'pararás',
        'Ela/Ele/Você': 'parará',
        Nós: 'pararemos',
        'Eles/Elas/Vocēs': 'pararão'
      },
      subjuntivoPresente: {
        Eu: 'pare',
        Tu: 'pares',
        'Ela/Ele/Você': 'pare',
        Nós: 'paremos',
        'Eles/Elas/Vocēs': 'parem'
      },
      pretéritoImperfeito: {
        Eu: 'parasse',
        Tu: 'parasses',
        'Ela/Ele/Você': 'parasse',
        Nós: 'parássemos',
        'Eles/Elas/Vocēs': 'parassem'
      },
      subjuntivoFuturo: {
        Eu: 'parar',
        Tu: 'parares',
        'Ela/Ele/Você': 'parar',
        Nós: 'pararmos',
        'Eles/Elas/Vocēs': 'pararem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pararia',
        Tu: 'pararias',
        'Ela/Ele/Você': 'pararia',
        Nós: 'pararíamos',
        'Eles/Elas/Vocēs': 'parariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'parando'
        },
        {
          form: 'particípio',
          portuguese: 'parado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'passava',
        Tu: 'passavas',
        'Ela/Ele/Você': 'passava',
        Nós: 'passávamos',
        'Eles/Elas/Vocēs': 'passavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'passara',
        Tu: 'passaras',
        'Ela/Ele/Você': 'passara',
        Nós: 'passáramos',
        'Eles/Elas/Vocēs': 'passaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'passarei',
        Tu: 'passarás',
        'Ela/Ele/Você': 'passará',
        Nós: 'passaremos',
        'Eles/Elas/Vocēs': 'passarão'
      },
      subjuntivoPresente: {
        Eu: 'passe',
        Tu: 'passes',
        'Ela/Ele/Você': 'passe',
        Nós: 'passemos',
        'Eles/Elas/Vocēs': 'passem'
      },
      pretéritoImperfeito: {
        Eu: 'passasse',
        Tu: 'passasses',
        'Ela/Ele/Você': 'passasse',
        Nós: 'passássemos',
        'Eles/Elas/Vocēs': 'passassem'
      },
      subjuntivoFuturo: {
        Eu: 'passar',
        Tu: 'passares',
        'Ela/Ele/Você': 'passar',
        Nós: 'passarmos',
        'Eles/Elas/Vocēs': 'passarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'passaria',
        Tu: 'passarias',
        'Ela/Ele/Você': 'passaria',
        Nós: 'passaríamos',
        'Eles/Elas/Vocēs': 'passariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'passando'
        },
        {
          form: 'particípio',
          portuguese: 'passado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'pensava',
        Tu: 'pensavas',
        'Ela/Ele/Você': 'pensava',
        Nós: 'pensávamos',
        'Eles/Elas/Vocēs': 'pensavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pensara',
        Tu: 'pensaras',
        'Ela/Ele/Você': 'pensara',
        Nós: 'pensáramos',
        'Eles/Elas/Vocēs': 'pensaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'pensarei',
        Tu: 'pensarás',
        'Ela/Ele/Você': 'pensará',
        Nós: 'pensaremos',
        'Eles/Elas/Vocēs': 'pensarão'
      },
      subjuntivoPresente: {
        Eu: 'pense',
        Tu: 'penses',
        'Ela/Ele/Você': 'pense',
        Nós: 'pensemos',
        'Eles/Elas/Vocēs': 'pensem'
      },
      pretéritoImperfeito: {
        Eu: 'pensasse',
        Tu: 'pensasses',
        'Ela/Ele/Você': 'pensasse',
        Nós: 'pensássemos',
        'Eles/Elas/Vocēs': 'pensassem'
      },
      subjuntivoFuturo: {
        Eu: 'pensar',
        Tu: 'pensares',
        'Ela/Ele/Você': 'pensar',
        Nós: 'pensarmos',
        'Eles/Elas/Vocēs': 'pensarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pensaria',
        Tu: 'pensarias',
        'Ela/Ele/Você': 'pensaria',
        Nós: 'pensaríamos',
        'Eles/Elas/Vocēs': 'pensariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'pensando'
        },
        {
          form: 'particípio',
          portuguese: 'pensado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'poupava',
        Tu: 'poupavas',
        'Ela/Ele/Você': 'poupava',
        Nós: 'poupávamos',
        'Eles/Elas/Vocēs': 'poupavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'poupara',
        Tu: 'pouparas',
        'Ela/Ele/Você': 'poupara',
        Nós: 'poupáramos',
        'Eles/Elas/Vocēs': 'pouparam'
      },
      futuroDoPresenteSimples: {
        Eu: 'pouparei',
        Tu: 'pouparás',
        'Ela/Ele/Você': 'poupará',
        Nós: 'pouparemos',
        'Eles/Elas/Vocēs': 'pouparão'
      },
      subjuntivoPresente: {
        Eu: 'poupe',
        Tu: 'poupes',
        'Ela/Ele/Você': 'poupe',
        Nós: 'poupemos',
        'Eles/Elas/Vocēs': 'poupem'
      },
      pretéritoImperfeito: {
        Eu: 'poupasse',
        Tu: 'poupasses',
        'Ela/Ele/Você': 'poupasse',
        Nós: 'poupássemos',
        'Eles/Elas/Vocēs': 'poupassem'
      },
      subjuntivoFuturo: {
        Eu: 'poupar',
        Tu: 'poupares',
        'Ela/Ele/Você': 'poupar',
        Nós: 'pouparmos',
        'Eles/Elas/Vocēs': 'pouparem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pouparia',
        Tu: 'pouparias',
        'Ela/Ele/Você': 'pouparia',
        Nós: 'pouparíamos',
        'Eles/Elas/Vocēs': 'poupariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'poupando'
        },
        {
          form: 'particípio',
          portuguese: 'poupado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'preparava',
        Tu: 'preparavas',
        'Ela/Ele/Você': 'preparava',
        Nós: 'preparávamos',
        'Eles/Elas/Vocēs': 'preparavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'preparara',
        Tu: 'prepararas',
        'Ela/Ele/Você': 'preparara',
        Nós: 'preparáramos',
        'Eles/Elas/Vocēs': 'prepararam'
      },
      futuroDoPresenteSimples: {
        Eu: 'prepararei',
        Tu: 'prepararás',
        'Ela/Ele/Você': 'preparará',
        Nós: 'prepararemos',
        'Eles/Elas/Vocēs': 'prepararão'
      },
      subjuntivoPresente: {
        Eu: 'prepare',
        Tu: 'prepares',
        'Ela/Ele/Você': 'prepare',
        Nós: 'preparemos',
        'Eles/Elas/Vocēs': 'preparem'
      },
      pretéritoImperfeito: {
        Eu: 'preparasse',
        Tu: 'preparasses',
        'Ela/Ele/Você': 'preparasse',
        Nós: 'preparássemos',
        'Eles/Elas/Vocēs': 'preparassem'
      },
      subjuntivoFuturo: {
        Eu: 'preparar',
        Tu: 'preparares',
        'Ela/Ele/Você': 'preparar',
        Nós: 'prepararmos',
        'Eles/Elas/Vocēs': 'prepararem'
      },
      futurodoPretéritoSimples: {
        Eu: 'prepararia',
        Tu: 'prepararias',
        'Ela/Ele/Você': 'prepararia',
        Nós: 'prepararíamos',
        'Eles/Elas/Vocēs': 'preparariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'preparando'
        },
        {
          form: 'particípio',
          portuguese: 'preparado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'quebrava',
        Tu: 'quebravas',
        'Ela/Ele/Você': 'quebrava',
        Nós: 'quebrávamos',
        'Eles/Elas/Vocēs': 'quebravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'quebrara',
        Tu: 'quebraras',
        'Ela/Ele/Você': 'quebrara',
        Nós: 'quebráramos',
        'Eles/Elas/Vocēs': 'quebraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'quebrarei',
        Tu: 'quebrarás',
        'Ela/Ele/Você': 'quebrará',
        Nós: 'quebraremos',
        'Eles/Elas/Vocēs': 'quebrarão'
      },
      subjuntivoPresente: {
        Eu: 'quebre',
        Tu: 'quebres',
        'Ela/Ele/Você': 'quebre',
        Nós: 'quebremos',
        'Eles/Elas/Vocēs': 'quebrem'
      },
      pretéritoImperfeito: {
        Eu: 'quebrasse',
        Tu: 'quebrasses',
        'Ela/Ele/Você': 'quebrasse',
        Nós: 'quebrássemos',
        'Eles/Elas/Vocēs': 'quebrassem'
      },
      subjuntivoFuturo: {
        Eu: 'quebrar',
        Tu: 'quebrares',
        'Ela/Ele/Você': 'quebrar',
        Nós: 'quebrarmos',
        'Eles/Elas/Vocēs': 'quebrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'quebraria',
        Tu: 'quebrarias',
        'Ela/Ele/Você': 'quebraria',
        Nós: 'quebraríamos',
        'Eles/Elas/Vocēs': 'quebrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'quebrando'
        },
        {
          form: 'particípio',
          portuguese: 'quebrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'realizava',
        Tu: 'realizavas',
        'Ela/Ele/Você': 'realizava',
        Nós: 'realizávamos',
        'Eles/Elas/Vocēs': 'realizavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'realizara',
        Tu: 'realizaras',
        'Ela/Ele/Você': 'realizara',
        Nós: 'realizáramos',
        'Eles/Elas/Vocēs': 'realizaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'realizarei',
        Tu: 'realizarás',
        'Ela/Ele/Você': 'realizará',
        Nós: 'realizaremos',
        'Eles/Elas/Vocēs': 'realizarão'
      },
      subjuntivoPresente: {
        Eu: 'realize',
        Tu: 'realizes',
        'Ela/Ele/Você': 'realize',
        Nós: 'realizemos',
        'Eles/Elas/Vocēs': 'realizem'
      },
      pretéritoImperfeito: {
        Eu: 'realizasse',
        Tu: 'realizasses',
        'Ela/Ele/Você': 'realizasse',
        Nós: 'realizássemos',
        'Eles/Elas/Vocēs': 'realizassem'
      },
      subjuntivoFuturo: {
        Eu: 'realizar',
        Tu: 'realizares',
        'Ela/Ele/Você': 'realizar',
        Nós: 'realizarmos',
        'Eles/Elas/Vocēs': 'realizarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'realizaria',
        Tu: 'realizarias',
        'Ela/Ele/Você': 'realizaria',
        Nós: 'realizaríamos',
        'Eles/Elas/Vocēs': 'realizariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'realizando'
        },
        {
          form: 'particípio',
          portuguese: 'realizado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'refletia',
        Tu: 'refletias',
        'Ela/Ele/Você': 'refletia',
        Nós: 'refletíamos',
        'Eles/Elas/Vocēs': 'refletiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'refletira',
        Tu: 'refletiras',
        'Ela/Ele/Você': 'refletira',
        Nós: 'refletíramos',
        'Eles/Elas/Vocēs': 'refletiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'refletirei',
        Tu: 'refletirás',
        'Ela/Ele/Você': 'refletirá',
        Nós: 'refletiremos',
        'Eles/Elas/Vocēs': 'refletirão'
      },
      subjuntivoPresente: {
        Eu: 'refleta',
        Tu: 'refletas',
        'Ela/Ele/Você': 'refleta',
        Nós: 'refletamos',
        'Eles/Elas/Vocēs': 'refletam'
      },
      pretéritoImperfeito: {
        Eu: 'refletisse',
        Tu: 'refletisses',
        'Ela/Ele/Você': 'refletisse',
        Nós: 'refletíssemos',
        'Eles/Elas/Vocēs': 'refletissem'
      },
      subjuntivoFuturo: {
        Eu: 'refletir',
        Tu: 'refletires',
        'Ela/Ele/Você': 'refletir',
        Nós: 'refletirmos',
        'Eles/Elas/Vocēs': 'refletirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'refletiria',
        Tu: 'refletirias',
        'Ela/Ele/Você': 'refletiria',
        Nós: 'refletiríamos',
        'Eles/Elas/Vocēs': 'refletiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'refletindo'
        },
        {
          form: 'particípio',
          portuguese: 'refletido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'saía',
        Tu: 'saías',
        'Ela/Ele/Você': 'saía',
        Nós: 'saíamos',
        'Eles/Elas/Vocēs': 'saíam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'saíra',
        Tu: 'saíras',
        'Ela/Ele/Você': 'saíra',
        Nós: 'saíramos',
        'Eles/Elas/Vocēs': 'saíram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sairei',
        Tu: 'sairás',
        'Ela/Ele/Você': 'sairá',
        Nós: 'sairemos',
        'Eles/Elas/Vocēs': 'sairão'
      },
      subjuntivoPresente: {
        Eu: 'saia',
        Tu: 'saias',
        'Ela/Ele/Você': 'saia',
        Nós: 'saiamos',
        'Eles/Elas/Vocēs': 'saiam'
      },
      pretéritoImperfeito: {
        Eu: 'saísse',
        Tu: 'saísses',
        'Ela/Ele/Você': 'saísse',
        Nós: 'saíssemos',
        'Eles/Elas/Vocēs': 'saíssem'
      },
      subjuntivoFuturo: {
        Eu: 'sair',
        Tu: 'saíres',
        'Ela/Ele/Você': 'sair',
        Nós: 'sairmos',
        'Eles/Elas/Vocēs': 'saírem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sairia',
        Tu: 'sairias',
        'Ela/Ele/Você': 'sairia',
        Nós: 'sairíamos',
        'Eles/Elas/Vocēs': 'sairiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'saindo'
        },
        {
          form: 'particípio',
          portuguese: 'saído'
        }
      ]
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
      },
      imperfect: {
        Eu: 'seguia',
        Tu: 'seguias',
        'Ela/Ele/Você': 'seguia',
        Nós: 'seguíamos',
        'Eles/Elas/Vocēs': 'seguiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'seguira',
        Tu: 'seguiras',
        'Ela/Ele/Você': 'seguira',
        Nós: 'seguíramos',
        'Eles/Elas/Vocēs': 'seguiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'seguirei',
        Tu: 'seguirás',
        'Ela/Ele/Você': 'seguirá',
        Nós: 'seguiremos',
        'Eles/Elas/Vocēs': 'seguirão'
      },
      subjuntivoPresente: {
        Eu: 'siga',
        Tu: 'sigas',
        'Ela/Ele/Você': 'siga',
        Nós: 'sigamos',
        'Eles/Elas/Vocēs': 'sigam'
      },
      pretéritoImperfeito: {
        Eu: 'seguisse',
        Tu: 'seguisses',
        'Ela/Ele/Você': 'seguisse',
        Nós: 'seguíssemos',
        'Eles/Elas/Vocēs': 'seguissem'
      },
      subjuntivoFuturo: {
        Eu: 'seguir',
        Tu: 'seguires',
        'Ela/Ele/Você': 'seguir',
        Nós: 'seguirmos',
        'Eles/Elas/Vocēs': 'seguirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'seguiria',
        Tu: 'seguirias',
        'Ela/Ele/Você': 'seguiria',
        Nós: 'seguiríamos',
        'Eles/Elas/Vocēs': 'seguiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'seguindo'
        },
        {
          form: 'particípio',
          portuguese: 'seguido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'viera',
        Tu: 'vieras',
        'Ela/Ele/Você': 'viera',
        Nós: 'viéramos',
        'Eles/Elas/Vocēs': 'vieram'
      },
      futuroDoPresenteSimples: {
        Eu: 'virei',
        Tu: 'virás',
        'Ela/Ele/Você': 'virá',
        Nós: 'viremos',
        'Eles/Elas/Vocēs': 'virão'
      },
      subjuntivoPresente: {
        Eu: 'venha',
        Tu: 'venhas',
        'Ela/Ele/Você': 'venha',
        Nós: 'venhamos',
        'Eles/Elas/Vocēs': 'venham'
      },
      pretéritoImperfeito: {
        Eu: 'viesse',
        Tu: 'viesses',
        'Ela/Ele/Você': 'viesse',
        Nós: 'viéssemos',
        'Eles/Elas/Vocēs': 'viessem'
      },
      subjuntivoFuturo: {
        Eu: 'vier',
        Tu: 'vieres',
        'Ela/Ele/Você': 'vier',
        Nós: 'viermos',
        'Eles/Elas/Vocēs': 'vierem'
      },
      futurodoPretéritoSimples: {
        Eu: 'viria',
        Tu: 'virias',
        'Ela/Ele/Você': 'viria',
        Nós: 'viríamos',
        'Eles/Elas/Vocēs': 'viriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'vindo'
        },
        {
          form: 'particípio',
          portuguese: 'vindo'
        }
      ]
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
      },
      imperfect: {
        Eu: 'servia',
        Tu: 'servias',
        'Ela/Ele/Você': 'servia',
        Nós: 'servíamos',
        'Eles/Elas/Vocēs': 'serviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'servira',
        Tu: 'serviras',
        'Ela/Ele/Você': 'servira',
        Nós: 'servíramos',
        'Eles/Elas/Vocēs': 'serviram'
      },
      futuroDoPresenteSimples: {
        Eu: 'servirei',
        Tu: 'servirás',
        'Ela/Ele/Você': 'servirá',
        Nós: 'serviremos',
        'Eles/Elas/Vocēs': 'servirão'
      },
      subjuntivoPresente: {
        Eu: 'sirva',
        Tu: 'sirvas',
        'Ela/Ele/Você': 'sirva',
        Nós: 'sirvamos',
        'Eles/Elas/Vocēs': 'sirvam'
      },
      pretéritoImperfeito: {
        Eu: 'servisse',
        Tu: 'servisses',
        'Ela/Ele/Você': 'servisse',
        Nós: 'servíssemos',
        'Eles/Elas/Vocēs': 'servissem'
      },
      subjuntivoFuturo: {
        Eu: 'servir',
        Tu: 'servires',
        'Ela/Ele/Você': 'servir',
        Nós: 'servirmos',
        'Eles/Elas/Vocēs': 'servirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'serviria',
        Tu: 'servirias',
        'Ela/Ele/Você': 'serviria',
        Nós: 'serviríamos',
        'Eles/Elas/Vocēs': 'serviriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'servindo'
        },
        {
          form: 'particípio',
          portuguese: 'servido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'sugeria',
        Tu: 'sugerias',
        'Ela/Ele/Você': 'sugeria',
        Nós: 'sugeríamos',
        'Eles/Elas/Vocēs': 'sugeriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sugerira',
        Tu: 'sugeriras',
        'Ela/Ele/Você': 'sugerira',
        Nós: 'sugeríramos',
        'Eles/Elas/Vocēs': 'sugeriram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sugerirei',
        Tu: 'sugerirás',
        'Ela/Ele/Você': 'sugerirá',
        Nós: 'sugeriremos',
        'Eles/Elas/Vocēs': 'sugerirão'
      },
      subjuntivoPresente: {
        Eu: 'sugira',
        Tu: 'sugiras',
        'Ela/Ele/Você': 'sugira',
        Nós: 'sugiramos',
        'Eles/Elas/Vocēs': 'sugiram'
      },
      pretéritoImperfeito: {
        Eu: 'sugerisse',
        Tu: 'sugerisses',
        'Ela/Ele/Você': 'sugerisse',
        Nós: 'sugeríssemos',
        'Eles/Elas/Vocēs': 'sugerissem'
      },
      subjuntivoFuturo: {
        Eu: 'sugerir',
        Tu: 'sugerires',
        'Ela/Ele/Você': 'sugerir',
        Nós: 'sugerirmos',
        'Eles/Elas/Vocēs': 'sugerirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sugeriria',
        Tu: 'sugeririas',
        'Ela/Ele/Você': 'sugeriria',
        Nós: 'sugeriríamos',
        'Eles/Elas/Vocēs': 'sugeririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sugerindo'
        },
        {
          form: 'particípio',
          portuguese: 'sugerido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'tentava',
        Tu: 'tentavas',
        'Ela/Ele/Você': 'tentava',
        Nós: 'tentávamos',
        'Eles/Elas/Vocēs': 'tentavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tentara',
        Tu: 'tentaras',
        'Ela/Ele/Você': 'tentara',
        Nós: 'tentáramos',
        'Eles/Elas/Vocēs': 'tentaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'tentarei',
        Tu: 'tentarás',
        'Ela/Ele/Você': 'tentará',
        Nós: 'tentaremos',
        'Eles/Elas/Vocēs': 'tentarão'
      },
      subjuntivoPresente: {
        Eu: 'tente',
        Tu: 'tentes',
        'Ela/Ele/Você': 'tente',
        Nós: 'tentemos',
        'Eles/Elas/Vocēs': 'tentem'
      },
      pretéritoImperfeito: {
        Eu: 'tentasse',
        Tu: 'tentasses',
        'Ela/Ele/Você': 'tentasse',
        Nós: 'tentássemos',
        'Eles/Elas/Vocēs': 'tentassem'
      },
      subjuntivoFuturo: {
        Eu: 'tentar',
        Tu: 'tentares',
        'Ela/Ele/Você': 'tentar',
        Nós: 'tentarmos',
        'Eles/Elas/Vocēs': 'tentarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'tentaria',
        Tu: 'tentarias',
        'Ela/Ele/Você': 'tentaria',
        Nós: 'tentaríamos',
        'Eles/Elas/Vocēs': 'tentariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tentando'
        },
        {
          form: 'particípio',
          portuguese: 'tentado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'virava',
        Tu: 'viravas',
        'Ela/Ele/Você': 'virava',
        Nós: 'virávamos',
        'Eles/Elas/Vocēs': 'viravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'virara',
        Tu: 'viraras',
        'Ela/Ele/Você': 'virara',
        Nós: 'viráramos',
        'Eles/Elas/Vocēs': 'viraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'virarei',
        Tu: 'virarás',
        'Ela/Ele/Você': 'virará',
        Nós: 'viraremos',
        'Eles/Elas/Vocēs': 'virarão'
      },
      subjuntivoPresente: {
        Eu: 'vire',
        Tu: 'vires',
        'Ela/Ele/Você': 'vire',
        Nós: 'viremos',
        'Eles/Elas/Vocēs': 'virem'
      },
      pretéritoImperfeito: {
        Eu: 'virasse',
        Tu: 'virasses',
        'Ela/Ele/Você': 'virasse',
        Nós: 'virássemos',
        'Eles/Elas/Vocēs': 'virassem'
      },
      subjuntivoFuturo: {
        Eu: 'virar',
        Tu: 'virares',
        'Ela/Ele/Você': 'virar',
        Nós: 'virarmos',
        'Eles/Elas/Vocēs': 'virarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'viraria',
        Tu: 'virarias',
        'Ela/Ele/Você': 'viraria',
        Nós: 'viraríamos',
        'Eles/Elas/Vocēs': 'virariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'virando'
        },
        {
          form: 'particípio',
          portuguese: 'virado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'vendia',
        Tu: 'vendias',
        'Ela/Ele/Você': 'vendia',
        Nós: 'vendíamos',
        'Eles/Elas/Vocēs': 'vendiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'vendera',
        Tu: 'venderas',
        'Ela/Ele/Você': 'vendera',
        Nós: 'vendêramos',
        'Eles/Elas/Vocēs': 'venderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'venderei',
        Tu: 'venderás',
        'Ela/Ele/Você': 'venderá',
        Nós: 'venderemos',
        'Eles/Elas/Vocēs': 'venderão'
      },
      subjuntivoPresente: {
        Eu: 'venda',
        Tu: 'vendas',
        'Ela/Ele/Você': 'venda',
        Nós: 'vendamos',
        'Eles/Elas/Vocēs': 'vendam'
      },
      pretéritoImperfeito: {
        Eu: 'vendesse',
        Tu: 'vendesses',
        'Ela/Ele/Você': 'vendesse',
        Nós: 'vendêssemos',
        'Eles/Elas/Vocēs': 'vendessem'
      },
      subjuntivoFuturo: {
        Eu: 'vender',
        Tu: 'venderes',
        'Ela/Ele/Você': 'vender',
        Nós: 'vendermos',
        'Eles/Elas/Vocēs': 'venderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'venderia',
        Tu: 'venderias',
        'Ela/Ele/Você': 'venderia',
        Nós: 'venderíamos',
        'Eles/Elas/Vocēs': 'venderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'vendendo'
        },
        {
          form: 'particípio',
          portuguese: 'vendido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'trazia',
        Tu: 'trazias',
        'Ela/Ele/Você': 'trazia',
        Nós: 'trazíamos',
        'Eles/Elas/Vocēs': 'traziam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'trouxera',
        Tu: 'trouxeras',
        'Ela/Ele/Você': 'trouxera',
        Nós: 'trouxéramos',
        'Eles/Elas/Vocēs': 'trouxeram'
      },
      futuroDoPresenteSimples: {
        Eu: 'trarei',
        Tu: 'trarás',
        'Ela/Ele/Você': 'trará',
        Nós: 'traremos',
        'Eles/Elas/Vocēs': 'trarão'
      },
      subjuntivoPresente: {
        Eu: 'traga',
        Tu: 'tragas',
        'Ela/Ele/Você': 'traga',
        Nós: 'tragamos',
        'Eles/Elas/Vocēs': 'tragam'
      },
      pretéritoImperfeito: {
        Eu: 'trouxesse',
        Tu: 'trouxesses',
        'Ela/Ele/Você': 'trouxesse',
        Nós: 'trouxéssemos',
        'Eles/Elas/Vocēs': 'trouxessem'
      },
      subjuntivoFuturo: {
        Eu: 'trouxer',
        Tu: 'trouxeres',
        'Ela/Ele/Você': 'trouxer',
        Nós: 'trouxermos',
        'Eles/Elas/Vocēs': 'trouxerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'traria',
        Tu: 'trarias',
        'Ela/Ele/Você': 'traria',
        Nós: 'traríamos',
        'Eles/Elas/Vocēs': 'trariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'trazendo'
        },
        {
          form: 'particípio',
          portuguese: 'trazido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'transformava-me',
        Tu: 'transformavas-te',
        'Ela/Ele/Você': 'transformava-se',
        Nós: 'transformávamo-nos',
        'Eles/Elas/Vocēs': 'transformavam-se'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'transformara-me',
        Tu: 'transformaras-te',
        'Ela/Ele/Você': 'transformara-se',
        Nós: 'transformáramo-nos',
        'Eles/Elas/Vocēs': 'transformaram-se'
      },
      futuroDoPresenteSimples: {
        Eu: 'transformar-me-ei',
        Tu: 'transformar-te-ás',
        'Ela/Ele/Você': 'transformar-se-á',
        Nós: 'transformar-nos-emos',
        'Eles/Elas/Vocēs': 'transformar-se-ão'
      },
      subjuntivoPresente: {
        Eu: 'metransforme',
        Tu: 'tetransformes',
        'Ela/Ele/Você': 'setransforme',
        Nós: 'nostransformemos',
        'Eles/Elas/Vocēs': 'setransformem'
      },
      pretéritoImperfeito: {
        Eu: 'metransformasse',
        Tu: 'tetransformasses',
        'Ela/Ele/Você': 'setransformasse',
        Nós: 'nostransformássemos',
        'Eles/Elas/Vocēs': 'setransformassem'
      },
      subjuntivoFuturo: {
        Eu: 'metransformar',
        Tu: 'tetransformares',
        'Ela/Ele/Você': 'setransformar',
        Nós: 'nostransformarmos',
        'Eles/Elas/Vocēs': 'setransformarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'transformar-me-ia',
        Tu: 'transformar-te-ias',
        'Ela/Ele/Você': 'transformar-se-ia',
        Nós: 'transformar-nos-íamos',
        'Eles/Elas/Vocēs': 'transformar-se-iam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'transformando-me'
        },
        {
          form: 'particípio',
          portuguese: 'transformado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'transportava',
        Tu: 'transportavas',
        'Ela/Ele/Você': 'transportava',
        Nós: 'transportávamos',
        'Eles/Elas/Vocēs': 'transportavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'transportara',
        Tu: 'transportaras',
        'Ela/Ele/Você': 'transportara',
        Nós: 'transportáramos',
        'Eles/Elas/Vocēs': 'transportaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'transportarei',
        Tu: 'transportarás',
        'Ela/Ele/Você': 'transportará',
        Nós: 'transportaremos',
        'Eles/Elas/Vocēs': 'transportarão'
      },
      subjuntivoPresente: {
        Eu: 'transporte',
        Tu: 'transportes',
        'Ela/Ele/Você': 'transporte',
        Nós: 'transportemos',
        'Eles/Elas/Vocēs': 'transportem'
      },
      pretéritoImperfeito: {
        Eu: 'transportasse',
        Tu: 'transportasses',
        'Ela/Ele/Você': 'transportasse',
        Nós: 'transportássemos',
        'Eles/Elas/Vocēs': 'transportassem'
      },
      subjuntivoFuturo: {
        Eu: 'transportar',
        Tu: 'transportares',
        'Ela/Ele/Você': 'transportar',
        Nós: 'transportarmos',
        'Eles/Elas/Vocēs': 'transportarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'transportaria',
        Tu: 'transportarias',
        'Ela/Ele/Você': 'transportaria',
        Nós: 'transportaríamos',
        'Eles/Elas/Vocēs': 'transportariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'transportando'
        },
        {
          form: 'particípio',
          portuguese: 'transportado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'sofria',
        Tu: 'sofrias',
        'Ela/Ele/Você': 'sofria',
        Nós: 'sofríamos',
        'Eles/Elas/Vocēs': 'sofriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sofrera',
        Tu: 'sofreras',
        'Ela/Ele/Você': 'sofrera',
        Nós: 'sofrêramos',
        'Eles/Elas/Vocēs': 'sofreram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sofrerei',
        Tu: 'sofrerás',
        'Ela/Ele/Você': 'sofrerá',
        Nós: 'sofreremos',
        'Eles/Elas/Vocēs': 'sofrerão'
      },
      subjuntivoPresente: {
        Eu: 'sofra',
        Tu: 'sofras',
        'Ela/Ele/Você': 'sofra',
        Nós: 'soframos',
        'Eles/Elas/Vocēs': 'sofram'
      },
      pretéritoImperfeito: {
        Eu: 'sofresse',
        Tu: 'sofresses',
        'Ela/Ele/Você': 'sofresse',
        Nós: 'sofrêssemos',
        'Eles/Elas/Vocēs': 'sofressem'
      },
      subjuntivoFuturo: {
        Eu: 'sofrer',
        Tu: 'sofreres',
        'Ela/Ele/Você': 'sofrer',
        Nós: 'sofrermos',
        'Eles/Elas/Vocēs': 'sofrerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sofreria',
        Tu: 'sofrerias',
        'Ela/Ele/Você': 'sofreria',
        Nós: 'sofreríamos',
        'Eles/Elas/Vocēs': 'sofreriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sofrendo'
        },
        {
          form: 'particípio',
          portuguese: 'sofrido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'segurava',
        Tu: 'seguravas',
        'Ela/Ele/Você': 'segurava',
        Nós: 'segurávamos',
        'Eles/Elas/Vocēs': 'seguravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'segurara',
        Tu: 'seguraras',
        'Ela/Ele/Você': 'segurara',
        Nós: 'seguráramos',
        'Eles/Elas/Vocēs': 'seguraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'segurarei',
        Tu: 'segurarás',
        'Ela/Ele/Você': 'segurará',
        Nós: 'seguraremos',
        'Eles/Elas/Vocēs': 'segurarão'
      },
      subjuntivoPresente: {
        Eu: 'segure',
        Tu: 'segures',
        'Ela/Ele/Você': 'segure',
        Nós: 'seguremos',
        'Eles/Elas/Vocēs': 'segurem'
      },
      pretéritoImperfeito: {
        Eu: 'segurasse',
        Tu: 'segurasses',
        'Ela/Ele/Você': 'segurasse',
        Nós: 'segurássemos',
        'Eles/Elas/Vocēs': 'segurassem'
      },
      subjuntivoFuturo: {
        Eu: 'segurar',
        Tu: 'segurares',
        'Ela/Ele/Você': 'segurar',
        Nós: 'segurarmos',
        'Eles/Elas/Vocēs': 'segurarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'seguraria',
        Tu: 'segurarias',
        'Ela/Ele/Você': 'seguraria',
        Nós: 'seguraríamos',
        'Eles/Elas/Vocēs': 'segurariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'segurando'
        },
        {
          form: 'particípio',
          portuguese: 'segurado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'significava',
        Tu: 'significavas',
        'Ela/Ele/Você': 'significava',
        Nós: 'significávamos',
        'Eles/Elas/Vocēs': 'significavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'significara',
        Tu: 'significaras',
        'Ela/Ele/Você': 'significara',
        Nós: 'significáramos',
        'Eles/Elas/Vocēs': 'significaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'significarei',
        Tu: 'significarás',
        'Ela/Ele/Você': 'significará',
        Nós: 'significaremos',
        'Eles/Elas/Vocēs': 'significarão'
      },
      subjuntivoPresente: {
        Eu: 'signifique',
        Tu: 'signifiques',
        'Ela/Ele/Você': 'signifique',
        Nós: 'signifiquemos',
        'Eles/Elas/Vocēs': 'signifiquem'
      },
      pretéritoImperfeito: {
        Eu: 'significasse',
        Tu: 'significasses',
        'Ela/Ele/Você': 'significasse',
        Nós: 'significássemos',
        'Eles/Elas/Vocēs': 'significassem'
      },
      subjuntivoFuturo: {
        Eu: 'significar',
        Tu: 'significares',
        'Ela/Ele/Você': 'significar',
        Nós: 'significarmos',
        'Eles/Elas/Vocēs': 'significarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'significaria',
        Tu: 'significarias',
        'Ela/Ele/Você': 'significaria',
        Nós: 'significaríamos',
        'Eles/Elas/Vocēs': 'significariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'significando'
        },
        {
          form: 'particípio',
          portuguese: 'significado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'salvava',
        Tu: 'salvavas',
        'Ela/Ele/Você': 'salvava',
        Nós: 'salvávamos',
        'Eles/Elas/Vocēs': 'salvavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'salvara',
        Tu: 'salvaras',
        'Ela/Ele/Você': 'salvara',
        Nós: 'salváramos',
        'Eles/Elas/Vocēs': 'salvaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'salvarei',
        Tu: 'salvarás',
        'Ela/Ele/Você': 'salvará',
        Nós: 'salvaremos',
        'Eles/Elas/Vocēs': 'salvarão'
      },
      subjuntivoPresente: {
        Eu: 'salve',
        Tu: 'salves',
        'Ela/Ele/Você': 'salve',
        Nós: 'salvemos',
        'Eles/Elas/Vocēs': 'salvem'
      },
      pretéritoImperfeito: {
        Eu: 'salvasse',
        Tu: 'salvasses',
        'Ela/Ele/Você': 'salvasse',
        Nós: 'salvássemos',
        'Eles/Elas/Vocēs': 'salvassem'
      },
      subjuntivoFuturo: {
        Eu: 'salvar',
        Tu: 'salvares',
        'Ela/Ele/Você': 'salvar',
        Nós: 'salvarmos',
        'Eles/Elas/Vocēs': 'salvarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'salvaria',
        Tu: 'salvarias',
        'Ela/Ele/Você': 'salvaria',
        Nós: 'salvaríamos',
        'Eles/Elas/Vocēs': 'salvariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'salvando'
        },
        {
          form: 'particípio',
          portuguese: 'salvado/salvo'
        }
      ]
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
      },
      imperfect: {
        Eu: 'sarava',
        Tu: 'saravas',
        'Ela/Ele/Você': 'sarava',
        Nós: 'sarávamos',
        'Eles/Elas/Vocēs': 'saravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sarara',
        Tu: 'sararas',
        'Ela/Ele/Você': 'sarara',
        Nós: 'saráramos',
        'Eles/Elas/Vocēs': 'sararam'
      },
      futuroDoPresenteSimples: {
        Eu: 'sararei',
        Tu: 'sararás',
        'Ela/Ele/Você': 'sarará',
        Nós: 'sararemos',
        'Eles/Elas/Vocēs': 'sararão'
      },
      subjuntivoPresente: {
        Eu: 'sare',
        Tu: 'sares',
        'Ela/Ele/Você': 'sare',
        Nós: 'saremos',
        'Eles/Elas/Vocēs': 'sarem'
      },
      pretéritoImperfeito: {
        Eu: 'sarasse',
        Tu: 'sarasses',
        'Ela/Ele/Você': 'sarasse',
        Nós: 'sarássemos',
        'Eles/Elas/Vocēs': 'sarassem'
      },
      subjuntivoFuturo: {
        Eu: 'sarar',
        Tu: 'sarares',
        'Ela/Ele/Você': 'sarar',
        Nós: 'sararmos',
        'Eles/Elas/Vocēs': 'sararem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sararia',
        Tu: 'sararias',
        'Ela/Ele/Você': 'sararia',
        Nós: 'sararíamos',
        'Eles/Elas/Vocēs': 'sarariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sarando'
        },
        {
          form: 'particípio',
          portuguese: 'sarado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'rompia',
        Tu: 'rompias',
        'Ela/Ele/Você': 'rompia',
        Nós: 'rompíamos',
        'Eles/Elas/Vocēs': 'rompiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'rompera',
        Tu: 'romperas',
        'Ela/Ele/Você': 'rompera',
        Nós: 'rompêramos',
        'Eles/Elas/Vocēs': 'romperam'
      },
      futuroDoPresenteSimples: {
        Eu: 'romperei',
        Tu: 'romperás',
        'Ela/Ele/Você': 'romperá',
        Nós: 'romperemos',
        'Eles/Elas/Vocēs': 'romperão'
      },
      subjuntivoPresente: {
        Eu: 'rompa',
        Tu: 'rompas',
        'Ela/Ele/Você': 'rompa',
        Nós: 'rompamos',
        'Eles/Elas/Vocēs': 'rompam'
      },
      pretéritoImperfeito: {
        Eu: 'rompesse',
        Tu: 'rompesses',
        'Ela/Ele/Você': 'rompesse',
        Nós: 'rompêssemos',
        'Eles/Elas/Vocēs': 'rompessem'
      },
      subjuntivoFuturo: {
        Eu: 'romper',
        Tu: 'romperes',
        'Ela/Ele/Você': 'romper',
        Nós: 'rompermos',
        'Eles/Elas/Vocēs': 'romperem'
      },
      futurodoPretéritoSimples: {
        Eu: 'romperia',
        Tu: 'romperias',
        'Ela/Ele/Você': 'romperia',
        Nós: 'romperíamos',
        'Eles/Elas/Vocēs': 'romperiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'rompendo'
        },
        {
          form: 'particípio',
          portuguese: 'rompido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'permanecia',
        Tu: 'permanecias',
        'Ela/Ele/Você': 'permanecia',
        Nós: 'permanecíamos',
        'Eles/Elas/Vocēs': 'permaneciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'permanecera',
        Tu: 'permaneceras',
        'Ela/Ele/Você': 'permanecera',
        Nós: 'permanecêramos',
        'Eles/Elas/Vocēs': 'permaneceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'permanecerei',
        Tu: 'permanecerás',
        'Ela/Ele/Você': 'permanecerá',
        Nós: 'permaneceremos',
        'Eles/Elas/Vocēs': 'permanecerão'
      },
      subjuntivoPresente: {
        Eu: 'permaneça',
        Tu: 'permaneças',
        'Ela/Ele/Você': 'permaneça',
        Nós: 'permaneçamos',
        'Eles/Elas/Vocēs': 'permaneçam'
      },
      pretéritoImperfeito: {
        Eu: 'permanecesse',
        Tu: 'permanecesses',
        'Ela/Ele/Você': 'permanecesse',
        Nós: 'permanecêssemos',
        'Eles/Elas/Vocēs': 'permanecessem'
      },
      subjuntivoFuturo: {
        Eu: 'permanecer',
        Tu: 'permaneceres',
        'Ela/Ele/Você': 'permanecer',
        Nós: 'permanecermos',
        'Eles/Elas/Vocēs': 'permanecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'permaneceria',
        Tu: 'permanecerias',
        'Ela/Ele/Você': 'permaneceria',
        Nós: 'permaneceríamos',
        'Eles/Elas/Vocēs': 'permaneceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'permanecendo'
        },
        {
          form: 'particípio',
          portuguese: 'permanecido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'precisava',
        Tu: 'precisavas',
        'Ela/Ele/Você': 'precisava',
        Nós: 'precisávamos',
        'Eles/Elas/Vocēs': 'precisavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'precisara',
        Tu: 'precisaras',
        'Ela/Ele/Você': 'precisara',
        Nós: 'precisáramos',
        'Eles/Elas/Vocēs': 'precisaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'precisarei',
        Tu: 'precisarás',
        'Ela/Ele/Você': 'precisará',
        Nós: 'precisaremos',
        'Eles/Elas/Vocēs': 'precisarão'
      },
      subjuntivoPresente: {
        Eu: 'precise',
        Tu: 'precises',
        'Ela/Ele/Você': 'precise',
        Nós: 'precisemos',
        'Eles/Elas/Vocēs': 'precisem'
      },
      pretéritoImperfeito: {
        Eu: 'precisasse',
        Tu: 'precisasses',
        'Ela/Ele/Você': 'precisasse',
        Nós: 'precisássemos',
        'Eles/Elas/Vocēs': 'precisassem'
      },
      subjuntivoFuturo: {
        Eu: 'precisar',
        Tu: 'precisares',
        'Ela/Ele/Você': 'precisar',
        Nós: 'precisarmos',
        'Eles/Elas/Vocēs': 'precisarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'precisaria',
        Tu: 'precisarias',
        'Ela/Ele/Você': 'precisaria',
        Nós: 'precisaríamos',
        'Eles/Elas/Vocēs': 'precisariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'precisando'
        },
        {
          form: 'particípio',
          portuguese: 'precisado'
        }
      ]
    },
    {
      english: 'to hear',
      infinitive: 'ouvir',
      presentSimple: {
        Eu: 'ouço/oiço',
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
      },
      imperfect: {
        Eu: 'ouvia',
        Tu: 'ouvias',
        'Ela/Ele/Você': 'ouvia',
        Nós: 'ouvíamos',
        'Eles/Elas/Vocēs': 'ouviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ouvira',
        Tu: 'ouviras',
        'Ela/Ele/Você': 'ouvira',
        Nós: 'ouvíramos',
        'Eles/Elas/Vocēs': 'ouviram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ouvirei',
        Tu: 'ouvirás',
        'Ela/Ele/Você': 'ouvirá',
        Nós: 'ouviremos',
        'Eles/Elas/Vocēs': 'ouvirão'
      },
      subjuntivoPresente: {
        Eu: 'ouça/oiça',
        Tu: 'ouças/oiças',
        'Ela/Ele/Você': 'ouça/oiça',
        Nós: 'ouçamos/oiçamos',
        'Eles/Elas/Vocēs': 'ouçam/oiçam'
      },
      pretéritoImperfeito: {
        Eu: 'ouvisse',
        Tu: 'ouvisses',
        'Ela/Ele/Você': 'ouvisse',
        Nós: 'ouvíssemos',
        'Eles/Elas/Vocēs': 'ouvissem'
      },
      subjuntivoFuturo: {
        Eu: 'ouvir',
        Tu: 'ouvires',
        'Ela/Ele/Você': 'ouvir',
        Nós: 'ouvirmos',
        'Eles/Elas/Vocēs': 'ouvirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ouviria',
        Tu: 'ouvirias',
        'Ela/Ele/Você': 'ouviria',
        Nós: 'ouviríamos',
        'Eles/Elas/Vocēs': 'ouviriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ouvindo'
        },
        {
          form: 'particípio',
          portuguese: 'ouvido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'pedia',
        Tu: 'pedias',
        'Ela/Ele/Você': 'pedia',
        Nós: 'pedíamos',
        'Eles/Elas/Vocēs': 'pediam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'pedira',
        Tu: 'pediras',
        'Ela/Ele/Você': 'pedira',
        Nós: 'pedíramos',
        'Eles/Elas/Vocēs': 'pediram'
      },
      futuroDoPresenteSimples: {
        Eu: 'pedirei',
        Tu: 'pedirás',
        'Ela/Ele/Você': 'pedirá',
        Nós: 'pediremos',
        'Eles/Elas/Vocēs': 'pedirão'
      },
      subjuntivoPresente: {
        Eu: 'peça',
        Tu: 'peças',
        'Ela/Ele/Você': 'peça',
        Nós: 'peçamos',
        'Eles/Elas/Vocēs': 'peçam'
      },
      pretéritoImperfeito: {
        Eu: 'pedisse',
        Tu: 'pedisses',
        'Ela/Ele/Você': 'pedisse',
        Nós: 'pedíssemos',
        'Eles/Elas/Vocēs': 'pedissem'
      },
      subjuntivoFuturo: {
        Eu: 'pedir',
        Tu: 'pedires',
        'Ela/Ele/Você': 'pedir',
        Nós: 'pedirmos',
        'Eles/Elas/Vocēs': 'pedirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pediria',
        Tu: 'pedirias',
        'Ela/Ele/Você': 'pediria',
        Nós: 'pediríamos',
        'Eles/Elas/Vocēs': 'pediriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'pedindo'
        },
        {
          form: 'particípio',
          portuguese: 'pedido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'oferecia',
        Tu: 'oferecias',
        'Ela/Ele/Você': 'oferecia',
        Nós: 'oferecíamos',
        'Eles/Elas/Vocēs': 'ofereciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'oferecera',
        Tu: 'ofereceras',
        'Ela/Ele/Você': 'oferecera',
        Nós: 'oferecêramos',
        'Eles/Elas/Vocēs': 'ofereceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'oferecerei',
        Tu: 'oferecerás',
        'Ela/Ele/Você': 'oferecerá',
        Nós: 'ofereceremos',
        'Eles/Elas/Vocēs': 'oferecerão'
      },
      subjuntivoPresente: {
        Eu: 'ofereça',
        Tu: 'ofereças',
        'Ela/Ele/Você': 'ofereça',
        Nós: 'ofereçamos',
        'Eles/Elas/Vocēs': 'ofereçam'
      },
      pretéritoImperfeito: {
        Eu: 'oferecesse',
        Tu: 'oferecesses',
        'Ela/Ele/Você': 'oferecesse',
        Nós: 'oferecêssemos',
        'Eles/Elas/Vocēs': 'oferecessem'
      },
      subjuntivoFuturo: {
        Eu: 'oferecer',
        Tu: 'ofereceres',
        'Ela/Ele/Você': 'oferecer',
        Nós: 'oferecermos',
        'Eles/Elas/Vocēs': 'oferecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ofereceria',
        Tu: 'oferecerias',
        'Ela/Ele/Você': 'ofereceria',
        Nós: 'ofereceríamos',
        'Eles/Elas/Vocēs': 'ofereceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'oferecendo'
        },
        {
          form: 'particípio',
          portuguese: 'oferecido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'obtinha',
        Tu: 'obtinhas',
        'Ela/Ele/Você': 'obtinha',
        Nós: 'obtínhamos',
        'Eles/Elas/Vocēs': 'obtinham'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'obtivera',
        Tu: 'obtiveras',
        'Ela/Ele/Você': 'obtivera',
        Nós: 'obtivéramos',
        'Eles/Elas/Vocēs': 'obtiveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'obterei',
        Tu: 'obterás',
        'Ela/Ele/Você': 'obterá',
        Nós: 'obteremos',
        'Eles/Elas/Vocēs': 'obterão'
      },
      subjuntivoPresente: {
        Eu: 'obtenha',
        Tu: 'obtenhas',
        'Ela/Ele/Você': 'obtenha',
        Nós: 'obtenhamos',
        'Eles/Elas/Vocēs': 'obtenham'
      },
      pretéritoImperfeito: {
        Eu: 'obtivesse',
        Tu: 'obtivesses',
        'Ela/Ele/Você': 'obtivesse',
        Nós: 'obtivéssemos',
        'Eles/Elas/Vocēs': 'obtivessem'
      },
      subjuntivoFuturo: {
        Eu: 'obtiver',
        Tu: 'obtiveres',
        'Ela/Ele/Você': 'obtiver',
        Nós: 'obtivermos',
        'Eles/Elas/Vocēs': 'obtiverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'obteria',
        Tu: 'obterias',
        'Ela/Ele/Você': 'obteria',
        Nós: 'obteríamos',
        'Eles/Elas/Vocēs': 'obteriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'obtendo'
        },
        {
          form: 'particípio',
          portuguese: 'obtido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'ocorria',
        Tu: 'ocorrias',
        'Ela/Ele/Você': 'ocorria',
        Nós: 'ocorríamos',
        'Eles/Elas/Vocēs': 'ocorriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'ocorrera',
        Tu: 'ocorreras',
        'Ela/Ele/Você': 'ocorrera',
        Nós: 'ocorrêramos',
        'Eles/Elas/Vocēs': 'ocorreram'
      },
      futuroDoPresenteSimples: {
        Eu: 'ocorrerei',
        Tu: 'ocorrerás',
        'Ela/Ele/Você': 'ocorrerá',
        Nós: 'ocorreremos',
        'Eles/Elas/Vocēs': 'ocorrerão'
      },
      subjuntivoPresente: {
        Eu: 'ocorra',
        Tu: 'ocorras',
        'Ela/Ele/Você': 'ocorra',
        Nós: 'ocorramos',
        'Eles/Elas/Vocēs': 'ocorram'
      },
      pretéritoImperfeito: {
        Eu: 'ocorresse',
        Tu: 'ocorresses',
        'Ela/Ele/Você': 'ocorresse',
        Nós: 'ocorrêssemos',
        'Eles/Elas/Vocēs': 'ocorressem'
      },
      subjuntivoFuturo: {
        Eu: 'ocorrer',
        Tu: 'ocorreres',
        'Ela/Ele/Você': 'ocorrer',
        Nós: 'ocorrermos',
        'Eles/Elas/Vocēs': 'ocorrerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'ocorreria',
        Tu: 'ocorrerias',
        'Ela/Ele/Você': 'ocorreria',
        Nós: 'ocorreríamos',
        'Eles/Elas/Vocēs': 'ocorreriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'ocorrendo'
        },
        {
          form: 'particípio',
          portuguese: 'ocorrido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'movia',
        Tu: 'movias',
        'Ela/Ele/Você': 'movia',
        Nós: 'movíamos',
        'Eles/Elas/Vocēs': 'moviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'movera',
        Tu: 'moveras',
        'Ela/Ele/Você': 'movera',
        Nós: 'movêramos',
        'Eles/Elas/Vocēs': 'moveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'moverei',
        Tu: 'moverás',
        'Ela/Ele/Você': 'moverá',
        Nós: 'moveremos',
        'Eles/Elas/Vocēs': 'moverão'
      },
      subjuntivoPresente: {
        Eu: 'mova',
        Tu: 'movas',
        'Ela/Ele/Você': 'mova',
        Nós: 'movamos',
        'Eles/Elas/Vocēs': 'movam'
      },
      pretéritoImperfeito: {
        Eu: 'movesse',
        Tu: 'movesses',
        'Ela/Ele/Você': 'movesse',
        Nós: 'movêssemos',
        'Eles/Elas/Vocēs': 'movessem'
      },
      subjuntivoFuturo: {
        Eu: 'mover',
        Tu: 'moveres',
        'Ela/Ele/Você': 'mover',
        Nós: 'movermos',
        'Eles/Elas/Vocēs': 'moverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'moveria',
        Tu: 'moverias',
        'Ela/Ele/Você': 'moveria',
        Nós: 'moveríamos',
        'Eles/Elas/Vocēs': 'moveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'movendo'
        },
        {
          form: 'particípio',
          portuguese: 'movido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'mostrava',
        Tu: 'mostravas',
        'Ela/Ele/Você': 'mostrava',
        Nós: 'mostrávamos',
        'Eles/Elas/Vocēs': 'mostravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mostrara',
        Tu: 'mostraras',
        'Ela/Ele/Você': 'mostrara',
        Nós: 'mostráramos',
        'Eles/Elas/Vocēs': 'mostraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'mostrarei',
        Tu: 'mostrarás',
        'Ela/Ele/Você': 'mostrará',
        Nós: 'mostraremos',
        'Eles/Elas/Vocēs': 'mostrarão'
      },
      subjuntivoPresente: {
        Eu: 'mostre',
        Tu: 'mostres',
        'Ela/Ele/Você': 'mostre',
        Nós: 'mostremos',
        'Eles/Elas/Vocēs': 'mostrem'
      },
      pretéritoImperfeito: {
        Eu: 'mostrasse',
        Tu: 'mostrasses',
        'Ela/Ele/Você': 'mostrasse',
        Nós: 'mostrássemos',
        'Eles/Elas/Vocēs': 'mostrassem'
      },
      subjuntivoFuturo: {
        Eu: 'mostrar',
        Tu: 'mostrares',
        'Ela/Ele/Você': 'mostrar',
        Nós: 'mostrarmos',
        'Eles/Elas/Vocēs': 'mostrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mostraria',
        Tu: 'mostrarias',
        'Ela/Ele/Você': 'mostraria',
        Nós: 'mostraríamos',
        'Eles/Elas/Vocēs': 'mostrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mostrando'
        },
        {
          form: 'particípio',
          portuguese: 'mostrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'brincava',
        Tu: 'brincavas',
        'Ela/Ele/Você': 'brincava',
        Nós: 'brincávamos',
        'Eles/Elas/Vocēs': 'brincavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'brincara',
        Tu: 'brincaras',
        'Ela/Ele/Você': 'brincara',
        Nós: 'brincáramos',
        'Eles/Elas/Vocēs': 'brincaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'brincarei',
        Tu: 'brincarás',
        'Ela/Ele/Você': 'brincará',
        Nós: 'brincaremos',
        'Eles/Elas/Vocēs': 'brincarão'
      },
      subjuntivoPresente: {
        Eu: 'brinque',
        Tu: 'brinques',
        'Ela/Ele/Você': 'brinque',
        Nós: 'brinquemos',
        'Eles/Elas/Vocēs': 'brinquem'
      },
      pretéritoImperfeito: {
        Eu: 'brincasse',
        Tu: 'brincasses',
        'Ela/Ele/Você': 'brincasse',
        Nós: 'brincássemos',
        'Eles/Elas/Vocēs': 'brincassem'
      },
      subjuntivoFuturo: {
        Eu: 'brincar',
        Tu: 'brincares',
        'Ela/Ele/Você': 'brincar',
        Nós: 'brincarmos',
        'Eles/Elas/Vocēs': 'brincarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'brincaria',
        Tu: 'brincarias',
        'Ela/Ele/Você': 'brincaria',
        Nós: 'brincaríamos',
        'Eles/Elas/Vocēs': 'brincariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'brincando'
        },
        {
          form: 'particípio',
          portuguese: 'brincado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'viajava',
        Tu: 'viajavas',
        'Ela/Ele/Você': 'viajava',
        Nós: 'viajávamos',
        'Eles/Elas/Vocēs': 'viajavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'viajara',
        Tu: 'viajaras',
        'Ela/Ele/Você': 'viajara',
        Nós: 'viajáramos',
        'Eles/Elas/Vocēs': 'viajaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'viajarei',
        Tu: 'viajarás',
        'Ela/Ele/Você': 'viajará',
        Nós: 'viajaremos',
        'Eles/Elas/Vocēs': 'viajarão'
      },
      subjuntivoPresente: {
        Eu: 'viaje',
        Tu: 'viajes',
        'Ela/Ele/Você': 'viaje',
        Nós: 'viajemos',
        'Eles/Elas/Vocēs': 'viajem'
      },
      pretéritoImperfeito: {
        Eu: 'viajasse',
        Tu: 'viajasses',
        'Ela/Ele/Você': 'viajasse',
        Nós: 'viajássemos',
        'Eles/Elas/Vocēs': 'viajassem'
      },
      subjuntivoFuturo: {
        Eu: 'viajar',
        Tu: 'viajares',
        'Ela/Ele/Você': 'viajar',
        Nós: 'viajarmos',
        'Eles/Elas/Vocēs': 'viajarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'viajaria',
        Tu: 'viajarias',
        'Ela/Ele/Você': 'viajaria',
        Nós: 'viajaríamos',
        'Eles/Elas/Vocēs': 'viajariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'viajando'
        },
        {
          form: 'particípio',
          portuguese: 'viajado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'atravessava',
        Tu: 'atravessavas',
        'Ela/Ele/Você': 'atravessava',
        Nós: 'atravessávamos',
        'Eles/Elas/Vocēs': 'atravessavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'atravessara',
        Tu: 'atravessaras',
        'Ela/Ele/Você': 'atravessara',
        Nós: 'atravessáramos',
        'Eles/Elas/Vocēs': 'atravessaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'atravessarei',
        Tu: 'atravessarás',
        'Ela/Ele/Você': 'atravessará',
        Nós: 'atravessaremos',
        'Eles/Elas/Vocēs': 'atravessarão'
      },
      subjuntivoPresente: {
        Eu: 'atravesse',
        Tu: 'atravesses',
        'Ela/Ele/Você': 'atravesse',
        Nós: 'atravessemos',
        'Eles/Elas/Vocēs': 'atravessem'
      },
      pretéritoImperfeito: {
        Eu: 'atravessasse',
        Tu: 'atravessasses',
        'Ela/Ele/Você': 'atravessasse',
        Nós: 'atravessássemos',
        'Eles/Elas/Vocēs': 'atravessassem'
      },
      subjuntivoFuturo: {
        Eu: 'atravessar',
        Tu: 'atravessares',
        'Ela/Ele/Você': 'atravessar',
        Nós: 'atravessarmos',
        'Eles/Elas/Vocēs': 'atravessarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'atravessaria',
        Tu: 'atravessarias',
        'Ela/Ele/Você': 'atravessaria',
        Nós: 'atravessaríamos',
        'Eles/Elas/Vocēs': 'atravessariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'atravessando'
        },
        {
          form: 'particípio',
          portuguese: 'atravessado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'promovia',
        Tu: 'promovias',
        'Ela/Ele/Você': 'promovia',
        Nós: 'promovíamos',
        'Eles/Elas/Vocēs': 'promoviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'promovera',
        Tu: 'promoveras',
        'Ela/Ele/Você': 'promovera',
        Nós: 'promovêramos',
        'Eles/Elas/Vocēs': 'promoveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'promoverei',
        Tu: 'promoverás',
        'Ela/Ele/Você': 'promoverá',
        Nós: 'promoveremos',
        'Eles/Elas/Vocēs': 'promoverão'
      },
      subjuntivoPresente: {
        Eu: 'promova',
        Tu: 'promovas',
        'Ela/Ele/Você': 'promova',
        Nós: 'promovamos',
        'Eles/Elas/Vocēs': 'promovam'
      },
      pretéritoImperfeito: {
        Eu: 'promovesse',
        Tu: 'promovesses',
        'Ela/Ele/Você': 'promovesse',
        Nós: 'promovêssemos',
        'Eles/Elas/Vocēs': 'promovessem'
      },
      subjuntivoFuturo: {
        Eu: 'promover',
        Tu: 'promoveres',
        'Ela/Ele/Você': 'promover',
        Nós: 'promovermos',
        'Eles/Elas/Vocēs': 'promoverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'promoveria',
        Tu: 'promoverias',
        'Ela/Ele/Você': 'promoveria',
        Nós: 'promoveríamos',
        'Eles/Elas/Vocēs': 'promoveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'promovendo'
        },
        {
          form: 'particípio',
          portuguese: 'promovido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'casava',
        Tu: 'casavas',
        'Ela/Ele/Você': 'casava',
        Nós: 'casávamos',
        'Eles/Elas/Vocēs': 'casavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'casara',
        Tu: 'casaras',
        'Ela/Ele/Você': 'casara',
        Nós: 'casáramos',
        'Eles/Elas/Vocēs': 'casaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'casarei',
        Tu: 'casarás',
        'Ela/Ele/Você': 'casará',
        Nós: 'casaremos',
        'Eles/Elas/Vocēs': 'casarão'
      },
      subjuntivoPresente: {
        Eu: 'case',
        Tu: 'cases',
        'Ela/Ele/Você': 'case',
        Nós: 'casemos',
        'Eles/Elas/Vocēs': 'casem'
      },
      pretéritoImperfeito: {
        Eu: 'casasse',
        Tu: 'casasses',
        'Ela/Ele/Você': 'casasse',
        Nós: 'casássemos',
        'Eles/Elas/Vocēs': 'casassem'
      },
      subjuntivoFuturo: {
        Eu: 'casar',
        Tu: 'casares',
        'Ela/Ele/Você': 'casar',
        Nós: 'casarmos',
        'Eles/Elas/Vocēs': 'casarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'casaria',
        Tu: 'casarias',
        'Ela/Ele/Você': 'casaria',
        Nós: 'casaríamos',
        'Eles/Elas/Vocēs': 'casariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'casando'
        },
        {
          form: 'particípio',
          portuguese: 'casado'
        }
      ]
    },
    {
      english: 'to take with you',
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
      },
      imperfect: {
        Eu: 'levava',
        Tu: 'levavas',
        'Ela/Ele/Você': 'levava',
        Nós: 'levávamos',
        'Eles/Elas/Vocēs': 'levavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'levara',
        Tu: 'levaras',
        'Ela/Ele/Você': 'levara',
        Nós: 'leváramos',
        'Eles/Elas/Vocēs': 'levaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'levarei',
        Tu: 'levarás',
        'Ela/Ele/Você': 'levará',
        Nós: 'levaremos',
        'Eles/Elas/Vocēs': 'levarão'
      },
      subjuntivoPresente: {
        Eu: 'leve',
        Tu: 'leves',
        'Ela/Ele/Você': 'leve',
        Nós: 'levemos',
        'Eles/Elas/Vocēs': 'levem'
      },
      pretéritoImperfeito: {
        Eu: 'levasse',
        Tu: 'levasses',
        'Ela/Ele/Você': 'levasse',
        Nós: 'levássemos',
        'Eles/Elas/Vocēs': 'levassem'
      },
      subjuntivoFuturo: {
        Eu: 'levar',
        Tu: 'levares',
        'Ela/Ele/Você': 'levar',
        Nós: 'levarmos',
        'Eles/Elas/Vocēs': 'levarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'levaria',
        Tu: 'levarias',
        'Ela/Ele/Você': 'levaria',
        Nós: 'levaríamos',
        'Eles/Elas/Vocēs': 'levariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'levando'
        },
        {
          form: 'particípio',
          portuguese: 'levado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'agarrava',
        Tu: 'agarravas',
        'Ela/Ele/Você': 'agarrava',
        Nós: 'agarrávamos',
        'Eles/Elas/Vocēs': 'agarravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'agarrara',
        Tu: 'agarraras',
        'Ela/Ele/Você': 'agarrara',
        Nós: 'agarráramos',
        'Eles/Elas/Vocēs': 'agarraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'agarrarei',
        Tu: 'agarrarás',
        'Ela/Ele/Você': 'agarrará',
        Nós: 'agarraremos',
        'Eles/Elas/Vocēs': 'agarrarão'
      },
      subjuntivoPresente: {
        Eu: 'agarre',
        Tu: 'agarres',
        'Ela/Ele/Você': 'agarre',
        Nós: 'agarremos',
        'Eles/Elas/Vocēs': 'agarrem'
      },
      pretéritoImperfeito: {
        Eu: 'agarrasse',
        Tu: 'agarrasses',
        'Ela/Ele/Você': 'agarrasse',
        Nós: 'agarrássemos',
        'Eles/Elas/Vocēs': 'agarrassem'
      },
      subjuntivoFuturo: {
        Eu: 'agarrar',
        Tu: 'agarrares',
        'Ela/Ele/Você': 'agarrar',
        Nós: 'agarrarmos',
        'Eles/Elas/Vocēs': 'agarrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'agarraria',
        Tu: 'agarrarias',
        'Ela/Ele/Você': 'agarraria',
        Nós: 'agarraríamos',
        'Eles/Elas/Vocēs': 'agarrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'agarrando'
        },
        {
          form: 'particípio',
          portuguese: 'agarrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'respondia',
        Tu: 'respondias',
        'Ela/Ele/Você': 'respondia',
        Nós: 'respondíamos',
        'Eles/Elas/Vocēs': 'respondiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'respondera',
        Tu: 'responderas',
        'Ela/Ele/Você': 'respondera',
        Nós: 'respondêramos',
        'Eles/Elas/Vocēs': 'responderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'responderei',
        Tu: 'responderás',
        'Ela/Ele/Você': 'responderá',
        Nós: 'responderemos',
        'Eles/Elas/Vocēs': 'responderão'
      },
      subjuntivoPresente: {
        Eu: 'responda',
        Tu: 'respondas',
        'Ela/Ele/Você': 'responda',
        Nós: 'respondamos',
        'Eles/Elas/Vocēs': 'respondam'
      },
      pretéritoImperfeito: {
        Eu: 'respondesse',
        Tu: 'respondesses',
        'Ela/Ele/Você': 'respondesse',
        Nós: 'respondêssemos',
        'Eles/Elas/Vocēs': 'respondessem'
      },
      subjuntivoFuturo: {
        Eu: 'responder',
        Tu: 'responderes',
        'Ela/Ele/Você': 'responder',
        Nós: 'respondermos',
        'Eles/Elas/Vocēs': 'responderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'responderia',
        Tu: 'responderias',
        'Ela/Ele/Você': 'responderia',
        Nós: 'responderíamos',
        'Eles/Elas/Vocēs': 'responderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'respondendo'
        },
        {
          form: 'particípio',
          portuguese: 'respondido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'sorria',
        Tu: 'sorrias',
        'Ela/Ele/Você': 'sorria',
        Nós: 'sorríamos',
        'Eles/Elas/Vocēs': 'sorriam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sorrira',
        Tu: 'sorriras',
        'Ela/Ele/Você': 'sorrira',
        Nós: 'sorríramos',
        'Eles/Elas/Vocēs': 'sorriram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sorrirei',
        Tu: 'sorrirás',
        'Ela/Ele/Você': 'sorrirá',
        Nós: 'sorriremos',
        'Eles/Elas/Vocēs': 'sorrirão'
      },
      subjuntivoPresente: {
        Eu: 'sorria',
        Tu: 'sorrias',
        'Ela/Ele/Você': 'sorria',
        Nós: 'sorriamos',
        'Eles/Elas/Vocēs': 'sorriam'
      },
      pretéritoImperfeito: {
        Eu: 'sorrisse',
        Tu: 'sorrisses',
        'Ela/Ele/Você': 'sorrisse',
        Nós: 'sorríssemos',
        'Eles/Elas/Vocēs': 'sorrissem'
      },
      subjuntivoFuturo: {
        Eu: 'sorrir',
        Tu: 'sorrires',
        'Ela/Ele/Você': 'sorrir',
        Nós: 'sorrirmos',
        'Eles/Elas/Vocēs': 'sorrirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sorriria',
        Tu: 'sorririas',
        'Ela/Ele/Você': 'sorriria',
        Nós: 'sorriríamos',
        'Eles/Elas/Vocēs': 'sorririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sorrindo'
        },
        {
          form: 'particípio',
          portuguese: 'sorrido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'suspirava',
        Tu: 'suspiravas',
        'Ela/Ele/Você': 'suspirava',
        Nós: 'suspirávamos',
        'Eles/Elas/Vocēs': 'suspiravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'suspirara',
        Tu: 'suspiraras',
        'Ela/Ele/Você': 'suspirara',
        Nós: 'suspiráramos',
        'Eles/Elas/Vocēs': 'suspiraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'suspirarei',
        Tu: 'suspirarás',
        'Ela/Ele/Você': 'suspirará',
        Nós: 'suspiraremos',
        'Eles/Elas/Vocēs': 'suspirarão'
      },
      subjuntivoPresente: {
        Eu: 'suspire',
        Tu: 'suspires',
        'Ela/Ele/Você': 'suspire',
        Nós: 'suspiremos',
        'Eles/Elas/Vocēs': 'suspirem'
      },
      pretéritoImperfeito: {
        Eu: 'suspirasse',
        Tu: 'suspirasses',
        'Ela/Ele/Você': 'suspirasse',
        Nós: 'suspirássemos',
        'Eles/Elas/Vocēs': 'suspirassem'
      },
      subjuntivoFuturo: {
        Eu: 'suspirar',
        Tu: 'suspirares',
        'Ela/Ele/Você': 'suspirar',
        Nós: 'suspirarmos',
        'Eles/Elas/Vocēs': 'suspirarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'suspiraria',
        Tu: 'suspirarias',
        'Ela/Ele/Você': 'suspiraria',
        Nós: 'suspiraríamos',
        'Eles/Elas/Vocēs': 'suspirariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'suspirando'
        },
        {
          form: 'particípio',
          portuguese: 'suspirado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'nadava',
        Tu: 'nadavas',
        'Ela/Ele/Você': 'nadava',
        Nós: 'nadávamos',
        'Eles/Elas/Vocēs': 'nadavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'nadara',
        Tu: 'nadaras',
        'Ela/Ele/Você': 'nadara',
        Nós: 'nadáramos',
        'Eles/Elas/Vocēs': 'nadaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'nadarei',
        Tu: 'nadarás',
        'Ela/Ele/Você': 'nadará',
        Nós: 'nadaremos',
        'Eles/Elas/Vocēs': 'nadarão'
      },
      subjuntivoPresente: {
        Eu: 'nade',
        Tu: 'nades',
        'Ela/Ele/Você': 'nade',
        Nós: 'nademos',
        'Eles/Elas/Vocēs': 'nadem'
      },
      pretéritoImperfeito: {
        Eu: 'nadasse',
        Tu: 'nadasses',
        'Ela/Ele/Você': 'nadasse',
        Nós: 'nadássemos',
        'Eles/Elas/Vocēs': 'nadassem'
      },
      subjuntivoFuturo: {
        Eu: 'nadar',
        Tu: 'nadares',
        'Ela/Ele/Você': 'nadar',
        Nós: 'nadarmos',
        'Eles/Elas/Vocēs': 'nadarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'nadaria',
        Tu: 'nadarias',
        'Ela/Ele/Você': 'nadaria',
        Nós: 'nadaríamos',
        'Eles/Elas/Vocēs': 'nadariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'nadando'
        },
        {
          form: 'particípio',
          portuguese: 'nadado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'voava',
        Tu: 'voavas',
        'Ela/Ele/Você': 'voava',
        Nós: 'voávamos',
        'Eles/Elas/Vocēs': 'voavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'voara',
        Tu: 'voaras',
        'Ela/Ele/Você': 'voara',
        Nós: 'voáramos',
        'Eles/Elas/Vocēs': 'voaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'voarei',
        Tu: 'voarás',
        'Ela/Ele/Você': 'voará',
        Nós: 'voaremos',
        'Eles/Elas/Vocēs': 'voarão'
      },
      subjuntivoPresente: {
        Eu: 'voe',
        Tu: 'voes',
        'Ela/Ele/Você': 'voe',
        Nós: 'voemos',
        'Eles/Elas/Vocēs': 'voem'
      },
      pretéritoImperfeito: {
        Eu: 'voasse',
        Tu: 'voasses',
        'Ela/Ele/Você': 'voasse',
        Nós: 'voássemos',
        'Eles/Elas/Vocēs': 'voassem'
      },
      subjuntivoFuturo: {
        Eu: 'voar',
        Tu: 'voares',
        'Ela/Ele/Você': 'voar',
        Nós: 'voarmos',
        'Eles/Elas/Vocēs': 'voarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'voaria',
        Tu: 'voarias',
        'Ela/Ele/Você': 'voaria',
        Nós: 'voaríamos',
        'Eles/Elas/Vocēs': 'voariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'voando'
        },
        {
          form: 'particípio',
          portuguese: 'voado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'soltava',
        Tu: 'soltavas',
        'Ela/Ele/Você': 'soltava',
        Nós: 'soltávamos',
        'Eles/Elas/Vocēs': 'soltavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'soltara',
        Tu: 'soltaras',
        'Ela/Ele/Você': 'soltara',
        Nós: 'soltáramos',
        'Eles/Elas/Vocēs': 'soltaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'soltarei',
        Tu: 'soltarás',
        'Ela/Ele/Você': 'soltará',
        Nós: 'soltaremos',
        'Eles/Elas/Vocēs': 'soltarão'
      },
      subjuntivoPresente: {
        Eu: 'solte',
        Tu: 'soltes',
        'Ela/Ele/Você': 'solte',
        Nós: 'soltemos',
        'Eles/Elas/Vocēs': 'soltem'
      },
      pretéritoImperfeito: {
        Eu: 'soltasse',
        Tu: 'soltasses',
        'Ela/Ele/Você': 'soltasse',
        Nós: 'soltássemos',
        'Eles/Elas/Vocēs': 'soltassem'
      },
      subjuntivoFuturo: {
        Eu: 'soltar',
        Tu: 'soltares',
        'Ela/Ele/Você': 'soltar',
        Nós: 'soltarmos',
        'Eles/Elas/Vocēs': 'soltarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'soltaria',
        Tu: 'soltarias',
        'Ela/Ele/Você': 'soltaria',
        Nós: 'soltaríamos',
        'Eles/Elas/Vocēs': 'soltariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'soltando'
        },
        {
          form: 'particípio',
          portuguese: 'soltado/solto'
        }
      ]
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
      },
      imperfect: {
        Eu: 'separava',
        Tu: 'separavas',
        'Ela/Ele/Você': 'separava',
        Nós: 'separávamos',
        'Eles/Elas/Vocēs': 'separavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'separara',
        Tu: 'separaras',
        'Ela/Ele/Você': 'separara',
        Nós: 'separáramos',
        'Eles/Elas/Vocēs': 'separaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'separarei',
        Tu: 'separarás',
        'Ela/Ele/Você': 'separará',
        Nós: 'separaremos',
        'Eles/Elas/Vocēs': 'separarão'
      },
      subjuntivoPresente: {
        Eu: 'separe',
        Tu: 'separes',
        'Ela/Ele/Você': 'separe',
        Nós: 'separemos',
        'Eles/Elas/Vocēs': 'separem'
      },
      pretéritoImperfeito: {
        Eu: 'separasse',
        Tu: 'separasses',
        'Ela/Ele/Você': 'separasse',
        Nós: 'separássemos',
        'Eles/Elas/Vocēs': 'separassem'
      },
      subjuntivoFuturo: {
        Eu: 'separar',
        Tu: 'separares',
        'Ela/Ele/Você': 'separar',
        Nós: 'separarmos',
        'Eles/Elas/Vocēs': 'separarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'separaria',
        Tu: 'separarias',
        'Ela/Ele/Você': 'separaria',
        Nós: 'separaríamos',
        'Eles/Elas/Vocēs': 'separariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'separando'
        },
        {
          form: 'particípio',
          portuguese: 'separado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'empurrava',
        Tu: 'empurravas',
        'Ela/Ele/Você': 'empurrava',
        Nós: 'empurrávamos',
        'Eles/Elas/Vocēs': 'empurravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'empurrara',
        Tu: 'empurraras',
        'Ela/Ele/Você': 'empurrara',
        Nós: 'empurráramos',
        'Eles/Elas/Vocēs': 'empurraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'empurrarei',
        Tu: 'empurrarás',
        'Ela/Ele/Você': 'empurrará',
        Nós: 'empurraremos',
        'Eles/Elas/Vocēs': 'empurrarão'
      },
      subjuntivoPresente: {
        Eu: 'empurre',
        Tu: 'empurres',
        'Ela/Ele/Você': 'empurre',
        Nós: 'empurremos',
        'Eles/Elas/Vocēs': 'empurrem'
      },
      pretéritoImperfeito: {
        Eu: 'empurrasse',
        Tu: 'empurrasses',
        'Ela/Ele/Você': 'empurrasse',
        Nós: 'empurrássemos',
        'Eles/Elas/Vocēs': 'empurrassem'
      },
      subjuntivoFuturo: {
        Eu: 'empurrar',
        Tu: 'empurrares',
        'Ela/Ele/Você': 'empurrar',
        Nós: 'empurrarmos',
        'Eles/Elas/Vocēs': 'empurrarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'empurraria',
        Tu: 'empurrarias',
        'Ela/Ele/Você': 'empurraria',
        Nós: 'empurraríamos',
        'Eles/Elas/Vocēs': 'empurrariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'empurrando'
        },
        {
          form: 'particípio',
          portuguese: 'empurrado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'voltava',
        Tu: 'voltavas',
        'Ela/Ele/Você': 'voltava',
        Nós: 'voltávamos',
        'Eles/Elas/Vocēs': 'voltavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'voltara',
        Tu: 'voltaras',
        'Ela/Ele/Você': 'voltara',
        Nós: 'voltáramos',
        'Eles/Elas/Vocēs': 'voltaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'voltarei',
        Tu: 'voltarás',
        'Ela/Ele/Você': 'voltará',
        Nós: 'voltaremos',
        'Eles/Elas/Vocēs': 'voltarão'
      },
      subjuntivoPresente: {
        Eu: 'volte',
        Tu: 'voltes',
        'Ela/Ele/Você': 'volte',
        Nós: 'voltemos',
        'Eles/Elas/Vocēs': 'voltem'
      },
      pretéritoImperfeito: {
        Eu: 'voltasse',
        Tu: 'voltasses',
        'Ela/Ele/Você': 'voltasse',
        Nós: 'voltássemos',
        'Eles/Elas/Vocēs': 'voltassem'
      },
      subjuntivoFuturo: {
        Eu: 'voltar',
        Tu: 'voltares',
        'Ela/Ele/Você': 'voltar',
        Nós: 'voltarmos',
        'Eles/Elas/Vocēs': 'voltarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'voltaria',
        Tu: 'voltarias',
        'Ela/Ele/Você': 'voltaria',
        Nós: 'voltaríamos',
        'Eles/Elas/Vocēs': 'voltariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'voltando'
        },
        {
          form: 'particípio',
          portuguese: 'voltado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'abanava',
        Tu: 'abanavas',
        'Ela/Ele/Você': 'abanava',
        Nós: 'abanávamos',
        'Eles/Elas/Vocēs': 'abanavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'abanara',
        Tu: 'abanaras',
        'Ela/Ele/Você': 'abanara',
        Nós: 'abanáramos',
        'Eles/Elas/Vocēs': 'abanaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'abanarei',
        Tu: 'abanarás',
        'Ela/Ele/Você': 'abanará',
        Nós: 'abanaremos',
        'Eles/Elas/Vocēs': 'abanarão'
      },
      subjuntivoPresente: {
        Eu: 'abane',
        Tu: 'abanes',
        'Ela/Ele/Você': 'abane',
        Nós: 'abanemos',
        'Eles/Elas/Vocēs': 'abanem'
      },
      pretéritoImperfeito: {
        Eu: 'abanasse',
        Tu: 'abanasses',
        'Ela/Ele/Você': 'abanasse',
        Nós: 'abanássemos',
        'Eles/Elas/Vocēs': 'abanassem'
      },
      subjuntivoFuturo: {
        Eu: 'abanar',
        Tu: 'abanares',
        'Ela/Ele/Você': 'abanar',
        Nós: 'abanarmos',
        'Eles/Elas/Vocēs': 'abanarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'abanaria',
        Tu: 'abanarias',
        'Ela/Ele/Você': 'abanaria',
        Nós: 'abanaríamos',
        'Eles/Elas/Vocēs': 'abanariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'abanando'
        },
        {
          form: 'particípio',
          portuguese: 'abanado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'gritava',
        Tu: 'gritavas',
        'Ela/Ele/Você': 'gritava',
        Nós: 'gritávamos',
        'Eles/Elas/Vocēs': 'gritavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'gritara',
        Tu: 'gritaras',
        'Ela/Ele/Você': 'gritara',
        Nós: 'gritáramos',
        'Eles/Elas/Vocēs': 'gritaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'gritarei',
        Tu: 'gritarás',
        'Ela/Ele/Você': 'gritará',
        Nós: 'gritaremos',
        'Eles/Elas/Vocēs': 'gritarão'
      },
      subjuntivoPresente: {
        Eu: 'grite',
        Tu: 'grites',
        'Ela/Ele/Você': 'grite',
        Nós: 'gritemos',
        'Eles/Elas/Vocēs': 'gritem'
      },
      pretéritoImperfeito: {
        Eu: 'gritasse',
        Tu: 'gritasses',
        'Ela/Ele/Você': 'gritasse',
        Nós: 'gritássemos',
        'Eles/Elas/Vocēs': 'gritassem'
      },
      subjuntivoFuturo: {
        Eu: 'gritar',
        Tu: 'gritares',
        'Ela/Ele/Você': 'gritar',
        Nós: 'gritarmos',
        'Eles/Elas/Vocēs': 'gritarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'gritaria',
        Tu: 'gritarias',
        'Ela/Ele/Você': 'gritaria',
        Nós: 'gritaríamos',
        'Eles/Elas/Vocēs': 'gritariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'gritando'
        },
        {
          form: 'particípio',
          portuguese: 'gritado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'subia',
        Tu: 'subias',
        'Ela/Ele/Você': 'subia',
        Nós: 'subíamos',
        'Eles/Elas/Vocēs': 'subiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'subira',
        Tu: 'subiras',
        'Ela/Ele/Você': 'subira',
        Nós: 'subíramos',
        'Eles/Elas/Vocēs': 'subiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'subirei',
        Tu: 'subirás',
        'Ela/Ele/Você': 'subirá',
        Nós: 'subiremos',
        'Eles/Elas/Vocēs': 'subirão'
      },
      subjuntivoPresente: {
        Eu: 'suba',
        Tu: 'subas',
        'Ela/Ele/Você': 'suba',
        Nós: 'subamos',
        'Eles/Elas/Vocēs': 'subam'
      },
      pretéritoImperfeito: {
        Eu: 'subisse',
        Tu: 'subisses',
        'Ela/Ele/Você': 'subisse',
        Nós: 'subíssemos',
        'Eles/Elas/Vocēs': 'subissem'
      },
      subjuntivoFuturo: {
        Eu: 'subir',
        Tu: 'subires',
        'Ela/Ele/Você': 'subir',
        Nós: 'subirmos',
        'Eles/Elas/Vocēs': 'subirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'subiria',
        Tu: 'subirias',
        'Ela/Ele/Você': 'subiria',
        Nós: 'subiríamos',
        'Eles/Elas/Vocēs': 'subiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'subindo'
        },
        {
          form: 'particípio',
          portuguese: 'subido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'envenenava',
        Tu: 'envenenavas',
        'Ela/Ele/Você': 'envenenava',
        Nós: 'envenenávamos',
        'Eles/Elas/Vocēs': 'envenenavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'envenenara',
        Tu: 'envenenaras',
        'Ela/Ele/Você': 'envenenara',
        Nós: 'envenenáramos',
        'Eles/Elas/Vocēs': 'envenenaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'envenenarei',
        Tu: 'envenenarás',
        'Ela/Ele/Você': 'envenenará',
        Nós: 'envenenaremos',
        'Eles/Elas/Vocēs': 'envenenarão'
      },
      subjuntivoPresente: {
        Eu: 'envenene',
        Tu: 'envenenes',
        'Ela/Ele/Você': 'envenene',
        Nós: 'envenenemos',
        'Eles/Elas/Vocēs': 'envenenem'
      },
      pretéritoImperfeito: {
        Eu: 'envenenasse',
        Tu: 'envenenasses',
        'Ela/Ele/Você': 'envenenasse',
        Nós: 'envenenássemos',
        'Eles/Elas/Vocēs': 'envenenassem'
      },
      subjuntivoFuturo: {
        Eu: 'envenenar',
        Tu: 'envenenares',
        'Ela/Ele/Você': 'envenenar',
        Nós: 'envenenarmos',
        'Eles/Elas/Vocēs': 'envenenarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'envenenaria',
        Tu: 'envenenarias',
        'Ela/Ele/Você': 'envenenaria',
        Nós: 'envenenaríamos',
        'Eles/Elas/Vocēs': 'envenenariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'envenenando'
        },
        {
          form: 'particípio',
          portuguese: 'envenenado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'cantava',
        Tu: 'cantavas',
        'Ela/Ele/Você': 'cantava',
        Nós: 'cantávamos',
        'Eles/Elas/Vocēs': 'cantavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'cantara',
        Tu: 'cantaras',
        'Ela/Ele/Você': 'cantara',
        Nós: 'cantáramos',
        'Eles/Elas/Vocēs': 'cantaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'cantarei',
        Tu: 'cantarás',
        'Ela/Ele/Você': 'cantará',
        Nós: 'cantaremos',
        'Eles/Elas/Vocēs': 'cantarão'
      },
      subjuntivoPresente: {
        Eu: 'cante',
        Tu: 'cantes',
        'Ela/Ele/Você': 'cante',
        Nós: 'cantemos',
        'Eles/Elas/Vocēs': 'cantem'
      },
      pretéritoImperfeito: {
        Eu: 'cantasse',
        Tu: 'cantasses',
        'Ela/Ele/Você': 'cantasse',
        Nós: 'cantássemos',
        'Eles/Elas/Vocēs': 'cantassem'
      },
      subjuntivoFuturo: {
        Eu: 'cantar',
        Tu: 'cantares',
        'Ela/Ele/Você': 'cantar',
        Nós: 'cantarmos',
        'Eles/Elas/Vocēs': 'cantarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'cantaria',
        Tu: 'cantarias',
        'Ela/Ele/Você': 'cantaria',
        Nós: 'cantaríamos',
        'Eles/Elas/Vocēs': 'cantariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'cantando'
        },
        {
          form: 'particípio',
          portuguese: 'cantado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'ria',
        Tu: 'rias',
        'Ela/Ele/Você': 'ria',
        Nós: 'ríamos',
        'Eles/Elas/Vocēs': 'riam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'rira',
        Tu: 'riras',
        'Ela/Ele/Você': 'rira',
        Nós: 'ríramos',
        'Eles/Elas/Vocēs': 'riram'
      },
      futuroDoPresenteSimples: {
        Eu: 'rirei',
        Tu: 'rirás',
        'Ela/Ele/Você': 'rirá',
        Nós: 'riremos',
        'Eles/Elas/Vocēs': 'rirão'
      },
      subjuntivoPresente: {
        Eu: 'ria',
        Tu: 'rias',
        'Ela/Ele/Você': 'ria',
        Nós: 'riamos',
        'Eles/Elas/Vocēs': 'riam'
      },
      pretéritoImperfeito: {
        Eu: 'risse',
        Tu: 'risses',
        'Ela/Ele/Você': 'risse',
        Nós: 'ríssemos',
        'Eles/Elas/Vocēs': 'rissem'
      },
      subjuntivoFuturo: {
        Eu: 'rir',
        Tu: 'rires',
        'Ela/Ele/Você': 'rir',
        Nós: 'rirmos',
        'Eles/Elas/Vocēs': 'rirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'riria',
        Tu: 'ririas',
        'Ela/Ele/Você': 'riria',
        Nós: 'riríamos',
        'Eles/Elas/Vocēs': 'ririam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'rindo'
        },
        {
          form: 'particípio',
          portuguese: 'rido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'assustava',
        Tu: 'assustavas',
        'Ela/Ele/Você': 'assustava',
        Nós: 'assustávamos',
        'Eles/Elas/Vocēs': 'assustavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'assustara',
        Tu: 'assustaras',
        'Ela/Ele/Você': 'assustara',
        Nós: 'assustáramos',
        'Eles/Elas/Vocēs': 'assustaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'assustarei',
        Tu: 'assustarás',
        'Ela/Ele/Você': 'assustará',
        Nós: 'assustaremos',
        'Eles/Elas/Vocēs': 'assustarão'
      },
      subjuntivoPresente: {
        Eu: 'assuste',
        Tu: 'assustes',
        'Ela/Ele/Você': 'assuste',
        Nós: 'assustemos',
        'Eles/Elas/Vocēs': 'assustem'
      },
      pretéritoImperfeito: {
        Eu: 'assustasse',
        Tu: 'assustasses',
        'Ela/Ele/Você': 'assustasse',
        Nós: 'assustássemos',
        'Eles/Elas/Vocēs': 'assustassem'
      },
      subjuntivoFuturo: {
        Eu: 'assustar',
        Tu: 'assustares',
        'Ela/Ele/Você': 'assustar',
        Nós: 'assustarmos',
        'Eles/Elas/Vocēs': 'assustarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'assustaria',
        Tu: 'assustarias',
        'Ela/Ele/Você': 'assustaria',
        Nós: 'assustaríamos',
        'Eles/Elas/Vocēs': 'assustariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'assustando'
        },
        {
          form: 'particípio',
          portuguese: 'assustado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'trincava',
        Tu: 'trincavas',
        'Ela/Ele/Você': 'trincava',
        Nós: 'trincávamos',
        'Eles/Elas/Vocēs': 'trincavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'trincara',
        Tu: 'trincaras',
        'Ela/Ele/Você': 'trincara',
        Nós: 'trincáramos',
        'Eles/Elas/Vocēs': 'trincaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'trincarei',
        Tu: 'trincarás',
        'Ela/Ele/Você': 'trincará',
        Nós: 'trincaremos',
        'Eles/Elas/Vocēs': 'trincarão'
      },
      subjuntivoPresente: {
        Eu: 'trinque',
        Tu: 'trinques',
        'Ela/Ele/Você': 'trinque',
        Nós: 'trinquemos',
        'Eles/Elas/Vocēs': 'trinquem'
      },
      pretéritoImperfeito: {
        Eu: 'trincasse',
        Tu: 'trincasses',
        'Ela/Ele/Você': 'trincasse',
        Nós: 'trincássemos',
        'Eles/Elas/Vocēs': 'trincassem'
      },
      subjuntivoFuturo: {
        Eu: 'trincar',
        Tu: 'trincares',
        'Ela/Ele/Você': 'trincar',
        Nós: 'trincarmos',
        'Eles/Elas/Vocēs': 'trincarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'trincaria',
        Tu: 'trincarias',
        'Ela/Ele/Você': 'trincaria',
        Nós: 'trincaríamos',
        'Eles/Elas/Vocēs': 'trincariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'trincando'
        },
        {
          form: 'particípio',
          portuguese: 'trincado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'sentava',
        Tu: 'sentavas',
        'Ela/Ele/Você': 'sentava',
        Nós: 'sentávamos',
        'Eles/Elas/Vocēs': 'sentavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'sentara',
        Tu: 'sentaras',
        'Ela/Ele/Você': 'sentara',
        Nós: 'sentáramos',
        'Eles/Elas/Vocēs': 'sentaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'sentarei',
        Tu: 'sentarás',
        'Ela/Ele/Você': 'sentará',
        Nós: 'sentaremos',
        'Eles/Elas/Vocēs': 'sentarão'
      },
      subjuntivoPresente: {
        Eu: 'sente',
        Tu: 'sentes',
        'Ela/Ele/Você': 'sente',
        Nós: 'sentemos',
        'Eles/Elas/Vocēs': 'sentem'
      },
      pretéritoImperfeito: {
        Eu: 'sentasse',
        Tu: 'sentasses',
        'Ela/Ele/Você': 'sentasse',
        Nós: 'sentássemos',
        'Eles/Elas/Vocēs': 'sentassem'
      },
      subjuntivoFuturo: {
        Eu: 'sentar',
        Tu: 'sentares',
        'Ela/Ele/Você': 'sentar',
        Nós: 'sentarmos',
        'Eles/Elas/Vocēs': 'sentarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'sentaria',
        Tu: 'sentarias',
        'Ela/Ele/Você': 'sentaria',
        Nós: 'sentaríamos',
        'Eles/Elas/Vocēs': 'sentariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'sentando'
        },
        {
          form: 'particípio',
          portuguese: 'sentado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'adormecia',
        Tu: 'adormecias',
        'Ela/Ele/Você': 'adormecia',
        Nós: 'adormecíamos',
        'Eles/Elas/Vocēs': 'adormeciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'adormecera',
        Tu: 'adormeceras',
        'Ela/Ele/Você': 'adormecera',
        Nós: 'adormecêramos',
        'Eles/Elas/Vocēs': 'adormeceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'adormecerei',
        Tu: 'adormecerás',
        'Ela/Ele/Você': 'adormecerá',
        Nós: 'adormeceremos',
        'Eles/Elas/Vocēs': 'adormecerão'
      },
      subjuntivoPresente: {
        Eu: 'adormeça',
        Tu: 'adormeças',
        'Ela/Ele/Você': 'adormeça',
        Nós: 'adormeçamos',
        'Eles/Elas/Vocēs': 'adormeçam'
      },
      pretéritoImperfeito: {
        Eu: 'adormecesse',
        Tu: 'adormecesses',
        'Ela/Ele/Você': 'adormecesse',
        Nós: 'adormecêssemos',
        'Eles/Elas/Vocēs': 'adormecessem'
      },
      subjuntivoFuturo: {
        Eu: 'adormecer',
        Tu: 'adormeceres',
        'Ela/Ele/Você': 'adormecer',
        Nós: 'adormecermos',
        'Eles/Elas/Vocēs': 'adormecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'adormeceria',
        Tu: 'adormecerias',
        'Ela/Ele/Você': 'adormeceria',
        Nós: 'adormeceríamos',
        'Eles/Elas/Vocēs': 'adormeceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'adormecendo'
        },
        {
          form: 'particípio',
          portuguese: 'adormecido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'acordava',
        Tu: 'acordavas',
        'Ela/Ele/Você': 'acordava',
        Nós: 'acordávamos',
        'Eles/Elas/Vocēs': 'acordavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'acordara',
        Tu: 'acordaras',
        'Ela/Ele/Você': 'acordara',
        Nós: 'acordáramos',
        'Eles/Elas/Vocēs': 'acordaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'acordarei',
        Tu: 'acordarás',
        'Ela/Ele/Você': 'acordará',
        Nós: 'acordaremos',
        'Eles/Elas/Vocēs': 'acordarão'
      },
      subjuntivoPresente: {
        Eu: 'acorde',
        Tu: 'acordes',
        'Ela/Ele/Você': 'acorde',
        Nós: 'acordemos',
        'Eles/Elas/Vocēs': 'acordem'
      },
      pretéritoImperfeito: {
        Eu: 'acordasse',
        Tu: 'acordasses',
        'Ela/Ele/Você': 'acordasse',
        Nós: 'acordássemos',
        'Eles/Elas/Vocēs': 'acordassem'
      },
      subjuntivoFuturo: {
        Eu: 'acordar',
        Tu: 'acordares',
        'Ela/Ele/Você': 'acordar',
        Nós: 'acordarmos',
        'Eles/Elas/Vocēs': 'acordarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'acordaria',
        Tu: 'acordarias',
        'Ela/Ele/Você': 'acordaria',
        Nós: 'acordaríamos',
        'Eles/Elas/Vocēs': 'acordariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'acordando'
        },
        {
          form: 'particípio',
          portuguese: 'acordado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'reparava',
        Tu: 'reparavas',
        'Ela/Ele/Você': 'reparava',
        Nós: 'reparávamos',
        'Eles/Elas/Vocēs': 'reparavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'reparara',
        Tu: 'repararas',
        'Ela/Ele/Você': 'reparara',
        Nós: 'reparáramos',
        'Eles/Elas/Vocēs': 'repararam'
      },
      futuroDoPresenteSimples: {
        Eu: 'repararei',
        Tu: 'repararás',
        'Ela/Ele/Você': 'reparará',
        Nós: 'repararemos',
        'Eles/Elas/Vocēs': 'repararão'
      },
      subjuntivoPresente: {
        Eu: 'repare',
        Tu: 'repares',
        'Ela/Ele/Você': 'repare',
        Nós: 'reparemos',
        'Eles/Elas/Vocēs': 'reparem'
      },
      pretéritoImperfeito: {
        Eu: 'reparasse',
        Tu: 'reparasses',
        'Ela/Ele/Você': 'reparasse',
        Nós: 'reparássemos',
        'Eles/Elas/Vocēs': 'reparassem'
      },
      subjuntivoFuturo: {
        Eu: 'reparar',
        Tu: 'reparares',
        'Ela/Ele/Você': 'reparar',
        Nós: 'repararmos',
        'Eles/Elas/Vocēs': 'repararem'
      },
      futurodoPretéritoSimples: {
        Eu: 'repararia',
        Tu: 'repararias',
        'Ela/Ele/Você': 'repararia',
        Nós: 'repararíamos',
        'Eles/Elas/Vocēs': 'reparariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'reparando'
        },
        {
          form: 'particípio',
          portuguese: 'reparado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'defendia',
        Tu: 'defendias',
        'Ela/Ele/Você': 'defendia',
        Nós: 'defendíamos',
        'Eles/Elas/Vocēs': 'defendiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'defendera',
        Tu: 'defenderas',
        'Ela/Ele/Você': 'defendera',
        Nós: 'defendêramos',
        'Eles/Elas/Vocēs': 'defenderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'defenderei',
        Tu: 'defenderás',
        'Ela/Ele/Você': 'defenderá',
        Nós: 'defenderemos',
        'Eles/Elas/Vocēs': 'defenderão'
      },
      subjuntivoPresente: {
        Eu: 'defenda',
        Tu: 'defendas',
        'Ela/Ele/Você': 'defenda',
        Nós: 'defendamos',
        'Eles/Elas/Vocēs': 'defendam'
      },
      pretéritoImperfeito: {
        Eu: 'defendesse',
        Tu: 'defendesses',
        'Ela/Ele/Você': 'defendesse',
        Nós: 'defendêssemos',
        'Eles/Elas/Vocēs': 'defendessem'
      },
      subjuntivoFuturo: {
        Eu: 'defender',
        Tu: 'defenderes',
        'Ela/Ele/Você': 'defender',
        Nós: 'defendermos',
        'Eles/Elas/Vocēs': 'defenderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'defenderia',
        Tu: 'defenderias',
        'Ela/Ele/Você': 'defenderia',
        Nós: 'defenderíamos',
        'Eles/Elas/Vocēs': 'defenderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'defendendo'
        },
        {
          form: 'particípio',
          portuguese: 'defendido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'fugia',
        Tu: 'fugias',
        'Ela/Ele/Você': 'fugia',
        Nós: 'fugíamos',
        'Eles/Elas/Vocēs': 'fugiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'fugira',
        Tu: 'fugiras',
        'Ela/Ele/Você': 'fugira',
        Nós: 'fugíramos',
        'Eles/Elas/Vocēs': 'fugiram'
      },
      futuroDoPresenteSimples: {
        Eu: 'fugirei',
        Tu: 'fugirás',
        'Ela/Ele/Você': 'fugirá',
        Nós: 'fugiremos',
        'Eles/Elas/Vocēs': 'fugirão'
      },
      subjuntivoPresente: {
        Eu: 'fuja',
        Tu: 'fujas',
        'Ela/Ele/Você': 'fuja',
        Nós: 'fujamos',
        'Eles/Elas/Vocēs': 'fujam'
      },
      pretéritoImperfeito: {
        Eu: 'fugisse',
        Tu: 'fugisses',
        'Ela/Ele/Você': 'fugisse',
        Nós: 'fugíssemos',
        'Eles/Elas/Vocēs': 'fugissem'
      },
      subjuntivoFuturo: {
        Eu: 'fugir',
        Tu: 'fugires',
        'Ela/Ele/Você': 'fugir',
        Nós: 'fugirmos',
        'Eles/Elas/Vocēs': 'fugirem'
      },
      futurodoPretéritoSimples: {
        Eu: 'fugiria',
        Tu: 'fugirias',
        'Ela/Ele/Você': 'fugiria',
        Nós: 'fugiríamos',
        'Eles/Elas/Vocēs': 'fugiriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'fugindo'
        },
        {
          form: 'particípio',
          portuguese: 'fugido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'convencia',
        Tu: 'convencias',
        'Ela/Ele/Você': 'convencia',
        Nós: 'convencíamos',
        'Eles/Elas/Vocēs': 'convenciam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'convencera',
        Tu: 'convenceras',
        'Ela/Ele/Você': 'convencera',
        Nós: 'convencêramos',
        'Eles/Elas/Vocēs': 'convenceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'convencerei',
        Tu: 'convencerás',
        'Ela/Ele/Você': 'convencerá',
        Nós: 'convenceremos',
        'Eles/Elas/Vocēs': 'convencerão'
      },
      subjuntivoPresente: {
        Eu: 'convença',
        Tu: 'convenças',
        'Ela/Ele/Você': 'convença',
        Nós: 'convençamos',
        'Eles/Elas/Vocēs': 'convençam'
      },
      pretéritoImperfeito: {
        Eu: 'convencesse',
        Tu: 'convencesses',
        'Ela/Ele/Você': 'convencesse',
        Nós: 'convencêssemos',
        'Eles/Elas/Vocēs': 'convencessem'
      },
      subjuntivoFuturo: {
        Eu: 'convencer',
        Tu: 'convenceres',
        'Ela/Ele/Você': 'convencer',
        Nós: 'convencermos',
        'Eles/Elas/Vocēs': 'convencerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'convenceria',
        Tu: 'convencerias',
        'Ela/Ele/Você': 'convenceria',
        Nós: 'convenceríamos',
        'Eles/Elas/Vocēs': 'convenceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'convencendo'
        },
        {
          form: 'particípio',
          portuguese: 'convencido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'batia',
        Tu: 'batias',
        'Ela/Ele/Você': 'batia',
        Nós: 'batíamos',
        'Eles/Elas/Vocēs': 'batiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'batera',
        Tu: 'bateras',
        'Ela/Ele/Você': 'batera',
        Nós: 'batêramos',
        'Eles/Elas/Vocēs': 'bateram'
      },
      futuroDoPresenteSimples: {
        Eu: 'baterei',
        Tu: 'baterás',
        'Ela/Ele/Você': 'baterá',
        Nós: 'bateremos',
        'Eles/Elas/Vocēs': 'baterão'
      },
      subjuntivoPresente: {
        Eu: 'bata',
        Tu: 'batas',
        'Ela/Ele/Você': 'bata',
        Nós: 'batamos',
        'Eles/Elas/Vocēs': 'batam'
      },
      pretéritoImperfeito: {
        Eu: 'batesse',
        Tu: 'batesses',
        'Ela/Ele/Você': 'batesse',
        Nós: 'batêssemos',
        'Eles/Elas/Vocēs': 'batessem'
      },
      subjuntivoFuturo: {
        Eu: 'bater',
        Tu: 'bateres',
        'Ela/Ele/Você': 'bater',
        Nós: 'batermos',
        'Eles/Elas/Vocēs': 'baterem'
      },
      futurodoPretéritoSimples: {
        Eu: 'bateria',
        Tu: 'baterias',
        'Ela/Ele/Você': 'bateria',
        Nós: 'bateríamos',
        'Eles/Elas/Vocēs': 'bateriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'batendo'
        },
        {
          form: 'particípio',
          portuguese: 'batido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'piscava',
        Tu: 'piscavas',
        'Ela/Ele/Você': 'piscava',
        Nós: 'piscávamos',
        'Eles/Elas/Vocēs': 'piscavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'piscara',
        Tu: 'piscaras',
        'Ela/Ele/Você': 'piscara',
        Nós: 'piscáramos',
        'Eles/Elas/Vocēs': 'piscaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'piscarei',
        Tu: 'piscarás',
        'Ela/Ele/Você': 'piscará',
        Nós: 'piscaremos',
        'Eles/Elas/Vocēs': 'piscarão'
      },
      subjuntivoPresente: {
        Eu: 'pisque',
        Tu: 'pisques',
        'Ela/Ele/Você': 'pisque',
        Nós: 'pisquemos',
        'Eles/Elas/Vocēs': 'pisquem'
      },
      pretéritoImperfeito: {
        Eu: 'piscasse',
        Tu: 'piscasses',
        'Ela/Ele/Você': 'piscasse',
        Nós: 'piscássemos',
        'Eles/Elas/Vocēs': 'piscassem'
      },
      subjuntivoFuturo: {
        Eu: 'piscar',
        Tu: 'piscares',
        'Ela/Ele/Você': 'piscar',
        Nós: 'piscarmos',
        'Eles/Elas/Vocēs': 'piscarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'piscaria',
        Tu: 'piscarias',
        'Ela/Ele/Você': 'piscaria',
        Nós: 'piscaríamos',
        'Eles/Elas/Vocēs': 'piscariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'piscando'
        },
        {
          form: 'particípio',
          portuguese: 'piscado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'deixava',
        Tu: 'deixavas',
        'Ela/Ele/Você': 'deixava',
        Nós: 'deixávamos',
        'Eles/Elas/Vocēs': 'deixavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'deixara',
        Tu: 'deixaras',
        'Ela/Ele/Você': 'deixara',
        Nós: 'deixáramos',
        'Eles/Elas/Vocēs': 'deixaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'deixarei',
        Tu: 'deixarás',
        'Ela/Ele/Você': 'deixará',
        Nós: 'deixaremos',
        'Eles/Elas/Vocēs': 'deixarão'
      },
      subjuntivoPresente: {
        Eu: 'deixe',
        Tu: 'deixes',
        'Ela/Ele/Você': 'deixe',
        Nós: 'deixemos',
        'Eles/Elas/Vocēs': 'deixem'
      },
      pretéritoImperfeito: {
        Eu: 'deixasse',
        Tu: 'deixasses',
        'Ela/Ele/Você': 'deixasse',
        Nós: 'deixássemos',
        'Eles/Elas/Vocēs': 'deixassem'
      },
      subjuntivoFuturo: {
        Eu: 'deixar',
        Tu: 'deixares',
        'Ela/Ele/Você': 'deixar',
        Nós: 'deixarmos',
        'Eles/Elas/Vocēs': 'deixarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'deixaria',
        Tu: 'deixarias',
        'Ela/Ele/Você': 'deixaria',
        Nós: 'deixaríamos',
        'Eles/Elas/Vocēs': 'deixariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'deixando'
        },
        {
          form: 'particípio',
          portuguese: 'deixado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'avistava',
        Tu: 'avistavas',
        'Ela/Ele/Você': 'avistava',
        Nós: 'avistávamos',
        'Eles/Elas/Vocēs': 'avistavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'avistara',
        Tu: 'avistaras',
        'Ela/Ele/Você': 'avistara',
        Nós: 'avistáramos',
        'Eles/Elas/Vocēs': 'avistaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'avistarei',
        Tu: 'avistarás',
        'Ela/Ele/Você': 'avistará',
        Nós: 'avistaremos',
        'Eles/Elas/Vocēs': 'avistarão'
      },
      subjuntivoPresente: {
        Eu: 'aviste',
        Tu: 'avistes',
        'Ela/Ele/Você': 'aviste',
        Nós: 'avistemos',
        'Eles/Elas/Vocēs': 'avistem'
      },
      pretéritoImperfeito: {
        Eu: 'avistasse',
        Tu: 'avistasses',
        'Ela/Ele/Você': 'avistasse',
        Nós: 'avistássemos',
        'Eles/Elas/Vocēs': 'avistassem'
      },
      subjuntivoFuturo: {
        Eu: 'avistar',
        Tu: 'avistares',
        'Ela/Ele/Você': 'avistar',
        Nós: 'avistarmos',
        'Eles/Elas/Vocēs': 'avistarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'avistaria',
        Tu: 'avistarias',
        'Ela/Ele/Você': 'avistaria',
        Nós: 'avistaríamos',
        'Eles/Elas/Vocēs': 'avistariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'avistando'
        },
        {
          form: 'particípio',
          portuguese: 'avistado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'saltava',
        Tu: 'saltavas',
        'Ela/Ele/Você': 'saltava',
        Nós: 'saltávamos',
        'Eles/Elas/Vocēs': 'saltavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'saltara',
        Tu: 'saltaras',
        'Ela/Ele/Você': 'saltara',
        Nós: 'saltáramos',
        'Eles/Elas/Vocēs': 'saltaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'saltarei',
        Tu: 'saltarás',
        'Ela/Ele/Você': 'saltará',
        Nós: 'saltaremos',
        'Eles/Elas/Vocēs': 'saltarão'
      },
      subjuntivoPresente: {
        Eu: 'salte',
        Tu: 'saltes',
        'Ela/Ele/Você': 'salte',
        Nós: 'saltemos',
        'Eles/Elas/Vocēs': 'saltem'
      },
      pretéritoImperfeito: {
        Eu: 'saltasse',
        Tu: 'saltasses',
        'Ela/Ele/Você': 'saltasse',
        Nós: 'saltássemos',
        'Eles/Elas/Vocēs': 'saltassem'
      },
      subjuntivoFuturo: {
        Eu: 'saltar',
        Tu: 'saltares',
        'Ela/Ele/Você': 'saltar',
        Nós: 'saltarmos',
        'Eles/Elas/Vocēs': 'saltarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'saltaria',
        Tu: 'saltarias',
        'Ela/Ele/Você': 'saltaria',
        Nós: 'saltaríamos',
        'Eles/Elas/Vocēs': 'saltariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'saltando'
        },
        {
          form: 'particípio',
          portuguese: 'saltado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'mexia',
        Tu: 'mexias',
        'Ela/Ele/Você': 'mexia',
        Nós: 'mexíamos',
        'Eles/Elas/Vocēs': 'mexiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'mexera',
        Tu: 'mexeras',
        'Ela/Ele/Você': 'mexera',
        Nós: 'mexêramos',
        'Eles/Elas/Vocēs': 'mexeram'
      },
      futuroDoPresenteSimples: {
        Eu: 'mexerei',
        Tu: 'mexerás',
        'Ela/Ele/Você': 'mexerá',
        Nós: 'mexeremos',
        'Eles/Elas/Vocēs': 'mexerão'
      },
      subjuntivoPresente: {
        Eu: 'mexa',
        Tu: 'mexas',
        'Ela/Ele/Você': 'mexa',
        Nós: 'mexamos',
        'Eles/Elas/Vocēs': 'mexam'
      },
      pretéritoImperfeito: {
        Eu: 'mexesse',
        Tu: 'mexesses',
        'Ela/Ele/Você': 'mexesse',
        Nós: 'mexêssemos',
        'Eles/Elas/Vocēs': 'mexessem'
      },
      subjuntivoFuturo: {
        Eu: 'mexer',
        Tu: 'mexeres',
        'Ela/Ele/Você': 'mexer',
        Nós: 'mexermos',
        'Eles/Elas/Vocēs': 'mexerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mexeria',
        Tu: 'mexerias',
        'Ela/Ele/Você': 'mexeria',
        Nós: 'mexeríamos',
        'Eles/Elas/Vocēs': 'mexeriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'mexendo'
        },
        {
          form: 'particípio',
          portuguese: 'mexido'
        }
      ]
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
      },
      imperfect: {
        Eu: 'atirava',
        Tu: 'atiravas',
        'Ela/Ele/Você': 'atirava',
        Nós: 'atirávamos',
        'Eles/Elas/Vocēs': 'atiravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'atirara',
        Tu: 'atiraras',
        'Ela/Ele/Você': 'atirara',
        Nós: 'atiráramos',
        'Eles/Elas/Vocēs': 'atiraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'atirarei',
        Tu: 'atirarás',
        'Ela/Ele/Você': 'atirará',
        Nós: 'atiraremos',
        'Eles/Elas/Vocēs': 'atirarão'
      },
      subjuntivoPresente: {
        Eu: 'atire',
        Tu: 'atires',
        'Ela/Ele/Você': 'atire',
        Nós: 'atiremos',
        'Eles/Elas/Vocēs': 'atirem'
      },
      pretéritoImperfeito: {
        Eu: 'atirasse',
        Tu: 'atirasses',
        'Ela/Ele/Você': 'atirasse',
        Nós: 'atirássemos',
        'Eles/Elas/Vocēs': 'atirassem'
      },
      subjuntivoFuturo: {
        Eu: 'atirar',
        Tu: 'atirares',
        'Ela/Ele/Você': 'atirar',
        Nós: 'atirarmos',
        'Eles/Elas/Vocēs': 'atirarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'atiraria',
        Tu: 'atirarias',
        'Ela/Ele/Você': 'atiraria',
        Nós: 'atiraríamos',
        'Eles/Elas/Vocēs': 'atirariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'atirando'
        },
        {
          form: 'particípio',
          portuguese: 'atirado'
        }
      ]
    },
    {
      english: 'to get right',
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
      },
      imperfect: {
        Eu: 'acertava',
        Tu: 'acertavas',
        'Ela/Ele/Você': 'acertava',
        Nós: 'acertávamos',
        'Eles/Elas/Vocēs': 'acertavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'acertara',
        Tu: 'acertaras',
        'Ela/Ele/Você': 'acertara',
        Nós: 'acertáramos',
        'Eles/Elas/Vocēs': 'acertaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'acertarei',
        Tu: 'acertarás',
        'Ela/Ele/Você': 'acertará',
        Nós: 'acertaremos',
        'Eles/Elas/Vocēs': 'acertarão'
      },
      subjuntivoPresente: {
        Eu: 'acerte',
        Tu: 'acertes',
        'Ela/Ele/Você': 'acerte',
        Nós: 'acertemos',
        'Eles/Elas/Vocēs': 'acertem'
      },
      pretéritoImperfeito: {
        Eu: 'acertasse',
        Tu: 'acertasses',
        'Ela/Ele/Você': 'acertasse',
        Nós: 'acertássemos',
        'Eles/Elas/Vocēs': 'acertassem'
      },
      subjuntivoFuturo: {
        Eu: 'acertar',
        Tu: 'acertares',
        'Ela/Ele/Você': 'acertar',
        Nós: 'acertarmos',
        'Eles/Elas/Vocēs': 'acertarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'acertaria',
        Tu: 'acertarias',
        'Ela/Ele/Você': 'acertaria',
        Nós: 'acertaríamos',
        'Eles/Elas/Vocēs': 'acertariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'acertando'
        },
        {
          form: 'particípio',
          portuguese: 'acertado'
        }
      ]
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
      },
      imperfect: {
        Eu: 'puxava',
        Tu: 'puxavas',
        'Ela/Ele/Você': 'puxava',
        Nós: 'puxávamos',
        'Eles/Elas/Vocēs': 'puxavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'puxara',
        Tu: 'puxaras',
        'Ela/Ele/Você': 'puxara',
        Nós: 'puxáramos',
        'Eles/Elas/Vocēs': 'puxaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'puxarei',
        Tu: 'puxarás',
        'Ela/Ele/Você': 'puxará',
        Nós: 'puxaremos',
        'Eles/Elas/Vocēs': 'puxarão'
      },
      subjuntivoPresente: {
        Eu: 'puxe',
        Tu: 'puxes',
        'Ela/Ele/Você': 'puxe',
        Nós: 'puxemos',
        'Eles/Elas/Vocēs': 'puxem'
      },
      pretéritoImperfeito: {
        Eu: 'puxasse',
        Tu: 'puxasses',
        'Ela/Ele/Você': 'puxasse',
        Nós: 'puxássemos',
        'Eles/Elas/Vocēs': 'puxassem'
      },
      subjuntivoFuturo: {
        Eu: 'puxar',
        Tu: 'puxares',
        'Ela/Ele/Você': 'puxar',
        Nós: 'puxarmos',
        'Eles/Elas/Vocēs': 'puxarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'puxaria',
        Tu: 'puxarias',
        'Ela/Ele/Você': 'puxaria',
        Nós: 'puxaríamos',
        'Eles/Elas/Vocēs': 'puxariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'puxando'
        },
        {
          form: 'particípio',
          portuguese: 'puxado'
        }
      ]
    },
    {
      english: 'be',
      infinitive: 'haver',
      presentSimple: {
        Eu: 'hei',
        Tu: 'hás',
        'Ela/Ele/Você': 'há',
        Nós: 'havemos/hemos',
        'Eles/Elas/Vocēs': 'hão'
      },
      pastPerfect: {
        Eu: 'houve',
        Tu: 'houveste',
        'Ela/Ele/Você': 'houve',
        Nós: 'houvemos',
        'Eles/Elas/Vocēs': 'houveram'
      },
      imperfect: {
        Eu: 'havia',
        Tu: 'havias',
        'Ela/Ele/Você': 'havia',
        Nós: 'havíamos',
        'Eles/Elas/Vocēs': 'haviam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'houvera',
        Tu: 'houveras',
        'Ela/Ele/Você': 'houvera',
        Nós: 'houvéramos',
        'Eles/Elas/Vocēs': 'houveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'haverei',
        Tu: 'haverás',
        'Ela/Ele/Você': 'haverá',
        Nós: 'haveremos',
        'Eles/Elas/Vocēs': 'haverão'
      },
      subjuntivoPresente: {
        Eu: 'haja',
        Tu: 'hajas',
        'Ela/Ele/Você': 'haja',
        Nós: 'hajamos',
        'Eles/Elas/Vocēs': 'hajam'
      },
      pretéritoImperfeito: {
        Eu: 'houvesse',
        Tu: 'houvesses',
        'Ela/Ele/Você': 'houvesse',
        Nós: 'houvéssemos',
        'Eles/Elas/Vocēs': 'houvessem'
      },
      subjuntivoFuturo: {
        Eu: 'houver',
        Tu: 'houveres',
        'Ela/Ele/Você': 'houver',
        Nós: 'houvermos',
        'Eles/Elas/Vocēs': 'houverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'haveria',
        Tu: 'haverias',
        'Ela/Ele/Você': 'haveria',
        Nós: 'haveríamos',
        'Eles/Elas/Vocēs': 'haveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'havendo'
        },
        {
          form: 'particípio',
          portuguese: 'havido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'devera',
        Tu: 'deveras',
        'Ela/Ele/Você': 'devera',
        Nós: 'devêramos',
        'Eles/Elas/Vocēs': 'deveram'
      },
      futuroDoPresenteSimples: {
        Eu: 'deverei',
        Tu: 'deverás',
        'Ela/Ele/Você': 'deverá',
        Nós: 'deveremos',
        'Eles/Elas/Vocēs': 'deverão'
      },
      subjuntivoPresente: {
        Eu: 'deva',
        Tu: 'devas',
        'Ela/Ele/Você': 'deva',
        Nós: 'devamos',
        'Eles/Elas/Vocēs': 'devam'
      },
      pretéritoImperfeito: {
        Eu: 'devesse',
        Tu: 'devesses',
        'Ela/Ele/Você': 'devesse',
        Nós: 'devêssemos',
        'Eles/Elas/Vocēs': 'devessem'
      },
      subjuntivoFuturo: {
        Eu: 'dever',
        Tu: 'deveres',
        'Ela/Ele/Você': 'dever',
        Nós: 'devermos',
        'Eles/Elas/Vocēs': 'deverem'
      },
      futurodoPretéritoSimples: {
        Eu: 'deveria',
        Tu: 'deverias',
        'Ela/Ele/Você': 'deveria',
        Nós: 'deveríamos',
        'Eles/Elas/Vocēs': 'deveriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'devendo'
        },
        {
          form: 'particípio',
          portuguese: 'devido'
        }
      ]
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
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'parecera',
        Tu: 'pareceras',
        'Ela/Ele/Você': 'parecera',
        Nós: 'parecêramos',
        'Eles/Elas/Vocēs': 'pareceram'
      },
      futuroDoPresenteSimples: {
        Eu: 'parecerei',
        Tu: 'parecerás',
        'Ela/Ele/Você': 'parecerá',
        Nós: 'pareceremos',
        'Eles/Elas/Vocēs': 'parecerão'
      },
      subjuntivoPresente: {
        Eu: 'pareça',
        Tu: 'pareças',
        'Ela/Ele/Você': 'pareça',
        Nós: 'pareçamos',
        'Eles/Elas/Vocēs': 'pareçam'
      },
      pretéritoImperfeito: {
        Eu: 'parecesse',
        Tu: 'parecesses',
        'Ela/Ele/Você': 'parecesse',
        Nós: 'parecêssemos',
        'Eles/Elas/Vocēs': 'parecessem'
      },
      subjuntivoFuturo: {
        Eu: 'parecer',
        Tu: 'pareceres',
        'Ela/Ele/Você': 'parecer',
        Nós: 'parecermos',
        'Eles/Elas/Vocēs': 'parecerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'pareceria',
        Tu: 'parecerias',
        'Ela/Ele/Você': 'pareceria',
        Nós: 'pareceríamos',
        'Eles/Elas/Vocēs': 'pareceriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'parecendo'
        },
        {
          form: 'particípio',
          portuguese: 'parecido'
        }
      ]
    },
    {
      english: 'to look for a thing',
      infinitive: 'buscar',
      presentSimple: {
        Eu: 'busco',
        Tu: 'buscas',
        'Ela/Ele/Você': 'busca',
        Nós: 'buscamos',
        'Eles/Elas/Vocēs': 'buscam'
      },
      pastPerfect: {
        Eu: 'busquei',
        Tu: 'buscaste',
        'Ela/Ele/Você': 'buscou',
        Nós: 'buscámos',
        'Eles/Elas/Vocēs': 'buscaram'
      },
      imperfect: {
        Eu: 'buscava',
        Tu: 'buscavas',
        'Ela/Ele/Você': 'buscava',
        Nós: 'buscávamos',
        'Eles/Elas/Vocēs': 'buscavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'buscara',
        Tu: 'buscaras',
        'Ela/Ele/Você': 'buscara',
        Nós: 'buscáramos',
        'Eles/Elas/Vocēs': 'buscaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'buscarei',
        Tu: 'buscarás',
        'Ela/Ele/Você': 'buscará',
        Nós: 'buscaremos',
        'Eles/Elas/Vocēs': 'buscarão'
      },
      subjuntivoPresente: {
        Eu: 'busque',
        Tu: 'busques',
        'Ela/Ele/Você': 'busque',
        Nós: 'busquemos',
        'Eles/Elas/Vocēs': 'busquem'
      },
      pretéritoImperfeito: {
        Eu: 'buscasse',
        Tu: 'buscasses',
        'Ela/Ele/Você': 'buscasse',
        Nós: 'buscássemos',
        'Eles/Elas/Vocēs': 'buscassem'
      },
      subjuntivoFuturo: {
        Eu: 'buscar',
        Tu: 'buscares',
        'Ela/Ele/Você': 'buscar',
        Nós: 'buscarmos',
        'Eles/Elas/Vocēs': 'buscarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'buscaria',
        Tu: 'buscarias',
        'Ela/Ele/Você': 'buscaria',
        Nós: 'buscaríamos',
        'Eles/Elas/Vocēs': 'buscariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'buscando'
        },
        {
          form: 'particípio',
          portuguese: 'buscado'
        }
      ]
    },
    {
      english: 'to kill',
      infinitive: 'matar',
      presentSimple: {
        Eu: 'mato',
        Tu: 'matas',
        'Ela/Ele/Você': 'mata',
        Nós: 'matamos',
        'Eles/Elas/Vocēs': 'matam'
      },
      pastPerfect: {
        Eu: 'matei',
        Tu: 'mataste',
        'Ela/Ele/Você': 'matou',
        Nós: 'matámos',
        'Eles/Elas/Vocēs': 'mataram'
      },
      imperfect: {
        Eu: 'matava',
        Tu: 'matavas',
        'Ela/Ele/Você': 'matava',
        Nós: 'matávamos',
        'Eles/Elas/Vocēs': 'matavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'matara',
        Tu: 'mataras',
        'Ela/Ele/Você': 'matara',
        Nós: 'matáramos',
        'Eles/Elas/Vocēs': 'mataram'
      },
      futuroDoPresenteSimples: {
        Eu: 'matarei',
        Tu: 'matarás',
        'Ela/Ele/Você': 'matará',
        Nós: 'mataremos',
        'Eles/Elas/Vocēs': 'matarão'
      },
      subjuntivoPresente: {
        Eu: 'mate',
        Tu: 'mates',
        'Ela/Ele/Você': 'mate',
        Nós: 'matemos',
        'Eles/Elas/Vocēs': 'matem'
      },
      pretéritoImperfeito: {
        Eu: 'matasse',
        Tu: 'matasses',
        'Ela/Ele/Você': 'matasse',
        Nós: 'matássemos',
        'Eles/Elas/Vocēs': 'matassem'
      },
      subjuntivoFuturo: {
        Eu: 'matar',
        Tu: 'matares',
        'Ela/Ele/Você': 'matar',
        Nós: 'matarmos',
        'Eles/Elas/Vocēs': 'matarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'mataria',
        Tu: 'matarias',
        'Ela/Ele/Você': 'mataria',
        Nós: 'mataríamos',
        'Eles/Elas/Vocēs': 'matariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'matando'
        },
        {
          form: 'particípio',
          portuguese: 'matado/morto'
        }
      ]
    },
    {
      english: 'to take',
      infinitive: 'tirar',
      presentSimple: {
        Eu: 'tiro',
        Tu: 'tiras',
        'Ela/Ele/Você': 'tira',
        Nós: 'tiramos',
        'Eles/Elas/Vocēs': 'tiram'
      },
      pastPerfect: {
        Eu: 'tirei',
        Tu: 'tiraste',
        'Ela/Ele/Você': 'tirou',
        Nós: 'tirámos',
        'Eles/Elas/Vocēs': 'tiraram'
      },
      imperfect: {
        Eu: 'tirava',
        Tu: 'tiravas',
        'Ela/Ele/Você': 'tirava',
        Nós: 'tirávamos',
        'Eles/Elas/Vocēs': 'tiravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'tirara',
        Tu: 'tiraras',
        'Ela/Ele/Você': 'tirara',
        Nós: 'tiráramos',
        'Eles/Elas/Vocēs': 'tiraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'tirarei',
        Tu: 'tirarás',
        'Ela/Ele/Você': 'tirará',
        Nós: 'tiraremos',
        'Eles/Elas/Vocēs': 'tirarão'
      },
      subjuntivoPresente: {
        Eu: 'tire',
        Tu: 'tires',
        'Ela/Ele/Você': 'tire',
        Nós: 'tiremos',
        'Eles/Elas/Vocēs': 'tirem'
      },
      pretéritoImperfeito: {
        Eu: 'tirasse',
        Tu: 'tirasses',
        'Ela/Ele/Você': 'tirasse',
        Nós: 'tirássemos',
        'Eles/Elas/Vocēs': 'tirassem'
      },
      subjuntivoFuturo: {
        Eu: 'tirar',
        Tu: 'tirares',
        'Ela/Ele/Você': 'tirar',
        Nós: 'tirarmos',
        'Eles/Elas/Vocēs': 'tirarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'tiraria',
        Tu: 'tirarias',
        'Ela/Ele/Você': 'tiraria',
        Nós: 'tiraríamos',
        'Eles/Elas/Vocēs': 'tirariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'tirando'
        },
        {
          form: 'particípio',
          portuguese: 'tirado'
        }
      ]
    },
    {
      english: 'to lose',
      infinitive: 'perder',
      presentSimple: {
        Eu: 'perco',
        Tu: 'perdes',
        'Ela/Ele/Você': 'perde',
        Nós: 'perdemos',
        'Eles/Elas/Vocēs': 'perdem'
      },
      pastPerfect: {
        Eu: 'perdi',
        Tu: 'perdeste',
        'Ela/Ele/Você': 'perdeu',
        Nós: 'perdemos',
        'Eles/Elas/Vocēs': 'perderam'
      },
      imperfect: {
        Eu: 'perdia',
        Tu: 'perdias',
        'Ela/Ele/Você': 'perdia',
        Nós: 'perdíamos',
        'Eles/Elas/Vocēs': 'perdiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'perdera',
        Tu: 'perderas',
        'Ela/Ele/Você': 'perdera',
        Nós: 'perdêramos',
        'Eles/Elas/Vocēs': 'perderam'
      },
      futuroDoPresenteSimples: {
        Eu: 'perderei',
        Tu: 'perderás',
        'Ela/Ele/Você': 'perderá',
        Nós: 'perderemos',
        'Eles/Elas/Vocēs': 'perderão'
      },
      subjuntivoPresente: {
        Eu: 'perca',
        Tu: 'percas',
        'Ela/Ele/Você': 'perca',
        Nós: 'percamos',
        'Eles/Elas/Vocēs': 'percam'
      },
      pretéritoImperfeito: {
        Eu: 'perdesse',
        Tu: 'perdesses',
        'Ela/Ele/Você': 'perdesse',
        Nós: 'perdêssemos',
        'Eles/Elas/Vocēs': 'perdessem'
      },
      subjuntivoFuturo: {
        Eu: 'perder',
        Tu: 'perderes',
        'Ela/Ele/Você': 'perder',
        Nós: 'perdermos',
        'Eles/Elas/Vocēs': 'perderem'
      },
      futurodoPretéritoSimples: {
        Eu: 'perderia',
        Tu: 'perderias',
        'Ela/Ele/Você': 'perderia',
        Nós: 'perderíamos',
        'Eles/Elas/Vocēs': 'perderiam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'perdendo'
        },
        {
          form: 'particípio',
          portuguese: 'perdido'
        }
      ]
    },
    {
      english: 'to look for',
      infinitive: 'procurar',
      presentSimple: {
        Eu: 'procuro',
        Tu: 'procuras',
        'Ela/Ele/Você': 'procura',
        Nós: 'procuramos',
        'Eles/Elas/Vocēs': 'procuram'
      },
      pastPerfect: {
        Eu: 'procurei',
        Tu: 'procuraste',
        'Ela/Ele/Você': 'procurou',
        Nós: 'procurámos',
        'Eles/Elas/Vocēs': 'procuraram'
      },
      imperfect: {
        Eu: 'procurava',
        Tu: 'procuravas',
        'Ela/Ele/Você': 'procurava',
        Nós: 'procurávamos',
        'Eles/Elas/Vocēs': 'procuravam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'procurara',
        Tu: 'procuraras',
        'Ela/Ele/Você': 'procurara',
        Nós: 'procuráramos',
        'Eles/Elas/Vocēs': 'procuraram'
      },
      futuroDoPresenteSimples: {
        Eu: 'procurarei',
        Tu: 'procurarás',
        'Ela/Ele/Você': 'procurará',
        Nós: 'procuraremos',
        'Eles/Elas/Vocēs': 'procurarão'
      },
      subjuntivoPresente: {
        Eu: 'procure',
        Tu: 'procures',
        'Ela/Ele/Você': 'procure',
        Nós: 'procuremos',
        'Eles/Elas/Vocēs': 'procurem'
      },
      pretéritoImperfeito: {
        Eu: 'procurasse',
        Tu: 'procurasses',
        'Ela/Ele/Você': 'procurasse',
        Nós: 'procurássemos',
        'Eles/Elas/Vocēs': 'procurassem'
      },
      subjuntivoFuturo: {
        Eu: 'procurar',
        Tu: 'procurares',
        'Ela/Ele/Você': 'procurar',
        Nós: 'procurarmos',
        'Eles/Elas/Vocēs': 'procurarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'procuraria',
        Tu: 'procurarias',
        'Ela/Ele/Você': 'procuraria',
        Nós: 'procuraríamos',
        'Eles/Elas/Vocēs': 'procurariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'procurando'
        },
        {
          form: 'particípio',
          portuguese: 'procurado'
        }
      ]
    },
    {
      english: 'to tell',
      infinitive: 'contar',
      presentSimple: {
        Eu: 'conto',
        Tu: 'contas',
        'Ela/Ele/Você': 'conta',
        Nós: 'contamos',
        'Eles/Elas/Vocēs': 'contam'
      },
      pastPerfect: {
        Eu: 'contei',
        Tu: 'contaste',
        'Ela/Ele/Você': 'contou',
        Nós: 'contámos',
        'Eles/Elas/Vocēs': 'contaram'
      },
      imperfect: {
        Eu: 'contava',
        Tu: 'contavas',
        'Ela/Ele/Você': 'contava',
        Nós: 'contávamos',
        'Eles/Elas/Vocēs': 'contavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'contara',
        Tu: 'contaras',
        'Ela/Ele/Você': 'contara',
        Nós: 'contáramos',
        'Eles/Elas/Vocēs': 'contaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'contarei',
        Tu: 'contarás',
        'Ela/Ele/Você': 'contará',
        Nós: 'contaremos',
        'Eles/Elas/Vocēs': 'contarão'
      },
      subjuntivoPresente: {
        Eu: 'conte',
        Tu: 'contes',
        'Ela/Ele/Você': 'conte',
        Nós: 'contemos',
        'Eles/Elas/Vocēs': 'contem'
      },
      pretéritoImperfeito: {
        Eu: 'contasse',
        Tu: 'contasses',
        'Ela/Ele/Você': 'contasse',
        Nós: 'contássemos',
        'Eles/Elas/Vocēs': 'contassem'
      },
      subjuntivoFuturo: {
        Eu: 'contar',
        Tu: 'contares',
        'Ela/Ele/Você': 'contar',
        Nós: 'contarmos',
        'Eles/Elas/Vocēs': 'contarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'contaria',
        Tu: 'contarias',
        'Ela/Ele/Você': 'contaria',
        Nós: 'contaríamos',
        'Eles/Elas/Vocēs': 'contariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'contando'
        },
        {
          form: 'particípio',
          portuguese: 'contado'
        }
      ]
    },
    {
      english: 'to arrange',
      infinitive: 'arranjar',
      presentSimple: {
        Eu: 'arranjo',
        Tu: 'arranjas',
        'Ela/Ele/Você': 'arranja',
        Nós: 'arranjamos',
        'Eles/Elas/Vocēs': 'arranjam'
      },
      pastPerfect: {
        Eu: 'arranjei',
        Tu: 'arranjaste',
        'Ela/Ele/Você': 'arranjou',
        Nós: 'arranjámos',
        'Eles/Elas/Vocēs': 'arranjaram'
      },
      imperfect: {
        Eu: 'arranjava',
        Tu: 'arranjavas',
        'Ela/Ele/Você': 'arranjava',
        Nós: 'arranjávamos',
        'Eles/Elas/Vocēs': 'arranjavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'arranjara',
        Tu: 'arranjaras',
        'Ela/Ele/Você': 'arranjara',
        Nós: 'arranjáramos',
        'Eles/Elas/Vocēs': 'arranjaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'arranjarei',
        Tu: 'arranjarás',
        'Ela/Ele/Você': 'arranjará',
        Nós: 'arranjaremos',
        'Eles/Elas/Vocēs': 'arranjarão'
      },
      subjuntivoPresente: {
        Eu: 'arranje',
        Tu: 'arranjes',
        'Ela/Ele/Você': 'arranje',
        Nós: 'arranjemos',
        'Eles/Elas/Vocēs': 'arranjem'
      },
      pretéritoImperfeito: {
        Eu: 'arranjasse',
        Tu: 'arranjasses',
        'Ela/Ele/Você': 'arranjasse',
        Nós: 'arranjássemos',
        'Eles/Elas/Vocēs': 'arranjassem'
      },
      subjuntivoFuturo: {
        Eu: 'arranjar',
        Tu: 'arranjares',
        'Ela/Ele/Você': 'arranjar',
        Nós: 'arranjarmos',
        'Eles/Elas/Vocēs': 'arranjarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'arranjaria',
        Tu: 'arranjarias',
        'Ela/Ele/Você': 'arranjaria',
        Nós: 'arranjaríamos',
        'Eles/Elas/Vocēs': 'arranjariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'arranjando'
        },
        {
          form: 'particípio',
          portuguese: 'arranjado'
        }
      ]
    },
    {
      english: 'to be worth',
      infinitive: 'valer',
      presentSimple: {
        Eu: 'valho',
        Tu: 'vales',
        'Ela/Ele/Você': 'vale',
        Nós: 'valemos',
        'Eles/Elas/Vocēs': 'valem'
      },
      pastPerfect: {
        Eu: 'vali',
        Tu: 'valeste',
        'Ela/Ele/Você': 'valeu',
        Nós: 'valemos',
        'Eles/Elas/Vocēs': 'valeram'
      },
      imperfect: {
        Eu: 'valia',
        Tu: 'valias',
        'Ela/Ele/Você': 'valia',
        Nós: 'valíamos',
        'Eles/Elas/Vocēs': 'valiam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'valera',
        Tu: 'valeras',
        'Ela/Ele/Você': 'valera',
        Nós: 'valêramos',
        'Eles/Elas/Vocēs': 'valeram'
      },
      futuroDoPresenteSimples: {
        Eu: 'valerei',
        Tu: 'valerás',
        'Ela/Ele/Você': 'valerá',
        Nós: 'valeremos',
        'Eles/Elas/Vocēs': 'valerão'
      },
      subjuntivoPresente: {
        Eu: 'valha',
        Tu: 'valhas',
        'Ela/Ele/Você': 'valha',
        Nós: 'valhamos',
        'Eles/Elas/Vocēs': 'valham'
      },
      pretéritoImperfeito: {
        Eu: 'valesse',
        Tu: 'valesses',
        'Ela/Ele/Você': 'valesse',
        Nós: 'valêssemos',
        'Eles/Elas/Vocēs': 'valessem'
      },
      subjuntivoFuturo: {
        Eu: 'valer',
        Tu: 'valeres',
        'Ela/Ele/Você': 'valer',
        Nós: 'valermos',
        'Eles/Elas/Vocēs': 'valerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'valeria',
        Tu: 'valerias',
        'Ela/Ele/Você': 'valeria',
        Nós: 'valeríamos',
        'Eles/Elas/Vocēs': 'valeriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'valendo'
        },
        {
          form: 'particípio',
          portuguese: 'valido'
        }
      ]
    },
    {
      english: 'to miss',
      infinitive: 'faltar',
      presentSimple: {
        Eu: 'falto',
        Tu: 'faltas',
        'Ela/Ele/Você': 'falta',
        Nós: 'faltamos',
        'Eles/Elas/Vocēs': 'faltam'
      },
      pastPerfect: {
        Eu: 'faltei',
        Tu: 'faltaste',
        'Ela/Ele/Você': 'faltou',
        Nós: 'faltámos',
        'Eles/Elas/Vocēs': 'faltaram'
      },
      imperfect: {
        Eu: 'faltava',
        Tu: 'faltavas',
        'Ela/Ele/Você': 'faltava',
        Nós: 'faltávamos',
        'Eles/Elas/Vocēs': 'faltavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'faltara',
        Tu: 'faltaras',
        'Ela/Ele/Você': 'faltara',
        Nós: 'faltáramos',
        'Eles/Elas/Vocēs': 'faltaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'faltarei',
        Tu: 'faltarás',
        'Ela/Ele/Você': 'faltará',
        Nós: 'faltaremos',
        'Eles/Elas/Vocēs': 'faltarão'
      },
      subjuntivoPresente: {
        Eu: 'falte',
        Tu: 'faltes',
        'Ela/Ele/Você': 'falte',
        Nós: 'faltemos',
        'Eles/Elas/Vocēs': 'faltem'
      },
      pretéritoImperfeito: {
        Eu: 'faltasse',
        Tu: 'faltasses',
        'Ela/Ele/Você': 'faltasse',
        Nós: 'faltássemos',
        'Eles/Elas/Vocēs': 'faltassem'
      },
      subjuntivoFuturo: {
        Eu: 'faltar',
        Tu: 'faltares',
        'Ela/Ele/Você': 'faltar',
        Nós: 'faltarmos',
        'Eles/Elas/Vocēs': 'faltarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'faltaria',
        Tu: 'faltarias',
        'Ela/Ele/Você': 'faltaria',
        Nós: 'faltaríamos',
        'Eles/Elas/Vocēs': 'faltariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'faltando'
        },
        {
          form: 'particípio',
          portuguese: 'faltado'
        }
      ]
    },
    {
      english: 'to be important',
      infinitive: 'importar',
      presentSimple: {
        Eu: 'importo',
        Tu: 'importas',
        'Ela/Ele/Você': 'importa',
        Nós: 'importamos',
        'Eles/Elas/Vocēs': 'importam'
      },
      pastPerfect: {
        Eu: 'importei',
        Tu: 'importaste',
        'Ela/Ele/Você': 'importou',
        Nós: 'importámos',
        'Eles/Elas/Vocēs': 'importaram'
      },
      imperfect: {
        Eu: 'importava',
        Tu: 'importavas',
        'Ela/Ele/Você': 'importava',
        Nós: 'importávamos',
        'Eles/Elas/Vocēs': 'importavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'importara',
        Tu: 'importaras',
        'Ela/Ele/Você': 'importara',
        Nós: 'importáramos',
        'Eles/Elas/Vocēs': 'importaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'importarei',
        Tu: 'importarás',
        'Ela/Ele/Você': 'importará',
        Nós: 'importaremos',
        'Eles/Elas/Vocēs': 'importarão'
      },
      subjuntivoPresente: {
        Eu: 'importe',
        Tu: 'importes',
        'Ela/Ele/Você': 'importe',
        Nós: 'importemos',
        'Eles/Elas/Vocēs': 'importem'
      },
      pretéritoImperfeito: {
        Eu: 'importasse',
        Tu: 'importasses',
        'Ela/Ele/Você': 'importasse',
        Nós: 'importássemos',
        'Eles/Elas/Vocēs': 'importassem'
      },
      subjuntivoFuturo: {
        Eu: 'importar',
        Tu: 'importares',
        'Ela/Ele/Você': 'importar',
        Nós: 'importarmos',
        'Eles/Elas/Vocēs': 'importarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'importaria',
        Tu: 'importarias',
        'Ela/Ele/Você': 'importaria',
        Nós: 'importaríamos',
        'Eles/Elas/Vocēs': 'importariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'importando'
        },
        {
          form: 'particípio',
          portuguese: 'importado'
        }
      ]
    },
    {
      english: 'to bet',
      infinitive: 'apostar',
      presentSimple: {
        Eu: 'aposto',
        Tu: 'apostas',
        'Ela/Ele/Você': 'aposta',
        Nós: 'apostamos',
        'Eles/Elas/Vocēs': 'apostam'
      },
      pastPerfect: {
        Eu: 'apostei',
        Tu: 'apostaste',
        'Ela/Ele/Você': 'apostou',
        Nós: 'apostámos',
        'Eles/Elas/Vocēs': 'apostaram'
      },
      imperfect: {
        Eu: 'apostava',
        Tu: 'apostavas',
        'Ela/Ele/Você': 'apostava',
        Nós: 'apostávamos',
        'Eles/Elas/Vocēs': 'apostavam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'apostara',
        Tu: 'apostaras',
        'Ela/Ele/Você': 'apostara',
        Nós: 'apostáramos',
        'Eles/Elas/Vocēs': 'apostaram'
      },
      futuroDoPresenteSimples: {
        Eu: 'apostarei',
        Tu: 'apostarás',
        'Ela/Ele/Você': 'apostará',
        Nós: 'apostaremos',
        'Eles/Elas/Vocēs': 'apostarão'
      },
      subjuntivoPresente: {
        Eu: 'aposte',
        Tu: 'apostes',
        'Ela/Ele/Você': 'aposte',
        Nós: 'apostemos',
        'Eles/Elas/Vocēs': 'apostem'
      },
      pretéritoImperfeito: {
        Eu: 'apostasse',
        Tu: 'apostasses',
        'Ela/Ele/Você': 'apostasse',
        Nós: 'apostássemos',
        'Eles/Elas/Vocēs': 'apostassem'
      },
      subjuntivoFuturo: {
        Eu: 'apostar',
        Tu: 'apostares',
        'Ela/Ele/Você': 'apostar',
        Nós: 'apostarmos',
        'Eles/Elas/Vocēs': 'apostarem'
      },
      futurodoPretéritoSimples: {
        Eu: 'apostaria',
        Tu: 'apostarias',
        'Ela/Ele/Você': 'apostaria',
        Nós: 'apostaríamos',
        'Eles/Elas/Vocēs': 'apostariam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'apostando'
        },
        {
          form: 'particípio',
          portuguese: 'apostado'
        }
      ]
    },
    {
      english: 'to believe',
      infinitive: 'crer',
      presentSimple: {
        Eu: 'creio',
        Tu: 'crês',
        'Ela/Ele/Você': 'crê',
        Nós: 'cremos',
        'Eles/Elas/Vocēs': 'crêem'
      },
      pastPerfect: {
        Eu: 'cri',
        Tu: 'creste',
        'Ela/Ele/Você': 'creu',
        Nós: 'cremos',
        'Eles/Elas/Vocēs': 'creram'
      },
      imperfect: {
        Eu: 'cria',
        Tu: 'crias',
        'Ela/Ele/Você': 'cria',
        Nós: 'críamos',
        'Eles/Elas/Vocēs': 'criam'
      },
      pretéritoMaisQuePerfeito: {
        Eu: 'crera',
        Tu: 'creras',
        'Ela/Ele/Você': 'crera',
        Nós: 'crêramos',
        'Eles/Elas/Vocēs': 'creram'
      },
      futuroDoPresenteSimples: {
        Eu: 'crerei',
        Tu: 'crerás',
        'Ela/Ele/Você': 'crerá',
        Nós: 'creremos',
        'Eles/Elas/Vocēs': 'crerão'
      },
      subjuntivoPresente: {
        Eu: 'creia',
        Tu: 'creias',
        'Ela/Ele/Você': 'creia',
        Nós: 'creiamos',
        'Eles/Elas/Vocēs': 'creiam'
      },
      pretéritoImperfeito: {
        Eu: 'cresse',
        Tu: 'cresses',
        'Ela/Ele/Você': 'cresse',
        Nós: 'crêssemos',
        'Eles/Elas/Vocēs': 'cressem'
      },
      subjuntivoFuturo: {
        Eu: 'crer',
        Tu: 'creres',
        'Ela/Ele/Você': 'crer',
        Nós: 'crermos',
        'Eles/Elas/Vocēs': 'crerem'
      },
      futurodoPretéritoSimples: {
        Eu: 'creria',
        Tu: 'crerias',
        'Ela/Ele/Você': 'creria',
        Nós: 'creríamos',
        'Eles/Elas/Vocēs': 'creriam'
      },
      otherForms: [
        {
          form: 'gerúndio',
          portuguese: 'crendo'
        },
        {
          form: 'particípio',
          portuguese: 'crido'
        }
      ]
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
        plural: 'mulheres',
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
        plural: 'minutos',
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
        plural: 'filhos',
        gender: 'masculine'
      }
    },
    {
      english: 'problem',
      portuguese: {
        word: 'problema',
        plural: 'problemas',
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
    },
    {
      english: 'girl',
      portuguese: {
        word: 'menina',
        plural: 'meninas',
        gender: 'feminine'
      }
    },
    {
      english: 'ship',
      portuguese: {
        word: 'nave',
        plural: 'naves',
        gender: 'feminine'
      }
    },
    {
      english: 'favor',
      portuguese: {
        word: 'favor',
        plural: 'favores',
        gender: 'masculine'
      }
    },
    {
      english: 'husband',
      portuguese: {
        word: 'marido',
        plural: 'maridos',
        gender: 'masculine'
      }
    },
    {
      english: 'uncle',
      portuguese: {
        word: 'tio',
        plural: 'tios',
        gender: 'masculine'
      }
    },
    {
      english: 'moon',
      portuguese: {
        word: 'lua',
        plural: 'luas',
        gender: 'feminine'
      }
    },
    {
      english: 'elevator',
      portuguese: {
        word: 'elevador',
        plural: 'elevadores',
        gender: 'masculine'
      }
    },
    {
      english: 'rice',
      portuguese: {
        word: 'arroz',
        gender: 'masculine'
      }
    },
    {
      english: 'glasses',
      portuguese: {
        word: 'óculos',
        gender: 'masculine'
      }
    },
    {
      english: 'wallet',
      portuguese: {
        word: 'carteira',
        plural: 'carteiras',
        gender: 'feminine'
      }
    },
    {
      english: 'umbrella',
      portuguese: {
        word: 'guarda-chuva',
        plural: 'guarda-chuvas',
        gender: 'masculine'
      }
    },
    {
      english: 'doctor',
      portuguese: {
        word: 'médico',
        plural: 'médicos',
        gender: 'masculine'
      }
    },
    {
      english: 'fireman',
      portuguese: {
        word: 'bombeiro',
        gender: 'masculine'
      }
    },
    {
      english: 'pharmacy',
      portuguese: {
        word: 'farmácia',
        plural: 'farmácias',
        gender: 'feminine'
      }
    },
    {
      english: 'snow',
      portuguese: {
        word: 'neve',
        gender: 'feminine'
      }
    },
    {
      english: 'wind',
      portuguese: {
        word: 'vento',
        gender: 'masculine'
      }
    },
    {
      english: 'bird',
      portuguese: {
        word: 'pássaro',
        plural: 'pássaros',
        gender: 'masculine'
      }
    },
    {
      english: 'insect',
      portuguese: {
        word: 'inseto',
        plural: 'insetos',
        gender: 'masculine'
      }
    },
    {
      english: 'mouth',
      portuguese: {
        word: 'boca',
        plural: 'bocas',
        gender: 'feminine'
      }
    },
    {
      english: 'town',
      portuguese: {
        word: 'vila',
        plural: 'vilas',
        gender: 'feminine'
      }
    },
    {
      english: 'ear',
      portuguese: {
        word: 'orelha',
        plural: 'orelhas',
        gender: 'feminine'
      }
    },
    {
      english: 'village',
      portuguese: {
        word: 'aldeia',
        plural: 'aldeias',
        gender: 'feminine'
      }
    },
    {
      english: 'lady',
      portuguese: {
        word: 'senhora',
        plural: 'senhoras',
        gender: 'feminine'
      }
    },
    {
      english: 'boy',
      portuguese: {
        word: 'rapaz',
        plural: 'rapazes',
        gender: 'masculine'
      }
    },
    {
      english: 'daughter',
      portuguese: {
        word: 'filha',
        plural: 'filhas',
        gender: 'feminine'
      }
    },
    {
      english: 'height',
      portuguese: {
        word: 'altura',
        plural: 'alturas',
        gender: 'feminine'
      }
    },
    {
      english: 'rest',
      portuguese: {
        word: 'resto',
        plural: 'restos',
        gender: 'masculine'
      }
    },
    {
      english: 'agent',
      portuguese: {
        word: 'agente',
        plural: 'agentes',
        gender: 'masculine'
      }
    },
    {
      english: 'team',
      portuguese: {
        word: 'equipa',
        plural: 'equipas',
        gender: 'feminine'
      }
    },
    {
      english: 'regret',
      portuguese: {
        word: 'lamento',
        plural: 'lamentos',
        gender: 'masculine'
      }
    },
    {
      english: 'blood',
      portuguese: {
        word: 'sangue',
        gender: 'masculine'
      }
    },
    {
      english: 'fault',
      portuguese: {
        word: 'culpa',
        plural: 'culpas',
        gender: 'feminine'
      }
    },
    {
      english: 'weapon',
      portuguese: {
        word: 'arma',
        plural: 'armas',
        gender: 'feminine'
      }
    },
    {
      english: 'excuse',
      portuguese: {
        word: 'desculpa',
        plural: 'desculpas',
        gender: 'feminine'
      }
    },
    {
      english: 'parents',
      portuguese: {
        word: 'pais',
        gender: 'masculine'
      }
    },
    {
      english: 'crap',
      portuguese: {
        word: 'merda',
        plural: 'merdas',
        gender: 'feminine'
      }
    },
    {
      english: 'president',
      portuguese: {
        word: 'presidente',
        plural: 'presidentes',
        gender: 'masculine'
      }
    },
    {
      english: 'site',
      portuguese: {
        word: 'sítio',
        plural: 'sítios',
        gender: 'masculine'
      }
    },
    {
      english: 'reason',
      portuguese: {
        word: 'porquê',
        gender: 'masculine'
      }
    },
    {
      english: 'million',
      portuguese: {
        word: 'milhão',
        plural: 'milhões',
        gender: 'masculine'
      }
    },
    {
      english: 'force',
      portuguese: {
        word: 'força',
        plural: 'forças',
        gender: 'feminine'
      }
    },
    {
      english: 'dolar',
      portuguese: {
        word: 'dólar',
        plural: 'dólares',
        gender: 'masculine'
      }
    },
    {
      english: 'king',
      portuguese: {
        word: 'rei',
        plural: 'reis',
        gender: 'masculine'
      }
    },
    {
      english: 'call',
      portuguese: {
        word: 'chamada',
        plural: 'chamadas',
        gender: 'feminine'
      }
    },
    {
      english: 'dead',
      portuguese: {
        word: 'morto',
        plural: 'mortos',
        gender: 'masculine'
      }
    },
    {
      english: 'opportunity',
      portuguese: {
        word: 'oportunidade',
        plural: 'oportunidades',
        gender: 'feminine'
      }
    },
    {
      english: 'fact',
      portuguese: {
        word: 'facto',
        plural: 'factos',
        gender: 'masculine'
      }
    },
    {
      english: 'killer',
      portuguese: {
        word: 'assassino',
        plural: 'assassinos',
        gender: 'masculine'
      }
    },
    {
      english: 'sex',
      portuguese: {
        word: 'sexo',
        plural: 'sexos',
        gender: 'masculine'
      }
    },
    {
      english: 'half',
      portuguese: {
        word: 'metade',
        plural: 'metades',
        gender: 'feminine'
      }
    },
    {
      english: 'attack',
      portuguese: {
        word: 'ataque',
        plural: 'ataques',
        gender: 'masculine'
      }
    },
    {
      english: 'wedding',
      portuguese: {
        word: 'casamento',
        plural: 'casamentos',
        gender: 'masculine'
      }
    },
    {
      english: 'majority',
      portuguese: {
        word: 'maioria',
        plural: 'maiorias',
        gender: 'feminine'
      }
    },
    {
      english: 'deal',
      portuguese: {
        word: 'negócio',
        plural: 'negócios',
        gender: 'masculine'
      }
    },
    {
      english: 'center',
      portuguese: {
        word: 'centro',
        plural: 'centros',
        gender: 'masculine'
      }
    },
    {
      english: 'base',
      portuguese: {
        word: 'base',
        plural: 'bases',
        gender: 'feminine'
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
      english: 'yourself',
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
    },
    {
      portuguese: 'mil',
      english: 'thousand'
    },
    {
      portuguese: 'miss',
      english: 'miss'
    },
    {
      portuguese: 'comigo',
      english: 'with me'
    },
    {
      portuguese: 'contigo',
      english: 'with you'
    },
    {
      portuguese: 'pena',
      english: 'pity'
    },
    {
      portuguese: 'raio',
      english: 'radius'
    },
    {
      portuguese: 'sequer',
      english: 'not even'
    },
    {
      portuguese: 'sob',
      english: 'under'
    },
    {
      portuguese: 'felizmente',
      english: 'fortunately'
    },
    {
      portuguese: 'elas',
      english: 'they - feminine'
    },
    {
      portuguese: 'exactamente',
      english: 'exactly'
    },
    {
      portuguese: 'após',
      english: 'after - formal'
    },
    {
      portuguese: 'através',
      english: 'through'
    },
    {
      portuguese: 'disto',
      english: 'de + isto'
    },
    {
      portuguese: 'disso',
      english: 'de + isso'
    },
    {
      portuguese: 'daquilo',
      english: 'de + aquilo'
    },
    {
      portuguese: 'completamente',
      english: 'completely'
    },
    {
      portuguese: 'pra',
      english: 'to - informal'
    },
    {
      portuguese: 'acerca',
      english: 'about - formal'
    },
    {
      portuguese: 'simplesmente',
      english: 'simply'
    },
    {
      portuguese: 'aonde',
      english: 'where to'
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
    },
    {
      english: 'only',
      portuguese: {
        singular: {
          masculine: 'único',
          feminine: 'única'
        },
        plural: {
          masculine: 'únicos',
          feminine: 'únicas'
        }
      }
    },
    {
      english: 'not any',
      portuguese: {
        singular: {
          masculine: 'nenhum',
          feminine: 'nenhuma'
        },
        plural: {
          masculine: 'nenhuns',
          feminine: 'nenhumas'
        }
      }
    },
    {
      english: 'too much',
      portuguese: {
        singular: {
          masculine: 'demasiado',
          feminine: 'demasiada'
        },
        plural: {
          masculine: 'demasiados',
          feminine: 'demasiadas'
        }
      }
    },
    {
      english: 'em + aquela',
      portuguese: {
        singular: {
          masculine: 'naquele',
          feminine: 'naquela'
        },
        plural: {
          masculine: 'naqueles',
          feminine: 'naquelas'
        }
      }
    },
    {
      english: 'em + esse',
      portuguese: {
        singular: {
          masculine: 'nesse',
          feminine: 'nessa'
        },
        plural: {
          masculine: 'nesses',
          feminine: 'nessas'
        }
      }
    },
    {
      english: 'second',
      portuguese: {
        singular: {
          masculine: 'segundo',
          feminine: 'segunda'
        },
        plural: {
          masculine: 'segundos',
          feminine: 'segundas'
        }
      }
    },
    {
      english: 'which',
      portuguese: {
        singular: {
          masculine: 'qual',
          feminine: 'qual'
        },
        plural: {
          masculine: 'quais',
          feminine: 'quais'
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
        plural: 'melhores'
      },
      feminine: {
        singular: 'melhor',
        plural: 'melhores'
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
    },
    {
      english: 'done',
      masculine: {
        singular: 'feito',
        plural: 'feitos'
      },
      feminine: {
        singular: 'feita',
        plural: 'feitas'
      }
    },
    {
      english: 'bigger',
      masculine: {
        singular: 'maior',
        plural: 'maiores'
      },
      feminine: {
        singular: 'maior',
        plural: 'maiores'
      }
    },
    {
      english: 'enough',
      masculine: {
        singular: 'bastante',
        plural: 'bastantes'
      },
      feminine: {
        singular: 'bastante',
        plural: 'bastantes'
      }
    },
    {
      english: 'difficult',
      masculine: {
        singular: 'difícil',
        plural: 'difíceis'
      },
      feminine: {
        singular: 'difícil',
        plural: 'difíceis'
      }
    },
    {
      english: 'own',
      masculine: {
        singular: 'próprio',
        plural: 'próprios'
      },
      feminine: {
        singular: 'própria',
        plural: 'próprias'
      }
    },
    {
      english: 'young',
      masculine: {
        singular: 'jovem',
        plural: 'jovens'
      },
      feminine: {
        singular: 'jovem',
        plural: 'jovens'
      }
    },
    {
      english: 'poor',
      masculine: {
        singular: 'pobre',
        plural: 'pobres'
      },
      feminine: {
        singular: 'pobre',
        plural: 'pobres'
      }
    },
    {
      english: 'beautiful',
      masculine: {
        singular: 'belo',
        plural: 'belos'
      },
      feminine: {
        singular: 'bela',
        plural: 'belas'
      }
    },
    {
      english: 'next',
      masculine: {
        singular: 'próximo',
        plural: 'próximos'
      },
      feminine: {
        singular: 'próxima',
        plural: 'próximas'
      }
    },
    {
      english: 'sufficient',
      masculine: {
        singular: 'suficiente',
        plural: 'suficientes'
      },
      feminine: {
        singular: 'suficiente',
        plural: 'suficientes'
      }
    },
    {
      english: 'local',
      masculine: {
        singular: 'local',
        plural: 'locais'
      },
      feminine: {
        singular: 'local',
        plural: 'locais'
      }
    },
    {
      english: 'capable',
      masculine: {
        singular: 'capaz',
        plural: 'capazes'
      },
      feminine: {
        singular: 'capaz',
        plural: 'capazes'
      }
    },
    {
      english: 'bad',
      masculine: {
        singular: 'mau',
        plural: 'maus'
      },
      feminine: {
        singular: 'má',
        plural: 'más'
      }
    },
    {
      english: 'worse',
      masculine: {
        singular: 'pior',
        plural: 'piores'
      },
      feminine: {
        singular: 'pior',
        plural: 'piores'
      }
    },
    {
      english: 'certain',
      masculine: {
        singular: 'certo',
        plural: 'certos'
      },
      feminine: {
        singular: 'certa',
        plural: 'certas'
      }
    },
    {
      english: 'de + essa',
      masculine: {
        singular: 'desse',
        plural: 'desses'
      },
      feminine: {
        singular: 'dessa',
        plural: 'dessas'
      }
    },
    {
      english: 'how much',
      masculine: {
        singular: 'quanto',
        plural: 'quantos'
      },
      feminine: {
        singular: 'quanta',
        plural: 'quantas'
      }
    },
    {
      english: 'possible',
      masculine: {
        singular: 'possível',
        plural: 'possíveis'
      },
      feminine: {
        singular: 'possível',
        plural: 'possíveis'
      }
    },
    {
      english: 'genuine',
      masculine: {
        singular: 'verdadeiro',
        plural: 'verdadeiros'
      },
      feminine: {
        singular: 'verdadeira',
        plural: 'verdadeiras'
      }
    },
    {
      english: 'personal',
      masculine: {
        singular: 'pessoal',
        plural: 'pessoais'
      },
      feminine: {
        singular: 'pessoal',
        plural: 'pessoais'
      }
    },
    {
      english: 'supposed',
      masculine: {
        singular: 'suposto',
        plural: 'supostos'
      },
      feminine: {
        singular: 'suposta',
        plural: 'supostas'
      }
    },
    {
      english: 'ready',
      masculine: {
        singular: 'pronto',
        plural: 'prontos'
      },
      feminine: {
        singular: 'suposta',
        plural: 'supostas'
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
