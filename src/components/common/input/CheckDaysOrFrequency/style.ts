import { styled } from 'styled-components'

export const CountWrapper = styled.div<{ isActive: boolean }>`
  padding: 2px;
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0;
  border-radius: 6px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.basicBg : 'transparent')};

  opacity: ${({ isActive }) => (isActive ? 1 : 0.35)};
`

export const DaysWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 8px;

  .option {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 32px;

    background-color: ${({ isActive, theme }) => (isActive ? theme.basicBg : 'transparent')};

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
