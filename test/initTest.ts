// @ts-nocheck
import { ExerciseStatistics } from '../src/service/result';


global.process.stdin.setRawMode = (mode: boolean) => undefined;

jest.spyOn(console, 'log').mockImplementation(() => {});

global.resultsFile = '[]';

jest.mock('../src/io/terminalUtils', () => {
  const modelActual = jest.requireActual('../src/io/terminalUtils');
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