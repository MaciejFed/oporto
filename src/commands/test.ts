import { eventProcessor } from '../event/event-processor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/session-manager';
import { Terminal } from '../io/terminal';

export function startTestSession(sortExercises: boolean) {
  const EXERCISES_PER_SESSION = 10;

  const terminal = new Terminal(eventProcessor);
  const input = new Input(eventProcessor);
  const sessionManager = new SessionManager(eventProcessor, EXERCISES_PER_SESSION, sortExercises, () => true);

  eventProcessor.emit(APP_STARTED);
}
