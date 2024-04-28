import { useTheme } from 'styled-components'

import * as S from '@pages/Home/Schedule/style.ts'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import Add from '@assets/image/icon/ic-add.svg?react'
import IconButton from '@components/common/button/IconButton'

interface Props {
  id: string
}

export default function Schedule({ id }: Props) {
  const theme = useTheme()
  const scheduleList = null
  return (
    <AccordionItem
      moreStyle={S.ScheduleWrapper}
      arrowColor={theme.basicBg}
      id={id}
      header={
        <PageHeader
          title={<h1 className="section-title">2023년 12월 17일 일요일</h1>}
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
      {/*TODO: 스케줄 목록 여부에 따라 출력이 달라져야함. 지금은 우선 목록이 없는 경우로만 출력함 */}
      <S.ContentWrapper>{scheduleList ? <>컨텐츠</> : <EmptyContent />}</S.ContentWrapper>
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
