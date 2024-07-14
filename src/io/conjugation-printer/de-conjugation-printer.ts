import { Result } from '../../service/result';
import { ColoredText } from '../output';
import { Exercise } from '../../exercise/exercise';
import { VerbConjugation } from './conjugation-printer';
import { GermanPerson, GermanVerb } from '../../repository/german-exercises-repository';
import { GermanVerbExercise } from '../../exercise/german-verb-exercise';
import { createColorArray } from '../terminal/terminal-utils';
import { Person } from '../../repository/exercises-repository';

type Conjugation = Record<GermanPerson, string>;

export class DEVerbConjugation extends VerbConjugation<GermanVerb> {
  public constructor(data: GermanVerb, result: Result[]) {
    super(data, result);
  }

  getPersonForX(x: number): GermanPerson {
    return Object.values(GermanPerson)[x] as GermanPerson;
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    const wordBase = this.data.infinitive.endsWith('en')
      ? this.data.infinitive.slice(0, -2)
      : this.data.infinitive.slice(0, -1);

    const person = this.getPersonForX(x);
    const standardConjugations: Conjugation = {
      Ich: 'e',
      Du: 'st',
      'Er/Sie/Es': 't',
      Wir: 'en',
      Ihr: 't',
      Sie: 'en'
    };
    const expectedVerbEnding = standardConjugations[person];
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
    return GermanVerbExercise.new(this.data, this.getPersonForX(x), this.getTenseForY(y));
  }

  getRowTitles(): string[] {
    return Object.keys(GermanPerson).map((person) => `${person}: `);
  }

  getTableSize(): { x: number; y: number } {
    return {
      y: 2,
      x: Object.values(this.data.presentSimple).length
    };
  }

  getRowTitle(x: number): ColoredText {
    return new ColoredText(`${Object.keys(GermanPerson)[x]}: `);
  }
}
