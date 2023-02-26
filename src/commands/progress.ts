import { saveProgressToFile } from '../io/file';
import { getAllResults } from '../repository/result-repository';
import { progressByDate } from '../service/progress';

export function saveProgress() {
  console.log('Saving progress...');
  const progress = progressByDate(getAllResults());
  saveProgressToFile(JSON.stringify(progress, null, 4));
  console.log('Progress saved...');
}
