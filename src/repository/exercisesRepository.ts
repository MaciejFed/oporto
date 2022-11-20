/* eslint-disable quotes */
import { Person } from '../service/verb';

export type Verb = { english: string } & { [key in Person]: string } & {
  infinitive: string;
};

type NounGender = 'masculine' | 'feminine' | 'neither';

type SentenceType = 'question' | 'statement';

type PolishNoun = {
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
  english: string;
};

export type Noun = {
  english: string;
  polish: PolishNoun;
};

export type Sentence = {
  english: string;
  polish: string;
  sentenceType: SentenceType;
};

export type Schema = {
  verbs: Verb[];
  nouns: Noun[];
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
      english: 'to be thankful',
      infinitive: 'dziękować',
      Ja: 'dziękuję'
    },
    {
      english: 'to like',
      infinitive: 'lubić',
      Ja: 'lubię'
    },
    {
      english: 'to be named',
      infinitive: 'nazywać się',
      Ja: 'nazywam się'
    }
  ],
  nouns: [
    {
      english: 'day',
      polish: {
        word: 'dzień',
        gender: 'masculine'
      }
    },
    {
      english: 'name',
      polish: {
        word: 'imię',
        gender: 'neither'
      }
    },
    {
      english: 'dinner',
      polish: {
        word: 'kolacja',
        gender: 'feminine'
      }
    },
    {
      english: 'work',
      polish: {
        word: 'praca',
        gender: 'feminine'
      }
    }
  ],
  adjectives: [
    {
      english: 'good',
      masculine: {
        singular: 'dobry',
        plural: 'dobrzy'
      },
      feminine: {
        singular: 'dobra',
        plural: 'dobre'
      }
    }
  ],
  sentences: [
    {
      english: 'yes',
      polish: 'tak',
      sentenceType: 'statement'
    },
    {
      english: 'no',
      polish: 'nie',
      sentenceType: 'statement'
    },
    {
      english: 'good day',
      polish: 'dzień dobry',
      sentenceType: 'statement'
    }
  ],
  fitIn: []
};

export function readAll() {
  return db;
}
