import React, { useCallback, useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import iconsImg from '../../assets/Icons.svg';
import Answer from '../../components/Answer';
import { useQuestions } from '../../hooks/questions';
import api from '../../services/api';

import { Container, Content, Header, AnswersContainer, Modal } from './styles';

const Answers: React.FC = () => {
  const [responsesSent, setResponsesSent] = useState(false);
  const { questions } = useQuestions();

  const handleSaveAnswers = useCallback(async () => {
    const name = localStorage.getItem('@psycho:name');
    const email = localStorage.getItem('@psycho:email');

    await api.post('/tests', {
      name,
      email,
      answers: questions,
    });
  }, [questions]);

  return (
    <Container>
      {responsesSent && (
        <Modal>
          <GiConfirmed />

          <p>Respostas enviadas</p>
        </Modal>
      )}

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
        <AnswersContainer responsesSent={responsesSent}>
          {questions.map(question => (
            <Answer question={question} />
          ))}
        </AnswersContainer>
        <button type="button" onClick={handleSaveAnswers}>
          Salvar Repostas
        </button>
      </Content>
    </Container>
  );
};

export default Answers;
