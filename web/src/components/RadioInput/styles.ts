import styled from 'styled-components';

export const Content = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    margin-left: 50px;
  }
  input {
    margin: 15px 6px;
  }

  > svg {
    display: contents;
  }
`;
