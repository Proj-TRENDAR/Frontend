import { css, styled } from 'styled-components'
import { Props } from '@components/common/button/CalendarHeaderButton/index'

export const CalendarHeaderButton = styled.div`
  margin: 8px 0;
  gap: 8px;

  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;

  .prev-button,
  .next-button {
    padding: 0;
    line-height: 0;
    background-color: unset;
    border: none;

    & > svg {
      width: 30px;
      height: 30px;
      ${({ theme }) => css`
        stroke: ${theme.grayBtLight};
      `}
      cursor: pointer;
    }
    & > svg:hover {
      ${({ theme }) => css`
        stroke: ${theme.grayBt};
      `}
    }
  }

  .prev-button > svg {
    transform: rotate(90deg);
  }

  .next-button > svg {
    transform: rotate(-90deg);
  }
`

const sizes = {
  large: css`
    padding: 0.4em 1.2em;

    font-size: 1rem;
    @media (min-width: 768px) {
      padding: 0.4em 1.2em;

      font-size: 1.3333rem;
      line-height: 1.3333rem;
    }
  `,
  medium: css`
    padding: 0.4em 1.2em;

    font-size: 1rem;
    @media (min-width: 768px) {
      & > li {
        padding: 8px;

        font-size: 13px;
      }
    }
  `,
}

export const CenterButton = styled.button<Pick<Props, 'size' | '$fullwidth' | 'width'>>`
  /* 공통 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.point};
  outline: none;
  font-weight: normal;
  line-height: 1.2em;

  background: ${({ theme }) => theme.pointBg};
  border: 1px solid ${({ theme }) => theme.point2};
  border-radius: 20px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.basicBg};
  }
  &:active,
  &:focus {
    background: ${({ theme }) => theme.basicBg};
  }

  /* 크기 */
  ${({ size }) => sizes[size!]}

  /* 너비 */
  ${props => {
    if (props.width) {
      return css`
        width: ${props.width}px;
      `
    }
    if (props.$fullwidth) {
      return css`
        width: 100%;
      `
    }
    return css`
      width: auto;
    `
  }}
`
