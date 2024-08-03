import { VerbExercise } from '../../exercise/verb-exercise';
import { Person, wordDatabase } from '../../repository/exercises-repository';
import { removeBaseWordLimit } from './base-word-limit';
import { ExerciseProgress, ProgressType } from '../progress/progress';
import { BaseWordType } from '../../exercise/exercise';
import { ProgressAggregate } from '../progress/progress-aggregate';

const emptyProgressAggregate: ProgressAggregate = {
  words: {
    [BaseWordType.VERB]: {
      [ProgressType.IN_PROGRESS]: {
        baseWords: [] as string[],
        count: 0
      }
    },
    [BaseWordType.ADJECTIVE]: {
      [ProgressType.IN_PROGRESS]: {
        baseWords: [] as string[],
        count: 0
      }
    },
    [BaseWordType.NOUN]: {
      [ProgressType.IN_PROGRESS]: {
        baseWords: [] as string[],
        count: 0
      }
    },
    [BaseWordType.OTHER]: {
      [ProgressType.IN_PROGRESS]: {
        baseWords: [] as string[],
        count: 0
      }
    }
  }
} as ProgressAggregate;

const emptyLimit: Record<BaseWordType, number> = {
  [BaseWordType.NOUN]: 0,
  [BaseWordType.VERB]: 0,
  [BaseWordType.OTHER]: 0,
  [BaseWordType.ADJECTIVE]: 0
};

const verbExercises = [
  { exercise: VerbExercise.new(wordDatabase.verb('abanar'), Person.Eu, 'presentSimple') },
  { exercise: VerbExercise.new(wordDatabase.verb('abrir'), Person.Eu, 'presentSimple') },
  { exercise: VerbExercise.new(wordDatabase.verb('acabar'), Person.Eu, 'presentSimple') }
] as unknown as ExerciseProgress[];

describe('Base Word Limit', () => {
  it('Should only leave exercises within limit', () => {
    const exercises = removeBaseWordLimit(
      verbExercises,
      {
        ...emptyProgressAggregate,
        words: {
          ...emptyProgressAggregate.words,
          [BaseWordType.VERB]: {
            [ProgressType.IN_PROGRESS]: {
              baseWords: ['abanar', 'abrir', 'acabar'],
              count: 3
            }
          }
        }
      } as ProgressAggregate,
      {
        ...emptyLimit,
        [BaseWordType.VERB]: 2
      }
    );

    expect(exercises.length).toEqual(2);
  });

  it('Should include one exercise in limit', () => {
    const exercises = removeBaseWordLimit(
      verbExercises,
      {
        ...emptyProgressAggregate,
        words: {
          ...emptyProgressAggregate.words,
          [BaseWordType.VERB]: {
            [ProgressType.IN_PROGRESS]: {
              baseWords: ['abanar'],
              count: 1
            }
          }
        }
      } as ProgressAggregate,
      {
        ...emptyLimit,
        [BaseWordType.VERB]: 2
      }
    );

    expect(exercises.length).toEqual(2);
  });
});
