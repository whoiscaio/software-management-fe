import { styled } from 'styled-components';

const HomePageContainer = styled.section`
  border-radius: 2rem;

  height: 100%;

  display: flex;

  box-shadow: ${({ theme }) => theme.shadow};

  .main-content {
    flex: 1;

    display: flex;
    flex-direction: column;
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

  h1, h2, p {
    color: ${({ theme }) => theme.colors.black};
  }

  .workspaces-list {
    display: flex;
    justify-content: center;

    gap: 1.4rem;
  }
`;

export default HomePageContainer;
