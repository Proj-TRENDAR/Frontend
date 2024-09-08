import { useEffect, useState } from 'react'
import { deleteRoutineCompleted, postRoutineCompleted } from '@/api/Routine/routineApi.ts'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'
import { IRoutine } from '@/types'

import * as S from './style.ts'
import CheckedIcon from '@assets/image/icon/check/ic-checked.svg?react'
import UncheckedIcon from '@assets/image/icon/check/ic-unchecked.svg?react'
import MoreIcon from '@assets/image/icon/ic-more.svg?react'
import { convertToKSTDate, convertToKSTDateTime } from '@/utils/dateFormat.ts'
import { isSameDay } from 'date-fns'

interface Props {
  list: IRoutine[]
}
export default function RoutineList({ list }: Props) {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const selectedDate = calendarInfo.selectedDate

  const [isDone, setIsDone] = useState<boolean[]>([])

  useEffect(() => {
    const updatedIsDone = list.map(
      routine =>
        routine.completed?.some((date: string) => {
          return selectedDate && isSameDay(new Date(date), new Date(selectedDate))
        }) || false
    )
    setIsDone(updatedIsDone)
  }, [selectedDate, list])

  const updateRoutineItem = async (index: number) => {
    // 상태 업데이트를 위한 변수 복사
    const newIsDone = [...isDone]
    newIsDone[index] = !newIsDone[index]

    // 완료된 경우 날짜 추가, 해제 시 제거
    if (newIsDone[index]) {
      try {
        const result =
          selectedDate && (await postRoutineCompleted(list[index].idx, convertToKSTDate(new Date(selectedDate))))
        if (result && result.status === 201) {
          list[index].completed = [...(list[index].completed || []), convertToKSTDateTime(new Date(selectedDate))]
        }
      } catch (error) {
        console.error('Failed to update routine completion:', error)
        return
      }
    } else {
      try {
        const result =
          selectedDate && (await deleteRoutineCompleted(list[index].idx, convertToKSTDate(new Date(selectedDate))))

        if (result && result.status === 204) {
          list[index].completed =
            list[index].completed?.filter(
              (date: string) =>
                selectedDate && !isSameDay(convertToKSTDate(new Date(date)), convertToKSTDate(new Date(selectedDate)))
            ) || []
        }
      } catch (error) {
        console.error('Failed to update(delete) routine completion:', error)
        return
      }
    }

    setIsDone(newIsDone)
  }

  return (
    <S.RoutineList>
      {list.map((routine, index) => (
        <S.Routine key={routine.sequence} color={routine.color}>
          <button onClick={() => updateRoutineItem(index)}>
            {isDone[index] ? <CheckedIcon /> : <UncheckedIcon />}
          </button>
          <span className={isDone[index] ? 'done' : ''}>{routine.title}</span>
          <button className="more">
            <MoreIcon />
          </button>
        </S.Routine>
      ))}
    </S.RoutineList>
  )
}
