import { useEffect, useState } from 'react'
import { createTodo, getTodoList } from '@/api/Todo/todoApi.ts'
import Calendar from '@/utils/calendar.ts'
import { ITodoList } from '@/types'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai/index'

import * as S from '@pages/Home/ToDo/style.ts'
import * as TodoListS from '@components/Todo/TodoList/style.ts'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import TodoList from '@components/Todo/TodoList'
import IconButton from '@components/common/button/IconButton'
import Add from '@assets/image/icon/ic-add.svg?react'
import { ToDoInputForm } from '@pages/Home/ToDo/ToDoForm'

interface Props {
  id: string
}

export default function ToDo({ id }: Props) {
  const [todoList, setTodoList] = useState<ITodoList[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [createNewTodo, setCreateNewTodo] = useState<boolean>(false)
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const calendar = new Calendar()
  const { thisYear, thisMonth, thisDay } = calendar.getDateInfo(new Date(calendarInfo.selectedDate))
  const filteredTodoList = todoList
    .filter((item: ITodoList) => {
      const itemDate = new Date(item.appliedAt)
      return (
        thisYear === itemDate.getFullYear() && thisMonth === itemDate.getMonth() + 1 && thisDay === itemDate.getDate()
      )
    })
    .sort((a, b) => a.sequence - b.sequence)

  const getTodo = async () => {
    try {
      setError(null)
      setLoading(true)
      const { data } = await getTodoList()
      setTodoList(data)
    } catch (err: any) {
      console.debug('err', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateTodo = async (title: string) => {
    if (title.trim() !== '') {
      const payload = {
        title: title.trim(),
        appliedAt: calendarInfo.selectedDate,
      }
      const result = await createTodo(payload)
      if (result.status === 201) {
        setCreateNewTodo(false) // 입력 필드 닫기
        await getTodo()
      }
    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <AccordionItem
      moreStyle={S.ToDoWrapper}
      itemContentMoreStyle={S.ItemContent}
      id={id}
      header={
        <PageHeader
          title={<PageHeader.InnerListTitle title="TO DO" url="to-do-list" />}
          button={
            <IconButton
              onClick={() => {
                setCreateNewTodo(true)
              }}
            >
              <Add />
            </IconButton>
          }
        />
      }
    >
      <>
        {createNewTodo ? (
          <TodoListS.Todo $type={'create'}>
            <ToDoInputForm
              handleSaveTodo={handleCreateTodo}
              close={() => {
                setCreateNewTodo(false)
              }}
            />
          </TodoListS.Todo>
        ) : (
          ''
        )}
        {/* FIXME:
         * 처음 목록 가져올때 =>로딩중
         * 투두 추가/수정/삭제로 인한 업데이트 => 스켈레톤
         */}
        {loading ? (
          <div style={{ textAlign: 'center' }}>로딩중..</div>
        ) : error ? (
          <div style={{ textAlign: 'center' }}>에러가 발생했습니다</div>
        ) : filteredTodoList.length ? (
          <TodoList list={filteredTodoList} setTodoList={setTodoList} />
        ) : (
          <EmptyList />
        )}
      </>
    </AccordionItem>
  )
}

function EmptyList() {
  return (
    <S.EmptyList>
      <p className="description">
        새로운 할 일이 없습니다
        <br />할 일을 추가해보세요
      </p>
      <div className="exam-content">
        <h2 className="exam-title">TODO 예시</h2>
        <TodoList list={ExamDummy} />
      </div>
    </S.EmptyList>
  )
}

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
