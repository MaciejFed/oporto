import { logger } from '../common/logger';
import { displayGenericWeeklyStatistics } from '../io/terminal/terminal-utils';
import { getAllResults } from '../repository/result-repository';
import {
  getAnswersMissingForBaseWord,
  getAllUniqueWords,
  ProgressType,
  getSingleExerciseProgress
} from '../service/progress/progress';
import {
  getExerciseProgress,
  getOverallProgres,
  getWeekdayProgress,
  getWeekdayStatistics,
  Result
} from '../service/result';
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
  thirdTable: string;
};

const withDateLastAttempted = (baseWord: string, results: Result[], doneLongestPadding: number) => {
  const date = results.find((result) => result.exercise.getBaseWordAsString() === baseWord)!.date;
  return `${baseWord.padEnd(doneLongestPadding)} [${DateTime.fromJSDate(date).monthShort}/${date.getDate()}]`;
};

const printAllTables = ({ tableVerbs, tableNouns, thirdTable }: Tables) => {
  const spitAndPad = (table: string) => table.split('\n').map((line) => line.concat(' '));

  return spitAndPad(tableVerbs)
    .map((line, index) => line.concat(spitAndPad(tableNouns)[index]))
    .map((line, index) => line.concat(spitAndPad(thirdTable)[index]))
    .join('\n');
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
  const allExercises = generateAllPossibleExercises(language);

  const x = results.reduce<Record<string, { results: Result[]; isDone: boolean }>>((prev, curr) => {
    if (curr.exercise.exerciseType === 'SentenceTranslation') return prev;
    const index = curr.exercise.getBaseWordAsString() || '';
    if (!prev[index]) {
      prev[index] = {
        results: [curr],
        isDone: false
      };
    } else {
      if (prev[index].isDone) {
        return prev;
      }
      prev[index].results.push(curr);
      prev[index].results = prev[index].results.sort((a, b) => b.date.getTime() - a.date.getTime());
      prev[index].isDone = getAnswersMissingForBaseWord(index, prev[index].results, allExercises) === 0;

      return prev;
    }

    return prev;
  }, {});

  const inProgressTotalMissing =
    IN_PROGRESS.baseWords.reduce(
      (prev, curr) => prev + getAnswersMissingForBaseWord(curr, results, generateAllPossibleExercises(language)),
      0
    ) * -1;
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
    if (!x[wordA] || !x[wordA].results) {
      return 1;
    }
    if (!x[wordB] || !x[wordB].results) {
      return -1;
    }
    return x[wordB].results[0].date.getTime() - x[wordA].results[0].date.getTime();
  };
  const longestPadding = (arr: string[]) => arr.reduce((prev, curr) => (curr.length > prev ? curr.length : prev), 0);
  const numberWithPadding = (index: number) => `${index + 1}.`.padEnd(3);
  const doneLongestPadding = longestPadding(DONE.baseWords);
  const inProgressLongestPadding = longestPadding(IN_PROGRESS.baseWords);
  const doneWords = DONE.baseWords
    .map((word) => word)
    .sort(sortMostRecent)
    .map((word) => withDateLastAttempted(word, x[word].results, doneLongestPadding));
  const inProgressWords = IN_PROGRESS.baseWords
    .sort(sortMostRecent)
    .map(
      (word) =>
        `${word.padEnd(inProgressLongestPadding)} (${getAnswersMissingForBaseWord(word, results, allExercises) * -1})`
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
  const results = getAllResults(language);
  displayGenericWeeklyStatistics(getWeekdayStatistics(language), 0);
  const progress = getProgressAggregate(results, generateAllPossibleExercises(language));
  terminal.nextLine(5);
  const thirdTable =
    Math.random() < 0.5
      ? createTable('Adjectives', progress.words.ADJECTIVE, results, language).render()
      : createTable('Others', progress.words.OTHER, results, language).render();
  const tables = {
    tableVerbs: createTable('Verbs', progress.words.VERB, results, language).render(),
    tableNouns: createTable('Nouns', progress.words.NOUN, results, language).render(),
    thirdTable
  };
  console.log(printAllTables(tables));
}
