import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'
import { Props } from '@components/common/button/Button/index'

const backgroundStyle = (selected: string) => css`
  background: ${selected};
  &:hover {
    background: ${darken(0.05, selected)};
  }
  &:active,
  &:focus {
    background: ${darken(0.15, selected)};
  }
`

const outlineStyle = (selected: string) => css`
  color: ${selected};

  background: ${({ theme }) => theme.basicBg};
  border: 1px solid ${selected};

  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.basicBg};
    box-shadow: 0 0 6px 0 ${lighten(0.2, selected)};
  }
  &:active,
  &:focus {
    color: ${({ theme }) => theme.basicBg};

    background: ${selected};
    box-shadow: 0 0 6px 0 ${lighten(0.3, selected)};
  }
`

const sizes = {
  large: css`
    padding: 0.8em 1em;

    font-size: 1.066rem;
  `,
  medium: css`
    padding: 0.6em 0.8em;

    font-size: 1rem;
  `,
  small: css`
    padding: 0.5em 0.6em;

    font-size: 0.875rem;
  `,
}

export const Button = styled.button<Pick<Props, '$round' | 'size' | 'color' | '$outline' | '$fullwidth'>>`
  /* 공통 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  outline: none;
  font-weight: normal;
  line-height: 1.2em;

  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* 크기 */
  ${({ size }) => sizes[size!]}

  /* 색상 */
  ${({ theme, color }) => (color ? backgroundStyle(color) : backgroundStyle(theme.point))}
  ${({ theme, color, $outline }) => $outline && (color ? outlineStyle(color) : outlineStyle(theme.point))}

  /* 기타 */
  border-radius: ${({ $round }) => ($round ? '1.5rem' : '6px')};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};
`
