import { styled } from 'styled-components'

export const RoutineList = styled.ul`
  padding: 0;
  margin: 0;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #cdcdcd;
    background-clip: padding-box;
    border: 2px solid transparent;
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
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

  .delete-message {
    gap: 10px;

    flex-grow: 1;

    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.basicBg};
  }

  .button-wrapper {
    gap: 10px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
