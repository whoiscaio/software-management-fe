import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  body {
    font-family: Lato, Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
  }

  button {
    all: unset;

    cursor: pointer;
  }
`;

export default GlobalStyles;
