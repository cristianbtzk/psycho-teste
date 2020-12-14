import React, { useCallback, useState } from 'react';

import { AiOutlineUser, AiFillClockCircle } from 'react-icons/ai';
import { IoIosSchool } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface RankingElementProps {
  name: string;
  score: number;
  time: string;
  email: string;
  id: number;
}

const RankingElement: React.FC<RankingElementProps> = ({
  name,
  score,
  id,
  email,
  time,
}) => {
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('@psycho:email');
  });

  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/ranking-test?test=${id}`);
  }, [history, id]);

  return (
    <Container isUserTest={userEmail === email}>
      <AiOutlineUser />
      <h3>{name}</h3>
      <div>
        <AiFillClockCircle />
        {time}
      </div>
      <div>
        <IoIosSchool />
        {score}
      </div>

      <button type="button" onClick={handleClick}>
        Ver Prova
      </button>
    </Container>
  );
};

export default RankingElement;
