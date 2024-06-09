import * as S from './style.ts'
import IconInputWrapper from '@components/common/input/IconInputWrapper'
import Check from '@assets/image/icon/event/ic-check.svg?react'
import dateFormat from '@/utils/dateFormat.ts'

interface Props {
  startDate: Date | null
  dayOfMonth: number[] | null // 월간 특정 일 설정
  weekOfMonth: number | null // 월간 특정 주 설정
  setDateOrWeek: (dayOfMonth: number[] | null, weekOfMonth: number | null) => void
}
export default function CheckDateOrWeek({ startDate, dayOfMonth, weekOfMonth, setDateOrWeek }: Props) {
  console.debug(startDate)
  return (
    <S.Wrapper>
      <IconInputWrapper icon={<Check />} $backgroundColor={'transparent'}>
        <button
          className={`option keep-repeat ${dayOfMonth !== null ? 'current' : ''}`}
          onClick={() => {
            if (startDate) {
              setDateOrWeek([startDate?.getDate()], null)
            }
          }}
        >
          {startDate ? `${startDate.getDate()}일 반복` : '상단에서 날짜를 선택해주세요'}
        </button>
        <button
          className={`option keep-repeat ${weekOfMonth !== null ? 'current' : ''}`}
          onClick={() => {
            if (startDate) {
              setDateOrWeek(null, Number(dateFormat(new Date(startDate), 'W')))
            }
          }}
        >
          {startDate ? dateFormat(new Date(startDate), 'W째주 d요일') : '상단에서 날짜를 선택해주세요'}
        </button>
      </IconInputWrapper>
    </S.Wrapper>
  )
}
