import CalendarLayout from '@layouts/Calendar'
import { useState } from 'react'
import { ITabList } from '@components/common/button/TabButton'

export default function Calendar({ ...props }) {
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
  return (
    <CalendarLayout tabList={tabList} defaultTabKey="monthly" {...props}>
      {viewToggle === 'weekly' && <h1> 주간 캘린더</h1>}
      {viewToggle === 'monthly' && <h1> 월간 캘린더</h1>}
    </CalendarLayout>
  )
}
