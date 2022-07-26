import { Exercise, ExerciseType } from '../../src/exercise/exercise';
import { NounTranslationExercise } from '../../src/exercise/translationExercise';
import { IrregularVerbExercise, RegularVerbExercise } from '../../src/exercise/verbExercise';
import { AnswerInputType } from '../../src/io/input';
import { 
    exerciseNeverDone, 
    exerciseWrong, 
    exerciseDoneToday, 
    exerciseCorrect, 
    exerciseTypeNeverDone,
    exerciseRandomnessPriority,
    noPriority, 
    Priority, 
    PriorityName, 
    VALUE_EXERCISE_DONE_WRONG, 
    VALUE_EXERCISE_NEVER_DONE, 
    VALUE_EXERCISE_TYPE_NEVER_DONE, 
    VALUE_EXERCISE_DONE_CORRECT, 
    valueDoneToday, 
    VALUE_EXERCISE_RANDOMNESS_UP_LIMIT,
    exerciseNeverDoneByVoice,
    VALUE_EXERCISE_NEVER_DONE_BY_VOICE,
    exerciseLevelPriority,
    VALUE_EXERCISE_PER_ONE_LEVEL,
    exerciseDoneInLastHour,
    exerciseTranslationNeverDoneToEnglish,
    EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH
} from '../../src/service/priority';
import { Result } from '../../src/service/result';


