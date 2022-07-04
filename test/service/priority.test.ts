import { Exercise, ExerciseType } from '../../src/exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { exerciseNeverDone, exerciseWrong, exerciseCorrect, exerciseTypeNeverDone, noPriority, Priority, PriorityName, VALUE_EXERCISE_DONE_WRONG, VALUE_EXERCISE_NEVER_DONE, VALUE_EXERCISE_TYPE_NEVER_DONE, VALUE_EXERCISE_DONE_CORRECT } from '../../src/service/priority';
import { Result } from '../../src/service/result';


describe('Priority', () => {

    it('No Result For Exact Exercise Priority - Happy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_NEVER_DONE', VALUE_EXERCISE_NEVER_DONE);
        const actualPriority = exerciseNeverDone(testExercise, []);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('No Result For Exact Exercise Priority - Unhappy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const result = generateResultForExercise(testExercise, true);

        const actualPriority = exerciseNeverDone(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('No Result For ExerciseType Exercise Priority - Happy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const result = generateResultForExercise(generateExercise('IrregularVerb'), true);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_TYPE_NEVER_DONE', VALUE_EXERCISE_TYPE_NEVER_DONE);
        const actualPriority = exerciseTypeNeverDone(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('No Result For ExerciseType Exercise Priority - Unhappy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const result = generateResultForExercise(testExercise, true);
        const actualPriority = exerciseTypeNeverDone(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('Exercise Wrong 1 Time', async () => {
        const testExercise = generateExercise('RegularVerb');
        const result = generateResultForExercise(testExercise, false);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG);
        const actualPriority = exerciseWrong(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Wrong 3 Times', async () => {
        const testExercise = generateExercise('RegularVerb');
        const results = [
            generateResultForExercise(testExercise, false), 
            generateResultForExercise(testExercise, false),
            generateResultForExercise(testExercise, true),
            generateResultForExercise(testExercise, false)];
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG * 3);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('Exercise Correct 1 Time', async () => {
        const testExercise = generateExercise('IrregularVerb');
        const result = generateResultForExercise(testExercise, true);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT);
        const actualPriority = exerciseCorrect(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Correct 3 Times', async () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = [
            generateResultForExercise(testExercise, true), 
            generateResultForExercise(testExercise, true),
            generateResultForExercise(testExercise, false),
            generateResultForExercise(testExercise, true)];
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT * 3);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

});


function generateExercise(exercsiseType: ExerciseType): Exercise {
    if (exercsiseType === 'RegularVerb') {
        return new RegularVerbExercise();
    }
    return new IrregularVerbExercise();
}

function generateResultForExercise(exercise: Exercise, isCorrect: boolean): Result {
    return {
        exercise,
        isCorrect,
        answer: 'N/A',
        date: new Date()
    }
}

function generatePriority(exercise: Exercise, priorityName: PriorityName, priorityValue: number): Priority[] {
    return [{
        exercise,
        priorityName,
        priorityValue
    }]
}