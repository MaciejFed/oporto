import { Result } from '../../service/result';
import { ColoredText } from '../output';
import { Exercise } from '../../exercise/exercise';
import { VerbConjugation } from './conjugation-printer';
import { createColorArray } from '../terminal/terminal-utils';
import { PolishPerson, PolishVerb } from '../../repository/polish-exercises-repository';
import { PolishVerbExercise } from '../../exercise/polish-verb-exercise';

type VerbEnding = 'ować' | 'ić';
const standardVerbEndings: VerbEnding[] = ['ować', 'ić'];

export const standardConjugations: Record<VerbEnding, Record<PolishPerson, string>> = {
  ować: {
    [PolishPerson.Ja]: 'uję',
    [PolishPerson.Ty]: 'ujesz',
    [PolishPerson['On/Ona/Ono']]: 'ujesz',
    [PolishPerson.My]: 'ujemy',
    [PolishPerson.Wy]: 'ujecie',
    [PolishPerson['Oni/One']]: 'ują'
  },
  ić: {
    [PolishPerson.Ja]: 'ię',
    [PolishPerson.Ty]: 'isz',
    [PolishPerson['On/Ona/Ono']]: 'i',
    [PolishPerson.My]: 'imy',
    [PolishPerson.Wy]: 'icie',
    [PolishPerson['Oni/One']]: 'ią'
  }
};

export class PLVerbConjugation extends VerbConjugation<PolishVerb> {
  public constructor(data: PolishVerb, result: Result[]) {
    super(data, result);
  }

  getPersonForX(x: number): PolishPerson {
    return Object.values(PolishPerson)[x] as PolishPerson;
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    const endingLength = this.data.infinitive.endsWith('ować') ? 4 : 2;
    const wordBase = this.data.infinitive.slice(0, endingLength * -1);

    const person = this.getPersonForX(x);

    const verbEnding = this.data.infinitive.slice(-endingLength) as VerbEnding;
    if (!standardVerbEndings.includes(verbEnding)) {
      return new ColoredText(cellValue, createColorArray({ yellow: cellValue.length }));
    }
    const expectedVerbEnding = standardConjugations[verbEnding][person];
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

  getExercise(x: number, _y: number): Exercise {
    return PolishVerbExercise.new(this.data, this.getPersonForX(x));
  }

  getRowTitles(): string[] {
    return Object.keys(PolishPerson).map((person) => `${person}: `);
  }

  getTableSize(): { x: number; y: number } {
    return {
      y: 1,
      x: Object.values(this.data.presentSimple).length
    };
  }

  getRowTitle(x: number): ColoredText {
    return new ColoredText(`${Object.keys(PolishPerson)[x]}: `);
  }
}
