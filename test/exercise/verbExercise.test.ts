import { ExerciseType } from '../../src/exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { readAll } from '../../src/repository/exercisesRepository';
import { Person } from '../../src/service/verb';


describe('Verb Exercise', () => {

    it('Regular Verb Exercise', () => {
        const regularVerbExercise = new RegularVerbExercise();
        const sameRegularVerbExercise = new RegularVerbExercise();
        regularVerbExercise.verb = { portuguese: 'comer', english: '' };
        regularVerbExercise.person = Person.Eu;
        sameRegularVerbExercise.verb = { portuguese: 'comer', english: '' };
        sameRegularVerbExercise.person = Person.Eu;
        
        expect(regularVerbExercise.exercsiseType).toEqual('RegularVerb');
        expect(regularVerbExercise.getExerciseDescription()).toEqual('Infinitive: comer');
        expect(regularVerbExercise.getExerciseBodyPrefix()).toEqual('Eu: ');
        expect(regularVerbExercise.getCorrectAnswer()).toEqual('como');
        expect(regularVerbExercise.getExercsiseExplanation()).toBe(undefined);
        expect(regularVerbExercise.checkAnsweCorrect('como')).toBe(true);
        expect(regularVerbExercise.equal(sameRegularVerbExercise)).toBe(true);
    });

    it('Irregular Verb Exercise', () => {
        const regularVerbExercise = new IrregularVerbExercise();
        const sameRegularVerbExercise = new IrregularVerbExercise();
        const irregularVerb = readAll().verbs.irregular[0];
        regularVerbExercise.verb = irregularVerb;
        regularVerbExercise.person = Person.Eu;
        sameRegularVerbExercise.verb = irregularVerb;
        sameRegularVerbExercise.person = Person.Eu;
        
        expect(regularVerbExercise.exercsiseType).toEqual('IrregularVerb');
        expect(regularVerbExercise.getExerciseDescription()).toEqual('Infinitive: ser');
        expect(regularVerbExercise.getExerciseBodyPrefix()).toEqual('Eu: ');
        expect(regularVerbExercise.getCorrectAnswer()).toEqual('sou');
        expect(regularVerbExercise.getExercsiseExplanation()).toBe(undefined);
        expect(regularVerbExercise.checkAnsweCorrect('sou')).toBe(true);
        expect(regularVerbExercise.equal(sameRegularVerbExercise)).toBe(true)
    });

});

