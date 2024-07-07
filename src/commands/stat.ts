import { logger } from '../common/logger';
import { displayGenericWeeklyStatistics } from '../io/terminal/terminal-utils';
import { getAllResults } from '../repository/result-repository';
import { getAllUniqueWords, ProgressType } from '../service/progress/progress';
import { getOverallProgres, getWeekdayProgress, getWeekdayStatistics, Result } from '../service/result';
import { generateAllPossibleExercises, generateExercisesForSession } from '../exercise/generator';
import clear from 'clear';
import { Language } from '../common/language';
import { getProgressAggregate, ProgressDetails } from '../service/progress/progress-aggregate';
import { Table } from 'console-table-printer';

const createTable = (
  title: string,
  { DONE, IN_PROGRESS, NEVER_DONE }: Record<ProgressType, ProgressDetails>,
  results: Result[]
) => {
  const doneHeader = `Done [${DONE.baseWords.length}]`;
  const inProgressHeader = `In Progress [${IN_PROGRESS.baseWords.length}]`;
  const neverDoneHeader = `Never Done [${NEVER_DONE.baseWords.length}]`;
  const table = new Table({
    title,
    columns: [
      { name: doneHeader, alignment: 'left', minLen: 10, color: 'green' },
      { name: inProgressHeader, alignment: 'left', minLen: 10 },
      { name: neverDoneHeader, alignment: 'left', minLen: 10 }
    ]
  });
  const sortMostRecent = (wordA: string, wordB: string) => {
    const indexA = results.findIndex((result) => result.exercise.getBaseWordAsString() === wordA);
    const indexB = results.findIndex((result) => result.exercise.getBaseWordAsString() === wordB);

    return indexA - indexB;
  };
  const doneWords = DONE.baseWords.map((word) => word).sort(sortMostRecent);
  const inProgressWords = IN_PROGRESS.baseWords.map((word) => word).sort(sortMostRecent);
  const neverDoneWords = NEVER_DONE.baseWords.map((word) => word).sort(sortMostRecent);
  Array(20)
    .fill(0)
    .forEach((_i, index) => {
      table.addRow({
        [doneHeader]: doneWords[index] ? `${index + 1}. ${doneWords[index]}` : '',
        [inProgressHeader]: inProgressWords[index] ? `${index + 1}. ${inProgressWords[index]}` : '',
        [neverDoneHeader]: neverDoneWords[index] ? `${index + 1}. ${neverDoneWords[index]}` : ''
      });
    });

  return table;
};

export function displayStatistics(_displayProgress: boolean, language: Language) {
  clear();
  // displayGenericWeeklyStatistics(getWeekdayStatistics(language), 0);
  const results = getAllResults(language);
  const progress = getProgressAggregate(results.reverse(), generateAllPossibleExercises(language));
  const tableNouns = createTable('Nouns', progress.words.NOUN, results);
  const tableVerbs = createTable('Verbs', progress.words.VERB, results);
  tableNouns.printTable();
  tableVerbs.printTable();
}
