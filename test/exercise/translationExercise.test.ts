import { ExerciseType } from '../../src/exercise/exercise';
import { NounTranslationExercise } from '../../src/exercise/translationExercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { readAll } from '../../src/repository/exercisesRepository';
import { Person } from '../../src/service/verb';


describe('Translation Exercise', () => {

    it('Translation', () => {
        const nounTranslationExercise = new NounTranslationExercise();
        const sameNounTranslationExercise = new NounTranslationExercise();
        nounTranslationExercise.noun = readAll().nouns[1];
        sameNounTranslationExercise.noun = readAll().nouns[1];
        nounTranslationExercise.translationType = 'toPortuguese';
        sameNounTranslationExercise.translationType = 'toPortuguese';

        
        expect(nounTranslationExercise.exercsiseType).toEqual('Translation');
        expect(nounTranslationExercise.getExerciseDescription()).toEqual('English: tea');
        expect(nounTranslationExercise.getExerciseBodyPrefix()).toEqual('Portuguese: ');
        expect(nounTranslationExercise.getCorrectAnswer()).toEqual('o chá');
        expect(nounTranslationExercise.getExercsiseExplanation()).toBe(undefined);
        expect(nounTranslationExercise.checkAnsweCorrect('o chá')).toBe(true);
        expect(nounTranslationExercise.checkAnsweCorrect('a chá')).toBe(false);
        expect(nounTranslationExercise.equal(sameNounTranslationExercise)).toBe(true);
    });
});

