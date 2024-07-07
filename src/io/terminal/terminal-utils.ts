import chalk from 'chalk';
import figlet from 'figlet';
import { formatDate, sleep } from '../../common/common';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../../priority/priority';
import { ExerciseStatistics, Result, WeekdayStatistics } from '../../service/result';
import Output, { Color, ColoredText } from '../output';
import { Person, Verb } from '../../repository/exercises-repository';
import { StandardConjugation } from '../../service/verb/verb';
import { clear } from 'console';
import { GermanPersonWithInf, parseGermanVerb } from '../../service/conjugation/german-conjugation';
import { GermanVerb } from '../../repository/german-exercises-repository';
import { ProgressType } from '../../service/progress/progress';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ervy = require('ervy');
const { bullet, bg, fg, scatter } = ervy;

const AppLogo = chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' }));

const EXERCISE_TOP_MARGIN = 6;
const EXERCISE_BODY_MARGIN = EXERCISE_TOP_MARGIN + 3;
const EXERCISE_REPEAT_BODY_MARGIN = EXERCISE_BODY_MARGIN + 3;
const EXERCISE_MENU_MARGIN = EXERCISE_REPEAT_BODY_MARGIN + 1;

export type AnswerInputType = 'keyboard' | 'voice';

export function preExerciseClear() {
  clear();
  Output.moveTo(0, 0, AppLogo);
}

export function printExerciseTranslation(exerciseTranslation: string | undefined) {
  Output.moveTo(1, EXERCISE_TOP_MARGIN, exerciseTranslation);
}

export function printExerciseDescription(exerciseDescription: string) {
  Output.moveTo(1, EXERCISE_TOP_MARGIN + 2, exerciseDescription);
}

export function printExerciseBody(exerciseBodyPrefix: string, answer: string, exerciseBodySuffix: string) {
  Output.moveTo(1, EXERCISE_BODY_MARGIN, exerciseBodyPrefix + answer + exerciseBodySuffix);
  Output.moveCursor(1 + exerciseBodyPrefix.length + answer.length, EXERCISE_BODY_MARGIN);
}

export function printExerciseFeedback(wasCorrect: boolean, answerInputType: AnswerInputType) {
  Output.moveTo(1, EXERCISE_BODY_MARGIN + 1, `${wasCorrect ? 'Correct!' : 'Wrong!'} [${answerInputType}]`);
}

const repeatBodyPrefix = 'Repeat: ';

export function printExerciseRepeatBody() {
  Output.moveTo(1, EXERCISE_REPEAT_BODY_MARGIN, repeatBodyPrefix);
}

export function printExerciseRepeatAnswerKey(answer: string, correctAnswer: string, newKey: string) {
  if (newKey === 'backspace') return;
  const newIndex = answer.length - 1;
  if (
    answer[newIndex] !== undefined &&
    answer[newIndex].toLowerCase() === (correctAnswer[newIndex] !== undefined && correctAnswer[newIndex].toLowerCase())
  ) {
    Output.green();
  } else {
    Output.red();
  }
  Output.moveTo(1 + repeatBodyPrefix.length + answer.length - 1, EXERCISE_REPEAT_BODY_MARGIN, newKey);
  Output.white();
}

export function printExerciseRepeatAnswer(answer: string, correctAnswer: string) {
  Output.hideCursor();
  Output.moveTo(1, EXERCISE_REPEAT_BODY_MARGIN, `${repeatBodyPrefix}`);
  for (let i = 0; i < answer.length; i++) {
    if (
      (answer[i] !== undefined && answer[i].toLowerCase()) ===
      (correctAnswer[i] !== undefined && correctAnswer[i].toLowerCase())
    ) {
      Output.green();
    } else {
      Output.red();
    }
    Output.moveTo(repeatBodyPrefix.length + i + 1, EXERCISE_REPEAT_BODY_MARGIN, answer[i]);
  }
  Output.white();
  Output.hideCursor(false);
}

export function printInBetweenMenu(printTranslation: boolean) {
  Output.moveTo(1, EXERCISE_MENU_MARGIN, 'Press key to continue...');
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 1, 'r - repeat the answer');
  if (printTranslation) {
    Output.moveTo(1, EXERCISE_MENU_MARGIN + 2, 't - print translation');
  }
}

export function printExampleSentence(wordStartIndex: number, exerciseWord: string, exampleSentence: string) {
  const examplePrefix = 'Example: ';
  Output.bold();
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 4, examplePrefix);
  Output.bold(false);
  Output.moveToColored(
    1 + examplePrefix.length,
    EXERCISE_MENU_MARGIN + 4,
    new ColoredText(
      `"${exampleSentence}"`,
      Array(wordStartIndex + 1)
        .fill(Color.W)
        .concat(Array(exerciseWord.length).fill(Color.Y).concat(Array(100).fill(Color.W)))
    )
  );
}

