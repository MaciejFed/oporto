/* eslint-disable no-case-declarations */
import { Exercise, ExerciseType } from '../exercise/exercise';
import { FitInGapExercise } from '../exercise/fit-in-gap-exercise';
import { VerbExercise } from '../exercise/verb-exercise';
import { logger } from '../common/logger';
import { Result } from '../service/result';
import { readFromFile, saveToFile } from '../io/file';
import assert from 'assert';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { SentenceTranslationExercise } from '../exercise/translation/sentence-translation-exercise';
import { TranslationExercise } from '../exercise/translation/translation-exercise';
import { DateTimeExtended } from '../common/common';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';

export function getAllResults(): Result[] {
  const results = readFromFile();
  const resultsJson: Result[] = JSON.parse(results);
  let exercise: Exercise;
  return resultsJson.map((result) => {
    switch (result.exercise.exerciseType) {
      case 'VerbExercise':
        const verbExercise: VerbExercise = new VerbExercise();
        verbExercise.verb = (result.exercise as unknown as VerbExercise).verb;
        verbExercise.person = (result.exercise as unknown as VerbExercise).person;
        verbExercise.verbTime = (result.exercise as unknown as VerbExercise).verbTime;
        assert(verbExercise.verb);
        assert(verbExercise.person);
        exercise = verbExercise;
        break;
      case 'NounTranslation':
        const nounTranslationExercise: NounTranslationExercise = new NounTranslationExercise();
        nounTranslationExercise.noun = (result.exercise as unknown as NounTranslationExercise).noun;
        nounTranslationExercise.translationType = (
          result.exercise as unknown as NounTranslationExercise
        ).translationType;
        assert(nounTranslationExercise.noun.portuguese);
        assert(nounTranslationExercise.noun.english);
        exercise = nounTranslationExercise;
        break;
      case 'AdjectiveTranslation':
        const adjectiveTranslationExercise: AdjectiveTranslationExercise = new AdjectiveTranslationExercise();
        adjectiveTranslationExercise.adjective = (result.exercise as unknown as AdjectiveTranslationExercise).adjective;
        adjectiveTranslationExercise.translationType = (
          result.exercise as unknown as AdjectiveTranslationExercise
        ).translationType;
        assert(adjectiveTranslationExercise.adjective.masculine);
        assert(adjectiveTranslationExercise.adjective.feminine);
        assert(adjectiveTranslationExercise.adjective.english);
        exercise = adjectiveTranslationExercise;
        break;
      case 'VerbTranslation':
        const verbTranslationExercise: VerbTranslationExercise = new VerbTranslationExercise();
        verbTranslationExercise.verb = (result.exercise as unknown as VerbTranslationExercise).verb;
        verbTranslationExercise.translationType = (
          result.exercise as unknown as NounTranslationExercise
        ).translationType;
        assert(verbTranslationExercise.verb);
        assert(verbTranslationExercise.translationType);
        exercise = verbTranslationExercise;
        break;
      case 'SentenceTranslation':
        const sentenceTranslationExercise: SentenceTranslationExercise = new SentenceTranslationExercise();
        sentenceTranslationExercise.sentence = (result.exercise as unknown as SentenceTranslationExercise).sentence;
        sentenceTranslationExercise.translationType = (
          result.exercise as unknown as SentenceTranslationExercise
        ).translationType;
        assert(sentenceTranslationExercise.sentence);
        exercise = sentenceTranslationExercise;
        break;
      case 'OtherTranslation':
        const otherTranslationExercise: OtherTranslationExercise = new OtherTranslationExercise();
        otherTranslationExercise.other = (result.exercise as unknown as OtherTranslationExercise).other;
        otherTranslationExercise.translationType = (
          result.exercise as unknown as OtherTranslationExercise
        ).translationType;
        assert(otherTranslationExercise.other);
        exercise = otherTranslationExercise;
        break;
      case 'FitInGap':
        const fitInGapExercise: FitInGapExercise = new FitInGapExercise();
        fitInGapExercise.fitIn = (result.exercise as unknown as FitInGapExercise).fitIn;
        assert(fitInGapExercise.fitIn);
        exercise = fitInGapExercise;
        break;
      default:
        break;
    }
    result.date = new Date(result.date);
    result.exercise = exercise;
    return result;
  });
}

export type DateResults = {
  date: DateTimeExtended;
  results: Result[];
};

export function getAllResultsBeforeDateOneWeek(date: DateTimeExtended) {
  return getAllResults().filter((result) => {
    const upDateLimit = date.ordinal;
    const downDateLimit = date.plus({ week: -1 }).ordinal;

    return (
      DateTimeExtended.fromJSDate(result.date).ordinal >= downDateLimit &&
      DateTimeExtended.fromJSDate(result.date).ordinal <= upDateLimit
    );
  });
}

export function getAllResultsByDate(): DateResults[] {
  let resultDate = DateTimeExtended.fromJSDate(getAllResults()[0].date);
  const resultsByDate: DateResults[] = [];
  while (resultDate.plus({ week: -1 }).ordinal <= DateTimeExtended.now().ordinal) {
    const results = getAllResults().filter(
      // eslint-disable-next-line no-loop-func
      (result) => DateTimeExtended.fromJSDate(result.date).ordinal <= resultDate.ordinal
    );
    resultsByDate.push({
      date: resultDate,
      results
    });
    resultDate = resultDate.plus({ week: 1 });
  }
  return resultsByDate;
}

export function saveNewResult(newResult: Result) {
  logger.info(`Saving new result ${JSON.stringify(newResult)}`);
  const results = getAllResults();
  results.push(newResult);

  saveToFile(JSON.stringify(results, null, 2));
}

export function getAllResultsForExerciseType(results: Result[], exerciseType: ExerciseType): Result[] {
  return results.filter((result) => result.exercise.exerciseType === exerciseType);
}

export function getAllResultsForExercise(results: Result[], exercise: Exercise): Result[] {
  return results.filter((result) => {
    return result.exercise.equal(exercise);
  });
}

export function getAllResultsForExerciseSubject(results: Result[], exercise: Exercise): Result[] {
  return results.filter((result) => {
    if (exercise instanceof TranslationExercise) {
      return (exercise as TranslationExercise).isTranslationSubjectEqual(result.exercise);
    }
    if (exercise instanceof VerbExercise && result.exercise instanceof VerbExercise) {
      return exercise.verb.infinitive === result.exercise.verb.infinitive;
    }
    return result.exercise.equal(exercise);
  });
}
