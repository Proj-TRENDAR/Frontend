import { useEffect, useState } from 'react'
import { getRoutineList } from '@/api/Routine/routineApi.ts'
import { IRoutine } from '@/types'
import Add from '@assets/image/icon/ic-add.svg?react'

import * as S from './style'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import IconButton from '@components/common/button/IconButton'
import RoutineList from '@components/Routine/RoutineList'

interface Props {
  id: string
}
export default function Routine({ id }: Props) {
  const [routineList, setRoutineList] = useState<IRoutine[]>([])

  const getRoutine = async () => {
    try {
      const { data } = await getRoutineList()
      setRoutineList(data)
    } catch (error) {
      console.error('Failed to fetch routine list', error)
    }
  }

  useEffect(() => {
    getRoutine()
  }, [])

  return (
    <AccordionItem
      moreStyle={S.RoutineWrapper}
      id={id}
      header={
        <PageHeader
          title={<PageHeader.InnerListTitle title="ROUTINE" url="routine-list" />}
          button={
            <IconButton
              onClick={() => {
                // TODO: 루틴 추가 기능 구현
              }}
            >
              <Add />
            </IconButton>
          }
        />
      }
    >
      {/* TODO: 루틴 목록 여부에 따라 출력이 달라져야함. 지금은 우선 목록이 없는 경우로만 출력함 */}
      {routineList ? <>컨텐츠</> : <EmptyContent />}
    </AccordionItem>
  )
}

function EmptyContent() {
  return (
    <S.EmptyContent>
      <p className="description">
        저장한 루틴이 없습니다.
        <br />
        루틴을 설정하고 좋은 습관을 들여보세요
      </p>
      <h2 className="exam-title">ROUTINE 예시</h2>
      <div className="exam-content">
        <RoutineList list={ExamDummy} />
      </div>
    </S.EmptyContent>
  )
}

const ExamDummy: IRoutineList[] = [
  {
    title: '아침 운동하기',
    isDone: false,
    sequence: 1,
    color: 'r1',
  },
  {
    title: '독서하기',
    isDone: false,
    sequence: 2,
    color: 'r3',
  },
]
