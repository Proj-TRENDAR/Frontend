import { styled } from 'styled-components'

export const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  gap: 2px;

  flex-grow: 1;

  list-style: none;
`
export const Todo = styled.li<{ $deleted?: string }>`
  padding: 8px;
  gap: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  background-color: ${props => {
    return props.$deleted === 'true' ? props.theme.cancelBgColor : props.theme.basicBg
  }};

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
    align-items: center;

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
