import { Command } from 'commander';
import { saveProgress } from './commands/progress';
import { displayStatistics } from './commands/stat';
import { startTestSession } from './commands/test';
import { Language } from './common/language';
import { startRepeatSession } from './commands/repeat';
const program = new Command();

program.name('oporto').description('CLI to learn Portuguese').version('0.1.0');

program
  .command('test')
  .description('Start test session')
  .action((str, options) => {
    startTestSession(Language.Portuguese);
  });

program
  .command('repeat')
  .description('Start test session')
  .action((str, options) => {
    startRepeatSession(Language.Portuguese);
  });

program
  .command('testde')
  .description('Start German Test session')
  .action((str, options) => {
    startTestSession(Language.German);
  });

program
  .command('testpl')
  .description('Start German Test session')
  .action((str, options) => {
    startTestSession(Language.Polish);
  });

program
  .command('random')
  .description('Start test session with random questions')
  .action((str, options) => {
    startTestSession(Language.Portuguese);
  });

program
  .command('stat')
  .description('Show statistics')
  .action((str, options) => {
    displayStatistics(true, Language.Portuguese);
  });

program
  .command('statde')
  .description('Show statistics DE')
  .action((str, options) => {
    displayStatistics(true, Language.German);
  });

program
  .command('statpl')
  .description('Show statistics PL')
  .action((str, options) => {
    displayStatistics(true, Language.German);
  });

program
  .command('progress')
  .description('Save progress')
  .action(() => {
    saveProgress(Language.Portuguese);
  });

program
  .command('progressde')
  .description('Save German progress')
  .action(() => {
    saveProgress(Language.German);
  });

program
  .command('progressde')
  .description('Save Polish progress')
  .action(() => {
    saveProgress(Language.Polish);
  });

program.parse();
