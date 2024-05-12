import { styled } from 'styled-components'

export const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 8px;
  margin: 0;

  box-sizing: border-box;
  & > li {
    display: flex;
    gap: 8px;
    align-items: center;

    & > .time {
      color: ${({ theme }) => theme.textLight};
      font-size: 13px;
      flex-grow: 0;
      flex-shrink: 0;
    }
    & > button {
      width: 100%;
      padding: 0 8px;

      color: ${({ theme }) => theme.text};
      font-size: 15px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      background-color: ${({ theme }) => theme.basicBg};
      border: solid 1px transparent;
      border-radius: 20px;
      outline: unset;

      & > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    &.long-event {
      & > .time {
        color: ${({ theme }) => theme.grayBt};
        font-weight: bold;
        min-width: 35px;
        text-align: center;
      }
      & > button {
        // 컬러가 없는 경우 기본으로 아래 컬러가 출력됩니다.
        // 실제 컬러는 MonthlyCalendar 컴포넌트에서 인라인으로 관리됩니다.
        padding: 6px 12px;

        background-color: ${({ theme }) => theme.s1};
        color: ${({ theme }) => theme.text + 80};

        transition:
          box-shadow 0.2s ease-in-out,
          border 0.2s ease-in-out;
        &:hover,
        &:active {
          border: solid 1px ${({ theme }) => theme.grayBt + 50};
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        }
        &:before {
          width: 4px;
          height: 4px;
          margin-right: 4px;
          transform: translateY(-1px);

          display: inline-block;

          background-color: ${({ theme }) => theme.grayBt + 50};
          border-radius: 2px;

          vertical-align: top;

          content: '';
        }
        &:before {
          display: none;
        }
      }
    }
    &:not(.long-event) {
      padding: 8px 0;
      border-bottom: solid 1px ${({ theme }) => theme.grayLine};
      & > button {
        padding: 0;
      }
    }
  }
`
