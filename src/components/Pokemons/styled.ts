import styled from 'styled-components';

export const Content = styled.section`
  > header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: Play-Bold;
      font-size: 2em;
    }
  }

  > main {
    padding: 0 10px;

    > div:first-of-type {
      padding: 20px 40px;
    }
  }
`;
