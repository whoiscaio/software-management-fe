import { styled } from 'styled-components';

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

const DialogContainer = styled.div`
  width: 80%;
  max-width: 400px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: .4rem;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  padding: 1rem;

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

    .cancel-button {
      background: ${({ theme }) => theme.colors.lightGray};
      border: 2px solid ${({ theme }) => theme.colors.darkerGray};
      color: ${({ theme }) => theme.colors.darkerGray};

      &:hover {
        background: ${({ theme }) => theme.colors.gray};
        transform: none;
      }
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

export default DialogContainer;
