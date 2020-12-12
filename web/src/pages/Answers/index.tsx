import React from 'react';
import iconsImg from '../../assets/Icons.svg';
import Answer from '../../components/Answer';
import { useQuestions } from '../../hooks/questions';

import { Container, Content, Header, AnswersContainer } from './styles';

const Answers: React.FC = () => {
  const { questions } = useQuestions();

  return (
    <Container>
      <img src={iconsImg} alt="Ícones" />

      <Content>
        <h1>Gabarito</h1>
        <Header>
          <p>Questão</p>
          <p>Resposta</p>
          <p>Prova</p>
          <p>Status</p>
          <p>Tempo/Questão</p>
        </Header>
        <AnswersContainer>
          {questions.map(question => (
            <Answer question={question} />
          ))}
        </AnswersContainer>

        <button type="button">Salvar Repostas</button>
      </Content>
    </Container>
  );
};

export default Answers;
