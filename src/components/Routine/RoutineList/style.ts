import { styled } from 'styled-components'

export const RoutineList = styled.ul`
  padding: 0;
  margin: 0;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  list-style: none;
`
type RoutineType = 'basic' | 'edit' | 'stop' | 'delete'

export const Routine = styled.li<{ color: number; type?: RoutineType }>`
  padding: 8px;
  gap: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  ${({ type, color, theme }) => {
    switch (type) {
      case 'delete':
        return `
          background-color: #4F4F4F;
        `
      case 'basic':
      default:
        return `
          background-color: ${color ? theme[`r${color}`] : theme.r1};
        `
    }
  }}

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  .done-button {
    margin: 0;
    padding: 0;

    display: flex;
    background: none;
    border: none;

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

  .done {
    color: ${({ theme }) => theme.text};
    opacity: 30%;
    text-decoration: line-through;
  }
`
