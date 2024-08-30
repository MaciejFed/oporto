import path from 'path';
import fs from 'fs';
import { Result } from '../service/result';
import { parseResults } from '../repository/result-repository';
import { generateAllPossibleExercises } from '../exercise/generator';
import { Language } from '../common/language';
import { sortExercises } from './priority';

const filePath = path.resolve(__dirname, '..', '..', 'results-data', 'oporto.results.json');
const filePathDE = path.resolve(__dirname, '..', '..', 'results-data', 'oporto.results_de.json');

describe('Priority', () => {
  it('PT', () => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const results: Result[] = parseResults(JSON.parse(fileContent));

    const { exercisesWithPriorities } = sortExercises(
      generateAllPossibleExercises(Language.Portuguese),
      results,
      Language.Portuguese
    );
    expect(exercisesWithPriorities).toMatchSnapshot();
  }, 10_000);

  it('DE', () => {
    const fileContent = fs.readFileSync(filePathDE, 'utf8');
    const results: Result[] = parseResults(JSON.parse(fileContent));

    const { exercisesWithPriorities } = sortExercises(
      generateAllPossibleExercises(Language.German),
      results,
      Language.German
    );
    expect(exercisesWithPriorities).toMatchSnapshot();
  }, 10_000);
});
