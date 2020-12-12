import styled from 'styled-components';

export const Container = styled.div`
  background: #000103;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  > img {
    position: absolute;
    width: 327.8px;
    height: 303.38px;
    left: -100px;
    top: -118.14px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 48px;
  }

  input {
    margin-top: 20px;
    border: 1px solid #efefef;
    padding: 20px;
    font-size: 24px;
    width: 423px;
    border-radius: 100px;
    height: 60px;
  }

  button {
    width: 423px;
    height: 60px;
    margin-top: 62px;
    color: #fff;
    border: 0;
    background: linear-gradient(
      253.58deg,
      #009ee3 1.55%,
      rgba(0, 255, 224, 0.68) 95.8%
    );

    box-shadow: 0px 12px 35px rgba(160, 121, 0, 0.2);
    border-radius: 100px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 50px 0;
  overflow: hidden;
`;

/* export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 100%;
  background: url(${iconsImg}) repeat-x center;
`;
 */
