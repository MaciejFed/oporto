import clear from 'clear';
import { sleep } from '../common/common';
import { generateUniqeExercises } from '../exercise/exercise';
import { displayGenericWeeklyStatistics } from '../io/terminalUtils';
import { getProgress } from '../service/progress';
import { getWeekdayProgress, getWeekdayStatistics, getWeeklyStatistics } from '../service/result';

export function displayStatistics() {
  clear();
  displayGenericWeeklyStatistics(getWeekdayStatistics());
}
