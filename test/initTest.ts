// @ts-nocheck
global.process.stdin.setRawMode = (mode: boolean) => undefined;

process.stdin.setRawMode = () => {};

jest.spyOn(console, 'log').mockImplementation(() => {});

jest.mock('../src/repository/file', () => {
    const fileModuleActual = jest.requireActual('../src/repository/file');
    return {
      ...fileModuleActual,
      readFromFile: () => '[]',
      saveToFile: (data: string) => { }
    };
  });