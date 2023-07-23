import { styled } from 'styled-components';

const HomePageContainer = styled.section`
  width: 100%;
  padding: 2rem;

  h1, h2, h3, h4, p {
    color: ${({ theme }) => theme.colors.black};
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: .6rem;
  }

  header {
    margin-bottom: 2rem;
  }
`;

export const PhaseListContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;

  .phase {
    h3 {
      font-size: 2rem;
    }

    .process-list {
      background: ${({ theme }) => theme.colors.lightGray};

      border-radius: .6rem;

      display: flex;
      flex-direction: column;

      padding: .6rem;

      gap: .4rem;

      .process-button {
        color: ${({ theme }) => theme.colors.black};
        background: ${({ theme }) => theme.colors.gray};
        border-radius: .3rem;

        display: flex;
        align-items: center;
        gap: 1rem;

        font-size: 1.2rem;
        text-align: left;

        padding: .4rem;

        box-shadow: 0;

        .tag {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`

export default HomePageContainer;
