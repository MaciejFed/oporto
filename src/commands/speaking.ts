import { eventProcessor } from '../event/eventProcessor';
import { APP_STARTED } from '../event/events';
import { Input } from '../io/input';
import { SessionManager } from '../session/sessionManager';
import { Terminal } from '../io/terminal';
import { getAllResults, getAllResultsForExercise } from '../repository/resultRepository';
import { Exercise, translationTypes } from '../exercise/exercise';
import { exerciseTranslationNeverDoneByVoice } from '../service/priority';
import { TranslationExercise } from '../exercise/translationExercise';

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

  const terminal = new Terminal(eventProcessor);
  const input = new Input(eventProcessor);
  const sessionManager = new SessionManager(eventProcessor, EXERCISES_PER_SESSION, false, hearingFilter());

  eventProcessor.emit(APP_STARTED);
}
