import { displayWeeklyStatistics } from '../io/terminalUtils';
import { getWeekdayStatistics, getWeeklyStatistics } from '../service/result';

export function displayStatistics() {
  displayWeeklyStatistics(getWeekdayStatistics());
}
