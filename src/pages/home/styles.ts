import { styled } from 'styled-components';

const HomePageContainer = styled.section`
  height: 100%;

  padding: 2rem 0;

  display: flex;
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

    button {
      font-size: 1.2rem;
      font-weight: 700;

      text-align: center;

      padding: .4rem;

      &.selected {
        background: ${({ theme }) => theme.colors.darkSecondary};
      }
    }
  }
`;

export default HomePageContainer;
