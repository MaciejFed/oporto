import { EventProcessor } from '../event/event-processor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { Terminal } from '../io/terminal';
import { preFetchAllResults } from '../client/client';
import { Language } from '../common/language';
import { sleep } from '../common/common';

export function startTestSession(language: Language) {
  preFetchAllResults(language);
  const EXERCISES_PER_SESSION = 10;
  const eventProcessor = new EventProcessor(language);
  const terminal = new Terminal(eventProcessor, language);
  const input = new Input(eventProcessor);

  sleep(2000).then(() => {
    eventProcessor.emit(APP_STARTED);
  });
}
