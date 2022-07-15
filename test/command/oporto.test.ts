/* eslint-disable @typescript-eslint/no-var-requires */
import { sleep } from '../../src/common/common';
import { simulateTyping } from '../util';

const output: string[] = [];
const resultCount = {
  greenCount: 0,
  redCount: 0
};
const sayCommands: string[] = [];

 // @ts-ignore
 process.stdin.setRawMode = () => {};

jest.mock('child_process', () => {
  return {
    __esModule: true,
    exec: (command: string) => { sayCommands.push(command) }
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
        green: () => {
          resultCount.greenCount++;
        },
        red: () => {
          resultCount.redCount++;
        },
        white: () => {},
        bold: () => {},
      }
    };
  });
jest.mock('../../src/service/verb', () => {
  const modeuleActual = jest.requireActual('../../src/service/verb');
  const readAll = require('../../src/repository/exercisesRepository').readAll;
  return {
    ...modeuleActual,
    getRandomRegularVerb: () => Object.assign({ portuguese: 'Comer', english: '' }),
    getRandomPerson: () => 'Eu',
    getRandomIrregularVerb: () => readAll().verbs.irregular[0],
  };
});

jest.mock('../../src/exercise/exercise', () => {
  const RegularVerbExercise = require('../../src/exercise/verbExercise').RegularVerbExercise;
  const modeuleActual = jest.requireActual('../../src/exercise/exercise');
  return {
    __esModule: true,
    modeuleActual,
    generateUniqeExercises: () => [new RegularVerbExercise()]
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
  const Input = require('../../src/io/input').Input;
  const Terminakl = require('../../src/io/terminal').Terminakl;

  return {
    SessionManager: SessionManager,
    Input: Input,
    Terminakl: Terminakl,
    eventProcessor: eventProcessor
  };
}

describe('Event Emitter', () => {
  beforeEach(() => {
    // @ts-ignore
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    sayCommands.length = 0;
    output.length = 0;
    resultCount.greenCount = 0;
    resultCount.redCount = 0;

  });

  afterEach(() => {
    jest.resetModules();
    process.stdin.removeAllListeners();
  });

  it('Happy Path', async () => {
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );
    appModules.eventProcessor.emit('APP_STARTED');
    console.log(process.stdin.listeners);
    simulateTyping('como');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );

    expect(output[0]).toEqual('Infinitive: Comer');
    expect(output[5]).toEqual('Eu: como');
    expect(output[6]).toEqual('Correct! [voice]');
    expect(resultCount.greenCount).toBe('como'.length);
    expect(resultCount.redCount).toBe(0);
    expect(sayCommands[0]).toEqual('say "Eu Como"');
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('Unhappy Path', async () => {
    console.log(process.stdin.listeners);
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );

    appModules.eventProcessor.emit('APP_STARTED');
    simulateTyping('cowronganswer');
    process.stdin.emit('keypress', {}, { name: 'return' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
        (event: { event: any }) => event.event
      );

    expect(output[0]).toEqual('Infinitive: Comer');
    expect(output[14]).toEqual('Eu: cowronganswer');
    expect(output[15]).toEqual('Wrong! [voice]');
    expect(resultCount.greenCount).toBe('co'.length);
    expect(resultCount.redCount).toBe(2);
    expect(sayCommands[0]).toEqual('say "Eu Como"');
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('HP With Backspace', async () => {
    console.log(process.stdin.listeners);
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );
    appModules.eventProcessor.emit('APP_STARTED');
    simulateTyping('comorr');
    process.stdin.emit('keypress', {}, { name: 'backspace' });
    process.stdin.emit('keypress', {}, { name: 'backspace' });
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);
    
    const eventHistory = appModules.eventProcessor.eventHistory.map(
        (event: { event: any }) => event.event
      );

    expect(output[0]).toEqual('Infinitive: Comer');
    expect(output[7]).toEqual('Eu: comorr');
    expect(output[9]).toEqual('Eu: como');
    expect(output[10]).toEqual('Correct! [voice]');
    expect(resultCount.greenCount).toBe('como'.length);
    expect(resultCount.redCount).toBe(0);
    expect(sayCommands[0]).toEqual('say "Eu Como"');
    expect(output).toMatchSnapshot();
    expect(eventHistory).toMatchSnapshot();
  });
});
