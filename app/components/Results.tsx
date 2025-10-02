import React from "react";
import { Question, UserAnswer } from "../types";

interface ResultsProps {
  userAnswers: UserAnswer[];
  onRestart: () => void;
}

const groupIncorrectByTopic = (answers: UserAnswer[]) => {
  const incorrectAnswers = answers.filter((a) => !a.isCorrect);
  return incorrectAnswers.reduce((acc, curr) => {
    const topic = curr.question.topic;
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(curr.question);
    return acc;
  }, {} as Record<string, Question[]>);
};

const Results: React.FC<ResultsProps> = ({ userAnswers, onRestart }) => {
  const correctCount = userAnswers.filter((a) => a.isCorrect).length;
  const totalCount = userAnswers.length;
  const score = Math.round((correctCount / totalCount) * 100);
  const incorrectByTopic = groupIncorrectByTopic(userAnswers);
  const incorrectTopics = Object.keys(incorrectByTopic);

  return (
    <div className="bg-white shadow-2xl rounded-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Quiz Complete!
      </h1>

      <div
        className={`p-4 rounded-lg text-center font-bold ${
          score >= 70
            ? "bg-green-100 text-green-700 border-green-300"
            : "bg-yellow-100 text-yellow-700 border-yellow-300"
        } border-2 mb-8`}
      >
        <p className="text-xl">
          Your Score:
          <span className="text-3xl ml-2">
            {correctCount} / {totalCount}
          </span>
        </p>
        <p className="text-4xl mt-2">{score}%</p>
      </div>

      {incorrectTopics.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-red-600">
            Areas to Review:
          </h2>
          <p className="mb-6 text-gray-700">
            Below are the questions you got wrong, grouped by topic. Focus on
            these concepts!
          </p>

          <div className="space-y-6">
            {incorrectTopics.map((topic) => (
              <div
                key={topic}
                className="p-4 border border-red-300 bg-red-50 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-red-700 mb-3">
                  {topic} ({incorrectByTopic[topic].length} incorrect)
                </h3>
                <ul className="list-none space-y-4">
                  {incorrectByTopic[topic].map((q) => {
                    const correctAnswer = q.answerOptions.find(
                      (opt) => opt.isCorrect
                    );

                    return (
                      <li key={q.id} className="border-b border-red-200 pb-4">
                        <p className="font-medium text-gray-900">
                          <span className="text-red-600 mr-1">Q:</span>{" "}
                          {q.question}
                        </p>
                        <p className="text-green-700 mt-1">
                          <strong className="text-green-900">
                            Correct Answer:
                          </strong>{" "}
                          {correctAnswer?.text}
                        </p>
                        <p className="text-gray-600 text-sm italic mt-1">
                          <strong className="text-gray-700">Rationale:</strong>{" "}
                          {correctAnswer?.rationale}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-2xl font-bold text-center text-green-700">
          Perfect Score! You&apos;xsre ready for the exam.
        </h2>
      )}

      <button
        onClick={onRestart}
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-8 hover:bg-blue-700 transition duration-200"
      >
        Try Another Set of 60 Questions
      </button>
    </div>
  );
};

export default Results;
