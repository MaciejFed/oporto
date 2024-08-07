import { getRandomElement } from './common';

export enum Language {
  Portuguese = 'Portuguese',
  German = 'German',
  Polish = 'Polish'
}

export function getVoice(language: Language): string {
  if (language === Language.Portuguese) {
    return getRandomElement(['Joana', 'Joaquim']);
  }
  return getRandomElement(['Anna', 'Petra', 'Markus']);
}
