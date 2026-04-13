import { Language } from '../common/language';
import { Exercise } from '../exercise/exercise';
import { generateAllPossibleExercises } from '../exercise/generator';
import { PhraseTranslationExercise } from '../exercise/translation/phrase-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { frequencyMap } from '../frequency';
import { getAllResults } from '../repository/result-repository';
import { getAllUniqueWordsConjugated, getSingleExerciseProgress } from '../service/progress/progress';
import { Result } from '../service/result';

export function checkMap() {
  const results = getAllResults(Language.Portuguese, true);
  const resultMap = results
    .filter((ex) => !(ex.exercise instanceof SentenceTranslationExercise || ex instanceof PhraseTranslationExercise))
    .filter(
      (ex) =>
        (ex.exercise instanceof TranslationExercise && ex.exercise.translationType === 'toPortuguese') ||
        ex instanceof VerbExercise
    )
    .reduce((prev, curr) => {
      const key = curr.exercise.toString();
      if (!prev[key]) {
        prev[key] = [curr];
      } else {
        prev[key].push(curr);
      }
      return prev;
    }, {} as Record<string, Result[]>);

  const allExercises = generateAllPossibleExercises(Language.Portuguese)
    .filter((ex) => !(ex instanceof SentenceTranslationExercise || ex instanceof PhraseTranslationExercise))
    .filter(
      (ex) => (ex instanceof TranslationExercise && ex.translationType === 'toPortuguese') || ex instanceof VerbExercise
    );

  const allWords = getAllUniqueWordsConjugated(Language.Portuguese);

  // const allWords = allExercises.map((ex) => {
  //   const res = ex.getCorrectAnswer();
  //   const splitted = res.split(' ');
  //   return splitted[splitted.length - 1].toLowerCase();
  // });

  let total = 0;

  Object.entries(frequencyMap).forEach(([word, freq], index) => {
    if (freq.ignore) return;
    total = total + freq.frequency;
    if (index > 2000) process.exit(0);
    const exercisesMatched = allExercises
      .filter((ex) => {
        const answer = ex.getCorrectAnswer().split(' ');
        return word.toLowerCase() === answer[answer.length - 1].toLowerCase();
      })
      .map((ex) => {
        const key = ex.toString();
        const progress = getSingleExerciseProgress(resultMap[key] ?? [], ex);

        return `${key} ${progress.correctAnswers - progress.incorrectAnswers * 3}`;
      });

    // if (!exercisesMatched.length) {
    //     console.error(`no results for [${index}: ${word}]`)
    // }

    if (!allWords.includes(word)) {
      console.error(`No exercise for [${index}: ${word}]`);
    }
  });
}

checkMap();
