import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.grayBtLight}80;

  border-radius: 6px;
  .days-wrapper {
    display: flex;
    gap: 4px;
  }
  .option {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 32px;

    background-color: ${({ theme }) => theme.basicBg};

    border: solid 1px ${({ theme }) => theme.point}90;
    border-radius: 4px;

    outline: none;
    opacity: 0.35;
    &.current {
      border: solid 1px ${({ theme }) => theme.point};

      opacity: 1;
    }
  }
`
