import { NounTranslationExercise } from '../../src/exercise/translationExercise';
import { readAll } from '../../src/repository/exercisesRepository';


describe('Translation Exercise', () => {

    it('NounTranslation', () => {
        const nounTranslationExercise = new NounTranslationExercise();
        const sameNounTranslationExercise = new NounTranslationExercise();
        nounTranslationExercise.noun = readAll().nouns[1];
        sameNounTranslationExercise.noun = readAll().nouns[1];
        nounTranslationExercise.translationType = 'toPortuguese';
        sameNounTranslationExercise.translationType = 'toPortuguese';


        expect(nounTranslationExercise.exerciseType).toEqual('NounTranslation');
        expect(nounTranslationExercise.getExerciseDescription()).toEqual('English: tea');
        expect(nounTranslationExercise.getExerciseBodyPrefix()).toEqual('Portuguese: ');
        expect(nounTranslationExercise.getCorrectAnswer()).toEqual('o chá');
        expect(nounTranslationExercise.getExerciseExplanation()).toBe(undefined);
        expect(nounTranslationExercise.checkAnswerCorrect('o chá')).toBe(true);
        expect(nounTranslationExercise.checkAnswerCorrect('a chá')).toBe(false);
        expect(nounTranslationExercise.equal(sameNounTranslationExercise)).toBe(true);
    });
});

