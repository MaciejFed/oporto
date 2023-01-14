// @ts-nocheck
import { ExerciseStatistics } from '../src/service/result';


console.log('Initializing Tests...')

global.process.stdin.setRawMode = (mode: boolean) => undefined;

jest.spyOn(console, 'log').mockImplementation(() => {});

global.resultsFile = '[]';

jest.mock('../src/io/terminal-utils', () => {
  const modelActual = jest.requireActual('../src/io/terminal-utils');
  return {
    ...modelActual,
    animateExerciseSummary: (exerciseStatistics: ExerciseStatistics) => {},
    displayWeeklyStatistics: (weeklyStatistics: WeekdayStatistics[]) => {}
  };
});

jest.mock('../src/io/file', () => {
    const fileModuleActual = jest.requireActual('../src/io/file');
    return {
      ...fileModuleActual,
      readFromFile: () => global.resultsFile,
      saveToFile: (data: string) => {
        global.resultsFile = data;
      }
    };
  });
