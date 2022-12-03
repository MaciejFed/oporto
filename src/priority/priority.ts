import { Exercise } from '../exercise/exercise';
import { getAllResults } from '../repository/resultRepository';
import fs from 'fs';
import { Result } from '../service/result';
import { exerciseNeverDone } from './types/exerciseNeverDone/exerciseNeverDone';
import { exerciseNeverDoneByVoice } from './types/exerciseNeverDoneByVoice/exerciseNeverDoneByVoice';
import { exerciseWrong } from './types/exerciseWrong/exerciseWrong';
import { exerciseVerbNeverTranslated } from './types/exerciseVerbNeverTranslated/exerciseVerbNeverTranslated';
import { exerciseDoneToday } from './types/exerciseDoneToday/exerciseDoneToday';
import { exerciseCorrect } from './types/exerciseCorrect/exerciseCorrect';
import { exerciseDoneInLastHour } from './types/exerciseDoneInLastHour/exerciseDoneInLastHour';
import { exerciseTranslationNeverDoneToEnglish } from './types/exerciseTranslationNeverDoneToEnglish/exerciseTranslationNeverDoneToEnglish';
import { exerciseTranslationNeverDoneFromHearing } from './types/exerciseTranslationNeverDoneFromHearing/exerciseTranslationNeverDoneFromHearing';
import { exerciseDoneCorrectly2TimesInRow } from './types/exerciseDoneCorrectly2TimesInRow/exerciseDoneCorrectly2TimesInRow';
import { exerciseRandomness } from './types/exerciseRandomness/exerciseRandomness';

export const VALUE_WRONG_TO_CORRECT_RATIO = 3;

export const VALUE_EXERCISE_TYPE_NEVER_DONE = 100;
export const VALUE_EXERCISE_PER_ONE_LEVEL = 25;

export type PriorityName =
  | 'EXERCISE_NEVER_DONE'
  | 'EXERCISE_NEVER_DONE_BY_VOICE'
  | 'EXERCISE_TYPE_NEVER_DONE'
  | 'EXERCISE_WRONG'
  | 'EXERCISE_CORRECT'
  | 'EXERCISE_DONE_TODAY'
  | 'EXERCISE_DONE_IN_LAST_HOUR'
  | 'EXERCISE_LEARNED_TO_PORTUGUESE'
  | 'EXERCISE_DONE_CORRECTLY_TWO_TIMES_IN_A_ROW'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_TO_ENGLISH'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_FROM_HEARING'
  | 'EXERCISE_TRANSLATION_NEVER_DONE_BY_VOICE'
  | 'EXERCISE_VERB_NEVER_TRANSLATED'
  | 'EXERCISE_RANDOMNESS'
  | 'EXERCISE_LEVEL'
  | 'NO_PRIORITY';

export type Priority = {
  exercise: Exercise;
  priorityName: PriorityName;
  priorityValue: number;
};

const priorityCompilers: PriorityCompiler[] = [
  exerciseNeverDone,
  exerciseNeverDoneByVoice,
  exerciseTranslationNeverDoneToEnglish,
  exerciseTranslationNeverDoneFromHearing,
  exerciseVerbNeverTranslated,
  exerciseWrong,
  exerciseCorrect,
  exerciseDoneToday,
  exerciseDoneInLastHour,
  exerciseDoneCorrectly2TimesInRow,
  exerciseRandomness
];

type PriorityCompiler = (exercise: Exercise, results: Result[]) => Priority[];

export function sortExercises(exercises: Exercise[]): Exercise[] {
  const allResults = getAllResults();
  const exercisesWithPriorities = exercises
    .map((ex) => {
      const combinedPriorities = priorityCompilers
        .flatMap((priorityCompiler) => priorityCompiler(ex, allResults))
        .reduce(
          (pevious, current) => {
            pevious.priorities.push({
              priorityName: current.priorityName,
              priorityValue: current.priorityValue
            });
            pevious.priorityValueTotal = pevious.priorityValueTotal + current.priorityValue;
            return pevious;
          },
          {
            priorities: [
              {
                priorityName: '',
                priorityValue: 0
              }
            ],
            priorityValueTotal: 0,
            exercise: ex
          }
        );
      combinedPriorities.priorities = combinedPriorities.priorities.filter(
        (priority) =>
          priority.priorityName !== '' && priority.priorityName !== 'NO_PRIORITY' && priority.priorityValue !== 0
      );
      return combinedPriorities;
    })
    .sort((a, b) => b.priorityValueTotal - a.priorityValueTotal);

  fs.writeFileSync('priorities.json', JSON.stringify(exercisesWithPriorities, null, 2));

  return exercisesWithPriorities.map((ewp) => ewp.exercise);
}

export function noPriority(exercise: Exercise): Priority[] {
  return [
    {
      exercise,
      priorityName: 'NO_PRIORITY',
      priorityValue: 0
    }
  ];
}
