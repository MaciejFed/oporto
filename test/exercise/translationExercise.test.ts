import { ExerciseType } from '../../src/exercise/exercise';
import { TranslationExercise } from '../../src/exercise/translationExercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { readAll } from '../../src/repository/exercisesRepository';
import { Person } from '../../src/service/verb';


describe('Translation Exercise', () => {

    it('Translation', () => {
        const translationExercise = new TranslationExercise();
        const sameTranslationExercise = new TranslationExercise();
        translationExercise.translation = readAll().translations[1];
        sameTranslationExercise.translation = readAll().translations[1];

        
        expect(translationExercise.exercsiseType).toEqual('Translation');
        expect(translationExercise.getExerciseDescription()).toEqual('English: tea');
        expect(translationExercise.getExerciseBody()).toEqual('Portuguese: ');
        expect(translationExercise.getCorrectAnswer()).toEqual('o chá');
        expect(translationExercise.getExercsiseExplanation()).toBe(undefined);
        expect(translationExercise.checkAnsweCorrect('o chá')).toBe(true);
        expect(translationExercise.checkAnsweCorrect('a chá')).toBe(false);
        expect(translationExercise.equal(sameTranslationExercise)).toBe(true);
    });
});

