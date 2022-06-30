import { Person } from '../service/verb';

export type RegularVerb = string;

export type IrregularVerb = { [key in Person]: string } & { Infinitive: string };

type Verbs = {
  regular: RegularVerb[];
  irregular: IrregularVerb[];
};

export type Schema = {
  verbs: Verbs;
};

export const db: Schema = {
  verbs: {
    regular: ['falar', 'comer', 'abrir'],
    irregular: [
      {
        Infinitive: 'ser',
        Eu: 'sou',
        Tu: 'és',
        'Ela/Ele/Vocé': 'é',
        Nós: 'somos',
        'Eles/Elas/Vosēs': 'sāo'
      }
    ]
  }
};
