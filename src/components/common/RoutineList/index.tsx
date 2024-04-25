import * as S from './styled'
import { IRoutineList } from '@/types'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'

interface Props {
  list: IRoutineList[]
}
export default function RoutineList({ list }: Props) {
  return (
    <S.RoutineList>
      {list.map(routine => (
        <S.Routine key={routine.sequence} color={routine.color}>
          <button>{routine.isDone ? <CheckedIcon /> : <UncheckedIcon />}</button>
          <span>{routine.title}</span>
          <button className="more">
            <MoreIcon />
          </button>
        </S.Routine>
      ))}
    </S.RoutineList>
  )
}
