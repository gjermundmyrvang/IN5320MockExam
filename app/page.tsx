"use client";
import { useCallback, useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Results from "./components/Results";
import { ALL_QUIZ_QUESTIONS, getShuffledQuizQuestions } from "./data";
import { QuizState, UserAnswer } from "./types";

export default function Home() {
  const initialQuizState: QuizState = {
    currentQuestionIndex: 0,
    isQuizFinished: false,
    userAnswers: [],
    questions: [],
  };

  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);

  const initializeQuiz = useCallback(() => {
    const questions = getShuffledQuizQuestions();
    setQuizState({
      currentQuestionIndex: 55,
      isQuizFinished: false,
      userAnswers: [], // Reset answers array
      questions: questions,
    });
  }, []);

  useEffect(() => {
    initializeQuiz();
  }, [initializeQuiz]);

  const handleAnswerSelect = (selectedOptionIndex: number) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect =
      currentQuestion.answerOptions[selectedOptionIndex].isCorrect;

    const newUserAnswer: UserAnswer = {
      question: currentQuestion,
      selectedOptionIndex,
      isCorrect,
    };

    // Use a new array for userAnswers to maintain immutability
    const updatedUserAnswers = [...quizState.userAnswers, newUserAnswer];

    const nextIndex = quizState.currentQuestionIndex + 1;
    const finished = nextIndex >= quizState.questions.length;

    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: updatedUserAnswers,
      currentQuestionIndex: finished
        ? prevState.currentQuestionIndex
        : nextIndex,
      isQuizFinished: finished,
    }));
  };

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  // Find the answer for the CURRENT question if it has been answered
  const currentAnswer = quizState.userAnswers.find(
    (a) => a.question.id === currentQuestion?.id
  );

  if (quizState.questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-medium">Loading quiz...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br transition-colors wave-gradient-bg p-4 font-jura">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8 pt-4">
          <h1 className="text-4xl font-extrabold">IN5320 - Mock Exam</h1>
          <p className="mt-2">
            A random set of 60 questions selected from a pool of{" "}
            {ALL_QUIZ_QUESTIONS.length}.
          </p>
        </header>

        {quizState.isQuizFinished ? (
          <Results
            userAnswers={quizState.userAnswers}
            onRestart={initializeQuiz}
          />
        ) : (
          <div className="space-y-6">
            <QuestionCard
              question={currentQuestion}
              questionNumber={quizState.currentQuestionIndex + 1}
              totalQuestions={quizState.questions.length}
              onAnswerSelect={handleAnswerSelect}
              userAnswer={currentAnswer}
            />
            <div className="text-center text-lg text-gray-700 font-medium">
              Progress: {quizState.currentQuestionIndex} /{" "}
              {quizState.questions.length} answered
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
