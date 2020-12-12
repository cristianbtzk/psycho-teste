import styled, { css } from 'styled-components';

interface AnswerProps {
  hasAnswer: boolean;
}

export const Container = styled.div`
  height: 150px;
  z-index: 2;
  background: rgba(4, 96, 85, 0.26);
  border: 1px solid #efefef;

  & + div {
    border-top: 0;
  }
`;

export const Content = styled.div<AnswerProps>`
  height: 100%;
  padding: 30px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;
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

  p:nth-child(4) {
    ${props =>
      props.hasAnswer
        ? css`
            color: #02d161;
          `
        : css`
            color: #ff0000;
          `}
  }

  button {
    background: linear-gradient(253.58deg, #00e0ff 1.55%, #c5c176 95.8%);

    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
    border: 0;
    color: #fff;
    padding: 15px 0;
  }
`;
