import { AccordionItem } from '@layouts/Accordion'
import * as S from '@components/Home/ToDo/style'
import { PageHeader } from '@layouts/PageHeader'
import IconButton from '@components/common/button/IconButton'
import Button from '@components/common/button/Button'
import Add from '@assets/image/icon/ic-add.svg?react'
import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'
import { ITodoList } from '@/types'
import TodoList from '@components/common/TodoList'

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
      {todoList ? <Content /> : <EmptyContent />}
    </AccordionItem>
  )
}

function Content() {
  return (
    <S.Content>
      <button className={'prev-button'}>
        <Arrow stroke={'#A9A9A9'} />
      </button>
      <Button size={'small'} $outline={true} $round={true} $fullwidth={true}>
        날짜
      </Button>
      <button className={'next-button'}>
        <Arrow stroke={'#A9A9A9'} />
      </button>
    </S.Content>
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
