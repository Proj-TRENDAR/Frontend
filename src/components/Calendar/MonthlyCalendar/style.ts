import { css, styled } from 'styled-components'

const dateListStyle = css`
  width: 100%;
  gap: 1px;

  display: flex;
  justify-content: space-between;
  & > li {
    padding: 8px;
    width: 100%;

    background-color: ${({ theme }) => theme.basicBg};
  }
  & > .weekdays {
    color: ${({ theme }) => theme.dayColorOfWeekday};
  }
  & > .sun {
    color: ${({ theme }) => theme.dayColorOfSun};
  }
  & > .sat {
    color: ${({ theme }) => theme.dayColorOfSat};
  }
`

export const Monthly = styled.div`
  background-color: ${({ theme }) => theme.pointBg};
  ul {
    padding: 0;
    margin: 0;

    list-style: none;
  }
`
export const DayHeader = styled.ul`
  ${dateListStyle};
`

export const Week = styled.div`
  .date-wrapper {
    ${dateListStyle};

    & > li {
      position: relative;

      border-top: solid 1px ${({ theme }) => theme.grayLine};
      border-bottom: solid 1px ${({ theme }) => theme.grayLine};
      &::before {
        width: 100%;
        height: 118px;
        bottom: -1px;
        left: 0;
        transform: translateY(100%);

        display: block;
        position: absolute;

        background-color: ${({ theme }) => theme.basicBg};

        content: '';
      }
      &.ghost::before {
        background-color: unset;
      }
    }
    & > .ghost {
      background-color: unset;
    }
  }
  .schedule-wrapper {
    height: 118px;
    padding: 4px;
    gap: 4px;

    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(7, 1fr);
    & > li {
      padding: 0 8px;

      position: relative;
      z-index: 1;

      font-size: 13px;
    }
    & > .long-schedule {
      display: flex;
      align-items: center;

      background-color: ${({ theme }) => theme.s1};

      border-radius: 20px;
    }
  }
`
