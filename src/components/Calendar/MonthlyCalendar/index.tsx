import * as S from './style'
import Calendar from '@/utils/calendar'
import { useTheme } from 'styled-components'
import React from 'react'
import { calendarInfoAtom } from '@/store'
import { useAtom } from 'jotai'

// FIXME: api 연동하고 리팩토링 하겠습니다..!!
interface ILongScheduleDummy {
  key: string
  title: string
  color: number
  being: number
  isAllDay: boolean
}

interface IShortScheduleDummy {
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

  // FIXME: 현재 더미로 임시 출력해둠. api 연동 후 삭제해야함
  const longScheduleDummy: ILongScheduleDummy[][] = [
    [], // 1주차
    [
      { key: 'schedule1', title: '일정더미1(월)', color: 1, being: 3, isAllDay: true },
      { key: 'schedule2', title: '일정더미2(월)', color: 3, being: 2, isAllDay: true },
    ],
    [],
    [{ key: 'schedule3', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [{ key: 'schedule4', title: '일정더미1(목)', color: 2, being: 2, isAllDay: true }],
    [{ key: 'schedule5', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [{ key: 'schedule6', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 2주차
    [{ key: 'schedule7', title: '일정더미1(월)', color: 6, being: 1, isAllDay: true }],
    [],
    [],
    [{ key: 'schedule8', title: '일정더미1(목)', color: 2, being: 3, isAllDay: true }],
    [{ key: 'schedule9', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [],
    [], // 3주차
    [],
    [],
    [{ key: 'schedule10', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [],
    [{ key: 'schedule11', title: '일정더미1(금)', color: 4, being: 2, isAllDay: true }],
    [{ key: 'schedule12', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 4주차
    [],
    [],
    [],
    [],
    [],
    [],
    [], // 5주차
    [{ key: 'schedule13', title: '일정더미1(월)', color: 1, being: 2, isAllDay: true }],
    [],
    [{ key: 'schedule14', title: '일정더미1(수)', color: 7, being: 1, isAllDay: true }],
    [],
    [],
    [{ key: 'schedule15', title: '일정더미1(토)', color: 5, being: 1, isAllDay: true }],
    [], // 6주차
    [],
    [],
    [],
    [],
    [],
    [],
  ]
  const shortScheduleDummy: IShortScheduleDummy[][] = [
    [{ key: 'schedule1', title: '하루일정더미1(일)', isAllDay: false }], // 1주차
    [{ key: 'schedule2', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule3', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule4', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule5', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule6', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule7', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule8', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'schedule9', title: '하루일정더미1(일)', isAllDay: false }], // 2주차
    [{ key: 'schedule10', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule11', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule12', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule13', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule14', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule15', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule16', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'schedule17', title: '하루일정더미1(일)', isAllDay: false }], // 3주차
    [{ key: 'schedule18', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule19', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule20', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule21', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule22', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule23', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule24', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'schedule25', title: '하루일정더미1(일)', isAllDay: false }], // 4주차
    [{ key: 'schedule26', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule27', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule28', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule29', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule30', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule31', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule32', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'schedule33', title: '하루일정더미1(일)', isAllDay: false }], // 5주차
    [{ key: 'schedule34', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule35', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule36', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule37', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule38', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule39', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule40', title: '하루일정더미1(금)', isAllDay: false }],
    [],
    [{ key: 'schedule41', title: '하루일정더미1(일)', isAllDay: false }], // 6주차
    [{ key: 'schedule42', title: '하루일정더미1(월)', isAllDay: false }],
    [
      { key: 'schedule43', title: '하루일정더미1(화)', isAllDay: false },
      { key: 'schedule44', title: '하루일정더미1(화)', isAllDay: false },
    ],
    [
      { key: 'schedule45', title: '하루일정더미1(수)', isAllDay: false },
      { key: 'schedule46', title: '하루일정더미1(수)', isAllDay: false },
    ],
    [{ key: 'schedule47', title: '하루일정더미1(목)', isAllDay: false }],
    [{ key: 'schedule48', title: '하루일정더미1(금)', isAllDay: false }],
    [],
  ]

  // rowColStackNum: 각 하루 칸 안에서 하루종일 일정이 차지하는 줄의 수를 저장합니다.
  // 이 값을 참고하여 '하루 내 일정'을 '하루종일 일정' 아래줄에 렌더합니다.
  const rowColStackNum: number[][] = []

  const getSortedLongScheduleDummy = (weekNum: number) => {
    rowColStackNum.push([0, 0, 0, 0, 0, 0, 0])
    const schedule = JSON.parse(JSON.stringify(longScheduleDummy.slice(weekNum * 7, weekNum * 7 + 7)))
    const newSorted = []
    let startNum = 0
    let rowNum = 0

    while (schedule.flat().length > 0) {
      if (schedule[startNum].length === 0) {
        startNum++
        if (startNum > 6) {
          startNum = 0
          rowNum++
        }
        continue
      }
      const firstSchedule = schedule[startNum].shift()
      newSorted.push({ ...firstSchedule, start: startNum, row: rowNum })

      for (let i = 0; i < firstSchedule.being ?? 0; i++) {
        rowColStackNum[rowColStackNum.length - 1][startNum + i]++
      }

      startNum += firstSchedule.being
      if (startNum > 6) {
        startNum = 0
        rowNum++
      }
    }

    return newSorted
  }

  const getSortedShortScheduleDummy = (weekNum: number) => {
    const schedule = JSON.parse(JSON.stringify(shortScheduleDummy.slice(weekNum * 7, weekNum * 7 + 7)))

    return schedule.map((daySchedules: IShortScheduleDummy[], i: number) =>
      daySchedules.length === 0
        ? daySchedules
        : daySchedules.map((schedule, j) => ({ ...schedule, start: i, row: rowColStackNum[weekNum][i] + j }))
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
            const selectedDate = new Date(calendarInfo.selectedDate)
            const weekColor = i % 7 === 0 ? 'sun' : i % 7 === 6 ? 'sat' : ''
            const ghost = selectedDate.getMonth() !== date.getMonth() ? 'ghost' : ''
            const current =
              selectedDate.getFullYear() === date.getFullYear() &&
              selectedDate.getMonth() === date.getMonth() &&
              selectedDate.getDate() === date.getDate()
                ? 'current'
                : ''

            return (
              <li
                className={`weekend ${weekColor} ${ghost} ${current}`}
                key={date.getTime()}
                onClick={() => {
                  setCalendarInfo({ selectedDate: date })
                }}
              >
                {date.getDate()}
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
              <ul className="schedule-wrapper">
                {/* 4. 여러날 이어지는 일정 먼저 렌더 */}
                {getSortedLongScheduleDummy(weekNum).map((schedule, i) => {
                  console.debug(`${weekNum}째주의 하루종일 일정 ${i}`, schedule)

                  return (
                    schedule && (
                      <li
                        key={`${schedule.title}${i}`}
                        className="long-schedule"
                        style={{
                          // gridArea: gridRowStart / 시작일 / gridRowStart + 1 / 종료일
                          gridArea: `${schedule.row + 1} / ${schedule.start + 1} / ${schedule.row + 2} / ${schedule.start + 1 + (schedule.being ?? 0)}`,
                          backgroundColor: theme[`s${schedule.color}`],
                        }}
                      >
                        <span>{schedule.title}</span>
                      </li>
                    )
                  )
                })}
                {/* 5. 하루중에 일어나는 일정 렌더 */}
                {getSortedShortScheduleDummy(weekNum).map(
                  (schedules: (IShortScheduleDummy & { row: number; start: number })[], i: number) => {
                    console.debug(`${weekNum}째주의 ${i}요일 하루 내 일정`, schedules)

                    return schedules.map(schedule => (
                      <li
                        key={`${schedule.key}${i}`}
                        style={{
                          gridColumnStart: schedule.start + 1,
                          gridRowStart: schedule.row + 1,
                        }}
                      >
                        <span>{schedule.title}</span>
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
