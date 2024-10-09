import { styled } from 'styled-components'

export const RoutineCreateWrapper = styled.div<{ color: string }>`
  padding: 8px 8px 8px 0;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme, color }) => theme[`${color}`]};
  border-radius: 7px;
  gap: 8px;
`
