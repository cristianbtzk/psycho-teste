import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 150px;
  z-index: 2;
  background: rgba(4, 96, 85, 0.26);
  border: 1px solid #efefef;

  & + div {
    border-top: 0;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  align-items: center;

  p {
    color: #fff;
  }

  p:nth-child(2) {
    font-size: 24px;
  }

  p:nth-child(3) {
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
`;
