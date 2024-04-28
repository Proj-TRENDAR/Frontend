import * as S from './style'
import Calendar from '@/utils/calendar'
import { useTheme } from 'styled-components'
import React from 'react'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai'
import HandleDate from '@/utils/calcDate'

// FIXME: api 연동하고 리팩토링 하겠습니다..!!
interface ILongEventDummy {
  key: string
  title: string
  color: number
  being: number
  isAllDay: boolean
}

interface IShortEventDummy {
  key: string
  title: string
  isAllDay: boolean
}

export default function MonthlyCalendar() {
  const [calendarInfo, setCalendarInfo] = useAtom(calendarInfoAtom)
  const calendar = new Calendar()
  const { prevMonthDates, thisMonthDates, nextMonthDates } = calendar.getMonthDates(new Date(calendarInfo.selectedDate))
  const monthlyDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]
  const theme = useTheme()
  const today = new Date()
  const handleDate = new HandleDate()

  // FIXME: 현재 더미로 임시 출력해둠. api 연동 후 삭제해야함
  const longEventDummy: ILongEventDummy[][] = [
    [], // 1주차
    [
      { key: 'event1', title: '일정더미1(월)', color: 1, being: 3, isAllDay: true },
      { key: 'event2', title: '일정더미2(월)', color: 3, being: 2, isAllDay: true },
    ],
    [],
    [{ key: 'event3', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [{ key: 'event4', title: '일정더미1(목)', color: 2, being: 2, isAllDay: true }],
    [{ key: 'event5', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [{ key: 'event6', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 2주차
    [{ key: 'event7', title: '일정더미1(월)', color: 6, being: 1, isAllDay: true }],
    [],
    [],
    [{ key: 'event8', title: '일정더미1(목)', color: 2, being: 3, isAllDay: true }],
    [{ key: 'event9', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [],
    [], // 3주차
    [],
    [],
    [{ key: 'event10', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [],
    [{ key: 'event11', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [{ key: 'event12', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 4주차
    [],
    [],
    [],
    [],
    [],
    [],
    [], // 5주차
    [{ key: 'event13', title: '일정더미1(월)', color: 1, being: 2, isAllDay: true }],
    [],
    [{ key: 'event14', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [],
    [],
    [{ key: 'event15', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 6주차
    [],
    [],
    [],
    [],
    [],
    [],
  ]
  const shortEventDummy: IShortEventDummy[][] = [
    [{ key: 'event1', title: '하루일정더미1(일)', isAllDay: false }], // 1주차
    [{ key: 'event2', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event3', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event4', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event5', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event6', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event7', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event8', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'event9', title: '하루일정더미1(일)', isAllDay: false }], // 2주차
    [{ key: 'event10', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event11', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event12', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event13', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event14', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event15', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event16', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'event17', title: '하루일정더미1(일)', isAllDay: false }], // 3주차
    [{ key: 'event18', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event19', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event20', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event21', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event22', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event23', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event24', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'event25', title: '하루일정더미1(일)', isAllDay: false }], // 4주차
    [{ key: 'event26', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event27', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event28', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event29', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event30', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event31', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event32', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'event33', title: '하루일정더미1(일)', isAllDay: false }], // 5주차
    [{ key: 'event34', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event35', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event36', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event37', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event38', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event39', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event40', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'event41', title: '하루일정더미1(일)', isAllDay: false }], // 6주차
    [{ key: 'event42', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'event43', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'event44', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'event45', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'event46', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'event47', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'event48', title: '하루일정더미1(금)', isAllDay: false }],
    [],
  ]

  // rowColStackNum: 각 하루 칸 안에서 하루종일 일정이 차지하는 줄의 수를 저장합니다.
  // 이 값을 참고하여 '하루 내 일정'을 '하루종일 일정' 아래줄에 렌더합니다.
  const rowColStackNum: number[][] = []

  const getSortedLongEventDummy = (weekNum: number) => {
    rowColStackNum.push([0, 0, 0, 0, 0, 0, 0])
    const event = JSON.parse(JSON.stringify(longEventDummy.slice(weekNum * 7, weekNum * 7 + 7)))
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

  const getSortedShortEventDummy = (weekNum: number) => {
    const event = JSON.parse(JSON.stringify(shortEventDummy.slice(weekNum * 7, weekNum * 7 + 7)))

    return event.map((dayEvents: IShortEventDummy[], i: number) =>
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
                  setCalendarInfo({ selectedDate: date })
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
                {getSortedLongEventDummy(weekNum).map((event, i) => {
                  console.debug(`${weekNum}째주의 하루종일 일정 ${i}`, event)

                  return (
                    event && (
                      <li
                        key={`${event.title}${i}`}
                        className="long-event"
                        style={{
                          // gridArea: gridRowStart / 시작일 / gridRowStart + 1 / 종료일
                          gridArea: `${event.row + 1} / ${event.start + 1} / ${event.row + 2} / ${event.start + 1 + (event.being ?? 0)}`,
                          backgroundColor: theme[`s${event.color}`],
                        }}
                      >
                        <span>{event.title}</span>
                      </li>
                    )
                  )
                })}
                {/* 5. 하루중에 일어나는 일정 렌더 */}
                {getSortedShortEventDummy(weekNum).map(
                  (events: (IShortEventDummy & { row: number; start: number })[], i: number) => {
                    console.debug(`${weekNum}째주의 ${i}요일 하루 내 일정`, events)

                    return events.map(event => (
                      <li
                        key={`${event.key}${i}`}
                        style={{
                          gridColumnStart: event.start + 1,
                          gridRowStart: event.row + 1,
                        }}
                      >
                        <span>{event.title}</span>
                      </li>
                    ))
                  }
                )}
              </ul>
            </div>
          ))}
      </S.Week>
    </S.Monthly>
  )
}
