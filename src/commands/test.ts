import { eventProcessor } from '../event/eventProcessor';
import { APP_STARTED } from '../event/events';
import { Input } from '../input/input';
import { SessionManager } from '../session/sessionManager';
import { Terminakl } from '../terminal/terminal';

const terminal = new Terminakl(eventProcessor);
const input = new Input(eventProcessor);
const sessionManager = new SessionManager(eventProcessor, 3);

eventProcessor.emit(APP_STARTED);

// exercise manager get
