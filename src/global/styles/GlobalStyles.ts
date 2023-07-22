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
    width: 94%;
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
  h5 {
    cursor: default;
  }

  button {
    all: unset;

    &, * {
      cursor: pointer;
    }
  }

  a {
    all: unset;

    &, * {
      cursor: pointer;
    }
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

  input::placeholder {
    color: ${({ theme }) => theme.colors.white}88;
  }

  .contrast-button {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: .2rem;
  }

  .scale-down-hover-effect {
    transition: transform .12s ease;

    &:hover {
      transform: scale(.97);
    }
  }

  .button-pattern-measures {
    font-size: 1.2rem;
    font-weight: 700;

    text-align: center;

    padding: .4rem;

    box-shadow: ${({ theme }) => theme.smallShadow};

    &.selected {
      background: ${({ theme }) => theme.colors.darkSecondary};
    }
  }

  main .app-context {
    margin: 2rem 0;
  }
`;

export default GlobalStyles;
