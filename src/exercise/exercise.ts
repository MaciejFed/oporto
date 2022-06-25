export interface Exercise {
  getExerciseBody(): string;
  getExerciseDescription(): string;
  checkAnsweCorrect(answer: string): boolean;
}
