import { terminal } from 'terminal-kit';
import clear from 'clear';
import { AppEventListener } from '../event/event-listener';
import eventProcessor, { EventProcessor } from '../event/event-processor';

class Output implements AppEventListener {
  private outputTable: string[][] = [];
  private eventProcessor: EventProcessor;

  public constructor() {
    this.resetTable();
    this.eventProcessor = eventProcessor;
  }

  public moveTo(x: number, y: number, text: string | undefined) {
    if (text) {
      if (text.includes('\n')) {
        terminal.moveTo(x, y, text);
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
        }
      }
    }
  }

  public getOutput(): string {
    return this.outputTable.map((row) => row.join('')).join('\n');
  }

  private clearTerminal(): void {
    clear();
    this.resetTable();
  }

  private resetTable(): void {
    this.outputTable = new Array(60).fill(' ').map(() => new Array(70).fill(' '));
  }

  public registerListeners(): void {
    this.eventProcessor.on('TERMINAL_CLEARED', () => {
      this.clearTerminal();
    });
  }
}

export default new Output();
