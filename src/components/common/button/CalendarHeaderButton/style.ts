import { css, styled } from 'styled-components'

export const CalendarHeaderButton = styled.div`
  margin: 8px 0;
  gap: 8px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;

  .prev-button,
  .next-button {
    padding: 0;
    line-height: 0;
    background-color: unset;
    border: none;

    & > svg {
      width: 30px;
      height: 30px;
      ${({ theme }) => css`
        stroke: ${theme.grayBtLight};
      `}
      cursor: pointer;
    }
    & > svg:hover {
      ${({ theme }) => css`
        stroke: ${theme.grayBt};
      `}
    }
  }

  .prev-button > svg {
    transform: rotate(90deg);
  }

  .next-button > svg {
    transform: rotate(-90deg);
  }
`
