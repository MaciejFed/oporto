import { Exercise, ExerciseType } from '../../src/exercise/exercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { 
    exerciseNeverDone, 
    exerciseWrong, 
    exerciseDoneToday, 
    exerciseCorrect, 
    exerciseTypeNeverDone, 
    noPriority, 
    Priority, 
    PriorityName, 
    VALUE_EXERCISE_DONE_WRONG, 
    VALUE_EXERCISE_NEVER_DONE, 
    VALUE_EXERCISE_TYPE_NEVER_DONE, 
    VALUE_EXERCISE_DONE_CORRECT, 
    valueDoneToday 
} from '../../src/service/priority';
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
        const results = generateResultForExercise(testExercise, true, 1);

        const actualPriority = exerciseNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('No Result For ExerciseType Exercise Priority - Happy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(generateExercise('IrregularVerb'), true, 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_TYPE_NEVER_DONE', VALUE_EXERCISE_TYPE_NEVER_DONE);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('No Result For ExerciseType Exercise Priority - Unhappy Path', async () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(testExercise, true, 1);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('Exercise Wrong 1 Time', async () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(testExercise, false, 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Wrong 3 Times', async () => {
        const testExercise = generateExercise('RegularVerb');
        const results = [
            generateResultForExercise(testExercise, false, 2), 
            generateResultForExercise(testExercise, true, 1),
            generateResultForExercise(testExercise, false, 1)]
            .flatMap((r) => r);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG * 3);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('Exercise Correct 1 Time', async () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = generateResultForExercise(testExercise, true, 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Correct 3 Times', async () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = [
            generateResultForExercise(testExercise, true, 2), 
            generateResultForExercise(testExercise, false, 1),
            generateResultForExercise(testExercise, true, 1)]
            .flatMap((r) => r);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT * 3);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Done Today 1 Time', async () => {
        const testExercise = generateExercise('RegularVerb');
        const differentExerciseDoneToday = generateExercise('IrregularVerb');
        const results = [
            generateResultForExerciseDaysAgo(testExercise, true, 0),
            generateResultForExerciseDaysAgo(differentExerciseDoneToday, true, 0),
            generateResultForExerciseDaysAgo(testExercise, true, 1),
            generateResultForExerciseDaysAgo(testExercise, true, 2)
        ]
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(1));
        const actualPriority = exerciseDoneToday(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Done Today 4 Times', async () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = [
            generateResultForExerciseDaysAgo(testExercise, true, 0),
            generateResultForExerciseDaysAgo(testExercise, true, 1),
            generateResultForExerciseDaysAgo(testExercise, true, 0),
            generateResultForExerciseDaysAgo(testExercise, true, 0),
            generateResultForExerciseDaysAgo(testExercise, true, 0),
            generateResultForExerciseDaysAgo(testExercise, true, 2)
        ]
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(4));
        const actualPriority = exerciseDoneToday(testExercise, results);

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

function generateResultForExerciseDaysAgo(exercise: Exercise, isCorrect: boolean, daysAgo: number): Result {
    const dateDaysAgo = new Date();
    dateDaysAgo.setDate(dateDaysAgo.getDate() - daysAgo);
    return {
        exercise,
        isCorrect,
        answer: 'N/A',
        date: dateDaysAgo
    };
}

function generateResultForExercise(exercise: Exercise, isCorrect: boolean, count: number): Result[] {
    return [...Array(count).keys()].map(() => Object.assign({
        exercise,
        isCorrect,
        answer: 'N/A',
        date: new Date()
    }))
}

function generatePriority(exercise: Exercise, priorityName: PriorityName, priorityValue: number): Priority[] {
    return [{
        exercise,
        priorityName,
        priorityValue
    }]
}