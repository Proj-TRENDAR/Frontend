import React, { useState } from 'react'
import axios from 'axios'
import { useTheme } from 'styled-components'
import { getTodoList, updateTodo, deleteTodo } from '@/api/Todo/todoApi.ts'
import { ITodoList } from '@/types'

import * as S from './style.ts'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import { ToDoDeleteForm, ToDoInputForm } from '@pages/Home/ToDo/ToDoForm'
import ErrorAlertModal from '@components/common/modal/ErrorModal'

interface Props {
  list: ITodoList[]
  setTodoList?: React.Dispatch<React.SetStateAction<ITodoList[]>>
}
export default function TodoList({ list = [], setTodoList }: Props) {
  const [openErrorModal, setOpenErrorModal] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const updateTodoItem = async (index: number, newData: { isDone?: boolean; title?: string }) => {
    list.map(async (todo: ITodoList, i: number) => {
      if (i === index) {
        const updatedTodo = { ...todo, ...newData }
        const result = await updateTodo(updatedTodo)
        if (result.status === 200) {
          const { data } = await getTodoList()
          setTodoList && setTodoList(data)
        }
      }
    })
  }

  const deleteTodoItem = async (idx: number) => {
    try {
      const result = await deleteTodo(idx)
      if (result.status === 204) {
        const { data } = await getTodoList()
        setTodoList && setTodoList(data)
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data.message || '삭제 중 오류가 발생했습니다.')
      } else {
        setErrorMessage('예상치 못한 오류가 발생했습니다.')
      }
      setOpenErrorModal(true)
    }
  }

  return (
    <>
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
      {openErrorModal && <ErrorAlertModal errorMessage={errorMessage} onClose={() => setOpenErrorModal(false)} />}
    </>
  )
}

interface TodoItemProps {
  index: number
  todo: ITodoList
  updateTodoItem: (index: number, newData: { isDone?: boolean; title?: string }) => Promise<void>
  deleteTodoItem: (index: number) => Promise<void>
}

function TodoItem({ index, todo, updateTodoItem, deleteTodoItem }: TodoItemProps) {
  const theme = useTheme()
  const [type, setType] = useState<'basic' | 'edit' | 'delete'>('basic')

  const handleUpdateTodo = async (title: string) => {
    await updateTodoItem(index, { title }).then(() => {
      setType('basic')
    })
  }

  if (type === 'edit') {
    return (
      <S.Todo key={todo.idx} $type="edit">
        <ToDoInputForm
          handleSaveTodo={handleUpdateTodo}
          close={() => {
            setType('basic')
          }}
          initialTodoTitle={todo.title}
        />
      </S.Todo>
    )
  }
  if (type === 'delete') {
    return (
      <S.Todo key={todo.idx} $type="delete">
        <ToDoDeleteForm
          todo={todo}
          index={index}
          updateTodoItem={updateTodoItem}
          deleteTodoItem={deleteTodoItem}
          close={() => {
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
        {todo.isDone ? <CheckedIcon fill={theme.point2} /> : <UncheckedIcon fill={theme.grayBtLight} />}
      </button>
      <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
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
    </S.Todo>
  )
}
