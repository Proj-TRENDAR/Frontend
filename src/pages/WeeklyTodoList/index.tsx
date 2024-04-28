import { useNavigate } from 'react-router-dom'
import { SetStateAction, useEffect, useState } from 'react'
import { getTodoList } from '@/api/Todo/todoApi.ts'
import { ITodoList } from '@/types'
import { calendarInfoAtom, getSelectedWeekDates } from '@/store'
import { useAtom } from 'jotai/index'

import * as S from './style'
import X from '@/assets/image/icon/ic-x.svg?react'
import dateFormat from '@/utils/dateFormat.ts'
import TodoList from '@components/Todo/TodoList'
import IconButton from '@components/common/button/IconButton'
import CalendarHeaderButton from '@components/common/button/CalendarHeaderButton'

export default function WeeklyTodoList() {
  const navigate = useNavigate()
  const [todoList, setTodoList] = useState<ITodoList[]>([])
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)
  const weekDates = getSelectedWeekDates()
  const handleWeek = (calc: number) => {
    const currentDate = new Date(calendarInfo.selectedDate)
    const oneWeekAgo = new Date(currentDate.setDate(currentDate.getDate() + calc * 7))
    setCalendarInfo({ selectedDate: oneWeekAgo })
  }

  const getTodo = async () => {
    try {
      const { data } = await getTodoList()
      setTodoList(data)
    } catch (err: any) {
      console.debug('err', err)
    }
  }
  useEffect(() => {
    getTodo()
  }, [])

  return (
    <S.WeeklyTodoListWrapper>
      <S.WeeklyTodoListHeader>
        TO DO
        <div className="button-wrapper">
          <IconButton
            onClick={() => {
              navigate('/')
            }}
          >
            <X />
          </IconButton>
        </div>
      </S.WeeklyTodoListHeader>
      <S.WeeklyTodoList>
        <div className="calendar-header-button-wrapper">
          <CalendarHeaderButton
            text={dateFormat(new Date(calendarInfo.selectedDate), 'YYYY년 MM월 W주차')}
            handlePrev={() => {
              handleWeek(-1)
            }}
            handleNext={() => {
              handleWeek(1)
            }}
            size="medium"
            width={208}
          />
        </div>
        <div className="week-date-wrapper">
          {weekDates.map((date, index) => {
            return <WeeklyTodoItem key={index} date={date} todoList={todoList} setTodoList={setTodoList} />
          })}
        </div>
      </S.WeeklyTodoList>
    </S.WeeklyTodoListWrapper>
  )
}

interface WeeklyTodoItemProps {
  date: Date
  todoList: ITodoList[]
  setTodoList: React.Dispatch<SetStateAction<ITodoList[]>>
}
function WeeklyTodoItem({ date, todoList, setTodoList }: WeeklyTodoItemProps) {
  const thisYear = date.getFullYear()
  const thisMonth = date.getMonth() + 1
  const thisDay = date.getDate()
  const filteredTodoList = todoList.filter(item => {
    const itemDate = new Date(item.appliedAt)
    return (
      thisYear === itemDate.getFullYear() && thisMonth === itemDate.getMonth() + 1 && thisDay === itemDate.getDate()
    )
  })
  return (
    <>
      <S.WeeklyTodoItemWrapper>
        <div>
          <div className="weekly-todo-date">{dateFormat(new Date(date), 'YYYY년 MM월 DD일')}</div>
          <TodoList list={filteredTodoList} setTodoList={setTodoList} />
        </div>
      </S.WeeklyTodoItemWrapper>
    </>
  )
}
