import * as S from './style'
import Calendar from '@/utils/calendar'
import { useTheme } from 'styled-components'
import React, { useEffect, useState } from 'react'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai'
import HandleDate from '@/utils/calcDate'
import { IEvent } from '@/types'

export default function MonthlyCalendar() {
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)
  const [monthlyEvents, setMonthlyEvents] = useState<{ long: IEvent[][]; short: IEvent[][] }>({
    long: [],
    short: [],
  })
  const [prevSelectedDate, setPrevSelectedDate] = useState<Date>()
  const calendar = new Calendar()
  const { prevMonthDates, thisMonthDates, nextMonthDates } = calendar.getMonthDates(new Date(calendarInfo.selectedDate))
  const monthlyDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
  const theme = useTheme()
  const today = new Date()
  const handleDate = new HandleDate()

  useEffect(() => {
    // 다른 달로 날짜 변경 시, 그 달의 이벤트들을 가져와서 jotai에 업데이트해줌
    if (calendarInfo.selectedDate.getMonth() !== prevSelectedDate?.getMonth()) {
      setPrevSelectedDate(calendarInfo.selectedDate) // 날짜 변경시 비교를 위해 이전 날짜를 저장함(월만 비교하기 떄문에 월이 바뀔때만 저장함)
      // TODO:
      //  1. event API로 한달 데이터를 가져옴. (현재 더미로 테스트중)
      //  2. 데이터를 jotai로 관리함

      // 더미는 4/1~11까지의 더미임
      const EventListDummy: IEvent[][] = [
        [], // 1주차
        [
          {
            idx: 'event1',
            title: '하루종일(월~수)',
            startTime: '2024-03-29 00:00:00',
            endTime: '2024-04-01 00:00:00',
            isAllDay: true,
            being: 3,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event2',
            title: '하루이상(월~화)',
            startTime: '2024-03-29 23:20:00',
            endTime: '2024-03-30 01:00:00',
            isAllDay: false,
            being: 2,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루(월)',
            startTime: '2024-03-29 11:20:00',
            endTime: '2024-03-29 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event1',
            title: '하루1(화)',
            startTime: '2024-03-30 11:20:00',
            endTime: '2024-03-30 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루2(화)',
            startTime: '2024-03-30 15:00:00',
            endTime: '2024-03-30 17:00:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event3',
            title: '하루종일(수)',
            startTime: '2024-04-01 00:00:00',
            endTime: '2024-04-01 00:00:00',
            isAllDay: true,
            being: 1,
            color: 7,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루1(수)',
            startTime: '2024-04-01 11:20:00',
            endTime: '2024-04-01 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event4',
            title: '하루종일(목~금)',
            startTime: '2024-04-02 00:00:00',
            endTime: '2024-04-03 00:00:00',
            isAllDay: true,
            being: 2,
            color: 2,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루1(목)',
            startTime: '2024-04-02 11:20:00',
            endTime: '2024-04-02 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event5',
            title: '하루이상(금~토)',
            startTime: '2024-04-03 19:20:00',
            endTime: '2024-04-04 04:00:00',
            isAllDay: false,
            being: 2,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루1(금)',
            startTime: '2024-04-03 11:20:00',
            endTime: '2024-04-03 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event6',
            title: '하루종일(토~일)',
            startTime: '2024-04-04 00:00:00',
            endTime: '2024-04-05 00:00:00',
            isAllDay: true,
            being: 1,
            color: 5,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          // 2주차
          {
            idx: 'event6',
            title: '하루종일(토~일)',
            startTime: '2024-04-04 00:00:00',
            endTime: '2024-04-05 00:00:00',
            isAllDay: true,
            being: 1,
            color: 5,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루1(일)',
            startTime: '2024-04-05 11:20:00',
            endTime: '2024-04-05 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event6',
            title: '하루종일(월)',
            startTime: '2024-04-06 00:00:00',
            endTime: '2024-04-06 00:00:00',
            isAllDay: true,
            being: 1,
            color: 5,
            place: '장소1',
            description: '메모1',
          },
        ],
        [
          {
            idx: 'event1',
            title: '하루1(화)',
            startTime: '2024-04-07 11:20:00',
            endTime: '2024-04-07 11:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
          {
            idx: 'event1',
            title: '하루1(화)',
            startTime: '2024-04-07 14:20:00',
            endTime: '2024-04-07 14:50:00',
            isAllDay: false,
            being: null,
            color: 1,
            place: '장소1',
            description: '메모1',
          },
        ],
        [],
        [
          {
            idx: 'event8',
            title: '일정더미1(목~일)',
            startTime: '2024-04-09 00:00:00',
            endTime: '2024-04-11 00:00:00',
            isAllDay: true,
            being: 3,
            color: 2,
            place: '장소1',
            description: '메모1',
          },
        ],
        [],
        [],
      ]
      setCalendarInfo({ ...calendarInfo, selectedMonthInfo: EventListDummy })
    }
  }, [calendarInfo.selectedDate])

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

    setMonthlyEvents({
      long: longEvent,
      short: shortEvent,
    })
  }, [calendarInfo.selectedMonthInfo])

  // rowColStackNum: 각 하루 칸 안에서 하루종일 일정이 차지하는 줄의 수를 저장합니다.
  // 이 값을 참고하여 '하루 내 일정'을 '하루종일 일정' 아래줄에 렌더합니다.
  const rowColStackNum: number[][] = []

  const getSortedLongEvent = (weekNum: number) => {
    rowColStackNum.push([0, 0, 0, 0, 0, 0, 0])
    const event = JSON.parse(JSON.stringify(monthlyEvents.long.slice(weekNum * 7, weekNum * 7 + 7)))
    const newSorted = []
    let startNum = 0
    let rowNum = 0

    while (event.flat().length > 0) {
      if (event[startNum].length === 0) {
        startNum++
        if (startNum > 6) {
          startNum = 0
          rowNum++
        }
        continue
      }
      const firstEvent = event[startNum].shift()
      newSorted.push({ ...firstEvent, start: startNum, row: rowNum })

      for (let i = 0; i < firstEvent.being ?? 0; i++) {
        rowColStackNum[rowColStackNum.length - 1][startNum + i]++
      }

      startNum += firstEvent.being
      if (startNum > 6) {
        startNum = 0
        rowNum++
      }
    }

    return newSorted
  }

  const getSortedShortEvent = (weekNum: number) => {
    const event = JSON.parse(JSON.stringify(monthlyEvents.short.slice(weekNum * 7, weekNum * 7 + 7)))

    return event.map((dayEvents: IEvent[], i: number) =>
      dayEvents.length === 0
        ? dayEvents
        : dayEvents.map((event, j) => ({ ...event, start: i, row: rowColStackNum[weekNum][i] + j }))
    )
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
            const selectedDate = new Date(calendarInfo.selectedDate)
            const weekColor = i % 7 === 0 ? 'sun' : i % 7 === 6 ? 'sat' : ''
            const ghost = selectedDate.getMonth() !== date.getMonth() ? 'ghost' : ''
            const current = handleDate.isSameDate(selectedDate, date) ? 'current' : ''

            return (
              <li
                className={`weekend ${weekColor} ${ghost} ${current}`}
                key={date.getTime()}
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
            <div key={weekNum}>
              {/* 주간 날짜 렌더 */}
              <ul className="date-wrapper">{week}</ul>

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

                  return events.map(event => (
                    <li
                      key={`${event.idx}${i}`}
                      style={{
                        gridColumnStart: event.start + 1,
                        gridRowStart: event.row + 1,
                      }}
                    >
                      <span>{event.title}</span>
                    </li>
                  ))
                })}
              </ul>
            </div>
          ))}
      </S.Week>
    </S.Monthly>
  )
}
