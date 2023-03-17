/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fit-in-gap-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from '../io/file';
import assert from 'assert';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { DateTimeExtended } from '../common/common';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';

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

const exerciseFactory = {
  VerbExercise: createVerbExercise,
  NounTranslation: createNounTranslationExercise,
  AdjectiveTranslation: createAdjectiveTranslationExercise,
  VerbTranslation: createVerbTranslationExercise,
  SentenceTranslation: createSentenceTranslationExercise,
  OtherTranslation: createOtherTranslationExercise,
  FitInGap: createFitInGapExercise
};

export function getAllResults(): Result[] {
  const results = readFromFile();
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
  const results = getAllResults();
  results.push(newResult);

  saveToFile(JSON.stringify(results, null, 2));
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
