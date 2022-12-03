import { Exercise } from './exercise';
import { readAll } from '../repository/exercisesRepository';
import { Person } from '../service/verb';
import { VerbExercise } from './verbExercise';
import { NounTranslationExercise } from './translation/nounTranslationExercise';
import { TranslationType } from './translation/translationExercise';
import { VerbTranslationExercise } from './translation/verbTranslationExercise';
import { AdjectiveTranslationExercise } from './translation/adjectiveTranslationExercise';
import { SentenceTranslationExercise } from './translation/sentenceTranslationExercise';
import { FitInGapExercise } from './fitInGapExercise';

type ExerciseGenerator = () => Exercise[];

const VerbExerciseGenerator: ExerciseGenerator = () => {
  return readAll().verbs.flatMap((verb) =>
    Object.keys(Person).flatMap((person) => VerbExercise.new(verb, Person[person as keyof typeof Person]))
  );
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
    AdjectiveTranslationGenerator,
    FitInGapGenerator
  ].flatMap((generator) => generator());
}
