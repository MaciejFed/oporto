import fs from 'fs';
import os from 'os';
import path from 'path';
import { logger } from '../common/logger';

const resultDbFilePath = path.join(os.homedir(), 'results_pol.json');
const chartDataJsonPath = path.join(os.homedir(), 'mdev/oporto/progress/data.json');

export function readFromFile(): string {
  logger.info('reading results...');
  return fs.readFileSync(resultDbFilePath, { encoding: 'utf-8' }).toString();
}

export function saveToFile(data: string) {
  logger.info('saving  results...');
  fs.writeFileSync(resultDbFilePath, data);
}

export function saveUniqueWords(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
