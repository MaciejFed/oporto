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
import { GenderWord, readAllDE } from '../../repository/german-exercises-repository';
import { GermanVerbTranslationExercise } from '../../exercise/translation/de/german-verb-translation-exercise';
import { GermanNounTranslationExercise } from '../../exercise/translation/de/german-noun-translation-exercise';
import { readAllPL } from '../../repository/polish-exercises-repository';

export enum ProgressType {
  DONE = 'DONE',
  IN_PROGRESS = 'IN_PROGRESS',
  NEVER_DONE = 'NEVER_DONE'
}

export type ExerciseProgress = {
  exercise: Exercise;
  correctAnswers: number;
  incorrectAnswers: number;
  ratio: number;
  answersMissing: number;
  exerciseResults: Result[];
  progressType: ProgressType;
};

export type Progress = {
  ratioRange: ProgressType & 'All';
  count: number;
};

export function newWordsBetweenResults(resultStart: Result[], resultEnd: Result[], language: Language): string[] {
  const getAllDoneWords = (result: Result[]) => {
    const exercises = generateAllPossibleExercises(language);
    const {
      words: { NOUN, VERB, ADJECTIVE, OTHER }
    } = getProgressAggregate(result, exercises);

    return NOUN.DONE.baseWords
      .concat(VERB.DONE.baseWords)
      .concat(ADJECTIVE.DONE.baseWords)
      .concat(OTHER.DONE.baseWords);
  };
  const doneStart = getAllDoneWords(resultStart);
  const doneEnd = getAllDoneWords(resultEnd);

  return doneEnd.filter((word) => !doneStart.includes(word));
}

export function getGroupExerciseProgress(
  exercises: Exercise[],
  results: Result[],
  exerciseType: ExerciseType
): ExerciseProgress[] {
  const exercisesOfType = exercises.filter((exercise) => exercise.exerciseType === exerciseType);
  return exercisesOfType.map((exerciseOfType) => getSingleExerciseProgress(results, exerciseOfType as Exercise));
}

export const getRatio = (correctAnswers: number, incorrectAnswers: number) => {
  if (!correctAnswers && !incorrectAnswers) return 0;
  if (!incorrectAnswers) return 100;
  return Math.floor(correctAnswers / (incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO)) * 100;
};

export const mapRatioToProgress = (correctAnswers: number, incorrectAnswers: number) => {
  if (!correctAnswers && !incorrectAnswers) return ProgressType.NEVER_DONE;
  const ratio = getRatio(correctAnswers, incorrectAnswers);
  return ratio < 100 ? ProgressType.IN_PROGRESS : ProgressType.DONE;
};

export function getAnswersMissingForBaseWord(baseWord: string, results: Result[], language: Language): number {
  return generateAllPossibleExercises(language)
    .filter((exercise) => exercise.getBaseWordAsString() === baseWord)
    .map((exercise) => getSingleExerciseProgress(results, exercise))
    .reduce((prev, curr) => prev + curr.answersMissing, 0);
}

export function getBaseWordProgress(results: Result[], exercise: Exercise): ExerciseProgress {
  const exerciseResults = results;
  const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
  const incorrectAnswers = exerciseResults.length - correctAnswers;
  const ratio = getRatio(correctAnswers, incorrectAnswers);
  return {
    exercise,
    correctAnswers,
    incorrectAnswers,
    ratio,
    answersMissing: Math.max(
      0,
      !correctAnswers && !incorrectAnswers ? 1 : incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO - correctAnswers
    ),
    exerciseResults,
    progressType: mapRatioToProgress(correctAnswers, incorrectAnswers)
  };
}

export function getSingleExerciseProgress(results: Result[], exercise: Exercise): ExerciseProgress {
  const exerciseResults = getAllResultsForExercise(results, exercise);
  const correctAnswers = exerciseResults.filter((e) => e.wasCorrect).length;
  const incorrectAnswers = exerciseResults.length - correctAnswers;
  const ratio = getRatio(correctAnswers, incorrectAnswers);
  return {
    exercise,
    correctAnswers,
    incorrectAnswers,
    ratio,
    answersMissing: Math.max(
      0,
      !correctAnswers && !incorrectAnswers ? 1 : incorrectAnswers * VALUE_WRONG_TO_CORRECT_RATIO - correctAnswers
    ),
    exerciseResults,
    progressType: mapRatioToProgress(correctAnswers, incorrectAnswers)
  };
}

