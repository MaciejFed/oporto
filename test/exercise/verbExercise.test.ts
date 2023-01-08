import { readAll } from '../../src/repository/exercisesRepository';
import { VerbExercise } from '../../src/exercise/verbExercise';
import { Person } from '../../src/service/verb';


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
        expect(verbExercise.getExerciseDescription()).toEqual('Infinitive: to be - long');
        expect(verbExercise.getExerciseBodyPrefix()).toEqual('[Present Simple] Eu: ');
        expect(verbExercise.getCorrectAnswer()).toEqual('sou');
        expect(verbExercise.getExerciseExplanation()).toBe(undefined);
        expect(verbExercise.checkAnswerCorrect('sou')).toBe(true);
        expect(verbExercise.equal(sameVerbExerciseExercise)).toBe(true)
    });
});

