import { Other } from '../repository/exercises-repository';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { printExampleSentence, printWithFeedback } from './terminal-utils';
import Output from './output';

describe('Terminal Utils', () => {
  it('Should Not Print Any Red Letters On Correct Answer', () => {
    const correctAnswer = 'Janeiro';
    const other: Other = {
      english: 'January',
      portuguese: correctAnswer
    };
    OtherTranslationExercise.new(other, 'toPortuguese');

    printWithFeedback(0, 0, correctAnswer, correctAnswer, 'ActualAnswer');

    const output = Output.getOutput().substring(0, correctAnswer.length);
    const colorOutput = Output.getColorOutput().substring(0, correctAnswer.length);

    expect(output).toEqual(correctAnswer);
    expect(colorOutput).toEqual(
      correctAnswer
        .split('')
        .map(() => 'G')
        .join('')
    );
  });

  it('Should Print Whole Answer Even If Longer Than Correct', () => {
    const correctAnswer = 'Janeiro';
    const other: Other = {
      english: 'January',
      portuguese: correctAnswer
    };
    OtherTranslationExercise.new(other, 'toPortuguese');

    const wrongPostfix = 'wrong';
    const answerGiven = `${correctAnswer}${wrongPostfix}`;
    printWithFeedback(0, 0, answerGiven, correctAnswer, 'ActualAnswer');

    const output = Output.getOutput().substring(0, answerGiven.length);
    const colorOutput = Output.getColorOutput().substring(0, answerGiven.length);

    expect(output).toEqual(answerGiven);
    expect(colorOutput).toEqual(
      correctAnswer
        .split('')
        .map(() => 'G')
        .join('') +
        wrongPostfix
          .split('')
          .map(() => 'R')
          .join('')
    );
  });

  it('Should Print Whole Answer Even If Shorter Than Correct', () => {
    const correctAnswer = 'Janeiro';
    const other: Other = {
      english: 'January',
      portuguese: correctAnswer
    };
    OtherTranslationExercise.new(other, 'toPortuguese');

    const answerGiven = correctAnswer.substring(0, correctAnswer.length - 1);
    printWithFeedback(0, 0, answerGiven, correctAnswer, 'ActualAnswer');

    const output = Output.getOutput().substring(0, answerGiven.length);
    const colorOutput = Output.getColorOutput().substring(0, answerGiven.length);

    expect(output).toEqual(answerGiven);
    expect(colorOutput).toEqual(
      answerGiven
        .split('')
        .map(() => 'G')
        .join('')
    );
  });

  it('Should Print Example With Yellow Word Included', () => {
    const word = 'ver';
    const exampleSentence = `Estou a ${word} a televisão`;

    printExampleSentence(8, 'ver', exampleSentence);

    const colorOutput = Output.getColorOutput()
      .split('')
      .filter((l) => l !== ' ' && l !== '\n')
      .join('');

    expect(
      colorOutput.includes(
        'Estou a '
          .split('')
          .map(() => 'W')
          .join('') +
          word
            .split('')
            .map(() => 'Y')
            .join('') +
          'a televisão'
            .split('')
            .map(() => 'W')
            .join('')
      )
    ).toBeTruthy();
  });
});
