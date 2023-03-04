import chalk from 'chalk';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';
import { formatDate, sleep } from '../common/common';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../priority/priority';
import { ExerciseStatistics, Result, WeekdayStatistics } from '../service/result';
import { AnswerInputType } from './input';
import eventProcessor from '../event/event-processor';
import Output from './output';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ervy = require('ervy');
const { bullet, bg, fg, scatter } = ervy;

const AppLogo = chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' }));

const EXERCISE_TOP_MARGIN = 6;
const EXERCISE_BODY_MARGIN = EXERCISE_TOP_MARGIN + 3;
const EXERCISE_REPEAT_BODY_MARGIN = EXERCISE_BODY_MARGIN + 3;
const EXERCISE_MENU_MARGIN = EXERCISE_REPEAT_BODY_MARGIN + 1;

export function preExerciseClear() {
  eventProcessor.emit('TERMINAL_CLEARED', 'preExerciseClear');
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

export function printExampleSentence(wordStartIndex: number, exerciseWord: string, exampleSentence = '') {
  const examplePrefix = 'Example: ';
  Output.bold();
  Output.moveTo(1, EXERCISE_MENU_MARGIN + 4, examplePrefix);
  Output.bold(false);
  Output.moveTo(1 + examplePrefix.length, EXERCISE_MENU_MARGIN + 4, `"${exampleSentence}"`);
  Output.yellow();
  Output.moveTo(1 + examplePrefix.length + wordStartIndex + 1, EXERCISE_MENU_MARGIN + 4, exerciseWord);
  Output.white();
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

export async function animateExerciseSummary({
  correctAttempts,
  failedAttempts,
  lastTimeAttempted,
  firstTimeAttempted
}: ExerciseStatistics) {
  const yIndex = 19;
  const animationTime = 1500;
  const barWidth = 50;
  Output.moveTo(0, yIndex + 2, `Last Time Attempted:  ${formatDate(lastTimeAttempted)}`);
  // Output.moveTo(0, yIndex + 2, `First Time Attempted: ${formatDate(firstTimeAttempted)}`);
  for (let index = 1; index <= correctAttempts + failedAttempts; index++) {
    const goodValue = index <= correctAttempts ? index : correctAttempts;
    const wrongValue = Math.max(0, index - goodValue);
    const totalValue = correctAttempts + failedAttempts;
    const missingAnswers = goodValue - wrongValue * VALUE_WRONG_TO_CORRECT_RATIO;

    const allLabel = `All - ${totalValue}`;
    const correctWrongLabel = `Correct/Wrong ${goodValue}/${wrongValue}(${missingAnswers})`;
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
