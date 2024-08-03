import { Result } from '../../service/result';
import { ColoredText } from '../output';
import { Exercise } from '../../exercise/exercise';
import { VerbConjugation } from './conjugation-printer';
import {
  GermanCase,
  GermanCaseWord,
  GermanGender,
  GermanPerson,
  GermanVerb
} from '../../repository/german-exercises-repository';
import { GermanVerbExercise } from '../../exercise/german-verb-exercise';
import { createColorArray } from '../terminal/terminal-utils';
import { Person } from '../../repository/exercises-repository';
import { GermanCaseExercise } from '../../exercise/german-case-exercise';

export class DECaseConjugation extends VerbConjugation<GermanCaseWord> {
  public constructor(data: GermanCaseWord, result: Result[]) {
    super(data, result);
  }

  getCell(x: number, y: number): string | undefined {
    if (x > this.getTableSize().x || y > this.getTableSize().y) throw Error('');

    const valueTime = Object.values(this.data.german)[y];
    if (!valueTime) return undefined;
    if (typeof valueTime === 'string') return valueTime;
    // @ts-ignore
    return Object.values(valueTime)[x];
  }

  getPersonForX(x: number): GermanCase {
    return Object.values(GermanCase)[x] as GermanCase;
  }

  getGenderForY(y: number): GermanGender | undefined {
    if (this.isNonGender()) return undefined;
    return Object.values(GermanGender)[y] as GermanGender;
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    return new ColoredText(cellValue);
  }

  getExercise(x: number, y: number): Exercise {
    return GermanCaseExercise.new(this.data, this.getPersonForX(y), this.getGenderForY(x));
  }

  getRowTitles(): string[] {
    return Object.keys(GermanPerson).map((person) => `${person}: `);
  }

  getTableSize(): { x: number; y: number } {
    const valueTime = Object.values(this.data.german)[0];
    if (!valueTime || typeof valueTime === 'object') {
      return {
        x: Object.values(valueTime).length,
        y: Object.values(this.data.german).length
      };
    }
    return {
      x: 1,
      y: Object.values(this.data.german).length
    };
  }

  getRowTitle(x: number): ColoredText {
    if (this.isNonGender()) return new ColoredText('');
    return new ColoredText(`${Object.keys(Object.values(this.data.german)[0])[x]}: `);
  }

  isNonGender(): boolean {
    const valueTime = Object.values(this.data.german)[0];
    return !valueTime || typeof valueTime !== 'object';
  }
}
