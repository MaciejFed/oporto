/* eslint-disable @typescript-eslint/no-var-requires */
import { sleep } from '../../src/utils/utils';
import { simulateTyping } from '../util';

const output: string[] = [];
 // @ts-ignore
 process.stdin.setRawMode = () => {};

jest.mock('child_process', () => {
  return {
    __esModule: true,
    exec: (command: string) => {}
  };
});
jest.mock('terminal-kit', () => {
    return {
      __esModule: true,
      terminal: {
        moveTo: (x: number, y: number, data: string) => {
          if (data)
            output.push(data);
        },
        hideCursor: (hide: boolean) => {},
        green: () => {},
        red: () => {},
        white: () => {}
      }
    };
  });



type AppModules = {
  SessionManager: any;
  Input: any;
  Terminakl: any;
  eventProcessor: any;
};


function requireAllModules(): AppModules {
  const eventProcessor =
    require('../../src/event/eventProcessor').eventProcessor;
  const SessionManager =
    require('../../src/session/sessionManager').SessionManager;
  const Input = require('../../src/input/input').Input;
  const Terminakl = require('../../src/terminal/terminal').Terminakl;

  return {
    SessionManager: SessionManager,
    Input: Input,
    Terminakl: Terminakl,
    eventProcessor: eventProcessor
  };
}

describe('Exercises IT Snapshot', () => {
  beforeEach(() => {
    // @ts-ignore
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    output.length = 0;
  });

  afterEach(() => {
    jest.resetModules();
    process.stdin.removeAllListeners();
  });

  it('Translation', async () => {
    jest.mock('../../src/exercise/exercise', () => {
      const readAll = require('../../src/repository/exercisesRepository').readAll;
      const TranslationExercise = require('../../src/exercise/translationExercise').TranslationExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const translationExerciseToPortuguese = new TranslationExercise();
      translationExerciseToPortuguese.translation = readAll().translations[1];
      translationExerciseToPortuguese.translationType = 'toPortuguese';
      const translationExerciseToEnglish= new TranslationExercise();
      translationExerciseToEnglish.translation = readAll().translations[1];
      translationExerciseToEnglish.translationType = 'toEnglish';
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [translationExerciseToEnglish, translationExerciseToPortuguese]
      };
    });
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      2
    );
    appModules.eventProcessor.emit('APP_STARTED');
    simulateTyping('o chá');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(500);

    simulateTyping('tea');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(500);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

});
