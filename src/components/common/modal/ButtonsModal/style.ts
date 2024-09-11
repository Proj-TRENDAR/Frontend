import { styled } from 'styled-components'

export const ModalWrapper = styled.div`
  display: flex;
  position: relative;
`
export const Modal = styled.ul`
  padding: 0;
  margin: 0;
  overflow: hidden;

  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  list-style: none;

  background-color: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
  border-radius: 6px;

  transform: translateY(100%);

  &.opened {
    display: block;
  }

  li {
    & + li {
      border-top: solid 1px ${({ theme }) => theme.grayLine};
    }
    a,
    button {
      width: 100%;
      padding: 8px 12px;

      display: block;

      text-align: center;
      text-decoration: none;
      font-weight: normal;
      white-space: nowrap;
      color: #000;

      background-color: ${({ theme }) => theme.basicBg};
      border: none;

      &:hover {
        background-color: ${({ theme }) => theme.pointBg};
      }
      &.red {
        color: ${({ theme }) => theme.textRed};
      }
    }
  }
`
