/* eslint-disable @typescript-eslint/no-var-requires */
import { sleep } from '../../src/common/common';
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
  const eventProcessor = require('../../src/event/eventProcessor').eventProcessor;
  const SessionManager = require('../../src/session/sessionManager').SessionManager;
  const Input = require('../../src/io/input').Input;
  const Terminakl = require('../../src/io/terminal').Terminakl;

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
      const NounTranslationExercise = require('../../src/exercise/translationExercise').NounTranslationExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const nounTranslationExerciseToPortuguese = new NounTranslationExercise();
      nounTranslationExerciseToPortuguese.noun = readAll().nouns[1];
      nounTranslationExerciseToPortuguese.translationType = 'toPortuguese';
      const nounTranslationExerciseToEnglish= new NounTranslationExercise();
      nounTranslationExerciseToEnglish.noun = readAll().nouns[1];
      nounTranslationExerciseToEnglish.translationType = 'toEnglish';
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [nounTranslationExerciseToEnglish, nounTranslationExerciseToPortuguese]
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

    await sleep(50);

    simulateTyping('tea');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });


  it('Fit In', async () => {
    jest.mock('../../src/exercise/exercise', () => {
      const readAll = require('../../src/repository/exercisesRepository').readAll;
      const FitInGapExercise = require('../../src/exercise/fitInGapExercise').FitInGapExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const fitInGapExerciseOne = new FitInGapExercise();
      const fitInGapExerciseTwo = new FitInGapExercise();
      fitInGapExerciseOne.fitIn = readAll().fitIn[0];
      fitInGapExerciseTwo.fitIn = readAll().fitIn[1];
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [fitInGapExerciseOne, fitInGapExerciseTwo]
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
    simulateTyping('de');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    simulateTyping('wronganswer');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('Verb', async () => {
    jest.mock('../../src/exercise/exercise', () => {
      const readAll = require('../../src/repository/exercisesRepository').readAll;
      const RegularVerbExercise = require('../../src/exercise/verbExercise').RegularVerbExercise;
      const IrregularVerbExercise = require('../../src/exercise/verbExercise').IrregularVerbExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const regularVerbExercise = new RegularVerbExercise();
      const irregularVerbExercise = new IrregularVerbExercise();
      regularVerbExercise.verb = readAll().verbs.regular[0];
      regularVerbExercise.person = 'Eu'
      irregularVerbExercise.verb = readAll().verbs.irregular[0];
      irregularVerbExercise.person = 'Eu'
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [regularVerbExercise, irregularVerbExercise]
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
    simulateTyping('sou');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    simulateTyping('falo');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

});
