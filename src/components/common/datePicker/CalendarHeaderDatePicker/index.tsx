import * as S from './style'

import Arrow from '@assets/image/icon/ic-arrow_down.svg?react'
import DoubleArrow from '@assets/image/icon/ic-arrow_down--double.svg?react'
import { useEffect, useState } from 'react'
import dateFormat from '@/utils/dateFormat'
import HandleDate from '@/utils/calcDate'
import useToggleOpenWithExternalClick from '@/Hooks/useToggleOpenWithExternalClick'
import IconButton from '@components/common/button/IconButton'

export interface Props {
  date: Date
  setDate: (date: Date) => void
  $fullwidth?: boolean
  size?: 'large' | 'medium'
  width?: number
}

export default function CalendarHeaderDatePicker({ date, setDate, $fullwidth = false, size = 'medium', width }: Props) {
  const handleDate = new HandleDate()
  const [isActive, setIsActive, isExternalClickDetected] = useToggleOpenWithExternalClick()
  const [text, setText] = useState('')

  const handleCenterButton = () => {
    setIsActive(!isActive)
  }

  const handleCalcYear = (calc: number) => {
    setDate(handleDate.calcYear(date, calc))
  }
  const handleCalcMonth = (calc: number) => {
    setDate(handleDate.calcMonth(date, calc))
  }
  const handleMonth = (month: number) => {
    setDate(handleDate.changeMonth(date, month))
  }

  useEffect(() => {
    isActive ? setText(dateFormat(new Date(date), 'YYYY년')) : setText(dateFormat(new Date(date), 'YYYY년 MM월'))
  }, [date, isActive])

  return (
    <>
      <S.DatePicker
        $isActive={isActive}
        onClick={(e: { currentTarget: HTMLElement }) => {
          isExternalClickDetected(e.currentTarget)
        }}
      >
        <S.headerButtonWrapper $isActive={isActive}>
          <IconButton
            className={'more prev-button'}
            onClick={() => {
              handleCalcYear(-10)
            }}
          >
            <DoubleArrow />
          </IconButton>
          <IconButton
            className={'prev-button'}
            onClick={() => {
              isActive ? handleCalcYear(-1) : handleCalcMonth(-1)
            }}
          >
            <Arrow />
          </IconButton>
          <S.CenterButton
            $isActive={isActive}
            $fullwidth={$fullwidth}
            size={size}
            width={width}
            onClick={handleCenterButton}
          >
            {text}
          </S.CenterButton>
          <IconButton
            className={'next-button'}
            onClick={() => {
              isActive ? handleCalcYear(1) : handleCalcMonth(1)
            }}
          >
            <Arrow />
          </IconButton>
          <IconButton
            className={'more next-button'}
            onClick={() => {
              handleCalcYear(10)
            }}
          >
            <DoubleArrow />
          </IconButton>
        </S.headerButtonWrapper>
        <S.BodyButtonWrapper $isActive={isActive}>
          <div>
            {Array.from({ length: 12 }, (_, i) => `${i + 1}월`).map((month, i) => (
              <S.MonthButton
                key={i}
                className={`${new Date(date).getMonth() === i ? 'current' : ''}`}
                onClick={() => {
                  handleMonth(i)
                }}
              >
                {month}
              </S.MonthButton>
            ))}
          </div>
        </S.BodyButtonWrapper>
      </S.DatePicker>
    </>
  )
}
