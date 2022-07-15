import { eventProcessor } from '../event/eventProcessor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/sessionManager';
import { Terminakl } from '../io/terminal';

const EXERCISES_PER_SESSION = 10;

const terminal = new Terminakl(eventProcessor);
const input = new Input(eventProcessor);
const sessionManager = new SessionManager(eventProcessor, EXERCISES_PER_SESSION);

eventProcessor.emit(APP_STARTED);

// exercise manager get
