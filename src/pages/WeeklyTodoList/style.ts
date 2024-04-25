import { styled } from 'styled-components'

export const WeeklyTodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const WeeklyTodoListHeader = styled.div`
  height: 64px;
  padding: 12px 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & > .button-wrapper {
    width: auto;
    right: 8px;
    transform-origin: right;

    position: absolute;
  }
`
export const WeeklyTodoList = styled.div`
  padding: 0 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  //position: relative;
  & > .calendar-header-button-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & > .week-date-wrapper {
    height: calc(100vh - 175px);
    width: 100%;

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #cdcdcd;
      background-clip: padding-box;
      border: 2px solid transparent;
      border-radius: 7px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }
  }
`
export const WeeklyTodoItemWrapper = styled.div`
  padding: 4px 8px;
  gap: 8px;

  display: flex;
  flex-direction: column;

  & > div > .weekly-todo-date {
    padding: 8px 0 4px 0;

    font-size: 13px;
    color: ${({ theme }) => theme.textInfo};

    border-top: 1px solid var(--grayLine, #ededed);
  }
`
