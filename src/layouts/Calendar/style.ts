import { styled } from 'styled-components'

export const Calendar = styled.section`
  .calendar-header {
    padding: 7px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & > .title-button-wrapper {
      display: flex;
      justify-content: center;
    }
    & > .toggle-wrapper {
      top: 50%;
      right: 0;
      transform: translateY(-50%);

      position: absolute;
    }
  }
  .calendar-body {
  }
`
