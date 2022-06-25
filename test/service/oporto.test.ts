import { stdin } from 'process';
import { terminal } from 'terminal-kit';
import { ReadStream } from 'tty';
import { eventEmitter } from '../../src/event/eventProcessor';
import { Exercise } from '../../src/exercise/exercise';
import { Input } from '../../src/input/input';
import { RegularVerb } from '../../src/repository/db';
import { Terminakl } from '../../src/terminal/terminal';
import { sleep } from '../../src/utils/utils';


const myTerminal = new Terminakl(eventEmitter);
const input = new Input(eventEmitter);
const exercise = new Exercise(eventEmitter);

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
    
    let terminalMock: any;

    beforeEach(() => {
        // @ts-ignore
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        
    })

    it('Happy Path', () => {

        eventEmitter.emit('APP_STARTED');
        process.stdin.emit('keypress', {}, { name: 'c' });
        process.stdin.emit('keypress', {}, { name: 'o' });
        process.stdin.emit('keypress', {}, { name: 'm' });
        process.stdin.emit('keypress', {}, { name: 'o' });
        process.stdin.emit('keypress', {}, { name: 'return' });
        process.stdin.emit('keypress', {}, { name: 'q' });
        expect(eventEmitter.eventHistory.map(event => event.event)).toEqual([
            'APP_STARTED', 
            'EXERCISE_DESCRIPTION_PRINTED', 
            'EXERCISE_BODY_PRINTED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'KEY_PRESSSED',
            'ANSWER_SUBMITED',
            'EXERCISE_DONE',
            'APP_FINISHED'
        ])
        expect(output[0]).toEqual('Infinitive: Comer');
        expect(output[5]).toEqual('Eu: como');
        expect(output[6]).toEqual('Correct!');
    });
});

