import { Command } from 'commander';
import { saveProgress } from './commands/progress';
import { startSpeakSession } from './commands/speaking';
import { displayStatistics } from './commands/stat';
import { startTestSession } from './commands/test';
import { Language } from './common/language';
const program = new Command();

program.name('oporto').description('CLI to learn Portuguese').version('0.1.0');

program
  .command('test')
  .description('Start test session')
  .action((str, options) => {
    startTestSession(Language.Portuguese);
  });

program
  .command('testde')
  .description('Start German Test session')
  .action((str, options) => {
    startTestSession(Language.German);
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
    startTestSession(Language.Portuguese);
  });

program
  .command('stat')
  .description('Show statistics')
  .action((str, options) => {
    displayStatistics(true, Language.Portuguese);
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

program.parse();
