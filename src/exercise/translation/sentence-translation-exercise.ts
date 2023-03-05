import { ExerciseType } from '../exercise';
import { Comparable } from '../../common/common';
import { Sentence } from '../../repository/exercises-repository';
import { getRandomSentence } from '../../service/translation';
import { TranslationExercise, TranslationType } from './translation-exercise';
import { RatioRange } from '../../service/progress';

export class SentenceTranslationExercise extends TranslationExercise implements Comparable {
  exerciseType: ExerciseType;
  sentence: Sentence;

  constructor() {
    super();
    this.exerciseType = 'SentenceTranslation';
    this.sentence = getRandomSentence();
  }

  static new(sentence: Sentence, translationType: TranslationType): SentenceTranslationExercise {
    const sentenceTranslationExercise = new SentenceTranslationExercise();
    sentenceTranslationExercise.sentence = sentence;
    sentenceTranslationExercise.translationType = translationType;

    return sentenceTranslationExercise;
  }

  isTranslationSubjectEqual(translationExercise: TranslationExercise): boolean {
    if (!(translationExercise instanceof SentenceTranslationExercise)) return false;
    return this.sentence.portuguese === translationExercise.sentence.portuguese;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.sentence.english}`;
    }
    return `Portuguese: ${this.sentence.portuguese}`;
  };

  getExerciseTranslation = () => (this.isTranslationToPortugueseFromHearing() ? this.sentence.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.sentence.portuguese : this.sentence.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase().replace('?', '') === answer.toLowerCase().replace('?', '');
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.getCorrectAnswer() : this.sentence.portuguese);

  public getMaxWantedProgress(): RatioRange {
    return '80-100';
  }

  equal = (other: SentenceTranslationExercise) =>
    other.exerciseType === 'SentenceTranslation' &&
    this.sentence.portuguese === other.sentence.portuguese &&
    this.sentence.english === other.sentence.english &&
    this.sentence.sentenceType === other.sentence.sentenceType &&
    this.translationType === other.translationType;
}
