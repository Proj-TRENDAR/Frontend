import * as S from './style'
import React from 'react'
import TabButton, { ITabList } from '@components/common/button/TabButton'
import CalendarHeaderButton from '@components/common/button/CalendarHeaderButton'
import { useAtom } from 'jotai'
import { calendarInfoAtom } from '@/store'
import dateFormat from '@/utils/dateFormat'

interface Props {
  tabList: ITabList[]
  defaultTabKey: string
  children: React.ReactNode // 주간/월간 캘린더를 자식으로 받음
}
export default function CalendarLayout({ tabList, defaultTabKey, children }: Props) {
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)

  const handleMonth = (calc: number) => {
    const currentDate = new Date(calendarInfo.selectedDate)
    const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() + calc))
    setCalendarInfo({ selectedDate: oneMonthAgo })
  }

  return (
    <S.Calendar>
      <div className="calendar-header">
        <div className="title-button-wrapper">
          <CalendarHeaderButton
            text={dateFormat(new Date(calendarInfo.selectedDate), 'YYYY년 MM월')}
            handlePrev={() => {
              handleMonth(-1)
            }}
            handleNext={() => {
              handleMonth(1)
            }}
            size="large"
            width={168}
          />
        </div>
        <div className="toggle-wrapper">
          <TabButton tabList={tabList} defaultTabKey={defaultTabKey} />
        </div>
      </div>
      <div className="calendar-body">{children}</div>
    </S.Calendar>
  )
}
