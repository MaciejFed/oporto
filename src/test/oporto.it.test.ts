import { simulateContinueButton, simulateTyping } from './util';
import { withBaseMocks } from './base-mocks';
import { Language } from '../common/language';

const doExercise = (terminal: any, correctly: boolean) => {
  const correctAnswer = terminal.currentExercise?.getCorrectAnswer() || '';
  if (correctly) {
    simulateTyping(correctAnswer, true);
  } else {
    simulateTyping(correctAnswer.slice(1), true);
    simulateTyping(correctAnswer);
  }

  const exercise = terminal.currentExercise;

  simulateContinueButton();

  return exercise;
};

describe.skip('IT', () => {
  const EXERCISES_PER_SESSION = 3;

  const { mockExit, eventProcessor, getAllResults, Terminal } = withBaseMocks();
  const terminal = new Terminal(eventProcessor, Language.Portuguese);

  afterEach(() => {
    process.stdin.removeAllListeners();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('Full Integration Path', () => {
    eventProcessor.emit('APP_STARTED');

    const firstExercise = doExercise(terminal, true);
    const secondExercise = doExercise(terminal, false);
    const thirdExercise = doExercise(terminal, true);

    const results = getAllResults();

    expect(mockExit).toHaveBeenCalledWith(0);
    expect(getAllResults().length).toBe(EXERCISES_PER_SESSION);
    expect(results[0].wasCorrect).toBe(true);
    expect(results[0].exercise.equal(firstExercise)).toBe(true);
    expect(results[1].wasCorrect).toBe(false);
    expect(results[1].exercise.equal(secondExercise)).toBe(true);
    expect(results[2].wasCorrect).toBe(true);
    expect(results[2].exercise.equal(thirdExercise)).toBe(true);

    process.stdin.removeAllListeners();
  });
});