describe('Priority', () => {

    it('No Result For Exact Exercise Priority - Happy Path', () => {
        const testExercise = generateExercise('RegularVerb');
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_NEVER_DONE', VALUE_EXERCISE_NEVER_DONE);
        const actualPriority = exerciseNeverDone(testExercise, []);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('No Result For Exact Exercise Priority - Unhappy Path', () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);

        const actualPriority = exerciseNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('No Result For Exact Exercise Priority - Only One Has Prorityh Value', () => {
        const testExercise1 = generateExercise('RegularVerb');
        const testExercise2 = generateExercise('IrregularVerb');
        const results = generateResultForExercise(testExercise1, true, 'keyboard', 1);

        const actualPriority = exerciseNeverDone(testExercise1, results);
        const actualPriorityNoValue = exerciseNeverDone(testExercise2, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise1));
        expect(actualPriorityNoValue[0].priorityName).toEqual('EXERCISE_NEVER_DONE');
        expect(actualPriorityNoValue[0].priorityValue).toEqual(0);
    });

    it('No Result For ExerciseType Exercise Priority - Happy Path', () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(generateExercise('IrregularVerb'), true, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_TYPE_NEVER_DONE', VALUE_EXERCISE_TYPE_NEVER_DONE);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('No Result For ExerciseType Exercise Priority - Unhappy Path', () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });


    it('Exercise Never Done By Voice', () => {
        const exerciseDoneByKeyboard = generateExercise('RegularVerb');
        const exerciseDoneByVoice = generateExercise('IrregularVerb');
        const results = [
            generateResultForExercise(exerciseDoneByKeyboard, true, 'keyboard', 1), 
            generateResultForExercise(exerciseDoneByVoice, true, 'voice', 1
            )].flatMap((result) => result);

        const priorityForDoneByKeyboard = exerciseNeverDoneByVoice(exerciseDoneByKeyboard, results);
        const priorityForDoneByVoice = exerciseNeverDoneByVoice(exerciseDoneByVoice, results);

        expect(priorityForDoneByKeyboard.length).toEqual(1);
        expect(priorityForDoneByKeyboard).toStrictEqual(generatePriority(exerciseDoneByKeyboard, 'EXERCISE_NEVER_DONE_BY_VOICE', VALUE_EXERCISE_NEVER_DONE_BY_VOICE));
        expect(priorityForDoneByVoice).toStrictEqual(noPriority(exerciseDoneByVoice));
    });

    it('Exercise Wrong 1 Time', () => {
        const testExercise = generateExercise('RegularVerb');
        const results = generateResultForExercise(testExercise, false, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Wrong 3 Times', () => {
        const testExercise = generateExercise('RegularVerb');
        const results = [
            generateResultForExercise(testExercise, false, 'keyboard', 2), 
            generateResultForExercise(testExercise, true, 'keyboard', 1),
            generateResultForExercise(testExercise, false, 'keyboard', 1)]
            .flatMap((r) => r);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG * 3);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('Exercise Correct 1 Time', () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Correct 3 Times', () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = [
            generateResultForExercise(testExercise, true, 'keyboard', 2), 
            generateResultForExercise(testExercise, false, 'keyboard', 1),
            generateResultForExercise(testExercise, true, 'keyboard', 1)]
            .flatMap((r) => r);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT * 3);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Done Today 1 Time', () => {
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

    it('Exercise Done Today N Times', () => {
        const testExercise = generateExercise('IrregularVerb');
        const results: Result[] = [];
        for (let i = 2; i < 8; i ++) {
            results.push(generateResultForExerciseDaysAgo(testExercise, true, 0));
            const expectedPriority = generatePriority(testExercise, 'EXERCISE_DONE_TODAY', valueDoneToday(i - 1));
            const actualPriority = exerciseDoneToday(testExercise, results);

            expect(actualPriority.length).toEqual(1);
            expect(actualPriority).toStrictEqual(expectedPriority);
        }
    });

    it ('Exercise Done 25 and 45 Minutes Ago', () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = [
            generateResultForExerciseMinutesAgo(testExercise, 25),
            generateResultForExerciseMinutesAgo(testExercise, 45)
        ];
        const actualPriority = exerciseDoneInLastHour(testExercise, results);

        expect(actualPriority.length).toBe(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_IN_LAST_HOUR');
        expect(actualPriority[0].priorityValue).toEqual(-35 - 15);
    })

    it('Exercise Randomness', () => {
        const testExercise = generateExercise('IrregularVerb');
        const results = generateResultForExercise(generateExercise('IrregularVerb'), true, 'keyboard', 1);
        const actualPriority = exerciseRandomnessPriority(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_RANDOMNESS');
        expect(actualPriority[0].priorityValue).toBeLessThan(VALUE_EXERCISE_RANDOMNESS_UP_LIMIT);
    })

    it('Exercise Level Priority', () => {
        const exerciseLevel = 2;
        const testExercise = generateExercise('IrregularVerb');
        testExercise.exerciseLevel = exerciseLevel;
        const expectedDiffictultyPriority = VALUE_EXERCISE_PER_ONE_LEVEL * exerciseLevel;
        const actualPriority = exerciseLevelPriority(testExercise, []);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_LEVEL');
        expect(actualPriority[0].priorityValue).toEqual(expectedDiffictultyPriority);
    })


    it('Exercise Tranlation Never Done To English', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toPortuguese';
        const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 3);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
        expect(actualPriority[0].priorityValue).toEqual(EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
    })


    it('Exercise Tranlation Done To English', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toEnglish';
        const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
        expect(actualPriority[0].priorityValue).toEqual(0);
    })

});


function generateExercise(exercsiseType: ExerciseType): Exercise {
    if (exercsiseType === 'RegularVerb') {
        return new RegularVerbExercise();
    }
    return new IrregularVerbExercise();
}

function generateResultForExerciseMinutesAgo(exercise: Exercise, minutesAgo: number): Result {
    const minutesAgoDate = new Date();
    minutesAgoDate.setTime(minutesAgoDate.getTime() - minutesAgo * 60 * 1000);
    return {
        exercise,
        answerInputType: 'keyboard',
        wasCorrect: true,
        answer: 'N/A',
        date: minutesAgoDate
    };
}

function generateResultForExerciseDaysAgo(exercise: Exercise, wasCorrect: boolean, daysAgo: number): Result {
    const dateDaysAgo = new Date();
    dateDaysAgo.setDate(dateDaysAgo.getDate() - daysAgo);
    return {
        exercise,
        answerInputType: 'keyboard',
        wasCorrect,
        answer: 'N/A',
        date: dateDaysAgo
    };
}

function generateResultForExercise(exercise: Exercise, wasCorrect: boolean, answerInputType: AnswerInputType, count: number): Result[] {
    return [...Array(count).keys()].map(() => Object.assign({
        exercise,
        wasCorrect,
        answerInputType,
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