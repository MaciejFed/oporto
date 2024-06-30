import { exec, execSync } from 'child_process';
import util from 'util';
import { getSavedAudioPath, loadValidConfig } from '../server/configuration';
import { MovieExample } from '../io/file';
import { Exercise } from '../exercise/exercise';
import { Result } from '../service/result';
import { logger } from '../common/logger';
import { Language } from '../common/language';
import { Rate } from '../server/audio/audio.types';

const execAsync = util.promisify(exec);
const { apiKey, apiURL, deepLApiKey } = loadValidConfig();

let resultsCached: Result[] = [];
const MAX_BUFFER = 10 * 1024 * 1024;

const fetchResults = (language: Language) =>
  `curl -s --location --request GET ${apiURL}/${language}/results --header "Authorization: Bearer ${apiKey}"`;

export const preFetchAllResults = (language: Language): void => {
  if (!resultsCached.length) {
    logger.info('Fetching all results...');
    execAsync(fetchResults(language), { maxBuffer: MAX_BUFFER }).then(({ stdout: results }) => {
      logger.info('Results saved to cache');
      resultsCached = JSON.parse(results);
    });
  }
};

export const fetchAllResults = (): Result[] => resultsCached;

export const fetchAllResultsSync = (language: Language): Result[] => {
  const results = execSync(fetchResults(language), { maxBuffer: MAX_BUFFER }).toString();
  return JSON.parse(results);
};

export const getAudio = (language: Language, text: string, type: 'example' | 'answer', rate: Rate) => {
  const outputPath = getSavedAudioPath(type, rate);
  const command = `curl -s --location '${apiURL}/${language}/audio' \
    --header 'Authorization: Bearer ${apiKey}' \
    --header 'Content-Type: application/json' \
    -o ${outputPath} \
    --data '{
        "text": "${text}",
        "rate": "${rate}"
    }'`;
  execSync(command);
};

export const fetchMovieExample = async (language: Language, word: string): Promise<MovieExample> => {
  const command = `curl -s --location '${apiURL}/${language}/example/find' \
    --header 'Authorization: Bearer ${apiKey}' \
    --header 'Content-Type: application/json' \
    --data '{
        "word": "${word}"
    }'`;
  const { stdout } = await execAsync(command);
  return JSON.parse(stdout);
};

export const fetchExercisesForSession = (language: Language): Exercise[] => {
  const exercise = execSync(
    `curl -s --location --request GET ${apiURL}/${language}/generate/local --header "Authorization: Bearer ${apiKey}"`
  ).toString();
  return JSON.parse(exercise);
};

export const saveNewResult = async (language: Language, newResult: Result) => {
  resultsCached.push(newResult);
  const command = `curl -s --location --request POST ${apiURL}/${language}/results/save --header "Authorization: Bearer ${apiKey}" --header 'Content-Type: application/json' --data '${JSON.stringify(
    newResult
  )}'`;
  execAsync(command).then(({ stdout: resultId }) => {
    logger.info(`Saved new result: [${resultId}]`);
  });
};

export const saveFavoriteExample = async (language: Language, example: MovieExample) => {
  const command = `curl -s --location --request POST ${apiURL}/${language}/example/save --header "Authorization: Bearer ${apiKey}" --header 'Content-Type: application/json' --data '${JSON.stringify(
    example
  )}'`;
  execSync(command);
};

export const translateToEnglish = async (text: string): Promise<string> => {
  const translationBody = `text=${text}`;
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
