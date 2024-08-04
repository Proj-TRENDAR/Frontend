import * as S from './style.ts'
import DatePicker from 'react-datepicker'
import { registerLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale/ko'
registerLocale('ko', ko)

interface Props {
  value: Date | null
  setValue: (value: Date | null) => void
  minDate?: Date
  maxDate?: Date
  showTimeSelect?: boolean
}

export default function DatePickerInput({
  value,
  setValue,
  minDate = undefined,
  maxDate = undefined,
  showTimeSelect = true,
}: Props) {
  return (
    <S.DatePickerWrapper className="datepicker-wrapper" showTimeSelect={showTimeSelect}>
      <DatePicker
        locale="ko"
        selected={value}
        onSelect={date => {
          setValue(date)
        }}
        onChange={date => {
          setValue(date)
        }}
        showTimeSelect={showTimeSelect}
        dateFormat={showTimeSelect ? 'yyyy년 M월 d일(E) aa h:mm' : 'yyyy년 M월 d일(E)'}
        timeIntervals={10}
        minDate={minDate}
        maxDate={maxDate}
      />
    </S.DatePickerWrapper>
  )
}
