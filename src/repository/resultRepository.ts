/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fitInGapExercise';
import { NounTranslationExercise, SentenceTranslationExercise } from '../exercise/translationExercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../exercise/verbExercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from '../io/file';

export function getAllResults(): Result[] {
  const results = readFromFile();
  const resultsJson: Result[] = JSON.parse(results);
  let exercise: Exercise;
  return resultsJson.map((result) => {
    switch (result.exercise.exercsiseType) {
      case 'RegularVerb':
        const regularVerbExercise: RegularVerbExercise = new RegularVerbExercise();
        regularVerbExercise.verb = (result.exercise as unknown as RegularVerbExercise).verb;
        regularVerbExercise.person = (result.exercise as unknown as RegularVerbExercise).person;
        exercise = regularVerbExercise;
        break;
      case 'IrregularVerb':
        const irregularVerbExercise: IrregularVerbExercise = new IrregularVerbExercise();
        irregularVerbExercise.verb = (result.exercise as unknown as IrregularVerbExercise).verb;
        irregularVerbExercise.person = (result.exercise as unknown as IrregularVerbExercise).person;
        exercise = irregularVerbExercise;
        break;
      case 'NounTranslation':
        const nounTranslationExercise: NounTranslationExercise = new NounTranslationExercise();
        nounTranslationExercise.noun = (result.exercise as unknown as NounTranslationExercise).noun;
        exercise = nounTranslationExercise;
        break;
      case 'SentenceTranslation':
        const sentenceTranslationExercise: SentenceTranslationExercise = new SentenceTranslationExercise();
        sentenceTranslationExercise.sentence = (result.exercise as unknown as SentenceTranslationExercise).sentence;
        exercise = sentenceTranslationExercise;
        break;
      case 'FitInGap':
        const fitInGapExercise: FitInGapExercise = new FitInGapExercise();
        fitInGapExercise.fitIn = (result.exercise as unknown as FitInGapExercise).fitIn;
        exercise = fitInGapExercise;
        break;
      default:
        break;
    }
    result.exercise = exercise;
    return result;
  });
}

export function saveNewResult(newResult: Result) {
  logger.info(`Saving new result ${newResult}`);
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
