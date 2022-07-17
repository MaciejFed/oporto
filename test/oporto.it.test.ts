/* eslint-disable @typescript-eslint/no-var-requires */
import { eventProcessor } from '../src/event/eventProcessor';
import { Input } from '../src/io/input';
import { SessionManager } from '../src/session/sessionManager';
import { Terminal } from '../src/io/terminal';
import { sleep } from '../src/common/common';
import { simulateTyping } from './util';
import { getAllResults } from '../src/repository/resultRepository';

const terminal = new Terminal(eventProcessor);
const input = new Input(eventProcessor);
const sessionManager = new SessionManager(eventProcessor, 3);

const sayCommands: string[] = [];
const output: string[] = [];

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
    const firstResult = getAllResults()[0];
    const firstExercise = sessionManager.currentExercise;
    process.stdin.emit('keypress', {}, { name: 'spacebar', sequence: ' ' });

    await sleep(50);

    // Get correct answer for the second questions and type it missing last character
    const correctAnswer2Question = sessionManager.currentExercise?.getCorrectAnswer() || '';
    simulateTyping(
      correctAnswer2Question.substring(0, correctAnswer2Question.length - 1)
    );
    process.stdin.emit('keypress', {}, { name: 'return' });
    const secondResult = getAllResults()[1];
    const secondExercise = sessionManager.currentExercise;
    process.stdin.emit('keypress', {}, { name: 'spacebar', sequence: ' ' });

    await sleep(50);

    // correct wrong answer
    simulateTyping(correctAnswer2Question);
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'spacebar', sequence: ' ' });

    await sleep(50);

    // Get correct answer for the third question
    const correctAnswer3Question = sessionManager.currentExercise?.getCorrectAnswer() || '';
    simulateTyping(correctAnswer3Question);
    process.stdin.emit('keypress', {}, { name: 'return' });
    process.stdin.emit('keypress', {}, { name: 'e' })
    process.stdin.emit('keypress', {}, { name: 'r' })
    const thirdResult = getAllResults()[2];
    const thirdExercise = sessionManager.currentExercise;
    
    await sleep(50);

    const correctAnswersLogCount = output.filter((logLine) => logLine === 'Correct! [voice]').length;
    const wrongAnswersLogCount = output.filter((logLine) => logLine === 'Wrong! [voice]').length;


    expect(correctAnswersLogCount).toBe(2);
    expect(wrongAnswersLogCount).toBe(1);
    expect(mockExit).toHaveBeenCalledWith(0);
    expect(getAllResults().length).toBe(3);
    expect(firstResult.wasCorrect).toBe(true);
    expect(firstResult.exercise.equal(firstExercise)).toBe(true);
    expect(secondResult.wasCorrect).toBe(false);
    expect(secondResult.exercise.equal(secondExercise)).toBe(true);
    expect(thirdResult.wasCorrect).toBe(true);
    expect(thirdResult.exercise.equal(thirdExercise)).toBe(true);

    console.log(output);
  });
});
