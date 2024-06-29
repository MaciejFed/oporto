import { Exercise } from '../../exercise/exercise';
import { NounTranslationExercise } from '../../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../../exercise/translation/adjective-translation-exercise';
import { OtherTranslationExercise } from '../../exercise/translation/other-translation-exercise';
import { VerbTranslationExercise } from '../../exercise/translation/verb-translation-exercise';
import { fetchMovieExample } from '../../client/client';
import { GermanVerbTranslationExercise } from '../../exercise/translation/de/german-verb-translation-exercise';
import { GermanNounTranslationExercise } from '../../exercise/translation/de/german-noun-translation-exercise';
import { Language } from '../../common/language';

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
    case 'VerbExercise':
    case 'GermanVerbExercise':
      return exercise.getCorrectAnswer();
    default:
      return undefined;
  }
}

export function findExampleSentenceAndWord(
  language: Language,
  exercise: Exercise,
  callback: ({
    wordStartIndex,
    exerciseWord,
    exampleSentence,
    exampleSentenceTranslation,
    exampleSentenceTranslationApi
  }: {
    wordStartIndex: number;
    exerciseWord: string;
    exampleSentence: string;
    exampleSentenceTranslation: string;
    exampleSentenceTranslationApi: string;
  }) => void
): void {
  const wordToFind = extractWordToFindFromExercise(exercise);
  if (wordToFind) {
    fetchMovieExample(language, wordToFind).then((result) => {
      const wordStartIndex = result.portuguese.toLowerCase().indexOf(wordToFind.toLowerCase());
      const exerciseWord = result.portuguese.substring(wordStartIndex, wordStartIndex + wordToFind.length);
      const exampleSentence = result.portuguese;
      callback({
        wordStartIndex,
        exerciseWord,
        exampleSentence: exampleSentence.replace('- ', ''),
        exampleSentenceTranslation: result.english,
        exampleSentenceTranslationApi: result.englishApi
      });
    });
  }
}
