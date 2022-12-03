import { Priority, PriorityName } from './priority';
import { Exercise } from '../exercise/exercise';
import { AnswerInputType } from '../io/input';
import { Result } from '../service/result';

export function generatePriority(exercise: Exercise, priorityName: PriorityName, priorityValue: number): Priority[] {
  return [
    {
      exercise,
      priorityName,
      priorityValue
    }
  ];
}

export function generateResultForExercise(
  exercise: Exercise,
  wasCorrect: boolean,
  answerInputType: AnswerInputType,
  count: number
): Result[] {
  return [...Array(count).keys()].map(() =>
    Object.assign({
      exercise,
      wasCorrect,
      answerInputType,
      answer: 'N/A',
      date: new Date()
    })
  );
}

export function generateResultForExerciseDaysAgo(exercise: Exercise, wasCorrect: boolean, daysAgo: number): Result {
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

export function generateResultForExerciseMinutesAgo(exercise: Exercise, minutesAgo: number): Result {
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
