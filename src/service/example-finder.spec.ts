import { Adjective, Noun, Other, Person, readAll, Verb } from '../repository/exercises-repository';
import { VerbExercise } from '../exercise/verb-exercise';
import { findSentenceExamplesForExercise } from './example-finder';
import { VerbTranslationExercise } from '../exercise/translation/verb-translation-exercise';
import { NounTranslationExercise } from '../exercise/translation/noun-translation-exercise';
import { AdjectiveTranslationExercise } from '../exercise/translation/adjective-translation-exercise';
import { OtherTranslationExercise } from '../exercise/translation/other-translation-exercise';
import { getAllWordsConjugations } from './conjugation';
import { Comparable, onlyDistinct } from '../common/common';

describe('Example Finder', () => {
  it('Can Find Example For VerbExercise And VerbTranslationExercise', () => {
    const verb: Verb = readAll().verbs[0];

    const verbExercise = VerbExercise.new(verb, Person.Eu, 'presentSimple');
    const verbTranslation = VerbTranslationExercise.new(verb, 'toPortuguese');

    const exampleSentenceForVerbExercise = findSentenceExamplesForExercise(verbExercise);
    const exampleSentenceForVerTranslation = findSentenceExamplesForExercise(verbTranslation);

    expect(exampleSentenceForVerbExercise).toBeDefined();
    expect(exampleSentenceForVerTranslation).toBeDefined();
    expect(exampleSentenceForVerTranslation?.exerciseWord).toEqual('Sou');
    expect(exampleSentenceForVerTranslation?.wordStartIndex).toEqual(0);
  });

  it('Returns Undefined For Unknown Verb', () => {
    const verb: Verb = {
      infinitive: 'shouldNotFind'
    } as Verb;

    const verbExercise = VerbExercise.new(verb, Person.Eu, 'presentSimple');
    const verbTranslation = VerbTranslationExercise.new(verb, 'toPortuguese');

    const exampleSentenceForVerbExercise = findSentenceExamplesForExercise(verbExercise);
    const exampleSentenceForVerTranslation = findSentenceExamplesForExercise(verbTranslation);

    expect(exampleSentenceForVerbExercise).toBeUndefined();
    expect(exampleSentenceForVerTranslation).toBeUndefined();
  });

  it('Can Find Example For NounTranslationExercise', () => {
    const noun: Noun = readAll().nouns[0];

    const nounTranslationExercise = NounTranslationExercise.new(noun, 'toPortuguese');

    const exampleSentenceForNounTranslationExercise = findSentenceExamplesForExercise(nounTranslationExercise);

    expect(exampleSentenceForNounTranslationExercise).toBeDefined();
  });

  it('Returns Undefined For Unknown Noun', () => {
    const noun: Noun = {
      english: 'shouldNotFind',
      portuguese: {
        word: 'shouldNotFind',
        plural: 'shouldNotFind',
        gender: 'feminine'
      }
    } as Noun;

    const nounTranslationExercise = NounTranslationExercise.new(noun, 'toPortuguese');

    const exampleSentenceForNounTranslationExercise = findSentenceExamplesForExercise(nounTranslationExercise);

    expect(exampleSentenceForNounTranslationExercise).toBeUndefined();
  });

  it('Can Find Example For AdjectiveTranslationExercise', () => {
    const adjective: Adjective = {
      masculine: {
        singular: 'bom',
        plural: 'bons'
      },
      feminine: {
        singular: 'boa',
        plural: 'boas'
      },
      placing: 'after',
      english: 'good'
    };
    const adjectiveTranslationExercise = AdjectiveTranslationExercise.new(
      adjective,
      'toPortuguese',
      'masculine',
      'singular'
    );

    const sentenceForAdjectiveTranslationExercise = findSentenceExamplesForExercise(adjectiveTranslationExercise);

    expect(sentenceForAdjectiveTranslationExercise).toBeDefined();
  });

  it('Returns Undefined For Unknown Adjective', () => {
    const adjective: Adjective = {
      masculine: {
        singular: 'shouldNotFind',
        plural: 'shouldNotFind'
      },
      feminine: {
        singular: 'shouldNotFind',
        plural: 'shouldNotFind'
      },
      placing: 'after',
      english: 'shouldNotFind'
    };
    const adjectiveTranslationExercise = AdjectiveTranslationExercise.new(
      adjective,
      'toPortuguese',
      'masculine',
      'singular'
    );

    const sentenceForAdjectiveTranslationExercise = findSentenceExamplesForExercise(adjectiveTranslationExercise);

    expect(sentenceForAdjectiveTranslationExercise).toBeUndefined();
  });

  it('Can Find Example For OtherTranslationExercise', () => {
    const other: Other = readAll().others[0];

    const otherTranslationExercise = OtherTranslationExercise.new(other, 'toPortuguese');

    const exampleSentenceForOtherTranslationExercise = findSentenceExamplesForExercise(otherTranslationExercise);

    expect(exampleSentenceForOtherTranslationExercise).toBeDefined();
  });

  it('Returns Undefined For Unknown Other', () => {
    const other: Other = {
      portuguese: 'shouldNotFind'
    } as Other;

    const otherTranslationExercise = OtherTranslationExercise.new(other, 'toPortuguese');

    const exampleSentenceForOtherTranslationExercise = findSentenceExamplesForExercise(otherTranslationExercise);

    expect(exampleSentenceForOtherTranslationExercise).toBeUndefined();
  });

  it('Finds Example For All Verb', () => {
    const allVerbs = readAll().verbs;

    const verbsWithoutExamples = allVerbs.filter((verb) => {
      const verbExercise = VerbExercise.new(verb, Person.Eu, 'pastPerfect');

      return findSentenceExamplesForExercise(verbExercise) === undefined;
    });
    const verbsWithExamples = allVerbs.filter((verb) => {
      const verbExercise = VerbExercise.new(verb, Person.Eu, 'pastPerfect');

      return findSentenceExamplesForExercise(verbExercise) !== undefined;
    });

    verbsWithoutExamples.forEach((verb) => {
      console.log(`No Example For [${verb.infinitive}]`);
    });

    expect(verbsWithExamples.length + verbsWithoutExamples.length).toEqual(allVerbs.length);
    expect(verbsWithoutExamples.length).toBeLessThan(34);
  });

  it('Finds Orphan Words In Examples', () => {
    const allConjugations = getAllWordsConjugations();

    class Word implements Comparable {
      word: string;
      constructor(word: string) {
        this.word = word;
      }

      equal(other: Word): boolean {
        return this.word === other.word;
      }
    }

    const allWordsInExamples = onlyDistinct(
      readAll()
        .sentences.flatMap((sentence) => sentence.portuguese.split(' '))
        .map((word) => new Word(word.toLowerCase().replace(',', '').replace('?', '').replace("'", '')))
    )
      .map((word) => (word as Word).word)
      .sort()
      .filter((word) => word.length > 2);

    const orphanWords = allWordsInExamples.filter((word) => !allConjugations.includes(word));
    const nonOrphanWords = allWordsInExamples.filter((word) => allConjugations.includes(word));

    expect(orphanWords.length + nonOrphanWords.length).toEqual(allWordsInExamples.length);
    expect(orphanWords.length).toBeLessThan(434);
  });
});
