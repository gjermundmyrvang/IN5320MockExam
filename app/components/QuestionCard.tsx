import React from "react";
import { Question, UserAnswer } from "../types";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSelect: (selectedOptionIndex: number) => void;
  userAnswer: UserAnswer | undefined;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelect,
  userAnswer,
}) => {
  const isAnswered = !!userAnswer;

  return (
    <div className="bg-white/20 backdrop-blur-2xl shadow-xl rounded-xl p-6 border border-black">
      <p className="text-sm sm:text-lg md:text-xl font-thin text-gray-800 mb-4">
        Question <span className="font-extrabold">{questionNumber}</span> of{" "}
        {totalQuestions}
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {question.question}
      </h2>
      <div className="flex flex-col space-y-4">
        {question.answerOptions.map((option, index) => {
          const isSelected = userAnswer?.selectedOptionIndex === index;

          let className =
            "p-4 border border-gray-800 rounded-lg text-left w-full transition duration-150 ease-in-out cursor-pointer";

          if (isAnswered) {
            // In default mode, just highlight the selected answer
            if (isSelected) {
              className +=
                " bg-blue-100 border-blue-500 font-medium text-blue-800";
            } else {
              className +=
                " bg-purple-500 border-gray-200 text-gray-700 opacity-70";
            }
          } else {
            // Unanswered: interactive button style
            className +=
              " bg-white/10 backdrop-blur-2xl border-gray-300 text-gray-800 hover:bg-purple-400/30 hover:border-purple-400";
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => onAnswerSelect(index)}
              disabled={isAnswered}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
