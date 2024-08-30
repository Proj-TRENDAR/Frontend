import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input.separation {
    font-family: 'NanumBarunGothic', sans-serif;
    font-size: 15px;
    text-align: right;
    color: ${({ theme }) => theme.text};

    border: solid 1px ${({ theme }) => theme.grayLine};

    &:focus,
    &:active {
      outline: solid 1px ${({ theme }) => theme.pointHover}30;
    }
  }
  span {
    flex-shrink: 0;
    margin-right: 8px;
  }
`
