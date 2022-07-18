import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label,
  input {
    font-family: Play;
  }

  label {
    font-size: small;
    /* position: absolute; */
  }

  input {
    margin-top: 3px;
    border-radius: 10px;
    font-size: 1em;
    padding: 5px 6px;
    box-sizing: border-box;
  }
`;
