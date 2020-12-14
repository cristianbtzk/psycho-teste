import React, { useState } from 'react';

import { AiOutlineUser, AiFillClockCircle } from 'react-icons/ai';
import { IoIosSchool } from 'react-icons/io';

import { Container } from './styles';

interface RankingElementProps {
  name: string;
  score: number;
  time: string;
  email: string;
}

const RankingElement: React.FC<RankingElementProps> = ({
  name,
  score,
  email,
  time,
}) => {
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('@psycho:email');
  });

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

      <button type="button">Ver Prova</button>
    </Container>
  );
};

export default RankingElement;
