import React, { useEffect, useState } from 'react'
import { getTodoList } from '@/api/Todo/todoApi.ts'
import Calendar from '@/utils/calendar.ts'
import { ITodoList } from '@/types'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai/index'

import * as S from '@components/Home/ToDo/style'
import { AccordionItem } from '@layouts/Accordion'
import { PageHeader } from '@layouts/PageHeader'
import TodoList from '@components/common/TodoList'
import IconButton from '@components/common/button/IconButton'
import Add from '@assets/image/icon/ic-add.svg?react'

interface Props {
  id: string
}

export default function ToDo({ id }: Props) {
  const [todoList, setTodoList] = useState<ITodoList[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getTodos = async () => {
    try {
      setError(null)
      setTodoList([])
      setLoading(true)
      const { data } = await getTodoList()
      setTodoList(data)
    } catch (err) {
      console.debug('err', err)
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생했습니다</div>
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
            // onClick={() => {
            //   // TODO: 투두 추가 기능 구현
            // }}
            >
              <Add />
            </IconButton>
          }
        />
      }
    >
      {todoList.length ? <Content list={todoList} setTodoList={setTodoList} /> : <EmptyContent />}
    </AccordionItem>
  )
}

function Content({
  list,
  setTodoList,
}: {
  list: ITodoList[]
  setTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>>
}) {
  const [calendarInfo] = useAtom(calendarInfoAtom)
  const [key, setKey] = useState(0)
  const calendar = new Calendar()
  const { thisYear, thisMonth, thisDay } = calendar.getDateInfo(new Date(calendarInfo.selectedDate))

  useEffect(() => {
    setKey(prevKey => prevKey + 1)
  }, [calendarInfo])

  const filteredList = list
    .filter((item: ITodoList) => {
      const itemDate = new Date(item.appliedAt)
      return (
        thisYear === itemDate.getFullYear() && thisMonth === itemDate.getMonth() + 1 && thisDay === itemDate.getDate()
      )
    })
    .sort((a, b) => a.sequence - b.sequence)
  return <TodoList key={key} list={filteredList} setTodoList={setTodoList} />
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
