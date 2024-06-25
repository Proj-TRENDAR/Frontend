import * as S from './style'
import Calendar from '@/utils/calendar'
import { useTheme } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai'
import HandleDate from '@/utils/calcDate'
import { IEvent } from '@/types'
import { getEventList } from '@/api/Event/eventApi.ts'

export default function MonthlyCalendar() {
  const [isLoading, setIsLoading] = useState(true)
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)
  const [monthlyEvents, setMonthlyEvents] = useState<{ long: IEvent[][]; short: IEvent[][][] }>({
    long: [],
    short: [],
  })
  const [prevSelectedDate, setPrevSelectedDate] = useState<Date>()
  const calendar = new Calendar()
  // FIXME: type error
  const { prevMonthDates, thisMonthDates, nextMonthDates } = calendar.getMonthDates(new Date(calendarInfo.selectedDate))
  const monthlyDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
  const theme = useTheme()
  const today = new Date()
  const handleDate = new HandleDate()

  useEffect(() => {
    if (calendarInfo.selectedDate !== null) {
      setIsLoading(false) // selectedDate가 null이 아니면 로딩 상태 해제
    }
  }, [calendarInfo.selectedDate])

  useEffect(() => {
    if (isLoading) {
      const calendarInfoInLocalStorage = JSON.parse(localStorage.getItem('calendarInfo'))
      if (calendarInfoInLocalStorage && 'selectedDate' in calendarInfoInLocalStorage) {
        if (calendarInfoInLocalStorage.selectedDate !== null) {
          // 로딩중이므로 실행하지 않음
          return
        } else {
          // 데이터가 없는것이므로 오늘날짜로 초기화
          setIsLoading(false)
        }
      }
    }

    // 다른 달로 날짜 변경 시, 그 달의 이벤트들을 가져와서 jotai에 업데이트해줌
    const selectedDate = calendarInfo.selectedDate ? new Date(calendarInfo.selectedDate) : new Date()
    if (selectedDate.getMonth() !== prevSelectedDate?.getMonth()) {
      setPrevSelectedDate(selectedDate) // 날짜 변경시 비교를 위해 이전 날짜를 저장함(월만 비교하기 떄문에 월이 바뀔때만 저장함)

      getEventList(selectedDate.getFullYear(), selectedDate.getMonth() + 1)
        .then(res => {
          if (calendarInfo.selectedDate) {
            setCalendarInfo({ ...calendarInfo, selectedMonthInfo: res.data })
          } else {
            setCalendarInfo({ selectedDate: selectedDate, selectedMonthInfo: res.data })
          }
        })
        .catch(error => {
          // 로그아웃시 monthInfo 초기화
          if (error.response.data.statusCode === 401) {
            setCalendarInfo({
              ...calendarInfo,
              selectedMonthInfo: [],
            })
          }
        })
    }
  }, [calendarInfo.selectedDate, isLoading]) //

  useEffect(() => {
    // 일정 업데이트시, UI 출력을 위해 long/short 이벤트 분리
    const longEvent: IEvent[][] = []
    const shortEvent: IEvent[][] = []
    ;(calendarInfo.selectedMonthInfo ?? []).forEach(dateEventList => {
      const long: IEvent[] = []
      const short: IEvent[] = []
      dateEventList.forEach(event => {
        if (event.being !== null) {
          long.push(event)
        } else {
          short.push(event)
        }
      })
      longEvent.push(long)
      shortEvent.push(short)
    })

    const shortWeekEvent = shortEvent.map(week => {
      const weekEventList = [[], [], [], [], [], [], []]
      week.forEach(event => weekEventList[new Date(event.startTime).getDay()].push(event))
      return weekEventList
    })
    // console.debug('✅', calendarInfo.selectedMonthInfo, 'longEvent', longEvent, 'shortEvent', shortWeekEvent)
    setMonthlyEvents({
      long: longEvent,
      short: shortWeekEvent,
    })
  }, [calendarInfo.selectedMonthInfo]) //

  // rowColStackNum: 각 하루 칸 안에서 하루종일 일정이 차지하는 줄의 수를 저장합니다.
  // 이 값을 참고하여 '하루 내 일정'을 '하루종일 일정' 아래줄에 렌더합니다.
  const rowColStackNum: number[][] = []

  const getSortedLongEvent = (weekNum: number) => {
    rowColStackNum.push([0, 0, 0, 0, 0, 0, 0])
    let event = JSON.parse(JSON.stringify(monthlyEvents.long)) // .slice(weekNum * 7, weekNum * 7 + 7)
    // console.debug('event', event)
    const weekEvent = event[weekNum]
    if (!event || event.length === weekNum) {
      return []
    }
    event = [[], [], [], [], [], [], []]
    weekEvent?.forEach(v => {
      const dayNum = new Date(v.startTime).getDay()
      event[dayNum].push(v)
    })
    const newSorted = []
    let startNum = 0
    let rowNum = 0

    while (event?.flat().length > 0) {
      if (event[startNum]?.length === 0) {
        startNum++
        if (startNum > 6) {
          startNum = 0
          rowNum++
        }
        continue
      }
      // console.debug('있는 번호', weekNum, startNum, event[startNum])
      const firstEvent = event[startNum]?.shift()
      newSorted.push({ ...firstEvent, start: startNum, row: rowNum })

      for (let i = 0; i < firstEvent?.being ?? 0; i++) {
        rowColStackNum[rowColStackNum.length - 1][startNum + i]++
      }

      startNum += firstEvent?.being ?? 1
      if (startNum > 6) {
        startNum = 0
        rowNum++
      }
    }
    // console.debug('newSorted', newSorted)
    return newSorted
  }

  const getSortedShortEvent = (weekNum: number) => {
    const event = JSON.parse(JSON.stringify(monthlyEvents?.short)) // weekNum
    // console.debug('weekNum', weekNum, 'event', event)
    // console.debug('event', event[weekNum])
    if (!event || event.length === weekNum) {
      return []
    }
    return event.length !== 0
      ? event[weekNum].map((event, i) => {
          if (event.length === 0) {
            return []
          } else {
            return event.map((event, j) => ({ ...event, start: i, row: rowColStackNum[weekNum][i] + j }))
          }
        })
      : []
    // return event.map((week: IEvent[][], i: number) => {
    //   week.map(day => {
    //     console.debug(day)
    //     return day.length === 0
    //       ? day
    //       : day.map((event, j) => ({ ...event, start: i, row: rowColStackNum[weekNum][i] + j }))
    //   })
    // })
  }

  return (
    <S.Monthly>
      {/* 요일 */}
      <S.DayHeader className="day-header-wrapper">
        <li className="weekend sun">일</li>
        <li className="weekdays mon">월</li>
        <li className="weekdays tue">화</li>
        <li className="weekdays wed">수</li>
        <li className="weekdays thu">목</li>
        <li className="weekdays fri">금</li>
        <li className="weekend sat">토</li>
      </S.DayHeader>

      {/* 날짜 */}
      <S.Week className="week-wrapper">
        {monthlyDates
          // 1. 하루는 li로 렌터
          .map((date, i) => {
            // selectedDate: 현재 선택된 날짜
            // weekColor: 평일, 토요일, 일요일에 따른 색상 표시
            // ghost: 이전달, 다음달에 해당하는 날짜는 연하게 표시
            // current: 현재 선택된 날짜를 테두리로 표시
            // FIXME: type error
            const selectedDate = new Date(calendarInfo.selectedDate)
            const weekColor = i % 7 === 0 ? 'sun' : i % 7 === 6 ? 'sat' : ''
            const ghost = selectedDate.getMonth() !== date.getMonth() ? 'ghost' : ''
            const current = handleDate.isSameDate(selectedDate, date) ? 'current' : ''

            return (
              <li
                className={`weekend ${weekColor} ${ghost} ${current}`}
                key={`${date.getTime()} index_${i}`}
                onClick={() => {
                  setCalendarInfo({ ...calendarInfo, selectedDate: date })
                }}
              >
                {/* 오늘 날짜인 경우 두껍게 표시 */}
                {handleDate.isSameDate(today, date) ? <b>{date.getDate()}</b> : date.getDate()}

                {/* TODO: 일일 루틴 표시 */}
              </li>
            )
          })
          // 2. 일주일씩 묶어서
          .reduce(
            (acc: React.ReactElement[][], date) => {
              if (acc[acc.length - 1].length < 7) {
                acc[acc.length - 1].push(date)
              } else {
                acc.push([date])
              }
              return acc
            },
            [[]]
          )
          // 3. ul로 렌더
          .map((week, weekNum) => (
            <div key={`${calendarInfo.selectedDate}_${weekNum}`}>
              {/* 주간 날짜 렌더 */}
              <ul className="date-wrapper">
                {week}
                {/*{weekNum} /!* n주차 디버깅 확인용 *!/*/}
              </ul>

              {/* 주간 일정 렌더 */}
              <ul className="event-wrapper">
                {/* 4. 여러날 이어지는 일정 먼저 렌더 */}
                {getSortedLongEvent(weekNum).map((event, i) => {
                  // console.debug(`${weekNum}째주의 하루종일 일정 ${i}`, event)

                  return (
                    event && (
                      <li
                        key={`${event.title}${i}`}
                        className={`long-event ${event.isAllDay ? '' : 'long-time'}`}
                        style={{
                          // gridArea: gridRowStart / 시작일 / gridRowStart + 1 / 종료일
                          gridArea: `${event.row + 1} / ${event.start + 1} / ${event.row + 2} / ${event.start + 1 + (event.being ?? 0)}`,
                          ...(event.isAllDay
                            ? {
                                backgroundColor: theme[`s${event.color}`],
                              }
                            : {
                                backgroundColor: 'unset',
                                border: `solid 2px ${theme.grayLine}`,
                              }),
                        }}
                      >
                        <span>{event.title}</span>
                      </li>
                    )
                  )
                })}
                {/* 5. 하루중에 일어나는 일정 렌더 */}
                {getSortedShortEvent(weekNum).map((events: (IEvent & { row: number; start: number })[], i: number) => {
                  // console.debug(`${weekNum}째주의 ${i}요일 하루 내 일정`, events)
                  if (events && events.length !== 0) {
                    return events.map(event => (
                      <li
                        key={`${event.startTime}.${event.idx}(${weekNum}-${i})`}
                        style={{
                          gridColumnStart: event.start + 1,
                          gridRowStart: event.row + 1,
                        }}
                      >
                        <span>{event.title}</span>
                      </li>
                    ))
                  }
                })}
              </ul>
            </div>
          ))}
      </S.Week>
    </S.Monthly>
  )
}
