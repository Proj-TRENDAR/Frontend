import { ITodoList } from '@/types'

import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import Add from '@assets/image/icon/ic-add.svg?react'
import TodoList from '@components/common/TodoList'
import IconButton from '@components/common/button/IconButton'

import * as S from '@components/Home/ToDo/style'

interface Props {
  id: string
}

export default function ToDo({ id }: Props) {
  // TODO: ExamDummy대신 api로 가져온 값 넣기
  const todoList = ExamDummy
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
      {todoList.length ? <Content list={todoList} /> : <EmptyContent />}
    </AccordionItem>
  )
}

function Content({ list }: { list: ITodoList[] }) {
  return <TodoList list={list} />
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
        <TodoList list={ExamDummy} />
      </div>
    </S.EmptyContent>
  )
}
// TODO: Backend get Todo 수정 후 api 연결
const ExamDummy: ITodoList[] = [
  {
    idx: 1,
    title: '2024년 다이어리 구매',
    isDone: false,
    sequence: 2,
    appliedAt: '2024-03-12 00:00:00',
  },
  {
    idx: 2,
    title: '1주차 회의 준비',
    isDone: true,
    sequence: 1,
    appliedAt: '2024-03-13 12:34:00',
  },
]
