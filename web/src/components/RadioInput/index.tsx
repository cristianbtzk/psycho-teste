import React, { InputHTMLAttributes } from 'react';

import { Content } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  letter: string;
}

const RadioInput: React.FC<InputProps> = ({
  id,
  letter,
  children,
  ...rest
}) => {
  return (
    <Content>
      <label htmlFor={id}>{letter}</label>
      <input type="radio" id={id} {...rest} />
      {children}
    </Content>
  );
};

export default RadioInput;
