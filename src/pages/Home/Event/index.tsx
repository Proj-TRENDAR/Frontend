import { useTheme } from 'styled-components'

import * as S from '@pages/Home/Event/style.ts'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import Add from '@assets/image/icon/ic-add.svg?react'
import IconButton from '@components/common/button/IconButton'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'
import dateFormat from '@/utils/dateFormat.ts'
import EventList from '@components/Event/EventList'
import { useEffect, useState } from 'react'
import Calendar from '@/utils/calendar.ts'
import { IEvent } from '@/types'

interface Props {
  id: string
}

export default function Event({ id }: Props) {
  const calendar = new Calendar()
  const theme = useTheme()
  const [eventList, setEventList] = useState<IEvent[]>()
  const [calendarInfo] = useAtom(calendarInfoAtom)

  useEffect(() => {
    // 1. 선택 된 날짜가 포함된 일정 구하기
    const selectedDate = new Date(calendarInfo.selectedDate)

    const { prevMonthDates, thisMonthDates, nextMonthDates } = calendar.getMonthDates(selectedDate)
    const monthlyDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]

    let beforeDatesOfSelectedDate: IEvent[] = [] // 선택된 날짜가 포함된 주 첫날(일요일) ~ 선택된 날짜 전까지의 일정
    let weekOfselectedDate: IEvent[] = [] // 선택된 날짜의 일정
    for (let i = 0; i < monthlyDates.length; i += 7) {
      if (monthlyDates[i] <= selectedDate && monthlyDates[i + 7] >= selectedDate) {
        beforeDatesOfSelectedDate = calendarInfo.selectedMonthInfo.slice(i, i + selectedDate.getDay()).flat()
        weekOfselectedDate = calendarInfo.selectedMonthInfo[i + selectedDate.getDay()] ?? []
        break
      }
    }

    // 2. 하루 일정은 아래 순서대로 출력되어야함
    // 2-1. beforeDatesOfSelectedDate 중 하루종일, 하루이상이면서 선택된 날짜까지 이어지는 일정
    // 2-2. 선택된 날짜의 일정
    setEventList([
      ...beforeDatesOfSelectedDate.filter(event => event?.being !== null && new Date(event?.endTime) >= selectedDate),
      ...weekOfselectedDate,
    ])
  }, [calendarInfo])

  return (
    <AccordionItem
      moreStyle={S.EventWrapper}
      arrowColor={theme.basicBg}
      id={id}
      header={
        <PageHeader
          title={
            <h1 className="section-title">
              {dateFormat(new Date(calendarInfo.selectedDate), 'YYYY년 MM월 DD일 d요일')}
            </h1>
          }
          button={
            <IconButton
              onClick={() => {
                // TODO: 일정 추가 기능 구현
              }}
            >
              <Add fill={theme.basicBg} />
            </IconButton>
          }
        />
      }
    >
      <S.ContentWrapper>
        {eventList && eventList?.length > 0 ? <EventList list={eventList} /> : <EmptyContent />}
      </S.ContentWrapper>
    </AccordionItem>
  )
}

function EmptyContent() {
  return (
    <S.EmptyContent>
      <p className="description">일정 없음</p>
    </S.EmptyContent>
  )
}
