import { Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Verb } from '../../repository/exercisesRepository';
import { getRandomVerb } from '../../service/translation';
import { VerbExercise } from '../verbExercise';
import { TranslationExercise } from './translationExercise';

export class VerbTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  verb: Verb;

  constructor() {
    super();
    this.exerciseType = 'VerbTranslation';
    this.verb = getRandomVerb();
    this.correctAnswer = this.getCorrectAnswer();
  }

  isTranslationSubjectEqual(exercise: Exercise) {
    if (exercise instanceof VerbTranslationExercise || exercise instanceof VerbExercise)
      return this.verb.infinitive === exercise.verb.infinitive;
    return false;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPolish() ? 'Polish: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPolishFromHearing()) return 'Listen...';
    if (this.isTranslationToPolish()) {
      return `English: ${this.verb.english}`;
    }
    return `Polish: ${this.verb.infinitive}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPolishFromHearing() ? this.verb.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPolish() ? this.verb.infinitive : this.verb.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPolish() ? this.correctAnswer : this.verb.infinitive);

  equal = (other: VerbTranslationExercise) =>
    other.exerciseType === 'VerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.translationType === other.translationType;
}
