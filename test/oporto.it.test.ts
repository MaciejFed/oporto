/* eslint-disable @typescript-eslint/no-var-requires */
import { eventProcessor } from '../src/event/eventProcessor';
import { Input } from '../src/input/input';
import { SessionManager } from '../src/session/sessionManager';
import { Terminakl } from '../src/terminal/terminal';
import { sleep } from '../src/utils/utils';
import { simulateTyping } from './util';

const terminal = new Terminakl(eventProcessor);
const input = new Input(eventProcessor);
const sessionManager = new SessionManager(eventProcessor, 3);

const sayCommands: string[] = [];
const output: string[] = [];
const resultCount = {
  greenCount: 0,
  redCount: 0
};


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
        output.push(data);
      },
      hideCursor: (hide: boolean) => {},
      green: () => {
        resultCount.greenCount++;
      },
      red: () => {
        resultCount.redCount++;
      },
      white: () => {}
    }
  };
});


describe('IT', () => {
  // @ts-ignore
  const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});

  afterEach(() => {
    process.stdin.removeAllListeners();
  });

  it('Full Integration Path', async () => {
    // Start the app
    eventProcessor.emit('APP_STARTED');

    // Get correct answer for first questions and type it
    const correctAnswer1Question = sessionManager.currentExercise?.getCorrectAnswer() || '';
    simulateTyping(correctAnswer1Question);
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'spacebar' });
    const greenCountAfter1Question = resultCount.greenCount;
    const expectedGreenCount1Question = correctAnswer1Question.length;

    await sleep(500);

    // Get correct answer for the second questions and type it missing last character
    const correctAnswer2Question = sessionManager.currentExercise?.getCorrectAnswer() || '';
    simulateTyping(
      correctAnswer2Question.substring(0, correctAnswer2Question.length - 1)
    );
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'spacebar' });
    const greenCountAfter2Question = resultCount.greenCount;
    const expectedGreenCount2Question = correctAnswer2Question.length - 1;
    const redCountAfter2Question = resultCount.redCount;
    const expectedRedCount2Question = 1;

    await sleep(500);

    // Get correct answer for the third question
    const correctAnswer3Question = sessionManager.currentExercise?.getCorrectAnswer() || '';
    simulateTyping(correctAnswer3Question);
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'e' })
    process.stdin.emit('keypress', {}, { name: 's' })
    process.stdin.emit('keypress', {}, { name: 'spacebar' });
    const greenCountAfter3Question = resultCount.greenCount;
    const expectedGreenCount3Question = correctAnswer3Question.length;
    
    await sleep(500);

    const correctAnswersLogCount = output.filter((logLine) => logLine === 'Correct!').length;
    const wrongAnswersLogCount = output.filter((logLine) => logLine === 'Wrong!').length;

    expect(greenCountAfter1Question).toBe(expectedGreenCount1Question);
    expect(greenCountAfter2Question).toBe(expectedGreenCount1Question + expectedGreenCount2Question);
    expect(redCountAfter2Question).toBe(expectedRedCount2Question);
    expect(greenCountAfter3Question).toBe(expectedGreenCount1Question + expectedGreenCount2Question + expectedGreenCount3Question);
    expect(correctAnswersLogCount).toBe(2);
    expect(wrongAnswersLogCount).toBe(1);
    expect(mockExit).toHaveBeenCalledWith(0);
    expect(sayCommands).toEqual([correctAnswer1Question, correctAnswer2Question, sessionManager.currentExercise?.getCorrectAnswer(), correctAnswer3Question, ].map((answer) => `say "${answer}"`));

    console.log(output);
  });
});
