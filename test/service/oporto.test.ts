/* eslint-disable @typescript-eslint/no-var-requires */
import { sleep } from '../../src/utils/utils';
import { simulateTyping } from '../util';

const output: string[] = [];

jest.mock('terminal-kit', () => {
    return {
      __esModule: true,
      terminal: {
        moveTo: (x: number, y: number, data: string) => {
            output.push(data);
        }
      }
    };
  });

jest.mock('../../src/service/verb', () => {
    const modeuleActual = jest.requireActual('../../src/service/verb');
    return {
        ...modeuleActual,
        getRandomVerb: () => 'Comer',
        getRandomPerson: () => 'Eu'
    }
})

type AppModules = {
    SessionManager: any,
    Input: any,
    Terminakl: any,
    eventProcessor: any
}

// @ts-ignore
global.process.stdin.setRawMode = (mode: boolean) => undefined

function requireAllModules(): AppModules {
    const eventProcessor = require('../../src/event/eventProcessor').eventProcessor;
    const SessionManager = require('../../src/session/sessionManager').SessionManager;
    const Input = require('../../src/input/input').Input;
    const Terminakl = require('../../src/terminal/terminal').Terminakl;

    return {
        SessionManager: SessionManager,
        Input: Input,
        Terminakl: Terminakl,
        eventProcessor: eventProcessor
    }
}


describe('Event Emitter', () => {

    beforeEach(() => {
        // @ts-ignore
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        output.length = 0 ;
        jest.resetModules();
    })

    afterEach(() => {
        jest.resetModules();
        process.stdin.removeAllListeners();
    });

    it('Happy Path', () => {
        const appModules = requireAllModules();
        const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
        const input = new appModules.Input(appModules.eventProcessor);
        const sessionManager = new appModules.SessionManager(appModules.eventProcessor, 1);
        appModules.eventProcessor.emit('APP_STARTED');
        console.log(process.stdin.listeners);
        simulateTyping('como')
        process.stdin.emit('keypress', {}, { name: 'return' });
        process.stdin.emit('keypress', {}, { name: 'spacebar' });
        expect(appModules.eventProcessor.eventHistory.map((event: { event: any; }) => event.event)).toEqual([
            'APP_STARTED',
            'EXERCISE_STARTED', 
            'EXERCISE_DESCRIPTION_PRINTED', 
            'EXERCISE_BODY_PRINTED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'ANSWER_SUBMITED',
            'ANSWER_CHECKED',
            'KEY_PRESSSED',
            'EXERCISE_NEXT',
            'APP_FINISHED'
        ]);
        
        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[5]).toEqual('Eu: como');
        expect(output[6]).toEqual('Correct!');
    });

    it('Unhappy Path', () => {
        console.log(process.stdin.listeners);
        const appModules = requireAllModules();
        const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
        const input = new appModules.Input(appModules.eventProcessor);
        const sessionManager = new appModules.SessionManager(appModules.eventProcessor, 1);
        appModules.eventProcessor.emit('APP_STARTED');
        simulateTyping('wronganswer')
        process.stdin.emit('keypress', {}, { name: 'return' });

        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[12]).toEqual('Eu: wronganswer');
        expect(output[13]).toEqual('Wrong!');
    });

    it('a Happy Path With Backspace', () => {
        console.log(process.stdin.listeners);
        const appModules = requireAllModules();
        const myTerminal = new appModules.Terminakl(appModules.eventProcessor);
        const input = new appModules.Input(appModules.eventProcessor);
        const sessionManager = new appModules.SessionManager(appModules.eventProcessor, 1);
        appModules.eventProcessor.emit('APP_STARTED');
        simulateTyping('comorr')
        process.stdin.emit('keypress', {}, { name: 'backspace' });
        process.stdin.emit('keypress', {}, { name: 'backspace' });
        process.stdin.emit('keypress', {}, { name: 'return' });
        process.stdin.emit('keypress', {}, { name: 'spacebar' });


        expect(appModules.eventProcessor.eventHistory.map((event: { event: any; }) => event.event)).toEqual([
            'APP_STARTED',
            'EXERCISE_STARTED',
            'EXERCISE_DESCRIPTION_PRINTED', 
            'EXERCISE_BODY_PRINTED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'ANSWER_SUBMITED',
            'ANSWER_CHECKED',
            'KEY_PRESSSED',
            'EXERCISE_NEXT',
            'APP_FINISHED'
        ]);
        
        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[7]).toEqual('Eu: comorr');
        expect(output[9]).toEqual('Eu: como');
        expect(output[10]).toEqual('Correct!');
    });
});

