import ButtonInAlert from '@components/common/button/ButtonInAlert'
import IconButton from '@components/common/button/IconButton'
import { useState } from 'react'
import X from '@assets/image/icon/ic-x.svg?react'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import { useTheme } from 'styled-components'
import { ITodoList } from '@/types'

interface IToDoInputFormProps {
  handleSaveTodo: (title: string) => void
  close: () => void
  initialTodoTitle?: string
}

// 투두 추가, 수정 시 사용하는 폼
export function ToDoInputForm({ handleSaveTodo, close, initialTodoTitle }: IToDoInputFormProps) {
  const [todoTitle, setTodoTitle] = useState<string>(initialTodoTitle ?? '')

  return (
    <>
      <input
        type="text"
        value={todoTitle}
        className="title-input"
        autoFocus={true}
        onChange={e => setTodoTitle(e.target.value)}
        placeholder="새로운 할 일 입력"
      />
      <ButtonInAlert
        type="save"
        text="저장"
        disabled={!todoTitle}
        onClick={() => {
          handleSaveTodo(todoTitle)
        }}
      />
      <IconButton
        onClick={() => {
          close() // 입력 필드 닫기
        }}
      >
        <X />
      </IconButton>
    </>
  )
}

interface IToDoDeleteFormProps {
  todo: ITodoList
  index: number
  updateTodoItem: (index: number, newData: { isDone?: boolean; title?: string }) => Promise<void>
  deleteTodoItem: (index: number) => Promise<void>
  close: () => void
}

// 투두 삭제 시 사용하는 폼
export function ToDoDeleteForm({ todo, index, updateTodoItem, deleteTodoItem, close }: IToDoDeleteFormProps) {
  const theme = useTheme()
  return (
    <>
      <button className="done-button" onClick={() => updateTodoItem(index, { isDone: !todo.isDone })}>
        {todo.isDone ? <CheckedIcon fill={theme.point2} /> : <UncheckedIcon fill={theme.grayBtLight} />}
      </button>
      <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
      <ButtonInAlert
        type="cancel"
        onClick={() => {
          close()
        }}
      />
      <ButtonInAlert
        type="delete"
        onClick={() => {
          deleteTodoItem(todo.idx)
        }}
      />
    </>
  )
}
