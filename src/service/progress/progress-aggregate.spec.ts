import { generateResultForExercise } from '../../priority/priority.util';
import { Person, wordDatabase } from '../../repository/exercises-repository';
import { VerbExercise } from '../../exercise/verb-exercise';
import { getProgressAggregate } from './progress-aggregate';

const conhecerVerbExerciseDone1 = VerbExercise.new(wordDatabase.verb('conhecer'), Person.Tu, 'presentSimple');
const saberVerbExerciseDone1 = VerbExercise.new(wordDatabase.verb('saber'), Person.Eu, 'pastPerfect');
const saberVerbExerciseInProgress1 = VerbExercise.new(wordDatabase.verb('saber'), Person.Tu, 'pastPerfect');
const verVerbExerciseNeverDone = VerbExercise.new(wordDatabase.verb('ver'), Person.Tu, 'pastPerfect');

const results = [
  ...generateResultForExercise(conhecerVerbExerciseDone1, true, 'keyboard', 1),
  ...generateResultForExercise(saberVerbExerciseDone1, true, 'keyboard', 1),
  ...generateResultForExercise(saberVerbExerciseInProgress1, false, 'keyboard', 1)
];

describe('Progress Aggregate', () => {
  it('getProgressAggregate', () => {
    const progressAggregate = getProgressAggregate(results, [
      conhecerVerbExerciseDone1,
      saberVerbExerciseDone1,
      saberVerbExerciseInProgress1,
      verVerbExerciseNeverDone
    ]);

    expect(progressAggregate).toMatchSnapshot();
  });
});
