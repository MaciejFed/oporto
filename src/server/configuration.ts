import os from 'os';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(os.homedir(), '.oporto.env') });

export interface Configuration {
  apiKey: string;
  apiURL: string;
  dbHost: string;
  dbUsername: string;
  dbPassword: string;
  deepLApiKey: string;
}

export const loadValidConfig: () => Configuration = () => {
  const assertNonEmpty = (value: string | undefined, name: string) => {
    if (!value) {
      throw new Error(`[${name}] is empty!`);
    }
    return value;
  };

  return {
    apiKey: assertNonEmpty(process.env.API_KEY, 'API_KEY'),
    apiURL: assertNonEmpty(process.env.API_URL, 'API_URL'),
    dbHost: assertNonEmpty(process.env.DB_HOST, 'DB_HOST'),
    dbUsername: assertNonEmpty(process.env.DB_USERNAME, 'DB_USERNAME'),
    dbPassword: assertNonEmpty(process.env.DB_PASSWORD, 'DB_PASSWORD'),
    deepLApiKey: assertNonEmpty(process.env.DEEPL_API_KEY, 'DEEPL_API_KEY')
  };
};
