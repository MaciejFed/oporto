import path from 'path';
import os from 'os';

export interface WordExampleLine {
  lineTargetLanguage: string;
  lineTranslation: string;
  knownWordsCount: number;
  unknownWordsCount: number;
  knownWords: string[];
  unknownWords: string[];
  wordRatio: number;
}

export const MIN_WORD_LENGTH = 3;

export const PT_EXAMPLES_PATH = path.join(os.homedir(), 'pt/pt.txt');
export const PT_TRANSLATION_EXAMPLES_PATH = path.join(os.homedir(), 'pt/en.txt');
export const DE_EXAMPLES_PATH = path.join(os.homedir(), 'de/de.txt');
export const DE_TRANSLATION_EXAMPLES_PATH = path.join(os.homedir(), 'de/en.txt');
export const PL_EXAMPLES_PATH = path.join(os.homedir(), 'pl/pl.txt');
export const PL_TRANSLATION_EXAMPLES_PATH = path.join(os.homedir(), 'pl/en.txt');
