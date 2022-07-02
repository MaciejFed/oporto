import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';

export function preExerciseClear() {
  // eslint-disable-next-line no-console
  clear();
  console.log(chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' })));
}

export function printSampleSentence() {
  terminal.moveTo(1, 8, 'Example: TODO');
}

export function printInBetweenMenu() {
  terminal.moveTo(1, 14, 'Press key to conitinue...');
  terminal.moveTo(1, 15, 'e - example sentence');
  terminal.moveTo(1, 16, 's - say sample sentence');
}

export function printExerciseBody(exerciseBody: string, answer: string) {
  terminal.moveTo(1, 11, exerciseBody + answer);
}

export function printExerciseBodyWithCorrection(exerciseBody: string, answer: string, correctAnswer: string) {
  terminal.moveTo(1, 11, exerciseBody);
  for (let i = 0; i < correctAnswer.length; i++) {
    if (answer[i] === correctAnswer[i]) {
      terminal.green();
    } else {
      terminal.red();
    }
    terminal.moveTo(1 + exerciseBody.length + i, 11, correctAnswer[i]);
  }
  terminal.white();
}
