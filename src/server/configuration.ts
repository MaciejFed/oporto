import 'dotenv/config';

export interface Configuration {
  apiKey: string;
  dbHost: string;
  dbUsername: string;
  dbPassword: string;
}

export const loadValidConfig: () => Configuration = () => {
  const assertNonEmpty = (value: string | undefined, name: string) => {
    if (!value) {
      throw new Error(`[${name}] is empty!`);
    }
    console.log(`${name} [${value}]`);
    return value;
  };

  return {
    apiKey: assertNonEmpty(process.env.API_KEY, 'API_KEY'),
    dbHost: assertNonEmpty(process.env.DB_HOST, 'DB_HOST'),
    dbUsername: assertNonEmpty(process.env.DB_USERNAME, 'DB_USERNAME'),
    dbPassword: assertNonEmpty(process.env.DB_PASSWORD, 'DB_PASSWORD')
  };
};
