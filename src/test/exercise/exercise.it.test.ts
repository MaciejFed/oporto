/* eslint-disable @typescript-eslint/no-var-requires */
import { simulateContinueButton, simulateTyping } from '../util';
import { withBaseMocks } from '../base-mocks';
import { Language } from '../../common/language';
import { Output } from '../../io/output';

const runExerciseSnapshotTest = (exercises: any[]) => {
  const { mockGenerateExercisesForSession, eventProcessor, SessionManager } = withBaseMocks(true);

  const answers = exercises.map((exercise) => exercise.getCorrectAnswer()).reverse();

  mockGenerateExercisesForSession.mockImplementation(() => {
    return exercises;
  });

  const sessionManager = new SessionManager(eventProcessor, Language.Portuguese);
  eventProcessor.emit('APP_STARTED');

  const outputs = answers.map((answer) => {
    const outputObj = new Output();
    simulateTyping(answer.substring(0, answer.length - 2), true);
    simulateTyping(answer, true);
    const output = outputObj.getOutput();
    const colorOutput = outputObj.getColorOutput();

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

  it.skip('NounTranslation', () => {
    const NounTranslationExercise =
      require('../../exercise/translation/noun-translation-exercise').NounTranslationExercise;
    const nounTranslationExerciseToPortuguese = NounTranslationExercise.new(readAll().nouns[0], 'toPortuguese');
    const nounTranslationExerciseToEnglish = NounTranslationExercise.new(readAll().nouns[0], 'toEnglish');

    runExerciseSnapshotTest([nounTranslationExerciseToPortuguese, nounTranslationExerciseToEnglish]);
  });

  it.skip('SentenceTranslation', () => {
    const SentenceTranslationExercise =
      require('../../exercise/translation/sentence-translation-exercise').SentenceTranslationExercise;
    const sentenceTranslationExerciseToPortuguese = SentenceTranslationExercise.new(
      readAll().sentences[0],
      'toPortuguese'
    );
    const sentenceTranslationExerciseToEnglish = SentenceTranslationExercise.new(readAll().sentences[0], 'toEnglish');

    runExerciseSnapshotTest([sentenceTranslationExerciseToPortuguese, sentenceTranslationExerciseToEnglish]);
  });

  it.skip('VerbExercise', () => {
    const VerbExercise = require('../../exercise/verb-exercise').VerbExercise;
    const verbExercisePresent = VerbExercise.new(readAll().verbs[0], 'Tu', 'presentSimple');
    const verbExercisePast = VerbExercise.new(readAll().verbs[0], 'Tu', 'pastPerfect');

    runExerciseSnapshotTest([verbExercisePresent, verbExercisePast]);
  });
});
