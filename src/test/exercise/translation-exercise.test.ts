import { readAll } from '../../repository/exercises-repository';
import { NounTranslationExercise } from '../../exercise/translation/noun-translation-exercise';

describe('Translation Exercise', () => {
  it('NounTranslation', () => {
    const nounTranslationExercise = new NounTranslationExercise();
    const sameNounTranslationExercise = new NounTranslationExercise();
    nounTranslationExercise.noun = readAll().nouns[1];
    sameNounTranslationExercise.noun = readAll().nouns[1];
    nounTranslationExercise.translationType = 'toPortuguese';
    sameNounTranslationExercise.translationType = 'toPortuguese';

    expect(nounTranslationExercise.exerciseType).toEqual('NounTranslation');
    expect(nounTranslationExercise.getDescription()).toEqual('English: tea');
    expect(nounTranslationExercise.getBodyPrefix()).toEqual('Portuguese: ');
    expect(nounTranslationExercise.getCorrectAnswer()).toEqual('o chá');
    expect(nounTranslationExercise.getTranslation()).toBe(undefined);
    expect(nounTranslationExercise.isAnswerCorrect('o chá')).toBe(true);
    expect(nounTranslationExercise.isAnswerCorrect('a chá')).toBe(false);
    expect(nounTranslationExercise.equal(sameNounTranslationExercise)).toBe(true);
  });
});
