import clear from 'clear';
import { logger } from '../common/logger';
import { generateUniqueExercises } from '../exercise/exercise';
import { displayGenericWeeklyStatistics } from '../io/terminalUtils';
import { getAllResults } from '../repository/resultRepository';
import { getAllUniqueWords, progressByDate } from '../service/progress';
import { getOverallProgres, getWeekdayProgress, getWeekdayStatistics } from '../service/result';
import { saveUniqueWords } from '../io/file';

export function displayStatistics(displayProgress: boolean) {
  clear();
  displayGenericWeeklyStatistics(getWeekdayStatistics(), 0);
  if (displayProgress) {
    displayGenericWeeklyStatistics(getWeekdayProgress(), 30);
    console.log(`Overall Progress: ${getOverallProgres()}`);
    logger.info(`Overall Progress: ${getOverallProgres()}`);

    const allResults = getAllResults();
    const allExercises = generateUniqueExercises(20000, false, () => true);
    const notDoneExercises = allExercises.filter(
      (e) => allResults.filter((result) => result.exercise.equal(e)).length === 0
    );
    console.log(`All unique words: ${getAllUniqueWords().length}`);
    console.log(`Never Done: ${notDoneExercises.length}`);
  }
}
