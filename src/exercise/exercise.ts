export interface Exercise {
  getExerciseBody(): string;
  getExerciseDescription(): string;
  getCorrectAnswer(): string;
  checkAnsweCorrect(answer: string): boolean;
}