export function logSaved(status: 'Saving example...' | 'Example saved.') {
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 5, Array(20).join(' '));
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 5, status);
}

export function printExampleTranslation(
  exampleTranslationPrefix: string | undefined,
  exampleTranslation: string | undefined
) {
  Output.moveTo(
    1,
    EXERCISE_MENU_MARGIN + 5,
    '                                                                          '
  );
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 5, `${exampleTranslationPrefix}  ${exampleTranslation}`);
}

type FeedbackType = 'CorrectAnswer' | 'ActualAnswer';

export function printWithFeedback(
  x: number,
  y: number,
  answer: string,
  correctAnswer: string,
  answerType: FeedbackType,
  prefix?: string
) {
  const exerciseBodyPrefix = prefix ? prefix : '';
  const feedbackWord = answerType === 'CorrectAnswer' ? correctAnswer : answer;
  Output.moveTo(x, y, exerciseBodyPrefix);
  for (let i = 0; i < feedbackWord.length; i++) {
    if (answer[i] && correctAnswer[i] && answer[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
      Output.green();
    } else {
      Output.red();
    }
    Output.moveTo(x + exerciseBodyPrefix.length + i, y, feedbackWord[i]);
  }
  Output.white();
}

export function printExerciseBodyWithCorrection(exerciseBodyPrefix: string, answer: string, correctAnswer: string) {
  printWithFeedback(1, EXERCISE_BODY_MARGIN, answer, correctAnswer, 'CorrectAnswer', exerciseBodyPrefix);
}

export function printAllAnswers(results: Result[]) {
  const HISTORY_X_MARGIN = 40;
  const HISTORY_Y_MARGIN = EXERCISE_BODY_MARGIN - 1;
  const HISTORY_ANSWERS_LIMIT = 5;
  Output.bold();
  Output.moveTo(HISTORY_X_MARGIN, HISTORY_Y_MARGIN, 'Answers History:');
  Output.bold(false);
  results.reverse().forEach(({ answer, exercise }, index) => {
    if (index < HISTORY_ANSWERS_LIMIT)
      printWithFeedback(
        HISTORY_X_MARGIN,
        HISTORY_Y_MARGIN + 2 + index,
        answer,
        exercise.getCorrectAnswer(),
        'ActualAnswer',
        `${index + 1}. `
      );
  });
}

export function printAllVerbConjugationsDE({ infinitive, presentSimple, pastPerfect }: Verb | GermanVerb) {
  const CONJUGATION_X_MARGIN = 60;
  const CONJUGATION_Y_MARGIN = EXERCISE_BODY_MARGIN - 1;
  Output.bold();
  Output.moveTo(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN, 'Cojugations:');
  Output.bold(false);
  // Output.moveTo(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN + 1, `Infinitive: [${infinitive}]`);
  const longestConjugationSize = Object.keys(presentSimple).reduce((prev, curr) => {
    // @ts-ignore
    const currSize = presentSimple[curr].length;
    return prev > currSize ? prev : currSize;
  }, 0);

  const parsedVerb = parseGermanVerb({ infinitive, presentSimple } as GermanVerb);
  ['Inf'].concat(Object.keys(presentSimple)).forEach((person, index) => {
    // @ts-ignore
    const past = pastPerfect ? pastPerfect[person] : '';
    const personText = person.includes('/') ? `${person.substring(0, person.indexOf('/'))}:` : `${person}:`;
    Output.moveToColored(
      CONJUGATION_X_MARGIN,
      CONJUGATION_Y_MARGIN + 2 + index,
      parsedVerb[person.replace('/', '').replace('/', '') as GermanPersonWithInf]
    );
  });
}

export function printAllVerbConjugations({ verb: { infinitive, presentSimple, pastPerfect } }: StandardConjugation) {
  const CONJUGATION_X_MARGIN = 60;
  const CONJUGATION_Y_MARGIN = EXERCISE_BODY_MARGIN - 1;
  // eslint-disable-next-line no-nested-ternary
  const getStatusEmoji = (status?: string) => (status ? (status === ProgressType.DONE ? ' ✅' : ' ❌') : '');
  Output.bold();
  Output.moveTo(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN, 'Cojugations:');
  Output.bold(false);
  Output.moveTo(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN + 1, `Infinitive: [${infinitive}]`);
  const longestConjugationSize = Object.values(Person).reduce((prev, curr) => {
    const currSize = presentSimple![curr as Person].conjugation.length;
    return prev > currSize ? prev : currSize;
  }, 0);

  Object.values(Person).forEach((person, index) => {
    const present = presentSimple![person as Person];
    const past = pastPerfect ? pastPerfect[person as Person] : { conjugation: '' };
    const personText = (person.includes('/') ? `${person.substring(0, person.indexOf('/'))}:` : `${person}:`).padEnd(5);
    Output.white();
    Output.moveTo(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN + 2 + index, personText);
    if (!present.isStandard) {
      Output.yellow();
    }
    const text = ` ${presentSimple![person as Person].conjugation
      .concat(getStatusEmoji(presentSimple![person as Person].status))
      .padEnd(longestConjugationSize + 2)}`;
    Output.moveTo(CONJUGATION_X_MARGIN + personText.length, CONJUGATION_Y_MARGIN + 2 + index, text);
    Output.white();
    Output.moveTo(CONJUGATION_X_MARGIN + personText.length + text.length, CONJUGATION_Y_MARGIN + 2 + index, '|');
    // @ts-ignore
    if (past && !past.isStandard) {
      Output.yellow();
    } else {
      Output.white();
    }
    Output.moveTo(
      CONJUGATION_X_MARGIN + personText.length + text.length + 1,
      CONJUGATION_Y_MARGIN + 2 + index,
      // @ts-ignore
      past.conjugation.concat(getStatusEmoji(past.status))
    );
    Output.white();
  });
}

export function printNewWordLearned(newWord: string) {
  const text = 'New word learnt! ';
  Output.bold();
  Output.moveTo(0, 19, text);
  Output.green();
  Output.moveTo(text.length + 1, 19, newWord);
  Output.bold(false);
  Output.white();
}

export async function animateExerciseSummary({
  correctAttempts,
  failedAttempts,
  lastTimeAttempted,
  firstTimeAttempted,
  baseWordAnswersMissing
}: ExerciseStatistics) {
  const yIndex = 19;
  const animationTime = 1500;
  const barWidth = 50;
  // Output.moveTo(0, yIndex + 1, `First Time Attempted: ${formatDate(firstTimeAttempted)}`);
  Output.moveTo(0, yIndex + 2, `Last Time Attempted:  ${formatDate(lastTimeAttempted)}`);
  // Output.moveTo(0, yIndex + 2, `First Time Attempted: ${formatDate(firstTimeAttempted)}`);
  const totalValue = Math.max(failedAttempts * VALUE_WRONG_TO_CORRECT_RATIO, correctAttempts);
  for (let index = 1; index <= totalValue; index++) {
    const goodValue = index <= correctAttempts ? index : correctAttempts;
    const wrongValue = Math.max(0, index - goodValue);
    const totalValueLabel = correctAttempts + failedAttempts;
    const missingAnswers = goodValue - failedAttempts * VALUE_WRONG_TO_CORRECT_RATIO;

    const allLabel = `All - ${totalValueLabel} `;
    const correctWrongLabel = `Correct/Wrong ${goodValue}/${failedAttempts} (${missingAnswers})`;
    let bulletData = [
      { key: allLabel, value: totalValue, style: bg('blue'), barWidth: 1 },
      { key: correctWrongLabel, value: index, style: bg('red'), barWidth: 1 }
    ];
    Output.moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    bulletData = [
      { key: allLabel, value: totalValue, style: bg('blue'), barWidth: 1 },
      {
        key: correctWrongLabel,
        value: goodValue,
        style: bg('green'),
        barWidth: 1
      }
    ];
    Output.moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    await sleep(animationTime / totalValue);
  }
}

export function displayGenericWeeklyStatistics(weeklyStatistics: WeekdayStatistics[], margin: number) {
  if (weeklyStatistics.length === 0) return;
  const maxYValue = Math.max(...weeklyStatistics.flatMap((stat) => stat.points.map((point) => point.value)));
  const yGap = Math.ceil(maxYValue / 24);
  const gapStyle = '-------';
  const gapStyleLength = gapStyle.length - 3;
  Output.bold();
  const graphData = weeklyStatistics
    .map((weeklyStatistic) => [
      ...weeklyStatistic.points.map((point) =>
        Object.assign({
          key: point.keyName,
          value: [weeklyStatistic.weekday * gapStyleLength, Math.round(point.value / yGap)],
          style: fg(point.keyMarker.color, `${point.keyMarker.marker} ${point.value}`)
        })
      )
    ])
    .flatMap((d) => d)
    .filter((data) => data.value[1] !== 0);
  graphData.unshift(
    ...weeklyStatistics[0].points.map((point) =>
      Object.assign({
        key: point.keyName,
        value: [weeklyStatistics[0].weekday * gapStyleLength, Math.round(point.value / yGap)],
        style: fg(point.keyMarker.color, point.keyMarker.marker)
      })
    )
  );
  Output.moveCursor(0, margin);
  console.log(
    scatter(graphData, {
      hAxis: ['+', gapStyle, '--->'],
      hName: 'Day',
      vName: 'Total',
      legendGap: 18,
      width: 7,
      height: 24,
      ratio: [1, yGap],
      hGap: 1
    })
  );
}
