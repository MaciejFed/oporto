import { EventProcessor } from '../event/eventProcessor';
import { ANSWER_SUBMITED, KEY_PRESSED } from './../event/events';
import readline from 'readline';

export class Input {
  eventProcessor: EventProcessor;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListener();
    process.stdin.setRawMode(true);
    readline.emitKeypressEvents(process.stdin);
  }

  registerListener() {
    process.stdin.on('keypress', (str, key) => {
      switch (key.name) {
        case 'return':
          this.eventProcessor.emit(ANSWER_SUBMITED);
          break;
        default:
          this.eventProcessor.emit(KEY_PRESSED, key.name);
          break;
      }
    });
  }
}
