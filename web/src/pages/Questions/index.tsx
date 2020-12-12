import React, { useCallback, useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Container, QuestionsContainer, Header, Footer } from './styles';

import iconsImg from '../../assets/Icons.svg';
import Question from '../../components/QuestionsWordings';
import { useQuestions } from '../../hooks/questions';

const Questions: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const {
    questions,
    setQuestion,
    currentQuestion,
    editAnswers,
  } = useQuestions();
  const history = useHistory();

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion?.number === questions.length) {
      history.push('/answers');
    }
    setQuestion(currentQuestion.number + 1);
  }, [currentQuestion, setQuestion, history, questions.length]);

  const handleSetAnswer = useCallback(() => {
    if (selectedAnswer) {
      editAnswers(currentQuestion.number, selectedAnswer);
      setSelectedAnswer('');
    }
    handleNextQuestion();
  }, [currentQuestion.number, editAnswers, selectedAnswer, handleNextQuestion]);

  return (
    <Container>
      <img src={iconsImg} alt="Ícones" />
      <QuestionsContainer>
        <Header>
          <FaHome />
          <p>Questão {currentQuestion.number}</p>
          <p>Prova: {currentQuestion.type}</p>
          <p>Tempo: 1m20s</p>
        </Header>
        <Question
          setSelectedAnswer={setSelectedAnswer}
          questionNumber={currentQuestion.number}
        />
        <Footer>
          <button onClick={handleNextQuestion} type="button">
            Revisar Depois
          </button>
          <button onClick={handleSetAnswer} type="button">
            Salvar
          </button>
        </Footer>
      </QuestionsContainer>
    </Container>
  );
};

export default Questions;
