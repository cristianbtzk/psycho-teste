import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Menu: React.FC = () => {
  const history = useHistory();
  const handleStartTest = useCallback(() => {
    history.push('/questions');
  }, [history]);

  const handleRanking = useCallback(() => {
    history.push('/ranking');
  }, [history]);

  const handleLogout = useCallback(() => {
    localStorage.clear();
    history.push('/');
  }, [history]);

  return (
    <Container>
      <h1>Menu</h1>
      <button type="button" onClick={handleStartTest}>
        Iniciar Simulado
      </button>
      <button type="button" onClick={handleRanking}>
        Ver Ranking
      </button>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
};

export default Menu;
