import { exec, execSync } from 'child_process';
import util from 'util';
import { loadValidConfig } from '../server/configuration';
import { MoveieExample } from '../io/file';
import { Exercise } from '../exercise/exercise';
import { Result } from '../service/result';
import { logger } from '../common/logger';
import { readAllResults } from '../server/db';

const execAsync = util.promisify(exec);
const { apiKey, apiURL, deepLApiKey } = loadValidConfig();

let resultsCached: Result[] = [];

const preFetchAllResults = (): Result[] => {
  if (!resultsCached.length) {
    logger.info('Fetching all results...');
    readAllResults().then((results) => {
      logger.info('Results saved to cache');
      resultsCached = results;
    })
  }
  return resultsCached;
};

export const fetchAllResults = (): Result[] => resultsCached;

preFetchAllResults();

export const fetchMoveiExample = async (word: string): Promise<MoveieExample> => {
  const command = `curl -s --location '${apiURL}/example/find' \
    --header 'Authorization: Bearer ${apiKey}' \
    --header 'Content-Type: application/json' \
    --data '{
        "word": "${word}"
    }'`;
  const { stdout } = await execAsync(command);
  return JSON.parse(stdout);
};

export const fetchExercisesForSession = (): Exercise[] => {
  const exercise = execSync(
    `curl -s --location --request GET ${apiURL}/generate/local --header "Authorization: Bearer ${apiKey}"`
  ).toString();
  logger.info(`Exercises for session: [${exercise}]`);
  return JSON.parse(exercise);
};

export const saveNewResult = async (newResult: Result) => {
  resultsCached.push(newResult);
  const command = `curl -s --location --request POST ${apiURL}/results/save --header "Authorization: Bearer ${apiKey}" --header 'Content-Type: application/json' --data '${JSON.stringify(
    newResult
  )}'`;
  execAsync(command).then(({ stdout: resultId }) => {
    logger.info(`Saved new result: [${resultId}]`);
  });
};

export const translateToEnglish = async (text: [string, string]): Promise<string> => {
  const translationBody = `text=${text[0].concat(` ${text[1]}`)}`;
  const command = `curl -s -X POST 'https://api-free.deepl.com/v2/translate' \
      --header 'Authorization: DeepL-Auth-Key ${deepLApiKey}' \
      --data-urlencode '${translationBody}' \
      --data-urlencode 'target_lang=EN'`;
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      logger.error(`Error translating to English: [${stderr}]`);
    }
    logger.info(`Translation Result: [${stdout}] [${stderr}]`);
    const translation = stdout ? JSON.parse(stdout) : { translations: [{ text: '' }] };
    return translation.translations[0].text;
  } catch (error) {
    console.error('Error during translation:', error);
    throw error;
  }
};
