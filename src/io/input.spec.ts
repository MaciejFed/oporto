import { Key } from 'readline';
import { EventProcessor } from '../event/event-processor';
import { ANSWER_SUBMITTED, APP_FINISHED, HEARING_EXERCISE_REPEAT, KEY_PRESSED } from '../event/events';
import Input from './input';

const mockEmit = jest.fn();

jest.mock('../event/event-processor', () => {
  return {
    EventProcessor: jest.fn().mockImplementation(() => {
      return { emit: mockEmit };
    })
  };
});

jest.mock('readline', () => {
  return {
    emitKeypressEvents: jest.fn()
  };
});

describe('Input', () => {
  let input: Input;

  beforeEach(() => {
    input = new Input(new EventProcessor());
    mockEmit.mockClear();
  });

  it('should emit HEARING_EXERCISE_REPEAT when key sequence is "."', () => {
    // @ts-ignore
    input.handleKeypress({ sequence: '.' });
    expect(mockEmit).toHaveBeenCalledWith(HEARING_EXERCISE_REPEAT);
  });

  it('should emit APP_FINISHED when key name is "escape"', () => {
    // @ts-ignore
    input.handleKeypress({ name: 'escape' });
    expect(mockEmit).toHaveBeenCalledWith(APP_FINISHED);
  });

  it('should emit ANSWER_SUBMITTED when key name is "return" and inputTimes is not empty', () => {
    input.inputTimes.push(new Date());
    // @ts-ignore
    input.handleKeypress({ name: 'return' });
    expect(mockEmit).toHaveBeenCalledWith(ANSWER_SUBMITTED, expect.any(String));
  });

  it('should not emit ANSWER_SUBMITTED when key name is "return" and inputTimes is empty', () => {
    // @ts-ignore
    input.handleKeypress({ name: 'return' });
    expect(mockEmit).not.toHaveBeenCalledWith(ANSWER_SUBMITTED, expect.any(String));
  });

  it('should emit ANSWER_SUBMITTED with input type when key name is "return"', () => {
    input.inputTimes = [new Date(0), new Date(5)];
    // @ts-ignore
    input.handleKeypress({ name: 'return' });
    expect(mockEmit).toHaveBeenCalledWith(ANSWER_SUBMITTED, 'voice');
  });

  it('should emit KEY_PRESSED with "backspace" when key name is "backspace"', () => {
    // @ts-ignore
    input.handleKeypress({ name: 'backspace' });
    expect(mockEmit).toHaveBeenCalledWith(KEY_PRESSED, 'backspace');
  });

  it('should emit KEY_PRESSED with empty string when key sequence is " " and inputTimes length is 0', () => {
    input.handleKeypress({ sequence: ' ', name: 'space' });
    expect(mockEmit).toHaveBeenCalledWith(KEY_PRESSED, '');
  });

  it('should emit KEY_PRESSED with key sequence when inputTimes length is not 0 and key sequence is not " "', () => {
    input.inputTimes = [new Date(0)];
    // @ts-ignore
    input.handleKeypress({ sequence: 'a' });
    expect(mockEmit).toHaveBeenCalledWith(KEY_PRESSED, 'a');
  });
});
