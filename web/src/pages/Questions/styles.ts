import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(254.1deg, #014ca5 0.17%, #002051 96.48%);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    position: absolute;
    max-height: 200px;
    left: -70px;
    top: 0px;
    z-index: 0;
  }
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90%;
  width: 80%;
  z-index: 1;
  background: #fff;
  border-radius: 10px;
`;

export const Header = styled.header`
  background: #fffdf5;
  box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 35px;
    width: 35px;
  }

  p {
    color: #5c5c5c;
    font-style: italic;
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 18px 18px;
  margin-top: auto;

  > button {
    background: linear-gradient(253.58deg, #0569ff 16.02%, #b51aa5 95.8%);
    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
    color: #fff;
    border: 0;
    padding: 18px 22px;
    margin-right: 20px;

    & + button {
      background: linear-gradient(253.58deg, #2ad76f 1.55%, #20a2cb 93.34%);
      margin-right: 0;
      padding: 18px 42px;
      box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
      border-radius: 100px;
    }
  }
`;
