import { Exercise } from '../../../exercise/exercise';
import { VerbExercise, VerbTime } from '../../../exercise/verb-exercise';
import { ExerciseResultContext, noPriority, Priority } from '../../priority';
import { Person, Verb } from '../../../repository/exercises-repository';
import { Result } from '../../../service/result';
import { getSingleExerciseProgress, ProgressType } from '../../../service/progress/progress';

export const EXERCISE_VERB_TENSE_ORDER = -1000;

export const persons = [Person.Eu, Person.Tu, Person.ElaEleVocê, Person.Nós, Person.ElesElasVosēs];

const isDoneForTime = (verb: Verb, results: Result[], verbTime: VerbTime) =>
   persons.map((person) => VerbExercise.new(verb, person, verbTime))
    .map((exercise) => getSingleExerciseProgress(results, exercise).progressType)
     .filter((progress) => ProgressType.DONE === progress).length === 5;


const getTensesDone = (verb: Verb, results: Result[]) => ({
  presentSimple: isDoneForTime(verb, results, 'presentSimple'),
  pastPerfect: verb.pastPerfect?.Eu && isDoneForTime(verb, results, 'pastPerfect'),
  imperfect: verb.imperfect?.Eu && isDoneForTime(verb, results, 'imperfect'),
})

export function exerciseVerbTenseOrder(
  exercise: Exercise,
  { exerciseSubjectResults }: ExerciseResultContext
): Priority[] {
  if (
    !(exercise instanceof VerbExercise)
  ) {
    return noPriority(exercise);
  }
  const verbExercise = exercise as VerbExercise;
  if (verbExercise.verbTime === 'presentSimple') return noPriority(exercise);
  const tensesDone = getTensesDone(verbExercise.verb, exerciseSubjectResults);
  if (verbExercise.verbTime === 'pastPerfect' && tensesDone.presentSimple) return noPriority(exercise)
  if (verbExercise.verbTime === 'imperfect' && tensesDone.pastPerfect) return noPriority(exercise)


  return [{
    exercise,
    priorityName: 'EXERCISE_VERB_TENSE_ORDER',
    priorityValue: EXERCISE_VERB_TENSE_ORDER,
  }];
}
