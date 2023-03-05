import { readAll } from '../repository/exercises-repository';

export const getAllWordsConjugations = () => {
  const allVerbsForms = readAll()
    .verbs.flatMap((verb) => [
      verb.infinitive,
      verb.presentSimple.Eu,
      verb.presentSimple.Tu,
      verb.presentSimple['Ela/Ele/Você'],
      verb.presentSimple.Nós,
      verb.presentSimple['Eles/Elas/Vocēs'],
      verb.pastPerfect?.Eu,
      verb.pastPerfect?.Tu,
      verb.pastPerfect?.['Ela/Ele/Você'],
      verb.pastPerfect?.Nós,
      verb.pastPerfect?.['Eles/Elas/Vocēs']
    ])
    .filter((w) => w !== undefined);
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
    .map((word) => word!.toLowerCase().replace('?', '').replace(',', ''))
    .sort();
};
