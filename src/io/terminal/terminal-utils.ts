import chalk from 'chalk';
import figlet from 'figlet';
import { formatDate, sleep } from '../../common/common';
import { VALUE_WRONG_TO_CORRECT_RATIO } from '../../priority/priority';
import { ExerciseStatistics, Result, WeekdayStatistics } from '../../service/result';
import { Color, Output, ColoredText } from '../output';
import { Person, Verb } from '../../repository/exercises-repository';
import { StandardConjugation } from '../../service/verb/verb';
import { clear } from 'console';
import { GermanVerb } from '../../repository/german-exercises-repository';
import { ProgressType } from '../../service/progress/progress';
import { Language } from '../../common/language';
import { DEVerbConjugation } from '../conjugation-printer/de-conjugation-printer';
import { PTVerbConjugation } from '../conjugation-printer/pt-conjugation-printer';
import { Exercise } from '../../exercise/exercise';
import { DECaseConjugation } from '../conjugation-printer/de-case-conjugation-printer';
import { PLVerbConjugation } from '../conjugation-printer/pl-conjugation-printer';
import { DENounConjugation } from '../conjugation-printer/de-noun-conjugation-printer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ervy = require('ervy');
const { bullet, bg, fg, scatter } = ervy;

interface CreateColorArrayArg {
  white?: number;
  green?: number;
  yellow?: number;
  blue?: number;
}

export function createColorArray({ white, green, yellow, blue }: CreateColorArrayArg): Color[] {
  return Array(white ?? 0)
    .fill(Color.W)
    .concat(Array(green ?? 0).fill(Color.G))
    .concat(Array(yellow ?? 0).fill(Color.Y))
    .concat(Array(blue ?? 0).fill(Color.B));
}

const AppLogo = chalk.red(figlet.textSync('oPorto', { horizontalLayout: 'full' }));

const EXERCISE_TOP_MARGIN = 6;
export const EXERCISE_BODY_MARGIN = EXERCISE_TOP_MARGIN + 3;
export const EXERCISE_REPEAT_BODY_MARGIN = EXERCISE_BODY_MARGIN + 3;
const EXERCISE_MENU_MARGIN = EXERCISE_REPEAT_BODY_MARGIN + 1;

export type AnswerInputType = 'keyboard' | 'voice';
let output: Output;

const getOutput = () => {
  if (!output) {
    output = new Output();
  }
  return output;
};

export function preExerciseClear() {
  clear();
  getOutput().moveTo(0, 0, AppLogo);
}

export function printExerciseTranslation(exerciseTranslation: string | undefined) {
  getOutput().moveTo(1, EXERCISE_TOP_MARGIN + 1, `Translation: ${exerciseTranslation}`);
}

export function printExerciseDescription(exerciseDescription: string) {
  getOutput().moveTo(1, EXERCISE_TOP_MARGIN + 2, exerciseDescription);
}

export function printExerciseBody(exerciseBodyPrefix: string, answer: string, exerciseBodySuffix: string) {
  const answerFinal =
    exerciseBodySuffix.length > 0 && answer.length < 2 ? answer.padStart(2, '_').padEnd(3, '_') : answer;
  getOutput().moveTo(1, EXERCISE_BODY_MARGIN, exerciseBodyPrefix);
  getOutput().bold(true);
  getOutput().moveTo(1 + exerciseBodyPrefix.length, EXERCISE_BODY_MARGIN, answerFinal);
  getOutput().bold(false);
  getOutput().moveTo(
    1 + exerciseBodyPrefix.length + answerFinal.length,
    EXERCISE_BODY_MARGIN,
    ` ${exerciseBodySuffix}`
  );
  getOutput().moveCursor(1 + exerciseBodyPrefix.length + answerFinal.length, EXERCISE_BODY_MARGIN);
}

export function printExerciseFeedback(wasCorrect: boolean, answerInputType: AnswerInputType) {
  getOutput().moveTo(1, EXERCISE_BODY_MARGIN + 1, `${wasCorrect ? 'Correct!' : 'Wrong!'} [${answerInputType}]`);
}

const repeatBodyPrefix = 'Repeat: ';

export function printExerciseRepeatBody() {
  getOutput().moveTo(1, EXERCISE_REPEAT_BODY_MARGIN, repeatBodyPrefix);
}

export function printExerciseRepeatAnswerKey(answer: string, correctAnswer: string, newKey: string) {
  if (newKey === 'backspace') return;
  const newIndex = answer.length - 1;
  if (
    answer[newIndex] !== undefined &&
    answer[newIndex].toLowerCase() === (correctAnswer[newIndex] !== undefined && correctAnswer[newIndex].toLowerCase())
  ) {
    getOutput().green();
  } else {
    getOutput().red();
  }
  getOutput().moveTo(1 + repeatBodyPrefix.length + answer.length - 1, EXERCISE_REPEAT_BODY_MARGIN, newKey);
  getOutput().white();
}

