import { css, styled } from 'styled-components'
import { Props } from '@components/common/datePicker/CalendarHeaderDatePicker/index'

export const DatePicker = styled.div<{ isActive: boolean }>`
  overflow: hidden;
  border-radius: 8px;
  position: absolute;
  top: 4px;
  z-index: 999;

  transition:
    opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
  @media (hover: hover) {
    ${props =>
      props.isActive &&
      css`
        opacity: 0.4;
        & > * {
          filter: blur(4px);
        }
      `}
  }

  &:hover {
    opacity: 1;
    & > * {
      filter: unset;
    }
  }

  ${props =>
    props.isActive &&
    css`
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 16%);
      background-color: ${({ theme }) => theme.pointBg};
    `}
`

export const headerButtonWrapper = styled.div<{ isActive: boolean }>`
  margin: 8px 12px;
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
        stroke: ${theme.grayBt}60;
      `}
      cursor: pointer;
    }
    & > svg:hover {
      ${({ theme }) => css`
        stroke: ${theme.grayBt};
      `}
    }
  }

  .prev-button:not(.more) > svg {
    transform: rotate(90deg);
  }
  .prev-button.more > svg {
    transform: rotate(-180deg);
  }

  .next-button:not(.more) > svg {
    transform: rotate(-90deg);
  }

  ${props =>
    !props.isActive &&
    css`
      .more {
        display: none;
      }
    `}
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

export const CenterButton = styled.button<Pick<Props, 'size' | '$fullwidth' | 'width'> & { isActive: boolean }>`
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

  ${props =>
    props.isActive &&
    css`
      background: ${({ theme }) => theme.basicBg};
    `}

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
export const BodyButtonWrapper = styled.div<{ isActive: boolean }>`
  background-color: ${({ theme }) => theme.basicBg};
  padding: 16px;
  ${props =>
    !props.isActive &&
    css`
      display: none;
    `};
  & > div {
    margin: 0 auto;
    max-width: 316px;
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(3, 1fr);
    gap: 8px;
  }
`

export const MonthButton = styled.div`
  width: 100%;
  max-width: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.pointBg};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text98};

  &.current {
    background-color: ${({ theme }) => theme.point};
    color: ${({ theme }) => theme.basicBg};
  }
`
