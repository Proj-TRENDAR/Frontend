import * as S from './style.ts'
import SeparationCountInput from '@components/common/input/SeparationCountInput'
import CheckDays from '@components/common/input/CheckDays'
import RecurringEndTime from '@components/common/input/RecurringEndTime'
import { ICreateEvent, IRecurring } from '@pages/EventCreate'
import { useEffect } from 'react'
import CheckDateOrWeek from '@components/common/input/CheckDateOrWeek'

interface Props {
  event: ICreateEvent
  setEvent: (event: ICreateEvent) => void
  recurringInitial: IRecurring
}
export default function RecurringDetailInput({ event, setEvent, recurringInitial }: Props) {
  const handleInitialRecurringDetail = (recurringType: string | null) => {
    // 반복 타입 설정에 따른 초기화는 여기서 모두 합니다..!
    const DayOfStartTime = event.startTime?.getDay()
    const commonInitial = {
      ...event,
      ...recurringInitial, // recurringDetail에 포함되는 값 모두 null로 변환(타입 변경시 초기화하기 위함)
      // 아래에서 recurringDetail에 포함되는 값 중 초기값이 필요한 것들
      separationCount: event.separationCount ?? 1,
      recurringEndTime: new Date('2099-12-31 23:59:59'), // '계속 반복'이 default
      maxNumOfOccurrances: null, // '계속 반복'이 default 이므로 null
    }

    switch (recurringType) {
      case 'D':
        return setEvent({
          ...commonInitial,
        })
      case 'W':
        return setEvent({
          ...commonInitial,
          ...{
            dayOfWeek: DayOfStartTime === undefined ? null : [DayOfStartTime],
          },
        })
      case 'M':
        if (event.startTime) {
          return setEvent({
            ...commonInitial,
            ...{
              dayOfMonth: [event.startTime?.getDay()],
            },
          })
        } else {
          return setEvent({
            ...commonInitial,
          })
        }
      case 'Y':
        return setEvent({
          ...commonInitial,
        })
      default:
        return setEvent(commonInitial)
    }
  }

  useEffect(() => {
    // 초기화
    handleInitialRecurringDetail(event.recurringType)
  }, [event.recurringType])

  useEffect(() => {
    // event.separationCount 가 있으면 초기화 된 것.
    if (event.separationCount && event.recurringType === 'W') {
      const DayOfStartTime = event.startTime?.getDay()
      setEvent({ ...event, dayOfWeek: DayOfStartTime === undefined ? null : [DayOfStartTime] })
    }
  }, [event.startTime])

  return (
    <S.Wrapper>
      <SeparationCountInput
        recurringType={event.recurringType}
        value={event.separationCount}
        setValue={(separationCount: number | null) => {
          setEvent({ ...event, separationCount: separationCount })
        }}
      />
      {event.recurringType === 'W' && !event.isAllDay && (
        // 주간반복 선택시
        <CheckDays
          dayOfWeek={event.dayOfWeek}
          setDayOfWeek={(days: number[] | null) => {
            setEvent({ ...event, dayOfWeek: days })
          }}
        />
      )}
      {event.recurringType === 'M' && (
        // 월간반복 선택시
        <CheckDateOrWeek
          startDate={event.startTime}
          dayOfMonth={event.dayOfMonth}
          weekOfMonth={event.weekOfMonth}
          setDateOrWeek={(dayOfMonth: number[] | null, weekOfMonth: number | null) => {
            setEvent({ ...event, dayOfMonth: dayOfMonth, weekOfMonth: weekOfMonth })
          }}
        />
      )}
      {event.recurringType === 'Y' && (
        // TODO: 연간반복 선택시 : [양력 00월00일 / 음력 00월00일 ] 옵션 노출
        <></>
      )}
      <RecurringEndTime
        startDate={event.startTime}
        endTime={event.endTime}
        recurringType={event.recurringType}
        maxNumOfOccurrances={event.maxNumOfOccurrances}
        recurringEndTime={event.recurringEndTime}
        setRecurringEndTime={(date: Date | null, maxNum: number | null) => {
          setEvent({ ...event, recurringEndTime: date, maxNumOfOccurrances: maxNum })
        }}
      />
    </S.Wrapper>
  )
}