export function printExerciseRepeatAnswer(answer: string, correctAnswer: string) {
  getOutput().hideCursor();
  getOutput().moveTo(1, EXERCISE_REPEAT_BODY_MARGIN, `${repeatBodyPrefix}`);
  for (let i = 0; i < answer.length; i++) {
    if (
      (answer[i] !== undefined && answer[i].toLowerCase()) ===
      (correctAnswer[i] !== undefined && correctAnswer[i].toLowerCase())
    ) {
      getOutput().green();
    } else {
      getOutput().red();
    }
    getOutput().moveTo(repeatBodyPrefix.length + i + 1, EXERCISE_REPEAT_BODY_MARGIN, answer[i]);
  }
  getOutput().white();
  getOutput().hideCursor();
}

export function printInBetweenMenu(printTranslation: boolean) {
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN, 'Press key to continue...');
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 1, 'r - repeat the answer');
  if (printTranslation) {
    getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 2, 't - print translation');
  }
}

export function printExampleSentence(wordStartIndex: number, exerciseWord: string, exampleSentence: string) {
  const examplePrefix = 'Example: ';
  getOutput().bold();
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 4, examplePrefix);
  getOutput().bold(false);
  getOutput().moveToColored(
    1 + examplePrefix.length,
    EXERCISE_MENU_MARGIN + 4,
    new ColoredText(
      `"${exampleSentence}"`,
      Array(wordStartIndex + 1)
        .fill(Color.W)
        .concat(Array(exerciseWord.length).fill(Color.Y).concat(Array(100).fill(Color.W)))
    )
  );
}

export function logSaved(status: 'Saving example...' | 'Example saved.') {
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 5, Array(20).join(' '));
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 5, status);
}

export function printExampleTranslation(
  exampleTranslationPrefix: string | undefined,
  exampleTranslation: string | undefined
) {
  getOutput().moveTo(
    1,
    EXERCISE_MENU_MARGIN + 5,
    '                                                                          '
  );
  getOutput().moveTo(1, EXERCISE_MENU_MARGIN + 5, `${exampleTranslationPrefix}  ${exampleTranslation}`);
}

type FeedbackType = 'CorrectAnswer' | 'ActualAnswer';

