import { readAll } from '../repository/repository';

export const getRandomVerb = () => {
    return readAll().verbs.regular[0];
}
