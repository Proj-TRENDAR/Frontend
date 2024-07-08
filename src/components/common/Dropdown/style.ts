import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

export const DropDownWrapper = styled.div`
  width: 100%;

  position: relative;
  z-index: 0;

  & > button {
    padding: 4px 16px 4px 4px;
    width: 100%;
    height: 38px;

    display: flex;
    align-items: center;

    text-align: left;
    color: ${({ theme }) => theme.text};

    background-color: ${({ theme }) => theme.basicBg};
    border: none;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08);

    border-radius: 20px 20px 0 0;

    &.closed {
      box-shadow: none;
      border-radius: 20px;
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

    background-color: ${({ theme }) => theme.basicBg};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0 0 20px 20px;

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
const ItemStyled = css`
  width: 100%;
  padding: 10px 16px;

  text-align: left;
  line-height: 1rem;

  color: ${({ theme }) => theme.text};

  background-color: unset;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.pointBg};
  }
`

const disabled = css`
  color: ${({ theme }) => theme.textLight};

  pointer-events: none;
`
export const ButtonItem = styled.button`
  ${ItemStyled}

  &:disabled {
    ${disabled}
  }
`

export const LinkItem = styled(Link)<{ $disabled: boolean }>`
  ${ItemStyled}

  display: inline-block;

  color: ${({ theme }) => theme.text};
  text-decoration: none;

  ${({ $disabled }) => $disabled && disabled}
`