export function getExercisesProgress(results: Result[], filter: (e: Exercise) => boolean, language: Language) {
  const exerciseProgress: ExerciseProgress[] = generateExercisesForSession(50000, false, () => true, language)
    .filter(filter)
    .map((exercise) => getSingleExerciseProgress(results, exercise))
    .sort((a, b) => a.correctAnswers - b.correctAnswers);

  return exerciseProgress;
}

export function getProgress(results: Result[], language: Language): Progress[] {
  const exerciseProgress = getExercisesProgress(
    results,
    (exercise) => exercise instanceof TranslationExercise && exercise.isTranslationToPortuguese(),
    language
  );

  return Object.values(ProgressType).map((progressType) =>
    Object.assign({
      progressType,
      count: exerciseProgress.filter((e) => e.progressType === progressType).length
    })
  );
}
export function getAllUniqueWordsConjugated(language: Language): string[] {
  if (language === Language.Portuguese) {
    const nouns = readAll().nouns.flatMap((noun) => [noun.portuguese.word, noun.portuguese.plural]);
    const otherFormVerbs = readAll()
      .verbs.filter((verb) => verb.otherForms)
      .flatMap((verb) => verb.otherForms?.map((v) => v.portuguese));
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
      verb.pastPerfect?.['Eles/Elas/Vocēs'],
      verb.imperfect?.Eu,
      verb.imperfect?.Tu,
      verb.imperfect?.['Ela/Ele/Você'],
      verb.imperfect?.Nós,
      verb.imperfect?.['Eles/Elas/Vocēs']
    ]);
    const others = readAll().others.map((other) => other.portuguese);
    const othersWithGender = readAll().othersWithGender.flatMap((other) => [
      other.portuguese.singular.feminine,
      other.portuguese.singular.masculine,
      other.portuguese.plural.masculine,
      other.portuguese.plural.feminine,
      other.portuguese.base
    ]);
    const adjectives = readAll().adjectives.flatMap((adjective) => [
      adjective.masculine.singular,
      adjective.masculine.plural,
      adjective.feminine.singular,
      adjective.feminine.plural
    ]);

    const allWords = [nouns, verbs, otherFormVerbs, others, othersWithGender, adjectives]
      .flatMap((w) => w)
      .filter((w) => w !== undefined)
      .map((w) => w!.toLowerCase())
      .filter((word) => word)
      .sort();

    return [...new Set(allWords)];
  } else if (language === Language.German) {
    const nouns = readAllDE().nouns.flatMap((noun) => [noun.german.singular, noun.german.plural]);
    const verbs = readAllDE().verbs.flatMap((verb) => [
      verb.infinitive,
      verb.presentSimple.Ich,
      verb.presentSimple.Du,
      verb.presentSimple['Er/Sie/Es'],
      verb.presentSimple.Wir,
      verb.presentSimple.Ihr,
      verb.presentSimple.Sie,

      ...(verb.pastPerfect ? verb.pastPerfect.Ich.split(' ') : []),
      ...(verb.pastPerfect ? verb.pastPerfect.Du.split(' ') : []),
      ...(verb.pastPerfect ? verb.pastPerfect['Er/Sie/Es'].split(' ') : []),
      ...(verb.pastPerfect ? verb.pastPerfect.Wir.split(' ') : []),
      ...(verb.pastPerfect ? verb.pastPerfect.Ihr.split(' ') : []),
      ...(verb.pastPerfect ? verb.pastPerfect.Sie.split(' ') : []),

      verb.präteritum?.Ich,
      verb.präteritum?.Du,
      verb.präteritum?.['Er/Sie/Es'],
      verb.präteritum?.Wir,
      verb.präteritum?.Ihr,
      verb.präteritum?.Sie
    ]);
    const getWords = (word: string | GenderWord | undefined) => {
      if (!word) return [];
      return typeof word === 'string' ? [word] : [word.plural, word.neutrum, word.femininum, word.maskulinum];
    };

    const others = readAllDE().others.map((other) => other.german);
    const conjugated = readAllDE()
      .case.flatMap((caseWord) => [
        getWords(caseWord.german.nominative),
        getWords(caseWord.german.accusative),
        getWords(caseWord.german.dative)
      ])
      .flatMap((a) => a);
    const allWords = [nouns, verbs, others, conjugated]
      .flatMap((w) => w)
      .filter((w) => w !== undefined)
      .map((w) => w!.toLowerCase())
      .filter((word) => word)
      .sort();

    return [...new Set(allWords)];
  }
  const nouns = readAllPL().nouns.flatMap((noun) => [noun.polish]);
  const verbs = readAllPL().verbs.flatMap((verb) => [
    verb.infinitive,
    verb.presentSimple.Ja,
    verb.presentSimple.Ty,
    verb.presentSimple['On/Ona/Ono'],
    verb.presentSimple.My,
    verb.presentSimple.Wy,
    verb.presentSimple['Oni/One']
  ]);

  const others = readAllPL().others.map((other) => other.polish);
  const allWords = [nouns, verbs, others]
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
  } else if (language === Language.German) {
    const nouns = readAllDE().nouns.map((noun) => noun.german.singular);
    const verbs = readAllDE().verbs.map((verb) => verb.infinitive);

    const allWords = [nouns, verbs]
      .flatMap((w) => w)
      .map((w) => w.toLowerCase())
      .filter((word) => word)
      .sort();

    return [...new Set(allWords)];
  }
  const nouns = readAllPL().nouns.map((noun) => noun.polish);
  const verbs = readAllPL().verbs.map((verb) => verb.infinitive);

  const allWords = [nouns, verbs]
    .flatMap((w) => w)
    .map((w) => w.toLowerCase())
    .filter((word) => word)
    .sort();

  return [...new Set(allWords)];
}

