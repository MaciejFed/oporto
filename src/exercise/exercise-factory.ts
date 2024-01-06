import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fit-in-gap-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readResultsFromFile, saveResultsToFile } from '../io/file';
import assert from 'assert';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { DateTimeExtended } from '../common/common';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { PhraseTranslationExercise } from '../exercise/translation/phrase-translation-exercise';

function createVerbExercise(exerciseData: any) {
  const verbExercise = new VerbExercise();
  Object.assign(verbExercise, exerciseData);
  assert(verbExercise.verb);
  assert(verbExercise.person);
  return verbExercise;
}

function createNounTranslationExercise(exerciseData: any) {
  const nounTranslationExercise = new NounTranslationExercise();
  Object.assign(nounTranslationExercise, exerciseData);
  assert(nounTranslationExercise.noun.portuguese);
  assert(nounTranslationExercise.noun.english);
  return nounTranslationExercise;
}

function createAdjectiveTranslationExercise(exerciseData: any) {
  const adjectiveTranslationExercise = new AdjectiveTranslationExercise();
  Object.assign(adjectiveTranslationExercise, exerciseData);
  assert(adjectiveTranslationExercise.adjective.masculine);
  assert(adjectiveTranslationExercise.adjective.feminine);
  assert(adjectiveTranslationExercise.adjective.english);
  return adjectiveTranslationExercise;
}

function createVerbTranslationExercise(exerciseData: any) {
  const verbTranslationExercise = new VerbTranslationExercise();
  Object.assign(verbTranslationExercise, exerciseData);
  assert(verbTranslationExercise.verb);
  assert(verbTranslationExercise.translationType);
  return verbTranslationExercise;
}

function createSentenceTranslationExercise(exerciseData: any) {
  const sentenceTranslationExercise = new SentenceTranslationExercise();
  Object.assign(sentenceTranslationExercise, exerciseData);
  assert(sentenceTranslationExercise.sentence);
  return sentenceTranslationExercise;
}

function createPhraseTranslationExercise(exerciseData: any) {
  const phraseTranslationExercise = new PhraseTranslationExercise();
  Object.assign(phraseTranslationExercise, exerciseData);
  assert(phraseTranslationExercise.phrase);
  return phraseTranslationExercise;
}

function createOtherTranslationExercise(exerciseData: any) {
  const otherTranslationExercise = new OtherTranslationExercise();
  Object.assign(otherTranslationExercise, exerciseData);
  assert(otherTranslationExercise.other);
  return otherTranslationExercise;
}

function createFitInGapExercise(exerciseData: any) {
  const fitInGapExercise = new FitInGapExercise();
  Object.assign(fitInGapExercise, exerciseData);
  assert(fitInGapExercise.fitIn);
  return fitInGapExercise;
}

export const exerciseFactory = {
  VerbExercise: createVerbExercise,
  NounTranslation: createNounTranslationExercise,
  AdjectiveTranslation: createAdjectiveTranslationExercise,
  VerbTranslation: createVerbTranslationExercise,
  SentenceTranslation: createSentenceTranslationExercise,
  PhraseTranslation: createPhraseTranslationExercise,
  OtherTranslation: createOtherTranslationExercise,
  FitInGap: createFitInGapExercise
};
