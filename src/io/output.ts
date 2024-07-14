import { terminal } from 'terminal-kit';
import clear from 'clear';
import { AppEventListener } from '../event/event-listener';
import { createColorArray } from './terminal/terminal-utils';

export enum Color {
  B = 'B',
  R = 'R',
  G = 'G',
  W = 'W',
  Y = 'Y'
}

export class ColoredText {
  public text: string;
  public colors: Color[];

  public constructor(text = '', colors: Color[] = []) {
    // eslint-disable-next-line no-param-reassign,no-unused-expressions
    colors.length === 0 ? (colors = createColorArray({ white: text.length })) : colors;
    if (text.length > colors.length) throw new Error('colors array lenght not equal to text lenght');
    this.text = text;
    this.colors = colors;
  }

  concat(coloredText: ColoredText): ColoredText {
    this.text = this.text.concat(coloredText.text);
    this.colors = this.colors.concat(coloredText.colors);
    return this;
  }

  padEnd(pad: number): ColoredText {
    if (pad < this.text.length) return this;
    const diff = pad - this.text.length;
    this.text = this.text.padEnd(pad);
    this.colors = this.colors.concat(Array(diff).fill(Color.W));

    return this;
  }
}

export class Output implements AppEventListener {
  private outputTable: string[][] = [];
  private colorTable: string[][] = [];
  private textColor: Color;
  private colorMap: Record<Color, () => Output> = {
    B: this.blue,
    R: this.red,
    G: this.green,
    W: this.white,
    Y: this.yellow
  };

  public constructor() {
    this.resetTable();
    this.textColor = Color.W;
  }

  public moveCursor(x: number, y: number) {
    terminal.moveTo(x, y);
  }

  public moveToColored(x: number, y: number, coloredText: ColoredText) {
    coloredText.text.split('').forEach((char, index) => {
      this.colorMap[coloredText.colors[index]]();
      this.moveTo(x + index, y, char);
    });
    this.white();
  }

  public moveToColoredRows(x: number, y: number, coloredText: ColoredText[]) {
    coloredText.forEach((line, index) => {
      this.moveToColored(x, y + index, line);
    });
  }

  public moveTo(x: number, y: number, text: string | undefined) {
    if (text) {
      if (text.includes('\n')) {
        text.split('\n').forEach((_v, index) => {
          this.outputTable[y + index][x] = 'IMAGE';
        });
      } else {
        for (let i = 0; i < text.length; i++) {
          if (text[i] === '\n') {
            // eslint-disable-next-line no-param-reassign
            y++;
            // eslint-disable-next-line no-param-reassign
            text = text?.slice(i + 1);
            // eslint-disable-next-line no-param-reassign
            i = 0;
          }
          this.outputTable[y][x + i] = text[i];
          this.colorTable[y][x + i] = this.textColor;
        }
      }
      terminal.moveTo(x, y, text);
    }
  }

  public yellow(): Output {
    this.textColor = Color.Y;
    terminal.yellow();
    return this;
  }

  public blue(): Output {
    this.textColor = Color.B;
    terminal.blue();
    return this;
  }

  public red(): Output {
    this.textColor = Color.R;
    terminal.red();
    return this;
  }

  public green(): Output {
    this.textColor = Color.G;
    terminal.green();
    return this;
  }

  public white(): Output {
    this.textColor = Color.W;
    terminal.white();
    return this;
  }

  public bold(isBold = true): Output {
    terminal.bold(isBold);
    return this;
  }

  public hideCursor(hideCursor = true): Output {
    terminal.hideCursor(hideCursor);
    return this;
  }

  public getOutput(): string {
    return this.outputTable.map((row) => row.join('')).join('\n');
  }

  public getColorOutput(): string {
    return this.colorTable.map((row) => row.join('')).join('\n');
  }

  public clearTerminal(): void {
    clear();
    this.resetTable();
  }

  private resetTable(): void {
    this.outputTable = new Array(60).fill(' ').map(() => new Array(70).fill(' '));
    this.colorTable = new Array(60).fill(' ').map(() => new Array(70).fill(' '));
  }

  public registerListeners(): void {}
}
