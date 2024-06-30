import { EventProcessor } from '../event/event-processor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/session-manager';
import { Terminal } from '../io/terminal';
import { preFetchAllResults } from '../client/client';
import { Language } from '../common/language';

export function startTestSession(language: Language) {
  preFetchAllResults(language);
  const EXERCISES_PER_SESSION = 10;
  const eventProcessor = new EventProcessor(language);
  const terminal = new Terminal(eventProcessor, language);
  const input = new Input(eventProcessor);
  const sessionManager = new SessionManager(eventProcessor, language);

  eventProcessor.emit(APP_STARTED);
}
