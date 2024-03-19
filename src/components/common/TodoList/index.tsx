import { useTheme } from 'styled-components'

import * as S from './styled'
import { ITodoList } from '@/types'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import { useEffect, useState } from 'react'

interface Props {
  list: ITodoList[]
}
export default function TodoList({ list }: Props) {
  const theme = useTheme()
  // 각 todo 항목의 상태를 관리할 useState 선언
  const [todos, setTodos] = useState(list)

  useEffect(() => {
    setTodos(list)
  }, [list])
  const toggleTodoDone = (index: number) => {
    // 해당 todo의 isDone 상태를 토글
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isDone: !todo.isDone }
      }
      return todo
    })
    // // 변경된 todo 목록을 상태에 업데이트
    setTodos(updatedTodos)
  }

  return (
    <S.TodoList>
      {todos
        .sort((a, b) => a.sequence - b.sequence)
        .map((todo, index) => (
          <S.Todo key={todo.sequence}>
            {/*TODO: onClick todo 수정 api 연결*/}
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
