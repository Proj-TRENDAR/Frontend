import { AccordionItem } from '@layouts/Accordion'
import * as S from '@components/Home/ToDo/style'
import { PageHeader } from '@layouts/PageHeader'
import IconButton from '@components/common/button/IconButton'
import Add from '@assets/image/icon/ic-add.svg?react'

interface Props {
  id: string
}

export default function ToDo({ id }: Props) {
  const todoList = null
  return (
    <AccordionItem
      moreStyle={S.ToDoWrapper}
      id={id}
      header={
        <PageHeader
          title={<PageHeader.InnerListTitle title="TO DO" url="to-do-list" />}
          button={
            <IconButton
              onClick={() => {
                // TODO: 투두 추가 기능 구현
              }}
            >
              <Add />
            </IconButton>
          }
        />
      }
    >
      {/* TODO: 투두 목록 여부에 따라 출력이 달라져야함. 지금은 우선 목록이 없는 경우로만 출력함 */}
      {todoList ? <>컨텐츠</> : <EmptyContent />}
    </AccordionItem>
  )
}

function EmptyContent() {
  return (
    <S.EmptyContent>
      <p className="description">
        새로운 할 일이 없습니다
        <br />할 일을 추가해보세요
      </p>
      <div className="exam-content">
        <h2 className="exam-title">TODO 예시</h2>
      </div>
    </S.EmptyContent>
  )
}
