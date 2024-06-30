import { Exercise } from './exercise';
import { Person, readAll } from '../repository/exercises-repository';
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
import { exerciseFactory, getAllResults, getAllResultsAsync, parseResults } from '../repository/result-repository';
import { fetchExercisesForSession } from '../client/client';
import { Result } from '../service/result';
import { checkStandardConjugation } from '../service/verb/verb';
import { Language } from '../common/language';
import { GermanPerson, readAllDE } from '../repository/german-exercises-repository';
import { GermanNounTranslationExercise } from './translation/de/german-noun-translation-exercise';
import { GermanVerbTranslationExercise } from './translation/de/german-verb-translation-exercise';
import { GermanVerbExercise } from './german-verb-exercise';

type ExerciseGenerator = () => Exercise[];

export const VerbExerciseGenerator: ExerciseGenerator = () => {
  const verbsNonStandard = readAll().verbs.filter((verb) => !checkStandardConjugation(verb.infinitive).isStandard);
  const presentSimpleVerbs = verbsNonStandard.flatMap((verb) =>
    Object.keys(Person).flatMap((person) =>
      VerbExercise.new(verb, Person[person as keyof typeof Person], 'presentSimple')
    )
  );
  const pastPerfectVerbs = verbsNonStandard
    .filter((verb) => verb.pastPerfect)
    .flatMap((verb) =>
      Object.keys(Person).flatMap((person) =>
        VerbExercise.new(verb, Person[person as keyof typeof Person], 'pastPerfect')
      )
    );
  return pastPerfectVerbs.concat(presentSimpleVerbs);
};

export const GermanVerbExerciseGenerator: ExerciseGenerator = () => {
  return readAllDE().verbs.flatMap((verb) =>
    Object.keys(GermanPerson).flatMap((person) =>
      GermanVerbExercise.new(verb, GermanPerson[person as keyof typeof GermanPerson], 'presentSimple')
    )
  );
};

const translationTypes: TranslationType[] = ['toPortugueseFromHearing', 'toEnglish', 'toPortuguese'];

const NounTranslationGenerator: ExerciseGenerator = () => {
  return readAll().nouns.flatMap((noun) =>
    translationTypes.map((translationType) => NounTranslationExercise.new(noun, translationType))
  );
};

const GermanNounTranslationGenerator: ExerciseGenerator = () => {
  return readAllDE().nouns.flatMap((noun) =>
    translationTypes.map((translationType) => GermanNounTranslationExercise.new(noun, translationType))
  );
};

const GermanVerbTranslationGenerator: ExerciseGenerator = () => {
  return readAllDE().verbs.flatMap((verb) =>
    translationTypes.map((translationType) => GermanVerbTranslationExercise.new(verb, translationType))
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

export function generateAllPossibleExercises(language: Language): Exercise[] {
  switch (language) {
    case Language.German:
      return [GermanVerbExerciseGenerator, GermanNounTranslationGenerator, GermanVerbTranslationGenerator].flatMap(
        (generator) => generator()
      );
    case Language.Portuguese:
    default:
      return [
        VerbExerciseGenerator,
        NounTranslationGenerator,
        VerbTranslationGenerator,
        PhraseTranslationGenerator,
        OtherTranslationGenerator,
        AdjectiveTranslationGenerator,
        FitInGapGenerator
      ].flatMap((generator) => generator());
  }
}

export async function generateExercisesForSessionAsync(
  exerciseCount: number,
  sort: boolean,
  filter: (ex: Exercise) => boolean,
  language: Language,
  results?: Result[]
): Promise<Exercise[]> {
  const exercises = generateAllPossibleExercises(language).filter((exercise) => filter(exercise));
  const allResults = results ? parseResults(results) : await getAllResultsAsync(language);
  const exercisesFinal = sort ? sortExercises(exercises, allResults, language).exercises : exercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}

export function getExercisesForSession(language: Language): Exercise[] {
  const exerciseJSON: Exercise[] = fetchExercisesForSession(language);
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
  filter: (ex: Exercise) => boolean,
  language: Language
): Exercise[] {
  const exercises = generateAllPossibleExercises(language).filter((exercise) => filter(exercise));
  const allResults = getAllResults(language);
  const exercisesFinal = sort ? sortExercises(exercises, allResults, language).exercises : exercises;

  return exercisesFinal.splice(0, Math.min(exerciseCount, exercisesFinal.length - 1)).reverse();
}
