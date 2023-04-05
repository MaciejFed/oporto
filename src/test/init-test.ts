// @ts-nocheck

console.log('Initializing Tests...');

global.resultsFile = '[]';

jest.mock('../io/file', () => {
  const fileModuleActual = jest.requireActual('../io/file');
  return {
    ...fileModuleActual,
    readResultsFromFile: () => global.resultsFile,
    saveResultsToFile: (data: string) => {
      global.resultsFile = data;
    }
  };
});

jest.mock('../common/logger', () => {
  return {
    logger: {
      info: () => {},
      debug: () => {}
    }
  };
});

jest.mock('../common/common', () => {
  const modelActual = jest.requireActual('../common/common');
  return {
    ...modelActual,
    sleep: () => {},
    getRandomElement: <T>(arr: T[]) => arr[0]
  };
});

jest.useFakeTimers().setSystemTime(new Date('2022-07-19T12:36'));
