import { terminal } from 'terminal-kit';
import clear from 'clear';
import { AppEventListener } from '../event/event-listener';
import eventProcessor, { EventProcessor } from '../event/event-processor';
import { GermanPerson } from '../repository/german-exercises-repository';

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

  public constructor(text: string, colors: Color[]) {
    if (text.length !== colors.length) throw new Error('colors array lenght not equal to text lenght');
    this.text = text;
    this.colors = colors;
  }
}

class Output implements AppEventListener {
  private outputTable: string[][] = [];
  private colorTable: string[][] = [];
  private textColor: Color;
  private eventProcessor: EventProcessor;
  private colorMap: Record<Color, Function> = {
    B: this.blue,
    R: this.red,
    G: this.green,
    W: this.white,
    Y: this.yellow
  };

  public constructor() {
    this.resetTable();
    this.eventProcessor = eventProcessor;
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

  public registerListeners(): void {
    this.eventProcessor.on('TERMINAL_CLEARED', () => {
      this.clearTerminal();
    });
  }
}

export default new Output();
