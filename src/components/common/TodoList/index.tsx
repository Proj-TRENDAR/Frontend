import React from 'react'
import { useTheme } from 'styled-components'

import * as S from './styled'
import { ITodoList } from '@/types'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import { updateTodo } from '@/api/Todo/todoApi.ts'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai/index'
import Calendar from '@/utils/calendar.ts'

interface Props {
  list: ITodoList[]
  setTodoList?: React.Dispatch<React.SetStateAction<ITodoList[]>>
}
export default function TodoList({ list, setTodoList }: Props) {
  const theme = useTheme()
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const calendar = new Calendar()
  const { thisYear, thisMonth, thisDay } = calendar.getDateInfo(new Date(calendarInfo.selectedDate))
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
            <button onClick={() => toggleTodoDone(index)}>
              {todo.isDone ? <CheckedIcon fill={theme.checkedColor} /> : <UncheckedIcon fill={theme.grayBtLight} />}
            </button>
            <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
            <button className="more">
              <MoreIcon fill={theme.grayBtLight} />
            </button>
          </S.Todo>
        ))}
    </S.TodoList>
  )
}
