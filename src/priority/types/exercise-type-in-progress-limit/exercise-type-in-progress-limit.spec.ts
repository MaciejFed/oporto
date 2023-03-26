import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../../../exercise/translation/sentence-translation-exercise';
import {
  exerciseTypeInProgressLimit,
  exerciseTypeToLimit,
  VALUE_EXERCISE_LIMIT
} from './exercise-type-in-progress-limit';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { readAll } from '../../../repository/exercises-repository';
import { ExerciseResultContext, noPriority } from '../../priority';
import { getGroupExerciseProgress, getSingleExerciseProgress } from '../../../service/progress';
import { generateAllPossibleExercises } from '../../../exercise/generator';

describe('Priority - EXERCISE_TYPE_IN_PROGRESS_LIMIT', () => {
  it('Sentence Exercise In Progress Reaching Limit', () => {
    const allSentences = readAll().sentences;
    const limit = exerciseTypeToLimit.SentenceTranslation;
    const results = Array(limit)
      .fill(0)
      .flatMap((_value, index) => {
        return generateResultForExercise(
          SentenceTranslationExercise.new(allSentences[index], 'toPortuguese'),
          false,
          'keyboard',
          1
        );
      });
    const exerciseInLimit = SentenceTranslationExercise.new(allSentences[0], 'toPortuguese');
    const exerciseOutOfLimit = SentenceTranslationExercise.new(allSentences[limit], 'toPortuguese');
    const exerciseInLimitExpectedPriority = noPriority(exerciseInLimit);
    const exerciseOutOfLimitExpectedPriority = generatePriority(
      exerciseOutOfLimit,
      'EXERCISE_TYPE_ABOVE_PROGRESS_LIMIT',
      VALUE_EXERCISE_LIMIT
    );
    const allExercises = generateAllPossibleExercises();
    const actualPriorityInLimit = exerciseTypeInProgressLimit(exerciseInLimit, {
      exerciseTypeProgress: getGroupExerciseProgress(allExercises, results, 'SentenceTranslation')
    } as ExerciseResultContext);
    const actualPriorityOutOfLimit = exerciseTypeInProgressLimit(exerciseOutOfLimit, {
      exerciseTypeProgress: getGroupExerciseProgress(allExercises, results, 'SentenceTranslation')
    } as ExerciseResultContext);

    expect(exerciseInLimitExpectedPriority).toStrictEqual(actualPriorityInLimit);
    expect(exerciseOutOfLimitExpectedPriority).toStrictEqual(actualPriorityOutOfLimit);
  });
});
