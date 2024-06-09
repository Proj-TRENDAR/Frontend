import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import Check from '@assets/image/icon/event/ic-check.svg?react'

interface Props {
  dayOfWeek: number[] | null
  setDayOfWeek: (days: number[] | null) => void
}
export default function CheckDays({ dayOfWeek, setDayOfWeek }: Props) {
  const DAYS_Of_WEEK = ['일', '월', '화', '수', '목', '금', '토']
  const handleDayButton = (dayNum: number) => {
    if (dayOfWeek?.includes(dayNum)) {
      setDayOfWeek(dayOfWeek.filter(v => v !== dayNum))
    } else {
      setDayOfWeek(dayOfWeek === null ? [dayNum] : [...dayOfWeek, dayNum].sort((a, b) => a - b))
    }
  }

  return (
    <S.Wrapper>
      <IconInputWrapper icon={<Check />} $backgroundColor={'transparent'}>
        <div className="days-wrapper">
          {DAYS_Of_WEEK.map((day, i) => {
            return (
              <button
                key={day}
                className={`option keep-repeat ${dayOfWeek?.includes(i) ? 'current' : ''}`}
                onClick={() => {
                  handleDayButton(i)
                }}
              >
                {day}
              </button>
            )
          })}
        </div>
      </IconInputWrapper>
    </S.Wrapper>
  )
}
