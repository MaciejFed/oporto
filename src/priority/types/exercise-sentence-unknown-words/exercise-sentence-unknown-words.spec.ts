import { generatePriority, generateResultForExercise } from '../../priority.util';
import { VerbExercise } from '../../../exercise/verb-exercise';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { Sentence } from '../../../repository/exercises-repository';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { SentenceTranslationExercise } from '../../../exercise/translation/sentence-translation-exercise';
import {
  exerciseSentenceUnknownWords,
  EXERCISE_SENTENCE_UNKNOWN_WORDS_SINGLE
} from './exercise-sentence-unknown-words';
import { noPriority } from '../../priority';

describe('Priority - EXERCISE_SENTENCE_UNKNOWN_WORDS', () => {
  it('Exercise Sentence 3 Uknown Words', () => {
    const sentence: Sentence = {
      portuguese: 'foobara foobarb foobarc'
    } as Sentence;

    const testExercise = SentenceTranslationExercise.new(sentence, 'toPortuguese');
    const expectedPriority = generatePriority(
      testExercise,
      'EXERCISE_SENTENCE_UNKNOWN_WORDS',
      3 * EXERCISE_SENTENCE_UNKNOWN_WORDS_SINGLE
    );
    const actualPriority = exerciseSentenceUnknownWords(testExercise);

    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Sentence 3 Uknown Words And One Known', () => {
    const sentence: Sentence = {
      portuguese: 'foobara almoço foobarb foobarc'
    } as Sentence;

    const testExercise = SentenceTranslationExercise.new(sentence, 'toPortuguese');
    const expectedPriority = generatePriority(
      testExercise,
      'EXERCISE_SENTENCE_UNKNOWN_WORDS',
      3 * EXERCISE_SENTENCE_UNKNOWN_WORDS_SINGLE
    );
    const actualPriority = exerciseSentenceUnknownWords(testExercise);

    expect(actualPriority).toStrictEqual(expectedPriority);
  });

  it('Exercise Sentence Only Known Words', () => {
    const sentence: Sentence = {
      portuguese: 'Almoço com saber'
    } as Sentence;

    const testExercise = SentenceTranslationExercise.new(sentence, 'toPortuguese');
    const expectedPriority = noPriority(testExercise);
    const actualPriority = exerciseSentenceUnknownWords(testExercise);

    expect(actualPriority).toStrictEqual(expectedPriority);
  });
});
