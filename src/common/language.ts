export enum Language {
  Portuguese = 'Portuguese',
  German = 'German'
}

export function setLanguage(language: Language) {
  process.env.oportolanguage = language;
}

export function getLanguage(): Language {
  const language = process.env.oportolanguage;
  if (language) {
    return language as Language;
  }
  throw new Error('Unknown language');
}

export function getVoice(): string {
  return getLanguage() === Language.Portuguese ? 'Joana' : 'Petra';
}
