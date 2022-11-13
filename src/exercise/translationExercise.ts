import { Comparable } from '../common/common';
import { Noun, Verb, Sentence } from '../repository/exercisesRepository';
import { getRandomNoun, getRandomSentence, getRandomVerb } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';
import { VerbExercise } from './verbExercise';

type TranslationType = 'toEnglish' | 'toPortuguese' | 'toPortugueseFromHearing';

export class TranslationExercise {
  translationType: TranslationType;

  constructor() {
    const probability = Math.random();
    if (probability < 0.33) {
      this.translationType = 'toEnglish';
    } else if (probability > 0.33 && probability < 0.66) {
      this.translationType = 'toPortuguese';
    } else {
      this.translationType = 'toPortugueseFromHearing';
    }
  }

  isTranslationSubjectEqual(tranlsationSubject: Exercise) {
    return false;
  }

  isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese' || this.translationType === 'toPortugueseFromHearing';
  }

  isTranslationToPortugueseFromHearing(): boolean {
    return this.translationType === 'toPortugueseFromHearing';
  }
}
export class NounTranslationExercise extends TranslationExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  noun: Noun;
  exerciseLevel: number;

  constructor() {
    super();
    this.exerciseType = 'NounTranslation';
    this.noun = getRandomNoun();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.noun.exerciseLevel;
  }

  isTranslationSubjectEqual(translationExercise: NounTranslationExercise) {
    return this.noun.portuguese.word === translationExercise.noun.portuguese.word;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortugueseFromHearing()) return 'Listen...';
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.noun.english}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.noun.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.getWordWithGender() : this.noun.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.getWordWithGender());

  equal = (other: NounTranslationExercise) =>
    other.exerciseType === 'NounTranslation' &&
    this.noun.portuguese.word === other.noun.portuguese.word &&
    this.translationType === other.translationType;

  getWordWithGender() {
    if (this.noun.portuguese.gender === 'none') return this.noun.portuguese.word;
    return `${this.noun.portuguese.gender === 'masculine' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}

export class VerbTranslationExercise extends TranslationExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  verb: Verb;
  exerciseLevel: number;

  constructor() {
    super();
    this.exerciseType = 'VerbTranslation';
    this.verb = getRandomVerb();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.verb.exerciseLevel;
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

export class SentenceTranslationExercise extends TranslationExercise implements Exercise, Comparable {
  exerciseType: ExerciseType;
  correctAnswer: string;
  sentence: Sentence;
  exerciseLevel: number;

  constructor() {
    super();
    this.exerciseType = 'SentenceTranslation';
    this.sentence = getRandomSentence();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.sentence.exerciseLevel;
  }

  isTranslationSubjectEqual(tranlsationExercise: SentenceTranslationExercise) {
    return this.sentence.portuguese === tranlsationExercise.sentence.portuguese;
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

  getExerciseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.sentence.english : undefined);

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.sentence.portuguese : this.sentence.english);

  checkAnswerCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.sentence.portuguese);

  equal = (other: SentenceTranslationExercise) =>
    other.exerciseType === 'SentenceTranslation' &&
    this.sentence.portuguese === other.sentence.portuguese &&
    this.translationType === other.translationType;
}
