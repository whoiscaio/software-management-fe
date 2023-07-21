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

  .app-context {
    width: 100%;
    max-width: 1200px;
  }

  input {
    border: 0;
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  button,
  input,
  a {
    color: ${({ theme }) => theme.colors.white};
  }

  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5 {
    cursor: default;
  }

  button {
    all: unset;

    cursor: pointer;
  }

  a {
    all: unset;

    &, * {
      cursor: pointer;
    }
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.white}88;
  }
`;

export default GlobalStyles;
