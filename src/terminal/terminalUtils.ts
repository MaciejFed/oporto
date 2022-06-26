import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { terminal } from 'terminal-kit';
import { getSampleSentence } from '../service/sentence';

export function preExerciseClear() {
  // eslint-disable-next-line no-console
  clear();
  console.log(
    chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' }))
  );
}

export function printSampleSentence() {
  terminal.moveTo(1, 9, getSampleSentence());
}

export function printInBetweenMenu() {
  terminal.moveTo(1, 14, 'Press key to conitinue...');
  terminal.moveTo(1, 15, 'e - example sentence');
  terminal.moveTo(1, 16, 's - say sample sentence');
}
