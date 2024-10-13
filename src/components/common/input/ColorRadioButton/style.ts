import { styled } from 'styled-components'
import check from '@assets/image/icon/check/ic-checked.svg'

const CheckIcon = check.toString()

export const ColorRadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    padding: 6px 8px;
    line-height: 1em;
  }
`

export const ColorRadioButton = styled.input<{ color: string }>`
  &[type='radio'] {
    width: 14px;
    height: 14px;
    margin: 0 6px;
    position: relative;
    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      background-color: ${props => props.color};
      border-radius: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease-in-out;
    }
    &:checked {
      &::before {
        background-color: ${props => props.color};
      }
      &::after {
        content: '';
        display: block;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        background-image: url(${CheckIcon});
        background-position: 50% 50%;
        border: 1px solid ${({ theme }) => theme.basicBg};
        border-radius: 14px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`
