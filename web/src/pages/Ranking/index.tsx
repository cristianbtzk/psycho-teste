import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageButtons from '../../components/PageButtons';
import RankingElement from '../../components/RankingElement';
import api from '../../services/api';

import { Container, PageSelect } from './styles';

interface Test {
  id: number;
  name: string;
  email: string;
  score: number;
  time: string;
}

const Ranking: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const handleMenu = useCallback(() => {
    history.push('/menu');
  }, [history]);

  useEffect(() => {
    api.get(`/tests/${currentPage}`).then(response => {
      setTests(response.data.tests);
      setPages(Math.ceil(response.data.count / 5));
    });
  }, [currentPage]);

  return (
    <Container>
      <h1>Ranking</h1>

      {tests.map(test => (
        <RankingElement
          key={test.id}
          id={test.id}
          name={test.name}
          time={test.time}
          score={test.score}
          email={test.email}
        />
      ))}

      <PageSelect>
        <PageButtons
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </PageSelect>
      <button type="button" onClick={handleMenu}>
        Voltar ao menu
      </button>
    </Container>
  );
};

export default Ranking;
