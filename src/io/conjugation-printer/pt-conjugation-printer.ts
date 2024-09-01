import { Person, Verb } from '../../repository/exercises-repository';
import { Result } from '../../service/result';
import { ColoredText } from '../output';
import { VerbExercise } from '../../exercise/verb-exercise';
import { BaseWord, Exercise } from '../../exercise/exercise';
import { VerbConjugation } from './conjugation-printer';
import { createColorArray } from '../terminal/terminal-utils';
import { GermanPerson } from '../../repository/german-exercises-repository';

type VerbEnding = 'ar' | 'er' | 'ir';
const standardVerbEndings: VerbEnding[] = ['ar', 'er', 'ir'];

type Tense = 'presentSimple' | 'pastPerfect';

export const standardConjugations: Record<Tense, Record<VerbEnding, Record<Person, string>>> = {
  presentSimple: {
    ar: {
      [Person.Eu]: 'o',
      [Person.Tu]: 'as',
      [Person.ElaEleVocê]: 'a',
      [Person.Nós]: 'amos',
      [Person.ElesElasVosēs]: 'am'
    },
    er: {
      [Person.Eu]: 'o',
      [Person.Tu]: 'es',
      [Person.ElaEleVocê]: 'e',
      [Person.Nós]: 'emos',
      [Person.ElesElasVosēs]: 'em'
    },
    ir: {
      [Person.Eu]: 'o',
      [Person.Tu]: 'es',
      [Person.ElaEleVocê]: 'e',
      [Person.Nós]: 'imos',
      [Person.ElesElasVosēs]: 'em'
    }
  },
  pastPerfect: {
    ar: {
      [Person.Eu]: 'ei',
      [Person.Tu]: 'aste',
      [Person.ElaEleVocê]: 'ou',
      [Person.Nós]: 'ámos',
      [Person.ElesElasVosēs]: 'aram'
    },
    er: {
      [Person.Eu]: 'i',
      [Person.Tu]: 'este',
      [Person.ElaEleVocê]: 'eu',
      [Person.Nós]: 'emos',
      [Person.ElesElasVosēs]: 'eram'
    },
    ir: {
      [Person.Eu]: 'i',
      [Person.Tu]: 'iste',
      [Person.ElaEleVocê]: 'iu',
      [Person.Nós]: 'imos',
      [Person.ElesElasVosēs]: 'iram'
    }
  }
};

export class PTVerbConjugation extends VerbConjugation<Verb> {
  public constructor(data: Verb, result: Result[]) {
    super(data, result);
  }

  getPersonForX(x: number): Person {
    return Object.values(Person)[x] as Person;
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    const wordBase = this.data.infinitive.slice(0, -2);

    const person = this.getPersonForX(x);
    const tense = this.getTenseForY(y);

    const normalize = (word: string) => {
      return (word.includes('-') ? word.substring(0, word.indexOf('-')) : word) as VerbEnding;
    };
    const verbEnding = normalize(this.data.infinitive).slice(-2) as VerbEnding;
    if (!standardVerbEndings.includes(verbEnding)) {
      return new ColoredText(cellValue, createColorArray({ yellow: cellValue.length }));
    }
    const expectedVerbEnding = standardConjugations[tense][verbEnding][person];
    const expectedVerbEndingLength = expectedVerbEnding.length;
    if (wordBase.concat(expectedVerbEnding) !== cellValue) {
      return new ColoredText(cellValue, createColorArray({ yellow: cellValue.length }));
    }
    return new ColoredText(
      cellValue,
      createColorArray({
        white: wordBase.length,
        green: expectedVerbEndingLength
      })
    );
  }

  getExercise(x: number, y: number): Exercise {
    return VerbExercise.new(this.data, this.getPersonForX(x), this.getTenseForY(y));
  }

  getRowTitles(): string[] {
    return Object.keys(Person).map((person) => `${person}: `);
  }

  getTableSize(): { x: number; y: number } {
    return {
      y: 3,
      x: Object.values(this.data.presentSimple).length
    };
  }

  getRowTitle(x: number): ColoredText {
    return new ColoredText(`${Object.keys(Person)[x]}: `);
  }
}
