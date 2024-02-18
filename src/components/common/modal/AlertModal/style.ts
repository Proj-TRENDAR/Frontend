import { styled } from 'styled-components'

export const ModalWrapper = styled.div`
  width: 0;
  height: 0;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;

  .white-box {
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    transform: translate(-50%, -40%);
    opacity: 0;
  }

  &.opened {
    width: 100vw;
    height: 100vh;

    display: block;

    .white-box {
      transform: translate(-50%, -60%);
      opacity: 1;
    }
  }
`

export const ModalDarkBox = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #000;
  opacity: 0.3;
`

export const Modal = styled.div`
  min-width: 320px;
  min-height: 180px;
  padding: 20px;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;

  background-color: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16);
  border-radius: 16px;

  & > div {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`
