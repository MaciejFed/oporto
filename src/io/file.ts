import fs from 'fs';
import os from 'os';
import path from 'path';
import { logger } from '../common/logger';
import * as readline from 'readline';
import { getAllUniqueWordsConjugated } from '../service/progress/progress';
import { translateToEnglish } from '../client/client';
import { Language } from '../common/language';

const chartDataJsonPath = path.join(os.homedir(), 'mdev/oporto/progress/data.json');
const ptExamplesPath = path.join(os.homedir(), 'pt/pt.txt');
const deExamplesPath = path.join(os.homedir(), 'de/de.txt');
const enExamplesPath = path.join(os.homedir(), 'pt/en.txt');

export interface MovieExample {
  portuguese: string;
  english: string;
  englishApi: string;
}

export function saveProgressToFile(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
