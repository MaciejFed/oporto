import clear from 'clear';
import EventEmitter from 'events';
import { terminal } from 'terminal-kit';
import winston from 'winston';
import { displayStatistics } from '../commands/stat';
import { logger } from '../common/logger';
import { APP_EVENT, APP_STARTED } from './events';

type EmittedEvent = {
  event: APP_EVENT;
  args: any[];
};

export class EventProcessor {
  eventEmitter: EventEmitter;
  eventHistory: EmittedEvent[];

  constructor(eventEmitter: EventEmitter) {
    this.eventEmitter = eventEmitter;
    this.eventHistory = [];
  }

  on(eventName: string, callback: (...args: any[]) => void) {
    this.eventEmitter.on(eventName, callback);
  }

  emit(event: APP_EVENT, args?: any) {
    this.eventHistory.push({
      event: event,
      args: args
    });
    this.logEvent(event, args);
    this.doEmitEvent(event, args);
  }

  private logEvent(event: APP_EVENT, args?: any) {
    if (args && typeof args === 'object') {
      logger.info(`${event}: [${JSON.stringify(args)}]`);
    } else {
      logger.info(`${event}: [${args}]`);
    }
  }

  private doEmitEvent(event: APP_EVENT, args?: any) {
    switch (event) {
      case 'APP_FINISHED':
        this.eventEmitter.removeAllListeners();
        terminal.hideCursor(false);
        clear();
        displayStatistics(false);
        process.exit(0);
        break;
      default:
        this.eventEmitter.emit(event, args);
    }
  }
}

export const eventProcessor = new EventProcessor(new EventEmitter());
