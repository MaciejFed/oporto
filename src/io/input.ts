import { EventProcessor } from '../event/event-processor';
import { ANSWER_SUBMITTED, APP_FINISHED, HEARING_EXERCISE_REPEAT, KEY_PRESSED } from '../event/events';
import readline from 'readline';
import { logger } from '../common/logger';

type Key = {
  sequence: string;
  name: string;
};

export class Input {
  eventProcessor: EventProcessor;
  inputTimes: Date[];

  constructor(eventProcessor: EventProcessor) {
    this.eventProcessor = eventProcessor;
    this.configureStdin();
    this.registerListeners();
    this.inputTimes = [];
  }

  private configureStdin() {
    if (process.stdin.setRawMode) {
      process.stdin.setRawMode(true);
    }
    readline.emitKeypressEvents(process.stdin);
  }

  private registerListeners() {
    process.stdin.on('keypress', (str, key) => this.handleKeypress(key));
  }

  handleKeypress(key: Key) {
    if (key.sequence === '.') {
      this.eventProcessor.emit(HEARING_EXERCISE_REPEAT);
      return;
    }

    switch (key.name) {
      case 'escape':
        this.handleEscape();
        break;
      case 'return':
        this.handleReturn();
        break;
      case 'backspace':
        this.handleBackspace();
        break;
      default:
        this.handleDefault(key);
    }
  }

  private handleEscape() {
    this.eventProcessor.emit(APP_FINISHED);
  }

  private handleReturn() {
    if (this.inputTimes.length === 0) return;

    const answerTime = this.getAnswerTime();
    const answerType = answerTime < 10 ? 'voice' : 'keyboard';
    this.eventProcessor.emit(ANSWER_SUBMITTED, answerType);
    this.inputTimes.length = 0;
  }

  private handleBackspace() {
    this.eventProcessor.emit(KEY_PRESSED, 'backspace');
  }

  private handleDefault(key: Key) {
    if (this.inputTimes.length === 0 && key.sequence === ' ') {
      logger.debug('Empty space as a first input.');
      this.eventProcessor.emit(KEY_PRESSED, '');
      return;
    }

    this.inputTimes.push(new Date());
    this.eventProcessor.emit(KEY_PRESSED, key.sequence);
  }

  private getAnswerTime(): number {
    const startIndex = this.inputTimes.length > 1 ? this.inputTimes.length - 2 : 0;
    const answerTime = this.inputTimes[this.inputTimes.length - 1].getTime() - this.inputTimes[startIndex].getTime();
    logger.debug(`answer time: ${answerTime}`);
    return answerTime;
  }
}

export default Input;
