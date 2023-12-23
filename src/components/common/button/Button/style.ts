import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { Size } from '@components/common/button/Button/index'

const colorStyle = css`
  ${({ theme, color }) => {
    const selected = color ?? theme.point
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.$outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `
  }}
`
const sizes = {
  large: css`
    height: 3rem;
    font-size: 1.25rem;
  `,
  medium: css`
    height: 2rem;
    font-size: 1rem;
  `,
  small: css`
    height: 1.75rem;
    font-size: 0.875rem;
  `,
}

const fullwidthStyle = css`
  ${props =>
    props.$fullwidth &&
    css`
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    `}
`

export const Button = styled.button<{ size?: Size; color?: string; outline?: boolean; fullWidth?: boolean }>`
  /* 공통 스타일 */
  padding: 0.5rem 1rem;

  justify-content: center;

  color: white;
  outline: none;
  border: none;
  border-radius: 6px;
  font-weight: bold;

  cursor: pointer;
  /* 크기 */
  ${({ size }) => size && sizes[size]}

  /* 색상 */
  ${colorStyle}
  
  /* 기타 */
  ${fullwidthStyle}
`
