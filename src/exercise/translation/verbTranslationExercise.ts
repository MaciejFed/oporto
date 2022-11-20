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
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.verb.english}`;
    }
    return `Portuguese: ${this.verb.infinitive}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.verb.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.verb.infinitive : this.verb.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.verb.infinitive);

  equal = (other: VerbTranslationExercise) =>
    other.exerciseType === 'VerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.translationType === other.translationType;
}
