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
        white: () => {},
        bold: () => {},
      }
    };
  });


type AppModules = {
  SessionManager: any;
  Input: any;
  Terminal: any;
  eventProcessor: any;
};


function requireAllModules(): AppModules {
  const eventProcessor = require('../../src/event/eventProcessor').eventProcessor;
  const SessionManager = require('../../src/session/sessionManager').SessionManager;
  const Input = require('../../src/io/input').Input;
  const Terminal = require('../../src/io/terminal').Terminal;

  return {
    SessionManager: SessionManager,
    Input: Input,
    Terminal: Terminal,
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

  it('NounTranslation', async () => {
    jest.mock('../../src/exercise/exercise', () => {
      const readAll = require('../../src/repository/exercisesRepository').readAll;
      const NounTranslationExercise = require('../../src/exercise/translation/nounTranslationExercise').NounTranslationExercise;
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
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      2
    );
    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('o chá');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    await simulateTyping('tea');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    const eventHistory = appModules.eventProcessor.eventHistory.map(
      (event: { event: any }) => event.event
    );
    expect(eventHistory).toMatchSnapshot();
    expect(output).toMatchSnapshot();
  });

  it('SentenceTranslation', async () => {
    jest.mock('../../src/exercise/exercise', () => {
      const readAll = require('../../src/repository/exercisesRepository').readAll;
      const SentenceTranslationExercise = require('../../src/exercise/translation/sentenceTranslationExercise').SentenceTranslationExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const sentenceTranslationExerciseToPortuguese = new SentenceTranslationExercise();
      sentenceTranslationExerciseToPortuguese.sentence = readAll().sentences[0];
      sentenceTranslationExerciseToPortuguese.translationType = 'toPortuguese';
      const sentenceTranslationExerciseToEnglish= new SentenceTranslationExercise();
      sentenceTranslationExerciseToEnglish.sentence = readAll().sentences[0];
      sentenceTranslationExerciseToEnglish.translationType = 'toEnglish';
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [sentenceTranslationExerciseToEnglish, sentenceTranslationExerciseToPortuguese]
      };
    });
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      2
    );
    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('Como estás?');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    await simulateTyping('How are you?');
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
      const fitInGapExercise = new FitInGapExercise();
      fitInGapExercise.fitIn = readAll().fitIn[0];
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [fitInGapExercise]
      };
    });
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      1
    )
    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('tomo');
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
      const VerbExercise = require('../../src/exercise/verbExercise').VerbExercise;
      const modelActual = jest.requireActual('../../src/exercise/exercise');
      const verbExercise = new VerbExercise();
      verbExercise.verb = readAll().verbs[0];
      verbExercise.person = 'Eu';
      const verbExercise2 = new VerbExercise();
      verbExercise2.verb = readAll().verbs[1];
      verbExercise2.person = 'Eu';
      return {
        __esModule: true,
        modelActual,
        generateUniqeExercises: () => [verbExercise, verbExercise2]
      };
    });
    const appModules = requireAllModules();
    const myTerminal = new appModules.Terminal(appModules.eventProcessor);
    const input = new appModules.Input(appModules.eventProcessor);
    const sessionManager = new appModules.SessionManager(
      appModules.eventProcessor,
      2
    );
    appModules.eventProcessor.emit('APP_STARTED');
    await simulateTyping('estou');
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'n' });

    await sleep(50);

    await simulateTyping('sou');
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
