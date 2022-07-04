import { EventProcessor } from '../event/eventProcessor';
import { ANSWER_SUBMITED, KEY_PRESSED } from './../event/events';
import readline from 'readline';

export class Input {
  eventProcessor: EventProcessor;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListener();
    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true);
    }
    readline.emitKeypressEvents(process.stdin);
  }

  registerListener() {
    process.stdin.on('keypress', (str, key) => {
      switch (key.name) {
        case 'return':
          this.eventProcessor.emit(ANSWER_SUBMITED);
          break;
        case 'backspace':
          this.eventProcessor.emit(KEY_PRESSED, 'backspace');
          break;
        default:
          this.eventProcessor.emit(KEY_PRESSED, key.sequence);
          break;
      }
    });
  }
}
