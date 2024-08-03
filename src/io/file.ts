import fs from 'fs';
import os from 'os';
import path from 'path';

const chartDataJsonPath = path.join(os.homedir(), 'dev/oporto/progress/data.json');

export interface MovieExample {
  word: string;
  wordStartIndex: number;
  targetLanguage: string;
  english: string;
  englishApi: string;
}

export function saveProgressToFile(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
