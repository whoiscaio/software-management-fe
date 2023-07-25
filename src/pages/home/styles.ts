import { styled } from 'styled-components';

type ProcessContainerProps = {
  openSize: number;
};

const HomePageContainer = styled.section`
  width: 100%;
  padding: 2rem;

  overflow-y: auto;

  h1, h2, h3, h4, p {
    color: ${({ theme }) => theme.colors.black};
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: .6rem;
  }

  > header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 2rem;

    .action {
      display: flex;
      align-items: flex-end;
    }

    button {
      display: flex;
      align-items: center;
      
      gap: 1rem;
    }
  }
`;

export const PhaseListContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: auto;
`;

export const PhaseContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: .6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.lightLine};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: ${({ theme }) => theme.colors.gray};
      border-radius: .4rem;
      
      padding: .4rem;

      display: flex;
    }
  }

  h3 {
    font-size: 2rem;
  }

  .process-list {

    display: flex;
    flex-direction: column;

    padding: .6rem;

    gap: .4rem;
  }

  .action {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;

    button {
      display: flex;
      align-items: center;
      gap: 1rem;

      &:first-of-type {
        background: ${({ theme }) => theme.colors.main};
      }
    }
  }
`;

export const ProcessContainer = styled.div<ProcessContainerProps>`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  border-radius: .3rem;

  display: flex;
  flex-direction: column;

  height: 61px;

  overflow: hidden;

  font-size: 1.2rem;
  text-align: left;

  box-shadow: 0;

  transition: height .12s ease;

  &.open {
    height: ${({ openSize }) => `${openSize}px`};
  }

  .process-item {
    display: flex;
    align-items: center;
    gap: 1rem;

    height: 61px;

    padding: .8rem;

    cursor: pointer;

    > p {
      flex: 1;

      cursor: pointer;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.lightGray};
    }
  }

  .subprocesses-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    .subprocess-action {
      display: flex;
      justify-content: flex-end;

      margin: 0 3rem;

      button {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 1rem;
      }
    }
  }

  .subprocess-list {
    background: ${({ theme }) => theme.colors.lightGray};
    border-radius: .6rem;

    margin: 0 3rem;

    .process-item {
      border-radius: .4rem;

      &:hover {
        background: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  .tag {
    color: ${({ theme }) => theme.colors.white};

    box-shadow: 0;

    &.concluded {
      background-color: #007722;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      transition: transform .12s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default HomePageContainer;
