import { styled } from 'styled-components';

type BoxProps = {
  $bg?: 'white' | 'main'
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: #00000044;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div<BoxProps>`
  width: 80%;
  max-width: 400px;

  background: ${({ theme, $bg }) => theme.colors[$bg || 'white']};
  border-radius: .4rem;

  padding: 1rem;

  .cancel-button {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.darkerGray};

    &:hover {
      background: ${({ theme }) => theme.colors.gray};
      transform: none;
    }
  }
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  h2 {
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    color: ${({ theme }) => theme.colors.darkerGray};
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    gap: 1rem;

    button {
      box-shadow: none;
      border-radius: .4rem;

      font-size: 1rem;
    }

    .confirm-button {
      background: ${({ theme }) => theme.colors.error}44;
      color: ${({ theme }) => theme.colors.error};

      &:hover {
        background: ${({ theme }) => theme.colors.error}66;
        transform: none;
      }
    }
  }
`

export const FormModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 2rem;

  header {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .fields {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    gap: 1rem;

    button {
      border-radius: .4rem;

      box-shadow: none;
    }

    .confirm-button:hover {
      background-color: ${({ theme }) => theme.colors.darkSecondary};
    }
  }
`;
