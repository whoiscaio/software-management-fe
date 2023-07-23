import { styled } from 'styled-components';

const HomePageContainer = styled.section`
  h1, h2, h3, h4, p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SidebarContainer = styled.aside`
  background: ${({ theme }) => theme.colors.main};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem 1.4rem;

  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  h3 {
    font-size: 1.6rem;
  }

  .go-back-button {
    width: 2rem;
    height: 2rem;
    
    border-radius: .8rem;

    display: flex;
    align-items: center;
  }

  .team-list {
    height: 100%;

    display: flex;
    flex-direction: column;

    gap: .8rem;
  }
`;

export const HomeHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  
  gap: 1rem;

  padding: 1rem;

  text-align: center;

  h1 {
    font-size: 2rem;
  }

  .workspaces-list {
    display: flex;
    justify-content: center;

    gap: 1.4rem;
  }
`;

export const PhaseListContainer = styled.div`
  flex: 1;

  display: flex;
  gap: 1rem;

  padding: 0 1rem 1rem;

  overflow: auto;

  .phase-column {
    flex: 1;

    border-radius: .6rem;

    min-width: 180px;
    max-width: 200px;

    box-shadow: ${({ theme }) => theme.smallShadow};

    header {
      background: ${({ theme }) => theme.colors.main};

      border-top-right-radius: .6rem;
      border-top-left-radius: .6rem;

      text-align: center;

      padding: .6rem;
      
      h3 {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .process-list {
      display: flex;
      flex-direction: column;

      padding: .6rem;

      gap: .4rem;
    }
  }
`

export default HomePageContainer;
