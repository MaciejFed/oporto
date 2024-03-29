import { Exercise } from '../exercise/exercise';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { logger } from '../common/logger';
import { exec } from 'child_process';
import util from 'util';
import { fetchMovieExample } from '../client/client';

const extractWordToFindFromExercise = (exercise: Exercise): string | undefined => {
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
    case 'NounTranslation':
      if ((exercise as NounTranslationExercise).isTranslationToPortuguese()) return exercise.getCorrectAnswer();
      return (exercise as NounTranslationExercise).noun.portuguese.word;
    case 'VerbExercise':
      return exercise.getCorrectAnswer();
    default:
      return undefined;
  }
};

export const findExampleSentenceAndWord = (
  exercise: Exercise,
  callback: ({
    wordStartIndex,
    exerciseWord,
    exampleSentencePrefixLine,
    exampleSentence,
    exampleSentenceTranslation,
    exampleSentenceTranslationApi
  }: {
    wordStartIndex: number;
    exerciseWord: string;
    exampleSentencePrefixLine: string;
    exampleSentence: string;
    exampleSentenceTranslation: string;
    exampleSentenceTranslationApi: string;
  }) => void
) => {
  const wordToFind = extractWordToFindFromExercise(exercise);
  if (wordToFind) {
    fetchMovieExample(wordToFind).then((result) => {
      const wordStartIndex = result.portuguese[1].toLowerCase().indexOf(wordToFind.toLowerCase());
      const exerciseWord = result.portuguese[1].substring(wordStartIndex, wordStartIndex + wordToFind.length);
      const exampleSentence = result.portuguese;
      callback({
        wordStartIndex,
        exerciseWord,
        exampleSentencePrefixLine: result.portuguese[0].replace('- ', ''),
        exampleSentence: exampleSentence[1].replace('- ', ''),
        exampleSentenceTranslation: result.english,
        exampleSentenceTranslationApi: result.englishApi
      });
    });
  }
};
