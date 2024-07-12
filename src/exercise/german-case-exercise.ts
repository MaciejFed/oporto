import { Comparable } from '../common/common';
import { BaseWordType, Exercise, ExerciseType } from './exercise';
import { GenderWord, GermanCase, GermanCaseWord, GermanGender } from '../repository/german-exercises-repository';

const safe = (word?: string) => (word ? `[${word}]` : '');

export class GermanCaseExercise implements Exercise, Comparable {
  public exerciseType: ExerciseType;
  public caseWord: GermanCaseWord;
  public germanCase: GermanCase;
  public gender?: GermanGender;

  public constructor(caseWord: GermanCaseWord, germanCase: GermanCase, gender?: GermanGender) {
    this.exerciseType = 'GermanCaseExercise';
    this.caseWord = caseWord;
    this.germanCase = germanCase;
    this.gender = gender;
  }

  static new(caseWord: GermanCaseWord, germanCase: GermanCase, gender?: GermanGender): GermanCaseExercise {
    return new GermanCaseExercise(caseWord, germanCase, gender);
  }

  getTranslation = () => undefined;

  getBodyPrefix = () => `[${this.germanCase}]${safe(this.gender)}: `;

  getBodySuffix = () => '';

  getDescription = () => `Base: ${this.caseWord.english}`;

  getCorrectAnswer = () => {
    const word = this.caseWord.german[this.germanCase];
    return this.getFinalWord(word);
  };

  isAnswerCorrect(answer: string): boolean {
    const correctAnswer = this.getCorrectAnswer();
    return correctAnswer.toLowerCase() === answer.toLowerCase();
  }

  getMinAnswerCount(): number {
    return 2;
  }

  getBaseWord() {
    return this.caseWord;
  }

  getBaseWordType(): BaseWordType {
    return BaseWordType.OTHER;
  }

  getBaseWordAsString(): string | undefined {
    const word = this.getBaseWord().german.nominative;
    return this.getFinalWord(word);
  }

  getRetryPrompt = () => this.getCorrectAnswer();

  equal = (exercise: GermanCaseExercise) =>
    exercise.exerciseType === 'GermanCaseExercise' &&
    JSON.stringify(this.caseWord.german) === JSON.stringify(exercise.caseWord.german) &&
    this.caseWord.english === exercise.caseWord.english &&
    this.gender === exercise.gender &&
    this.germanCase === exercise.germanCase;

  public getFinalWord(word: GenderWord | string): string {
    if (typeof word === 'string') return word;
    const result = word[this.gender!];
    if (!result) throw new Error(`Unexpected no word for [${JSON.stringify(this.caseWord, null, 4)}]`);
    return result;
  }
}
