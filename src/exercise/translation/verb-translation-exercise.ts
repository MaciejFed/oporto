import { BaseWordType, Exercise, ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Verb } from '../../repository/exercises-repository';
import { getRandomVerb } from '../../service/translation';
import { VerbExercise } from '../verb-exercise';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class VerbTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  verb: Verb;

  constructor() {
    super();
    this.exerciseType = 'VerbTranslation';
    this.verb = getRandomVerb();
  }

  static new(verb: Verb, translationType: TranslationType): VerbTranslationExercise {
    const verbTranslationExercise = new VerbTranslationExercise();
    verbTranslationExercise.verb = verb;
    verbTranslationExercise.translationType = translationType;

    return verbTranslationExercise;
  }

  isTranslationSubjectEqual(exercise: Exercise) {
    if (exercise instanceof VerbTranslationExercise || exercise instanceof VerbExercise)
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
      return `English: ${this.verb.english}`;
    }
    return `Portuguese: ${this.verb.infinitive}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.verb.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.verb.infinitive : this.verb.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.verb.infinitive);

  getBaseWord() {
    return this.verb;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.VERB;
  }

  getBaseWordAsString(): string | undefined {
    return this.getBaseWord().infinitive;
  }

  equal = (other: VerbTranslationExercise) =>
    other.exerciseType === 'VerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.verb.english === other.verb.english &&
    this.translationType === other.translationType;
}
