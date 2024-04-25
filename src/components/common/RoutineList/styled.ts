import { styled } from 'styled-components'

export const RoutineList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
export const Routine = styled.li<{ color: string }>`
  padding: 8px;
  gap: 10px;

  display: flex;
  align-items: center;

  background-color: ${props => {
    if (props?.color) {
      return props.theme[props.color] ?? props.theme.r1
    } else {
      return props.theme.r1
    }
  }};
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  button {
    margin: 0;
    padding: 0;

    background: none;
    border: none;

    font-size: 0;
    line-height: unset;
  }

  span {
    padding-top: 2px;

    flex-grow: 1;
    flex-shrink: 1;

    font-size: 16px;
    line-height: 1rem;
    color: ${({ theme }) => theme.basicBg};
  }
`
