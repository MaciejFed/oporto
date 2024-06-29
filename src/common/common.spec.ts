import { findWordStartIndex, getRandomElement } from './common';

describe('Common', () => {
  describe('getRandomElement', () => {
    it('first element', () => {
      const testNumber = 5;
      const firstElement = getRandomElement([testNumber], 10);

      expect(firstElement).toEqual(testNumber);
    });

    it('first element long array', () => {
      const testNumber = 5;
      const firstElement = getRandomElement([testNumber, 2, 3, 4, 6, 7], 1);

      expect(firstElement).toEqual(testNumber);
    });
  });

  describe('findWordStartIndex', () => {
    const sentence = 'the brown fox jumps over the lazy dog';
    it('as first word is sentence', () => {
      const index = findWordStartIndex(sentence, 'the');

      expect(index).toEqual(0);
    });

    it('as middle word is sentence', () => {
      const wordToFind = 'over';
      const index = findWordStartIndex(sentence, wordToFind);
      const word = sentence.substring(index, index + wordToFind.length);

      expect(word).toEqual(wordToFind);
      expect(index).toEqual(20);
    });
  });
});
