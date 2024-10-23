import { styled } from 'styled-components'

export const CountWrapper = styled.div`
  padding: 2px;
  margin: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.basicBg};
`
