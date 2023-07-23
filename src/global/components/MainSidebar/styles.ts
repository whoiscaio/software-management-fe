import { styled } from 'styled-components';

const MainSidebarContainer = styled.aside`
  background: ${({ theme }) => theme.colors.main};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 280px;

  gap: 2rem;

  padding: 3rem 1rem;

  .heading-wrapper {
    text-align: center;

    h1 span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  .action-section {
    flex: 1;
  }

  .profile-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user {
    display: flex;
    align-items: center;

    font-size: 1.2rem;
    
    gap: .6rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  .select-team {
    background: ${({ theme }) => theme.colors.white};
    border-radius: .4rem;

    .select-trigger {
      display: flex;
      justify-content: space-between;
    }

    .option {
      &, * {
        cursor: pointer;
      }

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

export default MainSidebarContainer;
