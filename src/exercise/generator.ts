import { Exercise } from './exercise';
import { Person, readAll, Verb } from '../repository/exercises-repository';
import { VerbExercise } from './verb-exercise';
import { NounTranslationExercise } from './translation/noun-translation-exercise';
import { TranslationType } from './translation/translation-exercise';
import { VerbTranslationExercise } from './translation/verb-translation-exercise';
import { AdjectiveTranslationExercise } from './translation/adjective-translation-exercise';
import { SentenceTranslationExercise } from './translation/sentence-translation-exercise';
import { FitInGapExercise } from './fit-in-gap-exercise';
import { OtherTranslationExercise } from './translation/other-translation-exercise';
import { sortExercises } from '../priority/priority';
import { PhraseTranslationExercise } from './translation/phrase-translation-exercise';
import { exerciseFactory, getAllResults, getAllResultsAsync } from '../repository/result-repository';
import { execSync } from 'child_process';
import { loadValidConfig } from '../server/configuration';

type ExerciseGenerator = () => Exercise[];

export const VerbExerciseGenerator: ExerciseGenerator = () => {
  const presentSimpleVerbs = readAll().verbs.flatMap((verb) =>
    Object.keys(Person).flatMap((person) =>
      VerbExercise.new(verb, Person[person as keyof typeof Person], 'presentSimple')
    )
  );
  const pastPerfectVerbs = readAll()
    .verbs.filter((verb) => verb.pastPerfect)
    .flatMap((verb) =>
      Object.keys(Person).flatMap((person) =>
        VerbExercise.new(verb, Person[person as keyof typeof Person], 'pastPerfect')
      )
    );
  return pastPerfectVerbs.concat(presentSimpleVerbs);
};

const translationTypes: TranslationType[] = ['toPortugueseFromHearing', 'toEnglish', 'toPortuguese'];

const NounTranslationGenerator: ExerciseGenerator = () => {
  return readAll().nouns.flatMap((noun) =>
    translationTypes.map((translationType) => NounTranslationExercise.new(noun, translationType))
  );
};

const VerbTranslationGenerator: ExerciseGenerator = () => {
  return readAll().verbs.flatMap((verb) =>
    translationTypes.map((translationType) => VerbTranslationExercise.new(verb, translationType))
  );
};

const SentenceTranslationGenerator: ExerciseGenerator = () => {
  return readAll().sentences.flatMap((sentence) => [
    SentenceTranslationExercise.new(sentence, 'toPortugueseFromHearing'),
    SentenceTranslationExercise.new(sentence, 'toPortuguese')
  ]);
};

const PhraseTranslationGenerator: ExerciseGenerator = () => {
  return readAll().phrases.flatMap((phrase) => [
    PhraseTranslationExercise.new(phrase, 'toPortugueseFromHearing'),
    PhraseTranslationExercise.new(phrase, 'toPortuguese')
  ]);
};

const OtherTranslationGenerator: ExerciseGenerator = () => {
  return readAll().others.flatMap((other) =>
    translationTypes.map((translationType) => OtherTranslationExercise.new(other, translationType))
  );
};

const AdjectiveTranslationGenerator: ExerciseGenerator = () => {
  return readAll().adjectives.flatMap((noun) =>
    translationTypes.flatMap((translationType) => [
      AdjectiveTranslationExercise.new(noun, translationType, 'masculine', 'singular'),
      AdjectiveTranslationExercise.new(noun, translationType, 'masculine', 'plural'),
      AdjectiveTranslationExercise.new(noun, translationType, 'feminine', 'singular'),
      AdjectiveTranslationExercise.new(noun, translationType, 'feminine', 'plural')
    ])
  );
};

const FitInGapGenerator: ExerciseGenerator = () => {
  return readAll().fitIn.map((fit) => {
    const fitInGapExercise = new FitInGapExercise();
    fitInGapExercise.fitIn = fit;

    return fitInGapExercise;
  });
};

export function generateAllPossibleExercises(): Exercise[] {
  return [
    VerbExerciseGenerator,
    NounTranslationGenerator,
    VerbTranslationGenerator,
    SentenceTranslationGenerator,
    PhraseTranslationGenerator,
    OtherTranslationGenerator,
    AdjectiveTranslationGenerator,
    FitInGapGenerator
  ].flatMap((generator) => generator());
}

export async function generateExercisesForSessionAsync(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean
): Promise<Exercise[]> {
  const exercises = generateAllPossibleExercises().filter((exercise) => filter(exercise));
  const allResults = await getAllResultsAsync();
  const exercisesFinal = sort ? sortExercises(exercises, allResults) : exercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}

export function fetchExercisesForSession(): Exercise[] {
  const { apiKey, apiURL} = loadValidConfig();
  const exercise = execSync(
    `curl -s --location --request GET ${apiURL}/generate/local --header "Authorization: Bearer ${apiKey}"`
  ).toString();
  console.log(`Exercises for session: [${exercise}]`);
  const exerciseJSON: Exercise[] = JSON.parse(exercise);
  const exercies = exerciseJSON.map((ex) => {
    const exerciseType = ex.exerciseType;
    const createExercise = exerciseFactory[exerciseType];
    return createExercise(ex);
  });
  return exercies;
}

export function generateExercisesForSession(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean
): Exercise[] {
  const exercises = generateAllPossibleExercises().filter((exercise) => filter(exercise));
  const allResults = getAllResults();
  const exercisesFinal = sort ? sortExercises(exercises, allResults) : exercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}
