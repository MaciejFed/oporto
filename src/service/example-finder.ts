import { Adjective, readAll, Verb } from '../repository/exercises-repository';
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

export const findSentenceExamplesForExercise = (exercise: Exercise) => {
  let conjugations: string[] = [];
  if (exercise.exerciseType === 'OtherTranslation') {
    conjugations = [(exercise as OtherTranslationExercise).other.portuguese];
  } else if (exercise.exerciseType === 'VerbExercise' || exercise.exerciseType === 'VerbTranslation') {
    const verb = (exercise as VerbExercise).verb;
    conjugations = getConjugationsForVerb(verb);
  } else if (exercise.exerciseType === 'NounTranslation') {
    const noun = (exercise as NounTranslationExercise).noun;
    conjugations = [noun.portuguese.word].concat(noun.portuguese.plural ? noun.portuguese.plural : []);
  } else if (exercise.exerciseType === 'AdjectiveTranslation') {
    const adjective = (exercise as AdjectiveTranslationExercise).adjective;
    conjugations = [
      adjective.feminine.singular,
      adjective.feminine.plural,
      adjective.masculine.singular,
      adjective.masculine.plural
    ];
  }
  const examples = readAll().sentences.filter((sentence) =>
    conjugations.some((v) => {
      return sentence.portuguese
        .toLowerCase()
        .split(' ')
        .some((sentenceWord) => sentenceWord === v.toLowerCase());
    })
  );

  if (examples.length > 0) {
    return getRandomElement(examples).portuguese;
  }

  return undefined;
};
