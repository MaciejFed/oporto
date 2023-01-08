import { Exercise } from '../../../exercise/exercise';
import { Result } from '../../../service/result';
import { getAllResultsForExercise } from '../../../repository/resultRepository';
import { noPriority, Priority } from '../../priority';

export const VALUE_EXERCISE_NEVER_DONE_BY_VOICE = 25;

export function exerciseNeverDoneByVoice(exercise: Exercise, results: Result[]): Priority[] {
  return getAllResultsForExercise(results, exercise).filter((ex) => ex.wasCorrect && ex.answerInputType === 'voice')
    .length === 0
    ? [{ exercise, priorityName: 'EXERCISE_NEVER_DONE_BY_VOICE', priorityValue: VALUE_EXERCISE_NEVER_DONE_BY_VOICE }]
    : noPriority(exercise);
}
