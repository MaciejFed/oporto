import { Comparable } from '../../../common/common';
import { getRandomPolishVerb } from '../../../service/translation';
import { BaseWordType, Exercise, ExerciseType } from '../../exercise';
import { TranslationExercise, TranslationType } from '../translation-exercise';
import { PolishVerb } from '../../../repository/polish-exercises-repository';

export class PolishVerbTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  verb: PolishVerb;

  constructor() {
    super();
    this.exerciseType = 'PolishVerbTranslation';
    this.verb = getRandomPolishVerb();
  }

  static new(verb: PolishVerb, translationType: TranslationType): PolishVerbTranslationExercise {
    const verbTranslationExercise = new PolishVerbTranslationExercise();
    verbTranslationExercise.verb = verb;
    verbTranslationExercise.translationType = translationType;

    return verbTranslationExercise;
  }

  isTranslationSubjectEqual(exercise: Exercise) {
    if (exercise instanceof PolishVerbTranslationExercise) return this.verb.infinitive === exercise.verb.infinitive;
    return false;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Polish: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.verb.english}`;
    }
    return `Polish: ${this.verb.infinitive}`;
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

  getBaseWordAsString(): string | undefined {
    return this.verb.infinitive;
  }

  getBaseWordType(): BaseWordType | undefined {
    return BaseWordType.VERB;
  }

  equal = (other: PolishVerbTranslationExercise) =>
    other.exerciseType === 'PolishVerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.verb.english === other.verb.english &&
    this.translationType === other.translationType;
}
