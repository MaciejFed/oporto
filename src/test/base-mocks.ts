/* eslint-disable @typescript-eslint/no-var-requires */

import { Language } from '../common/language';

const testExercises =
  '[{"translationType":"toEnglish","exerciseType":"AdjectiveTranslation","adjective":{"english":"bitter","masculine":{"singular":"amargo","plural":"amargos"},"feminine":{"singular":"amarga","plural":"amargas"}},"gender":"masculine","number":"singular"},' +
  '{"exerciseType":"VerbExercise","verb":{"english":"to have","infinitive":"ter","presentSimple":{"Eu":"tenho","Tu":"tens","Ela/Ele/Você":"tem","Nós":"temos","Eles/Elas/Vocēs":"têm"},"pastPerfect":{"Eu":"tive","Tu":"tiveste","Ela/Ele/Você":"teve","Nós":"tivemos","Eles/Elas/Vocēs":"tiveram"}},"person":"Eles/Elas/Vocēs","verbTime":"pastPerfect"},' +
  '{"exerciseType":"VerbExercise","verb":{"english":"to enter","infinitive":"entrar","presentSimple":{"Eu":"entro","Tu":"entras","Ela/Ele/Você":"entra","Nós":"entramos","Eles/Elas/Vocēs":"entram"},"pastPerfect":{"Eu":"entrei","Tu":"entraste","Ela/Ele/Você":"entrou","Nós":"entrámos","Eles/Elas/Vocēs":"entraram"}},"person":"Ela/Ele/Você","verbTime":"presentSimple"}]';
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
  const sayCommands: string[] = [];

  mockCommonModules();

  // @ts-ignore
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  const mockGenerateExercisesForSession = jest.fn().mockReturnValue(JSON.parse(testExercises));

  jest.mock('../client/client', () => {
    const fileModuleActual = jest.requireActual('../client/client');
    const results: any[] = [];
    return {
      ...fileModuleActual,
      fetchAllResults: () => results,
      fetchExercisesForSession: mockGenerateExercisesForSession,
      fetchMovieExample: async () => ({
        word: 'cadeira',
        targetLanguage: 'O meu chefe vai usar a cadeira de rodas para sempre.',
        english: 'My boss will use a wheelchair for life.',
        englishApi: 'My boss will use the wheelchair forever.',
        wordStartIndex: 23
      }),
      saveNewResult: async (_language: any, result: any) => {
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

  jest.mock('child_process', () => {
    const fileModuleActual = jest.requireActual('child_process');
    return {
      ...fileModuleActual,
      exec: (command: string) => {
        sayCommands.push(command);
      },
      execSync: (command: string) => {
        sayCommands.push(command);
      }
    };
  });

  const { EventProcessor } = require('../event/event-processor');
  const Terminal = require('../io/terminal').default;
  const Input = require('../io/input').default;
  const SessionManager = require('../session/session-manager').default;
  const getAllResults = require('../repository/result-repository').getAllResults;
  const Output = require('../io/output').default;

  const eventProcessor = new EventProcessor(Language.Portuguese);
  const terminal = new Terminal(eventProcessor, Language.Portuguese);
  const input = new Input(eventProcessor);

  return {
    mockExit,
    sayCommands,
    eventProcessor,
    getAllResults,
    mockGenerateExercisesForSession,
    SessionManager,
    Output
  };
};
