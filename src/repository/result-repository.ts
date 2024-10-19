/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fit-in-gap-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import assert from 'assert';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { DateTimeExtended } from '../common/common';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { PhraseTranslationExercise } from '../exercise/translation/phrase-translation-exercise';
import { fetchAllResults, fetchAllResultsSync } from '../client/client';
import { GermanNounTranslationExercise } from '../exercise/translation/de/german-noun-translation-exercise';
import { GermanVerbTranslationExercise } from '../exercise/translation/de/german-verb-translation-exercise';
import { GermanVerbExercise } from '../exercise/german-verb-exercise';
import { Language } from '../common/language';
import { GermanOtherTranslationExercise } from '../exercise/translation/de/german-other-translation-exercise';
import { GermanCaseExercise } from '../exercise/german-case-exercise';
import { PolishVerbExercise } from '../exercise/polish-verb-exercise';
import { PolishNounTranslationExercise } from '../exercise/translation/pl/polish-noun-translation-exercise';
import { PolishVerbTranslationExercise } from '../exercise/translation/pl/polish-verb-translation-exercise';
import { PolishOtherTranslationExercise } from '../exercise/translation/pl/polish-other-translation-exercise';
import { OtherGenderTranslationExercise } from '../exercise/translation/other-gender-translation-exercise';
import { VerbOtherFormTranslationExercise } from '../exercise/translation/verb-other-form-translation-exercise';

function createVerbExercise(exerciseData: any) {
  const verbExercise = new VerbExercise();
  Object.assign(verbExercise, exerciseData);
  assert(verbExercise.verb);
  assert(verbExercise.person);
  return verbExercise;
}

function createGermanVerbExercise(exerciseData: any) {
  const verbExercise = new GermanVerbExercise();
  Object.assign(verbExercise, exerciseData);
  assert(verbExercise.verb);
  assert(verbExercise.person);
  return verbExercise;
}

function createPolishVerbExercise(exerciseData: any) {
  const verbExercise = new PolishVerbExercise();
  Object.assign(verbExercise, exerciseData);
  assert(verbExercise.verb);
  assert(verbExercise.person);
  return verbExercise;
}

function createNounTranslationExercise(exerciseData: any) {
  const nounTranslationExercise = new NounTranslationExercise();
  Object.assign(nounTranslationExercise, exerciseData);
  assert(nounTranslationExercise.noun.portuguese);
  assert(nounTranslationExercise.noun.english);
  return nounTranslationExercise;
}

function createGermanNounTranslationExercise(exerciseData: any) {
  const nounTranslationExercise = new GermanNounTranslationExercise();
  Object.assign(nounTranslationExercise, exerciseData);
  assert(nounTranslationExercise.noun.german);
  assert(nounTranslationExercise.noun.english);
  return nounTranslationExercise;
}

function createGermanVerbTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new GermanVerbTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.verb.presentSimple);
  assert(verbTranslationExercise.verb.english);
  return verbTranslationExercise;
}

function createGermanOtherTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new GermanOtherTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.other.german);
  return verbTranslationExercise;
}

function createPolishNounTranslationExercise(exerciseData: any) {
  const nounTranslationExercise = new PolishNounTranslationExercise();
  Object.assign(nounTranslationExercise, exerciseData);
  assert(nounTranslationExercise.noun.polish);
  assert(nounTranslationExercise.noun.english);
  return nounTranslationExercise;
}

function createPolishVerbTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new PolishVerbTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.verb.presentSimple);
  assert(verbTranslationExercise.verb.english);
  return verbTranslationExercise;
}

function createPolishOtherTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new PolishOtherTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.other.polish);
  return verbTranslationExercise;
}

function createGermanCaseExercise(exerciseData: any) {
  // @ts-ignore
  const germanCaseExercise = new GermanCaseExercise();
  Object.assign(germanCaseExercise, exerciseData);
  assert(germanCaseExercise.caseWord.german);
  return germanCaseExercise;
}

function createAdjectiveTranslationExercise(exerciseData: any) {
  const adjectiveTranslationExercise = new AdjectiveTranslationExercise();
  Object.assign(adjectiveTranslationExercise, exerciseData);
  assert(adjectiveTranslationExercise.adjective.masculine);
  assert(adjectiveTranslationExercise.adjective.feminine);
  assert(adjectiveTranslationExercise.adjective.english);
  return adjectiveTranslationExercise;
}

function createVerbTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new VerbTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.verb);
  assert(verbTranslationExercise.translationType);
  return verbTranslationExercise;
}

function createVerbOtherFormTranslationExercise(exerciseData: any) {
  const verbOtherFormTranslationExercise = new VerbOtherFormTranslationExercise();
  Object.assign(verbOtherFormTranslationExercise, exerciseData);
  assert(verbOtherFormTranslationExercise.verb);
  assert(verbOtherFormTranslationExercise.translationType);
  return verbOtherFormTranslationExercise;
}

function createSentenceTranslationExercise(exerciseData: any) {
  const sentenceTranslationExercise = new SentenceTranslationExercise();
  Object.assign(sentenceTranslationExercise, exerciseData);
  assert(sentenceTranslationExercise.sentence);
  return sentenceTranslationExercise;
}

function createPhraseTranslationExercise(exerciseData: any) {
  const phraseTranslationExercise = new PhraseTranslationExercise();
  Object.assign(phraseTranslationExercise, exerciseData);
  assert(phraseTranslationExercise.phrase);
  return phraseTranslationExercise;
}

function createOtherTranslationExercise(exerciseData: any) {
  const otherTranslationExercise = new OtherTranslationExercise();
  Object.assign(otherTranslationExercise, exerciseData);
  assert(otherTranslationExercise.other);
  return otherTranslationExercise;
}

