import chalk from 'chalk';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';
import { formatDate, sleep } from '../common/common';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../priority/priority';
import { ExerciseStatistics, WeekdayStatistics } from '../service/result';
import { AnswerInputType } from './input';
import eventProcessor from '../event/event-processor';
import Output from './output';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ervy = require('ervy');
const { bullet, bg, fg, scatter } = ervy;

export function preExerciseClear() {
  eventProcessor.emit('TERMINAL_CLEARED', 'preExerciseClear');
  const appLogo = chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' }));
  Output.moveTo(0, 0, appLogo);
}

export function printExerciseExplanation(exerciseExplanation: string | undefined) {
  Output.moveTo(1, 8, exerciseExplanation);
}

export function printExerciseDescription(exerciseDescription: string) {
  Output.moveTo(1, 10, exerciseDescription);
}

export function printExerciseBody(exerciseBodyPrefix: string, answer: string, exerciseBodySuffix: string) {
  Output.moveTo(1, 11, exerciseBodyPrefix + answer + exerciseBodySuffix);
  terminal.moveTo(1 + exerciseBodyPrefix.length + answer.length, 11);
}

export function printExerciseFeedback(wasCorrect: boolean, answerInputType: AnswerInputType) {
  Output.moveTo(1, 12, `${wasCorrect ? 'Correct!' : 'Wrong!'} [${answerInputType}]`);
}

const repeatBodyPrefix = 'Repeat: ';

export function printExerciseRepeatBody() {
  Output.moveTo(1, 13, repeatBodyPrefix);
}

export function printExerciseRepeatAnswerKey(answer: string, correctAnswer: string, newKey: string) {
  if (newKey === 'backspace') return;
  const newIndex = answer.length - 1;
  if (
    answer[newIndex] !== undefined &&
    answer[newIndex].toLowerCase() === (correctAnswer[newIndex] !== undefined && correctAnswer[newIndex].toLowerCase())
  ) {
    terminal.green();
  } else {
    terminal.red();
  }
  Output.moveTo(1 + repeatBodyPrefix.length + answer.length - 1, 13, newKey);
  terminal.white();
}

export function printExerciseRepeatAnswer(answer: string, correctAnswer: string) {
  terminal.hideCursor();
  Output.moveTo(1, 13, `${repeatBodyPrefix}`);
  for (let i = 0; i < answer.length; i++) {
    if (
      (answer[i] !== undefined && answer[i].toLowerCase()) ===
      (correctAnswer[i] !== undefined && correctAnswer[i].toLowerCase())
    ) {
      terminal.green();
    } else {
      terminal.red();
    }
    Output.moveTo(repeatBodyPrefix.length + i + 1, 13, answer[i]);
  }
  terminal.white();
  terminal.hideCursor(false);
}

export function printInBetweenMenu(printExplanation: boolean) {
  Output.moveTo(1, 15, 'Press key to continue...');
  Output.moveTo(1, 16, 'r - repeat the answer');
  if (printExplanation) {
    Output.moveTo(1, 17, 'e - print explanation');
  }
}

export function printExerciseBodyWithCorrection(exerciseBodyPrefix: string, answer: string, correctAnswer: string) {
  Output.moveTo(1, 11, exerciseBodyPrefix);
  for (let i = 0; i < correctAnswer.length; i++) {
    if (answer[i] && answer[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
      terminal.green();
    } else {
      terminal.red();
    }
    Output.moveTo(1 + exerciseBodyPrefix.length + i, 11, correctAnswer[i]);
  }
  terminal.white();
}

export async function animateExerciseSummary({
  correctAttempts,
  failedAttempts,
  lastTimeAttempted
}: ExerciseStatistics) {
  const yIndex = 19;
  const animationTime = 1500;
  const barWidth = 50;
  terminal.bold();
  terminal.bold(false);
  Output.moveTo(0, yIndex + 2, `Last Time Attempted: ${formatDate(lastTimeAttempted)}`);
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
  terminal.bold();
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
  terminal.moveTo(0, margin);
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
