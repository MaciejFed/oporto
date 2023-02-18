import { Exercise } from './exercise';
import {Person, readAll, Verb} from '../repository/exercises-repository';
import { VerbExercise } from './verb-exercise';
import { NounTranslationExercise } from './translation/noun-translation-exercise';
import { TranslationType } from './translation/translation-exercise';
import { VerbTranslationExercise } from './translation/verb-translation-exercise';
import { AdjectiveTranslationExercise } from './translation/adjective-translation-exercise';
import { SentenceTranslationExercise } from './translation/sentence-translation-exercise';
import { FitInGapExercise } from './fit-in-gap-exercise';
import { OtherTranslationExercise } from './translation/other-translation-exercise';
import { sortExercises } from '../priority/priority';

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

const translationTypes: TranslationType[] = ['toPortugueseFromHearing', 'toPortuguese', 'toEnglish'];

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
  return readAll().sentences.flatMap((sentence) =>
    translationTypes.map((translationType) => SentenceTranslationExercise.new(sentence, translationType))
  );
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
    OtherTranslationGenerator,
    AdjectiveTranslationGenerator,
    FitInGapGenerator
  ].flatMap((generator) => generator());
}

export function generateExercisesForSession(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean
): Exercise[] {
  const exercises = generateAllPossibleExercises().filter((exercise) => filter(exercise));
  const exercisesFinal = sort ? sortExercises(exercises) : exercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}
