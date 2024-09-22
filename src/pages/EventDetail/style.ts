import { styled } from 'styled-components'

export const Wrapper = styled.div`
  & > section > div > *.line {
    border-bottom: solid 1px ${({ theme }) => theme.grayLine};
  }
`

export const Title = styled.h3`
  padding: 8px;
  font-size: 16px;
  & > div {
    padding: 4px 12px;
    border-radius: 20px;
  }
`

export const Text = styled.div`
  line-height: 33px;
  .no-content {
    color: ${({ theme }) => theme.textLight};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  button {
    padding-left: 12px;
    padding-right: 12px;
  }
`
