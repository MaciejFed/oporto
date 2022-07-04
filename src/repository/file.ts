import fs from 'fs';
import os from 'os';
import path from 'path';

const resultDbFilePath = path.join(os.homedir(), 'results.json');

export function readFromFile(): string {
  return fs.readFileSync(resultDbFilePath, { encoding: 'utf-8' }).toString();
}

export function saveToFile(data: string) {
  fs.writeFileSync(resultDbFilePath, data);
}
