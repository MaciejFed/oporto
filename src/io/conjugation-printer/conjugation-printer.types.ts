import { ColoredText } from '../output';

export interface ConjugationTable {
  getTable(): ColoredText[];
  getCell(x: number, y: number): string | undefined;
  renderCell(x: number, y: number): ColoredText;
  getRowTitles(): string[];
  getColumnSize(y: number): number;
  getRowTitle(x: number): ColoredText;
}
