import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(254.1deg, #014ca5 0.17%, #002051 96.48%);
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

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
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr;

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
`;
