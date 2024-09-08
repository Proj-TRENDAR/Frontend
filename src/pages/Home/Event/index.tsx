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
    if (calendarInfo && calendarInfo.selectedDate) {
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
      setEventList([
        ...weekOfSelectedDate.filter(event => {
          // FIXME: 이런 타입 가드를 없애려면.. 이미 저장된 일정상태 타입과, 수정/저장시 일정상태 타입을 분리해야할것같은데..
          //  이부분을 고치는게 맞는지, 아니면 이렇게 가드를 하는게 나은지는 아직 잘 모르겠어요
          //  ex) 저장된 일정인 경우 startTime: Date
          //  ex) 수정/저장시 일정인 경우 startTime: Date | undefined (undefined 상태 일 수 있음)
          if (event.startTime && event.endTime) {
            const year = selectedDate.getFullYear()
            const month = selectedDate.getMonth()
            const date = selectedDate.getDate()
            const nextDate = new Date(year, month, date + 1)
            return (
              new Date(event.startTime).getTime() < nextDate.getTime() &&
              new Date(event.endTime).getTime() >= selectedDate.getTime()
            )
          } else {
            return false
          }
        }),
      ])
    }
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
              {dateFormat(
                calendarInfo.selectedDate ? new Date(calendarInfo.selectedDate) : new Date(),
                'YYYY년 MM월 DD일 d요일'
              )}
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
