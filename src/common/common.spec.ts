import { findWordStartIndex, getRandomElement, removeRepetitionFromBlocks } from './common';

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
    const sentence = 'the brown fox jumps, over the lazy dog';
    it('as first word is sentence', () => {
      const index = findWordStartIndex(sentence, 'the');

      expect(index).toEqual(0);
    });

    it('as middle word is sentence', () => {
      const wordToFind = 'over';
      const index = findWordStartIndex(sentence, wordToFind);
      const word = sentence.substring(index, index + wordToFind.length);

      expect(word).toEqual(wordToFind);
      expect(index).toEqual(21);
    });

    it('as middle word is sentence again', () => {
      const sentencePL = 'Jak być może wiecie, dzisiaj mamy Dzień Kanady."';
      const wordToFind = 'dzień';
      const index = findWordStartIndex(sentencePL, wordToFind);
      const word = sentencePL.substring(index, index + wordToFind.length);

      expect(word.toLowerCase()).toEqual(wordToFind.toLowerCase());
      expect(index).toEqual(34);
    });

    it('as middle word is sentence again 2', () => {
      const sentencePL = 'Dzień jest tak ciemny jak noc.';
      const wordToFind = 'dzień';
      const index = findWordStartIndex(sentencePL, wordToFind);
      const word = sentencePL.substring(index, index + wordToFind.length);

      expect(word.toLowerCase()).toEqual(wordToFind.toLowerCase());
      expect(index).toEqual(0);
    });
  });

  describe('removeRepetitionFromBlocks', () => {
    it('removes repetition from block', () => {
      const arrayWithRepetitions = [2, 1, 2, 4, 6, 2, 8, 9, 0];
      const result = removeRepetitionFromBlocks(arrayWithRepetitions, (a, b) => a === b, 3);

      expect(arrayWithRepetitions.length).toEqual(result.length);
      expect(result).toEqual([2, 1, 4, 2, 6, 8, 2, 9, 0]);
    });

    it('removes repetition from block simple', () => {
      const arrayWithRepetitions = ['a', 'a', 'a', 'a', 'b', 'b', 'b'];
      const result = removeRepetitionFromBlocks(arrayWithRepetitions, (a, b) => a === b, 2);

      expect(arrayWithRepetitions.length).toEqual(result.length);
      expect(result).toEqual(['a', 'b', 'a', 'b', 'a', 'b', 'a']);
    });
  });
});
