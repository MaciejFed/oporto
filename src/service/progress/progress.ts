import { Exercise, ExerciseType } from '../../exercise/exercise';
import { TranslationExercise } from '../../exercise/translation/translation-exercise';
import { readAll } from '../../repository/exercises-repository';
import {
  DateResults,
  getAllResultsBeforeDateOneWeek,
  getAllResultsByDate,
  getAllResultsForExercise
} from '../../repository/result-repository';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../../priority/priority';
import { Result } from '../result';
import { generateAllPossibleExercises, generateExercisesForSession } from '../../exercise/generator';
import { NounTranslationExercise } from '../../exercise/translation/noun-translation-exercise';
import { VerbTranslationExercise } from '../../exercise/translation/verb-translation-exercise';
import { OtherTranslationExercise } from '../../exercise/translation/other-translation-exercise';
import { AdjectiveTranslationExercise } from '../../exercise/translation/adjective-translation-exercise';
import { logger } from '../../common/logger';
import { getProgressAggregate } from './progress-aggregate';
import { Language } from '../../common/language';
import { readAllDE } from '../../repository/german-exercises-repository';
import { GermanVerbTranslationExercise } from '../../exercise/translation/de/german-verb-translation-exercise';
import { GermanNounTranslationExercise } from '../../exercise/translation/de/german-noun-translation-exercise';

export type RatioRange = 'Never Done' | '0-39' | '40-79' | '80-100';
const ratioRanges: RatioRange[] = ['Never Done', '0-39', '40-79', '80-100'];

export type ExerciseProgress = {
  exercise: Exercise;
  correctAnswers: number;
  incorrectAnswers: number;
  ratio: number;
  exerciseResults: Result[];
  ratioRange: RatioRange;
};

export type Progress = {
  ratioRange: RatioRange & 'All';
  count: number;
};

export function getGroupExerciseProgress(
  exercises: Exercise[],
  results: Result[],
  exerciseType: ExerciseType
): ExerciseProgress[] {
  const exercisesOfType = exercises.filter((exercise) => exercise.exerciseType === exerciseType);
  return exercisesOfType.map((exerciseOfType) => getSingleExerciseProgress(results, exerciseOfType as Exercise));
}

export function getSingleExerciseProgress(results: Result[], exercise: Exercise): ExerciseProgress {
  const exerciseResults = getAllResultsForExercise(results, exercise);
  const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
  const incorrectAnswers = exerciseResults.length - correctAnswers;
  const ratio = Math.floor(correctAnswers / (incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO)) * 100;
  return {
    exercise,
    correctAnswers,
    incorrectAnswers,
    ratio,
    exerciseResults,
    ratioRange: mapToRatioRange(ratio, exerciseResults.length === 0)
  };
}

export function getExercisesProgress(results: Result[], filter: (e: Exercise) => boolean) {
  const exerciseProgress: ExerciseProgress[] = generateExercisesForSession(
    50000,
    false,
    () => true,
    Language.Portuguese
  )
    .filter(filter)
    .map((exercise) => {
      const exerciseResults = getAllResultsForExercise(results, exercise);
      const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
      const incorrectAnswers = exerciseResults.length - correctAnswers;
      const ratio = (correctAnswers / (incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO)) * 100;
      return {
        exercise,
        correctAnswers,
        incorrectAnswers,
        ratio,
        exerciseResults,
        ratioRange: mapToRatioRange(ratio, exerciseResults.length === 0)
      };
    })
    .sort((a, b) => a.correctAnswers - b.correctAnswers);

  return exerciseProgress;
}

export function getProgress(results: Result[]): Progress[] {
  const exerciseProgress = getExercisesProgress(
    results,
    (exercise) => exercise instanceof TranslationExercise && exercise.isTranslationToPortuguese()
  );

  const progress = ratioRanges.map((ratioRange) =>
    Object.assign({
      ratioRange: ratioRange,
      count: exerciseProgress.filter((e) => e.ratioRange === ratioRange).length
    })
  );
  // progress.unshift({
  //   ratioRange: 'All',
  //   count: allExercises.length
  // });

  return progress;
}

