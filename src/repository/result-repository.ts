/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fit-in-gap-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readResultsFromDB, readResultsFromFile, saveResultsToFile } from '../io/file';
import assert from 'assert';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { DateTimeExtended } from '../common/common';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { PhraseTranslationExercise } from '../exercise/translation/phrase-translation-exercise';
import { loadValidConfig } from '../server/configuration';
import { execSync } from 'child_process';

function createVerbExercise(exerciseData: any) {
  const verbExercise = new VerbExercise();
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

function createFitInGapExercise(exerciseData: any) {
  const fitInGapExercise = new FitInGapExercise();
  Object.assign(fitInGapExercise, exerciseData);
  assert(fitInGapExercise.fitIn);
  return fitInGapExercise;
}

export const exerciseFactory = {
  VerbExercise: createVerbExercise,
  NounTranslation: createNounTranslationExercise,
  AdjectiveTranslation: createAdjectiveTranslationExercise,
  VerbTranslation: createVerbTranslationExercise,
  SentenceTranslation: createSentenceTranslationExercise,
  PhraseTranslation: createPhraseTranslationExercise,
  OtherTranslation: createOtherTranslationExercise,
  FitInGap: createFitInGapExercise
};

export async function getAllResultsAsync(): Promise<Result[]> {
  const results = await readResultsFromDB();

  logger.info(`Fetched ${results.length} from DB`);

  return results.map((result) => {
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

export function getAllResults(): Result[] {
  const results = readResultsFromFile();
  const resultsJson: Result[] = JSON.parse(results);

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

export function getAllResultsBeforeDateOneWeek(date: DateTimeExtended) {
  return getAllResults().filter((result) => {
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
  const endDate = DateTimeExtended.fromJSDate(allResults[allResults.length - 1].date).plus({ week: 1 });
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

export function saveNewResult(newResult: Result) {
  logger.debug(`Saving new result ${JSON.stringify(newResult)}`);
  const { apiKey, apiURL} = loadValidConfig();
  const resultId = execSync(
    `curl -s --location --request POST ${apiURL}/results/save --header "Authorization: Bearer ${apiKey}" --data '${JSON.stringify(
      newResult
    )}'`
  ).toString();
  logger.info(`Saved new result: [${resultId}]`);
}

export function getAllResultsForExerciseType(results: Result[], exerciseType: ExerciseType): Result[] {
  return results.filter((result) => result.exercise.exerciseType === exerciseType);
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

export function getAllAnswersForExercise(exercise: Exercise): string[] {
  const allResults = getAllResultsForExercise(getAllResults(), exercise);

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
