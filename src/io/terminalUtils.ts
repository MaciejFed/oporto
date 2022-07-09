import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';

export function preExerciseClear() {
  // eslint-disable-next-line no-console
  clear();
  console.log(chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' })));
}

export function printExerciseExplanation(exerciseExmplanation: string) {
  terminal.moveTo(1, 8, exerciseExmplanation);
}

export function printInBetweenMenu(printExplanation: boolean) {
  terminal.moveTo(1, 14, 'Press key to conitinue...');
  terminal.moveTo(1, 15, 'r - repeat the answer');
  if (printExplanation) {
    terminal.moveTo(1, 16, 'e - print explanation');
  }
}

export function printExerciseBody(exerciseBodyPrefix: string, answer: string, exerciseBodySuffix: string) {
  terminal.moveTo(1, 11, exerciseBodyPrefix + answer + exerciseBodySuffix);
  terminal.moveTo(1 + exerciseBodyPrefix.length + answer.length, 11);
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
