import React from 'react'
import { useAtom } from 'jotai/index'
import { useTheme } from 'styled-components'

import * as S from './styled'
import { ITodoList } from '@/types'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import { updateTodo } from '@/api/Todo/todoApi.ts'
import { calendarInfoAtom } from '@/store'
import Calendar from '@/utils/calendar.ts'
import ButtonsModal from '@components/common/modal/ButtonsModal'
import AlertModal from '@components/common/modal/AlertModal'
import { useAlertModal } from '@/Hooks/useAlertModal.ts'

interface Props {
  list: ITodoList[]
  setTodoList?: React.Dispatch<React.SetStateAction<ITodoList[]>>
}
export default function TodoList({ list, setTodoList }: Props) {
  const theme = useTheme()
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const calendar = new Calendar()
  const { thisYear, thisMonth, thisDay } = calendar.getDateInfo(new Date(calendarInfo.selectedDate))
  const [handleComingSoonModal, isComingSoonModalOpen, messageOfComingSoonModal] = useAlertModal({
    alertMessageKey: 'comingSoon',
  })
  const toggleTodoDone = (index: number) => {
    const updatedTodos = list.map(async (todo, i) => {
      if (i === index) {
        todo = { ...todo, isDone: !todo.isDone }
        const result = await updateTodo(todo)
        return result.data
      }
      return todo
    })
    if (setTodoList) {
      Promise.all(updatedTodos).then(updatedTodosArray => {
        setTodoList(updatedTodosArray)
      })
    }
  }

  return (
    <S.TodoList>
      {list
        .filter(item => {
          const itemDate = new Date(item.appliedAt)
          return (
            thisYear === itemDate.getFullYear() &&
            thisMonth === itemDate.getMonth() + 1 &&
            thisDay === itemDate.getDate()
          )
        })
        .sort((a, b) => a.sequence - b.sequence)
        .map((todo, index) => (
          <S.Todo key={todo.sequence}>
            <button className="done-button" onClick={() => toggleTodoDone(index)}>
              {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
            </button>
            <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
            <div className="more">
              <ButtonsModal button={<MoreIcon fill={theme.grayBtLight} />} position={{ left: '-30px' }}>
                <li>
                  <button
                    onClick={() => {
                      handleComingSoonModal(true)
                    }}
                  >
                    수정
                  </button>
                </li>
                <li>
                  <button
                    className="red"
                    onClick={() => {
                      handleComingSoonModal(true)
                    }}
                  >
                    삭제
                  </button>
                </li>
              </ButtonsModal>
            </div>
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
