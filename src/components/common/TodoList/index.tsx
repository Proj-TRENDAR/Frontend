import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { updateTodo } from '@/api/Todo/todoApi.ts'
import { ITodoList } from '@/types'

import * as S from './styled'
import { useAlertModal } from '@/Hooks/useAlertModal.ts'
import AlertModal from '@components/common/modal/AlertModal'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import ButtonInAlert from '@components/common/button/ButtonInAlert'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import X from '@/assets/image/icon/ic-x.svg?react'

interface Props {
  list: ITodoList[]
  setTodoList?: React.Dispatch<React.SetStateAction<ITodoList[]>>
}
export default function TodoList({ list = [], setTodoList }: Props) {
  const theme = useTheme()
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [originalTitle, setOriginalTitle] = useState('')
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [handleComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })

  const updateTodoItem = async (index: number, newData: { isDone?: boolean; title?: string }) => {
    const updatedTodos = list.map(async (todo, i) => {
      if (i === index) {
        const updatedTodo = { ...todo, ...newData }
        const result = await updateTodo(updatedTodo)
        return result.data
      }
      return todo
    })

    if (setTodoList) {
      const updatedTodosArray = await Promise.all(updatedTodos)
      setTodoList(updatedTodosArray)
    }
  }

  const handleEdit = (index: number) => {
    setEditIndex(index === editIndex ? null : index)
  }
  const handleEditCancel = (index: number) => {
    const updatedTodos = list.map((todo, i) => {
      if (i === index) {
        return { ...todo, title: originalTitle }
      }
      return todo
    })
    setTodoList && setTodoList(updatedTodos)
    handleEdit(index)
  }
  const handleDelete = (index: number) => {
    setDeleteIndex(index === deleteIndex ? null : index)
  }
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newTitle = event.target.value
    // 새로운 리스트 생성하여 상태 업데이트
    const updatedList = list.map((todo, i) => {
      if (i === index) {
        return { ...todo, title: newTitle }
      }
      return todo
    })
    setTodoList && setTodoList(updatedList)
  }

  return (
    <S.TodoList>
      {list.map((todo, index) => (
        <S.Todo key={todo.idx}>
          {editIndex === index ? (
            // 수정 상태일 때 UI
            <>
              <S.input
                type="text"
                name="title"
                value={todo.title}
                onChange={event => handleTitleChange(event, index)}
              />
              <ButtonInAlert
                type="save"
                onClick={() => {
                  updateTodoItem(index, { title: todo.title })
                  handleEdit(index)
                }}
              />
              <X
                onClick={() => {
                  handleEditCancel(index)
                }}
              />
            </>
          ) : deleteIndex === index ? (
            // 삭제 상태일 때 UI
            <>
              <button className="done-button" onClick={() => updateTodoItem(index, { isDone: !todo.isDone })}>
                {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
              </button>
              <ButtonInAlert
                type="cancel"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                  handleDelete(index)
                }}
              />
              <ButtonInAlert
                type="delete"
                onClick={() => {
                  /* 클릭 시 동작 구현 */
                }}
              />
            </>
          ) : (
            // 일반 UI
            <>
              <button className="done-button" onClick={() => updateTodoItem(index, { isDone: !todo.isDone })}>
                {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
              </button>
              <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
              <div>
                <ButtonsModal button={<MoreIcon fill={theme.grayBtLight} />} position={{ left: '-30px' }}>
                  <li>
                    <button
                      onClick={() => {
                        setOriginalTitle(todo.title)
                        console.log(originalTitle)
                        handleEdit(index)
                        // handleComingSoonModal(true)
                      }}
                    >
                      수정
                    </button>
                  </li>
                  <li>
                    <button
                      className="red"
                      onClick={() => {
                        handleDelete(index)
                        // handleComingSoonModal(true)
                      }}
                    >
                      삭제
                    </button>
                  </li>
                </ButtonsModal>
              </div>
            </>
          )}

          <AlertModal
            handleClose={() => {
              handleComingSoonModal(false)
            }}
            isOpenModal={isComingSoonModalOpen}
            message={messageOfComingSoonModal}
          />
        </S.Todo>
      ))}
    </S.TodoList>
  )
}
