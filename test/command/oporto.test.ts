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
    getRandomPerson: () => 'Eu',
    getRandomVerb: () => readAll().verbs[0],
  };
});

jest.mock('../../src/exercise/exercise', () => {
  const VerbExercise = require('../../src/exercise/verbExercise').VerbExercise;
  const modeuleActual = jest.requireActual('../../src/exercise/exercise');
  return {
    __esModule: true,
    modeuleActual,
    generateUniqueExercises: () => [new VerbExercise()]
  };
});


type AppModules = {
  SessionManager: any;
  Input: any;
  Terminal: any;
  eventProcessor: any;
};


function requireAllModules(): AppModules {
  const eventProcessor =
    require('../../src/event/eventProcessor').eventProcessor;
  const SessionManager =
    require('../../src/session/sessionManager').SessionManager;
  const Input = require('../../src/io/input').Input;
  const Terminal = require('../../src/io/terminal').Terminal;

  return {
    SessionManager: SessionManager,
    Input: Input,
    Terminal: Terminal,
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
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );
    appModules.eventProcessor.emit('APP_STARTED');
    console.log(process.stdin.listeners);
    await simulateTyping('sou');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );

    expect(output[0]).toEqual('Infinitive: to be - long');
    expect(output[4]).toEqual('Eu: sou');
    expect(output[5]).toEqual('Correct! [keyboard]');
    expect(resultCount.greenCount).toBe('sou'.length);
    expect(resultCount.redCount).toBe(0);
    expect(sayCommands[0]).toEqual('say "Eu sou"');
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('Unhappy Path', async () => {
    console.log(process.stdin.listeners);
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );

    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('sowronganswer');
    process.stdin.emit('keypress', {}, { name: 'return' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
        (event: { event: any }) => event.event
      );

    expect(output[0]).toEqual('Infinitive: to be - long');
    expect(output[14]).toEqual('Eu: sowronganswer');
    expect(output[15]).toEqual('Wrong! [keyboard]');
    expect(resultCount.greenCount).toBe('so'.length);
    expect(resultCount.redCount).toBe('sou'.length - 'so'.length);
    expect(sayCommands[0]).toEqual('say "Eu sou"');
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('HP With Backspace', async () => {
    console.log(process.stdin.listeners);
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    );
    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('sourr');
    process.stdin.emit('keypress', {}, { name: 'backspace' });
    process.stdin.emit('keypress', {}, { name: 'backspace' });
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
        (event: { event: any }) => event.event
      );

    expect(output[0]).toEqual('Infinitive: to be - long');
    expect(output[6]).toEqual('Eu: sourr');
    expect(output[8]).toEqual('Eu: sou');
    expect(output[9]).toEqual('Correct! [keyboard]');
    expect(resultCount.greenCount).toBe('sou'.length);
    expect(resultCount.redCount).toBe(0);
    expect(sayCommands[0]).toEqual('say "Eu sou"');
    expect(output).toMatchSnapshot();
    expect(eventHistory).toMatchSnapshot();
  });
});
