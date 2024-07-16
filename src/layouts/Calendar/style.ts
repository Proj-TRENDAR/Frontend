import { styled } from 'styled-components'

export const Calendar = styled.section`
  .calendar-header {
    padding: 7px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;

    & > .title-button-wrapper {
      display: flex;
      justify-content: center;
    }
    & > .toggle-wrapper {
      width: 100%;

      display: flex;
      justify-content: flex-end;
      & > div {
        transform: scale(0.8);

        transition: all 0.2s ease-in-out;
      }
    }
  }
  @media (min-width: 468px) {
    .calendar-header {
      height: 64px;

      flex-direction: row;
      & > .toggle-wrapper {
        width: auto;
        top: 50%;
        right: 10px;
        transform-origin: right;

        position: absolute;
        & > div {
          transform: translateY(-50%) scale(0.8);
        }
      }
    }
  }
  @media (min-width: 768px) {
    .calendar-header {
      & > .toggle-wrapper {
        & > div {
          transform: translateY(-50%) scale(1);
        }
      }
    }
  }
  .calendar-body {
    width: 100%;
    height: auto;

    position: relative;
    overflow: auto;

    @media (min-width: 768px) {
      height: calc(100vh - 64px);
    }
  }
`
