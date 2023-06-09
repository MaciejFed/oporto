import { Language, setLanguage } from '../common/language';

/* eslint-disable @typescript-eslint/no-var-requires */
const mockCommonModules = () => {
  // @ts-ignore
  global.process.stdin.setRawMode = (mode: boolean) => undefined;

  // @ts-ignore
  process.stdin.setRawMode = () => {};

  jest.mock('terminal-kit', () => {
    return {
      __esModule: true,
      terminal: {
        moveTo: () => {},
        hideCursor: () => {},
        green: () => {},
        red: () => {},
        white: () => {},
        bold: () => {},
        yellow: () => {}
      }
    };
  });
};

export const withBaseMocks = (mockGenerator?: boolean) => {
  process.stdin.removeAllListeners();
  let mockResultFile = '[]';
  const sayCommands: string[] = [];
  setLanguage(Language.German);

  mockCommonModules();

  // @ts-ignore
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  const mockGenerateExercisesForSession = jest.fn();

  if (mockGenerator) {
    jest.mock('../exercise/generator', () => {
      const moduleActual = jest.requireActual('../exercise/generator');
      return {
        __esModule: true,
        ...moduleActual,
        generateExercisesForSession: mockGenerateExercisesForSession
      };
    });
  }

  jest.mock('../io/file', () => {
    const fileModuleActual = jest.requireActual('../io/file');
    return {
      ...fileModuleActual,
      readResultsFromFile: () => mockResultFile,
      saveResultsToFile: (data: string) => {
        mockResultFile = data;
      },
      findExampleSentence: async () => ({
        portuguese: ['Sou a Marta', 'Sou a Marta']
      })
    };
  });

  jest.mock('child_process', () => {
    const fileModuleActual = jest.requireActual('child_process');
    return {
      ...fileModuleActual,
      exec: (command: string) => {
        sayCommands.push(command);
      }
    };
  });

  const eventProcessor = require('../event/event-processor').default;
  const Terminal = require('../io/terminal').default;
  const Input = require('../io/input').default;
  const SessionManager = require('../session/session-manager').default;
  const getAllResults = require('../repository/result-repository').getAllResults;
  const Output = require('../io/output').default;

  const terminal = new Terminal(eventProcessor);
  const input = new Input(eventProcessor);

  return {
    mockExit,
    mockResultFile,
    sayCommands,
    eventProcessor,
    getAllResults,
    mockGenerateExercisesForSession,
    SessionManager,
    Output
  };
};
