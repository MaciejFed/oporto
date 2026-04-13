import { Person, readAll } from '../../repository/exercises-repository';
import { VerbExercise } from '../../exercise/verb-exercise';

describe('Verb Exercise', () => {
  it('Verb Exercise', () => {
    const verbExercise = new VerbExercise();
    const sameVerbExerciseExercise = new VerbExercise();
    const verb = readAll().verbs[0];
    verbExercise.verb = verb;
    verbExercise.person = Person.Eu;
    sameVerbExerciseExercise.verb = verb;
    sameVerbExerciseExercise.person = Person.Eu;

    expect(verbExercise.exerciseType).toEqual('VerbExercise');
    expect(verbExercise.getDescription()).toEqual('Infinitive: to be - long');
    expect(verbExercise.getBodyPrefix()).toEqual('[Present Simple] Eu: ');
    expect(verbExercise.getCorrectAnswer()).toEqual('sou');
    expect(verbExercise.isAnswerCorrect('sou')).toBe(true);
    expect(verbExercise.equal(sameVerbExerciseExercise)).toBe(true);
  });
});
