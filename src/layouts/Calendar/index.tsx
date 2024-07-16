import * as S from './style'
import React from 'react'
import { useAtom } from 'jotai'
import { calendarInfoAtom } from '@/store'

import TabButton, { ITabList } from '@components/common/button/TabButton'
import CalendarHeaderDatePicker from '@components/common/datePicker/CalendarHeaderDatePicker'
import ThemeSelector from '@components/Calendar/ThemeSelector'

interface Props {
  tabList: ITabList[]
  defaultTabKey: string
  children: React.ReactNode // 주간/월간 캘린더를 자식으로 받음
}
export default function CalendarLayout({ tabList, defaultTabKey, children }: Props) {
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)

  const setDate = (date: Date) => {
    setCalendarInfo({ selectedDate: date })
  }

  return (
    <S.Calendar>
      <div className="calendar-header">
        <div className="title-button-wrapper">
          <CalendarHeaderDatePicker date={calendarInfo.selectedDate} setDate={setDate} size="large" width={168} />
        </div>
        <div className="toggle-wrapper">
          <TabButton tabList={tabList} defaultTabKey={defaultTabKey} />
        </div>
      </div>
      <div className="calendar-body">
        {children}
        <ThemeSelector />
      </div>
    </S.Calendar>
  )
}
