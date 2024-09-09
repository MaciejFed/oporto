import { logger } from '../common/logger';
import { displayGenericWeeklyStatistics } from '../io/terminal/terminal-utils';
import { getAllResults } from '../repository/result-repository';
import { getAnswersMissingForBaseWord, getAllUniqueWords, ProgressType } from '../service/progress/progress';
import { getOverallProgres, getWeekdayProgress, getWeekdayStatistics, Result } from '../service/result';
import { generateAllPossibleExercises, generateExercisesForSession } from '../exercise/generator';
import clear from 'clear';
import { Language } from '../common/language';
import { getProgressAggregate, ProgressDetails } from '../service/progress/progress-aggregate';
import { Table } from 'console-table-printer';
import { terminal } from 'terminal-kit';
import { preFetchAllResults } from '../client/client';
import { DateTime } from 'luxon';

type Tables = {
  tableVerbs: string;
  tableNouns: string;
  tableAdjectives: string;
  tableOthers: string;
};

const withDateLastAttempted = (baseWord: string, results: Result[], doneLongestPadding: number) => {
  const date = results.find((result) => result.exercise.getBaseWordAsString() === baseWord)!.date;
  return `${baseWord.padEnd(doneLongestPadding)} [${DateTime.fromJSDate(date).monthShort}/${date.getDate()}]`;
};

const printAllTables = ({ tableVerbs, tableNouns, tableAdjectives, tableOthers }: Tables) => {
  const spitAndPad = (table: string) => table.split('\n').map((line) => line.concat(' '));
  return (
    spitAndPad(tableVerbs)
      .map((line, index) => line.concat(spitAndPad(tableNouns)[index]))
      // .map((line, index) => line.concat(spitAndPad(tableAdjectives)[index]))
      .map((line, index) => line.concat(spitAndPad(tableOthers)[index]))
      .join('\n')
  );
};

export const createTable = (
  title: string,
  progress: Record<ProgressType, ProgressDetails>,
  results: Result[],
  language: Language
) => {
  const { DONE, IN_PROGRESS, NEVER_DONE } = JSON.parse(JSON.stringify(progress)) as Record<
    ProgressType,
    ProgressDetails
  >;

  const inProgressTotalMissing =
    IN_PROGRESS.baseWords.reduce((prev, curr) => prev + getAnswersMissingForBaseWord(curr, results, language), 0) * -1;
  const doneHeader = `Done [${DONE.baseWords.length}]`;
  const inProgressHeader = `In Progress [${IN_PROGRESS.baseWords.length}] (${inProgressTotalMissing})`;
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
  const longestPadding = (arr: string[]) => arr.reduce((prev, curr) => (curr.length > prev ? curr.length : prev), 0);
  const numberWithPadding = (index: number) => `${index + 1}.`.padEnd(3);
  const doneLongestPadding = longestPadding(DONE.baseWords);
  const inProgressLongestPadding = longestPadding(IN_PROGRESS.baseWords);
  const doneWords = DONE.baseWords
    .map((word) => word)
    .sort(sortMostRecent)
    .map((word) => withDateLastAttempted(word, results, doneLongestPadding));
  const inProgressWords = IN_PROGRESS.baseWords
    .sort(sortMostRecent)
    .map(
      (word) =>
        `${word.padEnd(inProgressLongestPadding)} (${getAnswersMissingForBaseWord(word, results, language) * -1})`
    );
  const neverDoneWords = NEVER_DONE.baseWords.map((word) => word).sort(sortMostRecent);
  Array(20)
    .fill(0)
    .forEach((_i, index) => {
      table.addRow({
        [doneHeader]: doneWords[index] ? `${numberWithPadding(index)} ${doneWords[index]}` : '',
        [inProgressHeader]: inProgressWords[index] ? `${numberWithPadding(index)} ${inProgressWords[index]}` : '',
        [neverDoneHeader]: neverDoneWords[index] ? `${numberWithPadding(index)} ${neverDoneWords[index]}` : ''
      });
    });

  return table;
};

export function displayStatistics(_displayProgress: boolean, language: Language) {
  clear();
  preFetchAllResults(language);
  const results = getAllResults(language).reverse();
  const progress = getProgressAggregate(results, generateAllPossibleExercises(language));
  displayGenericWeeklyStatistics(getWeekdayStatistics(language), 0);
  terminal.nextLine(5);
  const tables = {
    tableVerbs: createTable('Verbs', progress.words.VERB, results, language).render(),
    tableNouns: createTable('Nouns', progress.words.NOUN, results, language).render(),
    tableAdjectives: createTable('Adjectives', progress.words.ADJECTIVE, results, language).render(),
    tableOthers: createTable('Others', progress.words.OTHER, results, language).render()
  };
  console.log(printAllTables(tables));
}
