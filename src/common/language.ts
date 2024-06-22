import { getRandomElement } from './common';

export enum Language {
  Portuguese = 'Portuguese',
  German = 'German'
}

export function getVoice(language: Language): string {
  if (language === Language.Portuguese) {
    return getRandomElement(['Joana', 'Catarina']);
  }
  return getRandomElement(['Anna', 'Petra', 'Yannick']);
}
