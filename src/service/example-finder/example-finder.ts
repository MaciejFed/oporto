import { Exercise } from '../../exercise/exercise';
import { NounTranslationExercise } from '../../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../../exercise/translation/adjective-translation-exercise';
import { OtherTranslationExercise } from '../../exercise/translation/other-translation-exercise';
import { VerbTranslationExercise } from '../../exercise/translation/verb-translation-exercise';
import { fetchMovieExample } from '../../client/client';
import { GermanVerbTranslationExercise } from '../../exercise/translation/de/german-verb-translation-exercise';
import { GermanNounTranslationExercise } from '../../exercise/translation/de/german-noun-translation-exercise';
import { Language } from '../../common/language';
import { MovieExample } from '../../io/file';
import { GermanOtherTranslationExercise } from '../../exercise/translation/de/german-other-translation-exercise';
import { GermanCaseExercise } from '../../exercise/german-case-exercise';
import { PolishVerbExercise } from '../../exercise/polish-verb-exercise';
import { PolishVerbTranslationExercise } from '../../exercise/translation/pl/polish-verb-translation-exercise';
import { PolishOtherTranslationExercise } from '../../exercise/translation/pl/polish-other-translation-exercise';
import { PolishNounTranslationExercise } from '../../exercise/translation/pl/polish-noun-translation-exercise';

export function extractWordToFindFromExercise(exercise: Exercise): string | undefined {
  switch (exercise.exerciseType) {
    case 'OtherTranslation':
      if ((exercise as OtherTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as OtherTranslationExercise).other.portuguese;
    case 'AdjectiveTranslation':
      if ((exercise as AdjectiveTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as AdjectiveTranslationExercise).adjective.masculine.singular;
    case 'VerbTranslation':
      if ((exercise as VerbTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as VerbTranslationExercise).verb.infinitive;
    case 'GermanVerbTranslation':
      if ((exercise as GermanVerbTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as GermanVerbTranslationExercise).verb.infinitive;
    case 'NounTranslation':
      return (exercise as NounTranslationExercise).noun.portuguese.word;
    case 'GermanNounTranslation':
      return (exercise as GermanNounTranslationExercise).noun.german.singular;
    case 'GermanOtherTranslation':
      return (exercise as GermanOtherTranslationExercise).other.german;
    case 'PolishVerbTranslation':
      if ((exercise as PolishVerbTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as GermanVerbTranslationExercise).verb.infinitive;
    case 'PolishOtherTranslation':
      return (exercise as PolishOtherTranslationExercise).other.polish;
    case 'PolishNounTranslation':
      return (exercise as PolishNounTranslationExercise).noun.polish;
    case 'GermanCaseExercise':
      return (exercise as GermanCaseExercise).getCorrectAnswer();
    case 'VerbExercise':
    case 'GermanVerbExercise':
    case 'PolishVerbExercise':
      return exercise.getCorrectAnswer();
    default:
      return undefined;
  }
}

export function findExampleSentenceAndWord(
  language: Language,
  exercise: Exercise,
  callback: ({ wordStartIndex, word, targetLanguage, english, englishApi }: MovieExample) => void
): void {
  const wordToFind = extractWordToFindFromExercise(exercise);
  if (wordToFind) {
    fetchMovieExample(language, wordToFind).then((result) => {
      const exerciseWord = result.targetLanguage.substring(
        result.wordStartIndex,
        result.wordStartIndex + wordToFind.length
      );
      callback({
        wordStartIndex: result.wordStartIndex,
        word: exerciseWord,
        targetLanguage: result.targetLanguage,
        english: result.english,
        englishApi: result.englishApi
      });
    });
  }
}
