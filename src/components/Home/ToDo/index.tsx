import { AccordionItem } from '@components/Accordion'
import { Link } from 'react-router-dom'
import * as S from '@components/Home/ToDo/style'

interface Props {
  id: string
}
export default function ToDo({ id }: Props) {
  return (
    <AccordionItem
      moreStyle={S.ToDoWrapper}
      id={id}
      header={
        <S.ItemHeader>
          <h1 className="section-title">TO DO</h1>
          <Link to="to-do-list">리스트</Link>
          <button>추가</button>
        </S.ItemHeader>
      }
    >
      <>컨텐츠</>
    </AccordionItem>
  )
}
