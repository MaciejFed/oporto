import { getProgressAggregate } from '../service/progress/progress-aggregate';
import fs from 'fs';
import { Result } from '../service/result';
import { parseResults } from '../repository/result-repository';
import path from 'path';
import { generateAllPossibleExercises } from '../exercise/generator';
import { Language } from '../common/language';
import { createTable } from './stat';
import { generateResultForExerciseDaysAgo, generateResultForExerciseMinutesAgo } from '../priority/priority.util';
import { VerbExercise } from '../exercise/verb-exercise';
import { Person, readAll, wordDatabase } from '../repository/exercises-repository';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { getRandomNoun } from '../service/translation';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';

const filePath = path.resolve(__dirname, '..', '..', 'results-data', 'oporto.results.json');

const fileContent = fs.readFileSync(filePath, 'utf8');
const results: Result[] = parseResults(JSON.parse(fileContent));

describe('create table', () => {
  it('creates table', () => {
    const progressAggregate = getProgressAggregate(results, generateAllPossibleExercises(Language.Portuguese));

    const table = createTable('Some table', progressAggregate.words.NOUN, results, Language.Portuguese);
    expect(JSON.stringify(table)).toMatchSnapshot();
  });
});
