import { readAll, Verb } from '../repository/exercises-repository';
import { VerbExerciseGenerator } from '../exercise/generator';
import { VerbExercise } from '../exercise/verb-exercise';

const getConjugationsForVerb = (verb: Verb) => {
  // eslint-disable-next-line new-cap
  return VerbExerciseGenerator()
    .filter((verbExercise) => (verbExercise as VerbExercise).verb.infinitive === verb.infinitive)
    .map((verbExercise) => verbExercise.getCorrectAnswer())
    .concat(verb.infinitive)
    .sort((a, b) => a.localeCompare(b));
};

export const getAllWordsConjugations = () => {
  const allVerbsForms = readAll().verbs.flatMap((verb) => getConjugationsForVerb(verb));
  const allNounForms = readAll().nouns.flatMap((noun) => [noun.portuguese.word, noun.portuguese.plural || '']);
  const allAdjectiveForms = readAll().adjectives.flatMap((adjective) => [
    adjective.feminine.singular,
    adjective.feminine.plural,
    adjective.masculine.singular,
    adjective.masculine.plural
  ]);
  const others = readAll().others.map((other) => other.portuguese);

  return allVerbsForms
    .concat(allNounForms)
    .concat(allAdjectiveForms)
    .concat(others)
    .filter((word) => word)
    .map((word) => word.toLowerCase().replace('?', '').replace(',', ''))
    .sort();
};
