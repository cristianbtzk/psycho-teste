import React, { useCallback } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import { Container } from './styles';

interface QuestionProps {
  questionNumber: number;
  setSelectedAnswer: (answer: string) => void;
}

const QuestionsWordings: React.FC<QuestionProps> = ({
  questionNumber,
  setSelectedAnswer,
}) => {
  const handleChangeAnswer = useCallback(
    (answer: string) => {
      setSelectedAnswer(answer);
    },
    [setSelectedAnswer],
  );

  return (
    <Container>
      {questionNumber === 1 && (
        <Question1 handleChangeAnswer={handleChangeAnswer} />
      )}
      {questionNumber === 2 && (
        <Question2 handleChangeAnswer={handleChangeAnswer} />
      )}
      {questionNumber === 3 && (
        <Question3 handleChangeAnswer={handleChangeAnswer} />
      )}
      {questionNumber === 4 && (
        <Question4 handleChangeAnswer={handleChangeAnswer} />
      )}
    </Container>
  );
};

export default QuestionsWordings;
