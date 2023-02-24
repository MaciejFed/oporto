import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { generateResultsForExerciseDaysAgo } from '../priority/priority.util';
import { readAll } from '../repository/exercises-repository';
import { progressByDate } from './progress';

const nounExercise0 = NounTranslationExercise.new(readAll().nouns[0], 'toPortuguese');
const nounExercise1 = NounTranslationExercise.new(readAll().nouns[1], 'toPortuguese');
const nounExercise2 = NounTranslationExercise.new(readAll().nouns[2], 'toPortuguese');
const nounExercise3 = NounTranslationExercise.new(readAll().nouns[3], 'toPortuguese');
const nounExercise4 = NounTranslationExercise.new(readAll().nouns[4], 'toPortuguese');

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
  it('should calculate progress', () => {
    const progress = progressByDate(results);

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
});
