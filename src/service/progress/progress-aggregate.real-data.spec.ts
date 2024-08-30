import path from 'path';
import fs from 'fs';
import { Result } from '../result';
import { parseResults } from '../../repository/result-repository';
import { getProgressAggregate } from './progress-aggregate';
import { generateAllPossibleExercises } from '../../exercise/generator';
import { Language } from '../../common/language';

const filePath = path.resolve(__dirname, '..', '..', '..', 'results-data', 'oporto.results.json');

describe('Progress Aggregate', () => {
  it('PT', () => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const results: Result[] = parseResults(JSON.parse(fileContent));

    const progressAggregate = getProgressAggregate(results, generateAllPossibleExercises(Language.Portuguese));
    expect(progressAggregate).toMatchSnapshot();
  });
});
