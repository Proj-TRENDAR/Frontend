import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.point2}4d;
  .top-wrapper {
    display: flex;
    gap: 8px;
  }
  .keep-repeat {
  }
  .max-num {
    display: flex;
    align-items: center;
    span {
      width: 100%;

      display: inline-block;
    }
    button {
      flex-shrink: 0;
    }
  }
  .end-time {
    border: none;
  }
  .option {
    padding: 0;
    margin: 0;
    width: 100%;

    background-color: ${({ theme }) => theme.basicBg};

    border: solid 1px ${({ theme }) => theme.grayLine};
    border-radius: 4px;

    outline: none;
    opacity: 0.4;
    &.current {
      border: solid 1px ${({ theme }) => theme.point};

      opacity: 1;
    }
  }
`
