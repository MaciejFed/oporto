import { string } from 'yargs';
import { translationTypes } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { saveProgressToFile } from '../io/file';
import { getAllResults } from '../repository/result-repository';
import { getAllUniqueWords, progressByDate } from '../service/progress';

export function saveProgress() {
  console.log('Saving progress...');
  console.log(`All unique words: ${getAllUniqueWords().length}`);
  const progress = progressByDate(getAllResults());
  saveProgressToFile(JSON.stringify(progress, null, 4));
  console.log('Progress saved...');
}
