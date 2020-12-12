import styled from 'styled-components';

export const Content = styled.div`
  padding: 40px 30px;
  margin-top: -10px;
  flex: 1;
  z-index: 0;
  text-align: center;
  justify-content: center;

  p {
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 36px;
    text-align: justify;
    margin-bottom: 22px;
  }

  table + p {
    text-align: center;
    margin-top: 18px;
  }

  strong {
    font-weight: 700;
    font-family: 'Roboto';
    font-size: 16px;
  }

  table {
    table-layout: fixed;

    width: 70%;
    margin: 28px auto 0;
    text-align: center;
    font-family: 'Roboto';
    font-size: 14px;
    td {
      padding: 1px;
      border: 2px solid #fff;
    }

    .black {
      background: #000;
    }
  }
`;
