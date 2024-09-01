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
import { Adjective, AdjectiveGender, AdjectiveNumber, Person } from '../../repository/exercises-repository';
import { GermanCaseExercise } from '../../exercise/german-case-exercise';
import { AdjectiveTranslationExercise } from '../../exercise/translation/adjective-translation-exercise';

export class PtAdjectiveConjugationPrinter extends VerbConjugation<Adjective> {
  public constructor(data: Adjective, result: Result[]) {
    super(data, result);
  }

  getCell(x: number, y: number): string | undefined {
    if (x > this.getTableSize().x || y > this.getTableSize().y) throw Error('');
    return this.data[this.getGenderForX(x)][this.getNumberForY(y)];
  }

  getGenderForX(x: number): AdjectiveGender {
    return x === 0 ? 'masculine' : 'feminine';
  }

  getNumberForY(y: number): AdjectiveNumber {
    return y === 0 ? 'singular' : 'plural';
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    return new ColoredText(cellValue);
  }

  getExercise(x: number, y: number): Exercise {
    return AdjectiveTranslationExercise.new(this.data, 'toPortuguese', this.getGenderForX(x), this.getNumberForY(y));
  }

  getRowTitles(): string[] {
    return ['Masculine', 'Feminine'];
  }

  getTableSize(): { x: number; y: number } {
    return {
      x: 2,
      y: 2
    };
  }

  getRowTitle(x: number): ColoredText {
    return new ColoredText(`${this.getRowTitles()[x]} `);
  }
}
