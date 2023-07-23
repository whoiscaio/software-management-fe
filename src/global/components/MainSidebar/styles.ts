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

    margin-bottom: 1rem;

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

  .workspaces {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }
`;

export default MainSidebarContainer;
