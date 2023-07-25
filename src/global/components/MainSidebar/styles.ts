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

  .action-section {
    flex: 1;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    overflow: hidden;

    button {
      background: ${({ theme }) => theme.colors.lightMain};
      border-radius: .4rem;

      &.selected {
        background: ${({ theme }) => theme.colors.darkMain};
      }

      &:not(.new-workspace-button):hover {
        opacity: .8;
      }

      &.new-workspace-button {
        background: ${({ theme }) => theme.colors.secondary};

        display: flex;
        justify-content: center;
        align-items: center;
        gap: .4rem;
      }
    }

    .new-team-button {
      background: ${({ theme }) => theme.colors.white};
      border-radius: .4rem;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      padding: .8rem;
      
      > * {
        color: ${({ theme }) => theme.colors.main};
      }
    }
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

  .workspaces {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    overflow: auto;
  }
`;

export default MainSidebarContainer;
