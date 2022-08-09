import clear from 'clear';
import { logger } from '../common/logger';
import { generateUniqeExercises } from '../exercise/exercise';
import { displayGenericWeeklyStatistics } from '../io/terminalUtils';
import { getAllResults } from '../repository/resultRepository';
import { getOverallProgres, getWeekdayProgress, getWeekdayStatistics } from '../service/result';

export function displayStatistics(displayProgress: boolean) {
  clear();
  displayGenericWeeklyStatistics(getWeekdayStatistics(), 0);
  if (displayProgress) {
    displayGenericWeeklyStatistics(getWeekdayProgress(), 30);
    console.log(`Overall Progress: ${getOverallProgres()}`);
    logger.info(`Overall Progress: ${getOverallProgres()}`);

    const allResults = getAllResults();
    const allExercises = generateUniqeExercises(20000);
    const notDoneExercises = allExercises.filter(
      (e) => allResults.filter((result) => result.exercise.equal(e)).length === 0
    );
    console.log(`Never Done: ${notDoneExercises.length}`);
  }
}
