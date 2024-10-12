import { Result } from '../../service/result';
import { Color, ColoredText } from '../output';
import { getSingleExerciseProgress, ProgressType } from '../../service/progress/progress';
import { ConjugationTable } from './conjugation-printer.types';
import { BaseWord, Exercise } from '../../exercise/exercise';

export abstract class VerbConjugation<W extends BaseWord> implements ConjugationTable {
  protected constructor(protected readonly data: W, protected readonly result: Result[]) {}

  public getTable(): ColoredText[] {
    const maxRowTitleSize = Math.max(
      ...Array(this.getTableSize().x)
        .fill('')
        .map((_v, i) => this.getRowTitle(i).text.length)
    );
    let table: ColoredText[] = [];
    for (let x = 0; x < this.getTableSize().x; x++) {
      let line = this.getRowTitle(x).padEnd(maxRowTitleSize);
      for (let y = 0; y < this.getTableSize().y; y++) {
        line = line.concat(this.renderCell(x, y)).concat(new ColoredText('|'));
      }
      table = table.concat(line);
    }
    return table;
  }

  getProgressMark(exercise: Exercise) {
    const progress = getSingleExerciseProgress(this.result, exercise);

    switch (progress.progressType) {
      case ProgressType.DONE:
        return new ColoredText('+', [Color.G]);
      case ProgressType.IN_PROGRESS:
        return new ColoredText('-', [Color.R]);
      default:
        return new ColoredText('~', [Color.B]);
    }
  }

  getTenseForY(y: number): Tense {
    switch (y) {
      case 0:
        return 'presentSimple';
      case 1:
        return 'pastPerfect';
      case 2:
        return 'imperfect';
      default:
        throw new Error(`Unexpected column [${y}]`);
    }
  }

  getCell(x: number, y: number): string | undefined {
    if (x > this.getTableSize().x || y > this.getTableSize().y) throw Error('');

    const valueTime = Object.values(this.data)[y + 2];
    if (!valueTime) return undefined;
    // @ts-ignore
    return Object.values(valueTime)[x];
  }
  renderCell(x: number, y: number): ColoredText {
    const cellValue = this.getCell(x, y);
    if (!cellValue) return new ColoredText().padEnd(this.getColumnSize(y) + 1);
    const base = this.checkStandardConjugation(x, y).padEnd(this.getColumnSize(y));
    return base.concat(this.getProgressMark(this.getExercise(x, y)));
  }

  getColumnSize(y: number): number {
    let maxSize = 0;
    for (let i = 0; i < this.getTableSize().x; i++) {
      const cellSize = this.getCell(i, y)?.length || 0;
      if (cellSize > maxSize) {
        maxSize = cellSize;
      }
    }
    return maxSize + 1;
  }

  abstract getRowTitle(x: number): ColoredText;

  abstract getTableSize(): { x: number; y: number };

  abstract checkStandardConjugation(x: number, y: number): ColoredText;

  abstract getExercise(x: number, y: number): Exercise;

  abstract getRowTitles(): string[];
}
type Tense = 'presentSimple' | 'pastPerfect' | 'imperfect';
