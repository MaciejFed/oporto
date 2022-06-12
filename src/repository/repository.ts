import fs from 'fs';
import { Schema } from 'inspector';

type RegularVerb = string

type Verbs = {
  regular: RegularVerb[]
};

type Schema = {
  verbs: Verbs
};

let database: Schema;

fs.readFile('/Users/mfedorowiat/mdev/oporto/src/repository/db.json', 'utf8', (err, json) => {
    database = JSON.parse(json);
})

export function readAll() {
    return database;
}


