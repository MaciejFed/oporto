import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';
import { formatDate, sleep } from '../common/common';
import { logger } from '../common/logger';
import { ExerciseStatistics } from '../service/result';
import { AnswerInputType } from './input';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ervy = require('ervy');
const { bullet, bg } = ervy;

export function preExerciseClear() {
  // eslint-disable-next-line no-console
  clear();
  console.log(chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' })));
}

export function printExerciseExplanation(exerciseExmplanation: string) {
  terminal.moveTo(1, 8, exerciseExmplanation);
}

export function printExerciseDescription(exerciseDescription: string) {
  terminal.moveTo(1, 10, exerciseDescription);
}

export function printExerciseBody(exerciseBodyPrefix: string, answer: string, exerciseBodySuffix: string) {
  terminal.moveTo(1, 11, exerciseBodyPrefix + answer + exerciseBodySuffix);
  terminal.moveTo(1 + exerciseBodyPrefix.length + answer.length, 11);
}

export function printExerciseFeedback(wasCorrect: boolean, answerInputType: AnswerInputType) {
  terminal.moveTo(1, 12, `${wasCorrect ? 'Correct!' : 'Wrong!'} [${answerInputType}]`);
}

export function printExerciseRepeatBody(answer: string, correctAnswer: string) {
  const prefix = 'Repeat: ';
  terminal.moveTo(1, 13, `${prefix}${answer}`);
  for (let i = 0; i < answer.length; i++) {
    if (
      (answer[i] !== undefined && answer[i].toLowerCase()) ===
      (correctAnswer[i] !== undefined && correctAnswer[i].toLowerCase())
    ) {
      terminal.green();
    } else {
      terminal.red();
    }
    terminal.moveTo(prefix.length + i + 1, 13, answer[i]);
  }
  terminal.white();
}

export function printInBetweenMenu(printExplanation: boolean) {
  terminal.moveTo(1, 15, 'Press key to continue...');
  terminal.moveTo(1, 16, 'r - repeat the answer');
  if (printExplanation) {
    terminal.moveTo(1, 17, 'e - print explanation');
  }
}

export function printExerciseBodyWithCorrection(exerciseBodyPrefix: string, answer: string, correctAnswer: string) {
  terminal.moveTo(1, 11, exerciseBodyPrefix);
  for (let i = 0; i < correctAnswer.length; i++) {
    if (answer[i] && answer[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
      terminal.green();
    } else {
      terminal.red();
    }
    terminal.moveTo(1 + exerciseBodyPrefix.length + i, 11, correctAnswer[i]);
  }
  terminal.white();
}

export async function animateExerciseSummary({
  correctAttempts,
  failedAttempts,
  lastTimeAttempted
}: ExerciseStatistics) {
  const yIndex = 19;
  const animationTime = 2000;
  const barWidth = 50;
  terminal.bold();
  terminal.moveTo(0, yIndex, 'Last Month Results:');
  terminal.bold(false);
  terminal.moveTo(0, yIndex + 2, `Last Time Attempted: ${formatDate(lastTimeAttempted)}`);
  for (let index = 1; index <= correctAttempts + failedAttempts; index++) {
    const goodValue = index <= correctAttempts ? index : correctAttempts;
    const wrongValue = Math.max(0, index - goodValue);
    const totalValue = correctAttempts + failedAttempts;
    let bulletData = [
      { key: `All - ${totalValue}`, value: totalValue, style: bg('blue'), barWidth: 1 },
      { key: `Correct/Wrong ${goodValue}/${wrongValue}`, value: index, style: bg('red'), barWidth: 1 }
    ];
    terminal.moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    bulletData = [
      { key: `All - ${totalValue}`, value: totalValue, style: bg('blue'), barWidth: 1 },
      { key: `Correct/Wrong ${goodValue}/${wrongValue}`, value: goodValue, style: bg('green'), barWidth: 1 }
    ];
    terminal.moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    await sleep(animationTime / totalValue);
  }
}
