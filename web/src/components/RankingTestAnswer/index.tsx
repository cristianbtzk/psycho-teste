import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuestions } from '../../hooks/questions';

import { Container, Content } from './styles';

interface Answer {
  number: number;
  is_correct: boolean;
  answer: string;
  time: string;
}

interface RankingTestAnswerProps {
  answer: Answer;
}

const RankingTestAnswer: React.FC<RankingTestAnswerProps> = ({ answer }) => {
  return (
    <Container>
      <Content>
        <p>Questão {answer.number}</p>
        <p>{answer.answer ? `Letra ${answer.answer.toUpperCase()}` : '-'}</p>
        <p>Tempo</p>
        <p>{answer.is_correct ? 'Correta' : 'Incorreta'}</p>
      </Content>
    </Container>
  );
};

export default RankingTestAnswer;
