export interface AnswerOption {
  text: string;
  rationale: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  topic: "HTML" | "CSS" | "JavaScript" | "React";
  question: string;
  answerOptions: AnswerOption[];
  hint: string;
}

export interface UserAnswer {
  question: Question;
  selectedOptionIndex: number;
  isCorrect: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  isQuizFinished: boolean;
  userAnswers: UserAnswer[];
  questions: Question[];
}
