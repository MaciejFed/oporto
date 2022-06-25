import { eventEmitter } from '../event/eventProcessor';
import { APP_STARTED } from '../event/events';
import { Exercise } from '../exercise/exercise';
import { Input } from '../input/input';
import { Terminakl } from '../terminal/terminal';

import wtf from 'wtfnode';
wtf.dump();

const terminal = new Terminakl(eventEmitter);
const input = new Input(eventEmitter);
const exercise = new Exercise(eventEmitter);

eventEmitter.emit(APP_STARTED);

// exercise manager get 