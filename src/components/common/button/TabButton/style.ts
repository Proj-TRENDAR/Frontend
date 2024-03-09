import styled, { css } from 'styled-components'
import { Props } from '@components/common/button/TabButton/index'

const sizes = {
  large: css`
    padding: 0.4em 1em;

    font-size: 1rem;
  `,
  small: css`
    padding: 0.5em 1em;

    font-size: 0.875rem;
  `,
}

export const TabWrapper = styled.div`
  display: flex;

  overflow: hidden;

  border-radius: 20px;
  border: solid 1px ${({ theme }) => theme.grayLine}90;
`

export const Tab = styled.button<Pick<Props, 'size' | '$fullwidth'>>`
  /* 공통 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.grayBt};
  outline: none;
  font-weight: normal;
  line-height: 1.2em;

  border: none;
  background-color: ${({ theme }) => theme.grayLine}90;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    color: ${({ theme }) => theme.point};

    background-color: ${({ theme }) => theme.basicBg};
  }

  /* 크기 */
  ${({ size }) => sizes[size!]}

  /* 너비 */
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};
`
