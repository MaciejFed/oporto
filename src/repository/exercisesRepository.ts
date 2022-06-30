import { db, Schema } from './schema';

const database: Schema = db;

export function readAll() {
  return database;
}
