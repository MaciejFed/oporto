/* eslint-disable @typescript-eslint/no-var-requires */
import { simulateContinueButton, simulateTyping } from '../util';
import { withBaseMocks } from '../base-mocks';
import { wordDatabase } from '../../repository/exercises-repository';

const runExerciseSnapshotTest = (exercises: any[]) => {
  const { mockGenerateExercisesForSession, eventProcessor, SessionManager, Output } = withBaseMocks(true);

  const answers = exercises.map((exercise) => exercise.getCorrectAnswer()).reverse();

  mockGenerateExercisesForSession.mockImplementation(() => {
    return exercises;
  });

  const sessionManager = new SessionManager(eventProcessor, 2, false, () => true);
  eventProcessor.emit('APP_STARTED');

  const outputs = answers.map((answer) => {
    simulateTyping(answer.substring(0, answer.length - 2), true);
    simulateTyping(answer, true);
    const output = Output.getOutput();
    const colorOutput = Output.getColorOutput();

    simulateContinueButton();

    return {
      output,
      colorOutput
    };
  });

  const eventHistory = eventProcessor.eventHistory.map((event: { event: any; args: any }) =>
    `${event.event} ${event.args ? [event.args] : ''}`.trimEnd()
  );
  expect(eventHistory.includes('APP_FINISHED')).toBe(true);
  outputs.forEach(({ output, colorOutput }) => {
    expect(output).toMatchSnapshot();
    expect(colorOutput).toMatchSnapshot();
  });
  expect(eventHistory).toMatchSnapshot();
};

describe('Exercises Integration Snapshots', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.resetModules();
    process.stdin.removeAllListeners();
  });
  const readAll = require('../../repository/exercises-repository').readAll;

  it('NounTranslation', () => {
    const NounTranslationExercise =
      require('../../exercise/translation/noun-translation-exercise').NounTranslationExercise;
    const nounTranslationExerciseToPortuguese = NounTranslationExercise.new(readAll().nouns[0], 'toPortuguese');
    const nounTranslationExerciseToEnglish = NounTranslationExercise.new(readAll().nouns[0], 'toEnglish');

    runExerciseSnapshotTest([nounTranslationExerciseToPortuguese, nounTranslationExerciseToEnglish]);
  });

  it('SentenceTranslation', () => {
    const SentenceTranslationExercise =
      require('../../exercise/translation/sentence-translation-exercise').SentenceTranslationExercise;
    const sentenceTranslationExerciseToPortuguese = SentenceTranslationExercise.new(
      readAll().sentences[0],
      'toPortuguese'
    );
    const sentenceTranslationExerciseToEnglish = SentenceTranslationExercise.new(readAll().sentences[0], 'toEnglish');

    runExerciseSnapshotTest([sentenceTranslationExerciseToPortuguese, sentenceTranslationExerciseToEnglish]);
  });

  it('VerbExercise', () => {
    const VerbExercise = require('../../exercise/verb-exercise').VerbExercise;
    const verb = wordDatabase.verb('construir');
    const verbExercisePresent = VerbExercise.new(verb, 'Tu', 'presentSimple');
    const verbExercisePast = VerbExercise.new(verb, 'Tu', 'pastPerfect');

    runExerciseSnapshotTest([verbExercisePresent, verbExercisePast]);
  });
});
