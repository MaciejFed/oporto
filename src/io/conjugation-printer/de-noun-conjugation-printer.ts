import { Result } from '../../service/result';
import { ColoredText } from '../output';
import { Exercise } from '../../exercise/exercise';
import { VerbConjugation } from './conjugation-printer';
import { GermanNoun } from '../../repository/german-exercises-repository';
import { GermanNounTranslationExercise } from '../../exercise/translation/de/german-noun-translation-exercise';

export class DENounConjugation extends VerbConjugation<GermanNoun> {
  public constructor(data: GermanNoun, result: Result[]) {
    super(data, result);
  }

  getCell(x: number, _y: number): string | undefined {
    if (x > 1) throw Error('');
    if (x === 0) {
      switch (this.data.german.gender) {
        case 'masculine':
          return `Der ${this.data.german.singular}`;
        case 'feminine':
          return `Die ${this.data.german.singular}`;
        case 'none':
          return `Das ${this.data.german.singular}`;
        default:
          throw new Error(`Unknown gender ${this.data.german.gender}`);
      }
    }
    if (!this.data.german.plural) return undefined;
    return `Die ${this.data.german.plural}`;
  }

  getNumberForX(x: number): 'singular' | 'plural' {
    if (x === 0) return 'singular';
    return 'plural';
  }

  checkStandardConjugation(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y)!;
    return new ColoredText(cellValue);
  }

  getExercise(x: number, y: number): Exercise {
    return GermanNounTranslationExercise.new(this.data, 'toPortuguese', this.getNumberForX(x));
  }

  getRowTitles(): string[] {
    return ['Singular: ', 'Plural: '];
  }

  getTableSize(): { x: number; y: number } {
    if (this.data.german.plural) return { x: 2, y: 1 };
    return { x: 1, y: 1 };
  }

  getRowTitle(x: number): ColoredText {
    return new ColoredText(this.getRowTitles()[x]);
  }
}
