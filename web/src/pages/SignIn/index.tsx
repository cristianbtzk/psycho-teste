import React, { FormEvent, useCallback, useState } from 'react';

import { Container, Form, Icons } from './styles';

import iconsImg from '../../assets/Icons.svg';
import element01Img from '../../assets/element01.svg';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <img src={element01Img} alt="Teste" />
      <Form onSubmit={handleSubmit}>
        <h1>Iniciar Simulado</h1>

        <input
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />

        <button type="submit">Entrar</button>
      </Form>
      <Icons>
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
        <img src={iconsImg} alt="Ícones" />
      </Icons>
    </Container>
  );
};

export default SignIn;
