import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { ExerciseResultContext, noPriority } from '../../priority';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { exerciseNeverDoneByVoice, VALUE_EXERCISE_NEVER_DONE_BY_VOICE } from './exercise-never-done-by-voice';

describe('Priority - EXERCISE_NEVER_DONE_BY_VOICE', () => {
  it.skip('Generating EXERCISE_NEVER_DONE_BY_VOICE', () => {
    const exerciseDoneByKeyboard = new VerbExercise();
    const exerciseDoneByVoice = new NounTranslationExercise();
    const exerciseResults = [
      generateResultForExercise(exerciseDoneByKeyboard, true, 'keyboard', 1),
      generateResultForExercise(exerciseDoneByVoice, true, 'voice', 1)
    ].flatMap((result) => result);

    const priorityForDoneByKeyboard = exerciseNeverDoneByVoice(exerciseDoneByKeyboard, {
      exerciseResults
    } as ExerciseResultContext);
    const priorityForDoneByVoice = exerciseNeverDoneByVoice(exerciseDoneByVoice, {
      exerciseResults
    } as ExerciseResultContext);

    expect(priorityForDoneByKeyboard.length).toEqual(1);
    expect(priorityForDoneByKeyboard).toStrictEqual(
      generatePriority(exerciseDoneByKeyboard, 'EXERCISE_NEVER_DONE_BY_VOICE', VALUE_EXERCISE_NEVER_DONE_BY_VOICE)
    );
    expect(priorityForDoneByVoice).toStrictEqual(noPriority(exerciseDoneByVoice));
  });
});
