import { terminal } from 'terminal-kit';
import clear from 'clear';
import { AppEventListener } from '../event/event-listener';
import eventProcessor, { EventProcessor } from '../event/event-processor';

enum Color {
  R = 'R',
  G = 'G',
  W = 'W',
  Y = 'Y'
}

class Output implements AppEventListener {
  private outputTable: string[][] = [];
  private colorTable: string[][] = [];
  private textColor: Color;
  private eventProcessor: EventProcessor;

  public constructor() {
    this.resetTable();
    this.eventProcessor = eventProcessor;
    this.textColor = Color.W;
  }

  public moveCursor(x: number, y: number) {
    terminal.moveTo(x, y);
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
