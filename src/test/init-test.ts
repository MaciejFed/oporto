// @ts-nocheck
console.log('Initializing Tests...');

global.resultsFile = '[]';

jest.mock('../client/client', () => {
  const fileModuleActual = jest.requireActual('../client/client');
  const results: any[] = [];
  return {
    ...fileModuleActual,
    fetchAllResults: () => results,
    fetchExercisesForSession: () => [],
    fetchMovieExample: async () => ({
      portuguese: ['', ''],
      englishApi: '',
      english: ''
    }),
    saveNewResult: async (result: any) => {
      results.push(result);
    }
  };
});

jest.mock('../io/file', () => {
  const fileModuleActual = jest.requireActual('../io/file');
  return {
    ...fileModuleActual,
    findExampleSentence: async () => ({
      portuguese: ['Sou a Marta', 'Sou a Marta']
    })
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
