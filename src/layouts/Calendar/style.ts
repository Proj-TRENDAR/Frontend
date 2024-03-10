import { styled } from 'styled-components'

export const Calendar = styled.section`
  .calendar-header {
    height: 64px; // FIXME: 임의임. 모바일 사이즈 달라야함
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
      right: 10px;
      transform-origin: right;
      transform: translateY(-50%) scale(0.8);

      position: absolute;

      @media (min-width: 768px) {
        right: 18px;
        transform: translateY(-50%) scale(1);
      }
    }
  }
  .calendar-body {
    height: calc(100vh - 64px);

    overflow: auto;
  }
`
