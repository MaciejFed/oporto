import { Readable } from 'stream';
import { findMatchingLines } from './find-matching-lines';

const createMockStream = (lines: string[]) => {
  return new Readable({
    read() {
      lines.forEach((line) => this.push(`${line}\n`));
      this.push(null);
    }
  });
};

describe('findMatchingLines', () => {
  test('finds matching lines within max length', async () => {
    const wordToFind = 'wordToFind';
    const targetLines = [
      `This is a test line with ${wordToFind}`,
      'Another line without the word',
      `Short ${wordToFind.toUpperCase()} here`
    ];
    const enLines = ['Line one translation', 'Line two translation', 'Line three translation'];
    const targetStream = createMockStream(targetLines);
    const enStream = createMockStream(enLines);

    const result = await findMatchingLines(targetStream, enStream, wordToFind);

    expect(result).toEqual({
      matchingLines: [`This is a test line with ${wordToFind}`, `Short ${wordToFind.toUpperCase()} here`],
      matchingLinesEn: ['Line one translation', 'Line three translation']
    });
  });

  test('does not find lines without the word', async () => {
    const targetLines = [
      'This is a test line without the keyword',
      'Another line without the word',
      'Yet another line'
    ];
    const enLines = ['Line one translation', 'Line two translation', 'Line three translation'];
    const targetStream = createMockStream(targetLines);
    const enStream = createMockStream(enLines);

    const result = await findMatchingLines(targetStream, enStream, 'wordToFind');

    expect(result).toEqual({
      matchingLines: [],
      matchingLinesEn: []
    });
  });

  test('ignores lines exceeding max length', async () => {
    const targetLines = [
      'This is a very long test line that should not be considered wordToFind making space making space making',
      'Short wordToFind here',
      'Another long line that exceeds the maximum length wordToFind just to be sure - making space'
    ];
    const enLines = ['Line one translation', 'Line two translation', 'Line three translation'];
    const targetStream = createMockStream(targetLines);
    const enStream = createMockStream(enLines);

    const result = await findMatchingLines(targetStream, enStream, 'wordToFind');

    expect(result).toEqual({
      matchingLines: ['Short wordToFind here'],
      matchingLinesEn: ['Line two translation']
    });
  });

  test('reads specified number of lines', async () => {
    const targetLines = ['First line with wordToFind', 'Second line with wordToFind', 'Third line with wordToFind'];
    const enLines = ['First translation', 'Second translation', 'Third translation'];
    const targetStream = createMockStream(targetLines);
    const enStream = createMockStream(enLines);

    const result = await findMatchingLines(targetStream, enStream, 'wordToFind', 2);

    expect(result).toEqual({
      matchingLines: ['First line with wordToFind', 'Second line with wordToFind'],
      matchingLinesEn: ['First translation', 'Second translation']
    });
  });
});
