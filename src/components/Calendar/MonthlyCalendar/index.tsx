import * as S from './style'
import Calendar from '@/utils/calendar'

export default function MonthlyCalendar() {
  const thisDate = new Date()
  const calendar = new Calendar()
  const { prevMonthDates, thisMonthDates, nextMonthDates } = calendar.getMonthDates(thisDate)
  const monthlyDates = [...prevMonthDates, ...thisMonthDates, ...nextMonthDates]

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
            if (i % 7 === 0) {
              return (
                <li
                  className={`weekend sun ${thisDate.getMonth() !== date.getMonth() ? 'ghost' : ''}`}
                  key={date.getTime()}
                >
                  {date.getDate()}
                </li>
              )
            }
            if (i % 7 === 6) {
              return (
                <li
                  className={`weekend sat ${thisDate.getMonth() !== date.getMonth() ? 'ghost' : ''}`}
                  key={date.getTime()}
                >
                  {date.getDate()}
                </li>
              )
            }
            return (
              <li className={`weekdays ${thisDate.getMonth() !== date.getMonth() ? 'ghost' : ''}`} key={date.getTime()}>
                {date.getDate()}
              </li>
            )
          })
          // 2. 일주일씩 묶어서
          .reduce(
            (acc: any[][], date) => {
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
              <ul className="date-wrapper">{week}</ul>
              {/* FIXME: 아래 schedule-wrapper는 더미임!
               */}
              <ul className="schedule-wrapper">
                {/* 4. 여러날 이어지는 일정 먼저 렌더 */}
                {[
                  [
                    { key: 'schedule1', title: '일정더미1(월)', being: 2 },
                    { key: 'schedule2', title: '일정더미2(월)', being: 4 },
                  ],
                  [],
                  [],
                  [],
                  [{ key: 'schedule1', title: '일정더미1(금)', being: 2 }],
                  [],
                  [],
                ].map((schedules, dayNum) =>
                  schedules.map((schedule, i) => {
                    // gridArea: gridRowStart / 시작일 / gridRowStart + 1 / 종료일

                    // TODO: 날짜별 최소 gridRowStart 위치를 가지고 있어야 다른 일정과 안겹치게 그릴 수 있을것같음..
                    // 각 날짜 몇번째줄이 사용중인지 저장해야함. -> 같은 줄에 여러일정이 겹치지 않기 위함
                    // 날짜별로 종료일을 따로 저장해놔야가능함. -> 아래 4번 렌더시 일정과 겹치지 않기 위함
                    return (
                      <li
                        key={`${schedule.title}${i}`}
                        className="long-schedule"
                        style={{ gridArea: `${i + 1} / ${dayNum + 1} / ${i + 2} / ${dayNum + 1 + schedule.being}` }}
                      >
                        {schedule.title}
                      </li>
                    )
                  })
                )}
                {/* 4. 하루중에 일어나는 일정 렌더 */}
                <li style={{ gridColumnStart: 1 }}>하루일정더미1(월)</li>
                <li style={{ gridColumnStart: 2 }}>하루일정더미1(화)</li>
                <li style={{ gridColumnStart: 2 }}>하루일정더미2(화)</li>
                <li style={{ gridColumnStart: 3, gridRowStart: 3 }}>하루일정더미1(수)</li>
                <li style={{ gridColumnStart: 3 }}>하루일정더미2(수)</li>
                <li style={{ gridColumnStart: 4, gridRowStart: 3 }}>하루일정더미1(목)</li>
                <li style={{ gridColumnStart: 5, gridRowStart: 2 }}>하루일정더미1(금)</li>
                <li style={{ gridColumnStart: 7, gridRowStart: 1 }}>하루일정더미1(일)</li>
              </ul>
            </div>
          ))}
      </S.Week>
    </S.Monthly>
  )
}
