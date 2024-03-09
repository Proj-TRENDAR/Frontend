import * as S from './style'
import React from 'react'
import TabButton, { ITabList } from '@components/common/button/TabButton'

interface Props {
  tabList: ITabList[]
  defaultTabKey: string
  children: React.ReactNode // 주간/월간 캘린더를 자식으로 받음
}
export default function CalendarLayout({ tabList, defaultTabKey, children }: Props) {
  return (
    <S.Calendar>
      <div className="calendar-header">
        <div className="title-button-wrapper">캘린더 헤더</div>
        <div className="toggle-wrapper">
          <TabButton tabList={tabList} defaultTabKey={defaultTabKey} />
        </div>
      </div>
      <div className="calendar-body">{children}</div>
    </S.Calendar>
  )
}
