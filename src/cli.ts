import { Command } from 'commander';
import { displayStatistics } from './commands/stat';
import { startTestSession } from './commands/test';
import { logger } from './common/logger';
const program = new Command();

program.name('oporto').description('CLI to learn Portuguese').version('0.1.0');

program
  .command('test')
  .description('Start test session')
  .action((str, options) => {
    startTestSession();
  });

program
  .command('stat')
  .description('Show statistics')
  .action((str, options) => {
    displayStatistics(true);
  });

program.parse();