export function printWithFeedback(
  x: number,
  y: number,
  answer: string,
  correctAnswer: string,
  answerType: FeedbackType,
  prefix?: string
) {
  const exerciseBodyPrefix = prefix ? prefix : '';
  const feedbackWord = answerType === 'CorrectAnswer' ? correctAnswer : answer;
  getOutput().moveTo(x, y, exerciseBodyPrefix);
  getOutput().bold(true);
  for (let i = 0; i < feedbackWord.length; i++) {
    if (answer[i] && correctAnswer[i] && answer[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
      getOutput().green();
    } else {
      getOutput().red();
    }
    getOutput().moveTo(x + exerciseBodyPrefix.length + i, y, feedbackWord[i]);
  }
  getOutput().bold(false);
  getOutput().white();
}

export function printExerciseBodyWithCorrection(exerciseBodyPrefix: string, answer: string, correctAnswer: string) {
  printWithFeedback(1, EXERCISE_BODY_MARGIN, answer, correctAnswer, 'CorrectAnswer', exerciseBodyPrefix);
}

export function printAllAnswers(results: Result[]) {
  const HISTORY_X_MARGIN = 80;
  const HISTORY_Y_MARGIN = EXERCISE_BODY_MARGIN - 1;
  const HISTORY_ANSWERS_LIMIT = 5;
  getOutput().bold();
  getOutput().moveTo(HISTORY_X_MARGIN, HISTORY_Y_MARGIN, 'Answers History:');
  getOutput().bold(false);
  results.reverse().forEach(({ answer, exercise }, index) => {
    if (index < HISTORY_ANSWERS_LIMIT)
      printWithFeedback(
        HISTORY_X_MARGIN,
        HISTORY_Y_MARGIN + 2 + index,
        answer,
        exercise.getCorrectAnswer(),
        'ActualAnswer',
        `${index + 1}. `
      );
  });
}

export function printAllVerbConjugations(exercise: Exercise, results: Result[]) {
  const CONJUGATION_X_MARGIN = 100;
  const CONJUGATION_Y_MARGIN = EXERCISE_BODY_MARGIN - 1;
  let table: ColoredText[] = [];
  switch (exercise.exerciseType) {
    case 'GermanVerbExercise':
    case 'GermanVerbTranslation':
      table = new DEVerbConjugation(exercise.getBaseWord() as any, results).getTable();
      break;
    case 'VerbExercise':
    case 'VerbTranslation':
      table = new PTVerbConjugation(exercise.getBaseWord() as any, results).getTable();
      break;
    case 'PolishVerbExercise':
    case 'PolishVerbTranslation':
      table = new PLVerbConjugation(exercise.getBaseWord() as any, results).getTable();
      break;
    case 'GermanCaseExercise':
      table = new DECaseConjugation(exercise.getBaseWord() as any, results).getTable();
      break;
    case 'GermanNounTranslation':
      table = new DENounConjugation(exercise.getBaseWord() as any, results).getTable();
      break;
    default:
      return;
  }
  getOutput().moveToColoredRows(CONJUGATION_X_MARGIN, CONJUGATION_Y_MARGIN, table);
}

export function printNewWordLearned(newWord: string, days: number) {
  const text = 'New word learnt! ';
  getOutput().bold();
  getOutput().moveTo(0, 19, text);
  getOutput().green();
  getOutput().moveTo(text.length + 1, 19, newWord);
  getOutput().bold(false);
  getOutput().white();
  getOutput().moveTo(text.length + 2 + newWord.length, 19, `[${days} days]`);
}

export async function animateExerciseSummary({
  correctAttempts,
  failedAttempts,
  lastTimeAttempted,
  firstTimeAttempted,
  baseWordAnswersMissing
}: ExerciseStatistics) {
  const yIndex = 19;
  const animationTime = 1500;
  const barWidth = 50;
  // getOutput().moveTo(0, yIndex + 1, `First Time Attempted: ${formatDate(firstTimeAttempted)}`);
  getOutput().moveTo(0, yIndex + 2, `Last Time Attempted:  ${formatDate(lastTimeAttempted)}`);
  // getOutput().moveTo(0, yIndex + 2, `First Time Attempted: ${formatDate(firstTimeAttempted)}`);
  const totalValue = Math.max(failedAttempts * VALUE_WRONG_TO_CORRECT_RATIO, correctAttempts);
  for (let index = 1; index <= totalValue; index++) {
    const goodValue = index <= correctAttempts ? index : correctAttempts;
    const wrongValue = Math.max(0, index - goodValue);
    const totalValueLabel = correctAttempts + failedAttempts;
    const missingAnswers = goodValue - failedAttempts * VALUE_WRONG_TO_CORRECT_RATIO;

    const allLabel = `All - ${totalValueLabel} `;
    const correctWrongLabel = `Correct/Wrong ${goodValue}/${failedAttempts} (${missingAnswers})`;
    let bulletData = [
      { key: allLabel, value: totalValue, style: bg('blue'), barWidth: 1 },
      { key: correctWrongLabel, value: index, style: bg('red'), barWidth: 1 }
    ];
    getOutput().moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    bulletData = [
      { key: allLabel, value: totalValue, style: bg('blue'), barWidth: 1 },
      {
        key: correctWrongLabel,
        value: goodValue,
        style: bg('green'),
        barWidth: 1
      }
    ];
    getOutput().moveTo(0, yIndex + 4, bullet(bulletData, { style: '+', width: barWidth, barWidth: 1 }));
    await sleep(animationTime / totalValue);
  }
}

export function displayGenericWeeklyStatistics(weeklyStatistics: WeekdayStatistics[], margin: number) {
  if (weeklyStatistics.length === 0) return;
  const maxYValue = Math.max(...weeklyStatistics.flatMap((stat) => stat.points.map((point) => point.value)));
  const yGap = Math.ceil(maxYValue / 24);
  const gapStyle = '-------';
  const gapStyleLength = gapStyle.length - 3;
  getOutput().bold();
  const graphData = weeklyStatistics
    .map((weeklyStatistic) => [
      ...weeklyStatistic.points.map((point) =>
        Object.assign({
          key: point.keyName,
          value: [weeklyStatistic.weekday * gapStyleLength, Math.round(point.value / yGap)],
          style: fg(point.keyMarker.color, `${point.keyMarker.marker} ${point.value}`)
        })
      )
    ])
    .flatMap((d) => d)
    .filter((data) => data.value[1] !== 0);
  graphData.unshift(
    ...weeklyStatistics[0].points.map((point) =>
      Object.assign({
        key: point.keyName,
        value: [weeklyStatistics[0].weekday * gapStyleLength, Math.round(point.value / yGap)],
        style: fg(point.keyMarker.color, point.keyMarker.marker)
      })
    )
  );
  getOutput().moveCursor(0, margin);
  console.log(
    scatter(graphData, {
      hAxis: ['+', gapStyle, '--->'],
      hName: 'Day',
      vName: 'Total',
      legendGap: 18,
      width: 7,
      height: 24,
      ratio: [1, yGap],
      hGap: 1
    })
  );
}
