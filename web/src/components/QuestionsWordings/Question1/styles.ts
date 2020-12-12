import styled from 'styled-components';

export const Content = styled.div`
  padding: 40px 30px;
  margin-top: -10px;
  flex: 1;
  z-index: 0;

  p {
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 36px;
    text-align: justify;
  }
`;

export const Grid = styled.div`
  margin-top: 36px;
  padding: 0px 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;
