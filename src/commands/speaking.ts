import { EventProcessor } from '../event/event-processor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/session-manager';
import { Terminal } from '../io/terminal';
import { getAllResults } from '../repository/result-repository';
import { Exercise, translationTypes } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { exerciseTranslationNeverDoneByVoice } from '../priority/types/exercise-translation-never-done-by-voice/exercise-translation-never-done-by-voice';
import { Language } from '../common/language';

function hearingFilter() {
  const allResults = getAllResults();
  const filter: (ex: Exercise) => boolean = (ex) => {
    return (
      translationTypes.includes(ex.exerciseType) &&
      (ex as unknown as TranslationExercise).isTranslationToPortugueseFromHearing() &&
      exerciseTranslationNeverDoneByVoice(ex, allResults)[0].priorityName === 'EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE'
    );
  };

  return filter;
}

export function startSpeakSession() {
  const EXERCISES_PER_SESSION = 5;

  const eventProcessor = new EventProcessor();
  const terminal = new Terminal(eventProcessor);
  const input = new Input(eventProcessor);
  const sessionManager = new SessionManager(eventProcessor, EXERCISES_PER_SESSION, false, Language.Portuguese);

  eventProcessor.emit(APP_STARTED);
}
