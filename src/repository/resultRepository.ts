/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fitInGapExercise';
import {
  NounTranslationExercise,
  SentenceTranslationExercise,
  VerbTranslationExercise
} from '../exercise/translationExercise';
import { VerbExercise } from '../exercise/verbExercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from '../io/file';
import assert from 'assert';
import { DateTime } from 'luxon';

export function getAllResults(): Result[] {
  const results = readFromFile();
  const resultsJson: Result[] = JSON.parse(results);
  let exercise: Exercise;
  return resultsJson.map((result) => {
    switch (result.exercise.exercsiseType) {
      case 'VerbExercise':
        const verbExercise: VerbExercise = new VerbExercise();
        verbExercise.verb = (result.exercise as unknown as VerbExercise).verb;
        verbExercise.person = (result.exercise as unknown as VerbExercise).person;
        assert(verbExercise.verb);
        assert(verbExercise.person);
        exercise = verbExercise;
        break;
      case 'NounTranslation':
        const nounTranslationExercise: NounTranslationExercise = new NounTranslationExercise();
        nounTranslationExercise.noun = (result.exercise as unknown as NounTranslationExercise).noun;
        nounTranslationExercise.translationType = (
          result.exercise as unknown as NounTranslationExercise
        ).translationType;
        assert(nounTranslationExercise.noun.portuguese);
        assert(nounTranslationExercise.noun.english);
        assert(nounTranslationExercise.noun.exerciseLevel);
        exercise = nounTranslationExercise;
        break;
      case 'VerbTranslation':
        const verbTranslationExercise: VerbTranslationExercise = new VerbTranslationExercise();
        verbTranslationExercise.verb = (result.exercise as unknown as VerbTranslationExercise).verb;
        verbTranslationExercise.translationType = (
          result.exercise as unknown as NounTranslationExercise
        ).translationType;
        assert(verbTranslationExercise.verb);
        assert(verbTranslationExercise.translationType);
        exercise = verbTranslationExercise;
        break;
      case 'SentenceTranslation':
        const sentenceTranslationExercise: SentenceTranslationExercise = new SentenceTranslationExercise();
        sentenceTranslationExercise.sentence = (result.exercise as unknown as SentenceTranslationExercise).sentence;
        sentenceTranslationExercise.translationType = (
          result.exercise as unknown as SentenceTranslationExercise
        ).translationType;
        assert(sentenceTranslationExercise.sentence);
        exercise = sentenceTranslationExercise;
        break;
      case 'FitInGap':
        const fitInGapExercise: FitInGapExercise = new FitInGapExercise();
        fitInGapExercise.fitIn = (result.exercise as unknown as FitInGapExercise).fitIn;
        assert(fitInGapExercise.fitIn);
        exercise = fitInGapExercise;
        break;
      default:
        break;
    }
    result.date = new Date(result.date);
    result.exercise = exercise;
    result.exercise.correctAnswer = result.exercise.getCorrectAnswer();
    return result;
  });
}

export type DateResults = {
  date: DateTime;
  results: Result[];
};

export function getAllResultsByDate(): DateResults[] {
  let resultDate = DateTime.fromJSDate(getAllResults()[0].date);
  const resultsByDate: DateResults[] = [];
  while (resultDate.ordinal <= DateTime.now().ordinal) {
    // eslint-disable-next-line no-loop-func
    const results = getAllResults().filter((result) => DateTime.fromJSDate(result.date).ordinal <= resultDate.ordinal);
    resultsByDate.push({
      date: resultDate,
      results
    });
    resultDate = resultDate.plus({ days: 1 });
  }
  return resultsByDate;
}

export function saveNewResult(newResult: Result) {
  logger.info(`Saving new result ${JSON.stringify(newResult)}`);
  const results = getAllResults();
  results.push(newResult);

  saveToFile(JSON.stringify(results, null, 2));
}

export function getAllResultsForExerciseType(results: Result[], exerciseType: ExerciseType): Result[] {
  return results.filter((result) => result.exercise.exercsiseType === exerciseType);
}

export function getAllResultsForExercise(results: Result[], exercise: Exercise): Result[] {
  return results.filter((result) => {
    return result.exercise.equal(exercise);
  });
}
