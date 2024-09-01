/* eslint-disable quotes */

import { db } from './db';
import { assertNonNull } from '../common/common';

export enum Person {
  Eu = 'Eu',
  Tu = 'Tu',
  ElaEleVocê = 'Ela/Ele/Você',
  Nós = 'Nós',
  ElesElasVosēs = 'Eles/Elas/Vocēs'
}

export type Verb = {
  english: string;
  infinitive: VerbInfinitive;
  presentSimple: { [key in Person]: string };
  pastPerfect?: { [key in Person]: string };
  imperfect?: { [key in Person]: string };
};

export type WordTypes = Noun | Verb | Other | Adjective;

type NounGender = 'masculine' | 'feminine' | 'none';
export type AdjectiveGender = 'masculine' | 'feminine';

type SentenceType = 'question' | 'statement';

export type AdjectiveNumber = 'singular' | 'plural';

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
  placing?: 'before' | 'after';
  english: string;
};

export type Noun = {
  english: string;
  portuguese: PortugueseNoun;
};

export type Sentence = {
  english: string;
  portuguese: string;
  sentenceType?: SentenceType;
};

export type Phrase = {
  english: string;
  portuguese: string;
};

export type GenderWord = {
  feminine: string;
  masculine: string;
};

export type Other = {
  english: string;
  portuguese: string;
};

export type OtherWithGender = {
  english: string;
  portuguese: {
    base?: string;
    singular: GenderWord;
    plural: GenderWord;
  };
};

export type Schema = {
  verbs: Verb[];
  nouns: Noun[];
  others: Other[];
  othersWithGender: OtherWithGender[];
  adjectives: Adjective[];
  sentences: Sentence[];
  phrases: Phrase[];
  fitIn: FitIn[];
};

export type FitIn = {
  prefix: string;
  answer: string;
  suffix: string;
  explanation?: string;
};

const verbs = [
  'ser',
  'estar',
  'ir',
  'ter',
  'querer',
  'ver',
  'fazer',
  'saber',
  'ler',
  'dizer',
  'poder',
  'falar',
  'comer',
  'abrir',
  'achar',
  'andar',
  'beber',
  'entrar',
  'morar',
  'olhar',
  'chamar-se',
  'trabalhar',
  'cumprimentar',
  'apresentar-se',
  'encontrar',
  'perguntar',
  'jogar',
  'escrever',
  'compreender',
  'conhecer',
  'resolver',
  'descer',
  'aquecer',
  'viver',
  'correr',
  'aprender',
  'esquecer',
  'usar',
  'almoçar',
  'telefonar',
  'pagar',
  'tomar',
  'ficar',
  'levantar-se',
  'comprar',
  'ensinar',
  'fechar',
  'gostar',
  'começar',
  'lavar',
  'acabar',
  'apanhar',
  'vestir',
  'dividir',
  'despir',
  'corrigir',
  'decidir',
  'conseguir',
  'sentir',
  'traduzir',
  'partir',
  'preferir',
  'discutir',
  'conduzir',
  'permitir',
  'organizar',
  'limpar',
  'pôr',
  'cuidar',
  'mandar',
  'encher',
  'pegar',
  'tocar',
  'ajudar',
  'passear',
  'acreditar',
  'acontecer',
  'adorar',
  'alcançar',
  'alterar',
  'aplicar',
  'assegurar',
  'assinar',
  'aumentar',
  'cair',
  'carregar',
  'chegar',
  'concentrar',
  'construir',
  'continuar',
  'conversar',
  'criar',
  'dançar',
  'dar',
  'definir',
  'determinar',
  'dormir',
  'enviar',
  'esperar',
  'estudar',
  'explicar',
  'fumar',
  'gastar',
  'lembrar',
  'mencionar',
  'mudar',
  'negar',
  'parar',
  'passar',
  'pensar',
  'poupar',
  'preparar',
  'quebrar',
  'realizar',
  'refletir',
  'sair',
  'seguir',
  'servir',
  'sugerir',
  'tentar',
  'virar',
  'vender',
  'trazer',
  'transformar-se',
  'transportar',
  'sofrer',
  'segurar',
  'significar',
  'salvar',
  'sarar',
  'prover',
  'romper',
  'permanecer',
  'precisar',
  'ouvir',
  'pedir',
  'oferecer',
  'obter',
  'ocorrer',
  'mover',
  'mostrar',
  'brincar',
  'viajar',
  'atravessar',
  'promover',
  'casar',
  'levar',
  'agarrar',
  'responder',
  'sorrir',
  'suspirar',
  'nadar',
  'voar',
  'soltar',
  'separar',
  'empurrar',
  'voltar',
  'abanar',
  'gritar',
  'subir',
  'envenenar',
  'cantar',
  'rir',
  'assustar',
  'trincar',
  'sentar',
  'adormecer',
  'acordar',
  'reparar',
  'defender',
  'fugir',
  'convencer',
  'coçar',
  'bater',
  'piscar',
  'deixar',
  'avistar',
  'saltar',
  'mexer',
  'atirar',
  'acertar',
  'puxar',
  'haver'
] as const;

export type VerbInfinitive = (typeof verbs)[number];

export function readAll() {
  return db;
}

class WordDatabase {
  public constructor(private readonly database: Schema = db) {}

  public verb(verbInfinitive: VerbInfinitive): Verb {
    return assertNonNull(db.verbs.find((verb) => verb.infinitive === verbInfinitive));
  }
}

export const wordDatabase = new WordDatabase();
