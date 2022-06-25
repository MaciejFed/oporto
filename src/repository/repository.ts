import { db, Schema } from './db';

const database: Schema = db;

export function readAll() {
  return database;
}
