import { Comparable } from '../../../common/common';
import { GermanVerb } from '../../../repository/german-exercises-repository';
import { getRandomGermanVerb } from '../../../service/translation';
import { Exercise, ExerciseType } from '../../exercise';
import { TranslationExercise, TranslationType } from '../translation-exercise';

export class GermanVerbTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  verb: GermanVerb;

  constructor() {
    super();
    this.exerciseType = 'GermanVerbTranslation';
    this.verb = getRandomGermanVerb();
  }

  static new(verb: GermanVerb, translationType: TranslationType): GermanVerbTranslationExercise {
    const verbTranslationExercise = new GermanVerbTranslationExercise();
    verbTranslationExercise.verb = verb;
    verbTranslationExercise.translationType = translationType;

    return verbTranslationExercise;
  }

  isTranslationSubjectEqual(exercise: Exercise) {
    if (exercise instanceof GermanVerbTranslationExercise) return this.verb.infinitive === exercise.verb.infinitive;
    return false;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'German: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.verb.english}`;
    }
    return `German: ${this.verb.infinitive}`;
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

  equal = (other: GermanVerbTranslationExercise) =>
    other.exerciseType === 'GermanVerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.verb.english === other.verb.english &&
    this.translationType === other.translationType;
}
