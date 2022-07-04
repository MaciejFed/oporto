import { Exercise, ExerciseType } from '../../src/exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { exerciseNeverDone, exerciseTypeNeverDone, noPriority, Priority, PriorityName, VALUE_EXERCISE_NEVER_DONE, VALUE_EXERCISE_TYPE_NEVER_DONE } from '../../src/service/priority';
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
        const result = generateResultForExercise(generateExercise('RegularVerb'), true);
        const actualPriority = exerciseTypeNeverDone(testExercise, [result]);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
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