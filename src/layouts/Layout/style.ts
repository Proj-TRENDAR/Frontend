import { styled } from 'styled-components'

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  header {
    background-color: ${({ theme }) => theme.pointBg};
    height: 64px;
  }
  #calendar {
    height: 60vh;
    width: 100%;
    min-height: calc(85% - 64px);
  }
  #right-bar {
    background-color: ${({ theme }) => theme.pointBg};
  }

  @media (min-width: 768px) {
    height: 100vh;

    display: grid;
    grid-template: 64px 1fr / 1fr 320px;
    header {
      grid-area: 1 / 2 / 2 / 3;
    }
    #calendar {
      grid-area: 1 / 1 / 3 / 2;
    }
    #right-bar {
      grid-area: 2 / 2 / 3 / 3;
      width: 320px;
    }
  }
`
