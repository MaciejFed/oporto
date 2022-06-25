import EventEmitter from 'events';
import winston from 'winston';
import { Exercise } from '../exercise/exercise';
import { Input } from '../input/input';
import { Terminakl } from '../terminal/terminal';
import { APP_EVENT, APP_STARTED } from './events';
import { sleep } from '../utils/utils';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'out.log' })]
});

logger.info('NEW START!!!');

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
        process.exit(0);
        break;
      default:
        this.eventEmitter.emit(event, args);
    }
  }
}

export const eventEmitter = new EventProcessor(new EventEmitter());

// const terminal = new Terminakl(eventEmitter);
// const input = new Input(eventEmitter);
// const exercise = new Exercise(eventEmitter);

// eventEmitter.emit(APP_STARTED);
