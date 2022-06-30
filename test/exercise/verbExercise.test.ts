import { ExerciseType } from '../../src/exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { readAll } from '../../src/repository/exercisesRepository';
import { Person } from '../../src/service/verb';


;


describe('Verb Exercise', () => {

    it('Regular Verb Exercise', () => {
        const regularVerbExercise = new RegularVerbExercise();
        const sameRegularVerbExercise = new RegularVerbExercise();
        regularVerbExercise.verb = 'comer';
        regularVerbExercise.person = Person.Eu;
        sameRegularVerbExercise.verb = 'comer';
        sameRegularVerbExercise.person = Person.Eu;
        
        expect(regularVerbExercise.getExerciseType()).toEqual(ExerciseType.REGULAR_VERB);
        expect(regularVerbExercise.getExerciseDescription()).toEqual('Infinitive: comer');
        expect(regularVerbExercise.getExerciseBody()).toEqual('Eu: ');
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
        
        expect(regularVerbExercise.getExerciseType()).toEqual(ExerciseType.IRREUGAL_VERB);
        expect(regularVerbExercise.getExerciseDescription()).toEqual('Infinitive: ser');
        expect(regularVerbExercise.getExerciseBody()).toEqual('Eu: ');
        expect(regularVerbExercise.getCorrectAnswer()).toEqual('sou');
        expect(regularVerbExercise.getExercsiseExplanation()).toBe(undefined);
        expect(regularVerbExercise.checkAnsweCorrect('sou')).toBe(true);
        expect(regularVerbExercise.equal(sameRegularVerbExercise)).toBe(true)
    });

});

