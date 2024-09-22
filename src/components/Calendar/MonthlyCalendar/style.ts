import { css, styled } from 'styled-components'

const dateListStyle = css`
  width: 100%;
  gap: 1px;

  display: flex;
  justify-content: space-between;
  & > li {
    width: 100%;
    padding: 4px;

    position: relative;

    font-size: 11px;

    background-color: ${({ theme }) => theme.basicBg};
    &.current:after {
      width: 100%;
      height: 122px;
      top: 0;
      left: 0;

      display: block;
      box-sizing: border-box;
      position: absolute;

      border: solid 2px ${({ theme }) => theme.point};
      border-radius: 7px;

      z-index: 2;
      pointer-events: none;
      content: '';

      @media (min-width: 768px) {
        height: 151px;
      }
    }
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

  @media (min-width: 768px) {
    & > li {
      padding: 8px;

      font-size: 13px;
    }
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
        height: 100px;
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
      opacity: 0.3;
    }
  }
  .event-wrapper {
    height: 100px;
    padding: 4px;
    gap: 4px;

    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(7, 1fr);
    & > li {
      display: flex;
      align-items: stretch;
      position: relative;
      z-index: 1;

      border-radius: 20px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      transition:
        box-shadow 0.2s ease-in-out,
        border 0.2s ease-in-out;

      &:hover,
      &:active {
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      }
      & > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      & > button {
        margin: 0;
        padding: 0 8px;
        width: 100%;

        text-align: left;

        border: solid 1px transparent;
        border-radius: 20px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        cursor: pointer;
        outline: none;
      }
    }
    & > .long-event > button {
      // 컬러가 없는 경우 기본으로 아래 컬러가 출력됩니다.
      // 실제 컬러는 MonthlyCalendar 컴포넌트에서 인라인으로 관리됩니다.
      background-color: ${({ theme }) => theme.s1};

      &:before {
        display: none;
      }
    }
  }
  @media (min-width: 768px) {
    .date-wrapper {
      & > li {
        &::before {
          height: 126px;
        }
      }
    }
    .event-wrapper {
      height: 126px;
      & > li > button {
        font-size: 13px;
      }
    }
  }
`

export const EventDotList = styled.li<{ color: string }>`
  & > button {
    background-color: unset;
    &:before {
      width: 5px;
      height: 5px;
      margin-right: 4px;
      margin-left: -4px;
      transform: translateY(5px);

      display: inline-block;

      background-color: ${props => props.color ?? props.theme.grayBt + 50};
      border-radius: 3px;

      vertical-align: top;

      content: '';
    }
  }
`
