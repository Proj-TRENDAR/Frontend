import * as S from './style'
import Calendar from '@/utils/calendar'
import { useTheme } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai'
import HandleDate from '@/utils/calcDate'
import { IEvent } from '@/types'
import { getEventList } from '@/api/Event/eventApi.ts'

const MAX_NUM_OF_EVENT_VISIBLE = 3

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
        if (event.being !== null || event.isAllDay) {
          // FIXME: 하루종일인데 시작/종료 시간이 00:00:00으로 같으면 being이 null로 오고있어서
          //  조건에서 event.isAllDay를 추가해줌. 추후 being이 1로 온다면 조건에서 event.isAllDay를 제외해도됨.
          // being 조건은 남겨야함. 하루종일이 아닌 일정이어도 여러날 걸친 일정이 long에 포함되어야함.
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

      if (firstEvent?.being === null && firstEvent?.isAllDay) {
        // FIXME: 하루종일인데 being이 없는 경우
        //  - 하루종일로 설정한 경우 시작과 종료 시간이 00:00:00으로 같아서 being이 null로 계산되어 옴.
        //  - 그래서 이때는 해당 startNum에 ++만 해주면 됨.
        //  - 나중에 백에서 being을 1로 준다면 if문은 지워도됨
        // being은 남겨야함. 하루종일이 아닌 일정에도 여러날로 표시해야하는 경우가 있음
        rowColStackNum[rowColStackNum.length - 1][startNum]++
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

  // FIXME: 타입 수정 필요
  const getNumberOfWeekEvents = (long: any[], short: any[]) => {
    // console.debug('long', long)
    // console.debug('short', short)
    const longEvent = [0, 0, 0, 0, 0, 0, 0]
    long.forEach(event => {
      const startDay = new Date(event.startTime).getDay()
      const endDay = new Date(event.endTime).getDay()
      for (let i = startDay; i <= endDay; i++) {
        longEvent[i]++
      }
    })
    return longEvent.map((number, i) => {
      return number + short[i]?.length ?? 0
    })
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
          .map((week, weekNum) => {
            const longEvent = getSortedLongEvent(weekNum)
            const shortEvent = getSortedShortEvent(weekNum)
            const numberOfWeekEvents = getNumberOfWeekEvents(longEvent, shortEvent)

            return (
              <div key={`${calendarInfo.selectedDate}_${weekNum}`}>
                {/* 주간 날짜 렌더 */}
                <ul className="date-wrapper">
                  {week}
                  {/*{weekNum} /!* n주차 디버깅 확인용 *!/*/}
                </ul>

                {/* 주간 일정 렌더 */}
                <ul className="event-wrapper">
                  {/* 4. 여러날 이어지는 일정 먼저 렌더 */}
                  {longEvent.map((event, i) => {
                    // console.debug(`${weekNum}째주의 하루종일 일정 ${i}`, event)
                    if (event.row < MAX_NUM_OF_EVENT_VISIBLE) {
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
                                    border: `solid 2px ${theme[`s${event.color}`]}`,
                                  }),
                            }}
                          >
                            <span>{event.title}</span>
                          </li>
                        )
                      )
                    } else if (event.row === MAX_NUM_OF_EVENT_VISIBLE) {
                      return (
                        <HideEventList
                          key={`${weekNum}-${event.start}-${i}`}
                          gridColumnStart={event.start + 1}
                          numberOfEvents={numberOfWeekEvents[event.start] - MAX_NUM_OF_EVENT_VISIBLE}
                        />
                      )
                    }
                  })}
                  {/* 5. 하루중에 일어나는 일정 렌더 */}
                  {shortEvent.map((events: (IEvent & { row: number; start: number })[], i: number) => {
                    // console.debug(`${weekNum}째주의 ${i}요일 하루 내 일정`, events)
                    if (events && events.length !== 0) {
                      return events.map(event => {
                        if (event.row < MAX_NUM_OF_EVENT_VISIBLE) {
                          return (
                            <S.EventDotList
                              color={theme[`s${event.color}`]}
                              key={`${event.startTime}.${event.idx}(${weekNum}-${i})`}
                              style={{
                                gridColumnStart: event.start + 1,
                                gridRowStart: event.row + 1,
                              }}
                            >
                              <span>{event.title}</span>
                            </S.EventDotList>
                          )
                        } else if (event.row === MAX_NUM_OF_EVENT_VISIBLE) {
                          return (
                            <HideEventList
                              key={`${weekNum}-${event.start}-${i}`}
                              gridColumnStart={event.start + 1}
                              numberOfEvents={numberOfWeekEvents[event.start] - MAX_NUM_OF_EVENT_VISIBLE}
                            />
                          )
                        }
                      })
                    }
                  })}
                </ul>
              </div>
            )
          })}
      </S.Week>
    </S.Monthly>
  )
}

function HideEventList({ gridColumnStart, numberOfEvents }: { gridColumnStart: number; numberOfEvents: number }) {
  const theme = useTheme()
  // FIXME: 하루 일정수를 구하기 어려워서 우선 '더 많은 일정이 있음'으로 표시함
  return (
    <li
      style={{
        gridColumnStart: gridColumnStart,
        gridRowStart: MAX_NUM_OF_EVENT_VISIBLE + 1,
        pointerEvents: 'none',
        color: theme.textLight,
      }}
    >
      ...외 일정 {numberOfEvents}건
    </li>
  )
}