function mapToRatioRange(ratio: number, neverDone: boolean): RatioRange {
  if (neverDone) return 'Never Done';
  if (!isFinite(ratio) || ratio >= 80) return '80-100';
  if (ratio >= 40 && ratio < 80) return '40-79';
  return '0-39';
}

export function getAllUniqueWordsConjugated(language: Language): string[] {
  if (language === Language.Portuguese) {
    const nouns = readAll().nouns.flatMap((noun) => [noun.portuguese.word, noun.portuguese.plural]);
    const verbs = readAll().verbs.flatMap((verb) => [
      verb.infinitive,
      verb.presentSimple.Eu,
      verb.presentSimple.Tu,
      verb.presentSimple['Ela/Ele/Você'],
      verb.presentSimple.Nós,
      verb.presentSimple['Eles/Elas/Vocēs'],
      verb.pastPerfect?.Eu,
      verb.pastPerfect?.Tu,
      verb.pastPerfect?.['Ela/Ele/Você'],
      verb.pastPerfect?.Nós,
      verb.pastPerfect?.['Eles/Elas/Vocēs']
    ]);
    const others = readAll().others.map((other) => other.portuguese);
    const adjectives = readAll().adjectives.flatMap((adjective) => [
      adjective.masculine.singular,
      adjective.masculine.plural,
      adjective.feminine.singular,
      adjective.feminine.plural
    ]);

    const allWords = [nouns, verbs, others, adjectives]
      .flatMap((w) => w)
      .filter((w) => w !== undefined)
      .map((w) => w!.toLowerCase())
      .filter((word) => word)
      .sort();

    return [...new Set(allWords)];
  }
  const nouns = readAllDE().nouns.flatMap((noun) => [noun.german.singular, noun.german.plural]);
  const verbs = readAllDE().verbs.flatMap((verb) => [
    verb.infinitive,
    verb.presentSimple.Ich,
    verb.presentSimple.Du,
    verb.presentSimple['Er/Sie/Es'],
    verb.presentSimple.Wir,
    verb.presentSimple.Ihr,
    verb.presentSimple.Sie
  ]);
  const allWords = [nouns, verbs]
    .flatMap((w) => w)
    .filter((w) => w !== undefined)
    .map((w) => w!.toLowerCase())
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

export function getAllUniqueWords(language: Language): string[] {
  if (language === Language.Portuguese) {
    const nouns = readAll().nouns.map((noun) => noun.portuguese.word);
    const verbs = readAll().verbs.map((verb) => verb.infinitive);
    const others = readAll().others.map((other) => other.portuguese);
    const adjectives = readAll().adjectives.map((adjective) => adjective.masculine.singular);

    const allWords = [nouns, verbs, others, adjectives]
      .flatMap((w) => w)
      .map((w) => w.toLowerCase())
      .filter((word) => word)
      .sort();

    return [...new Set(allWords)];
  }
  const nouns = readAllDE().nouns.map((noun) => noun.german.singular);
  const verbs = readAllDE().verbs.map((verb) => verb.infinitive);

  const allWords = [nouns, verbs]
    .flatMap((w) => w)
    .map((w) => w.toLowerCase())
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

export function getAllUniqueWordsAsExercises(language: Language): Exercise[] {
  if (language === Language.Portuguese) {
    const nounExercises = readAll().nouns.map((noun) => NounTranslationExercise.new(noun, 'toPortuguese'));
    const verbExercises = readAll().verbs.map((verb) => VerbTranslationExercise.new(verb, 'toPortuguese'));
    const otherExercises = readAll().others.map((other) => OtherTranslationExercise.new(other, 'toPortuguese'));
    const adjectivesExercises = readAll().adjectives.map((adjective) =>
      AdjectiveTranslationExercise.new(adjective, 'toPortuguese', 'masculine', 'singular')
    );

    return [...nounExercises, ...verbExercises, ...otherExercises, ...adjectivesExercises];
  }
  const nounExercises = readAllDE().nouns.map((noun) => GermanNounTranslationExercise.new(noun, 'toPortuguese'));
  const verbExercises = readAllDE().verbs.map((verb) => GermanVerbTranslationExercise.new(verb, 'toPortuguese'));

  return [...nounExercises, ...verbExercises];
}

type ProgressOnDay = {
  day: string;
  wordCount: number;
  newWords: string[];
  lostWords: string[];
};

export function getExerciseProgressMap(
  results: Result[],
  language: Language
): Record<ExerciseType, ExerciseProgress[]> {
  const mapGeneratingStartTime = Date.now();
  const exerciseTypesPt: ExerciseType[] = [
    'VerbExercise',
    'SentenceTranslation',
    'NounTranslation',
    'OtherTranslation',
    'AdjectiveTranslation',
    'VerbTranslation',
    'FitInGap'
  ];

  const exerciseTypesDe: ExerciseType[] = ['GermanVerbExercise', 'GermanNounTranslation', 'GermanVerbTranslation'];

  const progressMap: Record<ExerciseType, ExerciseProgress[]> = {
    VerbExercise: [],
    GermanVerbExercise: [],
    GermanNounTranslation: [],
    GermanVerbTranslation: [],
    NounTranslation: [],
    OtherTranslation: [],
    AdjectiveTranslation: [],
    VerbTranslation: [],
    SentenceTranslation: [],
    PhraseTranslation: [],
    FitInGap: []
  };

  let filteredResults = results;
  const allExercises = generateAllPossibleExercises(language);

  for (const exerciseType of language === Language.Portuguese ? exerciseTypesPt : exerciseTypesDe) {
    const exerciseProgress = getGroupExerciseProgress(allExercises, filteredResults, exerciseType);
    progressMap[exerciseType] = exerciseProgress;

    filteredResults = filteredResults.filter((result) => {
      return !exerciseProgress.some((progress) => progress.exercise === result.exercise);
    });
  }

  logger.info(`Generating amp took [${(mapGeneratingStartTime - Date.now()) / 1000} seconds]`);

  return progressMap;
}

export function progressByDate(results: Result[], language: Language) {
  function getUniqueWordsForDay(dateResult: DateResults, exercises: Exercise[]) {
    const progressAggregate = getProgressAggregate(dateResult.results, exercises);
    const { VERB, NOUN, ADJECTIVE, OTHER } = progressAggregate.words;
    return VERB.DONE.baseWords
      .concat(NOUN.DONE.baseWords)
      .concat(ADJECTIVE.DONE.baseWords)
      .concat(OTHER.DONE.baseWords);
  }

  function buildDayProgress(dateResult: DateResults, exercisesDone: Result[], words: string[]) {
    return {
      day: dateResult.date.toJSDate(),
      words,
      exercisesDone: Math.floor(exercisesDone.length / 10)
    };
  }

  function buildFinalProgress(
    unique: { day: any; words: string[]; exercisesDone: any },
    index: number,
    uniqueByDay: { words: string[] }[],
    allUniqueWords: string[]
  ) {
    const previous = index > 0 ? uniqueByDay[index - 1].words : [];
    const newWords = unique.words.filter((word) => !previous.includes(word));
    const lostWords = previous.filter((word) => !unique.words.includes(word));

    return {
      day: unique.day.toDateString(),
      wordCount: unique.words.length,
      wordsDone: unique.words,
      wordsMissing: allUniqueWords.filter((w) => !unique.words.includes(w)),
      exercisesDone: unique.exercisesDone,
      newWords,
      lostWords
    };
  }

  const exercises = generateAllPossibleExercises(language);
  const resultsByDate = getAllResultsByDate(results);

  const uniqueByDay = resultsByDate.map((dateResult) => {
    console.log(dateResult.date.toJSDate());
    const words = getUniqueWordsForDay(dateResult, exercises);
    const exercisesDone = getAllResultsBeforeDateOneWeek(dateResult.date);

    return buildDayProgress(dateResult, exercisesDone, words);
  });

  const allUniqueWords = getAllUniqueWords(language);

  return uniqueByDay.map((unique, index) => buildFinalProgress(unique, index, uniqueByDay, allUniqueWords));
}
