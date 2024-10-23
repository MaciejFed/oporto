import { BaseWordType, Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Verb } from '../../repository/exercises-repository';
import { getRandomVerb } from '../../service/translation';
import { VerbExercise } from '../verb-exercise';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class VerbOtherFormTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  verb: Verb;
  number: number;

  constructor() {
    super();
    this.exerciseType = 'VerbOtherFormTranslation';
    this.verb = getRandomVerb();
    this.number = 0;
  }

  static new(verb: Verb, translationType: TranslationType, number: number): VerbOtherFormTranslationExercise {
    const verbTranslationExercise = new VerbOtherFormTranslationExercise();
    verbTranslationExercise.verb = verb;
    verbTranslationExercise.translationType = translationType;
    verbTranslationExercise.number = number;

    return verbTranslationExercise;
  }

  isTranslationSubjectEqual(exercise: Exercise) {
    if (exercise instanceof VerbOtherFormTranslationExercise || exercise instanceof VerbExercise)
      return this.verb.infinitive === exercise.verb.infinitive;
    return false;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.verb.otherForms![this.number].english}`;
    }
    return `Portuguese: ${this.verb.otherForms![this.number].portuguese}`;
  };

  getTranslation = () => this.verb.english;

  getCorrectAnswer = () =>
    this.isTranslationToPortuguese()
      ? this.verb.otherForms![this.number].portuguese
      : this.verb.otherForms![this.number].english;

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () =>
    this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.verb.otherForms![this.number].portuguese;

  getBaseWord() {
    return this.verb;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.VERB;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().infinitive;
  }

  equal = (other: VerbOtherFormTranslationExercise) =>
    other.exerciseType === 'VerbOtherFormTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.verb.english === other.verb.english &&
    this.number === other.number &&
    this.translationType === other.translationType;
}
