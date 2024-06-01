import { styled } from 'styled-components'

export const ToggleButtonWrapper = styled.div<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  label {
    color: ${props => (props.isChecked ? props.theme.point : props.theme.labelGray)};
    padding: 6px 8px;
    line-height: 1em;
  }
  input[type='checkbox'] {
    margin: 0 calc((62px - 24px) / 2);
    width: 24px;
    height: 24px;
    position: relative;
    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 62px;
      height: 28px;
      background-color: ${({ theme }) => theme.toggleUnChecked};
      border-radius: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: background-color 0.2s ease-in-out;
    }
    &::after {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 22px;
      height: 22px;
      background-color: ${({ theme }) => theme.basicBg};
      border-radius: 14px;
      position: absolute;
      top: 50%;
      left: -4px;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease-in-out;
    }
    &:checked {
      &::before {
        background-color: ${({ theme }) => theme.point};
      }
      &::after {
        left: calc(100% + 4px);
        transform: translate(-50%, -50%);
      }
    }
  }
`
