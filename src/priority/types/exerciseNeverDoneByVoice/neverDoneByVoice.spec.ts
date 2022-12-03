import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verbExercise';
import { noPriority } from '../../priority';
import { NounTranslationExercise } from '../../../exercise/translation/nounTranslationExercise';
import { exerciseNeverDoneByVoice, VALUE_EXERCISE_NEVER_DONE_BY_VOICE } from './exerciseNeverDoneByVoice';

describe('Priority - EXERCISE_NEVER_DONE_BY_VOICE', () => {
  it('Generating EXERCISE_NEVER_DONE_BY_VOICE', () => {
    const exerciseDoneByKeyboard = new VerbExercise();
    const exerciseDoneByVoice = new NounTranslationExercise();
    const results = [
      generateResultForExercise(exerciseDoneByKeyboard, true, 'keyboard', 1),
      generateResultForExercise(exerciseDoneByVoice, true, 'voice', 1)
    ].flatMap((result) => result);

    const priorityForDoneByKeyboard = exerciseNeverDoneByVoice(exerciseDoneByKeyboard, results);
    const priorityForDoneByVoice = exerciseNeverDoneByVoice(exerciseDoneByVoice, results);

    expect(priorityForDoneByKeyboard.length).toEqual(1);
    expect(priorityForDoneByKeyboard).toStrictEqual(
      generatePriority(exerciseDoneByKeyboard, 'EXERCISE_NEVER_DONE_BY_VOICE', VALUE_EXERCISE_NEVER_DONE_BY_VOICE)
    );
    expect(priorityForDoneByVoice).toStrictEqual(noPriority(exerciseDoneByVoice));
  });
});
