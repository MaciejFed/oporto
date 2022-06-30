import { logger } from '../logger/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from './file';

export function getAllResults(): Result[] {
  const results = readFromFile();
  return JSON.parse(results);
}

export function saveNewResult(newResult: Result) {
  logger.info(`Saving new result ${newResult}`);
  const results = getAllResults();
  results.push(newResult);

  saveToFile(JSON.stringify(results, null, 2));
}
