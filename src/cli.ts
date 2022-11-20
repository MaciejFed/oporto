import { Command } from 'commander';
import { startSpeakSession } from './commands/speaking';
import { displayStatistics } from './commands/stat';
import { startTestSession } from './commands/test';
const program = new Command();

program.name('pol').description('CLI to learn Polish').version('0.1.0');

program
  .command('test')
  .description('Start test session')
  .action((str, options) => {
    startTestSession(true);
  });

program
  .command('speak')
  .description('Start speak session')
  .action((str, options) => {
    startSpeakSession();
  });

program
  .command('random')
  .description('Start test session with random questions')
  .action((str, options) => {
    startTestSession(false);
  });

program
  .command('stat')
  .description('Show statistics')
  .action((str, options) => {
    displayStatistics(true);
  });

program.parse();
