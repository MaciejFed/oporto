import fs from 'fs';
import os from 'os';
import path from 'path';
import { logger } from '../common/logger';

const resultDbFilePath = path.join(os.homedir(), 'results.json');
const chartDataJsonPath = path.join(os.homedir(), 'dev/oporto/progress/data.json');

export function readFromFile(): string {
  logger.debug('reading results...');
  return fs.readFileSync(resultDbFilePath, { encoding: 'utf-8' }).toString();
}

export function saveToFile(data: string) {
  logger.debug('saving  results...');
  fs.writeFileSync(resultDbFilePath, data);
}

export function saveProgressToFile(data: string) {
  fs.writeFileSync(chartDataJsonPath, data);
}
