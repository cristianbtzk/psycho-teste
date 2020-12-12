import React, { createContext, useCallback, useContext, useState } from 'react';

interface QuestionsContextData {
  questions: Question[];
  currentQuestion: Question;
  setQuestion(number: number): void;
  editAnswers(number: number, answer: string): void;
}

interface Question {
  number: number;
  type: string;
  answer: string;
}

const QuestionsContext = createContext<QuestionsContextData>(
  {} as QuestionsContextData,
);

const QuestionsProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([
    { number: 1, type: 'Matemática e suas tecnologias', answer: '' },
    { number: 2, type: 'Matemática e suas tecnologias', answer: '' },
    {
      number: 3,
      type: 'Prova: Ciências da Natureza e suas tecnologias',
      answer: '',
    },
    {
      number: 4,
      type: 'Prova: Ciências da Natureza e suas tecnologias',
      answer: '',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0],
  );

  const setQuestion = useCallback(
    number => {
      const findQuestion = questions.find(
        question => question.number === number,
      );
      if (!findQuestion) {
        return;
      }
      setCurrentQuestion(findQuestion);
    },
    [questions],
  );

  const editAnswers = useCallback(
    (number, answer) => {
      const questionssUpdated = questions.map(question => {
        if (question.number === number) {
          const newQuestion: Question = { ...question, answer };
          return newQuestion;
        }

        return question;
      });

      setQuestions(questionssUpdated);
    },
    [questions],
  );

  return (
    <QuestionsContext.Provider
      value={{ questions, editAnswers, currentQuestion, setQuestion }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

function useQuestions(): QuestionsContextData {
  const context = useContext(QuestionsContext);

  if (!context) {
    throw new Error('Context does not exist');
  }

  return context;
}

export { useQuestions, QuestionsProvider };
