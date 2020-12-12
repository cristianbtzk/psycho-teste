import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuestions } from '../../hooks/questions';

import { Container, Content } from './styles';

interface Question {
  number: number;
  type: string;
  answer: string;
}

interface AnswerProps {
  question: Question;
}

const Answer: React.FC<AnswerProps> = ({ question }) => {
  const { setQuestion } = useQuestions();
  const history = useHistory();

  const handleChangeAnswer = useCallback(() => {
    setQuestion(question.number);
    history.push('/questions');
  }, [setQuestion, question.number, history]);

  return (
    <Container>
      <Content hasAnswer={!!question.answer}>
        <p>Questão {question.number}</p>
        <p>
          {' '}
          {question.answer ? `Letra ${question.answer.toUpperCase()}` : '-'}
        </p>
        <p>{question.type.toUpperCase()}</p>
        <p>{question.answer ? 'Respondido' : 'Sem Resposta'}</p>
        <p>Tempo</p>
        <button type="button" onClick={handleChangeAnswer}>
          Mudar Resposta
        </button>
      </Content>
    </Container>
  );
};

export default Answer;
