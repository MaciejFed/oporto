import { eventEmitter } from '../event/eventProcessor';
import { APP_STARTED } from '../event/events';
import { Input } from '../input/input';
import { SessionManager } from '../session/sessionManager';
import { Terminakl } from '../terminal/terminal';

const terminal = new Terminakl(eventEmitter);
const input = new Input(eventEmitter);
const sessionManager = new SessionManager(eventEmitter, 3);

eventEmitter.emit(APP_STARTED);

// exercise manager get
