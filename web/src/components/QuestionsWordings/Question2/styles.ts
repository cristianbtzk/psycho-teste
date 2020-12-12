import styled from 'styled-components';

export const Content = styled.div`
  padding: 40px 30px;
  margin-top: -10px;
  display: flex;
  z-index: 0;

  p {
    font-family: 'Roboto';
    font-size: 20px;
    line-height: 36px;
    text-align: justify;
  }
`;

export const Column = styled.div`
  flex: 50%;
  padding: 0 22px;

  table {
    border-collapse: collapse;
    font-family: 'Roboto';
    margin: 24px auto;

    td,
    th {
      padding: 3px 4px;
      text-align: center;
    }
  }

  table td,
  table th {
    border: 1px solid black;
  }
  table tr:first-child th {
    border-top: 0;
    background: #c5c7c5;
  }

  table tr td:first-child,
  table tr th:first-child {
    border-left: 0;
  }
  table tr td:last-child,
  table tr th:last-child {
    border-right: 0;
  }
`;
