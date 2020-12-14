import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(254.1deg, #014ca5 0.17%, #002051 96.48%);
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  padding: 50px 0;

  > img {
    position: absolute;
    max-height: 200px;
    left: -70px;
    top: 0px;
    z-index: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  width: 70%;
  z-index: 1;

  > h1 {
    font-style: italic;
    font-size: 96px;
    line-height: 175.78%;
    text-align: center;

    color: #ffffff;
  }

  > button {
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
    border: 0;
    width: 40%;
    height: 85px;
    margin-top: 34px;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 24px;
  }
`;

export const Header = styled.header`
  background: #fffdf5;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  border-radius: 10px;
  padding: 30px 30px;
  z-index: 1;
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  p {
    color: #5c5c5c;
    font-style: italic;
  }
`;

export const AnswersContainer = styled.div`
  width: 100%;

  > div:first-of-type {
    margin-top: -10px;
    padding-top: 10px;
    height: 160px;
  }

  p {
    color: #fff;
    font-style: italic;
  }
`;

export const Modal = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f0f0f5;
  color: #000000;
  border-radius: 8px;
  height: 100%;
  max-height: 550px;
  width: 100%;
  max-width: 500px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    color: green;
    width: 30%;
    height: auto;
  }

  p {
    font-size: 24px;
    margin-top: 20px;
    font-style: italic;
    color: #5c5c5c;
  }
`;

export const Options = styled.div`
  display: flex;
  > button {
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
    border: 0;
    width: 400px;
    height: 85px;
    margin-top: 34px;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 24px;
    & + button {
      margin-left: 24px;
    }
  }
`;
