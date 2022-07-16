import { getWeeklyStatistics } from '../service/result';

export function displayStatistics() {
  console.log(JSON.stringify(getWeeklyStatistics()));
}
