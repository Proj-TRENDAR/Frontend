import { useTheme } from 'styled-components'

import * as S from '@pages/Home/Event/style.ts'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import Add from '@assets/image/icon/ic-add.svg?react'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'
import dateFormat from '@/utils/dateFormat.ts'
import EventList from '@components/Event/EventList'
import { useEffect, useState } from 'react'
import Calendar from '@/utils/calendar.ts'
import { IEvent } from '@/types'
import IconLink from '@components/common/link/IconLink'

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

    let weekOfSelectedDate: IEvent[] = [] // 선택된 날짜가 포함된 주 첫날(일요일) ~ 선택된 날짜 전까지의 일정
    for (let i = 0; i < monthlyDates.length; i += 7) {
      if (monthlyDates[i] <= selectedDate && monthlyDates[i + 7] >= selectedDate) {
        const monthStartDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()
        const selectedDateOfDate = selectedDate.getDate()
        for (let i = 0; i < calendarInfo.selectedMonthInfo.length; i++) {
          if (i * 7 + 7 - monthStartDay >= selectedDateOfDate) {
            weekOfSelectedDate = calendarInfo.selectedMonthInfo[i]
            break
          }
        }
      }
    }

    // 2. 하루 일정은 아래 순서대로 출력되어야함
    // 2-1. weekOfselectedDate 중 하루종일, 하루이상이면서 선택된 날짜까지 이어지는 일정
    // 2-2. 선택된 날짜의 일정
    //  FIXME: 여기서부터 잘못되어서 못가져오는것 같다!
    setEventList([
      ...weekOfSelectedDate.filter(
        event =>
          new Date(event?.startTime).getTime() <= selectedDate.getTime() &&
          new Date(event?.endTime).getTime() >= selectedDate.getTime()
      ),
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
            <IconLink url="event-create">
              <Add fill={theme.basicBg} />
            </IconLink>
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
