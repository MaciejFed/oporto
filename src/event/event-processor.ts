import EventEmitter from 'events';
import { terminal } from 'terminal-kit';
import { displayStatistics } from '../commands/stat';
import { logger } from '../common/logger';
import { APP_EVENT } from './events';
import Output from '../io/output';

type EmittedEvent = {
  event: APP_EVENT;
  args: any[];
};

export class EventProcessor {
  eventEmitter: EventEmitter;
  eventHistory: EmittedEvent[];

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.eventHistory = [];
  }

  public on(eventName: APP_EVENT, callback: (...args: any[]) => void) {
    this.eventEmitter.on(eventName, callback);
  }

  public emit(event: APP_EVENT, args?: any) {
    this.eventHistory.push({
      event: event,
      args: args
    });
    this.logEvent(event, args);
    this.doEmitEvent(event, args);
  }

  private logEvent(event: APP_EVENT, args?: any) {
    if (args && typeof args === 'object') {
      logger.debug(`${event}: [${JSON.stringify(args)}]`);
    } else {
      logger.debug(`${event}: [${args}]`);
    }
  }

  private doEmitEvent(event: APP_EVENT, args?: any) {
    switch (event) {
      case 'APP_FINISHED':
        this.eventEmitter.removeAllListeners();
        terminal.hideCursor(false);
        displayStatistics(false);
        process.exit(0);
        break;
      default:
        this.eventEmitter.emit(event, args);
    }
  }
}

export default new EventProcessor();
