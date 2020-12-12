import React, { useCallback } from 'react';

import { Container } from './styles';

export interface ContainerProps {
  handleChangeAnswer: (answer: string) => void;
}

const OptionsContainer: React.FC<ContainerProps> = ({
  handleChangeAnswer,
  children,
}) => {
  const handleGetAnswer = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChangeAnswer(event.target.value);
    },
    [handleChangeAnswer],
  );

  return <Container onChange={handleGetAnswer}>{children}</Container>;
};

export default OptionsContainer;
