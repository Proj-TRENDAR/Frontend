import CalendarLayout from '@layouts/Calendar'
import { useEffect, useState } from 'react'
import { ITabList } from '@components/common/button/TabButton'
import WeeklyCalendar from '@components/Calendar/WeeklyCalendar'
import MonthlyCalendar from '@components/Calendar/MonthlyCalendar'
import { useAtom } from 'jotai/index'
import { calendarInfoAtom } from '@/store'

export default function Calendar({ ...props }) {
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)

  const [viewToggle, setViewToggle] = useState('monthly')
  const tabList: ITabList[] = [
    {
      key: 'weekly',
      title: '주간',
      onClick: () => {
        setViewToggle('weekly')
        console.debug('주간 토글 클릭됨')
      },
    },
    {
      key: 'monthly',
      title: '월간',
      onClick: () => {
        setViewToggle('monthly')
        console.debug('월간 토글 클릭됨')
      },
    },
  ]

  useEffect(() => {
    // 선택된 날짜가 없으면 오늘 날짜로 초기화
    const currentTime = new Date(new Date().setHours(0, 0, 0, 0))
    setCalendarInfo({ ...calendarInfo, selectedDate: currentTime })
  }, [])

  return (
    <CalendarLayout tabList={tabList} defaultTabKey="monthly" {...props}>
      {viewToggle === 'weekly' && <WeeklyCalendar />}
      {viewToggle === 'monthly' && <MonthlyCalendar />}
    </CalendarLayout>
  )
}
