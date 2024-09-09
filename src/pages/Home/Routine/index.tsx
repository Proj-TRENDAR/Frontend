import { useEffect } from 'react'
import { getRoutineList } from '@/api/Routine/routineApi.ts'
import { IRoutine } from '@/types'
import Add from '@assets/image/icon/ic-add.svg?react'

import * as S from './style'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import IconButton from '@components/common/button/IconButton'
import RoutineList from '@components/Routine/RoutineList'
import { calendarInfoAtom, routineAtom } from '@/store'
import { useAtom } from 'jotai'

interface Props {
  id: string
}

export default function Routine({ id }: Props) {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const selectedDate = calendarInfo.selectedDate
  const [routineList, setRoutineList] = useAtom<IRoutine[]>(routineAtom)

  const getRoutine = async () => {
    try {
      const { data } = await getRoutineList()
      const filteredData = data.filter(item => !item.endTime || selectedDate < new Date(item.endTime))

      setRoutineList(filteredData)
    } catch (error) {
      console.error('Failed to fetch routine list', error)
    }
  }

  useEffect(() => {
    getRoutine()
  }, [selectedDate])

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
      {routineList ? <RoutineList list={routineList} /> : <EmptyContent />}
    </AccordionItem>
  )
}

function EmptyContent() {
  return (
    <S.EmptyContent>
      <p className="description">
        저장된 루틴이 없습니다.
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

const ExamDummy: IRoutine[] = [
  {
    idx: 1,
    title: '아침 운동하기',
    color: 1,
    description: '살을 빼자!',
    weeklyCondition: 3,
    days: [1, 3, 5],
    startTime: '2024-09-01 11:25:00',
    endTime: '2024-10-30 23:59:59',
    completed: null,
    sequence: 1,
    deletedAt: null,
  },
  {
    idx: 2,
    title: '독서하기',
    color: 3,
    description: null,
    weeklyCondition: 3,
    days: [2, 4],
    startTime: '2024-09-01 00:00:00',
    endTime: null,
    completed: null,
    sequence: 2,
    deletedAt: null,
  },
]
