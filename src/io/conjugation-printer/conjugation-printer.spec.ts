import { Person, Verb, wordDatabase } from '../../repository/exercises-repository';
import { Color, ColoredText, Output } from '../output';
import { generateResultForExercise } from '../../priority/priority.util';
import { VerbExercise } from '../../exercise/verb-exercise';
import { PTVerbConjugation } from './pt-conjugation-printer';
import { GermanCase, GermanPerson, GermanVerb, readAllDE } from '../../repository/german-exercises-repository';
import { GermanVerbExercise } from '../../exercise/german-verb-exercise';
import { DEVerbConjugation } from './de-conjugation-printer';
import { DECaseConjugation } from './de-case-conjugation-printer';
import { GermanCaseExercise } from '../../exercise/german-case-exercise';

const generateResults = (verb: Verb) => [
  ...generateResultForExercise(VerbExercise.new(verb, Person.Eu, 'presentSimple'), true, 'keyboard', 1),
  ...generateResultForExercise(VerbExercise.new(verb, Person.Tu, 'presentSimple'), false, 'keyboard', 1)
];

const generateResultsDE = (verb: GermanVerb) => [
  ...generateResultForExercise(GermanVerbExercise.new(verb, GermanPerson.Ich, 'presentSimple'), true, 'keyboard', 1),
  ...generateResultForExercise(GermanVerbExercise.new(verb, GermanPerson.Du, 'presentSimple'), false, 'keyboard', 1)
];

describe('Conjugation Printer', () => {
  describe('Portuguese Verb', () => {
    it('renders standard', () => {
      const verb = wordDatabase.verb('conhecer');
      const results = generateResults(verb);
      const printer = new PTVerbConjugation(verb, results);

      const exception = printer.renderCell(0, 0);
      const nonException = printer.renderCell(1, 0);

      expect(exception).toEqual(
        new ColoredText('conheço    +', Array(7).fill(Color.Y).concat(Array(4).fill(Color.W).concat(Color.G)))
      );
      expect(nonException).toEqual(
        new ColoredText(
          'conheces   -',
          Array(6).fill(Color.W).concat([Color.G, Color.G, Color.W, Color.W, Color.W, Color.R])
        )
      );
    });

    it('renders exception', () => {
      const verb = wordDatabase.verb('pôr');
      const results = generateResults(verb);
      const printer = new PTVerbConjugation(verb, results);

      const exception = printer.renderCell(0, 0);
      const nonException = printer.renderCell(1, 0);

      expect(exception).toEqual(new ColoredText('ponho +', Array(5).fill(Color.Y).concat([Color.W, Color.G])));
      expect(nonException).toEqual(
        new ColoredText('pões  -', Array(4).fill(Color.Y).concat([Color.W, Color.W, Color.R]))
      );
    });

    it('renders whole table without past', () => {
      const verb = wordDatabase.verb('conhecer');
      const results = generateResults(verb);
      const printer = new PTVerbConjugation(verb, results);

      const table = printer.getTable();
      const output = new Output();
      output.moveToColoredRows(0, 0, table);

      expect('\n'.concat(output.getOutput())).toMatchSnapshot();
      expect('\n'.concat(output.getColorOutput())).toMatchSnapshot();
    });

    it('renders whole table with past', () => {
      const verb = wordDatabase.verb('falar');
      const results = generateResults(verb);
      const printer = new PTVerbConjugation(verb, results);

      const table = printer.getTable();
      const output = new Output();
      output.moveToColoredRows(0, 0, table);

      expect('\n'.concat(output.getOutput())).toMatchSnapshot();
      expect('\n'.concat(output.getColorOutput())).toMatchSnapshot();
    });
  });

  describe('German Verb', () => {
    it('renders standard', () => {
      const verb = readAllDE().verbs[1];
      const results = generateResultsDE(verb);
      const printer = new DEVerbConjugation(verb, results);

      const exception = printer.renderCell(1, 0);
      const nonException = printer.renderCell(0, 0);

      expect(nonException).toEqual(
        new ColoredText('habe  +', [Color.W, Color.W, Color.W, Color.G, Color.W, Color.W, Color.G])
      );
      expect(exception).toEqual(
        new ColoredText('hast  -', [Color.Y, Color.Y, Color.Y, Color.Y, Color.W, Color.W, Color.R])
      );
    });

    it('renders whole table', () => {
      const verb = readAllDE().verbs[1];
      const results = generateResultsDE(verb);
      const printer = new DEVerbConjugation(verb, results);

      const table = printer.getTable();
      const output = new Output();
      output.moveToColoredRows(0, 0, table);

      expect('\n'.concat(output.getOutput())).toMatchSnapshot();
      expect('\n'.concat(output.getColorOutput())).toMatchSnapshot();
    });
  });

  describe('German Case', () => {
    it('renders case', () => {
      const caseWord = readAllDE().case[0];
      const printer = new DECaseConjugation(caseWord, []);

      const exception = printer.renderCell(1, 0);
      const nonException = printer.renderCell(0, 0);

      expect(nonException).toEqual(new ColoredText('der ~', [Color.W, Color.W, Color.W, Color.W, Color.B]));
      expect(exception).toEqual(new ColoredText('die ~', [Color.W, Color.W, Color.W, Color.W, Color.B]));
    });

    it('renders whole table', () => {
      const caseWord = readAllDE().case.find((casWord) => casWord.german.nominative === 'ich')!;
      const printer = new DECaseConjugation(caseWord, [
        ...generateResultForExercise(GermanCaseExercise.new(caseWord, GermanCase.nominative), true, 'keyboard', 1)
      ]);

      const table = printer.getTable();
      const output = new Output();
      output.moveToColoredRows(0, 0, table);

      expect('\n'.concat(output.getOutput())).toMatchSnapshot();
      expect('\n'.concat(output.getColorOutput())).toMatchSnapshot();
    });
  });
});
