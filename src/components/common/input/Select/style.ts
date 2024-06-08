import { styled } from 'styled-components'

const borderRadius = '6px'

export const SelectWrapper = styled.div<{ isOpenModal: boolean }>`
  width: 100%;

  position: relative;
  z-index: ${props => (props.isOpenModal ? 1 : 0)};
  & > button {
    padding: 8px 8px 8px 12px;
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.pointBg};
    border: solid 1px ${({ theme }) => theme.grayLine};
    border-bottom: solid 1px ${({ theme }) => theme.pointBg};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08);

    text-align: left;

    border-radius: ${borderRadius} ${borderRadius} 0 0;

    &.closed {
      background-color: #fff;

      box-shadow: none;
      border-radius: ${borderRadius};
      border: solid 1px ${({ theme }) => theme.grayLine};
    }
    svg {
      opacity: 0.5;
      width: 22px;
      height: 22px;
    }
  }
  & > ul {
    width: 100%;
    margin: 0;
    padding: 0;

    position: absolute;
    top: 38px;
    left: 0;
    list-style: none;
    overflow: hidden;
    z-index: 1;

    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0 0 ${borderRadius} ${borderRadius};

    &.closed {
      height: 0;

      box-shadow: none;
    }

    li {
      width: 100%;

      border-top: solid 1px ${({ theme }) => theme.grayLine};
    }
  }
`

export const ButtonItem = styled.button`
  width: 100%;
  padding: 10px 12px;

  text-align: left;
  line-height: 1rem;

  background-color: unset;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.pointBg};
  }
  &.current {
    background-color: ${({ theme }) => theme.pointBg};
    color: ${({ theme }) => theme.text}40;
  }
`