export function getExerciseProgressMap(
  results: Result[],
  language: Language
): Record<ExerciseType, ExerciseProgress[]> {
  const mapGeneratingStartTime = Date.now();
  const exerciseTypesPt: ExerciseType[] = [
    'VerbExercise',
    'VerbOtherFormTranslation',
    'SentenceTranslation',
    'NounTranslation',
    'OtherTranslation',
    'AdjectiveTranslation',
    'VerbTranslation',
    'FitInGap'
  ];

  const exerciseTypesDe: ExerciseType[] = [
    'GermanVerbExercise',
    'GermanNounTranslation',
    'GermanVerbTranslation',
    'GermanOtherTranslation',
    'GermanCaseExercise'
  ];

  const exerciseTypesPl: ExerciseType[] = [
    'PolishVerbExercise',
    'PolishNounTranslation',
    'PolishVerbTranslation',
    'PolishOtherTranslation'
  ];

  const progressMap: Record<ExerciseType, ExerciseProgress[]> = {
    VerbExercise: [],
    GermanVerbExercise: [],
    GermanNounTranslation: [],
    GermanVerbTranslation: [],
    PolishVerbExercise: [],
    PolishNounTranslation: [],
    PolishVerbTranslation: [],
    NounTranslation: [],
    OtherTranslation: [],
    OtherWithGenderTranslation: [],
    AdjectiveTranslation: [],
    VerbTranslation: [],
    VerbOtherFormTranslation: [],
    SentenceTranslation: [],
    PhraseTranslation: [],
    GermanOtherTranslation: [],
    PolishOtherTranslation: [],
    GermanCaseExercise: [],
    FitInGap: []
  };

  let filteredResults = results;
  const allExercises = generateAllPossibleExercises(language);

  const exercisesTypes =
    // eslint-disable-next-line no-nested-ternary
    language === Language.Portuguese
      ? exerciseTypesPt
      : language === Language.German
      ? exerciseTypesDe
      : exerciseTypesPl;
  for (const exerciseType of exercisesTypes) {
    const exerciseProgress = getGroupExerciseProgress(allExercises, filteredResults, exerciseType);
    progressMap[exerciseType] = exerciseProgress;

    filteredResults = filteredResults.filter((result) => {
      return !exerciseProgress.some((progress) => progress.exercise.equal(result.exercise));
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
    const exercisesDone = getAllResultsBeforeDateOneWeek(language, dateResult.date);

    return buildDayProgress(dateResult, exercisesDone, words);
  });

  const allUniqueWords = getAllUniqueWords(language);

  return uniqueByDay.map((unique, index) => buildFinalProgress(unique, index, uniqueByDay, allUniqueWords));
}
