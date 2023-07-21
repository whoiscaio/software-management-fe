import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: center;

  padding: 1rem 0;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.6rem;
  }

  .app-context {
    display: flex;

    justify-content: space-between;
  }

  .user {
    display: flex;
    align-items: center;
  }

  .actions {
    display: flex;
    align-items: center;

    gap: 2rem;

    button {
      display: flex;
    }
  }

  .profile {
    display: flex;
    align-items: center;

    gap: .4rem;
  }
`;

export default HeaderContainer;
