import { Verb } from '../repository/exercises-repository';
import { findAllSentenceExamplesForVerb } from './example-finder';

describe('Example Finder', () => {
  it('Can Find Example For Verb Exercise', () => {
    const verb: Verb =     {
          english: 'to go',
          infinitive: 'ir',
          presentSimple: {
            Eu: 'vou',
            Tu: 'vais',
            'Ela/Ele/Você': 'vai',
            Nós: 'vamos',
            'Eles/Elas/Vocēs': 'vão'
          },
          pastPerfect: {
            Eu: 'fui',
            Tu: 'foste',
            'Ela/Ele/Você': 'foi',
            Nós: 'fomos',
            'Eles/Elas/Vocēs': 'foram'
          }
        };

    const exampleSentence = findAllSentenceExamplesForVerb(verb);

    expect(exampleSentence).toBeDefined();
  });

  it('Returns Undefined For Unknown Verb', () => {
    const verb: Verb =    {
      infinitive: 'shouldNotFind',
    } as Verb;

    const exampleSentence = findAllSentenceExamplesForVerb(verb);

    expect(exampleSentence).toBeUndefined();
  });
});
