import { Comperable } from '../common/common';
import { Noun, Verb, Sentence } from '../repository/exercisesRepository';
import { getRandomNoun, getRandomSentence, getRandomVerb } from '../service/translation';
import { Exercise, ExerciseType } from './exercise';

const TO_ENGLISH_TRANLSATION_PROPABILTY = 0.8;

type TranlationType = 'toEnglish' | 'toPortuguese' | 'toPortugueseFromHearing';

export class TranslationExercise {
  translationType: TranlationType;

  constructor() {
    const propability = Math.random();
    if (propability < 0.33) {
      this.translationType = 'toEnglish';
    } else if (propability > 0.33 && propability < 0.66) {
      this.translationType = 'toPortuguese';
    } else {
      this.translationType = 'toPortugueseFromHearing';
    }
  }

  isTranslationSubjectEqual(tranlsationExercise: Exercise) {
    return false;
  }

  isTranslationToPortuguese(): boolean {
    return this.translationType === 'toPortuguese' || this.translationType === 'toPortugueseFromHearing';
  }

  isTranslationToPortugueseFromHearing(): boolean {
    return this.translationType === 'toPortugueseFromHearing';
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

  isTranslationSubjectEqual(tranlsationExercise: NounTranslationExercise) {
    return this.noun.portuguese === tranlsationExercise.noun.portuguese;
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

  getExercsiseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.noun.english : undefined);

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

  isTranslationSubjectEqual(tranlsationExercise: VerbTranslationExercise) {
    return this.verb.infinitive === tranlsationExercise.verb.infinitive;
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

  getExercsiseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.verb.english : undefined);

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

  getExercsiseExplanation = () => (this.isTranslationToPortugueseFromHearing() ? this.sentence.english : undefined);

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
