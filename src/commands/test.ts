import { EventProcessor } from '../event/event-processor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/session-manager';
import { Terminal } from '../io/terminal';
import { Language, setLanguage } from '../common/language';

export function startTestSession(sortExercises: boolean, language: Language) {
  const EXERCISES_PER_SESSION = 10;

  const eventProcessor = new EventProcessor();
  const terminal = new Terminal(eventProcessor);
  const input = new Input(eventProcessor);
  setLanguage(language);
  const sessionManager = new SessionManager(eventProcessor, EXERCISES_PER_SESSION, sortExercises, language);

  eventProcessor.emit(APP_STARTED);
}
