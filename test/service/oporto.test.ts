import { eventEmitter } from '../../src/event/eventProcessor';
import { SessionManager } from '../../src/session/sessionManager';
import { Input } from '../../src/input/input';
import { Terminakl } from '../../src/terminal/terminal';
import { simulateTyping } from '../util';


let myTerminal;
let input;
let sessionManager;

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

// @ts-ignore
global.process.stdin.setRawMode = (mode: boolean) => undefined

describe('Event Emitter', () => {

    beforeEach(() => {
        // @ts-ignore
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        output.length = 0 ;
        eventEmitter.eventHistory = [];
        myTerminal = new Terminakl(eventEmitter);
        input = new Input(eventEmitter);
        sessionManager = new SessionManager(eventEmitter, 1);
    })

    it('Happy Path', () => {
        eventEmitter.emit('APP_STARTED');
        simulateTyping('como')
        process.stdin.emit('keypress', {}, { name: 'return' });
        expect(eventEmitter.eventHistory.map(event => event.event)).toEqual([
            'APP_STARTED',
            'EXERCISE_STARTED', 
            'EXERCISE_DESCRIPTION_PRINTED', 
            'EXERCISE_BODY_PRINTED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'ANSWER_SUBMITED',
            'EXERCISE_DONE',
            'EXERCISE_NEXT',
            'APP_FINISHED'
        ]);
        
        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[5]).toEqual('Eu: como');
        expect(output[6]).toEqual('Correct!');
    });

    it('Unhappy Path', () => {
        eventEmitter.emit('APP_STARTED');
        simulateTyping('wronganswer')
        process.stdin.emit('keypress', {}, { name: 'return' });

        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[12]).toEqual('Eu: wronganswer');
        expect(output[13]).toEqual('Wrong!');
    });

    it('Happy Path With Backspace', () => {
        eventEmitter.emit('APP_STARTED');
        simulateTyping('comorr')
        process.stdin.emit('keypress', {}, { name: 'backspace' });
        process.stdin.emit('keypress', {}, { name: 'backspace' });
        process.stdin.emit('keypress', {}, { name: 'return' });
        expect(eventEmitter.eventHistory.map(event => event.event)).toEqual([
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
            'EXERCISE_DONE',
            'EXERCISE_NEXT',
            'APP_FINISHED'
        ]);
        
        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[7]).toEqual('Eu: comorr');
        expect(output[9]).toEqual('Eu: como');
        expect(output[10]).toEqual('Correct!');
    });
});

