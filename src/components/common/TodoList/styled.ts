import { styled } from 'styled-components'

export const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  gap: 2px;

  flex-grow: 1;

  list-style: none;
`
type TodoType = 'basic' | 'create' | 'edit' | 'delete'
export const Todo = styled.li<{ $type?: TodoType }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  ${({ $type, theme }) => {
    switch ($type) {
      case 'create':
      case 'edit':
        return `
          padding: 2px 0 2px 4px; 
          gap: 6px;
          background-color: ${theme.pointBg};
        `
      case 'delete':
        return `
          padding: 4px 4px 4px 8px; 
          gap: 6px;
          background-color: ${theme.cancelBgColor};
        `
      case 'basic':
      default:
        return `
          padding: 6px 8px;
          gap: 10px;
          background-color: ${theme.basicBg}
        `
    }
  }}

  &:not(:last-child) {
    margin-bottom: 2px;
  }

  .done-button {
    margin: 0;
    padding: 0;

    background: none;
    border: none;

    font-size: 0;
    line-height: unset;
  }

  .title-input {
    flex-grow: 1;

    font-size: 16px;
    border: none;
  }

  span {
    padding-top: 2px;

    flex-grow: 1;
    flex-shrink: 1;

    font-size: 16px;
    line-height: 1rem;
  }

  .done {
    color: ${({ theme }) => theme.checkedTextColor};
    text-decoration: line-through;
  }
`
