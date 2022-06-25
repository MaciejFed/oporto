import { eventEmitter, EventProcessor } from '../event/eventProcessor';
import { ANSWER_SUBMITED, KEY_PRESSED } from './../event/events';
import readline from 'readline';

export class Input {
  eventProcessor: EventProcessor;

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    process.stdin.setRawMode(true);
    this.registerListener();
    readline.emitKeypressEvents(process.stdin);
  }

  registerListener() {
    process.stdin.on('keypress', (str, key) => {
      switch (key.name) {
        case 'q':
          process.stdin.removeAllListeners();
          this.eventProcessor.emit('APP_FINISHED');
          break;
        case 'return':
          this.eventProcessor.emit(ANSWER_SUBMITED);
          break;
        default:
          eventEmitter.emit(KEY_PRESSED, key.name);
          break;
      }
    });
  }
}
