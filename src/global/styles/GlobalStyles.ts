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
    font-family: inherit;
    outline: none;
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

  input::placeholder, textarea::placeholder {
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

    padding: .4rem .8rem;

    box-shadow: ${({ theme }) => theme.smallShadow};

    &.selected {
      background: ${({ theme }) => theme.colors.darkSecondary};
    }
  }

  main .app-context {
    margin: 2rem 0;
  }

  .custom-select {
    background: ${({ theme }) => theme.colors.white};
    border-radius: .4rem;

    &.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .select-trigger {
      display: flex;
      justify-content: space-between;

      position: relative;

      .select-options {
        background: ${({ theme }) => theme.colors.white};
        border-bottom-left-radius: .4rem;
        border-bottom-right-radius: .4rem;

        position: absolute;

        width: 100%;
        left: 0;
        top: 100%;
      }
    }

    .option {
      &:last-of-type {
        border-bottom-left-radius: .4rem;
        border-bottom-right-radius: .4rem;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.gray};
      }
    }

    .select-trigger, .option {
      padding: 1rem;

      &, * {
        cursor: pointer;
      }
    }

    > div {
      font-size: 1.2rem;
      font-weight: 700;

      svg {
        color: ${({ theme }) => theme.colors.main};
      }

      p {
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }
`;

export default GlobalStyles;
