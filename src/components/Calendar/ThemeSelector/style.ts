import { styled, keyframes, css } from 'styled-components'

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

interface ThemeProps {
  $isPaletteOpen: boolean
  $themeCount: number
}

export const Theme = styled.div<ThemeProps>`
  width: 32px;
  height: ${({ $isPaletteOpen, $themeCount }) => ($isPaletteOpen ? `${32 * ($themeCount + 1)}px` : '32px')};

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: calc(100% - 50px);
  z-index: 1;

  background-color: ${({ theme }) => theme.basicBg};
  border-radius: 16px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);

  transition: height 0.5s ease;

  .icon {
    transform: ${({ $isPaletteOpen }) => ($isPaletteOpen ? 'rotate(360deg)' : 'rotate(0deg)')};
    animation: ${({ $isPaletteOpen }) =>
      $isPaletteOpen
        ? css`
            ${rotateAnimation} 0.4s linear
          `
        : 'none'};
  }
  .palette {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .color-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 7px;
    cursor: pointer;
  }
`
