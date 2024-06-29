import { findWordExampleLines } from './find-word-example-lines';

describe('findWordExampleLines', () => {
  test('processes lines with mixed known and unknown words', async () => {
    const linesTargetLanguage = [
      '- Dies ist ein Testsatz.',
      'Eine andere Beispielzeile!',
      '- Letzte Zeile mit gemischten Wörtern.'
    ];
    const linesTranslations = ['This is a test sentence.', 'Another example line!', '- Final line with mixed words.'];
    const allKnownWords = [
      'dies',
      'ist',
      'ein',
      'testsatz',
      'eine',
      'andere',
      'beispielzeile',
      'letzte',
      'zeile',
      'mit'
    ];

    const result = await findWordExampleLines(linesTargetLanguage, linesTranslations, allKnownWords);

    expect(result).toEqual([
      {
        lineTargetLanguage: 'Dies ist ein Testsatz.',
        lineTranslation: 'This is a test sentence.',
        knownWordsCount: 4,
        unknownWordsCount: 0,
        knownWords: ['dies', 'ist', 'ein', 'testsatz'],
        unknownWords: [],
        wordRatio: 4
      },
      {
        lineTargetLanguage: 'Eine andere Beispielzeile!',
        lineTranslation: 'Another example line!',
        knownWordsCount: 3,
        unknownWordsCount: 0,
        knownWords: ['eine', 'andere', 'beispielzeile'],
        unknownWords: [],
        wordRatio: 3
      },
      {
        lineTargetLanguage: 'Letzte Zeile mit gemischten Wörtern.',
        lineTranslation: 'Final line with mixed words.',
        knownWordsCount: 3,
        unknownWordsCount: 2,
        knownWords: ['letzte', 'zeile', 'mit'],
        unknownWords: ['gemischten', 'wörtern'],
        wordRatio: 1
      }
    ]);
  });

  test('sorts lines by word ratio and length', async () => {
    const linesTargetLanguage = ['Kurze Zeile', 'Mittlere Zeile'];
    const linesTranslations = ['Short line', 'Medium line'];
    const allKnownWords = ['kurze', 'zeile', 'mittlere'];

    const result = await findWordExampleLines(linesTargetLanguage, linesTranslations, allKnownWords);

    expect(result).toEqual([
      {
        lineTargetLanguage: 'Mittlere Zeile',
        lineTranslation: 'Medium line',
        knownWordsCount: 2,
        unknownWordsCount: 0,
        knownWords: ['zeile', 'mittlere'],
        unknownWords: [],
        wordRatio: 2
      },
      {
        lineTargetLanguage: 'Kurze Zeile',
        lineTranslation: 'Short line',
        knownWordsCount: 2,
        unknownWordsCount: 0,
        knownWords: ['kurze', 'zeile'],
        unknownWords: [],
        wordRatio: 2
      }
    ]);
  });
});
