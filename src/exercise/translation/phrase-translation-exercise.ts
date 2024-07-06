import { ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Phrase } from '../../repository/exercises-repository';
import { getRandomPhrase } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';

export class PhraseTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  phrase: Phrase;

  constructor() {
    super();
    this.exerciseType = 'PhraseTranslation';
    this.phrase = getRandomPhrase();
  }

  static new(phrase: Phrase, translationType: TranslationType): PhraseTranslationExercise {
    const phraseTranslationExercise = new PhraseTranslationExercise();
    phraseTranslationExercise.phrase = phrase;
    phraseTranslationExercise.translationType = translationType;

    return phraseTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof PhraseTranslationExercise)) return false;
    return this.phrase.portuguese === translationExercise.phrase.portuguese;
  }

  getBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getBodySuffix = () => '';

  getDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.phrase.english}`;
    }
    return `Portuguese: ${this.phrase.portuguese}`;
  };

  getTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.phrase.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.phrase.portuguese : this.phrase.english);

  isAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase().replace('?', '') === answer.toLowerCase().replace('?', '');
  }

  getRetryPrompt = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.phrase.portuguese);

  getBaseWord = () => undefined;

  getBaseWordType = () => undefined;

  getBaseWordAsString = () => undefined;

  equal = (other: PhraseTranslationExercise) =>
    other.exerciseType === 'PhraseTranslation' &&
    this.phrase.portuguese === other.phrase.portuguese &&
    this.phrase.english === other.phrase.english &&
    this.translationType === other.translationType;
}
