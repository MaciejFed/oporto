import { string } from 'yargs';
import { translationTypes } from '../exercise/exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { saveProgressToFile } from '../io/file';
import { getAllResults } from '../repository/result-repository';
import { getAllUniqueWords, progressByDate } from '../service/progress';

interface ErrorContext {
  count: number;
  wrodsToErrors: Map<string, number>;
}

function findWord(index: number, word: string) {
  let a: number = index;
  let b: number = index;
  while (a > 0 && word[a] !== ' ') {
    a--;
  }
  while (b < word.length && word[b] !== ' ') {
    b++;
  }
  return word.substring(a, b);
}

export function saveProgress() {
  const map: Map<string, ErrorContext> = new Map<string, ErrorContext>();
  getAllResults(true).map((result) => {
    if (!result.wasCorrect) {
      if (translationTypes.includes(result.exercise.exerciseType) && result.exercise.exerciseType) {
        const translationExercise = result.exercise as TranslationExercise;
        if (translationExercise.isTranslationToPortugueseFromHearing()) {
          const expectedResult = translationExercise.getCorrectAnswer().toLowerCase();
          const actualtResposne = result.answer.toLowerCase();
          if (expectedResult.length <= actualtResposne.length) {
            expectedResult.split('').forEach((expectedLetter, index) => {
              const special = ['á', 'é', 'ú', 'í', 'ó'];
              if (
                index > 0 &&
                expectedLetter !== actualtResposne[index] &&
                !special.includes(expectedLetter) &&
                !special.includes(actualtResposne[index]) &&
                expectedLetter !== ' ' &&
                actualtResposne[index] !== ' '
              ) {
                const key = `[${actualtResposne[index]}]--->[${expectedLetter}]`;
                const expectedResultKey = findWord(index, expectedResult)
                  .replace(' ', '')
                  .replace('?', '')
                  .replace('!', '');
                if (!map.get(key)) {
                  map.set(key, {
                    count: 1,
                    wrodsToErrors: new Map<string, number>([[expectedResultKey, 1]])
                  });
                } else {
                  const innerMap = map.get(key)!.wrodsToErrors;
                  innerMap.set(
                    expectedResultKey,
                    innerMap?.get(expectedResultKey) ? innerMap.get(expectedResultKey)! + 1 : 1
                  );
                  const sortedMap = new Map(
                    [...innerMap.entries()].sort((a, b) => {
                      return b[1] - a[1];
                    })
                  );
                  map.set(key, {
                    count: map.get(key)!.count + 1,
                    wrodsToErrors: sortedMap
                  });
                  // Count words with mistakes as well
                }
              }
            });
          }
        }
      }
    }
  });
  const sortedMap = new Map(
    [...map.entries()]
      .sort((a, b) => {
        return b[1].count - a[1].count;
      })
      .filter((a) => a[1].count > 7)
  );
  console.log(sortedMap);
  console.log('Saving progress...');
  console.log(`All unique words: ${getAllUniqueWords().length}`);
  const progress = progressByDate(getAllResults(true));
  saveProgressToFile(JSON.stringify(progress, null, 4));
  console.log('Progress saved...');
}
