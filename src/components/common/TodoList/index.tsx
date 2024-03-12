import { useTheme } from 'styled-components'

import * as S from './styled'
import { ITodoList } from '@/types'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'

interface Props {
  list: ITodoList[]
}
export default function TodoList({ list }: Props) {
  const theme = useTheme()
  return (
    <S.TodoList>
      {list
        .sort((a, b) => a.sequence - b.sequence)
        .map(todo => (
          <S.Todo key={todo.sequence}>
            <button>
              {/*TODO: CheckedIcon fill 값 theme로 뺄껀지 체크*/}
              {todo.isDone ? <CheckedIcon fill={'#1DB993'} /> : <UncheckedIcon fill={theme.grayBtLight} />}
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
