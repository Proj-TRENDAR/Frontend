import * as S from '@components/Home/Schedule/style'
import { AccordionItem } from '@components/Accordion'

interface Props {
  id: string
}
export default function Schedule({ id }: Props) {
  return (
    <AccordionItem
      moreStyle={S.ScheduleWrapper}
      id={id}
      header={
        <S.ItemHeader>
          <h1 className="section-title">2023년 12월 17일 일요일</h1>
          <button>추가</button>
        </S.ItemHeader>
      }
    >
      <>컨텐츠</>
    </AccordionItem>
  )
}
