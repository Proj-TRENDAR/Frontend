import { Link } from 'react-router-dom'

import * as S from '@components/Home/style'
import { AccordionItem } from '@components/Accordion'

interface Props {
  id: string
}
export default function Routine({ id }: Props) {
  return (
    <AccordionItem
      id={id}
      header={
        <S.ItemHeader>
          <h1 className="section-title">ROUTINE</h1>
          <Link to="routine-list">리스트</Link>
          <button>추가</button>
        </S.ItemHeader>
      }
    >
      <>컨텐츠</>
    </AccordionItem>
  )
}
