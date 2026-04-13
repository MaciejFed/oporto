import { NounTranslationExercise } from '../../exercise/translation/noun-translation-exercise';
import { generateResultsForExerciseDaysAgo } from '../../priority/priority.util';
import { Person, readAll } from '../../repository/exercises-repository';
import { getAnswersMissingForBaseWord, getSingleExerciseProgress, progressByDate, ProgressType } from './progress';
import { getAllResultsByDate } from '../../repository/result-repository';
import { VerbExercise } from '../../exercise/verb-exercise';
import { Language } from '../../common/language';
import { generateAllPossibleExercises } from '../../exercise/generator';

const nounExercise0 = NounTranslationExercise.new(readAll().nouns[0], 'toPortuguese', 'singular');
const nounExercise1 = NounTranslationExercise.new(readAll().nouns[1], 'toPortuguese', 'singular');
const nounExercise2 = NounTranslationExercise.new(readAll().nouns[2], 'toPortuguese', 'singular');
const nounExercise3 = NounTranslationExercise.new(readAll().nouns[3], 'toPortuguese', 'singular');
const nounExercise4 = NounTranslationExercise.new(readAll().nouns[4], 'toPortuguese', 'singular');

const results = [
  ...generateResultsForExerciseDaysAgo(nounExercise0, true, 23, 1),
  ...generateResultsForExerciseDaysAgo(nounExercise1, true, 23, 1),

  ...generateResultsForExerciseDaysAgo(nounExercise2, false, 22, 1),
  ...generateResultsForExerciseDaysAgo(nounExercise2, false, 15, 4),

  ...generateResultsForExerciseDaysAgo(nounExercise3, true, 15, 1),
  ...generateResultsForExerciseDaysAgo(nounExercise3, false, 8, 1),

  ...generateResultsForExerciseDaysAgo(nounExercise4, false, 22, 3),
  ...generateResultsForExerciseDaysAgo(nounExercise4, true, 15, 3),
  ...generateResultsForExerciseDaysAgo(nounExercise4, true, 8, 3),
  ...generateResultsForExerciseDaysAgo(nounExercise4, true, 1, 3)
].sort((a, b) => (a.date.getTime() > b.date.getTime() ? 1 : -1));

describe('Progress', () => {
  it.skip('Should get results by date', () => {
    const resultsByDate = getAllResultsByDate(results);

    expect(resultsByDate.length).toEqual(5);
    expect(resultsByDate[0].date.toJSDate()).not.toEqual(resultsByDate[1].date.toJSDate());
    expect(resultsByDate[4].results.length).toEqual(results.length);
  });

  it.skip('Should calculate progress', () => {
    const progress = progressByDate(results, Language.Portuguese);

    expect(progress.length).toEqual(5);
    expect(progress[0].lostWords.length).toEqual(0);
    expect(progress[0].newWords.length).toEqual(2);
    expect(progress[0].wordCount).toEqual(2);
    expect(progress[0].newWords.includes(nounExercise0.getCorrectAnswer())).toBeTruthy();
    expect(progress[0].newWords.includes(nounExercise1.getCorrectAnswer())).toBeTruthy();

    expect(progress[2].newWords.length).toEqual(1);
    expect(progress[2].newWords.includes(nounExercise3.getCorrectAnswer())).toBeTruthy();
    expect(progress[3].lostWords.length).toEqual(1);
    expect(progress[3].lostWords.includes(nounExercise3.getCorrectAnswer())).toBeTruthy();

    expect(progress[4].newWords.includes(nounExercise4.getCorrectAnswer())).toBeTruthy();
    expect(progress[4].wordCount).toEqual(3);
  });

  describe('getSingleExerciseProgress', () => {
    it('should have 2 answers missing', () => {
      const nounExercise0Plural = [
        NounTranslationExercise.new(readAll().nouns[0], 'toPortugueseFromHearing', 'plural'),
        NounTranslationExercise.new(readAll().nouns[0], 'toEnglish', 'plural'),
        NounTranslationExercise.new(readAll().nouns[0], 'toPortuguese', 'plural')
      ];
      const plurarlCorrectResult = [
        ...generateResultsForExerciseDaysAgo(nounExercise0Plural[0], true, 1, 2),
        ...generateResultsForExerciseDaysAgo(nounExercise0Plural[1], true, 1, 2),
        ...generateResultsForExerciseDaysAgo(nounExercise0Plural[2], true, 1, 2)
      ];

      const singleResult = generateResultsForExerciseDaysAgo(nounExercise0, true, 1, 2);
      const answersMissing = getAnswersMissingForBaseWord(
        nounExercise0.getBaseWordAsString()!,
        [...singleResult, ...plurarlCorrectResult],
        generateAllPossibleExercises(Language.Portuguese)
      );

      expect(answersMissing).toEqual(2);
    });

    it('should calculate 80 - 100 progress for single exercise', () => {
      const verbExercises = VerbExercise.new(readAll().verbs[0], Person.Eu, 'presentSimple');
      const singleCorrectResult = generateResultsForExerciseDaysAgo(verbExercises, true, 1, 1);
      const progress = getSingleExerciseProgress(singleCorrectResult, verbExercises);

      expect(progress.correctAnswers).toEqual(1);
      expect(progress.incorrectAnswers).toEqual(0);
      expect(progress.progressType).toEqual(ProgressType.DONE);
      expect(progress.ratio).toEqual(100);
    });

    it('should calculate 80 - 100 progress for multiple results', () => {
      const verbExercises = VerbExercise.new(readAll().verbs[0], Person.Eu, 'presentSimple');
      const correctResults = generateResultsForExerciseDaysAgo(verbExercises, true, 1, 7);
      const wrongResult = generateResultsForExerciseDaysAgo(verbExercises, false, 1, 2);
      const progress = getSingleExerciseProgress(correctResults.concat(wrongResult), verbExercises);

      expect(progress.correctAnswers).toEqual(7);
      expect(progress.incorrectAnswers).toEqual(2);
      expect(progress.progressType).toEqual(ProgressType.DONE);
      expect(progress.ratio).toEqual(100);
    });
  });
});
