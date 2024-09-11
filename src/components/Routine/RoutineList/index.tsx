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
import ButtonsModal from '@components/common/modal/ButtonsModal'
import { useTheme } from 'styled-components'
import ButtonInAlert from '@components/common/button/ButtonInAlert'

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
        <RoutineItem
          key={routine.idx}
          index={index}
          routine={routine}
          updateRoutineItem={updateRoutineItem}
          isDone={isDone[index]}
        />
      ))}
    </S.RoutineList>
  )
}

interface RoutineItemProps {
  index: number
  routine: IRoutine
  updateRoutineItem: (index: number) => Promise<void>
  isDone: boolean
}

function RoutineItem({ index, routine, updateRoutineItem, isDone }: RoutineItemProps) {
  const theme = useTheme()
  const [type, setType] = useState<'basic' | 'edit' | 'stop' | 'delete'>('basic')

  if (type === 'delete') {
    return (
      <S.Routine key={routine.sequence} color={routine.color} type={type}>
        <div className="delete-message">
          <div>
            <b>'{routine.title}'</b>을(를) 삭제하시겠습니까?
            <br />
            삭제 시 루틴 기록도 함께 삭제됩니다.
          </div>
          <div className="button-wrapper">
            <ButtonInAlert
              type="cancel"
              onClick={() => {
                setType('basic')
              }}
            />
            <ButtonInAlert
              type="delete"
              onClick={() => {
                // deleteRoutineItem(routine.idx)
              }}
            />
          </div>
        </div>
      </S.Routine>
    )
  }

  return (
    <S.Routine key={routine.sequence} color={routine.color} type={type}>
      <button className="done-button" onClick={() => updateRoutineItem(index)}>
        {isDone ? <CheckedIcon /> : <UncheckedIcon />}
      </button>
      <span className={isDone ? 'done' : ''}>{routine.title}</span>
      <ButtonsModal button={<MoreIcon fill={theme.grayBtLight} />} position={{ left: '-30px' }}>
        <li>
          <button
            onClick={() => {
              console.log('수정')
            }}
          >
            수정
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              console.log('중지')
            }}
          >
            중지
          </button>
        </li>
        <li>
          <button
            className="red"
            onClick={() => {
              console.log('삭제')
              setType('delete')
            }}
          >
            삭제
          </button>
        </li>
      </ButtonsModal>
    </S.Routine>
  )
}
