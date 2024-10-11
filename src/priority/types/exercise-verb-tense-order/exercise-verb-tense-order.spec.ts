import { VerbExercise } from '../../../exercise/verb-exercise';
import {
  EXERCISE_VERB_TENSE_ORDER,
  exerciseVerbTenseOrder,
} from './exercise-verb-tense-order';
import { VerbTranslationExercise } from '../../../exercise/translation/verb-translation-exercise';
import { NounTranslationExercise } from '../../../exercise/translation/noun-translation-exercise';
import { ExerciseResultContext, noPriority } from '../../priority';
import { Person, readAll, wordDatabase } from '../../../repository/exercises-repository';
import { Language } from '../../../common/language';
import { Result } from '../../../service/result';

const verb = wordDatabase.verb('estar');
const verb2 = wordDatabase.verb('ter');
const persons = [Person.Eu, Person.Tu, Person.ElaEleVocê, Person.Nós, Person.ElesElasVosēs];

const toResult = (exercise: VerbExercise, wasCorrect = true) => ({ exercise, wasCorrect })

const getAllResults = () => [
  persons.map((person) => VerbExercise.new(verb, person, 'presentSimple')).map((exercise) => toResult(exercise)),
  [toResult(VerbExercise.new(verb, Person.Eu, 'pastPerfect'), false),
  toResult(VerbExercise.new(verb, Person.Tu, 'pastPerfect'), true)],

  persons.map((person) => VerbExercise.new(verb2, person, 'presentSimple')).map((exercise) => toResult(exercise)),
  persons.map((person) => VerbExercise.new(verb2, person, 'pastPerfect')).map((exercise) => toResult(exercise)),

].flatMap((r) => r) as any as Result[]



describe('exerciseVerbTenseOrder', () => {
  const verbNeverDone = wordDatabase.verb('ser')
  describe('None tense done', () => {
    it('present simple no bonus priority', () => {
      const verbExercise = VerbExercise.new(verbNeverDone, Person.Eu, 'presentSimple');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual(noPriority(verbExercise))
    });

    it('past perfect with bonus priority', () => {
      const verbExercise = VerbExercise.new(verbNeverDone, Person.Eu, 'pastPerfect');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual([{
        exercise: verbExercise,
        priorityName: 'EXERCISE_VERB_TENSE_ORDER',
        priorityValue: EXERCISE_VERB_TENSE_ORDER,
      }])
    });

    it('imperfect with bonus priority', () => {
      const verbExercise = VerbExercise.new(verbNeverDone, Person.Eu, 'imperfect');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual([{
        exercise: verbExercise,
        priorityName: 'EXERCISE_VERB_TENSE_ORDER',
        priorityValue: EXERCISE_VERB_TENSE_ORDER,
      }])
    })
  })

  describe('Present simple tense done', () => {
    it('past perfect with no bonus priority', () => {
      const verbExercise = VerbExercise.new(verb, Person.Eu, 'pastPerfect');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual(noPriority(verbExercise))
    });

    it('imperfect with bonus priority', () => {
      const verbExercise = VerbExercise.new(verb, Person.Eu, 'imperfect');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual([{
        exercise: verbExercise,
        priorityName: 'EXERCISE_VERB_TENSE_ORDER',
        priorityValue: EXERCISE_VERB_TENSE_ORDER,
      }])
    })
  })

  describe('Present simple and past perfect tense done', () => {
    it('imperfect no bonus priority', () => {
      const verbExercise = VerbExercise.new(verb2, Person.Eu, 'imperfect');
      const priority = exerciseVerbTenseOrder(verbExercise, {
        exerciseSubjectResults: getAllResults(),
      } as ExerciseResultContext);

      expect(priority).toEqual(noPriority(verbExercise))
    });
  })

});
