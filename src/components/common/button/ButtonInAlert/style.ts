import { RuleSet, css, styled } from 'styled-components'
import { BUTTON_TYPE } from '.'

export const sizes = {
  large: css`
    padding: 8px 16px;
  `,
  small: css`
    padding: 4px 8px;
  `,
}

type Types = {
  [type in keyof typeof BUTTON_TYPE]: {
    color: string | RuleSet<object>
    backgroundColor: string | RuleSet<object>
    hoveredColor: string | RuleSet<object>
    hoveredBackgroundColor: string | RuleSet<object>
  }
}

export const types: Types = {
  save: {
    color: css`
      ${({ theme }) => theme.basicBg}
    `,
    backgroundColor: css`
      ${({ theme }) => theme.point}
    `,
    hoveredColor: css`
      ${({ theme }) => theme.basicBg}
    `,
    hoveredBackgroundColor: css`
      ${({ theme }) => theme.pointHover}
    `,
  },
  cancel: {
    color: css`
      ${({ theme }) => theme.grayBt}
    `,
    backgroundColor: '#f3f3f3',
    hoveredColor: css`
      ${({ theme }) => theme.grayBt}
    `,
    hoveredBackgroundColor: css`
      ${({ theme }) => theme.grayLine}
    `,
  },
  delete: {
    color: css`
      ${({ theme }) => theme.basicBg}
    `,
    backgroundColor: css`
      ${({ theme }) => theme.textRed}
    `,
    hoveredColor: css`
      ${({ theme }) => theme.basicBg}
    `,
    hoveredBackgroundColor: css`
      ${({ theme }) => theme.textRedDark}
    `,
  },
}

export const Button = styled.button<{ $size: keyof typeof sizes; $type: keyof typeof BUTTON_TYPE; disabled: boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  ${({ $size }) => sizes[$size]}

  color: ${({ $type, disabled }) => (disabled ? types['cancel'].color : types[$type].color)};
  font-size: 16px;
  font-weight: 700;

  background-color: ${({ $type, disabled }) =>
    disabled ? types['cancel'].backgroundColor : types[$type].backgroundColor};
  border-radius: 6px;
  border: none;

  &:hover {
    color: ${({ $type }) => types[$type].hoveredColor};

    background-color: ${({ $type }) => types[$type].hoveredBackgroundColor};
  }
`
