import { styled } from 'styled-components';

const AuthContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.black};
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
  }

  form {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: .4rem;
    box-shadow: ${({ theme }) => theme.shadow};

    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    width: 100%;
    max-width: 500px;

    padding: 2rem;
  }

  .fields {
    display: flex;
    flex-direction: column;

    gap: 1.4rem;
  }

  .actions {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    .connect-button {
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 700;

      text-align: center;
    }

    .signup-button-wrapper {
      display: flex;
      justify-content: center;
      gap: .4rem;

      button {
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  h1 {
    font-size: 3rem;

    text-align: center;
  }
`;

export const FieldContainer = styled.div`

  input {
    background: ${({ theme }) => theme.colors.lightMain};
    border-radius: .2rem;

    width: 100%;
    font-size: 1.2rem;

    padding: .8rem 1rem;
  }

  .error-message {
    color: ${({ theme }) => theme.colors.error};

    margin-top: .4rem;
  }
`;

export default AuthContainer;
