import { Comperable } from '../common/common';
import { Noun, Verb, Sentence } from '../repository/exercisesRepository';
import { getRandomNoun, getRandomSentence, getRandomVerb } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

const TO_ENGLISH_TRANLSATION_PROPABILTY = 0.8;

type TranlationType = 'toEnglish' | 'toPortuguese';

export class TranslationExercise {
  translationType: TranlationType;

  constructor() {
    this.translationType = Math.random() < TO_ENGLISH_TRANLSATION_PROPABILTY ? 'toEnglish' : 'toPortuguese';
  }

  isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese';
  }
}
export class NounTranslationExercise extends TranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  noun: Noun;
  exerciseLevel: number;

  constructor() {
    super();
    this.exercsiseType = 'NounTranslation';
    this.noun = getRandomNoun();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.noun.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.noun.english}`;
    }
    return `Portuguese: ${this.getWordWithGender()}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.getWordWithGender() : this.noun.english);

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.getWordWithGender());

  equal = (other: NounTranslationExercise) =>
    other.exercsiseType === 'NounTranslation' &&
    this.noun.portuguese.word === other.noun.portuguese.word &&
    this.translationType === other.translationType;

  getWordWithGender() {
    return `${this.noun.portuguese.gender === 'masculine' ? 'o' : 'a'} ${this.noun.portuguese.word}`;
  }
}

export class VerbTranslationExercise extends TranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  verb: Verb;
  exerciseLevel: number;

  constructor() {
    super();
    this.exercsiseType = 'VerbTranslation';
    this.verb = getRandomVerb();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.verb.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.verb.english}`;
    }
    return `Portuguese: ${this.verb.infinitive}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.verb.infinitive : this.verb.english);

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.verb.infinitive);

  equal = (other: VerbTranslationExercise) =>
    other.exercsiseType === 'VerbTranslation' &&
    this.verb.infinitive === other.verb.infinitive &&
    this.translationType === other.translationType;
}

export class SentenceTranslationExercise extends TranslationExercise implements Exercise, Comperable {
  exercsiseType: ExerciseType;
  correctAnswer: string;
  sentence: Sentence;
  exerciseLevel: number;

  constructor() {
    super();
    this.exercsiseType = 'SentenceTranslation';
    this.sentence = getRandomSentence();
    this.correctAnswer = this.getCorrectAnswer();
    this.exerciseLevel = this.sentence.exerciseLevel;
  }

  getExerciseBodyPrefix(): string {
    return this.isTranslationToPortuguese() ? 'Portuguese: ' : 'English: ';
  }

  getExerciseBodySuffix = () => '';

  getExerciseDescription = () => {
    if (this.isTranslationToPortuguese()) {
      return `English: ${this.sentence.english}`;
    }
    return `Portuguese: ${this.sentence.portuguese}`;
  };

  getExercsiseExplanation = () => undefined;

  getCorrectAnswer = () => (this.isTranslationToPortuguese() ? this.sentence.portuguese : this.sentence.english);

  checkAnsweCorrect(answer: string): boolean {
    return this.getCorrectAnswer().toLowerCase() === answer.toLowerCase();
  }

  getRepeatAnswerPhrase = () => (this.isTranslationToPortuguese() ? this.correctAnswer : this.sentence.portuguese);

  equal = (other: SentenceTranslationExercise) =>
    other.exercsiseType === 'SentenceTranslation' &&
    this.sentence.portuguese === other.sentence.portuguese &&
    this.translationType === other.translationType;
}
