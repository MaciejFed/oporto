import { Adjective, readAll, Sentence, Verb } from '../repository/exercises-repository';
import { VerbExerciseGenerator } from '../exercise/generator';
import { VerbExercise } from '../exercise/verb-exercise';
import { getRandomElement } from '../common/common';
import { Exercise } from '../exercise/exercise';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';

const getConjugationsForVerb = (verb: Verb) => {
  // eslint-disable-next-line new-cap
  return VerbExerciseGenerator()
    .filter((verbExercise) => (verbExercise as VerbExercise).verb.infinitive === verb.infinitive)
    .map((verbExercise) => verbExercise.getCorrectAnswer().toLowerCase())
    .concat(verb.infinitive)
    .sort((a, b) => a.localeCompare(b));
};

const extractConjugationsFromExercise = (exercise: Exercise): string[] => {
  switch (exercise.exerciseType) {
    case 'OtherTranslation':
      return [(exercise as OtherTranslationExercise).other.portuguese];
    case 'VerbExercise':
    case 'VerbTranslation':
      return getConjugationsForVerb((exercise as VerbExercise).verb);
    case 'NounTranslation':
      // eslint-disable-next-line no-case-declarations
      const noun = (exercise as NounTranslationExercise).noun;
      return [noun.portuguese.word, ...(noun.portuguese.plural ? [noun.portuguese.plural] : [])];
    case 'AdjectiveTranslation':
      // eslint-disable-next-line no-case-declarations
      const adjective = (exercise as AdjectiveTranslationExercise).adjective;
      return [
        adjective.feminine.singular,
        adjective.feminine.plural,
        adjective.masculine.singular,
        adjective.masculine.plural
      ];
    default:
      return [];
  }
};

const filterSentencesByConjugations = (conjugations: string[]) => {
  return readAll().sentences.filter((sentence) =>
    conjugations.some((v) =>
      sentence.portuguese
        .toLowerCase()
        .split(' ')
        .some((sentenceWord) => sentenceWord === v.toLowerCase())
    )
  );
};

const findExampleSentenceAndWord = (filteredSentences: Sentence[], conjugations: string[]) => {
  if (filteredSentences.length > 0) {
    const exampleSentence = getRandomElement(filteredSentences).portuguese;
    const exerciseWord =
      conjugations.find((conjugation) => exampleSentence.toLowerCase().includes(conjugation.toLowerCase())) || '';
    const wordStartIndex = exampleSentence.toLowerCase().indexOf(exerciseWord.toLowerCase());
    return {
      wordStartIndex,
      exerciseWord: exampleSentence.substring(wordStartIndex, wordStartIndex + exerciseWord.length),
      exampleSentence
    };
  }

  return undefined;
};

export const findSentenceExamplesForExercise = (exercise: Exercise) => {
  const conjugations = extractConjugationsFromExercise(exercise);
  const filteredSentences = filterSentencesByConjugations(conjugations);
  return findExampleSentenceAndWord(filteredSentences, conjugations);
};
