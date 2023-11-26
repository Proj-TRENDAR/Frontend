import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

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
        props.outline &&
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
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
}

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`

const fullwidthStyle = css`
  ${props =>
    props.fullwidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`

export const Button = styled.button<{ size?: string; color?: string; outline?: boolean; fullWidth?: boolean }>`
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
  ${sizeStyles}

  /* 색상 */
  ${colorStyle}
  
  /* 기타 */
  ${fullwidthStyle}
`
