import { Exercise, ExerciseType } from '../../src/exercise/exercise';
import { FitInGapExercise } from '../../src/exercise/fitInGapExercise';
import { NounTranslationExercise } from '../../src/exercise/translationExercise';
import { VerbExercise } from '../../src/exercise/verbExercise';
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
    VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH,
    VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW,
    exerciseDoneCorrectly2TimesInRow,
    exerciseTranslationNeverDoneFromHearing,
    VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING
} from '../../src/service/priority';
import { Result } from '../../src/service/result';


describe('Priority', () => {

    it('No Result For Exact Exercise Priority - Happy Path', () => {
        const testExercise = generateExercise('VerbExercise');
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_NEVER_DONE', VALUE_EXERCISE_NEVER_DONE);
        const actualPriority = exerciseNeverDone(testExercise, []);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('No Result For Exact Exercise Priority - Unhappy Path', () => {
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);

        const actualPriority = exerciseNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });

    it('No Result For Exact Exercise Priority - Only One Has Prorityh Value', () => {
        const testExercise1 = generateExercise('VerbExercise');
        const testExercise2 = generateExercise('VerbExercise');
        const results = generateResultForExercise(testExercise1, true, 'keyboard', 1);

        const actualPriority = exerciseNeverDone(testExercise1, results);
        const actualPriorityNoValue = exerciseNeverDone(testExercise2, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise1));
        expect(actualPriorityNoValue[0].priorityName).toEqual('EXERCISE_NEVER_DONE');
        expect(actualPriorityNoValue[0].priorityValue).toEqual(0);
    });

    it('No Result For ExerciseType Exercise Priority - Happy Path', () => {
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(generateExercise('FitInGap'), true, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_TYPE_NEVER_DONE', VALUE_EXERCISE_TYPE_NEVER_DONE);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });


    it('No Result For ExerciseType Exercise Priority - Unhappy Path', () => {
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTypeNeverDone(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(noPriority(testExercise));
    });


    it('Exercise Never Done By Voice', () => {
        const exerciseDoneByKeyboard = generateExercise('VerbExercise');
        const exerciseDoneByVoice = generateExercise('VerbExercise');
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
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(testExercise, false, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_WRONG', VALUE_EXERCISE_DONE_WRONG);
        const actualPriority = exerciseWrong(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Wrong 3 Times', () => {
        const testExercise = generateExercise('VerbExercise');
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
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
        const expectedPriority = generatePriority(testExercise, 'EXERCISE_CORRECT', VALUE_EXERCISE_DONE_CORRECT);
        const actualPriority = exerciseCorrect(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority).toStrictEqual(expectedPriority);
    });

    it('Exercise Correct 3 Times', () => {
        const testExercise = generateExercise('VerbExercise');
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
        const testExercise = generateExercise('VerbExercise');
        const differentExerciseDoneToday = generateExercise('VerbExercise');
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
        const testExercise = generateExercise('VerbExercise');
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
        const testExercise = generateExercise('VerbExercise');
        const results = [
            generateResultForExerciseMinutesAgo(testExercise, 25),
            generateResultForExerciseMinutesAgo(testExercise, 45)
        ];
        const actualPriority = exerciseDoneInLastHour(testExercise, results);

        expect(actualPriority.length).toBe(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_IN_LAST_HOUR');
        expect(actualPriority[0].priorityValue).toEqual(-105 -45);
    })

    it('Exercise Randomness', () => {
        const testExercise = generateExercise('VerbExercise');
        const results = generateResultForExercise(generateExercise('VerbExercise'), true, 'keyboard', 1);
        const actualPriority = exerciseRandomnessPriority(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_RANDOMNESS');
        expect(actualPriority[0].priorityValue).toBeLessThan(VALUE_EXERCISE_RANDOMNESS_UP_LIMIT);
    })

    it('Exercise Level Priority', () => {
        const exerciseLevel = 2;
        const testExercise = generateExercise('VerbExercise');
        testExercise.exerciseLevel = exerciseLevel;
        const expectedDiffictultyPriority = VALUE_EXERCISE_PER_ONE_LEVEL * exerciseLevel;
        const actualPriority = exerciseLevelPriority(testExercise, []);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_LEVEL');
        expect(actualPriority[0].priorityValue).toEqual(expectedDiffictultyPriority);
    })

    it('Exercise Tranlation Never Done From Hearing', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toPortuguese';
        const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTranslationNeverDoneFromHearing(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING');
        expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING);
    })

    it('Exercise Tranlation Done From Hearing', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toPortuguese';
        const toPortugueseFromHearingTranslationExercise = new NounTranslationExercise();
        toPortugueseFromHearingTranslationExercise.translationType = 'toPortugueseFromHearing';
        toPortugueseFromHearingTranslationExercise.noun = toPortugueseTranslationExercise.noun;

        const results = generateResultForExercise(toPortugueseFromHearingTranslationExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTranslationNeverDoneFromHearing(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
        expect(actualPriority[0].priorityValue).toEqual(0);
    });

    it('Exercise Tranlation Never Done To English', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toPortuguese';
        const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 3);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
        expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
    })

    it('Exercise Tranlation Never Done To English Correctly', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toEnglish';
        const results = generateResultForExercise(toPortugueseTranslationExercise, false, 'keyboard', 3);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH');
        expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH);
    })

    it('Exercise Tranlation Done To English Correctly', () => {
        const toPortugueseTranslationExercise = new NounTranslationExercise();
        toPortugueseTranslationExercise.translationType = 'toEnglish';
        const results = generateResultForExercise(toPortugueseTranslationExercise, true, 'keyboard', 1);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(toPortugueseTranslationExercise, results);
        
        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
        expect(actualPriority[0].priorityValue).toEqual(0);
    })

    it('Exercise Non Translation', () => {
        const testExercise = new VerbExercise();
        const results = generateResultForExercise(testExercise, true, 'keyboard', 3);
        const actualPriority = exerciseTranslationNeverDoneToEnglish(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
        expect(actualPriority[0].priorityValue).toEqual(0);
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

    it('Exercise Done Correctly Today 2 Times In A Row', () => {
        const testExercise = new VerbExercise();
        const firsttTimeError = generateResultForExercise(testExercise, false, 'keyboard', 1);
        const thenCorrect = generateResultForExercise(testExercise, true, 'keyboard', 2);
        const actualPriority = exerciseDoneCorrectly2TimesInRow(testExercise, [firsttTimeError, thenCorrect].flatMap((r) => r));

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW');
        expect(actualPriority[0].priorityValue).toEqual(VALUE_EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW);
    })

    it('Exercise Done Correctly Today 1 Time In A Row', () => {
        const testExercise = new VerbExercise();
        const results = generateResultForExercise(testExercise, true, 'keyboard', 1);
        const actualPriority = exerciseDoneCorrectly2TimesInRow(testExercise, results);

        expect(actualPriority.length).toEqual(1);
        expect(actualPriority[0].priorityName).toEqual('NO_PRIORITY');
        expect(actualPriority[0].priorityValue).toEqual(0);
    })
});


function generateExercise(exercsiseType: ExerciseType): Exercise {
    if (exercsiseType === 'VerbExercise') {
        return new VerbExercise();
    }
    return new FitInGapExercise();
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