function createOtherWithGenderTranslationExercise(exerciseData: any) {
  const otherTranslationExercise = new OtherGenderTranslationExercise();
  Object.assign(otherTranslationExercise, exerciseData);
  assert(otherTranslationExercise.other);
  return otherTranslationExercise;
}

function createFitInGapExercise(exerciseData: any) {
  const fitInGapExercise = new FitInGapExercise();
  Object.assign(fitInGapExercise, exerciseData);
  assert(fitInGapExercise.fitIn);
  return fitInGapExercise;
}

export const exerciseFactory = {
  VerbExercise: createVerbExercise,
  GermanVerbExercise: createGermanVerbExercise,
  PolishVerbExercise: createPolishVerbExercise,
  NounTranslation: createNounTranslationExercise,
  AdjectiveTranslation: createAdjectiveTranslationExercise,
  VerbTranslation: createVerbTranslationExercise,
  VerbOtherFormTranslation: createVerbOtherFormTranslationExercise,
  SentenceTranslation: createSentenceTranslationExercise,
  PhraseTranslation: createPhraseTranslationExercise,
  OtherTranslation: createOtherTranslationExercise,
  OtherWithGenderTranslation: createOtherWithGenderTranslationExercise,
  FitInGap: createFitInGapExercise,
  GermanNounTranslation: createGermanNounTranslationExercise,
  GermanVerbTranslation: createGermanVerbTranslationExercise,
  GermanOtherTranslation: createGermanOtherTranslationExercise,
  PolishNounTranslation: createPolishNounTranslationExercise,
  PolishVerbTranslation: createPolishVerbTranslationExercise,
  PolishOtherTranslation: createPolishOtherTranslationExercise,
  GermanCaseExercise: createGermanCaseExercise
};

export function parseResults(results: Result[]): Result[] {
  return results.map((result) => {
    const exerciseData = result.exercise;
    const exerciseType = exerciseData.exerciseType;
    const createExercise = exerciseFactory[exerciseType];

    if (createExercise) {
      result.date = new Date(result.date);
      result.exercise = createExercise(exerciseData);
      result.exercise.name = result.exercise.toString();
    } else {
      console.log('error');
    }
    return result;
  });
}

export async function getAllResultsAsync(language: Language): Promise<Result[]> {
  const results = fetchAllResultsSync(language);

  logger.info(`Fetched ${results.length} from DB`);

  return parseResults(results);
}

export function getAllResults(language: Language, sync = false): Result[] {
  const resultsJson: Result[] = sync ? fetchAllResultsSync(language) : fetchAllResults();

  return toResultsParsed(resultsJson);
}

export function toResultsParsed(resultsJson: Result[]): Result[] {
  return resultsJson.map((result) => {
    const exerciseData = result.exercise;
    const exerciseType = exerciseData.exerciseType;
    const createExercise = exerciseFactory[exerciseType];

    if (createExercise) {
      result.date = new Date(result.date);
      result.exercise = createExercise(exerciseData);
    }

    return result;
  });
}

export type DateResults = {
  date: DateTimeExtended;
  results: Result[];
};

export function getAllResultsBeforeDateOneWeek(language: Language, date: DateTimeExtended) {
  return getAllResults(language, true).filter((result) => {
    const upDateLimit = date.ordinal;
    const downDateLimit = date.plus({ week: -1 }).ordinal;

    return (
      DateTimeExtended.fromJSDate(result.date).ordinal >= downDateLimit &&
      DateTimeExtended.fromJSDate(result.date).ordinal <= upDateLimit
    );
  });
}

export function getAllResultsByDate(allResults: Result[]): DateResults[] {
  let resultDate = DateTimeExtended.fromJSDate(allResults[0].date);
  const resultsByDate: DateResults[] = [];
  const endDate = DateTimeExtended.fromJSDate(allResults[allResults.length - 1].date).plus({ month: 1 });
  while (resultDate.ordinal <= endDate.ordinal) {
    const results = allResults.filter(
      // eslint-disable-next-line no-loop-func
      (result) => DateTimeExtended.fromJSDate(result.date).ordinal <= resultDate.ordinal
    );
    resultsByDate.push({
      date: DateTimeExtended.fromJSDate(resultDate.toJSDate()),
      results
    });
    resultDate = resultDate.plus({ week: 1 });
  }
  return resultsByDate;
}

export function getAllResultsForExerciseType(results: Result[], exerciseType: ExerciseType): Result[] {
  return results.filter((result) => result.exercise.exerciseType === exerciseType);
}

export function getAllResultsForBaseWord(results: Result[], baseWord: string): Result[] {
  return results.filter((result) => {
    return result.exercise.getBaseWordAsString() === baseWord;
  });
}

export function getAllResultsForExercise(
  results: Result[],
  exercise: Exercise,
  resultFilter: (result: Result) => boolean = (_) => true
): Result[] {
  return results
    .filter((result) => {
      return result.exercise.equal(exercise);
    })
    .filter(resultFilter);
}

export function getAllAnswersForExercise(language: Language, exercise: Exercise): string[] {
  const allResults = getAllResultsForExercise(getAllResults(language), exercise);

  return allResults.map((result) => result.answer);
}

export function getAllResultsForExerciseSubject(results: Result[], exercise: Exercise): Result[] {
  return results.filter((result) => {
    if (exercise instanceof TranslationExercise) {
      return (exercise as TranslationExercise).isTranslationSubjectEqual(result.exercise);
    }
    if (exercise instanceof VerbExercise && result.exercise instanceof VerbExercise) {
      return exercise.verb.infinitive === result.exercise.verb.infinitive;
    }
    return result.exercise.equal(exercise);
  });
}
