import { EventProcessor } from '../event/event-processor';
import { ANSWER_SUBMITTED, APP_FINISHED, KEY_PRESSED } from '../event/events';
import readline from 'readline';
import { logger } from '../common/logger';

export type AnswerInputType = 'keyboard' | 'voice';

export class Input {
  eventProcessor: EventProcessor;
  inputTimes: Date[];

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.registerListener();
    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true);
    }
    readline.emitKeypressEvents(process.stdin);
    this.inputTimes = [];
  }

  registerListener() {
    process.stdin.on('keypress', (str, key) => {
      switch (key.name) {
        case 'escape':
          this.eventProcessor.emit(APP_FINISHED);
          break;
        case 'return':
          if (this.inputTimes.length === 0) {
            break;
          }
          this.eventProcessor.emit(ANSWER_SUBMITTED, this.getAnswerTime() < 10 ? 'voice' : 'keyboard');
          this.inputTimes.length = 0;
          break;
        case 'backspace':
          this.eventProcessor.emit(KEY_PRESSED, 'backspace');
          break;
        default:
          if (this.inputTimes.length === 0 && key.sequence === ' ') {
            logger.info('Empty space as a first input.');
            this.eventProcessor.emit(KEY_PRESSED, '');
            break;
          }
          this.inputTimes.push(new Date());
          this.eventProcessor.emit(KEY_PRESSED, key.sequence);
          break;
      }
    });
  }

  getAnswerTime(): number {
    const startIndex = this.inputTimes.length > 1 ? this.inputTimes.length - 2 : 0;
    const answerTime = this.inputTimes[this.inputTimes.length - 1].getTime() - this.inputTimes[startIndex].getTime();
    logger.info(`answer time: ${answerTime}`);
    return answerTime;
  }
}
