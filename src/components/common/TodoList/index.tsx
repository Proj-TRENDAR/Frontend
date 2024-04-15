import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { getTodoList, updateTodo, deleteTodo } from '@/api/Todo/todoApi.ts'
import { ITodoList } from '@/types'

import * as S from './styled'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import ButtonInAlert from '@components/common/button/ButtonInAlert'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import X from '@/assets/image/icon/ic-x.svg?react'
import IconButton from '@components/common/button/IconButton'

interface Props {
  list: ITodoList[]
  setTodoList?: React.Dispatch<React.SetStateAction<ITodoList[]>>
}
export default function TodoList({ list = [], setTodoList }: Props) {
  const updateTodoItem = async (index: number, newData: { isDone?: boolean; title?: string }) => {
    const updatedTodos = list.map(async (todo, i) => {
      if (i === index) {
        const updatedTodo = { ...todo, ...newData }
        const result = await updateTodo(updatedTodo)
        return result.data
      }
      return todo
    })

    const updatedTodosArray = await Promise.all(updatedTodos)
    setTodoList && setTodoList(updatedTodosArray)
  }

  const deleteTodoItem = async (idx: number) => {
    const result = await deleteTodo(idx)
    if (result.status === 200) {
      const { data } = await getTodoList()
      setTodoList && setTodoList(data)
    }
  }

  return (
    <S.TodoList>
      {list.map((todo, index) => (
        <TodoItem
          key={todo.idx}
          index={index}
          todo={todo}
          updateTodoItem={updateTodoItem}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </S.TodoList>
  )
}

interface TodoItemProps {
  index: number
  todo: ITodoList
  updateTodoItem: (index: number, newData: { isDone?: boolean; title?: string }) => void
  deleteTodoItem: (index: number) => void
}

function TodoItem({ index, todo, updateTodoItem, deleteTodoItem }: TodoItemProps) {
  const theme = useTheme()
  const [type, setType] = useState<'basic' | 'edit' | 'delete'>('normal')

  const [changedTodoTitle, setChangedTodoTitle] = useState<string>(todo.title)

  if (type === 'edit') {
    return (
      <S.Todo key={todo.idx} $type="edit">
        <input
          type="text"
          name="title"
          value={changedTodoTitle}
          className="title-input"
          autoFocus={true}
          onChange={event => setChangedTodoTitle(event.target.value)}
        />
        <ButtonInAlert
          type="save"
          text="저장"
          disabled={todo.title.length === 0}
          onClick={() => {
            updateTodoItem(index, { title: changedTodoTitle })
            setType('basic')
          }}
        />
        <IconButton
          onClick={() => {
            setType('basic')
          }}
        >
          <X />
        </IconButton>
      </S.Todo>
    )
  }
  if (type === 'delete') {
    return (
      <S.Todo key={todo.idx} $type="delete">
        <button className="done-button" onClick={() => updateTodoItem(index, { isDone: !todo.isDone })}>
          {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
        </button>
        <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
        <ButtonInAlert
          type="cancel"
          onClick={() => {
            setType('basic')
          }}
        />
        <ButtonInAlert
          type="delete"
          onClick={() => {
            deleteTodoItem(todo.idx)
            setType('basic')
          }}
        />
      </S.Todo>
    )
  }

  // 일반 UI
  return (
    <S.Todo key={todo.idx} $type="basic">
      <button className="done-button" onClick={() => updateTodoItem(index, { isDone: !todo.isDone })}>
        {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
      </button>
      <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
      <div>
        <ButtonsModal button={<MoreIcon fill={theme.grayBtLight} />} position={{ left: '-30px' }}>
          <li>
            <button
              onClick={() => {
                setType('edit')
              }}
            >
              수정
            </button>
          </li>
          <li>
            <button
              className="red"
              onClick={() => {
                setType('delete')
              }}
            >
              삭제
            </button>
          </li>
        </ButtonsModal>
      </div>
    </S.Todo>
  )
}
