import { exec, execSync } from 'child_process';
import util from 'util';
import { loadValidConfig } from '../server/configuration';
import { MoveieExample } from '../io/file';
import { Exercise } from '../exercise/exercise';
import { Result } from '../service/result';
import { logger } from '../common/logger';

const execAsync = util.promisify(exec);
const { apiKey, apiURL } = loadValidConfig();

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
  logger.debug(`Saving new result ${JSON.stringify(newResult)}`);
  execAsync(
    `curl -s --location --request POST ${apiURL}/results/save --header "Authorization: Bearer ${apiKey}" --data '${JSON.stringify(
      newResult
    )}'`
  ).then(({ stdout: resultId }) => {
    logger.info(`Saved new result: [${resultId}]`);
  });
};

export const translateToEnglish = async (text: [string, string]): Promise<string> => {
  const command = `curl -s -X POST 'https://api-free.deepl.com/v2/translate' \
      --header 'Authorization: DeepL-Auth-Key ${apiKey}' \
      --data-urlencode 'text=${text[0].concat(` ${text[1]}`)}' \
      --data-urlencode 'target_lang=EN'`;
  try {
    const { stdout, stderr } = await execAsync(command);
    if (stderr) {
      logger.error(`Error translating to English: [${stderr}]`);
    }
    const translation = stdout ? JSON.parse(stdout) : { translations: [{ text: '' }] };
    return translation.translations[0].text;
  } catch (error) {
    console.error('Error during translation:', error);
    throw error;
  }
};
