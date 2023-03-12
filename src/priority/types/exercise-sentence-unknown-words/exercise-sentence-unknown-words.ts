import { Exercise } from '../../../exercise/exercise';
import { noPriority, Priority } from '../../priority';
import { getAllWordsConjugations } from '../../../service/conjugation';
import { SentenceTranslationExercise } from '../../../exercise/translation/sentence-translation-exercise';

export const EXERCISE_SENTENCE_UNKNOWN_WORDS_SINGLE = -50;

const wordMinLenght = 3;
const allWords = getAllWordsConjugations().filter((word) => word.length >= wordMinLenght);

export function exerciseSentenceUnknownWords(exercise: Exercise): Priority[] {
  if (exercise.exerciseType !== 'SentenceTranslation') return noPriority(exercise);
  const sentenceWords = (exercise as SentenceTranslationExercise).sentence.portuguese
    .split(' ')
    .filter((word) => word.length >= wordMinLenght && !word.includes('?') && !word.includes('!'))
    .map((word) => word.toLowerCase());

  const unknownCount = sentenceWords.reduce((prev, curr) => {
    if (!allWords.includes(curr)) {
      return prev + 1;
    }
    return prev;
  }, 0);

  if (unknownCount) {
    return [
      {
        exercise,
        priorityName: 'EXERCISE_SENTENCE_UNKNOWN_WORDS',
        priorityValue: unknownCount * EXERCISE_SENTENCE_UNKNOWN_WORDS_SINGLE
      }
    ];
  }
  return noPriority(exercise);
}
