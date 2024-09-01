import { checkStandardConjugation } from './verb';
import { Person, readAll, wordDatabase } from '../../repository/exercises-repository';
import { generateResultForExercise } from '../../priority/priority.util';
import { VerbExercise } from '../../exercise/verb-exercise';
import { ProgressType } from '../progress/progress';

describe('Verb Service', () => {
  it('checks the standard conjugations', () => {
    const verbs = readAll().verbs.map((verb) => verb.infinitive);
    const standardConjugations = verbs.filter((verb) => checkStandardConjugation(verb, []).isStandard);
    const nonStandardConjugations = verbs.filter((verb) => !checkStandardConjugation(verb, []).isStandard);
    expect(standardConjugations.length).toEqual(117);
    expect(nonStandardConjugations.length).toEqual(66);
  });

  it('checks the status', () => {
    const verb = wordDatabase.verb('abanar');

    const results = [
      ...generateResultForExercise(VerbExercise.new(verb, Person.Eu, 'presentSimple'), true, 'keyboard', 1),
      ...generateResultForExercise(VerbExercise.new(verb, Person.Eu, 'pastPerfect'), true, 'keyboard', 1),
      ...generateResultForExercise(VerbExercise.new(verb, Person.Tu, 'presentSimple'), false, 'keyboard', 1)
    ];

    const {
      verb: { presentSimple, pastPerfect }
    } = checkStandardConjugation('abanar', results);
    expect(presentSimple?.Eu.status).toEqual(ProgressType.DONE);
    expect(presentSimple?.Tu.status).toEqual(ProgressType.IN_PROGRESS);
    expect(presentSimple?.['Ela/Ele/Você'].status).toEqual(ProgressType.NEVER_DONE);

    expect(pastPerfect?.Eu.status).toEqual(ProgressType.DONE);
    expect(pastPerfect?.Tu.status).toEqual(ProgressType.NEVER_DONE);
  });
});
