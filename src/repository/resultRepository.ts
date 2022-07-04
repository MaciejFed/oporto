import { Exercise, ExerciseType } from '../exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../exercise/verbExercise';
import { logger } from '../logger/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from './file';

export function getAllResults(): Result[] {
  const results = readFromFile();
  const resultsJson: Result[] = JSON.parse(results);
  let exercise: Exercise;
  return resultsJson.map((result) => {
    if (result.exercise.exercsiseType === 'RegularVerb') {
      const regularVerbExercise: RegularVerbExercise = new RegularVerbExercise();
      regularVerbExercise.verb = (result.exercise as unknown as RegularVerbExercise).verb;
      regularVerbExercise.person = (result.exercise as unknown as RegularVerbExercise).person;
      exercise = regularVerbExercise;
    } else {
      const irregularVerbExercise: IrregularVerbExercise = new IrregularVerbExercise();
      irregularVerbExercise.verb = (result.exercise as unknown as IrregularVerbExercise).verb;
      irregularVerbExercise.person = (result.exercise as unknown as IrregularVerbExercise).person;
      exercise = irregularVerbExercise;
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
