import { styled } from 'styled-components'

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  &:focus,
  &:active {
    outline: solid 1px ${({ theme }) => theme.pointHover}30;
  }
`
