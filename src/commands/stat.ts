import { logger } from '../common/logger';
import { displayGenericWeeklyStatistics } from '../io/terminal/terminal-utils';
import { getAllResults } from '../repository/result-repository';
import { getAllUniqueWords } from '../service/progress';
import { getOverallProgres, getWeekdayProgress, getWeekdayStatistics } from '../service/result';
import { generateExercisesForSession } from '../exercise/generator';
import clear from 'clear';
import { Language } from '../common/language';

export function displayStatistics(displayProgress: boolean) {
  clear();
  displayGenericWeeklyStatistics(getWeekdayStatistics(), 0);
  if (displayProgress) {
    displayGenericWeeklyStatistics(getWeekdayProgress(), 30);
    console.log(`Overall Progress: ${getOverallProgres()}`);
    logger.info(`Overall Progress: ${getOverallProgres()}`);

    const allResults = getAllResults();
    const allExercises = generateExercisesForSession(20000, false, Language.Portuguese);
    const notDoneExercises = allExercises.filter(
      (e) => allResults.filter((result) => result.exercise.equal(e)).length === 0
    );
    logger.info(`All unique words: ${getAllUniqueWords().length}`);
    console.log(`Never Done: ${notDoneExercises.length}`);
  }
}
